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
# useVerifyTypedData ​
Hook for verify that a typed data was signed by the provided address. It supports verifying typed data that were signed by either a Smart Contract Account or Externally Owned Account.
## Import ​
ts```
import { useVerifyTypedData } from 'wagmi'
```

## Usage ​
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
import { type UseVerifyTypedDataParameters } from 'wagmi'
```

### address ​
`Address | undefined`
The Ethereum address that signed the original typed data.
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
The typed data domain.
index.tsxdata.tsconfig.ts
tsx```
import { types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxdata.tsconfig.ts
tsx```
import { domain } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### primaryType ​
`string | undefined`
The primary `type` to extract from types and use in `value`.
index.tsxdata.tsconfig.ts
tsx```
import { domain } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
  address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c',
 })
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### signature ​
`Hex | ByteArray | undefined`
The signature that was generated by signing the typed data with the address's signer.
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
import { mainnet } from 'wagmi/chains'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
Only used when verifying a typed data that was signed by a Smart Contract Account. The block tag to check if the contract was already deployed.
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
import { config } from './config'
function App() {
 const result = useVerifyTypedData({
  config,
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### scopeKey ​
`string | undefined`
Scopes the cache to a given context. Hooks that have identical context will share the same cache.
index.tsxdata.tsconfig.ts
tsx```
import { domain, types } from './data'
import { useVerifyTypedData } from 'wagmi'
function App() {
 const result = useVerifyTypedData({
  scopeKey: 'foo'
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
}
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
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### query ​
TanStack Query parameters. See the TanStack Query query docs for more info.
Wagmi does not support passing all TanStack Query parameters
TanStack Query parameters, like `queryFn` and `queryKey`, are used internally to make Wagmi work and you cannot override them. Check out the source to see what parameters are not supported. All parameters listed below are supported.
#### enabled ​
`boolean | undefined`
  * Set this to `false` to disable this query from automatically running.
  * Can be used for Dependent Queries.


#### gcTime ​
`number | Infinity | undefined`
  * Defaults to `5 * 60 * 1000` (5 minutes) or `Infinity` during SSR
  * The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different garbage collection times are specified, the longest one will be used.
  * If set to `Infinity`, will disable garbage collection


#### initialData ​
`VerifyTypedDataData | (() => VerifyTypedDataData) | undefined`
  * If set, this value will be used as the initial data for the query cache (as long as the query hasn't been created or cached yet)
  * If set to a function, the function will be called **once** during the shared/root query initialization, and be expected to synchronously return the initialData
  * Initial data is considered stale by default unless a `staleTime` has been set.
  * `initialData` **is persisted** to the cache


#### initialDataUpdatedAt ​
`number | ((() => number | undefined)) | undefined`
If set, this value will be used as the time (in milliseconds) of when the `initialData` itself was last updated.
#### meta ​
`Record<string, unknown> | undefined`
If set, stores additional information on the query cache entry that can be used as needed. It will be accessible wherever the `query` is available, and is also part of the `QueryFunctionContext` provided to the `queryFn`.
#### networkMode ​
`online' | 'always' | 'offlineFirst' | undefined`
  * Defaults to `'online'`
  * see Network Mode for more information.


#### notifyOnChangeProps ​
`string[] | 'all' | (() => string[] | 'all') | undefined`
  * If set, the component will only re-render if any of the listed properties change.
  * If set to `['data', 'error']` for example, the component will only re-render when the `data` or `error` properties change.
  * If set to `'all'`, the component will opt-out of smart tracking and re-render whenever a query is updated.
  * If set to a function, the function will be executed to compute the list of properties.
  * By default, access to properties will be tracked, and the component will only re-render when one of the tracked properties change.


#### placeholderData ​
`VerifyTypedDataData | ((previousValue: VerifyTypedDataData | undefined; previousQuery: Query | undefined) => VerifyTypedDataData) | undefined`
  * If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `pending` state.
  * `placeholderData` is **not persisted** to the cache
  * If you provide a function for `placeholderData`, as a first argument you will receive previously watched query data if available, and the second argument will be the complete previousQuery instance.


#### queryClient ​
`QueryClient | undefined`
Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will be used.
#### refetchInterval ​
`number | false | ((data: VerifyTypedDataData | undefined, query: Query) => number | false | undefined) | undefined`
  * If set to a number, all queries will continuously refetch at this frequency in milliseconds
  * If set to a function, the function will be executed with the latest data and query to compute a frequency


#### refetchIntervalInBackground ​
`boolean | undefined`
If set to `true`, queries that are set to continuously refetch with a `refetchInterval` will continue to refetch while their tab/window is in the background
#### refetchOnMount ​
`boolean | 'always' | ((query: Query) => boolean | 'always') | undefined`
  * Defaults to `true`
  * If set to `true`, the query will refetch on mount if the data is stale.
  * If set to `false`, the query will not refetch on mount.
  * If set to `'always'`, the query will always refetch on mount.
  * If set to a function, the function will be executed with the query to compute the value


#### refetchOnReconnect ​
`boolean | 'always' | ((query: Query) => boolean | 'always') | undefined`
  * Defaults to `true`
  * If set to `true`, the query will refetch on reconnect if the data is stale.
  * If set to `false`, the query will not refetch on reconnect.
  * If set to `'always'`, the query will always refetch on reconnect.
  * If set to a function, the function will be executed with the query to compute the value


#### refetchOnWindowFocus ​
`boolean | 'always' | ((query: Query) => boolean | 'always') | undefined`
  * Defaults to `true`
  * If set to `true`, the query will refetch on window focus if the data is stale.
  * If set to `false`, the query will not refetch on window focus.
  * If set to `'always'`, the query will always refetch on window focus.
  * If set to a function, the function will be executed with the query to compute the value


#### retry ​
`boolean | number | ((failureCount: number, error: VerifyTypedDataErrorType) => boolean) | undefined`
  * If `false`, failed queries will not retry by default.
  * If `true`, failed queries will retry infinitely.
  * If set to a `number`, e.g. `3`, failed queries will retry until the failed query count meets that number.
  * Defaults to `3` on the client and `0` on the server


#### retryDelay ​
`number | ((retryAttempt: number, error: VerifyTypedDataErrorType) => number) | undefined`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.


#### retryOnMount ​
`boolean | undefined`
If set to `false`, the query will not be retried on mount if it contains an error. Defaults to `true`.
#### select ​
`((data: VerifyTypedDataData) => unknown) | undefined`
This option can be used to transform or select a part of the data returned by the query function. It affects the returned `data` value, but does not affect what gets stored in the query cache.
#### staleTime ​
`number | Infinity | undefined`
  * Defaults to `0`
  * The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on.
  * If set to `Infinity`, the data will never be considered stale


#### structuralSharing ​
`boolean | (((oldData: VerifyTypedDataData | undefined, newData: VerifyTypedDataData) => VerifyTypedDataData)) | undefined`
  * Defaults to `true`
  * If set to `false`, structural sharing between query results will be disabled.
  * If set to a function, the old and new data values will be passed through this function, which should combine them into resolved data for the query. This way, you can retain references from the old data to improve performance even when that data contains non-serializable values.


## Return Type ​
ts```
import { type UseVerifyTypedDataReturnType } from 'wagmi'
```

TanStack Query query docs
### data ​
`VerifyTypedDataData`
  * The last successfully resolved data for the query.
  * Defaults to `undefined`.


### dataUpdatedAt ​
`number`
The timestamp for when the query most recently returned the `status` as `'success'`.
### error ​
`null | VerifyTypedDataErrorType`
  * The error object for the query, if an error was thrown.
  * Defaults to `null`


### errorUpdatedAt ​
`number`
The timestamp for when the query most recently returned the `status` as `'error'`.
### errorUpdateCount ​
`number`
The sum of all errors.
### failureCount ​
`number`
  * The failure count for the query.
  * Incremented every time the query fails.
  * Reset to `0` when the query succeeds.


### failureReason ​
`null | VerifyTypedDataErrorType`
  * The failure reason for the query retry.
  * Reset to `null` when the query succeeds.


### fetchStatus ​
`'fetching' | 'idle' | 'paused'`
  * `fetching` Is `true` whenever the queryFn is executing, which includes initial `pending` as well as background refetches.
  * `paused` The query wanted to fetch, but has been `paused`.
  * `idle` The query is not fetching.
  * See Network Mode for more information.


### isError / isPending / isSuccess ​
`boolean`
Boolean variables derived from `status`.
### isFetched ​
`boolean`
Will be `true` if the query has been fetched.
### isFetchedAfterMount ​
`boolean`
  * Will be `true` if the query has been fetched after the component mounted.
  * This property can be used to not show any previously cached data.


### isFetching / isPaused ​
`boolean`
Boolean variables derived from `fetchStatus`.
### isLoading ​
`boolean`
  * Is `true` whenever the first fetch for a query is in-flight
  * Is the same as `isFetching && isPending`


### isLoadingError ​
`boolean`
Will be `true` if the query failed while fetching for the first time.
### isPlaceholderData ​
`boolean`
Will be `true` if the data shown is the placeholder data.
### isRefetchError ​
`boolean`
Will be `true` if the query failed while refetching.
### isRefetching ​
`boolean`
  * Is `true` whenever a background refetch is in-flight, which _does not_ include initial `'pending'`.
  * Is the same as `isFetching && !isPending`


### isStale ​
`boolean`
Will be `true` if the data in the cache is invalidated or if the data is older than the given `staleTime`.
### refetch ​
`(options: { cancelRefetch?: boolean | undefined; throwOnError?: boolean | undefined }) => Promise<UseQueryResult<VerifyTypedDataData, VerifyTypedDataErrorType>>`
  * A function to manually refetch the query.
  * `throwOnError`
    * When set to `true`, an error will be thrown if the query fails.
    * When set to `false`, an error will be logged if the query fails.
  * `cancelRefetch`
    * When set to `true`, a currently running request will be cancelled before a new request is made.
    * When set to `false`, no refetch will be made if there is already a request running.
    * Defaults to `true`


### status ​
`'error' | 'pending' | 'success'`
  * `pending` if there's no cached data and no query attempt was finished yet.
  * `error` if the query attempt resulted in an error. The corresponding `error` property has the error received from the attempted fetch
  * `success` if the query has received a response with no errors and is ready to display its data. The corresponding `data` property on the query is the data received from the successful fetch or if the query's `enabled` property is set to `false` and has not been fetched yet `data` is the first `initialData` supplied to the query on initialization.


## Type Inference ​
With `types` setup correctly, TypeScript will infer the correct types for `domain`, `message`, and `primaryType`. See the Wagmi TypeScript docs for more information.
## TanStack Query ​
ts```
import {
 type VerifyTypedDataData,
 type VerifyTypedDataOptions,
 type VerifyTypedDataQueryFnData,
 type VerifyTypedDataQueryKey,
 verifyTypedDataQueryKey,
 verifyTypedDataQueryOptions,
} from 'wagmi/query'
```

## Action ​
  * `verifyTypedData`


