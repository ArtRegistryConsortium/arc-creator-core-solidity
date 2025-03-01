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
# signTypedData ​
Action for signing typed data and calculating an Ethereum-specific EIP-712 signature.
## Import ​
ts```
import { signTypedData } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { signTypedData } from '@wagmi/core'
import { config } from './config'
const result = await signTypedData(config, {
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
})
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
import { type SignTypedDataParameters } from '@wagmi/core'
```

### account ​
`Address | Account | undefined`
Account to use when signing data. Throws if account is not found on `connector`.
index.tstypedData.tsconfig.ts
ts```
import { signTypedData } from '@wagmi/core'
import { config } from './config'
import { types } from './typedData'
const result = await signTypedData(config, {
 account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
 types,
 primaryType: 'Mail',
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
})
```

ts```
import type { TypedData } from 'viem'
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
} as const satisfies TypedData
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

### connector ​
`Connector | undefined`
Connector to sign data with.
index.tstypedData.tsconfig.ts
ts```
import { getAccount, signTypedData } from '@wagmi/core'
import { config } from './config'
import { types } from './typedData'
const { connector } = getAccount(config)
const result = await signTypedData(config, {
 connector, 
 types,
 primaryType: 'Mail',
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
})
```

ts```
import type { TypedData } from 'viem'
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
} as const satisfies TypedData
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
`TypedDataDomain | undefined`
  * The typed data domain.
  * If `EIP712Domain` key exists in `types`, `domain` schema is inferred from it.


index.tstypedData.tsconfig.ts
ts```
import { signTypedData } from '@wagmi/core'
import { config } from './config'
import { types } from './typedData'
const result = await signTypedData(config, {
 domain: { 
  name: 'Ether Mail', 
  chainId: 1, 
  verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC', 
  version: '1', 
 }, 
 types,
 primaryType: 'Mail',
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
})
```

ts```
import type { TypedData } from 'viem'
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
} as const satisfies TypedData
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
`Record<string, unknown>`
  * Data to sign.
  * Type inferred from `types` and `primaryType`.


index.tstypedData.tsconfig.ts
ts```
import { signTypedData } from '@wagmi/core'
import { config } from './config'
import { types } from './typedData'
const result = await signTypedData(config, {
 types,
 primaryType: 'Mail',
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
})
```

ts```
import type { TypedData } from 'viem'
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
} as const satisfies TypedData
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
  * The primary type to extract from `types` and use in `message`.
  * Type inferred from `types`.


index.tstypedData.tsconfig.ts
ts```
import { signTypedData } from '@wagmi/core'
import { config } from './config'
import { types } from './typedData'
const result = await signTypedData(config, {
 types,
 primaryType: 'Mail', 
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
})
```

ts```
import type { TypedData } from 'viem'
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
} as const satisfies TypedData
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
`TypedData`
  * The type definitions for the typed data.
  * By defining inline or adding a const assertion to `types`, TypeScript will infer the correct types for `message` and `primaryType`. See the Wagmi TypeScript docs for more information.


index.tsconfig.ts
ts```
import { signTypedData } from '@wagmi/core'
import { config } from './config'
const result = await signTypedData(config, {
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
})
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
import { type SignTypedDataReturnType } from '@wagmi/core'
```

`Hex`
The signed data.
## Type Inference ​
With `types` setup correctly, TypeScript will infer the correct types for `domain`, `message`, and `primaryType`. See the Wagmi TypeScript docs for more information.
InlineConst-Asserted
ts```
const 
result
 = await
signTypedData
(
config
, {

types
: {

Person
: [
   { 
name
: 'name', 
type
: 'string' },
   { 
name
: 'wallet', 
type
: 'address' },
  ],

Mail
: [
   { 
name
: 'from', 
type
: 'Person' },
   { 
name
: 'to', 
type
: 'Person' },
   { 
name
: 'contents', 
type
: 'string' },
  ],
 },

primaryType
: 'Mail',


message
: {







from
: {

name
: 'Cow',

wallet
: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },

to
: {

name
: 'Bob',

wallet
: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },

contents
: 'Hello, Bob!',
 },
})
```

ts```
const 
types
 = {

Person
: [
  { 
name
: 'name', 
type
: 'string' },
  { 
name
: 'wallet', 
type
: 'address' },
 ],

Mail
: [
  { 
name
: 'from', 
type
: 'Person' },
  { 
name
: 'to', 
type
: 'Person' },
  { 
name
: 'contents', 
type
: 'string' },
 ],
} as
const

const 
result
 = await
signTypedData
(
config
, {

types
,

primaryType
: 'Mail',


message
: {







from
: {

name
: 'Cow',

wallet
: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
  },

to
: {

name
: 'Bob',

wallet
: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
  },

contents
: 'Hello, Bob!',
 },
})
```

## Error ​
ts```
import { type SignTypedDataErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type SignTypedDataData,
 type SignTypedDataVariables,
 type SignTypedDataMutate,
 type SignTypedDataMutateAsync,
 signTypedDataMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `signTypedData`


