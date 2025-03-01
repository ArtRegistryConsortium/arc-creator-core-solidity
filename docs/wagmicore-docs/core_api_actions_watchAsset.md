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
# watchAsset ​
Action for requesting user tracks the token in their wallet. Returns a boolean indicating if the token was successfully added.
## Import ​
ts```
import { watchAsset } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchAsset } from '@wagmi/core'
import { config } from './config'
await watchAsset(config, {
 type: 'ERC20',
 options: {
  address: '0x0000000000000000000000000000000000000000',
  symbol: 'WAGMI',
  decimals: 18,
 },
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
import { type WatchAssetParameters } from '@wagmi/core'
```

### connector ​
`Connector | undefined`
Connector to sign message with.
index.tsconfig.ts
ts```
import { getAccount, watchAsset } from '@wagmi/core'
import { config } from './config'
const { connector } = getAccount(config)
const result = await watchAsset(config, {
 connector, 
 options: {
  address: '0x0000000000000000000000000000000000000000',
  symbol: 'WAGMI',
  decimals: 18,
 },
 type: 'ERC20',
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

### options ​
`{ address: string; symbol: string; decimals: number; image?: string | undefined; }`
Asset options.
index.tsconfig.ts
ts```
import { watchAsset } from '@wagmi/core'
import { config } from './config'
const result = await watchAsset(config, {
 options: { 
  address: '0x0000000000000000000000000000000000000000', 
  symbol: 'WAGMI', 
  decimals: 18, 
 }, 
 type: 'ERC20',
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
`'ERC20'`
Type of asset.
index.tsconfig.ts
ts```
import { watchAsset } from '@wagmi/core'
import { config } from './config'
const result = await watchAsset(config, {
 options: {
  address: '0x0000000000000000000000000000000000000000',
  symbol: 'WAGMI',
  decimals: 18,
 },
 type: 'ERC20', 
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
import { type WatchAssetReturnType } from '@wagmi/core'
```

`boolean`
Returns a boolean indicating if the token was successfully added.
## Error ​
ts```
import { type WatchAssetErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type WatchAssetData,
 type WatchAssetVariables,
 type WatchAssetMutate,
 type WatchAssetMutateAsync,
 watchAssetMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `watchAsset`


