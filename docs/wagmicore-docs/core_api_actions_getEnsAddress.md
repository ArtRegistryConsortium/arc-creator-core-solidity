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
# getEnsAddress ​
Action for fetching ENS address for name.
## Import ​
ts```
import { getEnsAddress } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = getEnsAddress(config, {
 name: normalize('wevm.eth'),
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

WARNING
Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to normalize ENS names with UTS-46 normalization before passing them to `getEnsAddress`. You can use Viem's built-in `normalize` function for this.
## Parameters ​
ts```
import { type GetEnsAddressParameters } from '@wagmi/core'
```

### blockNumber ​
`bigint | undefined`
Block number to get ENS address at.
index.tsconfig.ts
ts```
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = getEnsAddress(config, {
 blockNumber: 17829139n, 
 name: normalize('wevm.eth'),
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
Block tag to get ENS address at.
index.tsconfig.ts
ts```
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = getEnsAddress(config, {
 blockTag: 'latest', 
 name: normalize('wevm.eth'),
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
import { getEnsAddress } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = await getEnsAddress(config, {
 chainId: mainnet.id, 
 name: normalize('wevm.eth'),
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

### coinType ​
`number | undefined`
The ENSIP-9 coin type to fetch the address for.
index.tsconfig.ts
ts```
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = await getEnsAddress(config, {
 coinType: 60, 
 name: normalize('wevm.eth'),
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

### name ​
`string`
Name to get the address for.
index.tsconfig.ts
ts```
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = await getEnsAddress(config, {
 name: normalize('wevm.eth'), 
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
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAddress = await getEnsAddress(config, {
 name: normalize('wevm.eth'),
 universalResolverAddress: '0x74E20Bd2A1fE0cdbe45b9A1d89cb7e0a45b36376', 
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
import { type GetEnsAddressReturnType } from '@wagmi/core'
```

`string`
ENS address.
## Error ​
ts```
import { type GetEnsAddressErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetEnsAddressData,
 type GetEnsAddressOptions,
 type GetEnsAddressQueryFnData,
 type GetEnsAddressQueryKey,
 getEnsAddressQueryKey,
 getEnsAddressQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getEnsAddress`


