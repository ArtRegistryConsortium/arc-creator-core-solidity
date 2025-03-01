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
# simulateContract ​
Action for simulating/validating a contract interaction.
## Import ​
ts```
import { simulateContract } from '@wagmi/core'
```

## Usage ​
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
})
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
import { type SimulateContractParameters } from '@wagmi/core'
```

### abi ​
`Abi`
The contract's ABI. Check out the TypeScript docs for how to set up ABIs for maximum type inference and safety.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi, 
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
})
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

### accessList ​
`AccessList | undefined`
The access list.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 accessList: [{ 
  address: '0x1', 
  storageKeys: ['0x1'], 
 }], 
})
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
`Address | Account | undefined`
Account to use when signing data. Throws if account is not found on `connector`.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
})
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
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f', 
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
})
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
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [ 
  '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', 
  123n, 
 ], 
})
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
Block number to simulate against.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 blockNumber: 17829139n, 
})
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
Block tag to simulate against.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 blockTag: 'safe', 
})
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
Chain ID to validate against before sending transaction.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { mainnet } from 'wagmi/chains'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 chainId: mainnet.id, 
})
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

### connector ​
`Connector | undefined`
Connector to simulate transaction with.
index.tsabi.tsconfig.ts
ts```
import { getAccount, simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const { connector } = getAccount(config)
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 connector, 
})
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

### dataSuffix ​
``0x${string}` | undefined`
Data to append to the end of the calldata. Useful for adding a "domain" tag.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { parseGwei } from 'viem'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 dataSuffix: '0xdeadbeef', 
})
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
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'approve', 
 args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', 123n]
})
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

### gas ​
`bigint | undefined`
Gas provided for transaction execution.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { parseGwei } from 'viem'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 gas: parseGwei('20'), 
})
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

### gasPrice ​
`bigint | undefined`
The price in wei to pay per gas. Only applies to Legacy Transactions.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { parseGwei } from 'viem'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 gasPrice: parseGwei('20'), 
})
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

### maxFeePerGas ​
`bigint | undefined`
Total fee per gas in wei, inclusive of `maxPriorityFeePerGas`. Only applies to EIP-1559 Transactions.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { parseGwei } from 'viem'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 maxFeePerGas: parseGwei('20'), 
})
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

### maxPriorityFeePerGas ​
`bigint | undefined`
Max priority fee per gas in wei. Only applies to EIP-1559 Transactions.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { parseGwei } from 'viem'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 maxFeePerGas: parseGwei('20'),
 maxPriorityFeePerGas: parseGwei('2'), 
})
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

### nonce ​
`number`
Unique number identifying this transaction.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 nonce: 123, 
})
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

### type ​
`'legacy' | 'eip1559' | 'eip2930' | undefined`
Optional transaction request type to narrow parameters.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 type: 'eip1559', 
})
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

### value ​
`bigint | undefined`
Value in wei sent with this transaction.
index.tsabi.tsconfig.ts
ts```
import { simulateContract } from '@wagmi/core'
import { parseEther } from 'viem'
import { abi } from './abi'
import { config } from './config'
const result = await simulateContract(config, {
 abi,
 address: '0x6b175474e89094c44da98b954eedeac495271d0f',
 functionName: 'transferFrom',
 args: [
  '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  123n,
 ],
 value: parseEther('0.01'), 
})
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
import { type SimulateContractReturnType } from '@wagmi/core'
```

The simulation result and write request.
### request ​
Write request that includes parameters.
### response ​
`unknown`
  * Result of contract simulation.
  * Inferred from `abi`, `functionName`, and `args`.


## Type Inference ​
With `abi` setup correctly, TypeScript will infer the correct types for `functionName`, `args`, and `value`. See the Wagmi TypeScript docs for more information.
## Error ​
ts```
import { type SimulateContractErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type SimulateContractData,
 type SimulateContractOptions,
 type SimulateContractQueryFnData,
 type SimulateContractQueryKey,
 simulateContractQueryKey,
 simulateContractQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `simulateContract`


