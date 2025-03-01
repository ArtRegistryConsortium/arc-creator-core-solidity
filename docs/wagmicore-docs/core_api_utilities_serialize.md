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
# serialize ​
Serialize function that supports `bigint` and `Map`.
## Import ​
ts```
import { serialize } from '@wagmi/core'
```

## Usage ​
ts```
import { serialize } from '@wagmi/core'
const result = serialize({ foo: 'wagmi', bar: 123n })
```

## Parameters ​
### value ​
`any`
The value to stringify.
### replacer ​
`(key: string, value: any) => any`
A custom replacer function for handling standard values.
### indent ​
`number | null | undefined`
The number of spaces to indent the output by.
### circularReplacer ​
A custom replacer function for handling circular values.
## Return Type ​
`string`
Stringified value.
