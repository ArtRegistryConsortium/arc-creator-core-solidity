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
# useConfig ​
Hook for getting `Config` from nearest `WagmiProvider`.
## Import ​
ts```
import { useConfig } from 'wagmi'
```

## Usage ​
index.tsx
tsx```
import { useConfig } from 'wagmi'
function App() {
 const config = useConfig()
}
```

## Return Type ​
ts```
import { type UseConfigReturnType } from 'wagmi'
```

If you use TypeScript and register your `Config`, the return type will be inferred.
index.tsxconfig.ts
ts```
import {
useConfig
 } from 'wagmi'
function
App
() {
 const 
config
 =
useConfig
()
}
```

ts```
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
declare module 'wagmi' {
 interface Register {
  config: typeof config
 }
}
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

