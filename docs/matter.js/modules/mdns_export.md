[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / mdns/export

# Module: mdns/export

## Table of contents

### Enumerations

- [AnnouncementType](../enums/mdns_export.AnnouncementType.md)

### Classes

- [MdnsBroadcaster](../classes/mdns_export.MdnsBroadcaster.md)
- [MdnsScanner](../classes/mdns_export.MdnsScanner.md)
- [MdnsServer](../classes/mdns_export.MdnsServer.md)

### Variables

- [MATTER\_COMMISSIONER\_SERVICE\_QNAME](mdns_export.md#matter_commissioner_service_qname)
- [MATTER\_COMMISSION\_SERVICE\_QNAME](mdns_export.md#matter_commission_service_qname)
- [MATTER\_SERVICE\_QNAME](mdns_export.md#matter_service_qname)
- [MDNS\_BROADCAST\_IPV4](mdns_export.md#mdns_broadcast_ipv4)
- [MDNS\_BROADCAST\_IPV6](mdns_export.md#mdns_broadcast_ipv6)
- [MDNS\_BROADCAST\_PORT](mdns_export.md#mdns_broadcast_port)
- [SERVICE\_DISCOVERY\_QNAME](mdns_export.md#service_discovery_qname)

### Functions

- [getCommissioningModeQname](mdns_export.md#getcommissioningmodeqname)
- [getDeviceInstanceQname](mdns_export.md#getdeviceinstanceqname)
- [getDeviceMatterQname](mdns_export.md#getdevicematterqname)
- [getDeviceTypeQname](mdns_export.md#getdevicetypeqname)
- [getFabricQname](mdns_export.md#getfabricqname)
- [getLongDiscriminatorQname](mdns_export.md#getlongdiscriminatorqname)
- [getShortDiscriminatorQname](mdns_export.md#getshortdiscriminatorqname)
- [getVendorQname](mdns_export.md#getvendorqname)

## Variables

### MATTER\_COMMISSIONER\_SERVICE\_QNAME

• `Const` **MATTER\_COMMISSIONER\_SERVICE\_QNAME**: ``"_matterd._udp.local"``

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:11

___

### MATTER\_COMMISSION\_SERVICE\_QNAME

• `Const` **MATTER\_COMMISSION\_SERVICE\_QNAME**: ``"_matterc._udp.local"``

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:10

___

### MATTER\_SERVICE\_QNAME

• `Const` **MATTER\_SERVICE\_QNAME**: ``"_matter._tcp.local"``

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:12

___

### MDNS\_BROADCAST\_IPV4

• `Const` **MDNS\_BROADCAST\_IPV4**: ``"224.0.0.251"``

#### Defined in

packages/matter.js/src/mdns/MdnsServer.ts:26

___

### MDNS\_BROADCAST\_IPV6

• `Const` **MDNS\_BROADCAST\_IPV6**: ``"ff02::fb"``

#### Defined in

packages/matter.js/src/mdns/MdnsServer.ts:27

___

### MDNS\_BROADCAST\_PORT

• `Const` **MDNS\_BROADCAST\_PORT**: ``5353``

#### Defined in

packages/matter.js/src/mdns/MdnsServer.ts:28

___

### SERVICE\_DISCOVERY\_QNAME

• `Const` **SERVICE\_DISCOVERY\_QNAME**: ``"_services._dns-sd._udp.local"``

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:9

## Functions

### getCommissioningModeQname

▸ **getCommissioningModeQname**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:23

___

### getDeviceInstanceQname

▸ **getDeviceInstanceQname**(`instanceId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceId` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:24

___

### getDeviceMatterQname

▸ **getDeviceMatterQname**(`operationalIdString`, `nodeIdString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalIdString` | `string` |
| `nodeIdString` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:15

___

### getDeviceTypeQname

▸ **getDeviceTypeQname**(`deviceType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceType` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:18

___

### getFabricQname

▸ **getFabricQname**(`operationalIdString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalIdString` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:14

___

### getLongDiscriminatorQname

▸ **getLongDiscriminatorQname**(`longDiscriminator`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `longDiscriminator` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:21

___

### getShortDiscriminatorQname

▸ **getShortDiscriminatorQname**(`shortDiscriminator`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortDiscriminator` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:19

___

### getVendorQname

▸ **getVendorQname**(`vendorId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](datatype_export.md#vendorid) |

#### Returns

`string`

#### Defined in

packages/matter.js/src/mdns/MdnsConsts.ts:17
