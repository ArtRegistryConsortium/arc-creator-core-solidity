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
# prepareTransactionRequest ​
Action for preparing a transaction request for signing by populating a nonce, gas limit, fee values, and a transaction type.
## Import ​
ts```
import { prepareTransactionRequest } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
import { type PrepareTransactionRequestParameters } from '@wagmi/core'
```

### account ​
`Account | Address | undefined`
The Account to send the transaction from.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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

### to ​
``0x${string}` | undefined`
The transaction recipient or contract address.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 
 value: parseEther('1'),
})
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
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 accessList: [ 
  {
   address: '0x1',
   storageKeys: ['0x1'],
  },
 ],
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
Chain ID to prepare the transaction request for.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 chainId: mainnet.id, 
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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

### data ​
``0x${string}` | undefined`
A contract hashed method call with encoded args.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
The price (in wei) to pay per gas. Only applies to Legacy Transactions.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 gasPrice: parseGwei('20'), 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
Total fee per gas (in wei), inclusive of `maxPriorityFeePerGas`. Only applies to EIP-1559 Transactions.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 maxFeePerGas: parseGwei('20'), 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
Max priority fee per gas (in wei). Only applies to EIP-1559 Transactions.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 maxFeePerGas: parseGwei('20'),
 maxPriorityFeePerGas: parseGwei('2'), 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
`number | undefined`
Unique number identifying this transaction.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
 nonce: 5, 
})
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

### parameters ​
`("fees" | "gas" | "nonce" | "type")[] | undefined`
Parameters to prepare.
For instance, if `["gas", "nonce"]` is provided, then only the `gas` and `nonce` parameters will be prepared.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 parameters: ['gas', 'nonce'], 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'),
})
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
The transaction recipient or contract address.
index.tsconfig.ts
ts```
import { prepareTransactionRequest } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await prepareTransactionRequest(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
 value: parseEther('1'), 
})
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
import { type PrepareTransactionRequestReturnType } from '@wagmi/core'
```

`TransactionRequest`
The transaction request.
## Error ​
ts```
import { type PrepareTransactionRequestErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type prepareTransactionRequestData,
 type prepareTransactionRequestOptions,
 type prepareTransactionRequestQueryFnData,
 type prepareTransactionRequestQueryKey,
 prepareTransactionRequestQueryKey,
 prepareTransactionRequestQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `prepareTransactionRequest`


