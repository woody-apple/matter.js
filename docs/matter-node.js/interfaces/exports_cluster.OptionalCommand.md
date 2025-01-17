[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / OptionalCommand

# Interface: OptionalCommand<RequestT, ResponseT, F\>

[exports/cluster](../modules/exports_cluster.md).OptionalCommand

## Type parameters

| Name | Type |
| :------ | :------ |
| `RequestT` | `RequestT` |
| `ResponseT` | `ResponseT` |
| `F` | extends [`BitSchema`](../modules/exports_schema.md#bitschema) |

## Hierarchy

- [`Command`](../modules/exports_cluster.md#command)<`RequestT`, `ResponseT`, `F`\>

  ↳ **`OptionalCommand`**

## Table of contents

### Properties

- [invokeAcl](exports_cluster.OptionalCommand.md#invokeacl)
- [isConditional](exports_cluster.OptionalCommand.md#isconditional)
- [mandatoryIf](exports_cluster.OptionalCommand.md#mandatoryif)
- [optional](exports_cluster.OptionalCommand.md#optional)
- [optionalIf](exports_cluster.OptionalCommand.md#optionalif)
- [requestId](exports_cluster.OptionalCommand.md#requestid)
- [requestSchema](exports_cluster.OptionalCommand.md#requestschema)
- [responseId](exports_cluster.OptionalCommand.md#responseid)
- [responseSchema](exports_cluster.OptionalCommand.md#responseschema)
- [timed](exports_cluster.OptionalCommand.md#timed)

## Properties

### invokeAcl

• **invokeAcl**: [`AccessLevel`](../enums/exports_cluster.AccessLevel.md)

#### Inherited from

Command.invokeAcl

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:129

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Command.isConditional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:131

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.mandatoryIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:132

___

### optional

• **optional**: ``true``

#### Overrides

Command.optional

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:136

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Command.optionalIf

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:133

___

### requestId

• **requestId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

Command.requestId

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:125

___

### requestSchema

• **requestSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`RequestT`\>

#### Inherited from

Command.requestSchema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:126

___

### responseId

• **responseId**: [`CommandId`](../modules/exports_datatype.md#commandid)

#### Inherited from

Command.responseId

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:127

___

### responseSchema

• **responseSchema**: [`TlvSchema`](../classes/exports_tlv.TlvSchema.md)<`ResponseT`\>

#### Inherited from

Command.responseSchema

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:128

___

### timed

• **timed**: `boolean`

#### Inherited from

Command.timed

#### Defined in

packages/matter.js/dist/esm/cluster/Cluster.d.ts:130
