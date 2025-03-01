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
Wagmi Hooks are not only a wrapper around the core Wagmi Actions, but they also utilize TanStack Query to enable trivial and intuitive fetching, caching, synchronizing, and updating of asynchronous data in your React applications.
Without an asynchronous data fetching abstraction, you would need to handle all the negative side-effects that comes as a result, such as: representing finite states (loading, error, success), handling race conditions, caching against a deterministic identifier, etc.
## Queries & Mutations ​
Wagmi Hooks represent either a **Query** or a **Mutation**.
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


## Persistence via External Stores ​
By default, TanStack Query persists all query data in-memory. This means that if you refresh the page, all in-memory query data will be lost.
If you want to persist query data to an external storage, you can utilize TanStack Query's `createSyncStoragePersister` or `createAsyncStoragePersister` to plug external storage like `localStorage`, `sessionStorage`, IndexedDB or `AsyncStorage` (React Native).
### Sync Storage ​
Below is an example of how to set up Wagmi + TanStack Query with sync external storage like `localStorage` or `sessionStorage`.
#### Install ​
pnpmnpmyarnbun
bash```
pnpm i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

bash```
npm i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

bash```
yarn add @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

bash```
bun i @tanstack/query-sync-storage-persister @tanstack/react-query-persist-client
```

#### Usage ​
tsx```
// 1. Import modules.
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { WagmiProvider, deserialize, serialize } from 'wagmi'
// 2. Create a new Query Client with a default `gcTime`.
const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   gcTime: 1_000 * 60 * 60 * 24, // 24 hours
  },
 },
})
// 3. Set up the persister.
const persister = createSyncStoragePersister({
 serialize,
 storage: window.localStorage,
 deserialize,
})
function App() {
 return (
  <WagmiProvider config={config}>
   {/* 4. Wrap app in PersistQueryClientProvider */}
   <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
   >
    {/* ... */}
   </PersistQueryClientProvider>
  </WagmiProvider>
 )
}
```

Read more about Sync Storage Persistence.
### Async Storage ​
Below is an example of how to set up Wagmi + TanStack Query with async external storage like `IndexedDB` or `AsyncStorage`.
#### Install ​
pnpmnpmyarnbun
bash```
pnpm i @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

bash```
npm i @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

bash```
yarn add @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

bash```
bun i @tanstack/query-async-storage-persister @tanstack/react-query-persist-client
```

#### Usage ​
tsx```
// 1. Import modules.
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { WagmiProvider, deserialize, serialize } from 'wagmi'
// 2. Create a new Query Client with a default `gcTime`.
const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   gcTime: 1_000 * 60 * 60 * 24, // 24 hours
  },
 },
})
// 3. Set up the persister.
const persister = createAsyncStoragePersister({
 serialize,
 storage: AsyncStorage,
 deserialize,
})
function App() {
 return (
  <WagmiProvider config={config}>
   {/* 4. Wrap app in PersistQueryClientProvider */}
   <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
   >
    {/* ... */}
   </PersistQueryClientProvider>
  </WagmiProvider>
 )
}
```

Read more about Async Storage Persistence.
## Query Keys ​
Query Keys are typically used to perform advanced operations on the query such as: invalidation, refetching, prefetching, etc.
Wagmi exports Query Keys for every Hook, and they can be retrieved via the Hook (React) or via an Import (Vanilla JS).
Read more about **Query Keys** on the TanStack Query docs.
### Hook (React) ​
Each Hook returns a `queryKey` value. You would use this approach when you want to utilize the query key in a React component as it handles reactivity for you, unlike the Import method below.
ts```
import { useBlock } from 'wagmi'
function App() {
 const { queryKey } = useBlock()
}
```

