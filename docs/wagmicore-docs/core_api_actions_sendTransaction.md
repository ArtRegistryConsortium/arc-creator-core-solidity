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
# sendTransaction ​
Action for creating, signing, and sending transactions to networks.
## Import ​
ts```
import { sendTransaction } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
import { type SendTransactionParameters } from '@wagmi/core'
```

### accessList ​
`AccessList | undefined`
The access list.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 accessList: [{ 
  address: '0x1', 
  storageKeys: ['0x1'], 
 }], 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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

### account ​
`Address | Account | undefined`
Account to use when sending transaction. Throws if account is not found on `connector`.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e', 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
Chain ID to validate against before sending transaction.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 chainId: mainnet.id, 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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

### connector ​
`Connector | undefined`
  * Connector to send transaction with.
  * Defaults to current connector.


index.tsconfig.ts
ts```
import { getConnections, sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const connections = getConnections(config)
const result = await sendTransaction(config, {
 connector: connections[0]?.connector, 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
`bigint | undefined | null`
Gas provided for transaction execution.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 gas: parseGwei('20'), 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
The price in wei to pay per gas. Only applies to Legacy Transactions.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 gasPrice: parseGwei('20'), 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
Total fee per gas in wei, inclusive of `maxPriorityFeePerGas`. Only applies to EIP-1559 Transactions.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 maxFeePerGas: parseGwei('20'), 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
Max priority fee per gas in wei. Only applies to EIP-1559 Transactions.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 maxFeePerGas: parseGwei('20'),
 maxPriorityFeePerGas: parseGwei('2'), 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
`number`
Unique number identifying this transaction.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 nonce: 123, 
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
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
`Address`
The transaction recipient or contract address.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
 value: parseEther('0.01'),
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

### type ​
`'legacy' | 'eip1559' | 'eip2930' | undefined`
Optional transaction request type to narrow parameters.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 type: 'eip1559', 
 value: parseEther('0.01'),
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
Value in wei sent with this transaction.
index.tsconfig.ts
ts```
import { sendTransaction } from '@wagmi/core'
import { parseEther } from 'viem'
import { config } from './config'
const result = await sendTransaction(config, {
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
 value: parseEther('0.01'), 
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
import { type SendTransactionReturnType } from '@wagmi/core'
```

`Hash`
Transaction hash.
## Error ​
ts```
import { type SendTransactionErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type SendTransactionData,
 type SendTransactionVariables,
 type SendTransactionMutate,
 type SendTransactionMutateAsync,
 sendTransactionMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `sendTransaction`


