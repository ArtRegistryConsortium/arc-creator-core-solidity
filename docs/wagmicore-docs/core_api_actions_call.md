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
# call ​
Action for executing a new message call immediately without submitting a transaction to the network.
## Import ​
ts```
import { call } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { type
CallParameters
 } from '@wagmi/core'
```

### account ​
`Account | Address | undefined`
The Account to call from.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
`Address | undefined`
The contract address or recipient.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 
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
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 accessList: [ 
  {
   address: '0x1',
   storageKeys: ['0x1'],
  },
 ],
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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

### gas ​
`bigint | undefined`
The gas provided for transaction execution.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 gas: 1_000_000n, 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { call } from '@wagmi/core'
import { parseGwei } from 'viem'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 gasPrice: parseGwei('20'), 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { call } from '@wagmi/core'
import { parseGwei } from 'viem'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 maxFeePerGas: parseGwei('20'), 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { call } from '@wagmi/core'
import { parseGwei } from 'viem'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 maxFeePerGas: parseGwei('20'),
 maxPriorityFeePerGas: parseGwei('2'), 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 nonce: 420, 
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
Value (in wei) sent with this transaction.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
await call(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
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

### blockNumber ​
`number | undefined`
The block number to perform the call against.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 blockNumber: 15121123n, 
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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

### blockTag ​
`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`
The block tag to perform the call against.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
await call(config, {
 blockTag: 'safe', 
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
The block tag to perform the call against.
index.tsconfig.ts
ts```
import { call } from '@wagmi/core'
import { config } from './config'
import { mainnet } from '@wagmi/core/chains'
await call(config, {
 chainId: mainnet.id, 
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
 to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
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
import { type
CallReturnType
 } from '@wagmi/core'
```

`{ data: 0x${string} }`
The call data.
## Error ​
ts```
import { type
CallErrorType
 } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type callData,
 type callOptions,
 type callQueryFnData,
 type callQueryKey,
 callQueryKey,
 callQueryOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `call`


