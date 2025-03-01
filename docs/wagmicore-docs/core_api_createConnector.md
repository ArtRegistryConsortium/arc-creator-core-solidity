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
# createConnector ​
Creates new `CreateConnectorFn`.
## Import ​
ts```
import { createConnector } from '@wagmi/core'
```

## Usage ​
ts```
import { createConnector } from '@wagmi/core'
export type InjectedParameters = {}
export function injected(parameters: InjectedParameters = {}) {
 return createConnector((config) => ({
  // ...
 }))
}
```

## Parameters ​
ts```
import { type CreateConnectorFn } from '@wagmi/core'
```

Read Creating Connectors for more info on the `CreateConnectorFn` type.
