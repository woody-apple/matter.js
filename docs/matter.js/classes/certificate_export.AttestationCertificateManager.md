[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [certificate/export](../modules/certificate_export.md) / AttestationCertificateManager

# Class: AttestationCertificateManager

[certificate/export](../modules/certificate_export.md).AttestationCertificateManager

## Table of contents

### Constructors

- [constructor](certificate_export.AttestationCertificateManager.md#constructor)

### Properties

- [nextCertificateId](certificate_export.AttestationCertificateManager.md#nextcertificateid)
- [paaCertId](certificate_export.AttestationCertificateManager.md#paacertid)
- [paaKeyIdentifier](certificate_export.AttestationCertificateManager.md#paakeyidentifier)
- [paaKeyPair](certificate_export.AttestationCertificateManager.md#paakeypair)
- [paiCertBytes](certificate_export.AttestationCertificateManager.md#paicertbytes)
- [paiCertId](certificate_export.AttestationCertificateManager.md#paicertid)
- [paiKeyIdentifier](certificate_export.AttestationCertificateManager.md#paikeyidentifier)
- [paiKeyPair](certificate_export.AttestationCertificateManager.md#paikeypair)
- [vendorId](certificate_export.AttestationCertificateManager.md#vendorid)

### Methods

- [generateDaCert](certificate_export.AttestationCertificateManager.md#generatedacert)
- [generatePAACert](certificate_export.AttestationCertificateManager.md#generatepaacert)
- [generatePAICert](certificate_export.AttestationCertificateManager.md#generatepaicert)
- [getDACert](certificate_export.AttestationCertificateManager.md#getdacert)
- [getPAICert](certificate_export.AttestationCertificateManager.md#getpaicert)

## Constructors

### constructor

• **new AttestationCertificateManager**(`vendorId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:49

## Properties

### nextCertificateId

• `Private` **nextCertificateId**: `number` = `2`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:47

___

### paaCertId

• `Private` **paaCertId**: `bigint`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:35

___

### paaKeyIdentifier

• `Private` `Readonly` **paaKeyIdentifier**: `Uint8Array` = `TestCert_PAA_NoVID_SKID`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:42

___

### paaKeyPair

• `Private` `Readonly` **paaKeyPair**: [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:39

___

### paiCertBytes

• `Private` `Readonly` **paiCertBytes**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:46

___

### paiCertId

• `Private` `Readonly` **paiCertId**: `bigint`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:43

___

### paiKeyIdentifier

• `Private` `Readonly` **paiKeyIdentifier**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:45

___

### paiKeyPair

• `Private` `Readonly` **paiKeyPair**: [`PrivateKey`](../modules/crypto_export.md#privatekey)

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:44

___

### vendorId

• `Private` `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:49

## Methods

### generateDaCert

▸ **generateDaCert**(`publicKey`, `vendorId`, `productId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Uint8Array` |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId` | `number` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:130

___

### generatePAACert

▸ `Private` **generatePAACert**(`vendorId?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId?` | [`VendorId`](../modules/datatype_export.md#vendorid) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:68

___

### generatePAICert

▸ `Private` **generatePAICert**(`vendorId`, `productId?`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](../modules/datatype_export.md#vendorid) |
| `productId?` | `number` |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:99

___

### getDACert

▸ **getDACert**(`productId`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `productId` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `dac` | `Uint8Array` |
| `keyPair` | [`PrivateKey`](../modules/crypto_export.md#privatekey) |

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:57

___

### getPAICert

▸ **getPAICert**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/certificate/AttestationCertificateManager.ts:53
