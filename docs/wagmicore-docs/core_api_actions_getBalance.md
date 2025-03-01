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
# getBalance ​
Action for fetching native currency or token balance.
## Import ​
ts```
import { getBalance } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getBalance } from '@wagmi/core'
import { config } from './config'
const balance = getBalance(config, {
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
import { type GetBalanceParameters } from '@wagmi/core'
```

### address ​
`Address`
Address to get balance for.
index.tsconfig.ts
ts```
import { getBalance } from '@wagmi/core'
import { config } from './config'
const balance = getBalance(config, {
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
Block number to get balance at.
index.tsconfig.ts
ts```
import { getBalance } from '@wagmi/core'
import { config } from './config'
const balance = getBalance(config, {
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
Block tag to get balance at.
index.tsconfig.ts
ts```
import { getBalance } from '@wagmi/core'
import { config } from './config'
const balance = getBalance(config, {
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
import { getBalance } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const balance = await getBalance(config, {
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

### token ​
`Address | undefined`
ERC-20 token address to get balance for.
index.tsconfig.ts
ts```
import { getBalance } from '@wagmi/core'
import { config } from './config'
const balance = getBalance(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
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

### unit ​
`'ether' | 'gwei' | 'wei' | number | undefined`
  * Units to use when formatting result.
  * Defaults to `'ether'`.


index.tsconfig.ts
ts```
import { getBalance } from '@wagmi/core'
import { config } from './config'
const balance = getBalance(config, {
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 unit: 'ether', 
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
import { type GetBalanceReturnType } from '@wagmi/core'
```

### decimals ​
`number`
Number of decimals for balance `value`.
### formatted ​
`string`
Formatted value of balance using `unit`.
### symbol ​
`string`
Symbol of native currency or token.
### value ​
`bigint`
Raw value of balance.
## Error ​
ts```
import { type GetBalanceErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetBalanceData,
 type GetBalanceOptions,
 type GetBalanceQueryFnData,
 type GetBalanceQueryKey,
 getBalanceQueryKey,
 getBalanceQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getBalance` for native currency balances
  * `multicall` for token balances


