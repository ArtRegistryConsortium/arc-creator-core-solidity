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
# useAccountEffect ​
Hook for listening to account lifecycle events.
## Import ​
ts```
import { useAccountEffect } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useAccountEffect } from 'wagmi'
function App() {
 useAccountEffect({
  onConnect(data) {
   console.log('Connected!', data)
  },
  onDisconnect() {
   console.log('Disconnected!')
  },
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

## Parameters ​
ts```
import { type UseAccountEffectParameters } from 'wagmi'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useAccountEffect } from 'wagmi'
import { config } from './config'
function App() {
 useAccountEffect({
  config,
  onConnect(data) {
   console.log('Connected!', data)
  },
  onDisconnect() {
   console.log('Disconnected!')
  },
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

### onConnect ​
`((data: { address: `0x${string}`; addresses: readonly [`0x${string}`, ...`0x${string}`[]]; chain: Chain | undefined chainId: number; connector: Connector; isReconnected: boolean }) => void) | undefined`
Callback that is called when accounts are connected.
index.tsxconfig.ts
tsx```
import { useAccountEffect } from 'wagmi'
function App() {
 useAccountEffect({
  onConnect(data) {
   console.log('Connected!', data)
  },
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

### onDisconnect ​
`(() => void) | undefined`
Callback that is called when no more accounts are connected.
index.tsxconfig.ts
tsx```
import { useAccountEffect } from 'wagmi'
function App() {
 useAccountEffect({
  onDisconnect() {
   console.log('Disconnected!')
  },
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

## Action ​
  * `getAccount`
  * `watchAccount`


