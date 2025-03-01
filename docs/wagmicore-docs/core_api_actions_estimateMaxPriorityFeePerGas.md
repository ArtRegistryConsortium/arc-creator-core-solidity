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
# estimateMaxPriorityFeePerGas ​
Returns an estimate for the max priority fee per gas (in wei) for a transaction to be likely included in the next block.
## Import ​
ts```
import { estimateMaxPriorityFeePerGas } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { estimateMaxPriorityFeePerGas } from '@wagmi/core'
import { config } from './config'
const result = await estimateMaxPriorityFeePerGas(config)
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
import { type EstimateFeesPerGasParameters } from '@wagmi/core'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsconfig.ts
ts```
import { estimateMaxPriorityFeePerGas } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const result = await estimateMaxPriorityFeePerGas(config, {
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
import { type EstimateFeesPerGasReturnType } from '@wagmi/core'
```

`bigint`
An estimate (in wei) for the max priority fee per gas.
## Error ​
ts```
import { type EstimateFeesPerGasErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type EstimateFeesPerGasData,
 type EstimateFeesPerGasOptions,
 type EstimateFeesPerGasQueryFnData,
 type EstimateFeesPerGasQueryKey,
 estimateMaxPriorityFeePerGasQueryKey,
 estimateMaxPriorityFeePerGasQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `estimateMaxPriorityFeePerGas`


