[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / Fabric

# Class: Fabric

[fabric/export](../modules/fabric_export.md).Fabric

## Table of contents

### Constructors

- [constructor](fabric_export.Fabric.md#constructor)

### Properties

- [fabricId](fabric_export.Fabric.md#fabricid)
- [fabricIndex](fabric_export.Fabric.md#fabricindex)
- [identityProtectionKey](fabric_export.Fabric.md#identityprotectionkey)
- [intermediateCACert](fabric_export.Fabric.md#intermediatecacert)
- [keyPair](fabric_export.Fabric.md#keypair)
- [label](fabric_export.Fabric.md#label)
- [nodeId](fabric_export.Fabric.md#nodeid)
- [operationalCert](fabric_export.Fabric.md#operationalcert)
- [operationalId](fabric_export.Fabric.md#operationalid)
- [operationalIdentityProtectionKey](fabric_export.Fabric.md#operationalidentityprotectionkey)
- [persistCallback](fabric_export.Fabric.md#persistcallback)
- [removeCallbacks](fabric_export.Fabric.md#removecallbacks)
- [rootCert](fabric_export.Fabric.md#rootcert)
- [rootNodeId](fabric_export.Fabric.md#rootnodeid)
- [rootPublicKey](fabric_export.Fabric.md#rootpublickey)
- [rootVendorId](fabric_export.Fabric.md#rootvendorid)
- [scopedClusterData](fabric_export.Fabric.md#scopedclusterdata)
- [sessions](fabric_export.Fabric.md#sessions)

### Methods

- [addRemoveCallback](fabric_export.Fabric.md#addremovecallback)
- [addSession](fabric_export.Fabric.md#addsession)
- [deleteRemoveCallback](fabric_export.Fabric.md#deleteremovecallback)
- [deleteScopedClusterData](fabric_export.Fabric.md#deletescopedclusterdata)
- [deleteScopedClusterDataValue](fabric_export.Fabric.md#deletescopedclusterdatavalue)
- [getDestinationId](fabric_export.Fabric.md#getdestinationid)
- [getExternalInformation](fabric_export.Fabric.md#getexternalinformation)
- [getPublicKey](fabric_export.Fabric.md#getpublickey)
- [getScopedClusterDataKeys](fabric_export.Fabric.md#getscopedclusterdatakeys)
- [getScopedClusterDataValue](fabric_export.Fabric.md#getscopedclusterdatavalue)
- [hasScopedClusterDataValue](fabric_export.Fabric.md#hasscopedclusterdatavalue)
- [matchesFabricIdAndRootPublicKey](fabric_export.Fabric.md#matchesfabricidandrootpublickey)
- [persist](fabric_export.Fabric.md#persist)
- [remove](fabric_export.Fabric.md#remove)
- [removeSession](fabric_export.Fabric.md#removesession)
- [setLabel](fabric_export.Fabric.md#setlabel)
- [setPersistCallback](fabric_export.Fabric.md#setpersistcallback)
- [setScopedClusterDataValue](fabric_export.Fabric.md#setscopedclusterdatavalue)
- [sign](fabric_export.Fabric.md#sign)
- [toStorageObject](fabric_export.Fabric.md#tostorageobject)
- [verifyCredentials](fabric_export.Fabric.md#verifycredentials)
- [createFromStorageObject](fabric_export.Fabric.md#createfromstorageobject)

## Constructors

### constructor

• **new Fabric**(`fabricIndex`, `fabricId`, `nodeId`, `rootNodeId`, `operationalId`, `rootPublicKey`, `keyPair`, `rootVendorId`, `rootCert`, `identityProtectionKey`, `operationalIdentityProtectionKey`, `intermediateCACert`, `operationalCert`, `label`, `scopedClusterData?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `operationalId` | `Uint8Array` |
| `rootPublicKey` | `Uint8Array` |
| `keyPair` | [`Key`](../modules/crypto_export.md#key) |
| `rootVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `rootCert` | `Uint8Array` |
| `identityProtectionKey` | `Uint8Array` |
| `operationalIdentityProtectionKey` | `Uint8Array` |
| `intermediateCACert` | `undefined` \| `Uint8Array` |
| `operationalCert` | `Uint8Array` |
| `label` | `string` |
| `scopedClusterData?` | `Map`<`number`, `Map`<`string`, [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes)\>\> |

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:57

## Properties

### fabricId

• `Readonly` **fabricId**: [`FabricId`](../modules/datatype_export.md#fabricid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:59

___

### fabricIndex

• `Readonly` **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:58

___

### identityProtectionKey

• `Readonly` **identityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:67

___

### intermediateCACert

• `Readonly` **intermediateCACert**: `undefined` \| `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:69

___

### keyPair

• `Private` `Readonly` **keyPair**: [`Key`](../modules/crypto_export.md#key)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:64

___

### label

• **label**: `string`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:71

___

### nodeId

• `Readonly` **nodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:60

___

### operationalCert

• `Readonly` **operationalCert**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:70

___

### operationalId

• `Readonly` **operationalId**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:62

___

### operationalIdentityProtectionKey

• `Readonly` **operationalIdentityProtectionKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:68

___

### persistCallback

• `Private` **persistCallback**: `undefined` \| () => `void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:55

___

### removeCallbacks

• `Private` **removeCallbacks**: () => `void`[]

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:54

___

### rootCert

• `Readonly` **rootCert**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:66

___

### rootNodeId

• `Readonly` **rootNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:61

___

### rootPublicKey

• `Readonly` **rootPublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:63

___

### rootVendorId

• `Readonly` **rootVendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:65

___

### scopedClusterData

• `Private` `Readonly` **scopedClusterData**: `Map`<`number`, `any`\>

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:52

___

### sessions

• `Private` `Readonly` **sessions**: [`SecureSession`](session_export.SecureSession.md)<`any`\>[]

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:50

## Methods

### addRemoveCallback

▸ **addRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:158

___

### addSession

▸ **addSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:147

___

### deleteRemoveCallback

▸ **deleteRemoveCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:162

___

### deleteScopedClusterData

▸ **deleteScopedClusterData**(`cluster`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:212

___

### deleteScopedClusterDataValue

▸ **deleteScopedClusterDataValue**(`cluster`, `clusterDataKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:200

___

### getDestinationId

▸ **getDestinationId**(`nodeId`, `random`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `random` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:138

___

### getExternalInformation

▸ **getExternalInformation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `label` | `string` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `rootNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `rootVendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:224

___

### getPublicKey

▸ **getPublicKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:121

___

### getScopedClusterDataKeys

▸ **getScopedClusterDataKeys**(`cluster`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |

#### Returns

`string`[]

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:217

___

### getScopedClusterDataValue

▸ **getScopedClusterDataValue**<`T`\>(`cluster`, `clusterDataKey`): `undefined` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`undefined` \| `T`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:184

___

### hasScopedClusterDataValue

▸ **hasScopedClusterDataValue**(`cluster`, `clusterDataKey`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |

#### Returns

`any`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:208

___

### matchesFabricIdAndRootPublicKey

▸ **matchesFabricIdAndRootPublicKey**(`fabricId`, `rootPublicKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](../modules/datatype_export.md#fabricid) |
| `rootPublicKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:134

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:180

___

### remove

▸ **remove**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:173

___

### removeSession

▸ **removeSession**(`session`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`SecureSession`](session_export.SecureSession.md)<`any`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:151

___

### setLabel

▸ **setLabel**(`label`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:116

___

### setPersistCallback

▸ **setPersistCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:169

___

### setScopedClusterDataValue

▸ **setScopedClusterDataValue**<`T`\>(`cluster`, `clusterDataKey`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`any`, `any`, `any`, `any`, `any`\> |
| `clusterDataKey` | `string` |
| `value` | `T` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:192

___

### sign

▸ **sign**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:125

___

### toStorageObject

▸ **toStorageObject**(): [`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Returns

[`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:77

___

### verifyCredentials

▸ **verifyCredentials**(`_operationalCert`, `_intermediateCACert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_operationalCert` | `Uint8Array` |
| `_intermediateCACert` | `undefined` \| `Uint8Array` |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:129

___

### createFromStorageObject

▸ `Static` **createFromStorageObject**(`fabricObject`): [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricObject` | [`FabricJsonObject`](../modules/fabric_export.md#fabricjsonobject) |

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

packages/matter.js/src/fabric/Fabric.ts:97
