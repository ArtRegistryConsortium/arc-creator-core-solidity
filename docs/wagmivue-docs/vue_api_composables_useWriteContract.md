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
# useWriteContract ​
Composable for executing a write function on a contract.
A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, hence a transaction is broadcasted in order to change the state.
## Import ​
ts```
import { useWriteContract } from '@wagmi/vue'
```

## Usage ​
index.vueabi.tsconfig.ts
vue```
<script setup lang="ts">
import { useWriteContract } from '@wagmi/vue'
import { abi } from './abi'
const { writeContract } = useWriteContract()
</script>
<template>
 <button @click="writeContract({ 
  abi,
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  functionName: 'transferFrom',
  args: [
   '0xd2135CfB216b74109775236E36d4b433F1DF507B',
   '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
   123n,
  ],
 })">
  Transfer
 </button>
</template>
```

ts```
export const abi = [
 {
  type: 'function',
  name: 'approve',
  stateMutability: 'nonpayable',
  inputs: [
   { name: 'spender', type: 'address' },
   { name: 'amount', type: 'uint256' },
  ],
  outputs: [{ type: 'bool' }],
 },
 {
  type: 'function',
  name: 'transferFrom',
  stateMutability: 'nonpayable',
  inputs: [
   { name: 'sender', type: 'address' },
   { name: 'recipient', type: 'address' },
   { name: 'amount', type: 'uint256' },
  ],
  outputs: [{ type: 'bool' }],
 },
] as const
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
import { type UseWriteContractParameters } from '@wagmi/vue'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the `WagmiPlugin`.
index.vueconfig.ts
vue```
<script setup lang="ts">
import { useWriteContract } from '@wagmi/vue'
import { config } from './config'
const result = useWriteContract({
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
If set, stores additional information on the mutation cache entry that can be used as needed. It will be accessible wherever `writeContract` is available (e.g. `onError`, `onSuccess` functions).
#### networkMode ​
`'online' | 'always' | 'offlineFirst' | undefined`
  * defaults to `'online'`
  * see Network Mode for more information.


#### onError ​
`((error: WriteContractErrorType, variables: WriteContractVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire if the mutation encounters an error and will be passed the error.
#### onMutate ​
`((variables: WriteContractVariables) => Promise<context | void> | context | void) | undefined`
  * This function will fire before the mutation function is fired and is passed the same variables the mutation function would receive
  * Useful to perform optimistic updates to a resource in hopes that the mutation succeeds
  * The value returned from this function will be passed to both the `onError` and `onSettled` functions in the event of a mutation failure and can be useful for rolling back optimistic updates.


#### onSuccess ​
`((data: WriteContractReturnType, variables: WriteContractVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is successful and will be passed the mutation's result.
#### onSettled ​
`((data: WriteContractReturnType, error: WriteContractErrorType, variables: WriteContractVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
#### queryClient ​
`QueryClient`
Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will be used.
#### retry ​
`boolean | number | ((failureCount: number, error: WriteContractErrorType) => boolean) | undefined`
  * Defaults to `0`.
  * If `false`, failed mutations will not retry.
  * If `true`, failed mutations will retry infinitely.
  * If set to an `number`, e.g. `3`, failed mutations will retry until the failed mutations count meets that number.


#### retryDelay ​
`number | ((retryAttempt: number, error: WriteContractErrorType) => number) | undefined`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.


## Return Type ​
ts```
import { type UseWriteContractReturnType } from '@wagmi/vue'
```

The return type's `data` property is inferrable via the combination of `abi`, `functionName`, and `args`. Check out the TypeScript docs for more info.
TanStack Query mutation docs
### writeContract ​
`(variables: WriteContractVariables, { onSuccess, onSettled, onError }) => void`
The mutation function you can call with variables to trigger the mutation and optionally hooks on additional callback options.
  * #### variables ​
`WriteContractVariables`
The variables object to pass to the `writeContract` action.
  * #### onSuccess ​
`(data: WriteContractReturnType, variables: WriteContractVariables, context: TContext) => void`
This function will fire when the mutation is successful and will be passed the mutation's result.
  * #### onError ​
`(error: WriteContractErrorType, variables: WriteContractVariables, context: TContext | undefined) => void`
This function will fire if the mutation encounters an error and will be passed the error.
  * #### onSettled ​
`(data: WriteContractReturnType | undefined, error: WriteContractErrorType | null, variables: WriteContractVariables, context: TContext | undefined) => void`
    * This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    * If you make multiple requests, `onSuccess` will fire only after the latest call you've made.


### writeContractAsync ​
`(variables: WriteContractVariables, { onSuccess, onSettled, onError }) => Promise<WriteContractReturnType>`
Similar to `writeContract` but returns a promise which can be awaited.
### data ​
`WriteContractReturnType | undefined`
  * `writeContract` return type
  * Defaults to `undefined`
  * The last successfully resolved data for the mutation.


### error ​
`WriteContractErrorType | null`
The error object for the mutation, if an error was encountered.
### failureCount ​
`number`
  * The failure count for the mutation.
  * Incremented every time the mutation fails.
  * Reset to `0` when the mutation succeeds.


### failureReason ​
`WriteContractErrorType | null`
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
`WriteContractVariables | undefined`
  * The variables object passed to `writeContract`.
  * Defaults to `undefined`.


## Type Inference ​
With `abi` setup correctly, TypeScript will infer the correct types for `functionName`, `args`, and the `value`. See the Wagmi TypeScript docs for more information.
## TanStack Query ​
ts```
import {
 type WriteContractData,
 type WriteContractVariables,
 type WriteContractMutate,
 type WriteContractMutateAsync,
 writeContractMutationOptions,
} from '@wagmi/vue/query'
```

## Action ​
  * `writeContract`


