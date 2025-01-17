[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/export

# Module: protocol/export

## Table of contents

### Classes

- [ChannelManager](../classes/protocol_export.ChannelManager.md)
- [CommissioningError](../classes/protocol_export.CommissioningError.md)
- [ControllerCommissioner](../classes/protocol_export.ControllerCommissioner.md)
- [ExchangeCounter](../classes/protocol_export.ExchangeCounter.md)
- [ExchangeManager](../classes/protocol_export.ExchangeManager.md)
- [ExchangeProvider](../classes/protocol_export.ExchangeProvider.md)
- [MessageChannel](../classes/protocol_export.MessageChannel.md)
- [MessageCounter](../classes/protocol_export.MessageCounter.md)
- [MessageExchange](../classes/protocol_export.MessageExchange.md)
- [NoChannelError](../classes/protocol_export.NoChannelError.md)
- [RetransmissionLimitReachedError](../classes/protocol_export.RetransmissionLimitReachedError.md)
- [UnexpectedMessageError](../classes/protocol_export.UnexpectedMessageError.md)

### Interfaces

- [ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md)

### Type Aliases

- [CommissioningOptions](protocol_export.md#commissioningoptions)
- [ExchangeSendOptions](protocol_export.md#exchangesendoptions)

## Type Aliases

### CommissioningOptions

Ƭ **CommissioningOptions**: `Object`

User specific options for the Commissioning process

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adminVendorId?` | `number` |
| `regulatoryCountryCode` | `string` |
| `regulatoryLocation` | [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md) |
| `threadNetwork?` | { `networkName`: `string` ; `operationalDataset`: `string`  } |
| `threadNetwork.networkName` | `string` |
| `threadNetwork.operationalDataset` | `string` |
| `wifiNetwork?` | { `wifiCredentials`: `string` ; `wifiSsid`: `string`  } |
| `wifiNetwork.wifiCredentials` | `string` |
| `wifiNetwork.wifiSsid` | `string` |

#### Defined in

packages/matter.js/src/protocol/ControllerCommissioner.ts:39

___

### ExchangeSendOptions

Ƭ **ExchangeSendOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectAckOnly?` | `boolean` | The response to this send should be an ack only and no StatusResponse or such. If a StatusResponse is returned then this is handled as error. |
| `minimumResponseTimeoutMs?` | `number` | Define a minimum Response Timeout. This setting only increases the response timeout! The minimum four resubmissions are always done regardless of what is specified here. The logic will check if the timeout is reached after each resubmission, so it is not checked exact at the given timeout. |
| `requiresAck?` | `boolean` | Allows to specify if the send message requires to be acknowledged by the receiver or not. |

#### Defined in

packages/matter.js/src/protocol/MessageExchange.ts:36
