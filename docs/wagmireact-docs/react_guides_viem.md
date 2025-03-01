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
# Viem ​
Viem is a low-level TypeScript Interface for Ethereum that enables developers to interact with the Ethereum blockchain, including: JSON-RPC API abstractions, Smart Contract interaction, wallet & signing implementations, coding/parsing utilities and more.
**Wagmi Core** is essentially a wrapper over **Viem** that provides multi-chain functionality via Wagmi Config and automatic account management via Connectors.
## Leveraging Viem Actions ​
All of the core Wagmi Hooks are friendly wrappers around Viem Actions that inject a multi-chain and connector aware Wagmi Config.
There may be cases where you might want to dig deeper and utilize Viem Actions directly (maybe a Hook doesn't exist in Wagmi yet). In these cases, you can create your own custom Wagmi Hook by importing Viem Actions directly via `viem/actions` and plugging in a Viem Client returned by the `useClient` Hook.
The example below demonstrates two different ways to utilize Viem Actions:
  1. **Tree-shakable Actions (recommended):** Uses `useClient` (for public actions) and `useConnectorClient` (for wallet actions).
  2. **Client Actions:** Uses `usePublicClient` (for public actions) and `useWalletClient` (for wallet actions).


TIP
It is highly recommended to use the **tree-shakable** method to ensure that you are only pulling modules you use, and keep your bundle size low.
Tree-shakable ActionsClient Actions
tsx```
// 1. Import modules. 
import { useMutation, useQuery } from '@tanstack/react-query'
import { http, createConfig, useClient, useConnectorClient } from 'wagmi'
import { base, mainnet, optimism, zora } from 'wagmi/chains'
import { getLogs, watchAsset } from 'viem/actions'
// 2. Set up a Wagmi Config 
export const config = createConfig({
 chains: [base, mainnet, optimism, zora],
 transports: {
  [base.id]: http(),
  [mainnet.id]: http(),
  [optimism.id]: http(),
  [zora.id]: http(),
 },
})
function Example() {
 // 3. Extract a Viem Client for the current active chain.
 const publicClient = useClient({ config })
 // 4. Create a "custom" Query Hook that utilizes the Client.
 const { data: logs } = useQuery({
  queryKey: ['logs', publicClient.uid],
  queryFn: () => getLogs(publicClient, /* ... */)
 })
 // 5. Extract a Viem Client for the current active chain & account.
 const { data: walletClient } = useConnectorClient({ config })
 // 6. Create a "custom" Mutation Hook that utilizes the Client.
 const { mutate } = useMutation({
  mutationFn: (asset) => watchAsset(walletClient, asset)
 })
 return (
  <div>
   {/* ... */}
  </div>
 )
}
```

tsx```
// 1. Import modules. 
import { useMutation, useQuery } from '@tanstack/react-query'
import { http, createConfig, useClient, useConnectorClient } from 'wagmi'
import { base, mainnet, optimism, zora } from 'wagmi/chains'
// 2. Set up a Wagmi Config 
export const config = createConfig({
 chains: [base, mainnet, optimism, zora],
 transports: {
  [base.id]: http(),
  [mainnet.id]: http(),
  [optimism.id]: http(),
  [zora.id]: http(),
 },
})
function Example() {
 // 3. Extract a Viem Client for the current active chain.
 const publicClient = useClient({ config })
 // 4. Create a "custom" Query Hook that utilizes the Client.
 const { data: logs } = useQuery({
  queryKey: ['logs', publicClient.uid],
  queryFn: () => publicClient.getLogs(/* ... */)
 })
 // 5. Extract a Viem Client for the current active chain & account.
 const { data: walletClient } = useConnectorClient({ config })
 // 6. Create a "custom" Mutation Hook that utilizes the Client.
 const { mutate } = useMutation({
  mutationFn: (asset) => walletClient.watchAsset(asset)
 })
 return (
  <div>
   {/* ... */}
  </div>
 )
}
```

## Private Key & Mnemonic Accounts ​
It is possible to utilize Viem's Private Key & Mnemonic Accounts with Wagmi by explicitly passing through the account via the `account` argument on Wagmi Actions.
tsx```
import { http, createConfig, useSendTransaction } from 'wagmi'
import { base, mainnet, optimism, zora } from 'wagmi/chains'
import { parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
export const config = createConfig({
 chains: [base, mainnet, optimism, zora],
 transports: {
  [base.id]: http(),
  [mainnet.id]: http(),
  [optimism.id]: http(),
  [zora.id]: http(),
 },
})
const account = privateKeyToAccount('0x...')
function Example() {
 const { data: hash } = useSendTransaction({
  account,
  to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  value: parseEther('0.001')
 })
}
```

INFO
Wagmi currently does not support hoisting Private Key & Mnemonic Accounts to the top-level Wagmi Config – meaning you have to explicitly pass through the account to every Action. If you feel like this is a feature that should be added, please open an discussion.
