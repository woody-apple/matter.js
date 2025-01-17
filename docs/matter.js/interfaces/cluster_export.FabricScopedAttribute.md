[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / FabricScopedAttribute

# Interface: FabricScopedAttribute<T, F\>

[cluster/export](../modules/cluster_export.md).FabricScopedAttribute

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Attribute`](../modules/cluster_export.md#attribute)<`T`, `F`\>

  ↳ **`FabricScopedAttribute`**

## Table of contents

### Properties

- [default](cluster_export.FabricScopedAttribute.md#default)
- [fabricScoped](cluster_export.FabricScopedAttribute.md#fabricscoped)
- [fixed](cluster_export.FabricScopedAttribute.md#fixed)
- [id](cluster_export.FabricScopedAttribute.md#id)
- [isConditional](cluster_export.FabricScopedAttribute.md#isconditional)
- [mandatoryIf](cluster_export.FabricScopedAttribute.md#mandatoryif)
- [omitChanges](cluster_export.FabricScopedAttribute.md#omitchanges)
- [optional](cluster_export.FabricScopedAttribute.md#optional)
- [optionalIf](cluster_export.FabricScopedAttribute.md#optionalif)
- [persistent](cluster_export.FabricScopedAttribute.md#persistent)
- [readAcl](cluster_export.FabricScopedAttribute.md#readacl)
- [scene](cluster_export.FabricScopedAttribute.md#scene)
- [schema](cluster_export.FabricScopedAttribute.md#schema)
- [timed](cluster_export.FabricScopedAttribute.md#timed)
- [unknown](cluster_export.FabricScopedAttribute.md#unknown)
- [writable](cluster_export.FabricScopedAttribute.md#writable)
- [writeAcl](cluster_export.FabricScopedAttribute.md#writeacl)

## Properties

### default

• `Optional` **default**: `T`

#### Inherited from

Attribute.default

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:48

___

### fabricScoped

• **fabricScoped**: ``true``

#### Overrides

Attribute.fabricScoped

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:76

___

### fixed

• **fixed**: `boolean`

#### Inherited from

Attribute.fixed

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:44

___

### id

• **id**: [`AttributeId`](../modules/datatype_export.md#attributeid)

#### Inherited from

Attribute.id

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:36

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Attribute.isConditional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:49

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Attribute.mandatoryIf

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:51

___

### omitChanges

• **omitChanges**: `boolean`

#### Inherited from

Attribute.omitChanges

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:46

___

### optional

• **optional**: `boolean`

#### Inherited from

Attribute.optional

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:38

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Attribute.optionalIf

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:50

___

### persistent

• **persistent**: `boolean`

#### Inherited from

Attribute.persistent

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:42

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

Attribute.readAcl

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:39

___

### scene

• **scene**: `boolean`

#### Inherited from

Attribute.scene

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:41

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Inherited from

Attribute.schema

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:37

___

### timed

• **timed**: `boolean`

#### Inherited from

Attribute.timed

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:43

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Attribute.unknown

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:52

___

### writable

• **writable**: `boolean`

#### Inherited from

Attribute.writable

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:40

___

### writeAcl

• `Optional` **writeAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

Attribute.writeAcl

#### Defined in

packages/matter.js/src/cluster/Cluster.ts:47
