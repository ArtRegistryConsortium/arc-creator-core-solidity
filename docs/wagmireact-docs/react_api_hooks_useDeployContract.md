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
# useDeployContract viem@>=2.8.18 ​
Hook for deploying a contract to the network, given bytecode, and constructor arguments.
## Import ​
ts```
import { useDeployContract } from 'wagmi'
```

## Usage ​
index.tsxabi.tsconfig.ts
tsx```
import { useDeployContract } from 'wagmi'
import { parseEther } from 'viem'
import { wagmiAbi } from './abi'
function App() {
 const { deployContract } = useDeployContract()
 return (
  <button
   onClick={() =>
    deployContract({
     abi: wagmiAbi,
     bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
    })
   }
  >
   Deploy Contract
  </button>
 )
}
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const
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

## Deploying with Constructor Args ​
index.tsxabi.tsconfig.ts
tsx```
import { useDeployContract } from 'wagmi'
import { parseEther } from 'viem'
import { wagmiAbi } from './abi'
function App() {
 const { deployContract } = useDeployContract()
 return (
  <button
   onClick={() =>
    deployContract({
     abi: wagmiAbi,
     args: [69420],
     bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
    })
   }
  >
   Deploy Contract
  </button>
 )
}
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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
import { type useDeployContractParameters } from 'wagmi'
```

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxconfig.ts
tsx```
import { useDeployContract } from 'wagmi'
import { config } from './config'
function App() {
 const result = useDeployContract({
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
If set, stores additional information on the mutation cache entry that can be used as needed. It will be accessible wherever `deployContract` is available (e.g. `onError`, `onSuccess` functions).
#### networkMode ​
`'online' | 'always' | 'offlineFirst' | undefined`
  * defaults to `'online'`
  * see Network Mode for more information.


#### onError ​
`((error: DeployContractErrorType, variables: DeployContractVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire if the mutation encounters an error and will be passed the error.
#### onMutate ​
`((variables: DeployContractVariables) => Promise<context | void> | context | void) | undefined`
  * This function will fire before the mutation function is fired and is passed the same variables the mutation function would receive
  * Useful to perform optimistic updates to a resource in hopes that the mutation succeeds
  * The value returned from this function will be passed to both the `onError` and `onSettled` functions in the event of a mutation failure and can be useful for rolling back optimistic updates.


#### onSuccess ​
`((data: DeployContractData, variables: DeployContractVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is successful and will be passed the mutation's result.
#### onSettled ​
`((data: DeployContractData, error: DeployContractErrorType, variables: DeployContractVariables, context?: context | undefined) => Promise<unknown> | unknown) | undefined`
This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
#### queryClient ​
`QueryClient`
Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will be used.
#### retry ​
`boolean | number | ((failureCount: number, error: DeployContractErrorType) => boolean) | undefined`
  * Defaults to `0`.
  * If `false`, failed mutations will not retry.
  * If `true`, failed mutations will retry infinitely.
  * If set to an `number`, e.g. `3`, failed mutations will retry until the failed mutations count meets that number.


#### retryDelay ​
`number | ((retryAttempt: number, error: DeployContractErrorType) => number) | undefined`
  * This function receives a `retryAttempt` integer and the actual Error and returns the delay to apply before the next attempt in milliseconds.
  * A function like `attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000)` applies exponential backoff.
  * A function like `attempt => attempt * 1000` applies linear backoff.


## Return Type ​
ts```
import { type useDeployContractReturnType } from 'wagmi'
```

TanStack Query mutation docs
### deployContract ​
`(variables: DeployContractVariables, { onSuccess, onSettled, onError }) => void`
The mutation function you can call with variables to trigger the mutation and optionally hooks on additional callback options.
  * #### variables ​
`DeployContractVariables`
The variables object to pass to the `deployContract` action.
  * #### onSuccess ​
`(data: DeployContractData, variables: DeployContractVariables, context: TContext) => void`
This function will fire when the mutation is successful and will be passed the mutation's result.
  * #### onError ​
`(error: DeployContractErrorType, variables: DeployContractVariables, context: TContext | undefined) => void`
This function will fire if the mutation encounters an error and will be passed the error.
  * #### onSettled ​
`(data: DeployContractData | undefined, error: DeployContractErrorType | null, variables: DeployContractVariables, context: TContext | undefined) => void`
    * This function will fire when the mutation is either successfully fetched or encounters an error and be passed either the data or error
    * If you make multiple requests, `onSuccess` will fire only after the latest call you've made.


### deployContractAsync ​
`(variables: DeployContractVariables, { onSuccess, onSettled, onError }) => Promise<DeployContractData>`
Similar to `deployContract` but returns a promise which can be awaited.
### data ​
`DeployContractData | undefined`
  * `deployContract` return type
  * Defaults to `undefined`
  * The last successfully resolved data for the mutation.


### error ​
`DeployContractErrorType | null`
The error object for the mutation, if an error was encountered.
### failureCount ​
`number`
  * The failure count for the mutation.
  * Incremented every time the mutation fails.
  * Reset to `0` when the mutation succeeds.


### failureReason ​
`DeployContractErrorType | null`
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
`DeployContractVariables | undefined`
  * The variables object passed to `deployContract`.
  * Defaults to `undefined`.


## TanStack Query ​
ts```
import {
 type DeployContractData,
 type DeployContractVariables,
 type DeployContractMutate,
 type DeployContractMutateAsync,
 deployContractMutationOptions,
} from 'wagmi/query'
```

## Action ​
  * `deployContract`


