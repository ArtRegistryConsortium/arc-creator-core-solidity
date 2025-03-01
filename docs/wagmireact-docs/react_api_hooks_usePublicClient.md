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
# usePublicClient ​
Hook for getting Viem `PublicClient` instance.
## Import ​
ts```
import { usePublicClient } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { usePublicClient } from 'wagmi'
function App() {
 const client = usePublicClient()
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

WARNING
If you want to optimize bundle size, you should use `useClient` along with Viem's tree-shakable actions instead. Since Public Client has all public actions attached directly to it.
## Parameters ​
ts```
import { type UsePublicClientParameters } from 'wagmi'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when getting Viem Public Client.
index.tsconfig.ts
ts```
import { usePublicClient } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { config } from './config'
function App() {
 const client = usePublicClient({
  chainId: mainnet.id, 
 })
}
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

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { usePublicClient } from 'wagmi'
import { config } from './config'
function App() {
 const client = usePublicClient({
  config,
 })
}
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
import { type UsePublicClientReturnType } from 'wagmi'
```

`PublicClient | undefined`
Viem `PublicClient` instance.
## Action ​
  * `getPublicClient`
  * `watchPublicClient`


