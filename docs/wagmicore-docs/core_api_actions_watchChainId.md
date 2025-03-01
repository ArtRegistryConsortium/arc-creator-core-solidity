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
# watchChainId ​
Subscribe to chain ID changes.
## Import ​
ts```
import { watchChainId } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchChainId } from '@wagmi/core'
import { config } from './config'
const unwatch = watchChainId(config, {
 onChange(chainId) {
  console.log('Chain ID changed!', chainId)
 },
})
unwatch()
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
import { type WatchChainIdParameters } from '@wagmi/core'
```

### onChange ​
`onChange(chainId: GetChainIdReturnType, prevChainId: GetChainIdReturnType): void`
Callback function called when chain ID changes.
index.tsconfig.ts
ts```
import { watchChainId } from '@wagmi/core'
import { config } from './config'
const unwatch = watchChainId(config, {
 onChange(chainId) { 
  console.log('Chain ID changed!', chainId)
 },
})
unwatch()
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
import { type WatchChainIdReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
