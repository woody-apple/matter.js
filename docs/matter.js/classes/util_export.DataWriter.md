[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / DataWriter

# Class: DataWriter<E\>

[util/export](../modules/util_export.md).DataWriter

Writer that auto-increments its offset after each write.

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Endian`](../enums/util_export.Endian.md) |

## Table of contents

### Constructors

- [constructor](util_export.DataWriter.md#constructor)

### Properties

- [chunks](util_export.DataWriter.md#chunks)
- [length](util_export.DataWriter.md#length)
- [littleEndian](util_export.DataWriter.md#littleendian)

### Methods

- [toByteArray](util_export.DataWriter.md#tobytearray)
- [writeByteArray](util_export.DataWriter.md#writebytearray)
- [writeDouble](util_export.DataWriter.md#writedouble)
- [writeFloat](util_export.DataWriter.md#writefloat)
- [writeInt16](util_export.DataWriter.md#writeint16)
- [writeInt32](util_export.DataWriter.md#writeint32)
- [writeInt64](util_export.DataWriter.md#writeint64)
- [writeInt8](util_export.DataWriter.md#writeint8)
- [writeUInt16](util_export.DataWriter.md#writeuint16)
- [writeUInt32](util_export.DataWriter.md#writeuint32)
- [writeUInt64](util_export.DataWriter.md#writeuint64)
- [writeUInt8](util_export.DataWriter.md#writeuint8)

## Constructors

### constructor

• **new DataWriter**<`E`\>(`endian`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Endian`](../enums/util_export.Endian.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian` | `E` |

#### Defined in

packages/matter.js/src/util/DataWriter.ts:17

## Properties

### chunks

• `Private` `Readonly` **chunks**: `Uint8Array`[]

#### Defined in

packages/matter.js/src/util/DataWriter.ts:15

___

### length

• `Private` **length**: `number` = `0`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:14

___

### littleEndian

• `Private` `Readonly` **littleEndian**: `boolean`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:13

## Methods

### toByteArray

▸ **toByteArray**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:94

___

### writeByteArray

▸ **writeByteArray**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:89

___

### writeDouble

▸ **writeDouble**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:82

___

### writeFloat

▸ **writeFloat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:75

___

### writeInt16

▸ **writeInt16**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:54

___

### writeInt32

▸ **writeInt32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:61

___

### writeInt64

▸ **writeInt64**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:68

___

### writeInt8

▸ **writeInt8**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:47

___

### writeUInt16

▸ **writeUInt16**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:26

___

### writeUInt32

▸ **writeUInt32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:33

___

### writeUInt64

▸ **writeUInt64**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:40

___

### writeUInt8

▸ **writeUInt8**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/util/DataWriter.ts:21
