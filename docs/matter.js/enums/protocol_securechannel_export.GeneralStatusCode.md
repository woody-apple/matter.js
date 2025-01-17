[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel/export](../modules/protocol_securechannel_export.md) / GeneralStatusCode

# Enumeration: GeneralStatusCode

[protocol/securechannel/export](../modules/protocol_securechannel_export.md).GeneralStatusCode

## Table of contents

### Enumeration Members

- [Aborted](protocol_securechannel_export.GeneralStatusCode.md#aborted)
- [AlreadyExists](protocol_securechannel_export.GeneralStatusCode.md#alreadyexists)
- [BadPrecondition](protocol_securechannel_export.GeneralStatusCode.md#badprecondition)
- [BadRequest](protocol_securechannel_export.GeneralStatusCode.md#badrequest)
- [Busy](protocol_securechannel_export.GeneralStatusCode.md#busy)
- [Continue](protocol_securechannel_export.GeneralStatusCode.md#continue)
- [DataLoss](protocol_securechannel_export.GeneralStatusCode.md#dataloss)
- [Failure](protocol_securechannel_export.GeneralStatusCode.md#failure)
- [InvalidArgument](protocol_securechannel_export.GeneralStatusCode.md#invalidargument)
- [NotFound](protocol_securechannel_export.GeneralStatusCode.md#notfound)
- [OutOfRange](protocol_securechannel_export.GeneralStatusCode.md#outofrange)
- [PermissionDenied](protocol_securechannel_export.GeneralStatusCode.md#permissiondenied)
- [ResourceExhausted](protocol_securechannel_export.GeneralStatusCode.md#resourceexhausted)
- [Success](protocol_securechannel_export.GeneralStatusCode.md#success)
- [Timeout](protocol_securechannel_export.GeneralStatusCode.md#timeout)
- [Unexpected](protocol_securechannel_export.GeneralStatusCode.md#unexpected)
- [Unsupported](protocol_securechannel_export.GeneralStatusCode.md#unsupported)

## Enumeration Members

### Aborted

• **Aborted** = ``11``

Failure, may be due to a concurrency error.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:66

___

### AlreadyExists

• **AlreadyExists** = ``14``

The sender attempted to create something that already exists.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:75

___

### BadPrecondition

• **BadPrecondition** = ``2``

Operation was rejected by the system because the system is in an invalid state.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:39

___

### BadRequest

• **BadRequest** = ``4``

A request was unrecognized or malformed

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:45

___

### Busy

• **Busy** = ``8``

Device is busy and cannot handle this request at this time.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:57

___

### Continue

• **Continue** = ``10``

Context-specific signal to proceed

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:63

___

### DataLoss

• **DataLoss** = ``16``

Unrecoverable data loss or corruption has occurred.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:81

___

### Failure

• **Failure** = ``1``

Generic failure, additional details may be included in the protocol specific status.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:36

___

### InvalidArgument

• **InvalidArgument** = ``12``

An invalid/unsupported argument was provided.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:69

___

### NotFound

• **NotFound** = ``13``

Some requested entity was not found.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:72

___

### OutOfRange

• **OutOfRange** = ``3``

A value was out of a required range

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:42

___

### PermissionDenied

• **PermissionDenied** = ``15``

The sender does not have sufficient permissions to execute the requested operations.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:78

___

### ResourceExhausted

• **ResourceExhausted** = ``7``

Insufficient resources to process the given request.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:54

___

### Success

• **Success** = ``0``

Operation completed successfully.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:33

___

### Timeout

• **Timeout** = ``9``

A timeout occurred.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:60

___

### Unexpected

• **Unexpected** = ``6``

A request was not expected at this time.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:51

___

### Unsupported

• **Unsupported** = ``5``

An unrecognized or unsupported request was received.

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:48
