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
# Error Handling ​
The `error` property in Wagmi Composables is strongly typed with it's corresponding error type. This enables you to have granular precision with handling errors in your application.
You can discriminate the error type by using the `name` property on the error object.
index.vueconfig.ts
vue```
<script setup lang="ts">
import {
useBlockNumber
 } from 'wagmi'
const {
data
,
error
 } =
useBlockNumber
()


error
?.
name



</script>
<template>
 <
div
 v-if="
error
?.
name
 === 'HttpRequestError'">
  A HTTP error occurred. Status: {{
error
.
status
 }}
 </
div
>
 <
div
 v-else-if="
error
?.
name
 === 'LimitExceededRpcError'">
  Rate limit exceeded. Code: {{
error
.
code
 }}
 </
div
>
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

