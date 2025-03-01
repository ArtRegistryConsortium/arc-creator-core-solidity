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
# deserialize ​
Deserialize function that supports `bigint` and `Map`.
## Import ​
ts```
import { deserialize } from '@wagmi/vue'
```

## Usage ​
ts```
import { deserialize } from '@wagmi/vue'
const result = deserialize('{"foo":"wagmi","bar":{"__type":"bigint","value":"123"}}')
```

## Parameters ​
### value ​
`string`
The string to deserialize.
### reviver ​
`(key: string, value: any) => any`
A custom reviver function for handling standard values.
## Return Type ​
`unknown`
Parsed value.
