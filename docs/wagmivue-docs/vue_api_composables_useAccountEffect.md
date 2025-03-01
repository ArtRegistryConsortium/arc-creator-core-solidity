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
Composable for listening to account lifecycle events.
## Import ​
ts```
import { useAccountEffect } from '@wagmi/vue'
```

## Usage ​
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useAccountEffect } from '@wagmi/vue'
useAccountEffect({
 onConnect(data) {
  console.log('Connected!', data)
 },
 onDisconnect() {
  console.log('Disconnected!')
 },
})
</script>
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
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
import { type useAccountEffectParameters } from '@wagmi/vue'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the `WagmiPlugin`.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useAccountEffect } from '@wagmi/vue'
import { config } from './config'
useAccountEffect({
 config, 
 onConnect(data) {
  console.log('Connected!', data)
 },
 onDisconnect() {
  console.log('Disconnected!')
 },
})
</script>
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### onConnect ​
`MaybeRef<((data: { address: `0x${string}`; addresses: readonly [`0x${string}`, ...`0x${string}`[]]; chain: Chain | undefined chainId: number; connector: Connector; isReconnected: boolean }) => void)> | undefined`
Callback that is called when accounts are connected.
index.tsxconfig.ts
tsx```
import { useAccountEffect } from '@wagmi/vue'
function App() {
 useAccountEffect({
  onConnect(data) {
   console.log('Connected!', data)
  },
 })
}
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### onDisconnect ​
`MaybeRef<(() => void)> | undefined`
Callback that is called when no more accounts are connected.
index.tsxconfig.ts
tsx```
import { useAccountEffect } from '@wagmi/vue'
function App() {
 useAccountEffect({
  onDisconnect() {
   console.log('Disconnected!')
  },
 })
}
```

ts```
import { http, createConfig } from '@wagmi/vue'
import { mainnet, sepolia } from '@wagmi/vue/chains'
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


