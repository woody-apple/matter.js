[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / PowerSourceStatus

# Enumeration: PowerSourceStatus

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).PowerSourceStatus

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.5.4

## Table of contents

### Enumeration Members

- [Active](cluster_export.PowerSource.PowerSourceStatus.md#active)
- [Standby](cluster_export.PowerSource.PowerSourceStatus.md#standby)
- [Unavailable](cluster_export.PowerSource.PowerSourceStatus.md#unavailable)
- [Unspecified](cluster_export.PowerSource.PowerSourceStatus.md#unspecified)

## Enumeration Members

### Active

• **Active** = ``1``

Indicate the source is available and currently supplying power

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:40

___

### Standby

• **Standby** = ``2``

Indicate the source is available, but is not currently supplying power

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:45

___

### Unavailable

• **Unavailable** = ``3``

Indicate the source is not currently available to supply power

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:50

___

### Unspecified

• **Unspecified** = ``0``

Indicate the source status is not specified

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:35
