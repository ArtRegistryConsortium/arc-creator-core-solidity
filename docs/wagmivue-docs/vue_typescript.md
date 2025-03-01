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
# TypeScript ​
## Requirements ​
Wagmi is designed to be as type-safe as possible! Things to keep in mind:
  * Types currently require using TypeScript >=5.0.4.
  * TypeScript doesn't follow semver and often introduces breaking changes in minor releases.
  * Changes to types in this repository are considered non-breaking and are usually released as patch changes (otherwise every type enhancement would be a major version!).
  * It is highly recommended that you lock your `wagmi` and `typescript` versions to specific patch releases and upgrade with the expectation that types may be fixed or upgraded between any release.
  * The non-type-related public API of Wagmi still follows semver very strictly.


To ensure everything works correctly, make sure your `tsconfig.json` has `strict` mode set to `true`.
tsconfig.json
json```
{
 "compilerOptions": {
  "strict": true
 }
}
```

## Config Types ​
By default Vue Plugins does not work well with type inference. To support strong type-safety across the Vue Plugins boundary, there are two options available:
  * Declaration merging to "register" your `config` globally with TypeScript.
  * `config` property to pass your `config` directly to composables.


### Declaration Merging ​
Declaration merging allows you to "register" your `config` globally with TypeScript. The `Register` type enables Wagmi to infer types in places that wouldn't normally have access to type info via a Vue Plugin alone.
To set this up, add the following declaration to your project. Below, we co-locate the declaration merging and the `config` set up.
ts```
import { createConfig, http } from '@wagmi/vue'
import { mainnet, sepolia } from 'wagmi/chains'
declare module '@wagmi/vue' {
 interface Register {
  config: typeof config
 }
}
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

Since the `Register` type is global, you only need to add it once in your project. Once set up, you will get strong type-safety across your entire project. For example, query composables will type `chainId` based on your `config`'s `chains`.
ts```
import {
useBlockNumber
 } from '@wagmi/vue'

useBlockNumber
({ chainId: 123 })
Type '123' is not assignable to type 'DeepMaybeRef<1 | 11155111 | undefined>'.

```

You just saved yourself a runtime error and you didn't even need to pass your `config`. 🎉
### Hook `config` Property ​
For cases where you have more than one Wagmi `config` or don't want to use the declaration merging approach, you can pass a specific `config` directly to composables via the `config` property.
ts```
import { createConfig, http } from '@wagmi/vue'
import { mainnet, optimism } from '@wagmi/vue/chains'
export const configA = createConfig({ 
 chains: [mainnet], 
 transports: { 
  [mainnet.id]: http(), 
 }, 
})
export const configB = createConfig({ 
 chains: [optimism], 
 transports: { 
  [optimism.id]: http(), 
 }, 
})
```

As you expect, `chainId` is inferred correctly for each `config`.
ts```
import {
useBlockNumber
 } from '@wagmi/vue'

useBlockNumber
({ chainId: 123, 
config
: 
configA
 })
Type '123' is not assignable to type 'DeepMaybeRef<1 | undefined>'.
useBlockNumber
({ chainId: 123, 
config
: 
configB
 })
Type '123' is not assignable to type 'DeepMaybeRef<10 | undefined>'.

```

This approach is more explicit, but works well for advanced use-cases, if you don't want to use a Vue Plugin or declaration merging, etc.
## Const-Assert ABIs & Typed Data ​
Wagmi can infer types based on ABIs and EIP-712 Typed Data definitions, powered by Viem and ABIType. This achieves full end-to-end type-safety from your contracts to your frontend and enlightened developer experience by autocompleting ABI item names, catching misspellings, inferring argument and return types (including overloads), and more.
For this to work, you must either const-assert ABIs and Typed Data (more info below) or define them inline. For example, `useReadContract`'s `abi` configuration parameter:
ts```
const { data } = useReadContract({
 abi: […], // <--- defined inline
})
```

ts```
const abi = […] as const // <--- const assertion
const { data } = useReadContract({ abi })
```

If type inference isn't working, it's likely you forgot to add a `const` assertion or define the configuration parameter inline. Also, make sure your ABIs, Typed Data definitions, and TypeScript configuration are valid and set up correctly.
TIP
Unfortunately TypeScript doesn't support importing JSON `as const` yet. Check out the Wagmi CLI to help with this! It can automatically fetch ABIs from Etherscan and other block explorers, resolve ABIs from your Foundry/Hardhat projects, generate Vue Composables, and more.
Anywhere you see the `abi` or `types` configuration property, you can likely use const-asserted or inline ABIs and Typed Data to get type-safety and inference. These properties are also called out in the docs.
Here's what `useReadContract` looks like with and without a const-asserted `abi` property.
Const-AssertedNot Const-Asserted
ts```
import {
useReadContract
 } from '@wagmi/vue'
const {
data
 } =
useReadContract
({

address
: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',

abi
: 
erc721Abi
,

functionName
: 'balanceOf',


args
: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})

data


```

ts```
import {
useReadContract
 } from '@wagmi/vue'
const {
data
 } =
useReadContract
({

address
: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',

abi
: 
erc721Abi
,

functionName
: 'balanceOf',


args
: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})

data


```

You can prevent runtime errors and be more productive by making sure your ABIs and Typed Data definitions are set up appropriately. 🎉
ts```
import {
useReadContract
 } from '@wagmi/vue'

useReadContract
({

abi
: 
erc721Abi
,
functionName: 'balanecOf',
Type '"balanecOf"' is not assignable to type 'DeepMaybeRef<"balanceOf" | "isApprovedForAll" | "getApproved" | "ownerOf" | "tokenURI" | undefined>'. Did you mean '"balanceOf"'?
})
```

## Configure Internal Types ​
For advanced use-cases, you may want to configure Wagmi's internal types. Most of Wagmi's types relating to ABIs and EIP-712 Typed Data are powered by ABIType. See the ABIType docs for more info on how to configure types.
