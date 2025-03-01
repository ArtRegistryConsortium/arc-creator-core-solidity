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
# useChainId ​
Hook for getting current chain ID.
## Import ​
ts```
import { useChainId } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useChainId } from 'wagmi'
function App() {
 const chainId = useChainId()
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
import { type UseChainIdParameters } from 'wagmi'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useChainId } from 'wagmi'
import { config } from './config'
function App() {
 const chainId = useChainId({
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
import { type UseChainIdReturnType } from 'wagmi'
```

`number`
Current chain ID from `config.state.chainId`.
INFO
Only returns chain IDs for chains configured via `createConfig`'s `chains` parameter.
If the active connection `chainId` is not from a chain included in your Wagmi `Config`, `useChainId` will return the last configured chain ID.
## Action ​
  * `getChainId`
  * `watchChainId`


