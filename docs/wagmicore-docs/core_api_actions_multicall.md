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
# multicall ​
Action for batching up multiple functions on a contract in a single RPC call via the Multicall3 contract.
## Import ​
ts```
import { multicall } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { multicall } from '@wagmi/core'
import { config } from './config'
const wagmigotchiContract = {
 address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
 abi: wagmigotchiABI,
} as const
const mlootContract = {
 address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
 abi: mlootABI,
} as const
const result = await multicall(config, {
 contracts: [
  {
   ...wagmigotchiContract,
   functionName: 'getAlive',
  },
  {
   ...wagmigotchiContract,
   functionName: 'getBoredom',
  },
  {
   ...mlootContract,
   functionName: 'getChest',
   args: [69],
  },
  {
   ...mlootContract,
   functionName: 'getWaist',
   args: [69],
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
import { type MulticallParameters } from '@wagmi/core'
```

### contracts ​
`readonly Contract[]`
Set of contracts to call.
#### abi ​
`Abi | undefined`
The contract's ABI. Check out the TypeScript docs for how to set up ABIs for maximum type inference and safety.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

#### address ​
`Address | undefined`
The contract's address.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

#### args ​
`readonly unknown[] | undefined`
  * Arguments to pass when calling the contract.
  * Inferred from `abi` and `functionName`.


index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

#### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
   chainId: 1,
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

#### functionName ​
`string | undefined`
  * Function to call on the contract.
  * Inferred from `abi`.


index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### allowFailure ​
`boolean`
Whether or not the Hook should throw if a call reverts. If set to `true` (default), and a call reverts, then `multicall` will fail silently and its error will be logged in the results array. Defaults to `true`.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 allowFailure: false,
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### batchSize ​
`number`
The maximum size (in bytes) for each calldata chunk. Set to `0` to disable the size limit. Defaults to `1024`.
> Note: Some RPC Providers limit the amount of calldata (`data`) that can be sent in a single `eth_call` request. It is best to check with your RPC Provider to see if there are any calldata size limits to `eth_call` requests.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 batchSize: 1_024,
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### blockNumber ​
`number`
The block number to perform the read against.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 blockNumber: 69420n,
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
Block tag to read against.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 blockTag: 'safe',
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

### multicallAddress ​
`Address`
Address of multicall contract.
index.tsxconfig.ts
tsx```
import { multicall } from '@wagmi/core'
import { config } from './config'
const result = await multicall(config, {
 contracts: [
  {
   address: '0x1dfe7ca09e99d10835bf73044a23b73fc20623df',
   abi: mlootABI,
   functionName: 'getChest',
   args: [69],
  },
  // ...
 ],
 multicallAddress: '0xca11bde05977b3631167028862be2a173976ca11',
})
```

ts```
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
import { type MulticallReturnType } from '@wagmi/core'
```

## Type Inference ​
With `contracts[number]['abi']` setup correctly, TypeScript will infer the correct types for `functionName`, `args`, and the return type. See the Wagmi TypeScript docs for more information.
## Error ​
ts```
import { type MulticallErrorType } from '@wagmi/core'
```

## Viem ​
  * `multicall`


