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
# WagmiProvider ​
React Context Provider for Wagmi.
## Import ​
ts```
import { WagmiProvider } from 'wagmi'
```

## Usage ​
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

## Parameters ​
ts```
import { type WagmiProviderProps } from 'wagmi'
```

### config ​
`Config` object to inject with context.
app.tsxconfig.ts
tsx```
import { WagmiProvider } from 'wagmi'
import { config } from './config'
function App() {
 return (
  <WagmiProvider
   config={config}
  >
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

### initialState ​
`State | undefined`
  * Initial state to hydrate into the Wagmi Config. Useful for SSR.


app.tsxconfig.ts
tsx```
import { WagmiProvider } from 'wagmi'
import { config } from './config'
function App() {
 return (
  <WagmiProvider
   config={config}
   initialState={/* ... /*}
  >
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

### reconnectOnMount ​
`boolean | undefined`
  * Whether or not to reconnect previously connected connectors on mount.
  * Defaults to `true`.


app.tsxconfig.ts
tsx```
import { WagmiProvider } from 'wagmi'
import { config } from './config'
function App() {
 return (
  <WagmiProvider
   config={config}
   reconnectOnMount={false}
  >
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

## Context ​
ts```
import { type WagmiContext } from 'wagmi'
```

