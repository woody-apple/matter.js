[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/certificate](../modules/exports_certificate.md) / DeviceAttestationCertificate

# Interface: DeviceAttestationCertificate

[exports/certificate](../modules/exports_certificate.md).DeviceAttestationCertificate

## Table of contents

### Properties

- [ellipticCurveIdentifier](exports_certificate.DeviceAttestationCertificate.md#ellipticcurveidentifier)
- [ellipticCurvePublicKey](exports_certificate.DeviceAttestationCertificate.md#ellipticcurvepublickey)
- [extensions](exports_certificate.DeviceAttestationCertificate.md#extensions)
- [issuer](exports_certificate.DeviceAttestationCertificate.md#issuer)
- [notAfter](exports_certificate.DeviceAttestationCertificate.md#notafter)
- [notBefore](exports_certificate.DeviceAttestationCertificate.md#notbefore)
- [publicKeyAlgorithm](exports_certificate.DeviceAttestationCertificate.md#publickeyalgorithm)
- [serialNumber](exports_certificate.DeviceAttestationCertificate.md#serialnumber)
- [signature](exports_certificate.DeviceAttestationCertificate.md#signature)
- [signatureAlgorithm](exports_certificate.DeviceAttestationCertificate.md#signaturealgorithm)
- [subject](exports_certificate.DeviceAttestationCertificate.md#subject)

## Properties

### ellipticCurveIdentifier

• **ellipticCurveIdentifier**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:127

___

### ellipticCurvePublicKey

• **ellipticCurvePublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:128

___

### extensions

• **extensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorityKeyIdentifier` | `Uint8Array` |
| `basicConstraints` | { `isCa`: `boolean` ; `pathLen?`: `number`  } |
| `basicConstraints.isCa` | `boolean` |
| `basicConstraints.pathLen?` | `number` |
| `extendedKeyUsage?` | `number`[] |
| `futureExtension?` | `Uint8Array` |
| `keyUsage` | `number` |
| `subjectKeyIdentifier` | `Uint8Array` |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:129

___

### issuer

• **issuer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId?` | `number` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:114

___

### notAfter

• **notAfter**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:120

___

### notBefore

• **notBefore**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:119

___

### publicKeyAlgorithm

• **publicKeyAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:126

___

### serialNumber

• **serialNumber**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:112

___

### signature

• **signature**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:140

___

### signatureAlgorithm

• **signatureAlgorithm**: `number`

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:113

___

### subject

• **subject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `productId` | `number` |
| `vendorId` | [`VendorId`](../modules/exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/certificate/CertificateManager.d.ts:121
