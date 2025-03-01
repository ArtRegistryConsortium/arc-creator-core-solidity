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
# writeContracts ​
Action that requests for the wallet to sign and broadcast a batch of write contract calls (transactions) to the network.
Read more.
WARNING
This is an experimental action that is not supported in most wallets. It is recommended to have a fallback mechanism if using this in production.
## Import ​
ts```
import { writeContracts } from '@wagmi/core/experimental'
```

## Usage ​
index.tsconfig.ts
ts```
import { parseAbi } from 'viem'
import { writeContracts } from '@wagmi/core/experimental'
import { config } from './config'
const abi = parseAbi([
 'function approve(address, uint256) returns (bool)',
 'function transferFrom(address, address, uint256) returns (bool)',
])
const id = await writeContracts(config, {
 contracts: [
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'approve',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    100n
   ],
  },
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'transferFrom',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    '0x0000000000000000000000000000000000000000',
    100n
   ],
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

## Parameters ​
ts```
import { type WriteContractsParameters } from '@wagmi/core/experimental'
```

### account ​
`Account | Address | undefined`
Account to execute the calls.
index.tsconfig.ts
ts```
import { parseAbi } from 'viem'
import { writeContracts } from '@wagmi/core/experimental'
import { config } from './config'
const abi = parseAbi([
 'function approve(address, uint256) returns (bool)',
 'function transferFrom(address, address, uint256) returns (bool)',
])
const id = await writeContracts(config, {
 account: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
 contracts: [
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'approve',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    100n
   ],
  },
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'transferFrom',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    '0x0000000000000000000000000000000000000000',
    100n
   ],
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

### contracts ​
`{ to: Hex, data?: Hex, value?: bigint }[]`
Calls to execute.
index.tsconfig.ts
ts```
import { parseAbi } from 'viem'
import { writeContracts } from '@wagmi/core/experimental'
import { config } from './config'
const abi = parseAbi([
 'function approve(address, uint256) returns (bool)',
 'function transferFrom(address, address, uint256) returns (bool)',
])
const id = await writeContracts(config, {
 contracts: [ 
  { 
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', 
   abi, 
   functionName: 'approve', 
   args: [ 
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    100n
   ], 
  }, 
  { 
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', 
   abi, 
   functionName: 'transferFrom', 
   args: [ 
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    '0x0000000000000000000000000000000000000000', 
    100n
   ], 
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
import { parseAbi } from 'viem'
import { writeContracts } from '@wagmi/core/experimental'
import { config } from './config'
const abi = parseAbi([
 'function approve(address, uint256) returns (bool)',
 'function transferFrom(address, address, uint256) returns (bool)',
])
const id = await writeContracts(config, {
 contracts: [
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'approve',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    100n
   ],
  },
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'transferFrom',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    '0x0000000000000000000000000000000000000000',
    100n
   ],
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
import { parseAbi } from 'viem'
import { writeContracts } from '@wagmi/core/experimental'
import { config } from './config'
const abi = parseAbi([
 'function approve(address, uint256) returns (bool)',
 'function transferFrom(address, address, uint256) returns (bool)',
])
const id = await writeContracts(config, {
 contracts: [
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'approve',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    100n
   ],
  },
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'transferFrom',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    '0x0000000000000000000000000000000000000000',
    100n
   ],
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
import { parseAbi } from 'viem'
import { getConnections } from '@wagmi/core'
import { writeContracts } from '@wagmi/core/experimental'
import { config } from './config'
const abi = parseAbi([
 'function approve(address, uint256) returns (bool)',
 'function transferFrom(address, address, uint256) returns (bool)',
])
const connections = getConnections(config)
const id = await writeContracts(config, {
 contracts: [
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'approve',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 
    100n
   ],
  },
  {
   address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
   abi,
   functionName: 'transferFrom',
   args: [
    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
    '0x0000000000000000000000000000000000000000',
    100n
   ],
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
import { type WriteContractsReturnType } from '@wagmi/core/experimental'
```

`bigint`
Most recent block number seen.
## Error ​
ts```
import { type WriteContractsErrorType } from '@wagmi/core/experimental'
```

## TanStack Query ​
ts```
import {
 type WriteContractsData,
 type WriteContractsOptions,
 type WriteContractsQueryFnData,
 type WriteContractsQueryKey,
 writeContractsQueryKey,
 writeContractsQueryOptions,
} from '@wagmi/core/experimental/query'
```

## Viem ​
  * `writeContracts`


