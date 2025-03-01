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
# TanStack Query ​
Wagmi Composables are not only a wrapper around the core Wagmi Actions, but they also utilize TanStack Query to enable trivial and intuitive fetching, caching, synchronizing, and updating of asynchronous data in your Vue applications.
Without an asynchronous data fetching abstraction, you would need to handle all the negative side-effects that comes as a result, such as: representing finite states (loading, error, success), handling race conditions, caching against a deterministic identifier, etc.
## Queries & Mutations ​
Wagmi Composables represent either a **Query** or a **Mutation**.
**Queries** are used for fetching data (e.g. fetching a block number, reading from a contract, etc), and are typically invoked on mount by default. All queries are coupled to a unique Query Key, and can be used for further operations such as refetching, prefetching, or modifying the cached data.
**Mutations** are used for mutating data (e.g. connecting/disconnecting accounts, writing to a contract, switching chains, etc), and are typically invoked in response to a user interaction. Unlike **Queries** , they are not coupled with a query key.
## Terms ​
  * **Query** : An asynchronous data fetching (e.g. read data) operation that is tied against a unique Query Key.
  * **Mutation** : An asynchronous mutating (e.g. create/update/delete data or side-effect) operation.
  * **Query Key** : A unique identifier that is used to deterministically identify a query. It is typically a tuple of the query name and the query arguments.
  * **Stale Data** : Data that is unused or inactive after a certain period of time.
  * **Query Fetching** : The process of invoking an async query function.
  * **Query Refetching** : The process of refetching **rendered** queries.
  * **Query Invalidation** : The process of marking query data as stale (e.g. inactive/unused), and refetching **rendered** queries.
  * **Query Prefetching** : The process of prefetching queries and seeding the cache.


## Query Keys ​
Query Keys are typically used to perform advanced operations on the query such as: invalidation, refetching, prefetching, etc.
Wagmi exports Query Keys for every Composable, and they can be retrieved via the Composable (Vue) or via an Import (Vanilla JS).
Read more about **Query Keys** on the TanStack Query docs.
### Composable (Vue) ​
Each Composable returns a `queryKey` value. You would use this approach when you want to utilize the query key in a Vue component as it handles reactivity for you, unlike the Import method below.
vue```
<script setup lang="ts">
import { useBalance } from '@wagmi/vue'
const { data: balance } = useBalance()
</script>
<template>
 <div>{{ balance }}</div>
</template>
```

### Import (Vanilla JS) ​
Each Hook has a corresponding `get<X>QueryOptions` function that returns a query key. You would use this method when you want to utilize the query key outside of a Vue component in a Vanilla JS context, like in a utility function.
ts```
import { getBalanceQueryOptions } from '@wagmi/vue/query'
import { config } from './config'
function perform() {
 const { queryKey } = getBalanceQueryOptions(config, { 
  chainId: config.state.chainId
 })
}
```

WARNING
The caveat of this method is that it does not handle reactivity for you (e.g. active account/chain changes, argument changes, etc). You would need to handle this yourself by explicitly passing through the arguments to `get<X>QueryOptions`.
## Invalidating Queries ​
Invalidating a query is the process of marking the query data as stale (e.g. inactive/unused), and refetching the queries that are already rendered.
Read more about **Invalidating Queries** on the TanStack Query docs.
#### Example: Watching a Users' Balance ​
You may want to "watch" a users' balance, and invalidate the balance after each incoming block. We can invoke `invalidateQueries` inside a `watchEffect` – this will refetch all rendered balance queries when the `blockNumber` changes.
vue```
<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { useBlockNumber, useBalance } from '@wagmi/vue'
import { watchEffect } from 'vue'
const queryClient = useQueryClient()
const { data: blockNumber } = useBlockNumber({ watch: true })
const { data: balance, queryKey } = useBalance()
watchEffect(() => {
 queryClient.invalidateQueries({ queryKey })
})
</script>
<template>
 <div>Block Number: {{ blockNumber }}</div>
 <div>Balance: {{ balance }}</div>
</template>
```

#### Example: After User Interaction ​
Maybe you want to invalidate a users' balance after some interaction. This would mark the balance as stale, and consequently refetch all rendered balance queries.
vue```
<script setup lang="ts">
import { useBalance } from '@wagmi/vue'
// 1. Extract `queryKey` from the useBalance Hook.
const { queryKey } = useBalance()
</script>
<template>
 // 2. Add a button that invalidates the balance query.
 <button @click="queryClient.invalidateQueries({ queryKey })">
  Invalidate
 </button>
</template>
```

