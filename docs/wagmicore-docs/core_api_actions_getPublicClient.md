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
# getPublicClient ​
Action for getting Viem `PublicClient` instance.
## Import ​
ts```
import { getPublicClient } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { getPublicClient } from '@wagmi/core'
import { config } from './config'
const client = getPublicClient(config)
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
If you want to optimize bundle size, you should use `getClient` along with Viem's tree-shakable actions instead. Since Public Client has all public actions attached directly to it.
## Parameters ​
ts```
import { type GetClientParameters } from '@wagmi/core'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when getting Viem Public Client.
index.tsconfig.ts
ts```
import { getPublicClient } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { config } from './config'
const client = getPublicClient(config, {
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
import { type GetPublicClientReturnType } from '@wagmi/core'
```

`PublicClient | undefined`
Viem `PublicClient` instance.
