[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [mdns/export](../modules/mdns_export.md) / MdnsBroadcaster

# Class: MdnsBroadcaster

[mdns/export](../modules/mdns_export.md).MdnsBroadcaster

This class is handing MDNS Announcements for multiple instances/devices

## Table of contents

### Constructors

- [constructor](mdns_export.MdnsBroadcaster.md#constructor)

### Properties

- [activeCommissioningAnnouncements](mdns_export.MdnsBroadcaster.md#activecommissioningannouncements)
- [activeOperationalAnnouncements](mdns_export.MdnsBroadcaster.md#activeoperationalannouncements)
- [enableIpv4](mdns_export.MdnsBroadcaster.md#enableipv4)
- [mdnsServer](mdns_export.MdnsBroadcaster.md#mdnsserver)
- [network](mdns_export.MdnsBroadcaster.md#network)

### Methods

- [announce](mdns_export.MdnsBroadcaster.md#announce)
- [close](mdns_export.MdnsBroadcaster.md#close)
- [expireAllAnnouncements](mdns_export.MdnsBroadcaster.md#expireallannouncements)
- [expireCommissioningAnnouncement](mdns_export.MdnsBroadcaster.md#expirecommissioningannouncement)
- [expireFabricAnnouncement](mdns_export.MdnsBroadcaster.md#expirefabricannouncement)
- [setCommissionMode](mdns_export.MdnsBroadcaster.md#setcommissionmode)
- [setCommissionerInfo](mdns_export.MdnsBroadcaster.md#setcommissionerinfo)
- [setFabrics](mdns_export.MdnsBroadcaster.md#setfabrics)
- [validatePairingInstructions](mdns_export.MdnsBroadcaster.md#validatepairinginstructions)
- [create](mdns_export.MdnsBroadcaster.md#create)

## Constructors

### constructor

• **new MdnsBroadcaster**(`mdnsServer`, `enableIpv4?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mdnsServer` | [`MdnsServer`](mdns_export.MdnsServer.md) |
| `enableIpv4?` | `boolean` |

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:66

## Properties

### activeCommissioningAnnouncements

• `Private` `Readonly` **activeCommissioningAnnouncements**: `Set`<`number`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:63

___

### activeOperationalAnnouncements

• `Private` `Readonly` **activeOperationalAnnouncements**: `Map`<`number`, [`FabricIndex`](../modules/datatype_export.md#fabricindex)[]\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:64

___

### enableIpv4

• `Private` `Optional` `Readonly` **enableIpv4**: `boolean`

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:68

___

### mdnsServer

• `Private` `Readonly` **mdnsServer**: [`MdnsServer`](mdns_export.MdnsServer.md)

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:67

___

### network

• `Private` `Readonly` **network**: [`Network`](net_export.Network.md)

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:62

## Methods

### announce

▸ **announce**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:316

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:345

___

### expireAllAnnouncements

▸ **expireAllAnnouncements**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:334

___

### expireCommissioningAnnouncement

▸ **expireCommissioningAnnouncement**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:327

___

### expireFabricAnnouncement

▸ **expireFabricAnnouncement**(`announcementPort`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcementPort` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:320

___

### setCommissionMode

▸ **setCommissionMode**(`announcedNetPort`, `mode`, `«destructured»`): `Promise`<`void`\>

Set the Broadcaster data to announce a device ready for commissioning in a special mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `mode` | `number` |
| `«destructured»` | [`CommissioningModeInstanceData`](../modules/common_export.md#commissioningmodeinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:96

___

### setCommissionerInfo

▸ **setCommissionerInfo**(`announcedNetPort`, `«destructured»`): `Promise`<`void`\>

Set the Broadcaster data to announce a Commissioner (aka Commissioner discovery)

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `«destructured»` | [`CommissionerInstanceData`](../modules/common_export.md#commissionerinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:255

___

### setFabrics

▸ **setFabrics**(`announcedNetPort`, `fabrics`, `«destructured»?`): `Promise`<`void`\>

Set the Broadcaster Data to announce a device for operative discovery (aka "already paired")

#### Parameters

| Name | Type |
| :------ | :------ |
| `announcedNetPort` | `number` |
| `fabrics` | [`Fabric`](fabric_export.Fabric.md)[] |
| `«destructured»` | [`OperationalInstanceData`](../modules/common_export.md#operationalinstancedata) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:185

___

### validatePairingInstructions

▸ **validatePairingInstructions**(`pairingHint`, `pairingInstructions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pairingHint` | [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<{ `administrator`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `customInstruction`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `deviceManual`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `powerCycle`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButton`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButton`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag-1) ; `settingsMenuOnNode`: [`BitFlag`](../modules/schema_export.md#bitflag-1)  }\> |
| `pairingInstructions` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:71

___

### create

▸ `Static` **create**(`options?`): `Promise`<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.enableIpv4?` | `boolean` |
| `options.multicastInterface?` | `string` |

#### Returns

`Promise`<[`MdnsBroadcaster`](mdns_export.MdnsBroadcaster.md)\>

#### Defined in

packages/matter.js/src/mdns/MdnsBroadcaster.ts:54
