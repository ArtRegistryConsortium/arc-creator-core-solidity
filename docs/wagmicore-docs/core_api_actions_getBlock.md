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
# getBlock ​
Action for fetching information about a block at a block number, hash or tag.
## Import ​
ts```
import { getBlock } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getBlock } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlock(config)
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
import { type GetBlockParameters } from '@wagmi/core'
```

### blockHash ​
``0x${string}``
Information at a given block hash.
index.tsconfig.ts
ts```
import { getBlock } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlock(config, {
 blockHash: '0x89644bbd5c8d682a2e9611170e6c1f02573d866d286f006cbf517eec7254ec2d'
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
`bigint`
Information at a given block number.
index.tsconfig.ts
ts```
import { getBlock } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlock(config, {
 blockNumber: 42069n
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
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized'`
Information at a given block tag. Defaults to `'latest'`.
index.tsconfig.ts
ts```
import { getBlock } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlock(config, {
 blockTag: 'pending'
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
import { getBlock } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const blockNumber = await getBlock(config, {
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

### includeTransactions ​
`boolean`
Whether or not to include transactions as objects.
index.tsconfig.ts
ts```
import { getBlock } from '@wagmi/core'
import { config } from './config'
const blockNumber = await getBlock(config, {
 includeTransactions: true
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
import { type GetBlockReturnType } from '@wagmi/core'
```

`Block`
Information about the block.
## Error ​
ts```
import { type GetBlockErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetBlockData,
 type GetBlockOptions,
 type GetBlockQueryFnData,
 type GetBlockQueryKey,
 getBlockQueryKey,
 getBlockQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getBlock`


