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
# useConnectors ​
Hook for getting configured connectors.
## Import ​
ts```
import { useConnectors } from 'wagmi'
```

## Usage ​
index.tsxconfig.ts
tsx```
import { useConnectors } from 'wagmi'
function App() {
 const connectors = useConnectors()
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

## Return Type ​
ts```
import { type UseConnectorsReturnType } from 'wagmi'
```

`readonly Connector[]`
Connectors from `config.connectors`.
## Action ​
  * `getConnectors`


![](https://cdn.usefathom.com/?h=https%3A%2F%2Fwagmi.sh&p=%2Freact%2Fapi%2Fhooks%2FuseConnectors&r=&sid=QWAXSUPT&qs=%7B%7D&cid=84414212)
