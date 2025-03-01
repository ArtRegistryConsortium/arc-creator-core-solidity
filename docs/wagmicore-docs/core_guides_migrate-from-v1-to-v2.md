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
# Migrate from v1 to v2 ​
Wagmi Core v2 redesigns the core APIs to mesh better with Viem. This major version transforms Wagmi into a light wrapper around Viem, sprinkling in multichain support and account management. As such, there are some breaking changes and deprecations to be aware of outlined in this guide.
To get started, install the latest version of Wagmi and it's required peer dependencies.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/core viem@2.x @wagmi/connectors
```

bash```
npm install @wagmi/core viem@2.x @wagmi/connectors
```

bash```
yarn add @wagmi/core viem@2.x @wagmi/connectors
```

bash```
bun add @wagmi/core viem@2.x @wagmi/connectors
```

Wagmi Core v2 should be the last major version that will have this many actionable breaking changes.
Moving forward, new functionality will be opt-in with old functionality being deprecated alongside the new features. This means upgrading to the latest major versions will not require immediate changes.
Not ready to migrate yet?
The Wagmi Core v1 docs are still available at 1.x.wagmi.sh/core.
## Dependencies ​
### Dropped CommonJS support ​
Wagmi v2 no longer publishes a separate `cjs` tag since very few people use this tag and ESM is the future. See Sindre Sorhus' guide for more info about switching to ESM.
## Actions ​
### Removed `config` singleton ​
Before v2, when you called `createConfig`, it set a global `config` singleton that was used internally by actions. For v2, `config` is now a required first parameter for actions.
index.tsconfig.ts
ts```
import { getAccount, readContract } from '@wagmi/core'
import { parseAbi } from 'viem'
import { config } from './config'
const account = getAccount()
const account = getAccount(config)
const balanceOf = readContract({ 
const balanceOf = readContract(config, { 
 address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
 abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
 functionName: 'balanceOf',
 args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'],
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

The previous global `config` singleton made it so you couldn't use multiple `Config` objects in the same project. In addition, we think passing `config` is more explicit and makes it easier to understand what's going on. Finally, types can be inferred directly from the `config`, like chain properties and more.
### Removed `getContract` ​
Removed `getContract` export. Use Viem's `getContract` instead.
ts```
import { getContract } from '@wagmi/core'
import { getContract } from 'viem'
const contract = getContract()
const contract = getContract()
```

### Removed `getNetwork` and `watchNetwork` ​
The `getNetwork` and `watchNetwork` actions were removed since the connected chain is typically based on the connected account.
  * Use `config.chains` instead to get `chains`.
index.tsconfig.ts
ts```
import { getNetwork } from '@wagmi/core'
const { chains } = getNetwork()
const chains = config.chains
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

  * Use `getAccount` and `config.chains` instead to get `chain`.
index.tsconfig.ts
ts```
import { getNetwork } from '@wagmi/core'
import { getAccount } from '@wagmi/core'
import { config } from './config'
const { chain } = getNetwork()
const { chainId } = getAccount(config)
const chain = chains.find(chain => chain.id === chainId)
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

Before v2, `getNetwork().chain` could result in an invalid chain if the active connector's `chainId` was not configured in the list of `config.chains`. Using `getAccount` and `config.chains` is more work, but ensures that chain is either valid or not defined. You can also use `getAccount(config).chain` if you don't care about the chain being `undefined` when not configured.
  * Use `watchAccount` instead of `watchNetwork`.
index.tsconfig.ts
ts```
import { watchNetwork } from '@wagmi/core'
import { watchAccount } from '@wagmi/core'
import { config } from './config'
const unwatch = watchNetwork((data) => console.log('Changed!', data))
const unwatch = watchAccount(config, { 
 onChange(data) { 
  const chains = config.chains
  const chain = chains.find(chain => chain.id === data.chainId)
 }, 
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



### Removed `getWebSocketPublicClient` and `watchWebSocketPublicClient` ​
Viem Transports now determine the type of client that is returned. You can use `getPublicClient` and `watchPublicClient` to retrieve Viem `PublicClient` instances.
Alternatively, you can use `getClient` and `watchClient` to retrieve plain Viem `Client` instances. This is a better option for users that care about optimizing bundle size to be as small as possible.
### Removed `watchReadContract`, `watchReadContracts`, and `watchReadMulticall` ​
Use `watchBlockNumber` along with `readContract`, `readContracts`, and `multicall` actions instead. Before v2, `watchReadContract`, `watchReadContracts`, and `watchReadMulticall` were all wrappers around `watchBlockNumber` and this simplifies the API.
index.tsconfig.ts
ts```
import { watchReadContract } from '@wagmi/core'
import { watchBlockNumber, readContract } from '@wagmi/core'
import { config } from './config'
const unwatch = watchReadContract(
 { 
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 
  abi: parseAbi(['function balanceOf(address) view returns (uint256)']), 
  functionName: 'balanceOf', 
  args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'], 
 },
 (result) => console.log('Changed!', result),
)
const unwatch = watchBlockNumber(config, { 
 onBlockNumber() { 
  const balanceOf = readContract(config, { 
   address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 
   abi: parseAbi(['function balanceOf(address) view returns (uint256)']), 
   functionName: 'balanceOf', 
   args: ['0xd2135CfB216b74109775236E36d4b433F1DF507B'], 
  })
  console.log('Changed!', balanceOf)
 }, 
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

### Removed `fetchFeeData` ​
Removed `fetchFeeData`. Use `estimateFeesPerGas` instead.
index.tsconfig.ts
ts```
import { fetchFeeData } from '@wagmi/core'
import { estimateFeesPerGas } from '@wagmi/core'
import { config } from './config'
const result = await fetchFeeData()
const result = await estimateFeesPerGas(config)
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

### Removed `prepareWriteContract` ​
Removed `prepareWriteContract`. Use `simulateContract` instead.
index.tsconfig.ts
ts```
import { prepareWriteContract } from '@wagmi/core'
import { simulateContract } from '@wagmi/core'
import { config } from './config'
const result = await prepareWriteContract({ ... })
const result = await simulateContract(config, { ... })
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

### Removed `prepareSendTransaction` ​
Removed `prepareSendTransaction`. Use `estimateGas` instead.
index.tsconfig.ts
ts```
import { prepareSendTransaction } from '@wagmi/core'
import { estimateGas } from '@wagmi/core'
import { config } from './config'
const result = await prepareSendTransaction({ ... })
const result = await estimateGas(config, { ... })
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

### Updated `sendTransaction` and `writeContract` return type ​
Updated `sendTransaction` and `writeContract` return type from `{ hash: `0x${string}` }` to ``0x${string}``.
ts```
const result = await sendTransaction({ hash: '0x...' })
result.hash
result
```

### Updated `connect` return type ​
Updated `connect` return type from `{ account: Address; chain: { id: number; unsupported?: boolean }; connector: Connector }` to `{ accounts: readonly Address[]; chainId: number }`. This better reflects the ability to have multiple accounts per connector.
### Renamed parameters and return types ​
All hook parameters and return types follow the naming pattern of `[PascalCaseActionName]Parameters` and `[PascalCaseActionName]ReturnType`. For example, `GetAccountParameters` and `GetAccountReturnType`.
ts```
import { GetAccountConfig, GetAccountResult } from '@wagmi/core'
import { GetAccountParameters, GetAccountReturnType } from '@wagmi/core'
```

## Connectors ​
### Moved Wagmi Connectors to peer dependencies ​
Wagmi Core v2 no longer exports connectors via the `'@wagmi/core/connectors/*'` entrypoints. Instead, you should install the `@wagmi/connectors` package.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/connectors
```

bash```
npm install @wagmi/connectors
```

bash```
yarn add @wagmi/connectors
```

bash```
bun add @wagmi/connectors
```

And import connectors from there.
ts```
import { injected } from '@wagmi/connectors'
```

See the connectors documentation for more information.
### Updated connector API ​
In order to maximize type-safety and ease of creating connectors, the connector API changed. Follow the Creating Connectors guide for more info on creating new connectors and converting Wagmi v1 connectors.
### Removed individual entrypoints ​
Previously, each connector had its own entrypoint to optimize tree-shaking. Since all connectors now have `package.json#sideEffects` enabled, this is no longer necessary and the entrypoint is unified. Use the `'@wagmi/connectors'` package instead.
ts```
import { InjectedConnector } from '@wagmi/core/connectors/injected'
import { CoinbaseWalletConnector } from '@wagmi/core/connectors/coinbaseWallet'
import { coinbaseWallet, injected } from '@wagmi/connectors'
```

### Removed `MetaMaskConnector` ​
The `MetaMaskConnector` was removed since it was nearly the same thing as the `InjectedConnector`. Use the `injected` connector instead, along with the `target` parameter set to `'metaMask'`, for the same behavior.
ts```
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { injected } from '@wagmi/connectors'
const connector = new MetaMaskConnector()
const connector = injected({ target: 'metaMask' })
```

### Renamed connectors ​
In Wagmi v1, connectors were classes you needed to instantiate. In Wagmi v2, connectors are functions. As a result, the API has changed. Connectors have the following new names:
  * `CoinbaseWalletConnector` is now `coinbaseWallet`.
  * `InjectedConnector` is now `injected`.
  * `SafeConnector` is now `safe`.
  * `WalletConnectConnector` is now `walletConnect`.


To create a connector, you now call the connector function with parameters.
ts```
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { walletConnect } from '@wagmi/connectors'
const connector = new WalletConnectConnector({ 
const connector = walletConnect({ 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

### Removed `WalletConnectLegacyConnector` ​
WalletConnect v1 was sunset June 28, 2023. Use the `walletConnect` connector instead.
ts```
import { WalletConnectLegacyConnector } from '@wagmi/core/connectors/walletConnectLegacy'
import { walletConnect } from '@wagmi/connectors'
const connector = new WalletConnectLegacyConnector({ 
const connector = walletConnect({ 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

## Chains ​
### Updated `'@wagmi/core/chains'` entrypoint ​
Chains now live in the Viem repository. As a result, the `'@wagmi/core/chains'` entrypoint now proxies all chains from `'viem/chains'` directly.
### Removed `mainnet` and `sepolia` from main entrypoint ​
Since the `'@wagmi/core/chains'` entrypoint now proxies `'viem/chains'`, `mainnet` and `sepolia` were removed from the main entrypoint. Use the `'@wagmi/core/chains'` entrypoint instead.
ts```
import { mainnet, sepolia } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
```

## Errors ​
A number of errors were renamed to better reflect their functionality or replaced by Viem errors.
## Miscellaneous ​
### Removed internal ENS normalization ​
Before v2, Wagmi handled ENS name normalization internally for `getEnsAddress`, `getEnsAvatar`, and `getEnsResolver`, using Viem's `normalize` function. This added extra bundle size as full normalization is quite heavy. For v2, you must normalize ENS names yourself before passing them to these actions. You can use Viem's `normalize` function or any other function that performs UTS-46 normalization.
index.tsconfig.ts
ts```
import { getEnsAddress } from '@wagmi/core'
import { normalize } from 'viem'
import { config } from './config'
const result = await getEnsAddress(config, {
 name: 'wevm.eth', 
 name: normalize('wevm.eth'), 
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

By inverting control, Wagmi lets you choose how much normalization to do. For example, maybe your project only allows ENS names that are numeric so no normalization is not needed. Check out the ENS documentation for more information on normalizing names.
### Removed `configureChains` ​
The Wagmi v2 `Config` now has native multichain support using the `chains` parameter so the `configureChains` function is no longer required.
ts```
import { configureChains, createConfig } from '@wagmi/core'
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
const { chains, publicClient } = configureChains(
 [mainnet, sepolia],
 [publicProvider(), publicProvider()],
)
export const config = createConfig({
 publicClient, 
 chains: [mainnet, sepolia], 
 transports: { 
  [mainnet.id]: http(), 
  [sepolia.id]: http(), 
 }, 
})
```

### Removed ABI exports ​
Import from Viem instead.
ts```
import { erc20ABI } from '@wagmi/core'
import { erc20Abi } from 'viem'
```

### Removed `'@wagmi/core/providers/*` entrypoints ​
It never made sense that we would have provider URLs hardcoded in the Wagmi codebase. Use Viem transports along with RPC provider URLs instead.
ts```
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { http } from 'viem'
const transport = http('https://mainnet.example.com')
```

### Updated `createConfig` parameters ​
  * Removed `autoConnect`. The reconnecting behavior must be managed manually and is not related to the Wagmi `Config`. Use the `reconnect` action instead.
  * Removed `publicClient` and `webSocketPublicClient`. Use `transports` or `client` instead.
  * Removed `logger`. Wagmi no longer logs debug information to console.


### Updated `Config` object ​
  * Removed `config.connector`. Use `config.state.connections.get(config.state.current)?.connector` instead.
  * Removed `config.data`. Use `config.state.connections.get(config.state.current)` instead.
  * Removed `config.error`. Was unused and not needed.
  * Removed `config.lastUsedChainId`. Use `config.state.connections.get(config.state.current)?.chainId` instead.
  * Removed `config.publicClient`. Use `config.getClient()` or `getPublicClient` instead.
  * Removed `config.status`. Use `config.state.status` instead.
  * Removed `config.webSocketClient`. Use `config.getClient()` or `getPublicClient` instead.
  * Removed `config.clearState`. Was unused and not needed.
  * Removed `config.autoConnect()`. Use `reconnect` action instead.
  * Renamed `config.setConnectors`. Use `config._internal.setConnectors` instead.
  * Removed `config.setLastUsedConnector`. Use `config.storage?.setItem('recentConnectorId', connectorId)` instead.
  * Removed `getConfig`. `config` should be passed explicitly to actions instead of using global `config`.


## Deprecations ​
### Deprecated `getBalance` `token` parameter ​
Moving forward, `getBalance` will only work for native currencies, thus the `token` parameter is no longer supported. Use `readContracts` instead.
ts```
import { getBalance } from '@wagmi/core'
import { readContracts } from '@wagmi/core'
import { erc20Abi } from 'viem'
import { config } from './config'
const result = await getBalance(config, { 
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48', 
 token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
})
const result = await readContracts(config, { 
 allowFailure: false, 
 contracts: [ 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'balanceOf', 
   args: ['0x4557B18E779944BFE9d78A672452331C186a9f48'], 
  }, 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'decimals', 
  }, 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'symbol', 
  }, 
 ] 
})
```

### Deprecated `getBalance` `unit` parameter and `formatted` return value ​
Moving forward, `getBalance` will not accept the `unit` parameter or return a `formatted` value. Instead you can call `formatUnits` from Viem directly or use another number formatting library, like dnum instead.
ts```
import { formatUnits } from 'viem'
import { getBalance } from '@wagmi/core'
const result = await getBalance({
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 unit: 'ether', 
})
result.formatted
formatUnits(result.value, result.decimals)
```

### Deprecated `getToken` ​
Moving forward, `getToken` is no longer supported. Use `readContracts` instead.
ts```
import { getToken } from '@wagmi/core'
import { readContracts } from '@wagmi/core'
import { erc20Abi } from 'viem'
import { config } from './config'
const result = await getToken(config, { 
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
})
const result = await readContracts(config, { 
 allowFailure: false, 
 contracts: [ 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'decimals', 
  }, 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'name', 
  }, 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'symbol', 
  }, 
  { 
   address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
   abi: erc20Abi, 
   functionName: 'totalSupply', 
  }, 
 ] 
})
```

### Deprecated `formatUnits` parameters and return values ​
The `formatUnits` parameter and related return values (e.g. `result.formatted`) are deprecated for the following actions:
  * `estimateFeesPerGas`
  * `getToken`


Instead you can call `formatUnits` from Viem directly or use another number formatting library, like dnum instead.
ts```
import { formatUnits } from 'viem'
import { getToken } from '@wagmi/core'
const result = await getToken({
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
 formatUnits: 'ether',
})
result.totalSupply.formatted
formatUnits(result.totalSupply.value, 18)
```

This allows us to invert control to users so they can handle number formatting however they want, taking into account precision, localization, and more.
### Renamed actions ​
The following actions were renamed to better reflect their functionality and underlying Viem actions:
  * `fetchBalance` is now `getBalance`
  * `fetchBlockNumber` is now `getBlockNumber`
  * `fetchEnsAddress` is now `getEnsAddress`
  * `fetchEnsAvatar` is now `getEnsAvatar`
  * `fetchEnsName` is now `getEnsName`
  * `fetchEnsResolver` is now `getEnsResolver`
  * `fetchToken` is now `getToken`
  * `fetchTransaction` is now `getTransaction`
  * `switchNetwork` is now `switchChain`
  * `waitForTransaction` is now `waitForTransactionReceipt`


