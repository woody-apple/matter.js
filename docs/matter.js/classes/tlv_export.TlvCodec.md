[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [tlv/export](../modules/tlv_export.md) / TlvCodec

# Class: TlvCodec

[tlv/export](../modules/tlv_export.md).TlvCodec

## Table of contents

### Constructors

- [constructor](tlv_export.TlvCodec.md#constructor)

### Methods

- [getIntTlvLength](tlv_export.TlvCodec.md#getinttlvlength)
- [getPrimitiveByteLength](tlv_export.TlvCodec.md#getprimitivebytelength)
- [getTagByteLength](tlv_export.TlvCodec.md#gettagbytelength)
- [getUIntByteLength](tlv_export.TlvCodec.md#getuintbytelength)
- [getUIntTlvLength](tlv_export.TlvCodec.md#getuinttlvlength)
- [parseTypeLength](tlv_export.TlvCodec.md#parsetypelength)
- [readPrimitive](tlv_export.TlvCodec.md#readprimitive)
- [readTag](tlv_export.TlvCodec.md#readtag)
- [readTagType](tlv_export.TlvCodec.md#readtagtype)
- [writePrimitive](tlv_export.TlvCodec.md#writeprimitive)
- [writeTag](tlv_export.TlvCodec.md#writetag)
- [writeUInt](tlv_export.TlvCodec.md#writeuint)

## Constructors

### constructor

• **new TlvCodec**()

## Methods

### getIntTlvLength

▸ `Static` **getIntTlvLength**(`value`): `TlvLength`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`TlvLength`

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:129

___

### getPrimitiveByteLength

▸ `Static` **getPrimitiveByteLength**<`T`\>(`typeLength`, `value`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`number`

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:422

___

### getTagByteLength

▸ `Static` **getTagByteLength**(`tag?`): ``1`` \| ``2`` \| ``3`` \| ``5`` \| ``7`` \| ``9``

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

``1`` \| ``2`` \| ``3`` \| ``5`` \| ``7`` \| ``9``

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:342

___

### getUIntByteLength

▸ `Static` `Private` **getUIntByteLength**(`length`): ``1`` \| ``2`` \| ``4`` \| ``8``

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | [`TlvLength`](../enums/tlv_export.TlvLength.md) |

#### Returns

``1`` \| ``2`` \| ``4`` \| ``8``

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:457

___

### getUIntTlvLength

▸ `Static` **getUIntTlvLength**(`value`): `TlvLength`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| `bigint` |

#### Returns

`TlvLength`

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:117

___

### parseTypeLength

▸ `Static` `Private` **parseTypeLength**(`typeLength`): [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength)

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeLength` | `number` |

#### Returns

[`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength)

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:179

___

### readPrimitive

▸ `Static` **readPrimitive**<`T`, `V`\>(`reader`, `typeLength`): `V`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `V` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |

#### Returns

`V`

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:206

___

### readTag

▸ `Static` `Private` **readTag**(`reader`, `tagControl`): `undefined` \| [`TlvTag`](../modules/tlv_export.md#tlvtag)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `tagControl` | [`TagControl`](../enums/export._internal_.TagControl.md) |

#### Returns

`undefined` \| [`TlvTag`](../modules/tlv_export.md#tlvtag)

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:159

___

### readTagType

▸ `Static` **readTagType**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |
| `typeLength` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.7

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:154

___

### writePrimitive

▸ `Static` **writePrimitive**<`T`\>(`writer`, `typeLength`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLength` | `T` |
| `value` | [`TlvToPrimitive`](../modules/tlv_export.md#tlvtoprimitive)[`T`[``"type"``]] |

#### Returns

`void`

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:370

___

### writeTag

▸ `Static` **writeTag**(`writer`, `typeLengthValue`, `tag?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `typeLengthValue` | [`TlvTypeLength`](../modules/tlv_export.md#tlvtypelength) |
| `tag?` | [`TlvTag`](../modules/tlv_export.md#tlvtag) |

#### Returns

`void`

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md) § A.7 & A.8

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:292

___

### writeUInt

▸ `Static` `Private` **writeUInt**(`writer`, `length`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `writer` | [`DataWriter`](util_export.DataWriter.md)<[`Little`](../enums/util_export.Endian.md#little)\> |
| `length` | [`TlvLength`](../enums/tlv_export.TlvLength.md) |
| `value` | `number` \| `bigint` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/tlv/TlvCodec.ts:444
