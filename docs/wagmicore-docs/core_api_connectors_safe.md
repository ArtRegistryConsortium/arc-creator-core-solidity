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
# safe ​
Connector for Safe Apps SDK.
## Import ​
ts```
import { safe } from '@wagmi/connectors'
```

## Usage ​
ts```
import { createConfig, http } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { safe } from '@wagmi/connectors'
export const config = createConfig({
 chains: [mainnet, sepolia],
 connectors: [safe()],
 transports: {
  [mainnet.id]: http(),
  [sepolia.id]: http(),
 },
})
```

## Parameters ​
ts```
import { type SafeParameters } from '@wagmi/connectors'
```

Check out the Safe docs for more info.
### allowedDomains ​
`RegExp[] | undefined`
ts```
import { safe } from '@wagmi/connectors'
const connector = safe({
 allowedDomains: [/app.safe.global$/], 
})
```

### debug ​
`boolean | undefined`
ts```
import { safe } from '@wagmi/connectors'
const connector = safe({
 debug: true, 
})
```

### shimDisconnect ​
`boolean | undefined`
  * This flag simulates disconnect behavior by keeping track of connection status in storage.
  * Defaults to `false`.


ts```
import { safe } from '@wagmi/connectors'
const connector = safe({
 shimDisconnect: true, 
})
```

