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
# getFeeHistory ​
Action for fetching a collection of historical gas information.
## Import ​
ts```
import { getFeeHistory } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getFeeHistory } from '@wagmi/core'
import { config } from './config'
const feeHistory = await getFeeHistory(config, {
 blockCount: 4,
 rewardPercentiles: [25, 75]
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
import { type GetFeeHistoryParameters } from '@wagmi/core'
```

### blockCount ​
`number`
Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.
index.tsconfig.ts
ts```
import { getFeeHistory } from '@wagmi/core'
import { config } from './config'
const feeHistory = await getFeeHistory(config, {
 blockCount: 4, 
 rewardPercentiles: [25, 75]
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

### rewardPercentiles ​
`number[]`
A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.
index.tsconfig.ts
ts```
import { getFeeHistory } from '@wagmi/core'
import { config } from './config'
const feeHistory = await getFeeHistory(config, {
 blockCount: 4,
 rewardPercentiles: [25, 75] 
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
Highest number block of the requested range.
index.tsconfig.ts
ts```
import { getFeeHistory } from '@wagmi/core'
import { config } from './config'
const feeHistory = await getFeeHistory(config, {
 blockCount: 4,
 blockNumber: 1551231n, 
 rewardPercentiles: [25, 75],
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
Block tag of the highest number block of the requested range.
index.tsconfig.ts
ts```
import { getFeeHistory } from '@wagmi/core'
import { config } from './config'
const feeHistory = await getFeeHistory(config, {
 blockCount: 4,
 blockTag: 'safe', 
 rewardPercentiles: [25, 75],
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
import { getFeeHistory } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const feeHistory = await getFeeHistory(config, {
 blockCount: 4,
 chainId: mainnet.id, 
 rewardPercentiles: [25, 75],
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
import { type GetFeeHistoryReturnType } from '@wagmi/core'
```

`FeeHistory`
The fee history.
## Error ​
ts```
import { type GetFeeHistoryErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetFeeHistoryData,
 type GetFeeHistoryOptions,
 type GetFeeHistoryQueryFnData,
 type GetFeeHistoryQueryKey,
 getFeeHistoryQueryKey,
 getFeeHistoryQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getFeeHistory`


