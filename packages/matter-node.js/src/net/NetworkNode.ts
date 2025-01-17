/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Network, NetworkError, UdpChannel, UdpChannelOptions } from "@project-chip/matter.js/net";
import { Cache, isIPv6, onSameNetwork } from "@project-chip/matter.js/util";

import { NetworkInterfaceInfo, networkInterfaces } from "os";
import { UdpChannelNode } from "./UdpChannelNode.js";

export class NetworkNode extends Network {
    static getMulticastInterface(netInterface: string, ipv4: boolean) {
        const netInterfaceInfo = networkInterfaces()[netInterface];
        if (netInterfaceInfo === undefined) throw new NetworkError(`Unknown interface: ${netInterface}`);
        if (ipv4) {
            for (const { address, family } of netInterfaceInfo) {
                if (family === "IPv4") {
                    return address;
                }
            }
            throw new NetworkError(`No IPv4 addresses on interface: ${netInterface}`);
        } else {
            const multicastInterface = this.getMulticastInterfaceIpv6(netInterface, netInterfaceInfo);
            if (multicastInterface === undefined) {
                throw new NetworkError(`No IPv6 addresses on interface: ${netInterface}`);
            }
            return multicastInterface;
        }
    }

    static getMembershipMulticastInterfaces(ipv4: boolean): (string | undefined)[] {
        if (ipv4) {
            return [undefined];
        } else {
            return Object.entries(networkInterfaces()).flatMap(([netInterface, netInterfaceInfo]) => {
                if (netInterfaceInfo === undefined) return [];
                const multicastInterface = this.getMulticastInterfaceIpv6(netInterface, netInterfaceInfo);
                return multicastInterface === undefined ? [] : [multicastInterface];
            });
        }
    }

    static getNetInterfaceForIp(ip: string) {
        // Finding the local interface on the same interface is complex and won't change
        // So let's cache the results for 5mn
        return this.netInterfaces.get(ip);
    }

    private static readonly netInterfaces = new Cache<string | undefined>(
        (ip: string) => this.getNetInterfaceForIpInternal(ip),
        5 * 60 * 1000 /* 5mn */,
    );

    override async close() {
        await NetworkNode.netInterfaces.close();
    }

    private static getNetInterfaceForIpInternal(ip: string) {
        if (ip.includes("%")) {
            // IPv6 address with scope
            return ip.split("%")[1];
        } else {
            const interfaces = networkInterfaces();
            for (const name in interfaces) {
                const netInterfaces = interfaces[name] as NetworkInterfaceInfo[];
                for (const { address, netmask } of netInterfaces) {
                    if (onSameNetwork(ip, address, netmask)) {
                        return name;
                    }
                }
            }
            if (isIPv6(ip)) {
                if (ip.startsWith("fd")) {
                    // IPv6 address is an ULA
                    return ""; // consider it as being ok and using the "Default interface"
                }
            }
            return undefined;
        }
    }

    private static getMulticastInterfaceIpv6(
        netInterface: string,
        netInterfaceInfo: NetworkInterfaceInfo[],
    ): string | undefined {
        if (process.platform !== "win32") {
            return `::%${netInterface}`;
        }
        for (const { address, family, scopeid } of netInterfaceInfo) {
            if (family === "IPv6" && address.startsWith("fe80::")) {
                return `::%${scopeid}`;
            }
        }
        return undefined;
    }

    getNetInterfaces(): string[] {
        const result = new Array<string>();
        const interfaces = networkInterfaces();
        for (const name in interfaces) {
            const netInterfaces = interfaces[name] as NetworkInterfaceInfo[];
            if (netInterfaces.length === 0) continue;
            if (netInterfaces[0].internal) continue;
            result.push(name);
        }
        return result;
    }

    getIpMac(netInterface: string): { mac: string; ips: string[] } | undefined {
        const netInterfaceInfo = networkInterfaces()[netInterface];
        if (netInterfaceInfo === undefined) return undefined;
        return { mac: netInterfaceInfo[0].mac, ips: netInterfaceInfo.map(({ address }) => address) };
    }

    override createUdpChannel(options: UdpChannelOptions): Promise<UdpChannel> {
        return UdpChannelNode.create(options);
    }
}
