[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MatterDevice

# Class: MatterDevice

[<internal>](../modules/internal_.md).MatterDevice

## Table of contents

### Constructors

- [constructor](internal_.MatterDevice.md#constructor)

### Properties

- [activeCommissioningEndCallback](internal_.MatterDevice.md#activecommissioningendcallback)
- [activeCommissioningMode](internal_.MatterDevice.md#activecommissioningmode)
- [announceAsCommissionable](internal_.MatterDevice.md#announceascommissionable)
- [announceInterval](internal_.MatterDevice.md#announceinterval)
- [announcementStartedTime](internal_.MatterDevice.md#announcementstartedtime)
- [broadcasters](internal_.MatterDevice.md#broadcasters)
- [channelManager](internal_.MatterDevice.md#channelmanager)
- [closeSession](internal_.MatterDevice.md#closesession)
- [deviceName](internal_.MatterDevice.md#devicename)
- [deviceType](internal_.MatterDevice.md#devicetype)
- [discriminator](internal_.MatterDevice.md#discriminator)
- [exchangeManager](internal_.MatterDevice.md#exchangemanager)
- [fabricManager](internal_.MatterDevice.md#fabricmanager)
- [failSafeContext](internal_.MatterDevice.md#failsafecontext)
- [failSafeExpired](internal_.MatterDevice.md#failsafeexpired)
- [initialCommissioningCallback](internal_.MatterDevice.md#initialcommissioningcallback)
- [initialPasscode](internal_.MatterDevice.md#initialpasscode)
- [isClosing](internal_.MatterDevice.md#isclosing)
- [productId](internal_.MatterDevice.md#productid)
- [scanners](internal_.MatterDevice.md#scanners)
- [secureChannelProtocol](internal_.MatterDevice.md#securechannelprotocol)
- [sessionManager](internal_.MatterDevice.md#sessionmanager)
- [storage](internal_.MatterDevice.md#storage)
- [transportInterfaces](internal_.MatterDevice.md#transportinterfaces)
- [vendorId](internal_.MatterDevice.md#vendorid)

### Methods

- [addBroadcaster](internal_.MatterDevice.md#addbroadcaster)
- [addFabric](internal_.MatterDevice.md#addfabric)
- [addProtocolHandler](internal_.MatterDevice.md#addprotocolhandler)
- [addScanner](internal_.MatterDevice.md#addscanner)
- [addTransportInterface](internal_.MatterDevice.md#addtransportinterface)
- [allowBasicCommissioning](internal_.MatterDevice.md#allowbasiccommissioning)
- [allowEnhancedCommissioning](internal_.MatterDevice.md#allowenhancedcommissioning)
- [announce](internal_.MatterDevice.md#announce)
- [armFailSafe](internal_.MatterDevice.md#armfailsafe)
- [assertFailSafeArmed](internal_.MatterDevice.md#assertfailsafearmed)
- [completeCommission](internal_.MatterDevice.md#completecommission)
- [createSecureSession](internal_.MatterDevice.md#createsecuresession)
- [endCommissioning](internal_.MatterDevice.md#endcommissioning)
- [existsOpenPaseSession](internal_.MatterDevice.md#existsopenpasesession)
- [findDevice](internal_.MatterDevice.md#finddevice)
- [findFabricFromDestinationId](internal_.MatterDevice.md#findfabricfromdestinationid)
- [findResumptionRecordById](internal_.MatterDevice.md#findresumptionrecordbyid)
- [getActiveSessionInformation](internal_.MatterDevice.md#getactivesessioninformation)
- [getFabricByIndex](internal_.MatterDevice.md#getfabricbyindex)
- [getFabrics](internal_.MatterDevice.md#getfabrics)
- [getFailSafeContext](internal_.MatterDevice.md#getfailsafecontext)
- [getNextAvailableSessionId](internal_.MatterDevice.md#getnextavailablesessionid)
- [getNextFabricIndex](internal_.MatterDevice.md#getnextfabricindex)
- [initiateExchange](internal_.MatterDevice.md#initiateexchange)
- [isCommissioned](internal_.MatterDevice.md#iscommissioned)
- [isFailsafeArmed](internal_.MatterDevice.md#isfailsafearmed)
- [processSessionsToClose](internal_.MatterDevice.md#processsessionstoclose)
- [removePaseSession](internal_.MatterDevice.md#removepasesession)
- [saveResumptionRecord](internal_.MatterDevice.md#saveresumptionrecord)
- [sendCommissionableAnnouncement](internal_.MatterDevice.md#sendcommissionableannouncement)
- [sendFabricAnnouncements](internal_.MatterDevice.md#sendfabricannouncements)
- [start](internal_.MatterDevice.md#start)
- [startAnnouncement](internal_.MatterDevice.md#startannouncement)
- [stop](internal_.MatterDevice.md#stop)
- [updateFabric](internal_.MatterDevice.md#updatefabric)

## Constructors

### constructor

• **new MatterDevice**(`deviceName`, `deviceType`, `vendorId`, `productId`, `discriminator`, `initialPasscode`, `storage`, `initialCommissioningCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceName` | `string` |
| `deviceType` | [`DeviceTypeId`](../modules/internal_.md#devicetypeid) |
| `vendorId` | [`VendorId`](../modules/internal_.md#vendorid) |
| `productId` | `number` |
| `discriminator` | `number` |
| `initialPasscode` | `number` |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |
| `initialCommissioningCallback` | () => `void` |

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:53

## Properties

### activeCommissioningEndCallback

• `Private` `Optional` **activeCommissioningEndCallback**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:48

___

### activeCommissioningMode

• `Private` **activeCommissioningMode**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:47

___

### announceAsCommissionable

• `Private` **announceAsCommissionable**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:61

___

### announceInterval

• `Private` **announceInterval**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:49

___

### announcementStartedTime

• `Private` **announcementStartedTime**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:50

___

### broadcasters

• `Private` `Readonly` **broadcasters**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:40

___

### channelManager

• `Private` `Readonly` **channelManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:44

___

### closeSession

• `Private` **closeSession**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:76

___

### deviceName

• `Private` `Readonly` **deviceName**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:31

___

### deviceType

• `Private` `Readonly` **deviceType**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:32

___

### discriminator

• `Private` `Readonly` **discriminator**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:35

___

### exchangeManager

• `Private` `Readonly` **exchangeManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:45

___

### fabricManager

• `Private` `Readonly` **fabricManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:42

___

### failSafeContext

• `Private` `Optional` **failSafeContext**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:52

___

### failSafeExpired

• `Private` **failSafeExpired**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:78

___

### initialCommissioningCallback

• `Private` `Readonly` **initialCommissioningCallback**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:38

___

### initialPasscode

• `Private` `Readonly` **initialPasscode**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:36

___

### isClosing

• `Private` **isClosing**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:51

___

### productId

• `Private` `Readonly` **productId**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:34

___

### scanners

• `Private` `Readonly` **scanners**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:39

___

### secureChannelProtocol

• `Private` `Readonly` **secureChannelProtocol**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:46

___

### sessionManager

• `Private` `Readonly` **sessionManager**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:43

___

### storage

• `Private` `Readonly` **storage**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:37

___

### transportInterfaces

• `Private` `Readonly` **transportInterfaces**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:41

___

### vendorId

• `Private` `Readonly` **vendorId**: `any`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:33

## Methods

### addBroadcaster

▸ **addBroadcaster**(`broadcaster`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `broadcaster` | [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md) |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:55

___

### addFabric

▸ **addFabric**(`fabric`): `Promise`<[`FabricIndex`](../modules/internal_.md#fabricindex)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`<[`FabricIndex`](../modules/internal_.md#fabricindex)\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:68

___

### addProtocolHandler

▸ **addProtocolHandler**(`protocol`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocol` | [`ProtocolHandler`](../interfaces/internal_.ProtocolHandler.md)<[`MatterDevice`](internal_.MatterDevice.md)\> |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:57

___

### addScanner

▸ **addScanner**(`scanner`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/internal_.Scanner.md) |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:54

___

### addTransportInterface

▸ **addTransportInterface**(`netInterface`): [`MatterDevice`](internal_.MatterDevice.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `netInterface` | [`TransportInterface`](../interfaces/internal_.TransportInterface.md) |

#### Returns

[`MatterDevice`](internal_.MatterDevice.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:56

___

### allowBasicCommissioning

▸ **allowBasicCommissioning**(`commissioningEndCallback?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningEndCallback?` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:86

___

### allowEnhancedCommissioning

▸ **allowEnhancedCommissioning**(`discriminator`, `paseServer`, `commissioningEndCallback`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `discriminator` | `number` |
| `paseServer` | [`PaseServer`](internal_.PaseServer.md) |
| `commissioningEndCallback` | () => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:85

___

### announce

▸ **announce**(`announceOnce?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `announceOnce?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:60

___

### armFailSafe

▸ **armFailSafe**(`expiryLengthSeconds`, `maxCumulativeFailsafeSeconds`, `associatedFabric`, `endpoint`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expiryLengthSeconds` | `number` |
| `maxCumulativeFailsafeSeconds` | `number` |
| `associatedFabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `endpoint` | [`Endpoint`](internal_.Endpoint.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:79

___

### assertFailSafeArmed

▸ **assertFailSafeArmed**(`message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:77

___

### completeCommission

▸ **completeCommission**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:83

___

### createSecureSession

▸ **createSecureSession**(`sessionId`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](internal_.SecureSession.md)<[`MatterDevice`](internal_.MatterDevice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `number` |
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](internal_.SecureSession.md)<[`MatterDevice`](internal_.MatterDevice.md)\>\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:64

___

### endCommissioning

▸ **endCommissioning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:87

___

### existsOpenPaseSession

▸ **existsOpenPaseSession**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:88

___

### findDevice

▸ **findDevice**(`fabric`, `nodeId`, `timeOutSeconds?`): `Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeOutSeconds?` | `number` |

#### Returns

`Promise`<`undefined` \| { `channel`: [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\> ; `session`: [`Session`](../interfaces/internal_.Session.md)<[`MatterDevice`](internal_.MatterDevice.md)\>  }\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:89

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `peerRandom`): [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `peerRandom` | `Uint8Array` |

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:65

___

### findResumptionRecordById

▸ **findResumptionRecordById**(`resumptionId`): `undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionId` | `Uint8Array` |

#### Returns

`undefined` \| [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:72

___

### getActiveSessionInformation

▸ **getActiveSessionInformation**(): { `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Returns

{ `fabric`: `undefined` \| { `fabricId`: [`FabricId`](../modules/internal_.md#fabricid) ; `label`: `string` ; `nodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootNodeId`: [`NodeId`](../modules/internal_.md#nodeid) ; `rootVendorId`: [`VendorId`](../modules/internal_.md#vendorid)  } ; `isPeerActive`: `boolean` ; `lastActiveTimestamp`: `undefined` \| `number` ; `lastInteractionTimestamp`: `undefined` \| `number` ; `name`: `string` ; `nodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `numberOfActiveSubscriptions`: `number` ; `peerNodeId`: `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) ; `secure`: `boolean`  }[]

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:94

___

### getFabricByIndex

▸ **getFabricByIndex**(`fabricIndex`): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:70

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](internal_.Fabric.md)[]

#### Returns

[`Fabric`](internal_.Fabric.md)[]

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:82

___

### getFailSafeContext

▸ **getFailSafeContext**(): [`FailSafeManager`](internal_.FailSafeManager.md)

#### Returns

[`FailSafeManager`](internal_.FailSafeManager.md)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:81

___

### getNextAvailableSessionId

▸ **getNextAvailableSessionId**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:63

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:67

___

### initiateExchange

▸ **initiateExchange**(`fabric`, `nodeId`, `protocolId`): [`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `protocolId` | `number` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)<[`MatterDevice`](internal_.MatterDevice.md)\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:71

___

### isCommissioned

▸ **isCommissioned**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:84

___

### isFailsafeArmed

▸ **isFailsafeArmed**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:80

___

### processSessionsToClose

▸ **processSessionsToClose**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:75

___

### removePaseSession

▸ **removePaseSession**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:74

___

### saveResumptionRecord

▸ **saveResumptionRecord**(`resumptionRecord`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `resumptionRecord` | [`ResumptionRecord`](../interfaces/internal_.ResumptionRecord.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:73

___

### sendCommissionableAnnouncement

▸ **sendCommissionableAnnouncement**(`mode`, `discriminator?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | [`CommissioningWindowStatus`](../enums/internal_.CommissioningWindowStatus.md) |
| `discriminator?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:62

___

### sendFabricAnnouncements

▸ **sendFabricAnnouncements**(`fabrics`, `expireCommissioningAnnouncement?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabrics` | [`Fabric`](internal_.Fabric.md)[] |
| `expireCommissioningAnnouncement?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:69

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:58

___

### startAnnouncement

▸ **startAnnouncement**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:59

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:93

___

### updateFabric

▸ **updateFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/MatterDevice.d.ts:66
