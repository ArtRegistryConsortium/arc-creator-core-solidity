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
# getGasPrice ​
Action for fetching the current price of gas (in wei).
## Import ​
ts```
import { getGasPrice } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getGasPrice } from '@wagmi/core'
import { config } from './config'
const gasPrice = await getGasPrice(config)
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
import { type GetGasPriceParameters } from '@wagmi/core'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsconfig.ts
ts```
import { getGasPrice } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const gasPrice = await getGasPrice(config, {
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
import { type GetGasPriceReturnType } from '@wagmi/core'
```

`bigint`
Current price of gas (in wei).
## Error ​
ts```
import { type GetGasPriceErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetGasPriceData,
 type GetGasPriceOptions,
 type GetGasPriceQueryFnData,
 type GetGasPriceQueryKey,
 getGasPriceQueryKey,
 getGasPriceQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getGasPrice`


