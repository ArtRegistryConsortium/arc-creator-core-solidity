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
# useClient ​
Hook for getting Viem `Client` instance.
## Import ​
ts```
import { useClient } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useClient } from 'wagmi'
function App() {
 const client = useClient()
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

## Parameters ​
ts```
import { type UseClientParameters } from 'wagmi'
```

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when getting Viem Client.
index.tsconfig.ts
ts```
import { useClient } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { config } from './config'
function App() {
 const client = useClient({
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
import { useClient } from 'wagmi'
import { config } from './config'
function App() {
 const client = useClient({
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
import { type UseClientReturnType } from 'wagmi'
```

`Client | undefined`
Viem `Client` instance.
## Action ​
  * `getClient`
  * `watchClient`


