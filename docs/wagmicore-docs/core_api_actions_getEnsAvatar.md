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
# getEnsAvatar ​
Action for fetching ENS address for avatar.
## Import ​
ts```
import { getEnsAvatar } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
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
Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to normalize ENS names with UTS-46 normalization before passing them to `getEnsAvatar`. You can use Viem's built-in `normalize` function for this.
## Parameters ​
ts```
import { type GetEnsAvatarParameters } from '@wagmi/core'
```

### assetGatewayUrls viem@>=2.3.1 ​
`{ ipfs?: string | undefined; arweave?: string | undefined } | undefined`
Gateway urls to resolve IPFS and/or Arweave assets.
index.tsconfig.ts
ts```
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
 assetGatewayUrls: { 
  ipfs: 'https://cloudflare-ipfs.com', 
 }, 
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

### blockNumber ​
`bigint | undefined`
Block number to get avatar at.
index.tsconfig.ts
ts```
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
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
Block tag to get avatar at.
index.tsconfig.ts
ts```
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
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
import { getEnsAvatar } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
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

### gatewayUrls ​
`string[] | undefined`
A set of Universal Resolver gateways, used for resolving CCIP-Read requests made through the ENS Universal Resolver Contract.
index.tsconfig.ts
ts```
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
 gatewayUrls: ['https://cloudflare-ipfs.com'] { 
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
Name to get the avatar for.
index.tsconfig.ts
ts```
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
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
import { getEnsAvatar } from '@wagmi/core'
import { normalize } from 'viem/ens'
import { config } from './config'
const ensAvatar = await getEnsAvatar(config, {
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
import { type GetEnsAvatarReturnType } from '@wagmi/core'
```

`string | null`
The avatar URI for ENS name.
## Error ​
ts```
import { type getEnsAvatarError } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type GetEnsAvatarData,
 type GetEnsAvatarOptions,
 type GetEnsAvatarQueryFnData,
 type GetEnsAvatarQueryKey,
 getEnsAvatarQueryKey,
 getEnsAvatarQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `getEnsAvatar`


