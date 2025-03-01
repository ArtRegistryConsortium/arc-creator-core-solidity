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
# getBlockNumber ​
Action for fetching the number of the most recent block seen.
## Import ​
ts```
import { getBlockNumber } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getBlockNumber } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlockNumber(config)
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
import { type GetBlockNumberParameters } from '@wagmi/core'
```

### cacheTime ​
`number | undefined`
Time in milliseconds that cached block number will remain in memory.
index.tsconfig.ts
ts```
import { getBlockNumber } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlockNumber(config, {
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
import { getBlockNumber } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const blockNumber = await getBlockNumber(config, {
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
import { type GetBlockNumberReturnType } from '@wagmi/core'
```

`bigint`
Most recent block number seen.
## Error ​
ts```
import { type GetBlockNumberErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetBlockNumberData,
 type GetBlockNumberOptions,
 type GetBlockNumberQueryFnData,
 type GetBlockNumberQueryKey,
 getBlockNumberQueryKey,
 getBlockNumberQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getBlockNumber`
  * `watchBlockNumber`


