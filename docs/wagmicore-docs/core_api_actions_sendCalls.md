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
# sendCalls ​
Action that requests for the wallet to sign and broadcast a batch of calls (transactions) to the network.
Read more.
WARNING
This is an experimental action that is not supported in most wallets. It is recommended to have a fallback mechanism if using this in production.
## Import ​
ts```
import { sendCalls } from '@wagmi/core/experimental'
```

## Usage ​
index.tsconfig.ts
ts```
import { parseEther } from 'viem'
import { sendCalls } from '@wagmi/core/experimental'
import { config } from './config'
const id = await sendCalls(config, {
 calls: [
  {
   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
   value: parseEther('1')
  },
  {
   data: '0xdeadbeef',
   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  },
 ]
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
import { type SendCallsParameters } from '@wagmi/core/experimental'
```

### account ​
`Account | Address | undefined`
Account to execute the calls.
index.tsconfig.ts
ts```
import { parseEther } from 'viem'
import { sendCalls } from '@wagmi/core/experimental'
import { config } from './config'
const id = await sendCalls(config, {
 account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 
 calls: [
  {
   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
   value: parseEther('1')
  },
  {
   data: '0xdeadbeef',
   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  },
 ],
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

### calls ​
`{ to: Hex, data?: Hex, value?: bigint }[]`
Calls to execute.
index.tsconfig.ts
ts```
import { parseEther } from 'viem'
import { sendCalls } from '@wagmi/core/experimental'
import { config } from './config'
const id = await sendCalls(config, {
 calls: [ 
  { 
   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8', 
   value: parseEther('1') 
  }, 
  { 
   data: '0xdeadbeef', 
   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
  }, 
 ], 
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

### capabilities ​
`WalletCapabilities | undefined`
Capability metadata for the calls (e.g. specifying a paymaster).
index.tsconfig.ts
ts```
import { parseEther } from 'viem'
import { sendCalls } from '@wagmi/core/experimental'
import { config } from './config'
const id = await sendCalls(config, {
 calls: [
  {
   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
   value: parseEther('1')
  },
  {
   data: '0xdeadbeef',
   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  },
 ],
 capabilities: { 
  paymasterService: { 
   url: 'https://...'
  } 
 } 
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
`number | undefined`
The target chain ID to broadcast the calls.
index.tsconfig.ts
ts```
import { parseEther } from 'viem'
import { sendCalls } from '@wagmi/core/experimental'
import { config } from './config'
const id = await sendCalls(config, {
 calls: [
  {
   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
   value: parseEther('1')
  },
  {
   data: '0xdeadbeef',
   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  },
 ],
 chainId: 10, 
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
Connector to get send the calls with.
index.tsconfig.ts
ts```
import { parseEther } from 'viem'
import { getConnections } from '@wagmi/core'
import { sendCalls } from '@wagmi/core/experimental'
import { config } from './config'
const connections = getConnections(config)
const id = await sendCalls(config, {
 calls: [
  {
   to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
   value: parseEther('1')
  },
  {
   data: '0xdeadbeef',
   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  },
 ],
 connector: connections[0]?.connector, 
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
import { type SendCallsReturnType } from '@wagmi/core/experimental'
```

`bigint`
Most recent block number seen.
## Error ​
ts```
import { type SendCallsErrorType } from '@wagmi/core/experimental'
```

## TanStack Query ​
ts```
import {
 type SendCallsData,
 type SendCallsOptions,
 type SendCallsQueryFnData,
 type SendCallsQueryKey,
 sendCallsQueryKey,
 sendCallsQueryOptions,
} from '@wagmi/core/experimental/query'
```

## Viem ​
  * `sendCalls`


