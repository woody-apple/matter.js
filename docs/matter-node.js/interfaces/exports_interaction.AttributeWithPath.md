[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / AttributeWithPath

# Interface: AttributeWithPath

[exports/interaction](../modules/exports_interaction.md).AttributeWithPath

## Table of contents

### Properties

- [attribute](exports_interaction.AttributeWithPath.md#attribute)
- [path](exports_interaction.AttributeWithPath.md#path)

## Properties

### attribute

• **attribute**: [`AnyAttributeServer`](../modules/exports_cluster.md#anyattributeserver)<`any`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:43

___

### path

• **path**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `attributeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`AttributeId`](../modules/exports_datatype.md#attributeid)\> ; `clusterId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `enableTagCompression`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<`boolean`\> ; `endpointId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `listIndex`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<``null`` \| `number`\> ; `nodeId`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/InteractionServer.d.ts:42
