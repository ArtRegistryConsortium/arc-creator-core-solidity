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
# Getting Started ​
## Overview ​
Wagmi is a React Hooks library for Ethereum. You can learn more about the rationale behind the project in the Why Wagmi section.
## Automatic Installation ​
For new projects, it is recommended to set up your Wagmi app using the `create-wagmi` command line interface (CLI). This will create a new Wagmi project using TypeScript and install the required dependencies.
pnpmnpmyarnbun
bash```
pnpm create wagmi
```

bash```
npm create wagmi@latest
```

bash```
yarn create wagmi
```

bash```
bun create wagmi
```

Once the command runs, you'll see some prompts to complete.
```
Project name: wagmi-project
Select a framework: React / Vanilla
...
```

After the prompts, `create-wagmi` will create a directory with your project name and install the required dependencies. Check out the `README.md` for further instructions (if required).
## Manual Installation ​
To manually add Wagmi to your project, install the required packages.
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

  * Viem is a TypeScript interface for Ethereum that performs blockchain operations.
  * TanStack Query is an async state manager that handles requests, caching, and more.
  * TypeScript is optional, but highly recommended. Learn more about TypeScript support.


### Create Config ​
Create and export a new Wagmi config using `createConfig`.
config.ts
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

In this example, Wagmi is configured to use the Mainnet and Sepolia chains, and `injected` connector. Check out the `createConfig` docs for more configuration options.
TypeScript Tip
If you are using TypeScript, you can "register" the Wagmi config or use the hook `config` property to get strong type-safety across React Context in places that wouldn't normally have type info.
register confighook config property
ts```
import {
useBlockNumber
 } from 'wagmi'

useBlockNumber
({ chainId: 123 })
Type '123' is not assignable to type '1 | 11155111 | undefined'.

declare module 'wagmi' {
 interfaceRegister {

config
: typeof
config

 }
}
```

ts```
import {
useBlockNumber
 } from 'wagmi'

useBlockNumber
({ chainId: 123, 
config
 })
Type '123' is not assignable to type '1 | 11155111 | undefined'.

```

By registering or using the hook `config` property, `useBlockNumber`'s `chainId` is strongly typed to only allow Mainnet and Sepolia IDs. Learn more by reading the TypeScript docs.
### Wrap App in Context Provider ​
Wrap your app in the `WagmiProvider` React Context Provider and pass the `config` you created earlier to the `value` property.
app.tsxconfig.ts
tsx```
import { WagmiProvider } from 'wagmi'
import { config } from './config'
function App() {
 return (
  <WagmiProvider config={config}>
   {/** ... */}
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

Check out the `WagmiProvider` docs to learn more about React Context in Wagmi.
### Setup TanStack Query ​
Inside the `WagmiProvider`, wrap your app in a TanStack Query React Context Provider, e.g. `QueryClientProvider`, and pass a new `QueryClient` instance to the `client` property.
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

Check out the TanStack Query docs to learn about the library, APIs, and more.
### Use Wagmi ​
Now that everything is set up, every component inside the Wagmi and TanStack Query Providers can use Wagmi React Hooks.
profile.tsxapp.tsxconfig.ts
tsx```
import { useAccount, useEnsName } from 'wagmi'
export function Profile() {
 const { address } = useAccount()
 const { data, error, status } = useEnsName({ address })
 if (status === 'pending') return <div>Loading ENS name</div>
 if (status === 'error')
  return <div>Error fetching ENS name: {error.message}</div>
 return <div>ENS name: {data}</div>
}
```

tsx```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { Profile } from './profile'
const queryClient = new QueryClient()
function App() {
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    <Profile />
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

## Next Steps ​
For more information on what to do next, check out the following topics.
  * **TypeScript** Learn how to get the most out of Wagmi's type-safety and inference for an enlightened developer experience.
  * **Connect Wallet** Learn how to enable wallets to connect to and disconnect from your apps and display information about connected accounts.
  * **React Hooks** Browse the collection of React Hooks and learn how to use them.
  * **Viem** Learn about Viem and how it works with Wagmi.


