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
The `useReadContract` Hook allows you to read data on a smart contract, from a `view` or `pure` (read-only) function. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
The component below shows how to retrieve the token balance of an address from the Wagmi Example contract
read-contract.tsxcontracts.ts
tsx```
import { useReadContract } from 'wagmi'
import { wagmiContractConfig } from './contracts'
function ReadContract() {
 const { data: balance } = useReadContract({
  ...wagmiContractConfig,
  functionName: 'balanceOf',
  args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
 })
 return (
  <div>Balance: {balance?.toString()}</div>
 )
}
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
The `useReadContract` Hook also returns loading & error states, which can be used to display a loading indicator while the data is being fetched, or an error message if contract execution reverts.
read-contract.tsxread-contract.tsx (refetch)read-contract.tsx (invalidate)
tsx```
import { type BaseError, useReadContract } from 'wagmi'
function ReadContract() {
 const {
  data: balance,
  error,
  isPending
 } = useReadContract({
  ...wagmiContractConfig,
  functionName: 'balanceOf',
  args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
 })
 if (isPending) return <div>Loading...</div>
 if (error)
  return (
   <div>
    Error: {(error as BaseError).shortMessage || error.message}
   </div>
  )
 return (
  <div>Balance: {balance?.toString()}</div>
 )
}
```

## Refetching On Blocks ​
The `useBlockNumber` Hook can be utilized to refetch or invalidate the contract data on a specific block interval.
read-contract.tsx (refetch)read-contract.tsx (invalidate)
tsx```
import { useEffect } from 'react'
import { useBlockNumber, useReadContract } from 'wagmi'
function ReadContract() {
 const { data: balance, refetch } = useReadContract({
  ...wagmiContractConfig,
  functionName: 'balanceOf',
  args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
 })
 const { data: blockNumber } = useBlockNumber({ watch: true })
 useEffect(() => {
  // want to refetch every `n` block instead? use the modulo operator!
  // if (blockNumber % 5 === 0) refetch() // refetch every 5 blocks
  refetch()
 }, [blockNumber])
 return (
  <div>Balance: {balance?.toString()}</div>
 )
}
```

tsx```
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useBlockNumber, useReadContract } from 'wagmi'
function ReadContract() {
 const queryClient = useQueryClient()
 const { data: balance, refetch } = useReadContract({
  ...wagmiContractConfig,
  functionName: 'balanceOf',
  args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
 })
 const { data: blockNumber } = useBlockNumber({ watch: true })
 useEffect(() => {
  // if `useReadContract` is in a different hook/component,
  // you can import `readContractQueryKey` from `'wagmi/query'` and
  // construct a one-off query key to use for invalidation
  queryClient.invalidateQueries({ queryKey })
 }, [blockNumber, queryClient])
 return (
  <div>Balance: {balance?.toString()}</div>
 )
}
```

## Calling Multiple Functions ​
We can use the `useReadContract` Hook multiple times in a single component to call multiple functions on the same contract, but this ends up being hard to manage as the number of functions increases, especially when we also want to deal with loading & error states.
Luckily, to make this easier, we can use the `useReadContracts` Hook to call multiple functions in a single call.
read-contract.tsx
tsx```
import { type BaseError, useReadContracts } from 'wagmi'
function ReadContract() {
 const {
  data,
  error,
  isPending
 } = useReadContracts({
  contracts: [{
   ...wagmiContractConfig,
   functionName: 'balanceOf',
   args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
  }, {
   ...wagmiContractConfig,
   functionName: 'ownerOf',
   args: [69n],
  }, {
   ...wagmiContractConfig,
   functionName: 'totalSupply',
  }]
 })
 const [balance, ownerOf, totalSupply] = data || []
 if (isPending) return <div>Loading...</div>
 if (error)
  return (
   <div>
    Error: {(error as BaseError).shortMessage || error.message}
   </div>
  )
 return (
  <>
   <div>Balance: {balance?.toString()}</div>
   <div>Owner of Token 69: {ownerOf?.toString()}</div>
   <div>Total Supply: {totalSupply?.toString()}</div>
  </>
 )
}
```