### Import (Vanilla JS) ​
Each Hook has a corresponding `get<X>QueryOptions` function that returns a query key. You would use this method when you want to utilize the query key outside of a React component in a Vanilla JS context, like in a utility function.
ts```
import { getBlockQueryOptions } from 'wagmi/query'
import { config } from './config'
function perform() {
 const { queryKey } = getBlockQueryOptions(config, { 
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
You may want to "watch" a users' balance, and invalidate the balance after each incoming block. We can invoke `invalidateQueries` inside a `useEffect` with the block number as it's only dependency – this will refetch all rendered balance queries when the `blockNumber` changes.
tsx```
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useBlockNumber, useBalance } from 'wagmi'
function App() {
 const queryClient = useQueryClient()
 const { data: blockNumber } = useBlockNumber({ watch: true })
 const { data: balance, queryKey } = useBalance()
 useEffect(() => {
  queryClient.invalidateQueries({ queryKey })
 }, [blockNumber])
 return <div>{balance}</div>
}
```

#### Example: After User Interaction ​
Maybe you want to invalidate a users' balance after some interaction. This would mark the balance as stale, and consequently refetch all rendered balance queries.
tsx```
import { useBalance } from 'wagmi'
function App() {
 // 1. Extract `queryKey` from the useBalance Hook.
 const { queryKey } = useBalance()
 return (
  <button
   onClick={async () => {
    // 2. Invalidate the query when the user clicks "Invalidate".
    await queryClient.invalidateQueries({ queryKey })
   }}
  >
   Invalidate
  </button>
 )
}
function Example() {
 // 3. Other `useBalance` Hooks in your rendered React tree will be refetched!
 const { data: balance } = useBalance()
 return <div>{balance}</div>
}
```

## Fetching Queries ​
Fetching a query is the process of invoking the query function to retrieve data. If the query exists and the data is not invalidated or older than a given `staleTime`, then the data from the cache will be returned. Otherwise, the query will fetch for the latest data.
example.tsxapp.tsxconfig.ts
tsx```
import { getBlockQueryOptions } from 'wagmi'
import { queryClient } from './app'
import { config } from './config'
export async function fetchBlockData() {
 return queryClient.fetchQuery(
  getBlockQueryOptions(config, {
   chainId: config.state.chainId,
  }
 ))
}
```

tsx```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
export const queryClient = new QueryClient()
export function App() {
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    {/** ... */}
   </QueryClientProvider>
  </WagmiProvider>
 )
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

## Retrieving & Updating Query Data ​
You can retrieve and update query data imperatively with `getQueryData` and `setQueryData`. This is useful for scenarios where you want to retrieve or update a query outside of a React component.
Note that these functions do not invalidate or refetch queries.
example.tsxapp.tsxconfig.ts
tsx```
import { getBlockQueryOptions } from 'wagmi'
import type { Block } from 'viem'
import { queryClient } from './app'
import { config } from './config'
export function getPendingBlockData() {
 return queryClient.getQueryData(
  getBlockQueryOptions(config, {
   chainId: config.state.chainId,
   tag: 'pending'
  }
 ))
}
export function setPendingBlockData(data: Block) {
 return queryClient.setQueryData(
  getBlockQueryOptions(config, {
   chainId: config.state.chainId,
   tag: 'pending'
  },
  data
 ))
}
```

tsx```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
export const queryClient = new QueryClient()
export function App() {
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    {/** ... */}
   </QueryClientProvider>
  </WagmiProvider>
 )
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

## Prefetching Queries ​
Prefetching a query is the process of fetching the data ahead of time and seeding the cache with the returned data. This is useful for scenarios where you want to fetch data before the user navigates to a page, or fetching data on the server to be reused on client hydration.
Read more about **Prefetching Queries** on the TanStack Query docs.
#### Example: Prefetching in Event Handler ​
tsx```
import { Link } from 'next/link'
import { getBlockQueryOptions } from 'wagmi'
function App() {
 const config = useConfig()
 const chainId = useChainId()
 // 1. Set up a function to prefetch the block data.
 const prefetch = () =>
  queryClient.prefetchQuery(getBlockQueryOptions(config, { chainId }))

 return (
  <Link
   // 2. Add event handlers to prefetch the block data
   // when user hovers over or focuses on the button.
   onMouseEnter={prefetch}
   onFocus={prefetch}
   to="/block-details"
  >
   Block details
  </Link>
 )
}
```

## SSR ​
It is possible to utilize TanStack Query's SSR strategies with Wagmi Hooks & Query Keys. Check out the Server Rendering & Hydration & Advanced Server Rendering guides.
## Devtools ​
TanStack Query includes dedicated Devtools that assist in visualizing and debugging your queries, their cache states, and much more. You will have to pass a custom `queryKeyFn` to your `QueryClient` for Devtools to correctly serialize BigInt values for display. Alternatively, You can use the `hashFn` from `@wagmi/core/query`, which already handles this serialization.
#### Install ​
pnpmnpmyarnbun
bash```
pnpm i @tanstack/react-query-devtools
```

bash```
npm i @tanstack/react-query-devtools
```

bash```
yarn add @tanstack/react-query-devtools
```

bash```
bun i @tanstack/react-query-devtools
```

#### Usage ​
tsx```
import {
 QueryClient,
 QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { hashFn } from "@wagmi/core/query";
const queryClient = new QueryClient({
 defaultOptions: {
  queries: {
   queryKeyHashFn: hashFn,
  },
 },
});
```

