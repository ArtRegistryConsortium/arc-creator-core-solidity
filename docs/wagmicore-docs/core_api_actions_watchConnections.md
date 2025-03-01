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
# watchConnections ​
Subscribe to connections changes.
## Import ​
ts```
import { watchConnections } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchConnections } from '@wagmi/core'
import { config } from './config'
const unwatch = watchConnections(config, {
 onChange(data) {
  console.log('Connections changed!', data)
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
import { type WatchConnectionsParameters } from '@wagmi/core'
```

### onChange ​
`onChange(connections: GetConnectionsReturnType, prevConnections: GetConnectionsReturnType): void`
Callback function called when connections changes.
index.tsconfig.ts
ts```
import { watchConnections } from '@wagmi/core'
import { config } from './config'
const unwatch = watchConnections(config, {
 onChange(data) { 
  console.log('Connections changed!', data)
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
import { type WatchConnectionsReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
