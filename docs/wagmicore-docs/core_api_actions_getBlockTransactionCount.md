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
# getBlockTransactionCount ​
Action for fetching the number of Transactions at a block number, hash or tag.
## Import ​
ts```
import { getBlockTransactionCount } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getBlockTransactionCount } from '@wagmi/core'
import { config } from './config'
const blockTransactionCount = await getBlockTransactionCount(config)
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
import { type GetBlockTransactionCountParameters } from '@wagmi/core'
```

### cacheTime ​
`number | undefined`
Time in milliseconds that cached block transaction count will remain in memory.
index.tsconfig.ts
ts```
import { getBlockTransactionCount } from '@wagmi/core'
import { config } from './config'
const blockTransactionCount = await getBlockTransactionCount(config, {
 cacheTime: 4_000, 
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
import { getBlockTransactionCount } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const blockTransactionCount = await getBlockTransactionCount(config, {
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
import { type GetBlockTransactionCountReturnType } from '@wagmi/core'
```

`number`
The number of Transactions at a block number
## Error ​
ts```
import { type GetBlockTransactionCountErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetBlockTransactionCountData,
 type GetBlockTransactionCountOptions,
 type GetBlockTransactionCountQueryFnData,
 type GetBlockTransactionCountQueryKey,
 getBlockTransactionCountQueryKey,
 getBlockTransactionCountQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getBlockTransactionCount`


