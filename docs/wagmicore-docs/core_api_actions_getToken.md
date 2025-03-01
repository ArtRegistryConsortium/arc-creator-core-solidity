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
# getToken ​
Action for fetching token info.
## Import ​
ts```
import { getToken } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getToken } from '@wagmi/core'
import { config } from './config'
const token = getToken(config, {
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
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
import { type GetTokenParameters } from '@wagmi/core'
```

### address ​
`Address`
Address to get token for.
index.tsconfig.ts
ts```
import { getToken } from '@wagmi/core'
import { config } from './config'
const token = getToken(config, {
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
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
import { getToken } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const token = await getToken(config, {
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
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
import { getToken } from '@wagmi/core'
import { config } from './config'
const token = getToken(config, {
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
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

## Return Type ​
ts```
import { type GetTokenReturnType } from '@wagmi/core'
```

### address ​
`Address`
Address of token.
### decimals ​
`number`
Number of decimals for token.
### name ​
`string | undefined`
Name of token.
### symbol ​
`string | undefined`
Symbol of token.
### totalSupply ​
`{ formatted: string; value: bigint; }`
Total supply of token. `formatted` is formatted using `formatUnits`.
## Error ​
ts```
import { type GetTokenErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetTokenData,
 type GetTokenOptions,
 type GetTokenQueryFnData,
 type GetTokenQueryKey,
 getTokenQueryKey,
 getTokenQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `multicall`


