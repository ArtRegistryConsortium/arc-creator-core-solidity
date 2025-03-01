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
# Connect Wallet ​
The ability for a user to connect their wallet is a core function for any Dapp. It allows users to perform tasks such as: writing to contracts, signing messages, or sending transactions.
Wagmi contains everything you need to get started with building a Connect Wallet module. To get started, you can either use a third-party library or build your own.
## Third-party Libraries ​
You can use a pre-built Connect Wallet module from a third-party library such as:
  * ConnectKit - Guide
  * AppKit - Guide
  * RainbowKit - Guide
  * Dynamic - Guide
  * Privy - Guide


The above libraries are all built on top of Wagmi, handle all the edge cases around wallet connection, and provide a seamless Connect Wallet UX that you can use in your Dapp.
## Build Your Own ​
Wagmi provides you with the Hooks to get started building your own Connect Wallet module.
It takes less than five minutes to get up and running with Browser Wallets, WalletConnect, and Coinbase Wallet.
### 1. Configure Wagmi ​
Before we get started with building the functionality of the Connect Wallet module, we will need to set up the Wagmi configuration.
Let's create a `config.ts` file and export a `config` object.
config.ts
tsx```
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
const projectId = '<WALLETCONNECT_PROJECT_ID>'
export const config = createConfig({
 chains: [mainnet, base],
 connectors: [
  injected(),
  walletConnect({ projectId }),
  metaMask(),
  safe(),
 ],
 transports: {
  [mainnet.id]: http(),
  [base.id]: http(),
 },
})
```

In the above configuration, we want to set up connectors for Injected (browser), WalletConnect (browser + mobile), MetaMask, and Safe wallets. This configuration uses the **Mainnet** and **Base** chains, but you can use whatever you want.
WARNING
Make sure to replace the `projectId` with your own WalletConnect Project ID, if you wish to use WalletConnect!
Get your Project ID
### 2. Wrap App in Context Provider ​
Next, we will need to wrap our React App with Context so that our application is aware of Wagmi & React Query's reactive state and in-memory caching.
app.tsxconfig.ts
tsx```
 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
// 2. Set up a React Query client.
const queryClient = new QueryClient()
function App() {
 // 3. Wrap app with Wagmi and React Query context.
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    {/** ... */}
   </QueryClientProvider>
  </WagmiProvider>
 )
}
```

tsx```
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
const projectId = '<WALLETCONNECT_PROJECT_ID>'
export const config = createConfig({
 chains: [mainnet, base],
 connectors: [
  injected(),
  walletConnect({ projectId }),
  metaMask(),
  safe(),
 ],
 transports: {
  [mainnet.id]: http(),
  [base.id]: http(),
 },
})
```

### 3. Display Wallet Options ​
After that, we will create a `WalletOptions` component that will display our connectors. This will allow users to select a wallet and connect.
Below, we are rendering a list of `connectors` retrieved from `useConnect`. When the user clicks on a connector, the `connect` function will connect the users' wallet.
wallet-options.tsxapp.tsxconfig.ts
tsx```
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
export function WalletOptions() {
 const { connectors, connect } = useConnect()
 return connectors.map((connector) => (
  <button key={connector.uid} onClick={() => connect({ connector })}>
   {connector.name}
  </button>
 ))
}
```

tsx```
 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
// 2. Set up a React Query client.
const queryClient = new QueryClient()
function App() {
 // 3. Wrap app with Wagmi and React Query context.
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    {/* ... */}
   </QueryClientProvider>
  </WagmiProvider>
 )
}
```

tsx```
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
const projectId = '<WALLETCONNECT_PROJECT_ID>'
export const config = createConfig({
 chains: [mainnet, base],
 connectors: [
  injected(),
  walletConnect({ projectId }),
  metaMask(),
  safe(),
 ],
 transports: {
  [mainnet.id]: http(),
  [base.id]: http(),
 },
})
```

