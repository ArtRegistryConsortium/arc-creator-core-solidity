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
# readContract ​
Action for calling a **read-only** function on a contract, and returning the response.
A **read-only** function (constant function) on a Solidity contract is denoted by a pure or view keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.
## Import ​
ts```
import { readContract } from '@wagmi/core'
```

## Usage ​
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'totalSupply',
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
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
import { type ReadContractParameters } from '@wagmi/core'
```

### abi ​
`Abi`
The contract's ABI. Check out the TypeScript docs for how to set up ABIs for maximum type inference and safety.
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi, 
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'totalSupply',
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### account ​
`Account | undefined`
Account to use when calling the contract (`msg.sender`).
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'balanceOf',
 args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'],
 account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### address ​
`Address`
The contract's address.
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f', 
 functionName: 'totalSupply',
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### args ​
`readonly unknown[] | undefined`
  * Arguments to pass when calling the contract.
  * Inferred from `abi` and `functionName`.


index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'balanceOf',
 args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'], 
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### blockNumber ​
`bigint | undefined`
Block number to call contract at.
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'totalSupply',
 blockNumber: 17829139n, 
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`
Block tag to call contract at.
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'totalSupply',
 blockTag: 'safe', 
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
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
index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { mainnet } from 'wagmi/chains'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'totalSupply',
 chainId: mainnet.id, 
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### functionName ​
`string`
  * Function to call on the contract.
  * Inferred from `abi`.


index.tsabi.tsconfig.ts
ts```
import { readContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await readContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'balanceOf', 
 args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'],
})
```

ts```
export const abi = [
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
] as const
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Return Type ​
ts```
import { type ReadContractReturnType } from '@wagmi/core'
```

`unknown`
  * Result of contract read-only function.
  * Inferred from `abi`, `functionName`, and `args`.


## Type Inference ​
With `abi` setup correctly, TypeScript will infer the correct types for `functionName`, `args`, and the return type. See the Wagmi TypeScript docs for more information.
## Error ​
ts```
import { type ReadContractErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type ReadContractData,
 type ReadContractOptions,
 type ReadContractQueryFnData,
 type ReadContractQueryKey,
 readContractQueryKey,
 readContractQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `readContract`


