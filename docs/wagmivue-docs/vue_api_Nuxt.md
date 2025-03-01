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
# Nuxt ​
Nuxt Module for Wagmi. Adds all Composables as auto-imports.
## Usage ​
nuxt.config.tsindex.vueconfig.ts
ts```
import {
defineNuxtConfig
 } from 'nuxt/config'
export default
defineNuxtConfig
({

modules
: ['@wagmi/vue/nuxt'],
})
```

vue```
<script setup lang="ts">
// No need to import `useAccount`!
const account = useAccount()
</script>
<template>
 Address: {{ account.address }}
</template>
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

