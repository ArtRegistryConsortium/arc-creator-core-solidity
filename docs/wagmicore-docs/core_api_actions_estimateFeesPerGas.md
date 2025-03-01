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
# estimateFeesPerGas ​
Returns an estimate for the fees per gas (in wei) for a transaction to be likely included in the next block.
## Import ​
ts```
import { estimateFeesPerGas } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { estimateFeesPerGas } from '@wagmi/core'
import { config } from './config'
const result = await estimateFeesPerGas(config)
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
import { estimateFeesPerGas } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const result = await estimateFeesPerGas(config, {
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

### formatUnits ​
`'ether' | 'gwei' | 'wei' | number | undefined`
  * Units to use when formatting result.
  * Defaults to `'ether'`.


index.tsconfig.ts
ts```
import { estimateFeesPerGas } from '@wagmi/core'
import { config } from './config'
const feesPerGas = estimateFeesPerGas(config, {
 formatUnits: 'ether', 
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

### type ​
`'legacy' | 'eip1559'`
  * Fee value type.
  * Defaults to `'eip1559'`


index.tsconfig.ts
ts```
import { estimateFeesPerGas } from '@wagmi/core'
import { config } from './config'
const result = estimateFeesPerGas(config, {
 type: 'legacy', 
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

`FeeValues`
An estimate (in wei) for the fees per gas.
### formatted ​
`{ gasPrice: string | undefined; maxFeePerGas: string | undefined; maxPriorityFeePerGas: string | undefined; }`
Object of formatted values using `formatUnits`.
### gasPrice ​
`bigint | undefined`
  * Gas price.
  * When `type` is `'eip1559'`, value is `undefined`.


### maxFeePerGas ​
`bigint | undefined`
  * Max fee per gas.
  * When `type` is `'legacy'`, value is `undefined`.


### maxPriorityFeePerGas ​
`bigint | undefined`
  * Max priority fee per gas.
  * When `type` is `'legacy'`, value is `undefined`.


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
 estimateFeesPerGasQueryKey,
 estimateFeesPerGasQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `estimateFeesPerGas`


