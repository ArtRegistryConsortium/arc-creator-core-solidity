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
# useWatchContractEvent ​
Hook that watches and returns emitted contract event logs.
## Import ​
ts```
import { useWatchContractEvent } from 'wagmi'
```

## Usage ​
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

## Parameters ​
ts```
import { type UseWatchContractEventParameters } from 'wagmi'
```

### abi ​
`Abi`
The contract's ABI. Check out the TypeScript docs for how to set up ABIs for maximum type inference and safety.
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### address ​
`Address | undefined`
The contract's address.
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### args ​
`object | readonly unknown[] | undefined`
  * Arguments to pass when calling the contract.
  * Inferred from `abi` and `eventName`.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  args: {
   to: '0xd2135CfB216b74109775236E36d4b433F1DF507B'
  }
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### batch ​
`boolean | undefined`
  * Whether or not the events should be batched on each invocation.
  * Defaults to `true`.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  batch: false,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### chainId ​
`config['chains'][number]['id'] | undefined`
ID of chain to use when fetching data.
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  chainId: 1,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### config ​
`Config | undefined`
`Config` to use instead of retrieving from the nearest `WagmiProvider`.
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
import { config } from './config'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  config,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### eventName ​
`string`
  * Event to listen for the contract.
  * Inferred from `abi`.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
import { config } from './config'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### onError ​
`((error: Error) => void) | undefined`
Error thrown from getting the block number.
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
  onError(error) {
   console.log('Error', error)
  }
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### onLogs ​
`(logs: Log[], prevLogs: Log[] | undefined) => void`
Callback for when logs changes.
index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  }
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### poll ​
`boolean | undefined`
  * Whether or not to use a polling mechanism to check for new blocks instead of a WebSocket subscription.
  * Defaults to `false` for WebSocket Clients, and `true` for non-WebSocket Clients.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
  poll: true
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### pollingInterval ​
`number | undefined`
  * Polling frequency (in milliseconds).
  * Defaults to the Config's `pollingInterval` config.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
  pollingInterval: 1_000
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### strict ​
`boolean | undefined`
  * Defaults to `false`.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
  strict: true
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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

### syncConnectedChain ​
`boolean | undefined`
  * Set up subscriber for connected chain changes.
  * Defaults to `Config['syncConnectedChain']`.


index.tsxabi.tsconfig.ts
tsx```
import { useWatchContractEvent } from 'wagmi'
import { abi } from './abi'
function App() {
 useWatchContractEvent({
  address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  abi,
  eventName: 'Transfer',
  onLogs(logs) {
   console.log('New logs!', logs)
  },
  syncConnectedChain: true
 })
}
```

ts```
export const abi = [
 {
  type: 'event',
  name: 'Approval',
  inputs: [
   { indexed: true, name: 'owner', type: 'address' },
   { indexed: true, name: 'spender', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
 {
  type: 'event',
  name: 'Transfer',
  inputs: [
   { indexed: true, name: 'from', type: 'address' },
   { indexed: true, name: 'to', type: 'address' },
   { indexed: false, name: 'value', type: 'uint256' },
  ],
 },
] as const
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
import { type UseWatchContractEventReturnType } from 'wagmi'
```

Hook returns `void`
## Action ​
  * `watchContractEvent`


