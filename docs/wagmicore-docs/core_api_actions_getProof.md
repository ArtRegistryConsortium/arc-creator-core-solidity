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
# getProof ​
Action for return the account and storage values of the specified account including the Merkle-proof.
## Import ​
ts```
import { getProof } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getProof } from '@wagmi/core'
import { config } from './config'
await getProof(config, {
 address: '0x4200000000000000000000000000000000000016',
 storageKeys: [
  '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
 ],
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
import { type GetProofParameters } from '@wagmi/core'
```

### address ​
`Address`
The account address to get the proof for.
index.tsconfig.ts
ts```
import { getProof } from '@wagmi/core'
import { config } from './config'
await getProof(config, {
 address: '0x4200000000000000000000000000000000000016', 
 storageKeys: [
  '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
 ],
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

### storageKeys ​
``0x${string}`[]`
Array of storage-keys that should be proofed and included.
index.tsconfig.ts
ts```
import { getProof } from '@wagmi/core'
import { config } from './config'
await getProof(config, {
 address: '0x4200000000000000000000000000000000000016',
 storageKeys: [ 
  '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
 ],
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

### blockNumber ​
`bigint | undefined`
Proof at a given block number.
index.tsconfig.ts
ts```
import { getProof } from '@wagmi/core'
import { config } from './config'
await getProof(config, {
 address: '0x4200000000000000000000000000000000000016',
 blockNumber: 42069n, 
 storageKeys: [
  '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
 ],
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

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`
Proof at a given block tag.
index.tsconfig.ts
ts```
import { getProof } from '@wagmi/core'
import { config } from './config'
await getProof(config, {
 address: '0x4200000000000000000000000000000000000016',
 blockTag: 'latest', 
 storageKeys: [
  '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
 ],
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

### chainId ​
`config['chains'][number]['id'] | undefined`
The ID of chain to get the proof for.
index.tsconfig.ts
ts```
import { getProof } from '@wagmi/core'
import { config } from './config'
import { optimism } from '@wagmi/core/chains'
await getProof(config, {
 chainId: optimism.id, 
 address: '0x4200000000000000000000000000000000000016',
 storageKeys: [
  '0x4a932049252365b3eedbc5190e18949f2ec11f39d3bef2d259764799a1b27d99',
 ],
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
import { type GetProofReturnType } from '@wagmi/core'
```

`Proof`
Proof data.
## Error ​
ts```
import { type GetProofErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type getProofData,
 type getProofOptions,
 type getProofQueryFnData,
 type getProofQueryKey,
 getProofQueryKey,
 getProofQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getProof`


