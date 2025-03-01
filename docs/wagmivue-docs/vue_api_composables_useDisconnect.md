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
# useDisconnect ​
Composable for disconnecting connections.
## Import ​
ts```
import { useDisconnect } from '@wagmi/vue'
```

## Usage ​
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useDisconnect } from '@wagmi/vue'
const { disconnect } = useDisconnect()
</script>
<template>
 <button @click="disconnect()">
  Disconnect
 </button>
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

## Parameters ​
ts```
import { type UseDisconnectParameters } from '@wagmi/vue'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the `WagmiPlugin`.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useDisconnect } from '@wagmi/vue'
import { config } from './config'
const result = useDisconnect({
 config, 
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

### mutation ​
TanStack Query parameters. See the TanStack Query mutation docs for more info.
Wagmi does not support passing all TanStack Query parameters
TanStack Query parameters, like `mutationFn` and `mutationKey`, are used internally to make Wagmi work and you cannot override them. Check out the source to see what parameters are not supported. All parameters listed below are supported.
#### gcTime ​
`number | Infinity | undefined`
  * The time in milliseconds that unused/inactive cache data remains in memory. When a mutation's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different cache times are specified, the longest one will be used.
  * If set to `Infinity`, will disable garbage collection


#### meta ​
`Record<string, unknown> | undefined`
If set, stores additional information on the mutation cache entry that can be used as needed. It will be accessible wherever `disconnect` is available (e.g. `onError`, `onSuccess` functions).
#### networkMode ​
`'online' | 'always' | 'offlineFirst' | undefined`
  * defaults to `'online'`
  * see Network Mode for more information.


#### onError ​
`((error: DisconnectErrorType, variables: { connector?: Connector | undefined; }, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire if the mutation encounters an error and will be passed the error.
#### onMutate ​
`((variables: { connector?: Connector | undefined; }) => Promise<context | void> | context | void) | undefined`
  * This function will fire before the mutation function is fired and is passed the same variables the mutation function would receive
  * Useful to perform optimistic updates to a resource in hopes that the mutation succeeds
  * The value returned from this function will be passed to both the `onError` and `onSettled` functions in the event of a mutation failure and can be useful for rolling back optimistic updates.


#### onSuccess ​
`((data: void, variables: { connector?: Connector | undefined; }, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is successful and will be passed the mutation's result.
#### onSettled ​
`((data: void, error: DisconnectErrorType, variables: { connector?: Connector | undefined; }, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
#### queryClient ​
`QueryClient`
Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will be used.
#### retry ​
`boolean | number | ((failureCount: number, error: DisconnectErrorType) => boolean) | undefined`
  * Defaults to `0`.
  * If `false`, failed mutations will not retry.
  * If `true`, failed mutations will retry infinitely.
  * If set to an `number`, e.g. `3`, failed mutations will retry until the failed mutations count meets that number.


#### retryDelay ​
`number | ((retryAttempt: number, error: DisconnectErrorType) => number) | undefined`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.


## Return Type ​
ts```
import { type UseDisconnectReturnType } from '@wagmi/vue'
```

### connectors ​
`readonly Connector[]`
Connectors that are currently connected. Useful for rendering a list of connectors to disconnect.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useDisconnect } from '@wagmi/vue'
import { mainnet } from 'wagmi/chains'
const { connectors, disconnect } = useDisconnect()
</script>
<template>
 <div>
  <button v-for="connector in connectors" :key="connector.id" @click="disconnect({ connector })">
   {{ connector.name }}
  </button>
 </div>
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

TanStack Query mutation docs
### disconnect ​
`(variables: { connector?: Connector | undefined; }, { onSuccess, onSettled, onError }) => void`
The mutation function you can call with variables to trigger the mutation and optionally hooks on additional callback options.
  * #### variables ​
`{ connector?: Connector | undefined; }`
The variables object to pass to the `disconnect` action.
  * #### onSuccess ​
`(data: void, variables: { connector?: Connector | undefined; }, context: TContext) => void`
This function will fire when the mutation is successful and will be passed the mutation's result.
  * #### onError ​
`(error: DisconnectErrorType, variables: { connector?: Connector | undefined; }, context: TContext | undefined) => void`
This function will fire if the mutation encounters an error and will be passed the error.
  * #### onSettled ​
`(data: void | undefined, error: DisconnectErrorType | null, variables: { connector?: Connector | undefined; }, context: TContext | undefined) => void`
    * This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    * If you make multiple requests, `onSuccess` will fire only after the latest call you've made.


### disconnectAsync ​
`(variables: { connector?: Connector | undefined; }, { onSuccess, onSettled, onError }) => Promise<void>`
Similar to `disconnect` but returns a promise which can be awaited.
### data ​
`void | undefined`
  * `disconnect` return type
  * Defaults to `undefined`
  * The last successfully resolved data for the mutation.


### error ​
`DisconnectErrorType | null`
The error object for the mutation, if an error was encountered.
### failureCount ​
`number`
  * The failure count for the mutation.
  * Incremented every time the mutation fails.
  * Reset to `0` when the mutation succeeds.


### failureReason ​
`DisconnectErrorType | null`
  * The failure reason for the mutation retry.
  * Reset to `null` when the mutation succeeds.


### isError / isIdle / isPending / isSuccess ​
`boolean`
Boolean variables derived from `status`.
### isPaused ​
`boolean`
  * will be `true` if the mutation has been `paused`.
  * see Network Mode for more information.


### reset ​
`() => void`
A function to clean the mutation internal state (e.g. it resets the mutation to its initial state).
### status ​
`'idle' | 'pending' | 'error' | 'success'`
  * `'idle'` initial status prior to the mutation function executing.
  * `'pending'` if the mutation is currently executing.
  * `'error'` if the last mutation attempt resulted in an error.
  * `'success'` if the last mutation attempt was successful.


### submittedAt ​
`number`
  * The timestamp for when the mutation was submitted.
  * Defaults to `0`.


### variables ​
`{ connector?: Connector | undefined; } | undefined`
  * The variables object passed to `disconnect`.
  * Defaults to `undefined`.


## TanStack Query ​
ts```
import {
 type DisconnectData,
 type DisconnectVariables,
 type DisconnectMutate,
 type DisconnectMutateAsync,
 disconnectMutationOptions,
} from '@wagmi/vue/query'
```

## Action ​
  * `disconnect`


