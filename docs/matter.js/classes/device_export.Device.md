[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / Device

# Class: Device

[device/export](../modules/device_export.md).Device

Base class for all devices. This class should be extended by all devices.

## Hierarchy

- [`Endpoint`](device_export.Endpoint.md)

  ↳ **`Device`**

## Table of contents

### Constructors

- [constructor](device_export.Device.md#constructor)

### Properties

- [commandHandler](device_export.Device.md#commandhandler)
- [deviceType](device_export.Device.md#devicetype)
- [deviceTypes](device_export.Device.md#devicetypes)
- [id](device_export.Device.md#id)
- [name](device_export.Device.md#name)
- [uniqueStorageKey](device_export.Device.md#uniquestoragekey)

### Methods

- [\_executeHandler](device_export.Device.md#_executehandler)
- [addChildEndpoint](device_export.Device.md#addchildendpoint)
- [addClusterClient](device_export.Device.md#addclusterclient)
- [addClusterServer](device_export.Device.md#addclusterserver)
- [addCommandHandler](device_export.Device.md#addcommandhandler)
- [addFixedLabel](device_export.Device.md#addfixedlabel)
- [addUserLabel](device_export.Device.md#adduserlabel)
- [createOptionalClusterClient](device_export.Device.md#createoptionalclusterclient)
- [createOptionalClusterServer](device_export.Device.md#createoptionalclusterserver)
- [destroy](device_export.Device.md#destroy)
- [determineUniqueID](device_export.Device.md#determineuniqueid)
- [getAllClusterClients](device_export.Device.md#getallclusterclients)
- [getAllClusterServers](device_export.Device.md#getallclusterservers)
- [getChildEndpoint](device_export.Device.md#getchildendpoint)
- [getChildEndpoints](device_export.Device.md#getchildendpoints)
- [getClusterClient](device_export.Device.md#getclusterclient)
- [getClusterClientById](device_export.Device.md#getclusterclientbyid)
- [getClusterServer](device_export.Device.md#getclusterserver)
- [getClusterServerById](device_export.Device.md#getclusterserverbyid)
- [getDeviceTypes](device_export.Device.md#getdevicetypes)
- [getId](device_export.Device.md#getid)
- [hasClusterClient](device_export.Device.md#hasclusterclient)
- [hasClusterServer](device_export.Device.md#hasclusterserver)
- [removeChildEndpoint](device_export.Device.md#removechildendpoint)
- [removeCommandHandler](device_export.Device.md#removecommandhandler)
- [removeFromStructure](device_export.Device.md#removefromstructure)
- [setDeviceTypes](device_export.Device.md#setdevicetypes)
- [setStructureChangedCallback](device_export.Device.md#setstructurechangedcallback)
- [updatePartsList](device_export.Device.md#updatepartslist)
- [verifyRequiredClusters](device_export.Device.md#verifyrequiredclusters)

## Constructors

### constructor

• **new Device**(`definition`, `options?`)

Create a new Device instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `definition` | [`DeviceTypeDefinition`](../modules/device_export.md#devicetypedefinition) | DeviceTypeDefinitions of the device |
| `options` | [`EndpointOptions`](../interfaces/device_export.EndpointOptions.md) | Optional endpoint options |

#### Overrides

[Endpoint](device_export.Endpoint.md).[constructor](device_export.Endpoint.md#constructor)

#### Defined in

packages/matter.js/src/device/Device.ts:134

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Defined in

packages/matter.js/src/device/Device.ts:126

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Defined in

packages/matter.js/src/device/Device.ts:125

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

### \_executeHandler

▸ `Protected` **_executeHandler**(`command`, `...args`): `Promise`<`any`\>

Execute a command handler. Should only be used internally, but can not be declared as protected officially
because needed public for derived classes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to execute the handler for |
| `...args` | `any`[] | Arguments to be passed to the handler |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/matter.js/src/device/Device.ts:183

___

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addClusterClient](device_export.Endpoint.md#addclusterclient)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:173

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

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

#### Inherited from

[Endpoint](device_export.Endpoint.md).[addClusterServer](device_export.Endpoint.md#addclusterserver)

#### Defined in

packages/matter.js/src/device/Endpoint.ts:146

___

### addCommandHandler

▸ **addCommandHandler**(`command`, `handler`): `void`

Method to add command handlers to the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to add a handler for |
| `handler` | [`HandlerFunction`](../modules/export._internal_.md#handlerfunction) | Handler function to be executed when the command is received |

#### Returns

`void`

#### Defined in

packages/matter.js/src/device/Device.ts:160

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

### createOptionalClusterClient

▸ `Protected` **createOptionalClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

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
| `_cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/cluster_export.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Defined in

packages/matter.js/src/device/Device.ts:198

___

### createOptionalClusterServer

▸ `Protected` **createOptionalClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

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
| `_cluster` | [`Cluster`](../modules/cluster_export.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/cluster_export.md#clusterserverobj)<`A`, `E`\>

#### Defined in

packages/matter.js/src/device/Device.ts:187

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

#### Overrides

[Endpoint](device_export.Endpoint.md).[getClusterClient](device_export.Endpoint.md#getclusterclient)

#### Defined in

packages/matter.js/src/device/Device.ts:229

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

#### Overrides

[Endpoint](device_export.Endpoint.md).[getClusterServer](device_export.Endpoint.md#getclusterserver)

#### Defined in

packages/matter.js/src/device/Device.ts:209

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

### removeCommandHandler

▸ **removeCommandHandler**(`command`, `handler`): `void`

Method to remove command handlers from the device.
The base class do not expose any commands!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `never` | Command name to remove the handler from |
| `handler` | [`HandlerFunction`](../modules/export._internal_.md#handlerfunction) | Handler function to be removed |

#### Returns

`void`

#### Defined in

packages/matter.js/src/device/Device.ts:171

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