### 4. Display Connected Account ​
Lastly, if an account is connected, we want to show some basic information, like the connected address and ENS name and avatar.
Below, we are using hooks like `useAccount`, `useEnsAvatar` and `useEnsName` to extract this information.
We are also utilizing `useDisconnect` to show a "Disconnect" button so a user can disconnect their wallet.
account.tsxwallet-options.tsxapp.tsxconfig.ts
tsx```
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
export function Account() {
 const { address } = useAccount()
 const { disconnect } = useDisconnect()
 const { data: ensName } = useEnsName({ address })
 const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
 return (
  <div>
   {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
   {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
   <button onClick={() => disconnect()}>Disconnect</button>
  </div>
 )
}
```

tsx```
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
export function WalletOptions() {
 const { connectors, connect } = useConnect()
 return connectors.map((connector) => (
  <WalletOption
   key={connector.uid}
   connector={connector}
   onClick={() => connect({ connector })}
  />
 ))
}
function WalletOption({
 connector,
 onClick,
}: {
 connector: Connector
 onClick: () => void
}) {
 const [ready, setReady] = React.useState(false)
 React.useEffect(() => {
  ;(async () => {
   const provider = await connector.getProvider()
   setReady(!!provider)
  })()
 }, [connector])
 return (
  <button disabled={!ready} onClick={onClick}>
   {connector.name}
  </button>
 )
}
```

tsx```
 // 1. Import modules
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { config } from './config'
// 2. Set up a React Query client.
const queryClient = new QueryClient()
function App() {
 // 3. Wrap app with Wagmi and React Query context.
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    {/* ... */}
   </QueryClientProvider>
  </WagmiProvider>
 )
}
```

tsx```
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
const projectId = '<WALLETCONNECT_PROJECT_ID>'
export const config = createConfig({
 chains: [mainnet, base],
 connectors: [
  injected(),
  walletConnect({ projectId }),
  metaMask(),
  safe(),
 ],
 transports: {
  [mainnet.id]: http(),
  [base.id]: http(),
 },
})
```

### 5. Wire it up! ​
Finally, we can wire up our Wallet Options and Account components to our application's entrypoint.
app.tsxaccount.tsxwallet-options.tsxconfig.ts
tsx```
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { Account } from './account'
import { WalletOptions } from './wallet-options'
const queryClient = new QueryClient()
function ConnectWallet() {
 const { isConnected } = useAccount()
 if (isConnected) return <Account />
 return <WalletOptions />
}
function App() {
 return (
  <WagmiProvider config={config}>
   <QueryClientProvider client={queryClient}>
    <ConnectWallet />
   </QueryClientProvider>
  </WagmiProvider>
 )
}
```

tsx```
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
export function Account() {
 const { address } = useAccount()
 const { disconnect } = useDisconnect()
 const { data: ensName } = useEnsName({ address })
 const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
 return (
  <div>
   {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
   {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
   <button onClick={() => disconnect()}>Disconnect</button>
  </div>
 )
}
```

tsx```
import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
export function WalletOptions() {
 const { connectors, connect } = useConnect()
 return connectors.map((connector) => (
  <WalletOption
   key={connector.uid}
   connector={connector}
   onClick={() => connect({ connector })}
  />
 ))
}
function WalletOption({
 connector,
 onClick,
}: {
 connector: Connector
 onClick: () => void
}) {
 const [ready, setReady] = React.useState(false)
 React.useEffect(() => {
  ;(async () => {
   const provider = await connector.getProvider()
   setReady(!!provider)
  })()
 }, [connector])
 return (
  <button disabled={!ready} onClick={onClick}>
   {connector.name}
  </button>
 )
}
```

tsx```
import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
const projectId = '<WALLETCONNECT_PROJECT_ID>'
export const config = createConfig({
 chains: [mainnet, base],
 connectors: [
  injected(),
  walletConnect({ projectId }),
  metaMask(),
  safe(),
 ],
 transports: {
  [mainnet.id]: http(),
  [base.id]: http(),
 },
})
```

### Playground ​
Want to see the above steps all wired up together in an end-to-end example? Check out the below StackBlitz playground.
