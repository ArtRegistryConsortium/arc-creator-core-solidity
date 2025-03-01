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
# deployContract viem@>=2.8.18 ​
Action for deploying a contract to the network, given bytecode, and constructor arguments.
## Import ​
ts```
import { deployContract } from '@wagmi/core'
```

## Usage ​
index.tsabi.tsconfig.ts
ts```
import { deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const result = await deployContract(config, {
 abi: wagmiAbi,
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
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

## Deploying with Constructor Args ​
index.tsabi.tsconfig.ts
ts```
import { deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const result = await deployContract(config, {
 abi: wagmiAbi,
 args: [69420],
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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
import { type DeployContractParameters } from '@wagmi/core'
```

### abi ​
`Abi`
The contract's ABI.
index.tsabi.tsconfig.ts
ts```
import { deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const result = await deployContract(config, {
 abi: wagmiAbi, 
 args: [69420],
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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
Account to use when deploying a contract. Throws if account is not found on `connector`.
index.tsabi.tsconfig.ts
ts```
import { deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const result = await deployContract(config, {
 abi: wagmiAbi,
 account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
 args: [69420],
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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
  * Arguments to pass when deploying the contract.
  * Inferred from `abi`.


index.tsabi.tsconfig.ts
ts```
import { deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const result = await deployContract(config, {
 abi: wagmiAbi,
 args: [69420], 
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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

### bytecode ​
`Hex`
The contract's bytecode.
index.tsabi.tsconfig.ts
ts```
import { deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const result = await deployContract(config, {
 abi: wagmiAbi,
 args: [69420],
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...', 
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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
  * Connector to use when deploying a contract.
  * Defaults to current connector.


index.tsabi.tsconfig.ts
ts```
import { getAccount, deployContract } from '@wagmi/core'
import { wagmiAbi } from './abi'
import { config } from './config'
const { connector } = getAccount(config)
const result = await deployContract(config, {
 abi: wagmiAbi,
 args: [69420],
 bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
 connector, 
})
```

ts```
export const wagmiAbi = [
 ...
 {
  inputs: [{ name: "x", type: "uint32" }],
  stateMutability: "nonpayable",
  type: "constructor",
 },
 ...
] as const;
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
import { type DeployContractReturnType } from '@wagmi/core'
```

`Hash`
Transaction hash.
## Error ​
ts```
import { type DeployContractErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type DeployContractData,
 type DeployContractVariables,
 type DeployContractMutate,
 type DeployContractMutateAsync,
 deployContractMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `deployContract`


