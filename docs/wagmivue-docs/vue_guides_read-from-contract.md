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
# Read from Contract ​
## Overview ​
The `useReadContract` Composable allows you to read data on a smart contract, from a `view` or `pure` (read-only) function. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
The component below shows how to retrieve the token balance of an address from the Wagmi Example contract
ReadContract.vuecontracts.ts
vue```
<script setup lang="ts">
import { useReadContract } from 'wagmi'
import { wagmiContractConfig } from './contracts'
const { data: balance } = useReadContract({
 ...wagmiContractConfig,
 functionName: 'balanceOf',
 args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
})
</script>
<template>
 <div>Balance: {{ balance?.toString() }}</div>
</template>
```

ts```
export const wagmiContractConfig = {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 abi: [
  {
   type: 'function',
   name: 'balanceOf',
   stateMutability: 'view',
   inputs: [{ name: 'account', type: 'address' }],
   outputs: [{ type: 'uint256' }],
  },
  {
   type: 'function',
   name: 'totalSupply',
   stateMutability: 'view',
   inputs: [],
   outputs: [{ name: 'supply', type: 'uint256' }],
  },
 ],
} as const
```

If `useReadContract` depends on another value (`address` in the example below), you can use the `query.enabled` option to prevent the query from running until the dependency is ready.
tsx```
const { data: balance } = useReadContract({
 ...wagmiContractConfig,
 functionName: 'balanceOf',
 args: [address],
 query: {
  enabled: !!address,
 },
})
```

## Loading & Error States ​
The `useReadContract` Composable also returns loading & error states, which can be used to display a loading indicator while the data is being fetched, or an error message if contract execution reverts.
ReadContract.vue
vue```
<script setup lang="ts">
import { useReadContract } from 'wagmi'
const {
 data: balance,
 error,
 isPending
} = useReadContract({
 ...wagmiContractConfig,
 functionName: 'balanceOf',
 args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
})
</script>
<template>
 <div v-if="isPending">Loading...</div>
 <div v-else-if="error">
  Error: {{ (error as BaseError).shortMessage || error.message }}
 </div>
 <div v-else>Balance: {{ balance?.toString() }}</div>
</template>
```

