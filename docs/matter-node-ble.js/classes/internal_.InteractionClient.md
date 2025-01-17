[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / InteractionClient

# Class: InteractionClient

[<internal>](../modules/internal_.md).InteractionClient

## Table of contents

### Constructors

- [constructor](internal_.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](internal_.InteractionClient.md#exchangeprovider)
- [processReadRequest](internal_.InteractionClient.md#processreadrequest)
- [subscribedClusterDataVersions](internal_.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](internal_.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](internal_.InteractionClient.md#subscriptionlisteners)
- [withMessenger](internal_.InteractionClient.md#withmessenger)

### Accessors

- [session](internal_.InteractionClient.md#session)

### Methods

- [getAllAttributes](internal_.InteractionClient.md#getallattributes)
- [getAllAttributesAndEvents](internal_.InteractionClient.md#getallattributesandevents)
- [getAllEvents](internal_.InteractionClient.md#getallevents)
- [getAttribute](internal_.InteractionClient.md#getattribute)
- [getAttributeWithVersion](internal_.InteractionClient.md#getattributewithversion)
- [getEvent](internal_.InteractionClient.md#getevent)
- [getMultipleAttributes](internal_.InteractionClient.md#getmultipleattributes)
- [getMultipleAttributesAndEvents](internal_.InteractionClient.md#getmultipleattributesandevents)
- [getMultipleEvents](internal_.InteractionClient.md#getmultipleevents)
- [invoke](internal_.InteractionClient.md#invoke)
- [invokeWithSuppressedResponse](internal_.InteractionClient.md#invokewithsuppressedresponse)
- [setAttribute](internal_.InteractionClient.md#setattribute)
- [setMultipleAttributes](internal_.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](internal_.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](internal_.InteractionClient.md#subscribeattribute)
- [subscribeEvent](internal_.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](internal_.InteractionClient.md#subscribemultipleattributesandevents)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](internal_.ExchangeProvider.md) |

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:41

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:37

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:134

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:40

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:39

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:38

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:244

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/internal_.Session.md)<[`MatterController`](internal_.MatterController.md)\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:245

## Methods

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:42

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:54

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:50

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:110

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:117

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/internal_.md#event)<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:127

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:66

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:88

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:79

___

### invoke

▸ **invoke**<`C`\>(`options`): `Promise`<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/internal_.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/internal_.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout?` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/internal_.md#responsetype)<`C`\>\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:227

___

### invokeWithSuppressedResponse

▸ **invokeWithSuppressedResponse**<`C`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/internal_.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/internal_.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:236

___

### setAttribute

▸ **setAttribute**<`T`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributeData` | `Object` |
| `options.attributeData.attribute` | [`Attribute`](../modules/internal_.md#attribute)<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.attributeData.dataVersion?` | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:135

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`options`): `Promise`<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributes` | { `attribute`: [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `value`: `any`  }[] |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/internal_.AttributeStatus.md)[]\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:147

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:181

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/internal_.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.knownDataVersion?` | `number` |
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/internal_.md#attributejstype)<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:159

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/internal_.md#event)<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/internal_.md#decodedeventdata)<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:170

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.attributes` | { `attributeId?`: [`AttributeId`](../modules/internal_.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/internal_.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/internal_.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.events` | { `clusterId?`: [`ClusterId`](../modules/internal_.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/internal_.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/internal_.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/internal_.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/internal_.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

matter.js/dist/cjs/protocol/interaction/InteractionClient.d.ts:199
