[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / PaseServer

# Class: PaseServer

[<internal>](../modules/internal_.md).PaseServer

## Implements

- [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](internal_.PaseServer.md#constructor)

### Properties

- [L](internal_.PaseServer.md#l)
- [handlePairingRequest](internal_.PaseServer.md#handlepairingrequest)
- [pairingErrors](internal_.PaseServer.md#pairingerrors)
- [pairingTimer](internal_.PaseServer.md#pairingtimer)
- [pbkdfParameters](internal_.PaseServer.md#pbkdfparameters)
- [w0](internal_.PaseServer.md#w0)

### Methods

- [cancelPairing](internal_.PaseServer.md#cancelpairing)
- [getId](internal_.PaseServer.md#getid)
- [onNewExchange](internal_.PaseServer.md#onnewexchange)
- [fromPin](internal_.PaseServer.md#frompin)
- [fromVerificationValue](internal_.PaseServer.md#fromverificationvalue)

## Constructors

### constructor

• **new PaseServer**(`w0`, `L`, `pbkdfParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w0` | `BN` |
| `L` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/internal_.PbkdfParameters.md) |

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:24

## Properties

### L

• `Private` `Readonly` **L**: `any`

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:18

___

### handlePairingRequest

• `Private` **handlePairingRequest**: `any`

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:27

___

### pairingErrors

• `Private` **pairingErrors**: `any`

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:21

___

### pairingTimer

• `Private` **pairingTimer**: `any`

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:20

___

### pbkdfParameters

• `Private` `Optional` `Readonly` **pbkdfParameters**: `any`

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:19

___

### w0

• `Private` `Readonly` **w0**: `any`

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:17

## Methods

### cancelPairing

▸ **cancelPairing**(`messenger`, `sendError?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messenger` | [`PaseServerMessenger`](internal_.PaseServerMessenger.md) |
| `sendError?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:28

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/internal_.ProtocolHandler.md).[getId](../interfaces/internal_.ProtocolHandler.md#getid)

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:25

___

### onNewExchange

▸ **onNewExchange**(`exchange`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/internal_.ProtocolHandler.md).[onNewExchange](../interfaces/internal_.ProtocolHandler.md#onnewexchange)

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:26

___

### fromPin

▸ `Static` **fromPin**(`setupPinCode`, `pbkdfParameters`): `Promise`<[`PaseServer`](internal_.PaseServer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setupPinCode` | `number` |
| `pbkdfParameters` | [`PbkdfParameters`](../interfaces/internal_.PbkdfParameters.md) |

#### Returns

`Promise`<[`PaseServer`](internal_.PaseServer.md)\>

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:22

___

### fromVerificationValue

▸ `Static` **fromVerificationValue**(`verificationValue`, `pbkdfParameters?`): [`PaseServer`](internal_.PaseServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationValue` | `Uint8Array` |
| `pbkdfParameters?` | [`PbkdfParameters`](../interfaces/internal_.PbkdfParameters.md) |

#### Returns

[`PaseServer`](internal_.PaseServer.md)

#### Defined in

matter.js/dist/cjs/session/pase/PaseServer.d.ts:23
