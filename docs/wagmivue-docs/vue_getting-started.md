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
# Getting Started ​
## Overview ​
Wagmi is a collection of Vue composition utilities for Ethereum. You can learn more about the rationale behind the project in the Why Wagmi section.
## Automatic Installation ​
For new projects, it is recommended to set up your Wagmi app using the `create-wagmi` command line interface (CLI). This will create a new Wagmi project using TypeScript and install the required dependencies.
pnpmnpmyarnbun
bash```
pnpm create wagmi
```

bash```
npm create wagmi@latest
```

bash```
yarn create wagmi
```

bash```
bun create wagmi
```

Once the command runs, you'll see some prompts to complete.
```
Project name: wagmi-project
Select a framework: Vue / Vanilla
...
```

After the prompts, `create-wagmi` will create a directory with your project name and install the required dependencies. Check out the `README.md` for further instructions (if required).
## Manual Installation ​
To manually add Wagmi to your project, install the required packages.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/vue viem@2.x @tanstack/vue-query
```

bash```
npm install @wagmi/vue viem@2.x @tanstack/vue-query
```

bash```
yarn add @wagmi/vue viem@2.x @tanstack/vue-query
```

bash```
bun add @wagmi/vue viem@2.x @tanstack/vue-query
```

  * Viem is a TypeScript interface for Ethereum that performs blockchain operations.
  * TanStack Query is an async state manager that handles requests, caching, and more.
  * TypeScript is optional, but highly recommended. Learn more about TypeScript support.


### Create Config ​
Create and export a new Wagmi config using `createConfig`.
config.ts
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

In this example, Wagmi is configured to use the Mainnet and Sepolia chains, and `injected` connector. Check out the `createConfig` docs for more configuration options.
TypeScript Tip
If you are using TypeScript, you can "register" the Wagmi config or use the hook `config` property to get strong type-safety in places that wouldn't normally have type info.
register confighook config property
ts```
import {
useBlockNumber
 } from '@wagmi/vue'

useBlockNumber
({ chainId: 123 })
Type '123' is not assignable to type 'DeepMaybeRef<1 | 11155111 | undefined>'.

declare module '@wagmi/vue' {
 interfaceRegister {

config
: typeof
config

 }
}
```

ts```
import {
useBlockNumber
 } from '@wagmi/vue'

useBlockNumber
({ chainId: 123, 
config
 })
Type '123' is not assignable to type 'DeepMaybeRef<1 | 11155111 | undefined>'.

```

By registering or using the hook `config` property, `useBlockNumber`'s `chainId` is strongly typed to only allow Mainnet and Sepolia IDs. Learn more by reading the TypeScript docs.
### Add Plugin to App ​
App the `WagmiPlugin` to your app instance and pass the `config` you created earlier to the plugin options.
main.tsApp.vueconfig.ts
tsx```
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import { config } from './config'
import App from './App.vue'
createApp(App)
 .use(WagmiPlugin, { config })
 .mount('#app')
```

vue```
<template>
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

Check out the `WagmiPlugin` docs to learn more about the plugin API.
### Setup TanStack Query ​
After the `WagmiPlugin`, attach the `VueQueryPlugin` to your app, and pass a new `QueryClient` instance to the `queryClient` property.
main.tsApp.vueconfig.ts
tsx```
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import { config } from './config'
import App from './App.vue'
const queryClient = new QueryClient()
createApp(App)
 .use(WagmiPlugin, { config })
 .use(VueQueryPlugin, { queryClient })
 .mount('#app')
```

vue```
<template>
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

Check out the TanStack Query docs to learn about the library, APIs, and more.
### Use Wagmi ​
Now that everything is set up, every component inside your app can use Wagmi Vue Composables.
App.vuemain.tsconfig.ts
vue```
<script setup lang="ts">
import { useAccount, useEnsName } from '@wagmi/vue'
const { address } = useAccount()
const { data, error, status } = useEnsName({ address })
</script>
<template>
 <div v-if="status === 'pending'">Loading ENS name</div>
 <div v-else-if="status === 'error'">
  Error fetching ENS name: {{error.message}}
 </div>
 <div v-else>ENS name: {{data}}</div>
</template>
```

tsx```
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import { config } from './config'
import App from './App.vue'
const queryClient = new QueryClient()
createApp(App)
 .use(WagmiPlugin, { config })
 .use(VueQueryPlugin, { queryClient })
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

## Next Steps ​
For more information on what to do next, check out the following topics.
  * **TypeScript** Learn how to get the most out of Wagmi's type-safety and inference for an enlightened developer experience.
  * **Connect Wallet** Learn how to enable wallets to connect to and disconnect from your apps and display information about connected accounts.
  * **Vue Composables** Browse the collection of Vue Composables and learn how to use them.
  * **Viem** Learn about Viem and how it works with Wagmi.


