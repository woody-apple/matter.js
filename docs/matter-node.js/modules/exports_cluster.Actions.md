[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / Actions

# Namespace: Actions

[exports/cluster](exports_cluster.md).Actions

## Table of contents

### Enumerations

- [ActionError](../enums/exports_cluster.Actions.ActionError.md)
- [ActionState](../enums/exports_cluster.Actions.ActionState.md)
- [ActionType](../enums/exports_cluster.Actions.ActionType.md)
- [EndpointListType](../enums/exports_cluster.Actions.EndpointListType.md)

### Variables

- [Cluster](exports_cluster.Actions.md#cluster)
- [CommandBits](exports_cluster.Actions.md#commandbits)
- [TlvActionFailedEvent](exports_cluster.Actions.md#tlvactionfailedevent)
- [TlvActionStruct](exports_cluster.Actions.md#tlvactionstruct)
- [TlvDisableActionRequest](exports_cluster.Actions.md#tlvdisableactionrequest)
- [TlvDisableActionWithDurationRequest](exports_cluster.Actions.md#tlvdisableactionwithdurationrequest)
- [TlvEnableActionRequest](exports_cluster.Actions.md#tlvenableactionrequest)
- [TlvEnableActionWithDurationRequest](exports_cluster.Actions.md#tlvenableactionwithdurationrequest)
- [TlvEndpointListStruct](exports_cluster.Actions.md#tlvendpointliststruct)
- [TlvInstantActionRequest](exports_cluster.Actions.md#tlvinstantactionrequest)
- [TlvInstantActionWithTransitionRequest](exports_cluster.Actions.md#tlvinstantactionwithtransitionrequest)
- [TlvPauseActionRequest](exports_cluster.Actions.md#tlvpauseactionrequest)
- [TlvPauseActionWithDurationRequest](exports_cluster.Actions.md#tlvpauseactionwithdurationrequest)
- [TlvResumeActionRequest](exports_cluster.Actions.md#tlvresumeactionrequest)
- [TlvStartActionRequest](exports_cluster.Actions.md#tlvstartactionrequest)
- [TlvStartActionWithDurationRequest](exports_cluster.Actions.md#tlvstartactionwithdurationrequest)
- [TlvStateChangedEvent](exports_cluster.Actions.md#tlvstatechangedevent)
- [TlvStopActionRequest](exports_cluster.Actions.md#tlvstopactionrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `actionList`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `endpointLists`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `setupUrl`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)<`string`, `any`\>  } ; `commands`: { `disableAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `disableActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enableAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `enableActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `instantAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `instantActionWithTransition`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `pauseAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `pauseActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `resumeAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `startAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `startActionWithDuration`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stopAction`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: { `actionFailed`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `stateChanged`: [`Event`](exports_cluster.md#event)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``37`` ; `name`: ``"Actions"`` ; `revision`: ``1``  }\>

Actions

This cluster provides a standardized way for a Node (typically a Bridge, but could be any Node) to expose

  • Information about logical grouping of endpoints on the Node (example: lights in a room)

  • Information about named actions that can be performed on such a group of endpoints (example: recall a scene
    for a group of lights by its name)

  • Commands to trigger such actions

  • Events to receive feedback on the state of such actions.

The information on grouping and available actions is typically provided by the user or Bridge manufacturer via
some means not defined in Matter, and therefore provided as read-only to Nodes. For example: a
manufacturer-provided app allows a user to set up logical grouping and create/assign scene for such groups.

Using this cluster, a Node can learn about such logical grouping, provided actions, and trigger such actions.

While the origin of this cluster stems from use cases with a Bridge, its server side may also be implemented on
any Node which can expose certain grouping, actions or automations to other users.

After defining the attributes, commands and events for this cluster, and the associated data types, several
examples are provided to illustrate the capabilities of this cluster.

Actions can be defined in a flexible manner to suit the needs of the various nodes implementing this cluster.
For each action, the commands available for that particular action are defined.

This cluster can be used to expose only the grouping of endpoints without any actions defined by populating the
EndpointList attribute accordingly and providing an empty list for ActionList.

The term 'action' in the description of this cluster should not be confused with the term 'action' as used in
the Interaction Model.

**`See`**

MatterCoreSpecificationV1_1 § 9.14

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:544

___

### CommandBits

• `Const` **CommandBits**: `Object`

Note - The bit allocation of this bitmap shall follow the ID’s of the Commands of this cluster.

**`See`**

MatterCoreSpecificationV1_1 § 9.14.4.1

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for DisableAction command |
| `disableActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for DisableActionWithDuration command |
| `enableAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for EnableAction command |
| `enableActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for EnableActionWithDuration command |
| `instantAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for InstantAction command |
| `instantActionWithTransition` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for InstantActionWithTransition command |
| `pauseAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for PauseAction command |
| `pauseActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for PauseActionWithDuration command |
| `resumeAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for ResumeAction command |
| `startAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for StartAction command |
| `startActionWithDuration` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for StartActionWithDuration command |
| `stopAction` | [`BitFlag`](exports_schema.md#bitflag-1) | Indicate support for StopAction command |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:93

___

### TlvActionFailedEvent

• `Const` **TlvActionFailedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Actions actionFailed event

**`See`**

MatterCoreSpecificationV1_1 § 9.14.7.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:496

___

### TlvActionStruct

• `Const` **TlvActionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type holds the details of a single action, and contains the data fields below.

**`See`**

MatterCoreSpecificationV1_1 § 9.14.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:171

___

### TlvDisableActionRequest

• `Const` **TlvDisableActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions disableAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:443

___

### TlvDisableActionWithDurationRequest

• `Const` **TlvDisableActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions disableActionWithDuration command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.12

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:452

___

### TlvEnableActionRequest

• `Const` **TlvEnableActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions enableAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.9

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:424

___

### TlvEnableActionWithDurationRequest

• `Const` **TlvEnableActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions enableActionWithDuration command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.10

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:433

___

### TlvEndpointListStruct

• `Const` **TlvEndpointListStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This data type holds the details of a single endpoint list, which relates to a set of endpoints that have some
logical relation, and contains the data fields below.

This field shall provide an unique identifier used to identify the endpoint list.

This field shall indicate the name (as assigned by the user or automatically by the server) associated with the
set of endpoints in this list. This can be used for identifying the action to the user by the client. Example:
"living room".

This field shall indicate the type of endpoint list, see EndpointListTypeEnum.

**`See`**

MatterCoreSpecificationV1_1 § 9.14.4.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:323

___

### TlvInstantActionRequest

• `Const` **TlvInstantActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions instantAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:339

___

### TlvInstantActionWithTransitionRequest

• `Const` **TlvInstantActionWithTransitionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions instantActionWithTransition command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:348

___

### TlvPauseActionRequest

• `Const` **TlvPauseActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions pauseAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:396

___

### TlvPauseActionWithDurationRequest

• `Const` **TlvPauseActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions pauseActionWithDuration command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.7

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:405

___

### TlvResumeActionRequest

• `Const` **TlvResumeActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions resumeAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:415

___

### TlvStartActionRequest

• `Const` **TlvStartActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions startAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:363

___

### TlvStartActionWithDurationRequest

• `Const` **TlvStartActionWithDurationRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions startActionWithDuration command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:372

___

### TlvStateChangedEvent

• `Const` **TlvStateChangedEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the Actions stateChanged event

**`See`**

MatterCoreSpecificationV1_1 § 9.14.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:462

___

### TlvStopActionRequest

• `Const` **TlvStopActionRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the Actions stopAction command

**`See`**

MatterCoreSpecificationV1_1 § 9.14.6.5

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ActionsCluster.d.ts:387
