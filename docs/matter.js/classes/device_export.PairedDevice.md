[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / PairedDevice

# Class: PairedDevice

[device/export](../modules/device_export.md).PairedDevice

Temporary used device class for paired devices until we added a layer to choose the right specialized device class
based on the device classes and features of the paired device

## Hierarchy

- [`Endpoint`](device_export.Endpoint.md)

  ↳ **`PairedDevice`**

## Table of contents

### Constructors

- [constructor](device_export.PairedDevice.md#constructor)

### Properties

- [declineAddingMoreClusters](device_export.PairedDevice.md#declineaddingmoreclusters)
- [deviceTypes](device_export.PairedDevice.md#devicetypes)
- [id](device_export.PairedDevice.md#id)
- [name](device_export.PairedDevice.md#name)
- [uniqueStorageKey](device_export.PairedDevice.md#uniquestoragekey)

### Methods

- [addChildEndpoint](device_export.PairedDevice.md#addchildendpoint)
- [addClusterClient](device_export.PairedDevice.md#addclusterclient)
- [addClusterServer](device_export.PairedDevice.md#addclusterserver)
- [addFixedLabel](device_export.PairedDevice.md#addfixedlabel)
- [addUserLabel](device_export.PairedDevice.md#adduserlabel)
- [destroy](device_export.PairedDevice.md#destroy)
- [determineUniqueID](device_export.PairedDevice.md#determineuniqueid)
- [getAllClusterClients](device_export.PairedDevice.md#getallclusterclients)
- [getAllClusterServers](device_export.PairedDevice.md#getallclusterservers)
- [getChildEndpoint](device_export.PairedDevice.md#getchildendpoint)
- [getChildEndpoints](device_export.PairedDevice.md#getchildendpoints)
- [getClusterClient](device_export.PairedDevice.md#getclusterclient)
- [getClusterClientById](device_export.PairedDevice.md#getclusterclientbyid)
- [getClusterServer](device_export.PairedDevice.md#getclusterserver)
- [getClusterServerById](device_export.PairedDevice.md#getclusterserverbyid)
- [getDeviceTypes](device_export.PairedDevice.md#getdevicetypes)
- [getId](device_export.PairedDevice.md#getid)
- [hasClusterClient](device_export.PairedDevice.md#hasclusterclient)
- [hasClusterServer](device_export.PairedDevice.md#hasclusterserver)
- [removeChildEndpoint](device_export.PairedDevice.md#removechildendpoint)
- [removeFromStructure](device_export.PairedDevice.md#removefromstructure)
- [setDeviceTypes](device_export.PairedDevice.md#setdevicetypes)
- [setStructureChangedCallback](device_export.PairedDevice.md#setstructurechangedcallback)
- [updatePartsList](device_export.PairedDevice.md#updatepartslist)
- [verifyRequiredClusters](device_export.PairedDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new PairedDevice**(`definition`, `clusters?`, `endpointId`)

Create a new PairedDevice instance. All data are automatically parsed from the paired device!

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `definition` | [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]] | `undefined` | DeviceTypeDefinitions of the paired device as reported by the device |
| `clusters` | ([`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\> \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>)[] | `[]` | Clusters of the paired device as reported by the device |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) | `undefined` | Endpoint ID of the paired device as reported by the device |

#### Overrides

[Endpoint](device_export.Endpoint.md).[constructor](device_export.Endpoint.md#constructor)

#### Defined in

packages/matter.js/src/device/Device.ts:60

## Properties

### declineAddingMoreClusters

• `Private` `Readonly` **declineAddingMoreClusters**: `boolean`

#### Defined in

packages/matter.js/src/device/Device.ts:52

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

One or multiple DeviceTypeDefinitions of the endpoint

#### Inherited from

[Endpoint](device_export.Endpoint.md).[deviceTypes](device_export.Endpoint.md#devicetypes)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:53

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[id](device_export.Endpoint.md#id)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:37

___

### name

• **name**: `string` = `""`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[name](device_export.Endpoint.md#name)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:39

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[uniqueStorageKey](device_export.Endpoint.md#uniquestoragekey)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:38

## Methods

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addChildEndpoint](device_export.Endpoint.md#addchildendpoint)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:256

___

### addClusterClient

▸ **addClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

Add cluster clients (used internally only!)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

**`Deprecated`**

PairedDevice does not support adding additional clusters

#### Overrides

[Endpoint](device_export.Endpoint.md).[addClusterClient](device_export.Endpoint.md#addclusterclient)

#### Defined in

packages/matter.js/src/device/Device.ts:92

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

Add cluster servers (used internally only!)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

**`Deprecated`**

PairedDevice does not support adding additional clusters

#### Overrides

[Endpoint](device_export.Endpoint.md).[addClusterServer](device_export.Endpoint.md#addclusterserver)

#### Defined in

packages/matter.js/src/device/Device.ts:81

___

### addFixedLabel

▸ **addFixedLabel**(`label`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addFixedLabel](device_export.Endpoint.md#addfixedlabel)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:106

___

### addUserLabel

▸ **addUserLabel**(`label`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addUserLabel](device_export.Endpoint.md#adduserlabel)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:126

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[destroy](device_export.Endpoint.md#destroy)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:93

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[determineUniqueID](device_export.Endpoint.md#determineuniqueid)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:280

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getAllClusterClients](device_export.Endpoint.md#getallclusterclients)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:340

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getAllClusterServers](device_export.Endpoint.md#getallclusterservers)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:336

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](device_export.Endpoint.md)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getChildEndpoint](device_export.Endpoint.md#getchildendpoint)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:262

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](device_export.Endpoint.md)[]

#### Returns

[`Endpoint`](device_export.Endpoint.md)[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getChildEndpoints](device_export.Endpoint.md#getchildendpoints)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:266

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterClient](device_export.Endpoint.md#getclusterclient)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:198

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/cluster_export.Attributes.md), [`Commands`](../interfaces/cluster_export.Commands.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterClientById](device_export.Endpoint.md#getclusterclientbyid)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:212

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterServer](device_export.Endpoint.md#getclusterserver)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:183

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<[`Attributes`](../interfaces/cluster_export.Attributes.md), [`Events`](../interfaces/cluster_export.Events.md)\>

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getClusterServerById](device_export.Endpoint.md#getclusterserverbyid)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:208

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getDeviceTypes](device_export.Endpoint.md#getdevicetypes)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:236

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[Endpoint](device_export.Endpoint.md).[getId](device_export.Endpoint.md#getid)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:99

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[hasClusterClient](device_export.Endpoint.md#hasclusterclient)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:226

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/cluster_export.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/cluster_export.Commands.md) |
| `E` | extends [`Events`](../interfaces/cluster_export.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[hasClusterServer](device_export.Endpoint.md#hasclusterserver)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:216

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](device_export.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[removeChildEndpoint](device_export.Endpoint.md#removechildendpoint)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:270

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[removeFromStructure](device_export.Endpoint.md#removefromstructure)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:85

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[setDeviceTypes](device_export.Endpoint.md#setdevicetypes)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:240

___

### setStructureChangedCallback

▸ **setStructureChangedCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[setStructureChangedCallback](device_export.Endpoint.md#setstructurechangedcallback)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:80

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)[]

#### Inherited from

[Endpoint](device_export.Endpoint.md).[updatePartsList](device_export.Endpoint.md#updatepartslist)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:344

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[Endpoint](device_export.Endpoint.md).[verifyRequiredClusters](device_export.Endpoint.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:302
