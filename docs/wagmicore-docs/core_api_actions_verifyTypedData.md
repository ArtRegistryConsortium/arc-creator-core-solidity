Skip to content 
Menu
On this page
#### Paradigm
![Paradigm](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg)
#### Ithaca
![Ithaca](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/ithaca-light.svg)
#### Stripe
![Stripe](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/stripe-light.svg)
#### zkSync
![zkSync](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/zksync-light.svg)
#### Linea
![Linea](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/linea-light.svg)
#### Routescan
![Routescan](https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/routescan-light.svg)
# verifyTypedData ​
Action for verify that a typed data was signed by the provided address. It supports verifying typed data that were signed by either a Smart Contract Account or Externally Owned Account.
## Import ​
ts```
import { verifyTypedData } from '@wagmi/core'
```

## Usage ​
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain,
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
ts```
import { type VerifyTypedDataParameters } from '@wagmi/core'
```

### address ​
`Address`
The Ethereum address that signed the original typed data.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain,
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### domain ​
`TypedDataDomain`
The typed data domain.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain: { 
  name: 'Ether Mail',
  version: '1',
  chainId: 1,
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
 },
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### types ​
The type definitions for the typed data.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain,
 types: { 
  Person: [
   { name: 'name', type: 'string' },
   { name: 'wallet', type: 'address' },
  ],
  Mail: [
   { name: 'from', type: 'Person' },
   { name: 'to', type: 'Person' },
   { name: 'contents', type: 'string' },
  ],
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### primaryType ​
`string`
The primary `type` to extract from types and use in `value`.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain,
 types: {
  Person: [
   { name: 'name', type: 'string' },
   { name: 'wallet', type: 'address' },
  ],
  Mail: [ 
   { name: 'from', type: 'Person' },
   { name: 'to', type: 'Person' },
   { name: 'contents', type: 'string' },
  ],
 },
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail', 
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### message ​
Type inferred from `types` & `primaryType`.
The message to be verified.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain,
 types,
 message: { 
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### signature ​
`Hex | ByteArray`
The signature that was generated by signing the typed data with the address's signer.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 domain,
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 }, 
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c', 
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### chainId ​
`config['chains'][number]['id'] | undefined`
Only used when verifying a typed data that was signed by a Smart Contract Account. The ID of chain to check if the contract was already deployed.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 chainId: mainnet.id, 
 domain,
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### blockNumber ​
`bigint | undefined`
Only used when verifying a typed data that was signed by a Smart Contract Account. The block number to check if the contract was already deployed.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 blockNumber: 12345678n, 
 domain,
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`
Only used when verifying a typed data that was signed by a Smart Contract Account. The block number to check if the contract was already deployed.
index.tsdata.tsconfig.ts
ts```
import { verifyTypedData } from '@wagmi/core'
import { domain, types } from './data'
import { config } from './config'
const valid = await verifyTypedData(config, {
 blockTag: 'latest', 
 domain,
 types,
 message: {
  from: {
   name: 'Cow',
   wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },
  to: {
   name: 'Bob',
   wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },
  contents: 'Hello, Bob!',
 },
 primaryType: 'Mail',
 address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
})
// true
```

ts```
// All properties on a domain are optional
export const domain = {
 name: 'Ether Mail',
 version: '1',
 chainId: 1,
 verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
} as const
// The named list of all type definitions
export const types = {
 Person: [
  { name: 'name', type: 'string' },
  { name: 'wallet', type: 'address' },
 ],
 Mail: [
  { name: 'from', type: 'Person' },
  { name: 'to', type: 'Person' },
  { name: 'contents', type: 'string' },
 ],
} as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Return Type ​
ts```
import { type VerifyTypedDataReturnType } from '@wagmi/core'
```

`boolean`
Whether the signed message is valid for the given address.
## Type Inference ​
With `types` setup correctly, TypeScript will infer the correct types for `domain`, `message`, and `primaryType`. See the Wagmi TypeScript docs for more information.
## Error ​
ts```
import { type VerifyTypedDataErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type verifyTypedDataData,
 type verifyTypedDataVariables,
 type verifyTypedDataMutate,
 type verifyTypedDataMutateAsync,
 verifyTypedDataMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `verifyTypedData`


