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
# watchConnectors ​
Subscribe to connectors changes.
## Import ​
ts```
import { watchConnectors } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchConnectors } from '@wagmi/core'
import { config } from './config'
const unwatch = watchConnectors(config, {
 onChange(connectors) {
  console.log('Connectors changed!', connectors)
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
import { type WatchConnectorsParameters } from '@wagmi/core'
```

### onChange ​
`onChange(connectors: GetConnectorsReturnType, prevConnectors: GetConnectorsReturnType): void`
Callback function called when connectors changes.
index.tsconfig.ts
ts```
import { watchConnectors } from '@wagmi/core'
import { config } from './config'
const unwatch = watchConnectors(config, {
 onChange(connectors) { 
  console.log('Connectors changed!', connectors)
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
import { type WatchConnectorsReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
