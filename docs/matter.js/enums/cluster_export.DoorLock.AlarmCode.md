[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [DoorLock](../modules/cluster_export.DoorLock.md) / AlarmCode

# Enumeration: AlarmCode

[cluster/export](../modules/cluster_export.md).[DoorLock](../modules/cluster_export.DoorLock.md).AlarmCode

The Alarm Code enum shall indicate the alarm type.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 5.2.6.1

## Table of contents

### Enumeration Members

- [DoorAjar](cluster_export.DoorLock.AlarmCode.md#doorajar)
- [DoorForcedOpen](cluster_export.DoorLock.AlarmCode.md#doorforcedopen)
- [ForcedUser](cluster_export.DoorLock.AlarmCode.md#forceduser)
- [FrontEsceutcheonRemoved](cluster_export.DoorLock.AlarmCode.md#frontesceutcheonremoved)
- [LockFactoryReset](cluster_export.DoorLock.AlarmCode.md#lockfactoryreset)
- [LockJammed](cluster_export.DoorLock.AlarmCode.md#lockjammed)
- [LockRadioPowerCycled](cluster_export.DoorLock.AlarmCode.md#lockradiopowercycled)
- [WrongCodeEntryLimit](cluster_export.DoorLock.AlarmCode.md#wrongcodeentrylimit)

## Enumeration Members

### DoorAjar

• **DoorAjar** = ``7``

Door ajar

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:291

___

### DoorForcedOpen

• **DoorForcedOpen** = ``6``

Forced Door Open under Door Locked Condition

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:286

___

### ForcedUser

• **ForcedUser** = ``8``

Force User SOS alarm

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:296

___

### FrontEsceutcheonRemoved

• **FrontEsceutcheonRemoved** = ``5``

Tamper Alarm - front escutcheon removed from main

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:281

___

### LockFactoryReset

• **LockFactoryReset** = ``1``

Lock Reset to Factory Defaults

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:266

___

### LockJammed

• **LockJammed** = ``0``

Locking Mechanism Jammed

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:261

___

### LockRadioPowerCycled

• **LockRadioPowerCycled** = ``3``

Lock Radio Power Cycled

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:271

___

### WrongCodeEntryLimit

• **WrongCodeEntryLimit** = ``4``

Tamper Alarm - wrong code entry limit

#### Defined in

packages/matter.js/src/cluster/definitions/DoorLockCluster.ts:276
