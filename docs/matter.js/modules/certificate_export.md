[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / certificate/export

# Module: certificate/export

## Table of contents

### Classes

- [AttestationCertificateManager](../classes/certificate_export.AttestationCertificateManager.md)
- [CertificateError](../classes/certificate_export.CertificateError.md)
- [CertificateManager](../classes/certificate_export.CertificateManager.md)
- [CertificationDeclarationManager](../classes/certificate_export.CertificationDeclarationManager.md)
- [RootCertificateManager](../classes/certificate_export.RootCertificateManager.md)

### Interfaces

- [DeviceAttestationCertificate](../interfaces/certificate_export.DeviceAttestationCertificate.md)
- [ProductAttestationAuthorityCertificate](../interfaces/certificate_export.ProductAttestationAuthorityCertificate.md)
- [ProductAttestationIntermediateCertificate](../interfaces/certificate_export.ProductAttestationIntermediateCertificate.md)

### Type Aliases

- [IntermediateCertificate](certificate_export.md#intermediatecertificate)
- [OperationalCertificate](certificate_export.md#operationalcertificate)
- [RootCertificate](certificate_export.md#rootcertificate)

### Variables

- [TestCert\_PAA\_FFF1\_Cert](certificate_export.md#testcert_paa_fff1_cert)
- [TestCert\_PAA\_FFF1\_PrivateKey](certificate_export.md#testcert_paa_fff1_privatekey)
- [TestCert\_PAA\_FFF1\_PublicKey](certificate_export.md#testcert_paa_fff1_publickey)
- [TestCert\_PAA\_FFF1\_SKID](certificate_export.md#testcert_paa_fff1_skid)
- [TestCert\_PAA\_NoVID\_Cert](certificate_export.md#testcert_paa_novid_cert)
- [TestCert\_PAA\_NoVID\_PrivateKey](certificate_export.md#testcert_paa_novid_privatekey)
- [TestCert\_PAA\_NoVID\_PublicKey](certificate_export.md#testcert_paa_novid_publickey)
- [TestCert\_PAA\_NoVID\_SKID](certificate_export.md#testcert_paa_novid_skid)
- [TlvCertificationDeclaration](certificate_export.md#tlvcertificationdeclaration)
- [TlvIntermediateCertificate](certificate_export.md#tlvintermediatecertificate)
- [TlvOperationalCertificate](certificate_export.md#tlvoperationalcertificate)
- [TlvRootCertificate](certificate_export.md#tlvrootcertificate)

### Functions

- [CommonName\_X520](certificate_export.md#commonname_x520)
- [FabricId\_Matter](certificate_export.md#fabricid_matter)
- [IcacId\_Matter](certificate_export.md#icacid_matter)
- [NodeId\_Matter](certificate_export.md#nodeid_matter)
- [ProductId\_Matter](certificate_export.md#productid_matter)
- [RcacId\_Matter](certificate_export.md#rcacid_matter)
- [VendorId\_Matter](certificate_export.md#vendorid_matter)
- [jsToMatterDate](certificate_export.md#jstomatterdate)
- [matterToJsDate](certificate_export.md#mattertojsdate)

## Type Aliases

### IntermediateCertificate

Ƭ **IntermediateCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvIntermediateCertificate`](certificate_export.md#tlvintermediatecertificate)\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:327

___

### OperationalCertificate

Ƭ **OperationalCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvOperationalCertificate`](certificate_export.md#tlvoperationalcertificate)\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:328

___

### RootCertificate

Ƭ **RootCertificate**: [`TypeFromSchema`](tlv_export.md#typefromschema)<typeof [`TlvRootCertificate`](certificate_export.md#tlvrootcertificate)\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:326

## Variables

### TestCert\_PAA\_FFF1\_Cert

• `Const` **TestCert\_PAA\_FFF1\_Cert**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:32

___

### TestCert\_PAA\_FFF1\_PrivateKey

• `Const` **TestCert\_PAA\_FFF1\_PrivateKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:25

___

### TestCert\_PAA\_FFF1\_PublicKey

• `Const` **TestCert\_PAA\_FFF1\_PublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:28

___

### TestCert\_PAA\_FFF1\_SKID

• `Const` **TestCert\_PAA\_FFF1\_SKID**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:31

___

### TestCert\_PAA\_NoVID\_Cert

• `Const` **TestCert\_PAA\_NoVID\_Cert**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:19

___

### TestCert\_PAA\_NoVID\_PrivateKey

• `Const` **TestCert\_PAA\_NoVID\_PrivateKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:15

___

### TestCert\_PAA\_NoVID\_PublicKey

• `Const` **TestCert\_PAA\_NoVID\_PublicKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:12

___

### TestCert\_PAA\_NoVID\_SKID

• `Const` **TestCert\_PAA\_NoVID\_SKID**: `Uint8Array`

#### Defined in

packages/matter.js/src/certificate/ChipPAAuthorities.ts:18

___

### TlvCertificationDeclaration

• `Const` **TlvCertificationDeclaration**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `authorizedPaaList`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`[]\> ; `certificateId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `certificationType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `dacOriginProductId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\> ; `dacOriginVendorId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`VendorId`](datatype_export.md#vendorid)\> ; `deviceTypeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `formatVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `produceIdArray`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`[]\> ; `securityInformation`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `securityLevel`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`VendorId`](datatype_export.md#vendorid)\> ; `versionNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:308

___

### TlvIntermediateCertificate

• `Const` **TlvIntermediateCertificate**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\>  }\>\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`FabricId`](datatype_export.md#fabricid)\> ; `icacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:177

___

### TlvOperationalCertificate

• `Const` **TlvOperationalCertificate**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FabricId`](datatype_export.md#fabricid)\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\>  }\>\>  }\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:135

___

### TlvRootCertificate

• `Const` **TlvRootCertificate**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `ellipticCurveIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `ellipticCurvePublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `extensions`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `authorityKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `basicConstraints`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `isCa`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `pathLen`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`\>  }\>\> ; `extendedKeyUsage`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number`[]\> ; `futureExtension`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`Uint8Array`\> ; `keyUsage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subjectKeyIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>\> ; `issuer`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `issuerRcacId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`number` \| `bigint`\>  }\>\> ; `notAfter`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `notBefore`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `publicKeyAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `serialNumber`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signature`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `signatureAlgorithm`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `subject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `rcacId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>\>  }\>

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:95

## Functions

### CommonName\_X520

▸ **CommonName_X520**(`name`): `any`[]

commonName = ASN.1 OID 2.5.4.3

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:73

___

### FabricId\_Matter

▸ **FabricId_Matter**(`id`): `any`[]

matter-fabric-id = ASN.1 OID 1.3.6.1.4.1.37244.1.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`FabricId`](datatype_export.md#fabricid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:85

___

### IcacId\_Matter

▸ **IcacId_Matter**(`id`): `any`[]

matter-icac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.3

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:79

___

### NodeId\_Matter

▸ **NodeId_Matter**(`nodeId`): `any`[]

matter-node-id = ASN.1 OID 1.3.6.1.4.1.37244.1.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:76

___

### ProductId\_Matter

▸ **ProductId_Matter**(`id`): `any`[]

matter-oid-pid = ASN.1 OID 1.3.6.1.4.1.3724 4.2.2

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:93

___

### RcacId\_Matter

▸ **RcacId_Matter**(`id`): `any`[]

matter-rcac-id = ASN.1 OID 1.3.6.1.4.1.37244.1.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` \| `bigint` |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:82

___

### VendorId\_Matter

▸ **VendorId_Matter**(`vendorId`): `any`[]

matter-oid-vid = ASN.1 OID 1.3.6.1.4.1.37244.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](datatype_export.md#vendorid) |

#### Returns

`any`[]

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:88

___

### jsToMatterDate

▸ **jsToMatterDate**(`date`, `addYears?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `addYears` | `number` | `0` |

#### Returns

`number`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:54

___

### matterToJsDate

▸ **matterToJsDate**(`date`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |

#### Returns

`Date`

#### Defined in

packages/matter.js/src/certificate/CertificateManager.ts:50
