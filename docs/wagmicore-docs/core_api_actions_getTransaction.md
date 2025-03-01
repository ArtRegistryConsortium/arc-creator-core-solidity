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
# getTransaction ​
Action for fetching transactions given hashes or block identifiers.
## Import ​
ts```
import { getTransaction } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { config } from './config'
const transaction = getTransaction(config, {
 hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5',
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
import { type GetTransactionParameters } from '@wagmi/core'
```

### blockHash ​
`bigint | undefined`
Block hash to get transaction at (with `index`).
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { config } from './config'
const transaction = getTransaction(config, {
 blockHash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d', 
 index: 0,
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
Block number to get transaction at (with `index`).
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { config } from './config'
const transaction = getTransaction(config, {
 blockNumber: 17829139n, 
 index: 0,
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
Block tag to get transaction at (with `index`).
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { config } from './config'
const transaction = getTransaction(config, {
 blockTag: 'safe', 
 index: 0,
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
ID of chain to use when fetching data.
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const transaction = await getTransaction(config, {
 chainId: mainnet.id, 
 hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5',
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

### hash ​
``0x${string}` | undefined`
Hash to get transaction.
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { config } from './config'
const transaction = getTransaction(config, {
 hash: '0x0fa64daeae54e207aa98613e308c2ba8abfe274f75507e741508cc4db82c8cb5', 
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

### index ​
`number | undefined`
An index to be used with a block identifier (hash, number, or tag).
index.tsconfig.ts
ts```
import { getTransaction } from '@wagmi/core'
import { config } from './config'
const transaction = getTransaction(config, {
 blockTag: 'safe',
 index: 0
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
import { type GetTransactionReturnType } from '@wagmi/core'
```

`Transaction`
## Error ​
ts```
import { type GetTransactionErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetTransactionData,
 type GetTransactionOptions,
 type GetTransactionQueryFnData,
 type GetTransactionQueryKey,
 getTransactionQueryKey,
 getTransactionQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getTransaction`


