/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../log/Logger.js";
import { ByteArray } from "../util/ByteArray.js";
import { Cache } from "../util/Cache.js";
import { isIPv4 } from "../util/Ip.js";
import { Network } from "./Network.js";
import { UdpChannel } from "./UdpChannel.js";

const logger = Logger.get("UdpMulticastServer");

export interface UdpMulticastServerOptions {
    listeningPort: number;
    broadcastAddressIpv4?: string;
    broadcastAddressIpv6: string;
    netInterface?: string;
}

export class UdpMulticastServer {
    static async create({
        netInterface,
        broadcastAddressIpv4,
        broadcastAddressIpv6,
        listeningPort,
    }: UdpMulticastServerOptions) {
        const network = Network.get();
        return new UdpMulticastServer(
            network,
            broadcastAddressIpv4,
            broadcastAddressIpv6,
            listeningPort,
            broadcastAddressIpv4 === undefined
                ? undefined
                : await network.createUdpChannel({
                      type: "udp4",
                      netInterface,
                      listeningPort,
                      membershipAddresses: [broadcastAddressIpv4],
                  }),
            await network.createUdpChannel({
                type: "udp6",
                netInterface,
                listeningPort,
                membershipAddresses: [broadcastAddressIpv6],
            }),
            netInterface,
        );
    }

    private readonly broadcastChannels = new Cache<Promise<UdpChannel>>(
        (netInterface, iPv4) => this.createBroadcastChannel(netInterface, iPv4),
        5 * 60 * 1000 /* 5mn */,
        async (_netInterface, channel) => (await channel).close(),
    );

    private constructor(
        private readonly network: Network,
        private readonly broadcastAddressIpv4: string | undefined,
        private readonly broadcastAddressIpv6: string,
        private readonly broadcastPort: number,
        private readonly serverIpv4: UdpChannel | undefined,
        private readonly serverIpv6: UdpChannel,
        private readonly netInterface: string | undefined,
    ) {}

    onMessage(listener: (message: ByteArray, peerAddress: string, netInterface: string) => void) {
        this.serverIpv4?.onData((netInterface, peerAddress, _port, message) =>
            listener(message, peerAddress, netInterface),
        );
        this.serverIpv6.onData((netInterface, peerAddress, _port, message) =>
            listener(message, peerAddress, netInterface),
        );
    }

    async send(message: ByteArray, netInterface?: string, uniCastTarget?: string) {
        netInterface = netInterface ?? this.netInterface;

        // When we know the network interface and the unicast target, we can send unicast
        if (uniCastTarget !== undefined && netInterface !== undefined) {
            try {
                await (
                    await this.broadcastChannels.get(netInterface, isIPv4(uniCastTarget))
                ).send(uniCastTarget, this.broadcastPort, message);
            } catch (error) {
                logger.info(`${netInterface} ${uniCastTarget}: ${(error as Error).message}`);
            }
        } else {
            const netInterfaces = netInterface !== undefined ? [netInterface] : this.network.getNetInterfaces();
            await Promise.all(
                netInterfaces.map(async netInterface => {
                    const { ips } = this.network.getIpMac(netInterface) ?? { ips: [] };
                    await Promise.all(
                        ips.map(async ip => {
                            const iPv4 = isIPv4(ip);
                            const broadcastTarget = iPv4 ? this.broadcastAddressIpv4 : this.broadcastAddressIpv6;
                            if (broadcastTarget == undefined) {
                                // IPv4 but disabled, so just resolve
                                return;
                            }
                            try {
                                await (
                                    await this.broadcastChannels.get(netInterface, iPv4)
                                ).send(broadcastTarget, this.broadcastPort, message);
                            } catch (error) {
                                logger.info(`${netInterface}: ${(error as Error).message}`);
                            }
                        }),
                    );
                }),
            );
        }
    }

    private async createBroadcastChannel(netInterface: string, iPv4: string): Promise<UdpChannel> {
        return await this.network.createUdpChannel({
            type: iPv4 ? "udp4" : "udp6",
            listeningPort: this.broadcastPort,
            netInterface,
        });
    }

    async close() {
        this.serverIpv4?.close();
        this.serverIpv6.close();
        await this.broadcastChannels.close();
    }
}
