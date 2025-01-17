[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [PowerSource](../modules/cluster_export.PowerSource.md) / BatChargeState

# Enumeration: BatChargeState

[cluster/export](../modules/cluster_export.md).[PowerSource](../modules/cluster_export.PowerSource.md).BatChargeState

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.7.5.10

## Table of contents

### Enumeration Members

- [IsAtFullCharge](cluster_export.PowerSource.BatChargeState.md#isatfullcharge)
- [IsCharging](cluster_export.PowerSource.BatChargeState.md#ischarging)
- [IsNotCharging](cluster_export.PowerSource.BatChargeState.md#isnotcharging)
- [Unknown](cluster_export.PowerSource.BatChargeState.md#unknown)

## Enumeration Members

### IsAtFullCharge

• **IsAtFullCharge** = ``2``

The battery is at full charge

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:783

___

### IsCharging

• **IsCharging** = ``1``

The battery is charging

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:778

___

### IsNotCharging

• **IsNotCharging** = ``3``

The battery is not charging

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:788

___

### Unknown

• **Unknown** = ``0``

Unable to determine the charging state

#### Defined in

packages/matter.js/src/cluster/definitions/PowerSourceCluster.ts:773
