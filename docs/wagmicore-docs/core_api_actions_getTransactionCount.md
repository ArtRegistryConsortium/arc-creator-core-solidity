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
# getTransactionCount ​
Action for fetching the number of transactions an Account has sent.
## Import ​
ts```
import { getTransactionCount } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getTransactionCount } from '@wagmi/core'
import { config } from './config'
const transactionCount = getTransactionCount(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
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
import { type GetTransactionCountParameters } from '@wagmi/core'
```

### address ​
`Address`
The address of the account.
index.tsconfig.ts
ts```
import { getTransactionCount } from '@wagmi/core'
import { config } from './config'
const transactionCount = getTransactionCount(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48', 
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
Get the count at a block number.
index.tsconfig.ts
ts```
import { getTransactionCount } from '@wagmi/core'
import { config } from './config'
const transactionCount = getTransactionCount(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 blockNumber: 17829139n, 
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
Get the count at a block tag.
index.tsconfig.ts
ts```
import { getTransactionCount } from '@wagmi/core'
import { config } from './config'
const transactionCount = getTransactionCount(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 blockTag: 'latest', 
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
import { getTransactionCount } from '@wagmi/core'
import { config } from './config'
const transactionCount = getTransactionCount(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 chainId: mainnet.id, 
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
import { type GetTransactionCountReturnType } from '@wagmi/core'
```

`number`
The number of transactions an account has sent.
## Error ​
ts```
import { type GetTransactionCountErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetTransactionCountData,
 type GetTransactionCountOptions,
 type GetTransactionCountQueryFnData,
 type GetTransactionCountQueryKey,
 getTransactionCountQueryKey,
 getTransactionCountQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getTransactionCount`


