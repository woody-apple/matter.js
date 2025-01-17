[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/device](../modules/exports_device.md) / DimmablePluginUnitDevice

# Class: DimmablePluginUnitDevice

[exports/device](../modules/exports_device.md).DimmablePluginUnitDevice

## Hierarchy

- [`DimmableBaseDevice`](export._internal_.DimmableBaseDevice.md)

  ↳ **`DimmablePluginUnitDevice`**

## Table of contents

### Constructors

- [constructor](exports_device.DimmablePluginUnitDevice.md#constructor)

### Properties

- [commandHandler](exports_device.DimmablePluginUnitDevice.md#commandhandler)
- [deviceType](exports_device.DimmablePluginUnitDevice.md#devicetype)
- [deviceTypes](exports_device.DimmablePluginUnitDevice.md#devicetypes)
- [id](exports_device.DimmablePluginUnitDevice.md#id)
- [name](exports_device.DimmablePluginUnitDevice.md#name)
- [uniqueStorageKey](exports_device.DimmablePluginUnitDevice.md#uniquestoragekey)

### Methods

- [\_executeHandler](exports_device.DimmablePluginUnitDevice.md#_executehandler)
- [addChildEndpoint](exports_device.DimmablePluginUnitDevice.md#addchildendpoint)
- [addClusterClient](exports_device.DimmablePluginUnitDevice.md#addclusterclient)
- [addClusterServer](exports_device.DimmablePluginUnitDevice.md#addclusterserver)
- [addCommandHandler](exports_device.DimmablePluginUnitDevice.md#addcommandhandler)
- [addCurrentLevelListener](exports_device.DimmablePluginUnitDevice.md#addcurrentlevellistener)
- [addDeviceClusters](exports_device.DimmablePluginUnitDevice.md#adddeviceclusters)
- [addFixedLabel](exports_device.DimmablePluginUnitDevice.md#addfixedlabel)
- [addOnOffListener](exports_device.DimmablePluginUnitDevice.md#addonofflistener)
- [addUserLabel](exports_device.DimmablePluginUnitDevice.md#adduserlabel)
- [createOptionalClusterClient](exports_device.DimmablePluginUnitDevice.md#createoptionalclusterclient)
- [createOptionalClusterServer](exports_device.DimmablePluginUnitDevice.md#createoptionalclusterserver)
- [destroy](exports_device.DimmablePluginUnitDevice.md#destroy)
- [determineUniqueID](exports_device.DimmablePluginUnitDevice.md#determineuniqueid)
- [getAllClusterClients](exports_device.DimmablePluginUnitDevice.md#getallclusterclients)
- [getAllClusterServers](exports_device.DimmablePluginUnitDevice.md#getallclusterservers)
- [getChildEndpoint](exports_device.DimmablePluginUnitDevice.md#getchildendpoint)
- [getChildEndpoints](exports_device.DimmablePluginUnitDevice.md#getchildendpoints)
- [getClusterClient](exports_device.DimmablePluginUnitDevice.md#getclusterclient)
- [getClusterClientById](exports_device.DimmablePluginUnitDevice.md#getclusterclientbyid)
- [getClusterServer](exports_device.DimmablePluginUnitDevice.md#getclusterserver)
- [getClusterServerById](exports_device.DimmablePluginUnitDevice.md#getclusterserverbyid)
- [getCurrentLevel](exports_device.DimmablePluginUnitDevice.md#getcurrentlevel)
- [getDeviceTypes](exports_device.DimmablePluginUnitDevice.md#getdevicetypes)
- [getId](exports_device.DimmablePluginUnitDevice.md#getid)
- [getOnOff](exports_device.DimmablePluginUnitDevice.md#getonoff)
- [hasClusterClient](exports_device.DimmablePluginUnitDevice.md#hasclusterclient)
- [hasClusterServer](exports_device.DimmablePluginUnitDevice.md#hasclusterserver)
- [removeChildEndpoint](exports_device.DimmablePluginUnitDevice.md#removechildendpoint)
- [removeCommandHandler](exports_device.DimmablePluginUnitDevice.md#removecommandhandler)
- [removeFromStructure](exports_device.DimmablePluginUnitDevice.md#removefromstructure)
- [setCurrentLevel](exports_device.DimmablePluginUnitDevice.md#setcurrentlevel)
- [setDeviceTypes](exports_device.DimmablePluginUnitDevice.md#setdevicetypes)
- [setOnOff](exports_device.DimmablePluginUnitDevice.md#setonoff)
- [setStructureChangedCallback](exports_device.DimmablePluginUnitDevice.md#setstructurechangedcallback)
- [toggle](exports_device.DimmablePluginUnitDevice.md#toggle)
- [updatePartsList](exports_device.DimmablePluginUnitDevice.md#updatepartslist)
- [verifyRequiredClusters](exports_device.DimmablePluginUnitDevice.md#verifyrequiredclusters)

## Constructors

### constructor

• **new DimmablePluginUnitDevice**(`onOffAttributeInitialValues?`, `dimmableAttributeValues?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOffAttributeInitialValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<[`Merge`](../modules/util_export.md#merge)<{ `onOff`: [`Attribute`](../modules/exports_cluster.md#attribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>\>, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<{ `levelControlForLighting`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>\>\> |
| `dimmableAttributeValues?` | [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<[`Merge`](../modules/util_export.md#merge)<{ `currentLevel`: [`Attribute`](../modules/exports_cluster.md#attribute)<``null`` \| `number`, `any`\> ; `defaultMoveRate`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `maxLevel`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`number`, `any`\> ; `minLevel`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`number`, `any`\> ; `offTransitionTime`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `onLevel`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<``null`` \| `number`, `any`\> ; `onOffTransitionTime`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`number`, `any`\> ; `onTransitionTime`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<``null`` \| `number`, `any`\> ; `options`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<[`TypeFromBitSchema`](../modules/exports_schema.md#typefrombitschema)<{ `coupleColorTempToLevel`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `executeIfOff`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>\>, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<{ `frequency`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `lighting`: [`BitFlag`](../modules/exports_schema.md#bitflag-1) ; `onOff`: [`BitFlag`](../modules/exports_schema.md#bitflag-1)  }\>\>\> |
| `options?` | [`EndpointOptions`](../interfaces/exports_device.EndpointOptions.md) |

#### Overrides

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[constructor](export._internal_.DimmableBaseDevice.md#constructor)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:38

## Properties

### commandHandler

• `Protected` **commandHandler**: [`NamedHandler`](export._internal_.NamedHandler.md)<`any`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[commandHandler](export._internal_.DimmableBaseDevice.md#commandhandler)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:64

___

### deviceType

• `Readonly` **deviceType**: `number`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[deviceType](export._internal_.DimmableBaseDevice.md#devicetype)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:63

___

### deviceTypes

• `Protected` **deviceTypes**: [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[deviceTypes](export._internal_.DimmableBaseDevice.md#devicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:19

___

### id

• **id**: `undefined` \| [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[id](export._internal_.DimmableBaseDevice.md#id)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:23

___

### name

• **name**: `string`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[name](export._internal_.DimmableBaseDevice.md#name)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:25

___

### uniqueStorageKey

• **uniqueStorageKey**: `undefined` \| `string`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[uniqueStorageKey](export._internal_.DimmableBaseDevice.md#uniquestoragekey)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:24

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

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[_executeHandler](export._internal_.DimmableBaseDevice.md#_executehandler)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:96

▸ `Protected` **_executeHandler**<`K_2`\>(`action`, `...args`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`<[`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K_2`]\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[_executeHandler](export._internal_.DimmableBaseDevice.md#_executehandler)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:33

▸ `Protected` **_executeHandler**<`K_2`\>(`action`, `...args`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_2` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_2` |
| `...args` | `Parameters`<[`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K_2`]\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[_executeHandler](export._internal_.DimmableBaseDevice.md#_executehandler)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:22

___

### addChildEndpoint

▸ **addChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addChildEndpoint](export._internal_.DimmableBaseDevice.md#addchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:51

___

### addClusterClient

▸ **addClusterClient**<`F`, `A`, `C`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\> |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addClusterClient](export._internal_.DimmableBaseDevice.md#addclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:42

___

### addClusterServer

▸ **addClusterServer**<`A`, `E`\>(`cluster`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\> |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addClusterServer](export._internal_.DimmableBaseDevice.md#addclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:41

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

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addCommandHandler](export._internal_.DimmableBaseDevice.md#addcommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:79

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addCommandHandler](export._internal_.DimmableBaseDevice.md#addcommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:31

▸ **addCommandHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K`] |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addCommandHandler](export._internal_.DimmableBaseDevice.md#addcommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:20

___

### addCurrentLevelListener

▸ **addCurrentLevelListener**(`listener`): `void`

Adds a listener for the CurrentLevel attribute

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`newValue`: ``null`` \| `number`, `oldValue`: ``null`` \| `number`) => `void` | Listener function to be called when the attribute changes |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addCurrentLevelListener](export._internal_.DimmableBaseDevice.md#addcurrentlevellistener)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:35

___

### addDeviceClusters

▸ `Protected` **addDeviceClusters**(`attributeInitialValues?`, `excludeList?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributeInitialValues?` | `Object` |
| `excludeList?` | [`ClusterId`](../modules/exports_datatype.md#clusterid)[] |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addDeviceClusters](export._internal_.DimmableBaseDevice.md#adddeviceclusters)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:25

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

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addFixedLabel](export._internal_.DimmableBaseDevice.md#addfixedlabel)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:39

___

### addOnOffListener

▸ **addOnOffListener**(`listener`): `void`

Adds a listener for the OnOff attribute
This is an example of a convenient device class API to control the device without need to access clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | (`newValue`: `boolean`, `oldValue`: `boolean`) => `void` | Listener function to be called when the attribute changes |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addOnOffListener](export._internal_.DimmableBaseDevice.md#addonofflistener)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:79

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

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[addUserLabel](export._internal_.DimmableBaseDevice.md#adduserlabel)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:40

___

### createOptionalClusterClient

▸ `Protected` **createOptionalClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[createOptionalClusterClient](export._internal_.DimmableBaseDevice.md#createoptionalclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:98

___

### createOptionalClusterServer

▸ `Protected` **createOptionalClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`_cluster`): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[createOptionalClusterServer](export._internal_.DimmableBaseDevice.md#createoptionalclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:97

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[destroy](export._internal_.DimmableBaseDevice.md#destroy)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:37

___

### determineUniqueID

▸ **determineUniqueID**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[determineUniqueID](export._internal_.DimmableBaseDevice.md#determineuniqueid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:55

___

### getAllClusterClients

▸ **getAllClusterClients**(): [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getAllClusterClients](export._internal_.DimmableBaseDevice.md#getallclusterclients)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:58

___

### getAllClusterServers

▸ **getAllClusterServers**(): [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Returns

[`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>[]

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getAllClusterServers](export._internal_.DimmableBaseDevice.md#getallclusterservers)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:57

___

### getChildEndpoint

▸ **getChildEndpoint**(`id`): `undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |

#### Returns

`undefined` \| [`Endpoint`](exports_device.Endpoint.md)

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getChildEndpoint](export._internal_.DimmableBaseDevice.md#getchildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:52

___

### getChildEndpoints

▸ **getChildEndpoints**(): [`Endpoint`](exports_device.Endpoint.md)[]

#### Returns

[`Endpoint`](exports_device.Endpoint.md)[]

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getChildEndpoints](export._internal_.DimmableBaseDevice.md#getchildendpoints)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:53

___

### getClusterClient

▸ **getClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`F`, `A`, `C`, `E`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getClusterClient](export._internal_.DimmableBaseDevice.md#getclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:100

___

### getClusterClientById

▸ **getClusterClientById**(`clusterId`): `undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterClientObj`](../modules/exports_cluster.md#clusterclientobj)<`any`, [`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Commands`](../interfaces/exports_cluster.Commands.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getClusterClientById](export._internal_.DimmableBaseDevice.md#getclusterclientbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:46

___

### getClusterServer

▸ **getClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<`A`, `E`\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getClusterServer](export._internal_.DimmableBaseDevice.md#getclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:99

___

### getClusterServerById

▸ **getClusterServerById**(`clusterId`): `undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |

#### Returns

`undefined` \| [`ClusterServerObj`](../modules/exports_cluster.md#clusterserverobj)<[`Attributes`](../interfaces/exports_cluster.Attributes.md), [`Events`](../interfaces/exports_cluster.Events.md)\>

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getClusterServerById](export._internal_.DimmableBaseDevice.md#getclusterserverbyid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:45

___

### getCurrentLevel

▸ **getCurrentLevel**(): `number`

#### Returns

`number`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getCurrentLevel](export._internal_.DimmableBaseDevice.md#getcurrentlevel)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:28

___

### getDeviceTypes

▸ **getDeviceTypes**(): [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Returns

[[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]]

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getDeviceTypes](export._internal_.DimmableBaseDevice.md#getdevicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:49

___

### getId

▸ **getId**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getId](export._internal_.DimmableBaseDevice.md#getid)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:38

___

### getOnOff

▸ **getOnOff**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[getOnOff](export._internal_.DimmableBaseDevice.md#getonoff)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:67

___

### hasClusterClient

▸ **hasClusterClient**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[hasClusterClient](export._internal_.DimmableBaseDevice.md#hasclusterclient)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:48

___

### hasClusterServer

▸ **hasClusterServer**<`F`, `SF`, `A`, `C`, `E`\>(`cluster`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |
| `SF` | extends [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)<`F`\> |
| `A` | extends [`Attributes`](../interfaces/exports_cluster.Attributes.md) |
| `C` | extends [`Commands`](../interfaces/exports_cluster.Commands.md) |
| `E` | extends [`Events`](../interfaces/exports_cluster.Events.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`Cluster`](../modules/exports_cluster.md#cluster)<`F`, `SF`, `A`, `C`, `E`\> |

#### Returns

`boolean`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[hasClusterServer](export._internal_.DimmableBaseDevice.md#hasclusterserver)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:47

___

### removeChildEndpoint

▸ `Protected` **removeChildEndpoint**(`endpoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`Endpoint`](exports_device.Endpoint.md) |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[removeChildEndpoint](export._internal_.DimmableBaseDevice.md#removechildendpoint)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:54

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

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[removeCommandHandler](export._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/Device.d.ts:87

▸ **removeCommandHandler**<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends keyof [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`OnOffBaseDeviceCommands`](../modules/export._internal_.md#onoffbasedevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[removeCommandHandler](export._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:32

▸ **removeCommandHandler**<`K_1`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K_1` | extends keyof [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K_1` |
| `handler` | [`DimmableDeviceCommands`](../modules/export._internal_.md#dimmabledevicecommands)[`K_1`] |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[removeCommandHandler](export._internal_.DimmableBaseDevice.md#removecommandhandler)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:21

___

### removeFromStructure

▸ **removeFromStructure**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[removeFromStructure](export._internal_.DimmableBaseDevice.md#removefromstructure)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:36

___

### setCurrentLevel

▸ **setCurrentLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | ``null`` \| `number` |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[setCurrentLevel](export._internal_.DimmableBaseDevice.md#setcurrentlevel)

#### Defined in

packages/matter.js/dist/esm/device/DimmableDevices.d.ts:29

___

### setDeviceTypes

▸ **setDeviceTypes**(`deviceTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceTypes` | [[`DeviceTypeDefinition`](../modules/exports_device.md#devicetypedefinition), ...DeviceTypeDefinition[]] |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[setDeviceTypes](export._internal_.DimmableBaseDevice.md#setdevicetypes)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:50

___

### setOnOff

▸ **setOnOff**(`onOff`): `void`

Turns the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onOff` | `boolean` | true to turn on, false to turn off |

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[setOnOff](export._internal_.DimmableBaseDevice.md#setonoff)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:66

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

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[setStructureChangedCallback](export._internal_.DimmableBaseDevice.md#setstructurechangedcallback)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:35

___

### toggle

▸ **toggle**(): `void`

Toggles the device on or off
This is an example f a convenient device class API to control the device without need to access clusters

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[toggle](export._internal_.DimmableBaseDevice.md#toggle)

#### Defined in

packages/matter.js/dist/esm/device/OnOffDevices.d.ts:72

___

### updatePartsList

▸ **updatePartsList**(): [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Returns

[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)[]

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[updatePartsList](export._internal_.DimmableBaseDevice.md#updatepartslist)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:59

___

### verifyRequiredClusters

▸ **verifyRequiredClusters**(): `void`

#### Returns

`void`

#### Inherited from

[DimmableBaseDevice](export._internal_.DimmableBaseDevice.md).[verifyRequiredClusters](export._internal_.DimmableBaseDevice.md#verifyrequiredclusters)

#### Defined in

packages/matter.js/dist/esm/device/Endpoint.d.ts:56
