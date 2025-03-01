Skip to content 
Menu
Return to top
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
# Actions ​
Sometimes the declarative nature of Vue Composables doesn't work for parts of your app. For those cases, you can use Wagmi Core Actions directly!
All the Wagmi Core Actions are importable using the `@wagmi/vue/actions` entrypoint. For example, you can use the `watchBlockNumber` action to watch for block number changes.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { watchEffect } from 'vue'
import { useConfig } from '@wagmi/vue'
import { watchBlockNumber } from '@wagmi/vue/actions'
const config = useConfig()
watchEffect((onCleanup) => {
 const unwatch = watchBlockNumber(config, {
  onBlockNumber(blockNumber) {
   console.log('Block number changed!', blockNumber)
  },
 })
 onCleanup(unwatch)
})
</script>
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

See the Wagmi Core docs for more info on what actions are available.
