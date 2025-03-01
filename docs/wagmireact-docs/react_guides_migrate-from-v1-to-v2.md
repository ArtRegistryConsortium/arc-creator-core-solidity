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
## Overview ​
Wagmi v2 redesigns the core APIs to mesh better with Viem and TanStack Query. This major version transforms Wagmi into a light wrapper around these libraries, sprinkling in multichain support and account management. As such, there are some breaking changes and deprecations to be aware of outlined in this guide.
To get started, install the latest version of Wagmi and it's required peer dependencies.
pnpmnpmyarnbun
bash```
pnpm add wagmi viem@2.x @tanstack/react-query
```

bash```
npm install wagmi viem@2.x @tanstack/react-query
```

bash```
yarn add wagmi viem@2.x @tanstack/react-query
```

bash```
bun add wagmi viem@2.x @tanstack/react-query
```

Wagmi v2 should be the last major version that will have this many actionable breaking changes.
Moving forward after Wagmi v2, new functionality will be opt-in with old functionality being deprecated alongside the new features. This means upgrading to the latest major versions will not require immediate changes.
Not ready to migrate yet?
The Wagmi v1 docs are still available at 1.x.wagmi.sh/react.
## Dependencies ​
### Moved TanStack Query to peer dependencies ​
Wagmi uses TanStack Query to manage async state, handling requests, caching, and more. With Wagmi v1, TanStack Query was an internal implementation detail. With Wagmi v2, TanStack Query is a peer dependency. A lot of Wagmi users also use TanStack Query in their apps so making it a peer dependency gives them more control and removes some custom Wagmi code internally.
If you don't normally use TanStack Query, all you need to do is set it up and mostly forget about it (we'll provide guidance around version updates).
app.tsxconfig.ts
tsx```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
const queryClient = new QueryClient()
function App() {
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    {/** ... */}
   </QueryClientProvider>
  </WagmiProvider>
 )
}
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

For more information on setting up TanStack Query for Wagmi, follow the Getting Started docs. If you want to set up persistence for your query cache (default behavior before Wagmi v2), check out the TanStack Query docs.
### Dropped CommonJS support ​
Wagmi v2 no longer publishes a separate `cjs` tag since very few people use this tag and ESM is the future. See Sindre Sorhus' guide for more info about switching to ESM.
## Hooks ​
### Removed mutation setup arguments ​
Mutation hooks are hooks that change network or application state, sign data, or perform write operations through mutation functions. With Wagmi v1, you could pass arguments directly to these hooks instead of using them with their mutation functions. For example:
ts```
// Wagmi v1
const { signMessage } = useSignMessage({
 message: 'foo bar baz',
})
```

With Wagmi v2, you must pass arguments to the mutation function instead. This follows the same behavior as TanStack Query mutations and improves type-safety.
tsx```
import { useSignMessage } from 'wagmi'
const { signMessage } = useSignMessage({ message: 'foo bar baz' })
const { signMessage } = useSignMessage()
<button
 onClick={() => signMessage()}
 onClick={() => signMessage({ message: 'foo bar baz' })}
>
 Sign message
