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
# cookieToInitialState ​
Helper to convert a cookie string into initial state.
## Import ​
ts```
import { cookieToInitialState } from 'wagmi'
```

## Usage ​
server.tsconfig.ts
ts```
import { cookieToInitialState } from 'wagmi'
import config from './config'
function handler(req: Request) {
 const initialState = cookieToInitialState(config, req.headers.cookie)
 // ...
}
```

ts```
import {
 createConfig,
 http,
 cookieStorage,
 createStorage
} from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 ssr: true,
 storage: createStorage({ 
  storage: cookieStorage,
 }), 
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
### config ​
`Config`
Wagmi Config
### cookie ​
`string | null | undefined`
The cookie string.
## Return Type ​
`State`
Initial state.
