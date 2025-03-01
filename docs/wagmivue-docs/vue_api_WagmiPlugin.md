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
# WagmiPlugin ​
Vue Plugin for Wagmi.
## Import ​
ts```
import { WagmiPlugin } from '@wagmi/vue'
```

## Usage ​
main.tsconfig.ts
ts```
import { createApp } from 'vue'
import { WagmiPlugin } from '@wagmi/vue'
import App from './App.vue'
import { config } from './config'
createApp(App)
 .use(WagmiPlugin, { config })
 .mount('#app')
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
import { type WagmiPluginProps } from '@wagmi/vue'
```

### config ​
`Config` object to inject with context.
main.tsconfig.ts
ts```
import { createApp } from 'vue'
import { WagmiPlugin } from '@wagmi/vue'
import App from './App.vue'
import { config } from './config'
createApp(App)
 .use(WagmiPlugin, { 
  config
 })
 .mount('#app')
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

### initialState ​
`State | undefined`
  * Initial state to hydrate into the Wagmi Config. Useful for SSR.


main.tsconfig.ts
ts```
import { createApp } from 'vue'
import { WagmiPlugin } from '@wagmi/vue'
import App from './App.vue'
import { config } from './config'
createApp(App)
 .use(WagmiPlugin, { 
  config,
  initialState: /* ... */
 })
 .mount('#app')
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

### reconnectOnMount ​
`boolean | undefined`
  * Whether or not to reconnect previously connected connectors on mount.
  * Defaults to `true`.


main.tsconfig.ts
ts```
import { createApp } from 'vue'
import { WagmiPlugin } from '@wagmi/vue'
import App from './App.vue'
import { config } from './config'
createApp(App)
 .use(WagmiPlugin, { 
  config,
  reconnectOnMount: false
 })
 .mount('#app')
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

## configKey ​
Key to use to provide/inject `Config` via `WagmiPlugin`.
ts```
import { configKey, type Config } from '@wagmi/vue'
import { inject } from 'vue'
inject<Config | undefined>(configKey)
```

