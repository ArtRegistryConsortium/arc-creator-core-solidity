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
# createConfig ​
Creates new `Config` object.
## Import ​
ts```
import { createConfig } from 'wagmi'
```

## Usage ​
ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

Integrating a Viem Client
Instead of using `transports`, it's possible to provide a function that returns a Viem `Client` via the `client` property for more fine-grained control over Wagmi's internal `Client` creation.
ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { createClient } from 'viem'
const config = createConfig({
 chains: [mainnet, sepolia],
 client({ chain }) {
  return createClient({ chain, transport: http() })
 },
})
```

## Parameters ​
ts```
import { type CreateConfigParameters } from 'wagmi'
```

### chains ​
`readonly [Chain, ...Chain[]]`
  * Chains used by the `Config`.
  * See Chains for more details about built-in chains and the `Chain` type.


ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia], 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### connectors ​
`CreateConnectorFn[] | undefined`
Connectors used by the `Config`.
ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [injected()], 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### multiInjectedProviderDiscovery ​
`boolean | undefined`
  * Enables discovery of injected providers via EIP-6963 using the `mipd` library and converting to injected connectors.
  * Defaults to `true`.


ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 multiInjectedProviderDiscovery: false, 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### ssr ​
`boolean | undefined`
Flag to indicate if the config is being used in a server-side rendering environment. Defaults to `false`.
ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 ssr: true, 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### storage ​
`Storage | null | undefined`
  * `Storage` used by the config. Persists `Config`'s `State` between sessions.
  * Defaults to `createStorage({ storage: typeof window !== 'undefined' && window.localStorage ? window.localStorage : noopStorage })`.


ts```
import { createConfig, createStorage, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 storage: createStorage({ storage: window.localStorage }), 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### syncConnectedChain ​
`boolean | undefined`
  * Keep the `State['chainId']` in sync with the current connection.
  * Defaults to `true`.


ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 syncConnectedChain: false, 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### batch ​
`{ multicall?: boolean | { batchSize?: number | undefined; wait?: number | undefined } | undefined } | { [_ in chains[number]["id"]]?: { multicall?: boolean | { batchSize?: number | undefined; wait?: number | undefined } | undefined } | undefined } | undefined`
  * Batch settings. See Viem docs for more info.
  * Defaults to `{ multicall: true }`.


ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 batch: { multicall: true }, 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### cacheTime ​
`number | { [_ in chains[number]['id']]?: number | undefined } | undefined`
  * Frequency in milliseconds for polling enabled features. See Viem docs for more info.
  * Defaults to `pollingInterval` or `4_000`.


ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 cacheTime: 4_000, 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### pollingInterval ​
`number | { [_ in chains[number]['id']]?: number | undefined } | undefined`
  * Frequency in milliseconds for polling enabled features. See Viem docs for more info.
  * Defaults to `4_000`.


ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 pollingInterval: 4_000, 
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### transports ​
`Record<chains[number]['id'], Transport>`
Mapping of chain IDs to `Transport`s. This mapping is used internally when creating chain-aware Viem `Client` objects. See the Transport docs for more info.
ts```
import { createConfig, fallback, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 transports: { 
  [mainnet.id]: fallback([ 
   http('https://...'), 
   http('https://...'), 
  ]), 
  [sepolia.id]: http('https://...'), 
 }, 
})
```

### client ​
`(parameters: { chain: chains[number] }) => Client<Transport, chains[number]>`
Function for creating new Viem `Client` to be used internally. Exposes more control over the internal `Client` creation logic versus using the `transports` property.
ts```
import { createClient, http } from 'viem'
import { createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
const config = createConfig({
 chains: [mainnet, sepolia],
 client({ chain }) { 
  return createClient({ chain, transport: http('https://...') }) 
 }, 
})
```

WARNING
When using this option, you likely want to pass `parameters.chain` straight through to `createClient` to ensure the Viem `Client` is in sync with any active connections.
## Return Type ​
ts```
import { type Config } from 'wagmi'
```

## Config ​
Object responsible for managing Wagmi state and internals.
ts```
import { type Config } from 'wagmi'
```

### chains ​
`readonly [Chain, ...Chain[]]`
`chains` passed to `createConfig`.
### connectors ​
`readonly Connector[]`
Connectors set up from passing `connectors` and `multiInjectedProviderDiscovery` to `createConfig`.
### state ​
`State<chains>`
The `Config` object's internal state. See `State` for more info.
### storage ​
`Storage | null`
`storage` passed to `createConfig`.
### getClient ​
`(parameters?: { chainId?: chainId | chains[number]['id'] | undefined }): Client<transports[chainId], Extract<chains[number], { id: chainId }>>`
Creates new Viem `Client` object.
index.tsconfig.ts
ts```
import { config } from './config'
const client = config.getClient({ chainId: 1 })
```

ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

### setState ​
`(value: State<chains> | ((state: State<chains>) => State<chains>)) => void`
Updates the `Config` object's internal state. See `State` for more info.
index.tsconfig.ts
ts```
import { mainnet } from 'wagmi/chains'
import { config } from './config'
config.setState((x) => ({
 ...x,
 chainId: x.current ? x.chainId : mainnet.id,
}))
```

ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

WARNING
Exercise caution when using this method. It is intended for internal and advanced use-cases only. Manually setting state can cause unexpected behavior.
### subscribe ​
`(selector: (state: State<chains>) => state, listener: (selectedState: state, previousSelectedState: state) => void, options?: { emitImmediately?: boolean | undefined; equalityFn?: ((a: state, b: state) => boolean) | undefined } | undefined) => (() => void)`
Listens for state changes matching the `selector` function. Returns a function that can be called to unsubscribe the listener.
index.tsconfig.ts
ts```
import { config } from './config'
const unsubscribe = config.subscribe(
 (state) => state.chainId,
 (chainId) => console.log(`Chain ID changed to ${chainId}`),
)
unsubscribe()
```

ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http('https://mainnet.example.com'),
  [sepolia.id]: http('https://sepolia.example.com'),
 },
})
```

## State ​
ts```
import { type State } from 'wagmi'
```

### chainId ​
`chains[number]['id']`
Current chain ID. When `syncConnectedChain` is `true`, `chainId` is kept in sync with the current connection. Defaults to first chain in `chains`.
### connections ​
`Map<string, Connection>`
Mapping of unique connector identifier to `Connection` object.
### current ​
`string | undefined`
Unique identifier of the current connection.
### status ​
`'connected' | 'connecting' | 'disconnected' | 'reconnecting'`
Current connection status.
  * `'connecting'` attempting to establish connection.
  * `'reconnecting'` attempting to re-establish connection to one or more connectors.
  * `'connected'` at least one connector is connected.
  * `'disconnected'` no connection to any connector.


## Connection ​
ts```
import { type Connection } from 'wagmi'
```

### accounts ​
`readonly [Address, ...Address[]]`
Array of addresses associated with the connection.
### chainId ​
`number`
Chain ID associated with the connection.
### connector ​
`Connector`
Connector associated with the connection.