vue```
<script setup lang="ts">
// 3. Other `useBalance` Hooks in your rendered Vue tree will be refetched!
const { data: balance } = useBalance()
</script>
<template>
 <div>{{ balance }}</div>
</template>
```

## Fetching Queries ​
Fetching a query is the process of invoking the query function to retrieve data. If the query exists and the data is not invalidated or older than a given `staleTime`, then the data from the cache will be returned. Otherwise, the query will fetch for the latest data.
example.tsxmain.tsconfig.ts
tsx```
import { getBlockQueryOptions } from '@wagmi/vue/query'
import { queryClient } from './main'
import { config } from './config'
export async function fetchBlockData() {
 return queryClient.fetchQuery(
  getBlockQueryOptions(config, {
   chainId: config.state.chainId,
  }
 ))
}
```

ts```
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import App from './App.vue'
import { config } from './config'
export const queryClient = new QueryClient()
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

## Retrieving & Updating Query Data ​
You can retrieve and update query data imperatively with `getQueryData` and `setQueryData`. This is useful for scenarios where you want to retrieve or update a query outside of a Vue component.
Note that these functions do not invalidate or refetch queries.
example.tsxmain.tsconfig.ts
tsx```
import type { GetBalanceReturnType } from '@wagmi/vue/actions'
import { getBalanceQueryOptions } from '@wagmi/vue/query'
import { queryClient } from './app'
import { config } from './config'
export function getBalanceData() {
 return queryClient.getQueryData(
  getBalanceQueryOptions(config, {
   chainId: config.state.chainId,
  }
 ))
}
export function setBalanceData(parameters: Partial<GetBalanceReturnType>) {
 return queryClient.setQueryData(
  getBalanceQueryOptions(config, {
   chainId: config.state.chainId,
  },
  data => ({ ...data, ...parameters })
 ))
}
```

ts```
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import App from './App.vue'
import { config } from './config'
export const queryClient = new QueryClient()
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

## Prefetching Queries ​
Prefetching a query is the process of fetching the data ahead of time and seeding the cache with the returned data. This is useful for scenarios where you want to fetch data before the user navigates to a page, or fetching data on the server to be reused on client hydration.
Read more about **Prefetching Queries** on the TanStack Query docs.
#### Example: Prefetching in Event Handler ​
vue```
<script setup lang="ts">
import { useConfig, useChainId, useQueryClient } from '@wagmi/vue'
import { getBlockQueryOptions } from '@wagmi/vue/query'
const config = useConfig()
const chainId = useChainId()
const queryClient = useQueryClient()
const prefetch = () =>
 queryClient.prefetchQuery(getBlockQueryOptions(config, { chainId }))
</script>
<template>
 <a
  @mouseenter="prefetch"
  @focus="prefetch"
  href="..."
 >
  Block details
 </a>
</template>
```

## SSR ​
It is possible to utilize TanStack Query's SSR strategies with Wagmi Composables & Query Keys. Check out the SSR guide.
## Devtools ​
TanStack Query includes dedicated Devtools that assist in visualizing and debugging your queries, their cache states, and much more. You will have to pass a custom `queryKeyFn` to your `QueryClient` for Devtools to correctly serialize BigInt values for display. Alternatively, You can use the `hashFn` from `@wagmi/core/query`, which already handles this serialization.
#### Install ​
pnpmnpmyarnbun
bash```
pnpm i @tanstack/vue-query-devtools
```

bash```
npm i @tanstack/vue-query-devtools
```

bash```
yarn add @tanstack/vue-query-devtools
```

bash```
bun i @tanstack/vue-query-devtools
```

#### Usage ​
App.vuemain.vue
vue```
<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>
<template>
 <VueQueryDevtools />
</template>
```

vue```
<script setup lang="ts">
import { createApp } from 'vue'
import { WagmiPlugin } from '@wagmi/vue'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import { config } from './config'
const queryClient = new QueryClient({ 
 defaultOptions: { 
  queries: { 
   queryKeyHashFn: hashFn, 
  }, 
 }, 
});
createApp(App)
 .use(WagmiPlugin, { config })
 .use(VueQueryPlugin, { queryClient })
 .mount('#app')
</script>
```

