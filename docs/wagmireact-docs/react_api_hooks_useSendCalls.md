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
# useSendCalls ​
Hook that requests for the wallet to sign and broadcast a batch of calls (transactions) to the network.
Read more.
WARNING
This is an experimental Hook that is not supported in most wallets. It is recommended to have a fallback mechanism if using this in production.
## Import ​
ts```
import { useSendCalls } from 'wagmi/experimental'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useSendCalls } from 'wagmi/experimental'
import { parseEther } from 'viem'
function App() {
 const { sendCalls } = useSendCalls()
 return (
  <button
   onClick={() =>
    sendCalls({
     calls: [
      {
       to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
       value: parseEther('1')
      },
      {
       data: '0xdeadbeef',
       to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
      },
     ]
    })
   }
  >
   Send calls
  </button>
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

## Parameters ​
ts```
import { type UseSendCallsParameters } from 'wagmi/experimental'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useSendCalls } from 'wagmi/experimental'
import { config } from './config'
function App() {
 const result = useSendCalls({
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
If set, stores additional information on the mutation cache entry that can be used as needed. It will be accessible wherever `sendCalls` is available (e.g. `onError`, `onSuccess` functions).
#### networkMode ​
`'online' | 'always' | 'offlineFirst' | undefined`
  * defaults to `'online'`
  * see Network Mode for more information.


#### onError ​
`((error: SendCallsErrorType, variables: SendCallsVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire if the mutation encounters an error and will be passed the error.
#### onMutate ​
`((variables: SendCallsVariables) => Promise<context | void> | context | void) | undefined`
  * This function will fire before the mutation function is fired and is passed the same variables the mutation function would receive
  * Useful to perform optimistic updates to a resource in hopes that the mutation succeeds
  * The value returned from this function will be passed to both the `onError` and `onSettled` functions in the event of a mutation failure and can be useful for rolling back optimistic updates.


#### onSuccess ​
`((data: SendCallsData, variables: SendCallsVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is successful and will be passed the mutation's result.
#### onSettled ​
`((data: SendCallsData, error: SendCallsErrorType, variables: SendCallsVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
#### queryClient ​
`QueryClient`
Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will be used.
#### retry ​
`boolean | number | ((failureCount: number, error: SendCallsErrorType) => boolean) | undefined`
  * Defaults to `0`.
  * If `false`, failed mutations will not retry.
  * If `true`, failed mutations will retry infinitely.
  * If set to an `number`, e.g. `3`, failed mutations will retry until the failed mutations count meets that number.


#### retryDelay ​
`number | ((retryAttempt: number, error: SendCallsErrorType) => number) | undefined`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.


## Return Type ​
ts```
import { type UseSendCallsReturnType } from 'wagmi/experimental'
```

TanStack Query mutation docs
### sendCalls ​
`(variables: SendCallsVariables, { onSuccess, onSettled, onError }) => void`
The mutation function you can call with variables to trigger the mutation and optionally hooks on additional callback options.
  * #### variables ​
`SendCallsVariables`
The variables object to pass to the `sendCalls` action.
  * #### onSuccess ​
`(data: SendCallsData, variables: SendCallsVariables, context: TContext) => void`
This function will fire when the mutation is successful and will be passed the mutation's result.
  * #### onError ​
`(error: SendCallsErrorType, variables: SendCallsVariables, context: TContext | undefined) => void`
This function will fire if the mutation encounters an error and will be passed the error.
  * #### onSettled ​
`(data: SendCallsData | undefined, error: SendCallsErrorType | null, variables: SendCallsVariables, context: TContext | undefined) => void`
    * This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    * If you make multiple requests, `onSuccess` will fire only after the latest call you've made.


### sendCallsAsync ​
`(variables: SendCallsVariables, { onSuccess, onSettled, onError }) => Promise<SendCallsData>`
Similar to `sendCalls` but returns a promise which can be awaited.
### data ​
`SendCallsData | undefined`
  * `sendCalls` return type
  * Defaults to `undefined`
  * The last successfully resolved data for the mutation.


### error ​
`SendCallsErrorType | null`
The error object for the mutation, if an error was encountered.
### failureCount ​
`number`
  * The failure count for the mutation.
  * Incremented every time the mutation fails.
  * Reset to `0` when the mutation succeeds.


### failureReason ​
`SendCallsErrorType | null`
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
`SendCallsVariables | undefined`
  * The variables object passed to `sendCalls`.
  * Defaults to `undefined`.


## TanStack Query ​
ts```
import {
 type SendCallsData,
 type SendCallsVariables,
 type SendCallsMutate,
 type SendCallsMutateAsync,
 sendCallsMutationOptions,
} from 'wagmi/experimental/query'
```

## Action ​
  * `sendCalls`


