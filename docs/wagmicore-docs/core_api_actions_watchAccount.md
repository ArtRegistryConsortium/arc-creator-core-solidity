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
# watchAccount ​
Subscribe to account changes.
## Import ​
ts```
import { watchAccount } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { watchAccount } from '@wagmi/core'
import { config } from './config'
const unwatch = watchAccount(config, {
 onChange(data) {
  console.log('Account changed!', data)
 },
})
unwatch()
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
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
import { type WatchAccountParameters } from '@wagmi/core'
```

### onChange ​
`onChange(account: GetAccountReturnType, prevAccount: GetAccountReturnType): void`
Callback function called when account changes.
index.tsconfig.ts
ts```
import { watchAccount } from '@wagmi/core'
import { config } from './config'
const unwatch = watchAccount(config, {
 onChange(account) { 
  console.log('Account changed!', account)
 },
})
unwatch()
```

ts```
import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
export const config = createConfig({
 chains: [mainnet, sepolia],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Return Type ​
ts```
import { type WatchAccountReturnType } from '@wagmi/core'
```

Function for cleaning up watcher.
