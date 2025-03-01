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
Wagmi Core is designed to be as type-safe as possible! Things to keep in mind:
  * Types currently require using TypeScript >=5.0.4.
  * TypeScript doesn't follow semver and often introduces breaking changes in minor releases.
  * Changes to types in this repository are considered non-breaking and are usually released as patch changes (otherwise every type enhancement would be a major version!).
  * It is highly recommended that you lock your `@wagmi/core` and `typescript` versions to specific patch releases and upgrade with the expectation that types may be fixed or upgraded between any release.
  * The non-type-related public API of Wagmi Core still follows semver very strictly.


To ensure everything works correctly, make sure your `tsconfig.json` has `strict` mode set to `true`.
tsconfig.json
json```
{
 "compilerOptions": {
  "strict": true
 }
}
```

## Const-Assert ABIs & Typed Data ​
Wagmi Core can infer types based on ABIs and EIP-712 Typed Data definitions, powered by Viem and ABIType. This achieves full end-to-end type-safety from your contracts to your frontend and enlightened developer experience by autocompleting ABI item names, catching misspellings, inferring argument and return types (including overloads), and more.
For this to work, you must either const-assert ABIs and Typed Data (more info below) or define them inline. For example, `useReadContract`'s `abi` configuration parameter:
ts```
const result = await readContract({
 abi: […], // <--- defined inline
})
```

ts```
const abi = […] as const // <--- const assertion
const result = readContract({ abi })
```

If type inference isn't working, it's likely you forgot to add a `const` assertion or define the configuration parameter inline. Also, make sure your ABIs, Typed Data definitions, and TypeScript configuration are valid and set up correctly.
TIP
Unfortunately TypeScript doesn't support importing JSON `as const` yet. Check out the Wagmi CLI to help with this! It can automatically fetch ABIs from Etherscan and other block explorers, resolve ABIs from your Foundry/Hardhat projects, and more.
Anywhere you see the `abi` or `types` configuration property, you can likely use const-asserted or inline ABIs and Typed Data to get type-safety and inference. These properties are also called out in the docs.
Here's what `readContract` looks like with and without a const-asserted `abi` property.
Const-AssertedNot Const-Asserted
ts```
import {
readContract
 } from '@wagmi/core'
const 
result
 = await
readContract
(
config
, {

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

result


```

ts```
import {
readContract
 } from '@wagmi/core'
const 
result
 = await
readContract
(
config
, {

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

result


```

You can prevent runtime errors and be more productive by making sure your ABIs and Typed Data definitions are set up appropriately. 🎉
ts```
import {
readContract
 } from '@wagmi/core'

readContract
(
config
, {

address
: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',

abi
: 
erc721Abi
,
functionName: 'balanecOf',
Type '"balanecOf"' is not assignable to type '"balanceOf" | "isApprovedForAll" | "getApproved" | "ownerOf" | "tokenURI"'. Did you mean '"balanceOf"'?
args
: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
```

## Configure Internal Types ​
For advanced use-cases, you may want to configure wagmi's internal types. Most of wagmi's types relating to ABIs and EIP-712 Typed Data are powered by ABIType. See the ABIType docs for more info on how to configure types.
