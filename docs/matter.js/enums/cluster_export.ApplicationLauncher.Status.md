[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / Status

# Enumeration: Status

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).Status

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.1

## Table of contents

### Enumeration Members

- [AppNotAvailable](cluster_export.ApplicationLauncher.Status.md#appnotavailable)
- [Success](cluster_export.ApplicationLauncher.Status.md#success)
- [SystemBusy](cluster_export.ApplicationLauncher.Status.md#systembusy)

## Enumeration Members

### AppNotAvailable

• **AppNotAvailable** = ``1``

Requested app is not available.

#### Defined in

packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:96

___

### Success

• **Success** = ``0``

Command succeeded

#### Defined in

packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:91

___

### SystemBusy

• **SystemBusy** = ``2``

Video platform unable to honor command.

#### Defined in

packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:101
