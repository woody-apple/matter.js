[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / InteractionClient

# Class: InteractionClient

[exports/interaction](../modules/exports_interaction.md).InteractionClient

## Table of contents

### Constructors

- [constructor](exports_interaction.InteractionClient.md#constructor)

### Properties

- [exchangeProvider](exports_interaction.InteractionClient.md#exchangeprovider)
- [processReadRequest](exports_interaction.InteractionClient.md#processreadrequest)
- [subscribedClusterDataVersions](exports_interaction.InteractionClient.md#subscribedclusterdataversions)
- [subscribedLocalValues](exports_interaction.InteractionClient.md#subscribedlocalvalues)
- [subscriptionListeners](exports_interaction.InteractionClient.md#subscriptionlisteners)
- [withMessenger](exports_interaction.InteractionClient.md#withmessenger)

### Accessors

- [session](exports_interaction.InteractionClient.md#session)

### Methods

- [getAllAttributes](exports_interaction.InteractionClient.md#getallattributes)
- [getAllAttributesAndEvents](exports_interaction.InteractionClient.md#getallattributesandevents)
- [getAllEvents](exports_interaction.InteractionClient.md#getallevents)
- [getAttribute](exports_interaction.InteractionClient.md#getattribute)
- [getAttributeWithVersion](exports_interaction.InteractionClient.md#getattributewithversion)
- [getEvent](exports_interaction.InteractionClient.md#getevent)
- [getMultipleAttributes](exports_interaction.InteractionClient.md#getmultipleattributes)
- [getMultipleAttributesAndEvents](exports_interaction.InteractionClient.md#getmultipleattributesandevents)
- [getMultipleEvents](exports_interaction.InteractionClient.md#getmultipleevents)
- [invoke](exports_interaction.InteractionClient.md#invoke)
- [invokeWithSuppressedResponse](exports_interaction.InteractionClient.md#invokewithsuppressedresponse)
- [setAttribute](exports_interaction.InteractionClient.md#setattribute)
- [setMultipleAttributes](exports_interaction.InteractionClient.md#setmultipleattributes)
- [subscribeAllAttributesAndEvents](exports_interaction.InteractionClient.md#subscribeallattributesandevents)
- [subscribeAttribute](exports_interaction.InteractionClient.md#subscribeattribute)
- [subscribeEvent](exports_interaction.InteractionClient.md#subscribeevent)
- [subscribeMultipleAttributesAndEvents](exports_interaction.InteractionClient.md#subscribemultipleattributesandevents)

## Constructors

### constructor

• **new InteractionClient**(`exchangeProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeProvider` | [`ExchangeProvider`](exports_protocol.ExchangeProvider.md) |

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:41

## Properties

### exchangeProvider

• `Private` `Readonly` **exchangeProvider**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:37

___

### processReadRequest

• `Private` **processReadRequest**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:134

___

### subscribedClusterDataVersions

• `Private` `Readonly` **subscribedClusterDataVersions**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:40

___

### subscribedLocalValues

• `Private` `Readonly` **subscribedLocalValues**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:39

___

### subscriptionListeners

• `Private` `Readonly` **subscriptionListeners**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:38

___

### withMessenger

• `Private` **withMessenger**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:244

## Accessors

### session

• `get` **session**(): [`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Returns

[`Session`](../interfaces/exports_session.Session.md)<[`MatterController`](export._internal_.MatterController.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:245

## Methods

### getAllAttributes

▸ **getAllAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:42

___

### getAllAttributesAndEvents

▸ **getAllAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:54

___

### getAllEvents

▸ **getAllEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:50

___

### getAttribute

▸ **getAttribute**<`A`\>(`options`): `Promise`<`undefined` \| [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:110

___

### getAttributeWithVersion

▸ **getAttributeWithVersion**<`A`\>(`options`): `Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.alwaysRequestFromRemote?` | `boolean` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<`undefined` \| { `value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\> ; `version`: `number`  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:117

___

### getEvent

▸ **getEvent**<`T`, `E`\>(`options`): `Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/exports_cluster.md#event)<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`undefined` \| [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:127

___

### getMultipleAttributes

▸ **getMultipleAttributes**(`options?`): `Promise`<[`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/exports_datatype.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:66

___

### getMultipleAttributesAndEvents

▸ **getMultipleAttributesAndEvents**(`options?`): `Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.attributes?` | { `attributeId?`: [`AttributeId`](../modules/exports_datatype.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/exports_datatype.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<{ `attributeReports`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:88

___

### getMultipleEvents

▸ **getMultipleEvents**(`options?`): `Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.events?` | { `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/exports_datatype.md#eventid)  }[] |
| `options.isFabricFiltered?` | `boolean` |

#### Returns

`Promise`<[`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:79

___

### invoke

▸ **invoke**<`C`\>(`options`): `Promise`<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/exports_cluster.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/exports_cluster.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |
| `options.useExtendedFailSafeMessageResponseTimeout?` | `boolean` |

#### Returns

`Promise`<[`ResponseType`](../modules/exports_cluster.md#responsetype)<`C`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:227

___

### invokeWithSuppressedResponse

▸ **invokeWithSuppressedResponse**<`C`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Command`](../modules/exports_cluster.md#command)<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.command` | `C` |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.request` | [`RequestType`](../modules/exports_cluster.md#requesttype)<`C`\> |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:236

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
| `options.attributeData.attribute` | [`Attribute`](../modules/exports_cluster.md#attribute)<`T`, `any`\> |
| `options.attributeData.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.attributeData.dataVersion?` | `number` |
| `options.attributeData.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.attributeData.value` | `T` |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:135

___

### setMultipleAttributes

▸ **setMultipleAttributes**(`options`): `Promise`<[`AttributeStatus`](../interfaces/exports_interaction.AttributeStatus.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.asTimedRequest?` | `boolean` |
| `options.attributes` | { `attribute`: [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\> ; `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion?`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `value`: `any`  }[] |
| `options.suppressResponse?` | `boolean` |
| `options.timedRequestTimeoutMs?` | `number` |

#### Returns

`Promise`<[`AttributeStatus`](../interfaces/exports_interaction.AttributeStatus.md)[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:147

___

### subscribeAllAttributesAndEvents

▸ **subscribeAllAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:181

___

### subscribeAttribute

▸ **subscribeAttribute**<`A`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`Attribute`](../modules/exports_cluster.md#attribute)<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attribute` | `A` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.knownDataVersion?` | `number` |
| `options.listener?` | (`value`: [`AttributeJsType`](../modules/exports_cluster.md#attributejstype)<`A`\>, `version`: `number`) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:159

___

### subscribeEvent

▸ **subscribeEvent**<`T`, `E`\>(`options`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends [`Event`](../modules/exports_cluster.md#event)<`T`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `options.endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `options.event` | `E` |
| `options.isFabricFiltered?` | `boolean` |
| `options.isUrgent?` | `boolean` |
| `options.listener?` | (`value`: [`DecodedEventData`](../modules/exports_interaction.md#decodedeventdata)<`T`\>) => `void` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |
| `options.minimumEventNumber?` | `number` \| `bigint` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:170

___

### subscribeMultipleAttributesAndEvents

▸ **subscribeMultipleAttributesAndEvents**(`options`): `Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.attributeListener?` | (`data`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>) => `void` |
| `options.attributes` | { `attributeId?`: [`AttributeId`](../modules/exports_datatype.md#attributeid) ; `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.dataVersionFilters?` | { `clusterId`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `dataVersion`: `number` ; `endpointId`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)  }[] |
| `options.eventFilters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |
| `options.eventListener?` | (`data`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>) => `void` |
| `options.events` | { `clusterId?`: [`ClusterId`](../modules/exports_datatype.md#clusterid) ; `endpointId?`: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) ; `eventId?`: [`EventId`](../modules/exports_datatype.md#eventid) ; `isUrgent?`: `boolean`  }[] |
| `options.isFabricFiltered?` | `boolean` |
| `options.keepSubscriptions?` | `boolean` |
| `options.maxIntervalCeilingSeconds` | `number` |
| `options.minIntervalFloorSeconds` | `number` |

#### Returns

`Promise`<{ `attributeReports?`: [`DecodedAttributeReportValue`](../modules/exports_interaction.md#decodedattributereportvalue)<`any`\>[] ; `eventReports?`: [`DecodedEventReportValue`](../modules/exports_interaction.md#decodedeventreportvalue)<`any`\>[]  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:199
