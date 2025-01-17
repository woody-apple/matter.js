[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ConditionalCommand

# Interface: ConditionalCommand<RequestT, ResponseT, F\>

[exports/cluster](../modules/exports_cluster.md).ConditionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`OptionalCommand`](../modules/exports_cluster.md#optionalcommand)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`ConditionalCommand`**

## Table of contents

### Properties

- [invokeAcl](exports_cluster.ConditionalCommand.md#invokeacl)
- [isConditional](exports_cluster.ConditionalCommand.md#isconditional)
- [mandatoryIf](exports_cluster.ConditionalCommand.md#mandatoryif)
- [optional](exports_cluster.ConditionalCommand.md#optional)
- [optionalIf](exports_cluster.ConditionalCommand.md#optionalif)
- [requestId](exports_cluster.ConditionalCommand.md#requestid)
- [requestSchema](exports_cluster.ConditionalCommand.md#requestschema)
- [responseId](exports_cluster.ConditionalCommand.md#responseid)
- [responseSchema](exports_cluster.ConditionalCommand.md#responseschema)
- [timed](exports_cluster.ConditionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

OptionalCommand.invokeAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### isConditional

• **isConditional**: ``true``

#### Overrides

OptionalCommand.isConditional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:139

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalCommand.mandatoryIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:132

___

### optional

• **optional**: ``true``

#### Inherited from

OptionalCommand.optional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:136

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

OptionalCommand.optionalIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### requestId

• **requestId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

OptionalCommand.requestId

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:125

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`RequestT`\>

#### Inherited from

OptionalCommand.requestSchema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### responseId

• **responseId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

OptionalCommand.responseId

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`ResponseT`\>

#### Inherited from

OptionalCommand.responseSchema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### timed

• **timed**: `boolean`

#### Inherited from

OptionalCommand.timed

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130
