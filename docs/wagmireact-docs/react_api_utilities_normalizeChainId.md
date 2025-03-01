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
# normalizeChainId ​
Normalizes a chain ID to a number.
## Import ​
ts```
import { normalizeChainId } from 'wagmi'
```

## Usage ​
Deprecated
Use `Number` instead.
ts```
import { normalizeChainId } from 'wagmi'
const chainId = normalizeChainId(123n)
const chainId = Number(123n)
```

ts```
import { normalizeChainId } from 'wagmi'
const result = normalizeChainId('0x1')
```

## Parameters ​
### chainId ​
`bigint | number | string`
The chain ID to normalize.
ts```
import { normalizeChainId } from 'wagmi'
normalizeChainId(1n)
normalizeChainId(1)
normalizeChainId('0x1')
```

## Return Type ​
`number`
The normalized chain ID.
