[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / Event

# Interface: Event<T, F\>

[cluster/export](../modules/cluster_export.md).Event

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Table of contents

### Properties

- [id](cluster_export.Event.md#id)
- [isConditional](cluster_export.Event.md#isconditional)
- [mandatoryIf](cluster_export.Event.md#mandatoryif)
- [optional](cluster_export.Event.md#optional)
- [optionalIf](cluster_export.Event.md#optionalif)
- [priority](cluster_export.Event.md#priority)
- [readAcl](cluster_export.Event.md#readacl)
- [schema](cluster_export.Event.md#schema)
- [unknown](cluster_export.Event.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:714

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:719

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:721

___

### optional

• **optional**: `boolean`

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:717

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:720

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:716

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:718

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:715

___

### unknown

• **unknown**: `boolean`

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:722
