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
# getEnsName ​
Action for fetching primary ENS name for address.
## Import ​
ts```
import { getEnsName } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getEnsName } from '@wagmi/core'
import { config } from './config'
const ensName = getEnsName(config, {
 address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
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
import { type GetEnsNameParameters } from '@wagmi/core'
```

### address ​
`Address`
Address to get the name for.
index.tsconfig.ts
ts```
import { getEnsName } from '@wagmi/core'
import { config } from './config'
const ensName = await getEnsName(config, {
 address: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
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
Block number to get name at.
index.tsconfig.ts
ts```
import { getEnsName } from '@wagmi/core'
import { config } from './config'
const ensName = getEnsName(config, {
 address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
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
Block tag to get name at.
index.tsconfig.ts
ts```
import { getEnsName } from '@wagmi/core'
import { config } from './config'
const ensName = getEnsName(config, {
 address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
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
import { getEnsName } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const ensName = await getEnsName(config, {
 address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
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

### universalResolverAddress ​
`Address | undefined`
  * Address of ENS Universal Resolver Contract.
  * Defaults to current chain's Universal Resolver Contract address.


index.tsconfig.ts
ts```
import { getEnsName } from '@wagmi/core'
import { config } from './config'
const ensName = await getEnsName(config, {
 address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 universalResolverName: '0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376', 
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
import { type GetEnsNameReturnType } from '@wagmi/core'
```

`string | null`
The primary ENS name for the address. Returns `null` if address does not have primary name assigned.
## Error ​
ts```
import { type GetEnsNameErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetEnsNameData,
 type GetEnsNameOptions,
 type GetEnsNameQueryFnData,
 type GetEnsNameQueryKey,
 getEnsNameQueryKey,
 getEnsNameQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getEnsName`


