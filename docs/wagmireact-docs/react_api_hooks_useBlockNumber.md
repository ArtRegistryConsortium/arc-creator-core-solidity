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
# useBlockNumber ​
Hook for fetching the number of the most recent block seen.
## Import ​
ts```
import { useBlockNumber } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useBlockNumber } from 'wagmi'
function App() {
 const result = useBlockNumber()
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
import { type UseBlockNumberParameters } from 'wagmi'
```

### cacheTime ​
`number | undefined`
Time in milliseconds that cached block number will remain in memory.
index.tsxconfig.ts
tsx```
import { useBlockNumber } from 'wagmi'
function App() {
 const result = useBlockNumber({
  cacheTime: 4_000,
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

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsxconfig.ts
tsx```
import { useBlockNumber } from 'wagmi'
import { mainnet } from 'wagmi/chains'
function App() {
 const result = useBlockNumber({
  chainId: mainnet.id,
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

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useBlockNumber } from 'wagmi'
import { config } from './config'
function App() {
 const result = useBlockNumber({
  config,
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

### scopeKey ​
`string | undefined`
Scopes the cache to a given context. Hooks that have identical context will share the same cache.
index.tsxconfig.ts
tsx```
import { useBlockNumber } from 'wagmi'
import { config } from './config'
function App() {
 const result = useBlockNumber({
  scopeKey: 'foo',
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

### watch ​
`boolean | UseWatchBlockNumberParameters | undefined`
  * Enables/disables listening for block number changes.
  * Can pass a subset of `UseWatchBlockNumberParameters`directly to `useWatchBlockNumber`.


index.tsxindex-2.tsxconfig.ts
tsx```
import { useBlockNumber } from 'wagmi'
function App() {
 const result = useBlockNumber({
  watch: true,
 })
}
```

tsx```
import { useBlockNumber } from 'wagmi'
function App() {
 const result = useBlockNumber({
  watch: {
   pollingInterval: 4_000,
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

### query ​
TanStack Query parameters. See the TanStack Query query docs for more info.
Wagmi does not support passing all TanStack Query parameters
TanStack Query parameters, like `queryFn` and `queryKey`, are used internally to make Wagmi work and you cannot override them. Check out the source to see what parameters are not supported. All parameters listed below are supported.
#### enabled ​
`boolean | undefined`
  * Set this to `false` to disable this query from automatically running.
  * Can be used for Dependent Queries.


#### gcTime ​
`number | Infinity | undefined`
  * Defaults to `5 * 60 * 1000` (5 minutes) or `Infinity` during SSR
  * The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different garbage collection times are specified, the longest one will be used.
  * If set to `Infinity`, will disable garbage collection


#### initialData ​
`bigint | (() => bigint) | undefined`
  * If set, this value will be used as the initial data for the query cache (as long as the query hasn't been created or cached yet)
  * If set to a function, the function will be called **once** during the shared/root query initialization, and be expected to synchronously return the initialData
  * Initial data is considered stale by default unless a `staleTime` has been set.
  * `initialData` **is persisted** to the cache


#### initialDataUpdatedAt ​
`number | ((() => number | undefined)) | undefined`
If set, this value will be used as the time (in milliseconds) of when the `initialData` itself was last updated.
#### meta ​
`Record<string, unknown> | undefined`
If set, stores additional information on the query cache entry that can be used as needed. It will be accessible wherever the `query` is available, and is also part of the `QueryFunctionContext` provided to the `queryFn`.
#### networkMode ​
`online' | 'always' | 'offlineFirst' | undefined`
  * Defaults to `'online'`
  * see Network Mode for more information.


#### notifyOnChangeProps ​
`string[] | 'all' | (() => string[] | 'all') | undefined`
  * If set, the component will only re-render if any of the listed properties change.
  * If set to `['data', 'error']` for example, the component will only re-render when the `data` or `error` properties change.
  * If set to `'all'`, the component will opt-out of smart tracking and re-render whenever a query is updated.
  * If set to a function, the function will be executed to compute the list of properties.
  * By default, access to properties will be tracked, and the component will only re-render when one of the tracked properties change.


#### placeholderData ​
`bigint | ((previousValue: bigint | undefined; previousQuery: Query | undefined) => bigint) | undefined`
  * If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `pending` state.
  * `placeholderData` is **not persisted** to the cache
  * If you provide a function for `placeholderData`, as a first argument you will receive previously watched query data if available, and the second argument will be the complete previousQuery instance.


#### queryClient ​
`QueryClient | undefined`
Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will be used.
#### refetchInterval ​
`number | false | ((data: bigint | undefined, query: Query) => number | false | undefined) | undefined`
  * If set to a number, all queries will continuously refetch at this frequency in milliseconds
  * If set to a function, the function will be executed with the latest data and query to compute a frequency


#### refetchIntervalInBackground ​
`boolean | undefined`
If set to `true`, queries that are set to continuously refetch with a `refetchInterval` will continue to refetch while their tab/window is in the background
#### refetchOnMount ​
`boolean | 'always' | ((query: Query) => boolean | 'always') | undefined`
  * Defaults to `true`
  * If set to `true`, the query will refetch on mount if the data is stale.
  * If set to `false`, the query will not refetch on mount.
  * If set to `'always'`, the query will always refetch on mount.
  * If set to a function, the function will be executed with the query to compute the value


#### refetchOnReconnect ​
`boolean | 'always' | ((query: Query) => boolean | 'always') | undefined`
  * Defaults to `true`
  * If set to `true`, the query will refetch on reconnect if the data is stale.
  * If set to `false`, the query will not refetch on reconnect.
  * If set to `'always'`, the query will always refetch on reconnect.
  * If set to a function, the function will be executed with the query to compute the value


#### refetchOnWindowFocus ​
`boolean | 'always' | ((query: Query) => boolean | 'always') | undefined`
  * Defaults to `true`
  * If set to `true`, the query will refetch on window focus if the data is stale.
  * If set to `false`, the query will not refetch on window focus.
  * If set to `'always'`, the query will always refetch on window focus.
  * If set to a function, the function will be executed with the query to compute the value


#### retry ​
`boolean | number | ((failureCount: number, error: GetBlockNumberErrorType) => boolean) | undefined`
  * If `false`, failed queries will not retry by default.
  * If `true`, failed queries will retry infinitely.
  * If set to a `number`, e.g. `3`, failed queries will retry until the failed query count meets that number.
  * Defaults to `3` on the client and `0` on the server


#### retryDelay ​
`number | ((retryAttempt: number, error: GetBlockNumberErrorType) => number) | undefined`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.


#### retryOnMount ​
`boolean | undefined`
If set to `false`, the query will not be retried on mount if it contains an error. Defaults to `true`.
#### select ​
`((data: bigint) => unknown) | undefined`
This option can be used to transform or select a part of the data returned by the query function. It affects the returned `data` value, but does not affect what gets stored in the query cache.
#### staleTime ​
`number | Infinity | undefined`
  * Defaults to `0`
  * The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on.
  * If set to `Infinity`, the data will never be considered stale


#### structuralSharing ​
`boolean | (((oldData: bigint | undefined, newData: bigint) => bigint)) | undefined`
  * Defaults to `true`
  * If set to `false`, structural sharing between query results will be disabled.
  * If set to a function, the old and new data values will be passed through this function, which should combine them into resolved data for the query. This way, you can retain references from the old data to improve performance even when that data contains non-serializable values.


## Return Type ​
ts```
import { type UseBlockNumberReturnType } from 'wagmi'
```

TanStack Query query docs
### data ​
`bigint`
  * The last successfully resolved data for the query.
  * Defaults to `undefined`.


### dataUpdatedAt ​
`number`
The timestamp for when the query most recently returned the `status` as `'success'`.
### error ​
`null | GetBlockNumberErrorType`
  * The error object for the query, if an error was thrown.
  * Defaults to `null`


### errorUpdatedAt ​
`number`
The timestamp for when the query most recently returned the `status` as `'error'`.
### errorUpdateCount ​
`number`
The sum of all errors.
### failureCount ​
`number`
  * The failure count for the query.
  * Incremented every time the query fails.
  * Reset to `0` when the query succeeds.


### failureReason ​
`null | GetBlockNumberErrorType`
  * The failure reason for the query retry.
  * Reset to `null` when the query succeeds.


### fetchStatus ​
`'fetching' | 'idle' | 'paused'`
  * `fetching` Is `true` whenever the queryFn is executing, which includes initial `pending` as well as background refetches.
  * `paused` The query wanted to fetch, but has been `paused`.
  * `idle` The query is not fetching.
  * See Network Mode for more information.


### isError / isPending / isSuccess ​
`boolean`
Boolean variables derived from `status`.
### isFetched ​
`boolean`
Will be `true` if the query has been fetched.
### isFetchedAfterMount ​
`boolean`
  * Will be `true` if the query has been fetched after the component mounted.
  * This property can be used to not show any previously cached data.


### isFetching / isPaused ​
`boolean`
Boolean variables derived from `fetchStatus`.
### isLoading ​
`boolean`
  * Is `true` whenever the first fetch for a query is in-flight
  * Is the same as `isFetching && isPending`


### isLoadingError ​
`boolean`
Will be `true` if the query failed while fetching for the first time.
### isPlaceholderData ​
`boolean`
Will be `true` if the data shown is the placeholder data.
### isRefetchError ​
`boolean`
Will be `true` if the query failed while refetching.
### isRefetching ​
`boolean`
  * Is `true` whenever a background refetch is in-flight, which _does not_ include initial `'pending'`.
  * Is the same as `isFetching && !isPending`


### isStale ​
`boolean`
Will be `true` if the data in the cache is invalidated or if the data is older than the given `staleTime`.
### refetch ​
`(options: { cancelRefetch?: boolean | undefined; throwOnError?: boolean | undefined }) => Promise<UseQueryResult<bigint, GetBlockNumberErrorType>>`
  * A function to manually refetch the query.
  * `throwOnError`
    * When set to `true`, an error will be thrown if the query fails.
    * When set to `false`, an error will be logged if the query fails.
  * `cancelRefetch`
    * When set to `true`, a currently running request will be cancelled before a new request is made.
    * When set to `false`, no refetch will be made if there is already a request running.
    * Defaults to `true`


### status ​
`'error' | 'pending' | 'success'`
  * `pending` if there's no cached data and no query attempt was finished yet.
  * `error` if the query attempt resulted in an error. The corresponding `error` property has the error received from the attempted fetch
  * `success` if the query has received a response with no errors and is ready to display its data. The corresponding `data` property on the query is the data received from the successful fetch or if the query's `enabled` property is set to `false` and has not been fetched yet `data` is the first `initialData` supplied to the query on initialization.


## TanStack Query ​
ts```
import {
 type GetBlockNumberData,
 type GetBlockNumberOptions,
 type GetBlockNumberQueryFnData,
 type GetBlockNumberQueryKey,
 getBlockNumberQueryKey,
 getBlockNumberQueryOptions,
} from 'wagmi/query'
```

## Action ​
  * `getBlockNumber`
  * `watchBlockNumber`


