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
# signMessage ​
Action for signing messages.
## Import ​
ts```
import { signMessage } from '@wagmi/core'
```

## Usage ​
index.tsconfig.ts
ts```
import { signMessage } from '@wagmi/core'
import { config } from './config'
await signMessage(config, { message: 'hello world' })
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
import { type SignMessageParameters } from '@wagmi/core'
```

### account ​
`Address | Account | undefined`
Account to use when signing message. Throws if account is not found on `connector`.
index.tsconfig.ts
ts```
import { signMessage } from '@wagmi/core'
import { config } from './config'
const result = await signMessage(config, {
 account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', 
 message: 'hello world',
})
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

### connector ​
`Connector | undefined`
Connector to sign message with.
index.tsconfig.ts
ts```
import { getAccount, signMessage } from '@wagmi/core'
import { config } from './config'
const { connector } = getAccount(config)
const result = await signMessage(config, {
 connector, 
 message: 'hello world',
})
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

### message ​
`string | { raw: Hex | ByteArray }`
Message to sign.
index.tsconfig.ts
ts```
import { signMessage } from '@wagmi/core'
import { config } from './config'
const result = await signMessage(config, {
 message: 'hello world', 
})
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

TIP
By default, viem signs the UTF-8 representation of the message. To sign the data representation of the message, you can use the `raw` attribute.
ts```
import { signMessage } from '@wagmi/core'
import { config } from './config'
const result = await signMessage(config, {
 message: { raw: '0x68656c6c6f20776f726c64' }, 
})
```

## Return Type ​
ts```
import { type SignMessageReturnType } from '@wagmi/core'
```

`Hex`
The signed message.
## Error ​
ts```
import { type SignMessageErrorType } from '@wagmi/core'
```

## TanStack Query ​
ts```
import {
 type SignMessageData,
 type SignMessageVariables,
 type SignMessageMutate,
 type SignMessageMutateAsync,
 signMessageMutationOptions,
} from '@wagmi/core/query'
```

## Viem ​
  * `signMessage`


