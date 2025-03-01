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
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { Config, useClient } from 'wagmi'
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
/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
 chainId,
}: { chainId?: number | undefined } = {}) {
 const client = useClient<Config>({ chainId })
 return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

ts```
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { type Config, useClient } from 'wagmi'
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
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
 const client = useClient<Config>({ chainId })
 return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

### Usage ​
Now you can use the `useEthersProvider` function in your components:
example.tsethers.ts (Ethers v5)ethers.ts (Ethers v6)
ts```
import { useEthersProvider } from './ethers'
function Example() {
 const provider = useEthersProvider()
 ...
}
```

ts```
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { Config, useClient } from 'wagmi'
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
/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
 chainId,
}: { chainId?: number | undefined } = {}) {
 const client = useClient<Config>({ chainId })
 return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

ts```
import { FallbackProvider, JsonRpcProvider } from 'ethers'
import { useMemo } from 'react'
import type { Chain, Client, Transport } from 'viem'
import { type Config, useClient } from 'wagmi'
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
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
 const client = useClient<Config>({ chainId })
 return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}
```

## Connector Client → Signer ​
### Reference Implementation ​
Copy the following reference implementation into a file of your choice:
Ethers v5Ethers v6
ts```
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { Account, Chain, Client, Transport } from 'viem'
import { Config, useConnectorClient } from 'wagmi'
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
/** Hook to convert a Viem Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
 const { data: client } = useConnectorClient<Config>({ chainId })
 return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

ts```
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { useMemo } from 'react'
import type { Account, Chain, Client, Transport } from 'viem'
import { type Config, useConnectorClient } from 'wagmi'
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
/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
 const { data: client } = useConnectorClient<Config>({ chainId })
 return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

### Usage ​
Now you can use the `useEthersSigner` function in your components:
example.tsethers.ts (Ethers v5)ethers.ts (Ethers v6)
ts```
import { useEthersSigner } from './ethers'
function example() {
 const signer = useEthersSigner()
 ...
}
```

ts```
import { providers } from 'ethers'
import { useMemo } from 'react'
import type { Account, Chain, Client, Transport } from 'viem'
import { Config, useConnectorClient } from 'wagmi'
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
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
 const { data: client } = useConnectorClient<Config>({ chainId })
 return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

ts```
import { BrowserProvider, JsonRpcSigner } from 'ethers'
import { useMemo } from 'react'
import type { Account, Chain, Client, Transport } from 'viem'
import { type Config, useConnectorClient } from 'wagmi'
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
/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
 const { data: client } = useConnectorClient<Config>({ chainId })
 return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}
```

