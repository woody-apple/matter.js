[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / BinaryInputBasic

# Namespace: BinaryInputBasic

[cluster/export](cluster_export.md).BinaryInputBasic

## Table of contents

### Variables

- [Cluster](cluster_export.BinaryInputBasic.md#cluster)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `activeText`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `applicationType`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `description`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `inactiveText`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`string`, `any`\> ; `outOfService`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\> ; `polarity`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<`number`, `any`\> ; `presentValue`: [`WritableAttribute`](cluster_export.md#writableattribute)<`boolean`, `any`\> ; `reliability`: [`OptionalWritableAttribute`](cluster_export.md#optionalwritableattribute)<`number`, `any`\> ; `statusFlags`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  } ; `id`: ``15`` = 0xf; `name`: ``"BinaryInputBasic"`` = "BinaryInputBasic"; `revision`: ``1`` = 1 }\>

Binary Input (Basic)

An interface for reading the value of a binary measurement and accessing various characteristics of that
measurement.

#### Defined in

packages/matter.js/src/cluster/definitions/BinaryInputBasicCluster.ts:22