</button>
```

### Moved TanStack Query parameters to `query` property ​
Previously, you could pass TanStack Query parameters, like `enabled` and `staleTime`, directly to hooks. In Wagmi v2, TanStack Query parameters are now moved to the `query` property. This allows Wagmi to better support TanStack Query type inference, control for future breaking changes since TanStack Query is now a peer dependency, and expose Wagmi-related hook property at the top-level of editor features, like autocomplete.
tsx```
useReadContract({
 enabled: false,
 staleTime: 1_000,
 query: {
  enabled: false,
  staleTime: 1_000,
 },
})
```

### Removed watch property ​
The `watch` property was removed from all hooks besides `useBlock` and `useBlockNumber`. This property allowed hooks to internally listen for block changes and automatically refresh their data. In Wagmi v2, you can compose `useBlock` or `useBlockNumber` along with `React.useEffect` to achieve the same behavior. Two different approaches are outlined for `useBalance` below.
invalidateQueriesrefetch
ts```
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useBlockNumber, useBalance } from 'wagmi'
const queryClient = useQueryClient()
const { data: blockNumber } = useBlockNumber({ watch: true })
const { data: balance, queryKey } = useBalance({ 
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 watch: true, 
})
useEffect(() => {
 queryClient.invalidateQueries({ queryKey })
}, [blockNumber, queryClient])
```

ts```
import { useEffect } from 'react'
import { useBlockNumber, useBalance } from 'wagmi'
const { data: blockNumber } = useBlockNumber({ watch: true })
const { data: balance, refetch } = useBalance({
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 watch: true, 
})
useEffect(() => {
 refetch()
}, [blockNumber])
```

This is a bit more code, but removes a lot of internal code from hooks that can slow down your app when not used and gives you more control. For example, you can easily refresh data every five blocks instead of every block.
ts```
const { data: blockNumber } = useBlockNumber({ watch: true })
const { data: balance, queryKey } = useBalance({
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
})
useEffect(() => {
 if (blockNumber % 5 === 0)
  queryClient.invalidateQueries({ queryKey })
}, [blockNumber, queryClient])
```

### Removed suspense property ​
Wagmi used to support an experimental `suspense` property via TanStack Query. Since TanStack Query removed `suspense` from its `useQuery` hook, it is no longer supported by Wagmi Hooks.
Instead, you can use `useSuspenseQuery` along with TanStack Query-related exports from the `'wagmi/query'` entrypoint.
ts```
import { useSuspenseQuery } from '@tanstack/react-query'
import { useConfig } from 'wagmi'
import { getBalanceQueryOptions } from 'wagmi/query'
import { useBalance } from 'wagmi'
const config = useConfig()
const options = getBalanceQueryOptions(config, { address: '0x…' })
const result = useSuspenseQuery(options)
const result = useBalance({ 
 address: '0x…', 
 suspense: true, 
})
```

### Removed prepare hooks ​
`usePrepareContractWrite` and `usePrepareSendTransaction` were removed and replaced with idiomatic Viem alternatives. For `usePrepareContractWrite`, use `useSimulateContract`. Similar to `usePrepareContractWrite`, `useSimulateContract` composes well with `useWriteContract`
tsx```
import { usePrepareContractWrite, useWriteContract } from 'wagmi'
import { useSimulateContract, useWriteContract } from 'wagmi'
const { config } = usePrepareContractWrite({
const { data } = useSimulateContract({
 address: '0x',
 abi: [{
  type: 'function',
  name: 'transferFrom',
  stateMutability: 'nonpayable',
  inputs: [
   { name: 'sender', type: 'address' },
   { name: 'recipient', type: 'address' },
   { name: 'amount', type: 'uint256' },
  ],
  outputs: [{ type: 'bool' }],
 }],
 functionName: 'transferFrom',
 args: ['0x', '0x', 123n],
})
const { write } = useWriteContract(config)
const { writeContract } = useWriteContract()
<button
 disabled={!Boolean(write)}
 onClick={() => write()}
 disabled={!Boolean(data?.request)}
 onClick={() => writeContract(data!.request)}
>
 Write contract
</button>
```

Instead of `usePrepareSendTransaction`, use `useEstimateGas`. You can pass `useEstimateGas` `data` to `useSendTransaction` to compose the two hooks.
tsx```
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi'
import { useEstimateGas, useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
const { config } = usePrepareSendTransaction({
const { data } = useEstimateGas({
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
})
const { sendTransaction } = useSendTransaction(config)
const { sendTransaction } = useSendTransaction()
<button
 disabled={!Boolean(sendTransaction)}
 onClick={() => sendTransaction()}
 disabled={!Boolean(data)}
 onClick={() => sendTransaction({
  gas: data,
  to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
  value: parseEther('0.01'),
 })}
>
 Send transaction
</button>
```

This might seem like more work, but it gives you more control and is more accurate representation of what is happening under the hood.
### Removed `useNetwork` hook ​
The `useNetwork` hook was removed since the connected chain is typically based on the connected account. Use `useAccount` to get the connected `chain`.
ts```
import { useNetwork } from 'wagmi'
import { useAccount } from 'wagmi'
const { chain } = useNetwork()
const { chain } = useAccount()
```

Use `useConfig` for the list of `chains` set up with the Wagmi `Config`.
ts```
import { useNetwork } from 'wagmi'
import { useConfig } from 'wagmi'
const { chains } = useNetwork()
const { chains } = useConfig()
```

### Removed `onConnect` and `onDisconnect` callbacks from `useAccount` ​
The `onConnect` and `onDisconnect` callbacks were removed from the `useAccount` hook since it is frequently used without these callbacks so it made sense to extract these into a new API, `useAccountEffect`, rather than clutter the `useAccount` hook.
ts```
import { useAccount } from 'wagmi'
import { useAccountEffect } from 'wagmi'
useAccount({ 
useAccountEffect({ 
 onConnect(data) {
  console.log('connected', data)
 },
 onDisconnect() {
  console.log('disconnected')
 },
})
```

### Removed `useWebSocketPublicClient` ​
The Wagmi `Config` does not separate transport types anymore. Simply use Viem's `webSocket` transport instead when setting up your Wagmi `Config`. You can get Viem `Client` instance with this transport attached by using `useClient` or `usePublicClient`.
### Removed `useInfiniteReadContracts` `paginatedIndexesConfig` ​
In the spirit of removing unnecessary abstractions, `paginatedIndexesConfig` was removed. Use `useInfiniteReadContracts`'s `initialPageParam` and `getNextPageParam` parameters along with `fetchNextPage`/`fetchPreviousPage` from the result instead or copy `paginatedIndexesConfig`'s implementation to your codebase.
See the TanStack Query docs for more information on infinite queries.
### Updated `useSendTransaction` and `useWriteContract` return type ​
Updated `useSendTransaction` and `useWriteContract` return type from `{ hash: `0x${string}` }` to ``0x${string}``.
ts```
const result = useSendTransaction()
result.data?.hash
result.data
```

### Updated `useConnect` return type ​
Updated `useConnect` return type from `{ account: Address; chain: { id: number; unsupported?: boolean }; connector: Connector }` to `{ accounts: readonly Address[]; chainId: number }`. This better reflects the ability to have multiple accounts per connector.
### Renamed parameters and return types ​
All hook parameters and return types follow the naming pattern of `[PascalCaseHookName]Parameters` and `[PascalCaseHookName]ReturnType`. For example, `UseAccountParameters` and `UseAccountReturnType`.
ts```
import { UseAccountConfig, UseAccountResult } from 'wagmi'
import { UseAccountParameters, UseAccountReturnType } from 'wagmi'
```

## Connectors ​
### Updated connector API ​
In order to maximize type-safety and ease of creating connectors, the connector API changed. Follow the Creating Connectors guide for more info on creating new connectors and converting Wagmi v1 connectors.
### Removed individual entrypoints ​
Previously, each connector had it's own entrypoint to optimize tree-shaking. Since all connectors now have `package.json#sideEffects` enabled, this is no longer necessary and the entrypoint is unified. Use the `'wagmi/connectors'` entrypoint instead.
ts```
import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { coinbaseWallet, injected } from 'wagmi/connectors'
```

### Removed `MetaMaskConnector` ​
The `MetaMaskConnector` was removed since it was nearly the same thing as the `InjectedConnector`. Use the `injected` connector instead, along with the `target` parameter set to `'metaMask'`, for the same behavior.
ts```
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { injected } from 'wagmi/connectors'
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
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { walletConnect } from 'wagmi/connectors'
const connector = new WalletConnectConnector({ 
const connector = walletConnect({ 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

### Removed `WalletConnectLegacyConnector` ​
WalletConnect v1 was sunset June 28, 2023. Use the `walletConnect` connector instead.
ts```
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
import { walletConnect } from 'wagmi/connectors'
const connector = new WalletConnectLegacyConnector({ 
const connector = walletConnect({ 
 projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
})
```

## Chains ​
### Updated `'wagmi/chains'` entrypoint ​
Chains now live in the Viem repository. As a result, the `'wagmi/chains'` entrypoint now proxies all chains from `'viem/chains'` directly.
### Removed `mainnet` and `sepolia` from main entrypoint ​
Since the `'wagmi/chains'` entrypoint now proxies `'viem/chains'`, `mainnet` and `sepolia` were removed from the main entrypoint. Use the `'wagmi/chains'` entrypoint instead.
ts```
import { mainnet, sepolia } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
```

## Errors ​
A number of errors were renamed to better reflect their functionality or replaced by Viem errors.
## Miscellaneous ​
### Removed internal ENS name normalization ​
Before v2, Wagmi handled ENS name normalization internally for `useEnsAddress`, `useEnsAvatar`, and `useEnsResolver`, using Viem's `normalize` function. This added extra bundle size as full normalization is quite heavy. For v2, you must normalize ENS names yourself before passing them to these hooks. You can use Viem's `normalize` function or any other function that performs UTS-46 normalization.
ts```
import { useEnsAddress } from 'wagmi'
import { normalize } from 'viem/ens'
const result = useEnsAddress({
 name: 'wevm.eth', 
 name: normalize('wevm.eth'), 
})
```

By inverting control, Wagmi let's you choose how much normalization to do. For example, maybe your project only allows ENS names that are numeric so no normalization is not needed. Check out the ENS documentation for more information on normalizing names.
### Removed `configureChains` ​
The Wagmi v2 `Config` now has native multichain support using the `chains` parameter so the `configureChains` function is no longer required.
ts```
import { configureChains, createConfig } from 'wagmi'
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
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
import { erc20ABI } from 'wagmi'
import { erc20Abi } from 'viem'
```

### Removed `'wagmi/providers/*` entrypoints ​
It never made sense that we would have provider URLs hardcoded in the Wagmi codebase. Use Viem transports along with RPC provider URLs instead.
ts```
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { http } from 'viem'
const transport = http('https://mainnet.example.com')
```

### Updated `createConfig` parameters ​
  * Removed `autoConnect`. The reconnecting behavior is now managed by React and not related to the Wagmi `Config`. Use `WagmiProvider` `reconnectOnMount` or `useReconnect` hook instead.
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
### Renamed `WagmiConfig` ​
`WagmiConfig` was renamed to `WagmiProvider` to reduce confusion with the Wagmi `Config` type. React Context Providers usually follow the naming schema `*Provider` so this is a more idiomatic name. Now that Wagmi no longer uses Ethers.js (since Wagmi v1), the term "Provider" is less overloaded.
app.tsxconfig.ts
tsx```
import { WagmiConfig } from 'wagmi'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
function App() {
 return (
  <WagmiConfig config={config}>
  <WagmiProvider config={config}>
   {/** ... */}
  </WagmiProvider>
  </WagmiConfig>
 )
}
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

### Deprecated `useBalance` `token` parameter ​
Moving forward, `useBalance` will only work for native currencies, thus the `token` parameter is no longer supported. Use `useReadContracts` instead.
ts```
import { useBalance } from 'wagmi'
import { useReadContracts } from 'wagmi'
import { erc20Abi } from 'viem'
const result = useBalance({ 
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48', 
 token: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
})
const result = useReadContracts({ 
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

### Deprecated `useBalance` `unit` parameter and `formatted` return value ​
Moving forward, `useBalance` will not accept the `unit` parameter or return a `formatted` value. Instead you can call `formatUnits` from Viem directly or use another number formatting library, like dnum instead.
ts```
import { formatUnits } from 'viem'
import { useBalance } from 'wagmi'
const result = useBalance({
 address: '0x4557B18E779944BFE9d78A672452331C186a9f48',
 unit: 'ether', 
})
result.data!.formatted
formatUnits(result.data!.value, result.data!.decimals)
```

### Deprecated `useToken` ​
Moving forward, `useToken` is no longer supported. Use `useReadContracts` instead.
ts```
import { useToken } from 'wagmi'
import { useReadContracts } from 'wagmi'
import { erc20Abi } from 'viem'
const result = useToken({ 
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', 
})
const result = useReadContracts({ 
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
The `formatUnits` parameter and related return values (e.g. `result.formatted`) are deprecated for the following hooks:
  * `useEstimateFeesPerGas`
  * `useToken`


Instead you can call `formatUnits` from Viem directly or use another number formatting library, like dnum instead.
ts```
import { formatUnits } from 'viem'
const result = useToken({
 address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
 formatUnits: 'ether',
})
result.data!.totalSupply.formatted
formatUnits(result.data!.totalSupply.value, 18)
```

This allows us to invert control to users so they can handle number formatting however they want, taking into account precision, localization, and more.
### Renamed hooks ​
The following hooks were renamed to better reflect their functionality and underlying Viem actions:
  * `useContractRead` is now `useReadContract`
  * `useContractReads` is now `useReadContracts`
  * `useContractWrite` is now `useWriteContract`
  * `useContractEvent` is now `useWatchContractEvent`
  * `useContractInfiniteReads` is now `useInfiniteReadContracts`
  * `useFeeData` is now `useEstimateFeesPerGas`
  * `useSwitchNetwork` is now `useSwitchChain`
  * `useWaitForTransaction` is now `useWaitForTransactionReceipt`


### Miscellaneous ​
  * `WagmiConfigProps` renamed to `WagmiProviderProps`.
  * `Context` renamed to `WagmiContext`.


