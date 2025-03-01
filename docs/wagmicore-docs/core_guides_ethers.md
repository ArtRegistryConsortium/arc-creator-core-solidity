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
# Ethers.js Adapters ​
It is recommended for projects to migrate to Viem when using Wagmi, but there are some cases where you might still need to use Ethers.js in your project:
  * You may want to **incrementally migrate** Ethers.js usage to Viem
  * Some **third-party libraries & SDKs** may only support Ethers.js
  * Personal preference


We have provided reference implementations for Viem → Ethers.js adapters that you can copy + paste in your project.
## Client → Provider ​
### Reference Implementation ​
Copy the following reference implementation into a file of your choice:
Ethers v5Ethers v6
ts```
import { type Config, getClient } from '@wagmi/core'
import { providers } from 'ethers'
import type { Client, Chain, Transport } from 'viem'
export function clientToProvider(client: Client<Transport, Chain>) {
 const { chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 if (transport.type === 'fallback')
  return new providers.FallbackProvider(
   (transport.transports as ReturnType<Transport>[]).map(
    ({ value }) => new providers.JsonRpcProvider(value?.url, network),
   ),
  )
 return new providers.JsonRpcProvider(transport.url, network)
}
/** Action to convert a viem Public Client to an ethers.js Provider. */
export function getEthersProvider(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = getClient(config, { chainId })
 if (!client) return
 return clientToProvider(client)
}
```

ts```
import { type Config, getClient } from '@wagmi/core'
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import type { Client, Chain, Transport } from 'viem'
export function clientToProvider(client: Client<Transport, Chain>) {
 const { chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 if (transport.type === 'fallback') {
  const providers = (transport.transports as ReturnType<Transport>[]).map(
   ({ value }) => new JsonRpcProvider(value?.url, network),
  )
  if (providers.length === 1) return providers[0]
  return new FallbackProvider(providers)
 }
 return new JsonRpcProvider(transport.url, network)
}
/** Action to convert a viem Client to an ethers.js Provider. */
export function getEthersProvider(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = getClient(config, { chainId })
 if (!client) return
 return clientToProvider(client)
}
```

### Usage ​
Now you can use the `getEthersProvider` function in your components:
example.tsethers.ts (Ethers v5)ethers.ts (Ethers v6)
ts```
import { getEthersProvider } from './ethers'
import { config } from './config'
function example() {
 const provider = getEthersProvider(config)
 ...
}
```

ts```
import { type Config, getClient } from '@wagmi/core'
import { providers } from 'ethers'
import type { Client, Chain, Transport } from 'viem'
export function clientToProvider(client: Client<Transport, Chain>) {
 const { chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 if (transport.type === 'fallback')
  return new providers.FallbackProvider(
   (transport.transports as ReturnType<Transport>[]).map(
    ({ value }) => new providers.JsonRpcProvider(value?.url, network),
   ),
  )
 return new providers.JsonRpcProvider(transport.url, network)
}
/** Action to convert a viem Public Client to an ethers.js Provider. */
export function getEthersProvider(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = getClient(config, { chainId })
 if (!client) return
 return clientToProvider(client)
}
```

ts```
import { type Config, getClient } from '@wagmi/core'
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import type { Client, Chain, Transport } from 'viem'
export function clientToProvider(client: Client<Transport, Chain>) {
 const { chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 if (transport.type === 'fallback') {
  const providers = (transport.transports as ReturnType<Transport>[]).map(
   ({ value }) => new JsonRpcProvider(value?.url, network),
  )
  if (providers.length === 1) return providers[0]
  return new FallbackProvider(providers)
 }
 return new JsonRpcProvider(transport.url, network)
}
/** Action to convert a viem Client to an ethers.js Provider. */
export function getEthersProvider(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = getClient(config, { chainId })
 if (!client) return
 return clientToProvider(client)
}
```

## Connector Client → Signer ​
### Reference Implementation ​
Copy the following reference implementation into a file of your choice:
Ethers v5Ethers v6
ts```
import { Config, getConnectorClient } from '@wagmi/core'
import { providers } from 'ethers'
import type { Account, Chain, Client, Transport } from 'viem'
export function clientToSigner(client: Client<Transport, Chain, Account>) {
 const { account, chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 const provider = new providers.Web3Provider(transport, network)
 const signer = provider.getSigner(account.address)
 return signer
}
/** Action to convert a Viem Client to an ethers.js Signer. */
export async function getEthersSigner(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = await getConnectorClient(config, { chainId })
 return clientToSigner(client)
}
```

ts```
import { Config, getConnectorClient } from '@wagmi/core'
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import type { Account, Chain, Client, Transport } from 'viem'
export function clientToSigner(client: Client<Transport, Chain, Account>) {
 const { account, chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 const provider = new BrowserProvider(transport, network)
 const signer = new JsonRpcSigner(provider, account.address)
 return signer
}
/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = await getConnectorClient(config, { chainId })
 return clientToSigner(client)
}
```

### Usage ​
Now you can use the `getEthersSigner` function in your components:
example.tsethers.ts (Ethers v5)ethers.ts (Ethers v6)
ts```
import { getEthersSigner } from './ethers'
import { config } from './config'
function example() {
 const provider = getEthersSigner(config)
 ...
}
```

ts```
import { Config, getConnectorClient } from '@wagmi/core'
import { providers } from 'ethers'
import type { Account, Chain, Client, Transport } from 'viem'
export function clientToSigner(client: Client<Transport, Chain, Account>) {
 const { account, chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 const provider = new providers.Web3Provider(transport, network)
 const signer = provider.getSigner(account.address)
 return signer
}
/** Action to convert a Viem Client to an ethers.js Signer. */
export async function getEthersSigner(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = await getConnectorClient(config, { chainId })
 return clientToSigner(client)
}
```

ts```
import { Config, getConnectorClient } from '@wagmi/core'
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import type { Account, Chain, Client, Transport } from 'viem'
export function clientToSigner(client: Client<Transport, Chain, Account>) {
 const { account, chain, transport } = client
 const network = {
  chainId: chain.id,
  name: chain.name,
  ensAddress: chain.contracts?.ensRegistry?.address,
 }
 const provider = new BrowserProvider(transport, network)
 const signer = new JsonRpcSigner(provider, account.address)
 return signer
}
/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner(
 config: Config,
 { chainId }: { chainId?: number } = {},
) {
 const client = await getConnectorClient(config, { chainId })
 return clientToSigner(client)
}
```

