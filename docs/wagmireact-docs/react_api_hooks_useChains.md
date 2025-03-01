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
# useChains ​
Hook for getting configured chains
## Import ​
ts```
import { useChains } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useChains } from 'wagmi'
function App() {
 const chains = useChains()
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
import { type UseChainsParameters } from 'wagmi'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useChains } from 'wagmi'
import { config } from './config'
function App() {
 const chains = useChains({
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
import { type UseChainsReturnType } from 'wagmi'
```

`readonly [Chain, ...Chain[]]`
Chains from `config.chains`.
## Action ​
  * `getChains`


