[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / DoorState

# Enumeration: DoorState

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).DoorState

The DoorState enumeration shall indicate the current door state. The data type of the DoorState

enum field is derived from enum8.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.7

## Table of contents

### Enumeration Members

- [DoorAjar](cluster_export.DoorLock.DoorState.md#doorajar)
- [DoorClosed](cluster_export.DoorLock.DoorState.md#doorclosed)
- [DoorForcedOpen](cluster_export.DoorLock.DoorState.md#doorforcedopen)
- [DoorJammed](cluster_export.DoorLock.DoorState.md#doorjammed)
- [DoorOpen](cluster_export.DoorLock.DoorState.md#dooropen)
- [DoorUnspecifiedError](cluster_export.DoorLock.DoorState.md#doorunspecifiederror)

## Enumeration Members

### DoorAjar

• **DoorAjar** = ``5``

Door state is ajar

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:555

___

### DoorClosed

• **DoorClosed** = ``1``

Door state is closed

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:535

___

### DoorForcedOpen

• **DoorForcedOpen** = ``3``

Door state is currently forced open

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:545

___

### DoorJammed

• **DoorJammed** = ``2``

Door state is jammed

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:540

___

### DoorOpen

• **DoorOpen** = ``0``

Door state is open

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:530

___

### DoorUnspecifiedError

• **DoorUnspecifiedError** = ``4``

Door state is invalid for unspecified reason

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:550
