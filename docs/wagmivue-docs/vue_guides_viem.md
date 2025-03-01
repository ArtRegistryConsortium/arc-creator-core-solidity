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
All of the core Wagmi Composables are friendly wrappers around Viem Actions that inject a multi-chain and connector aware Wagmi Config.
There may be cases where you might want to dig deeper and utilize Viem Actions directly (maybe a Composable doesn't exist in Wagmi yet). In these cases, you can create your own custom Wagmi Composable by importing Viem Actions directly via `viem/actions` and plugging in a Viem Client returned by the `useClient` Composable.
There are two categories of Viem Actions:
  * **Public Actions:** Actions that are "read-only" and do not require a wallet connection.
  * **Wallet Actions:** Actions that interface with a Wallet and require a wallet connection.


While it is not mandatory, it is also recommended to pair Actions with either `useQuery` or `useMutation` to effectively leverage the reactivity and caching capabilities of Tanstack Query.
### Public Actions ​
The example below demonstrates how to utilize Viem's `getLogs` Action with a `useQuery` Composable to create your own abstraction akin to a `useLogs` Composable.
vue```
<script setup lang="ts">
// 1. Import modules. 
import { useClient, useConnectorClient } from '@wagmi/vue'
import { useMutation, useQuery } from '@wagmi/vue/query'
import { getLogs, watchAsset } from 'viem/actions'
// 2. Extract a Viem Client for the current active chain. 
const client = useClient()
// 3. Create a "custom" Query Composable that utilizes the Client. 
const { data: logs } = useQuery(
 computed(() => ({ 
  queryKey: ['logs', client.value.uid], 
  queryFn: () => getLogs(client.value) 
 }))
)
</script>
```

### Wallet Actions ​
The example below demonstrates how to utilize Viem's `watchAsset` Action with a `useMutation` Composable to create your own abstraction akin to a `useWatchAsset` Composable.
vue```
<script setup lang="ts">
// 1. Import modules. 
import { useConnectorClient } from '@wagmi/vue'
import { useMutation } from '@wagmi/vue/query'
import { watchAsset } from 'viem/actions'
// 2. Extract a Viem Client for the current active chain. 
const { data: connectorClient } = useConnectorClient()
// 3. Create a "custom" Mutation Composable that utilizes the Client. 
const { mutate } = useMutation({
 mutationFn: (asset) => watchAsset(connectorClient, asset)
})
</script>
```

## Private Key & Mnemonic Accounts ​
It is possible to utilize Viem's Private Key & Mnemonic Accounts with Wagmi by explicitly passing through the account via the `account` argument on Wagmi Actions.
vue```
<script setup lang="ts">
import { privateKeyToAccount } from 'viem/accounts'
import { useConfig } from '@wagmi/vue'
import { sendTransactionMutationOptions, useMutation } from '@wagmi/vue/query'
const config = useConfig()
const { mutate: sendTransaction } = useMutation(
 sendTransactionMutationOptions(config)
)
const account = privateKeyToAccount('0x...')
sendTransaction({
 account, 
 to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
 value: parseEther('0.001')
})
</script>
```

INFO
Wagmi currently does not support hoisting Private Key & Mnemonic Accounts to the top-level Wagmi Config – meaning you have to explicitly pass through the account to every Action. If you feel like this is a feature that should be added, please open an discussion.
