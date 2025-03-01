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
# Chain Properties ​
Some chains support additional properties related to blocks and transactions. This is powered by Viem's formatters and serializers. For example, Celo, ZkSync, OP Stack chains all support additional properties. In order to use these properties in a type-safe way, there are a few things you should be aware of.
TIP
Make sure you follow the TypeScript guide's Config Types section before moving on. The easiest way to do this is to use Declaration Merging to "register" your `config` globally with TypeScript.
ts```
import { http, createConfig } from 'wagmi'
import { base, celo, mainnet } from 'wagmi/chains'
export const config = createConfig({
 chains: [base, celo, mainnet],
 transports: {
  [base.id]: http(),
  [celo.id]: http(),
  [mainnet.id]: http(),
 },
})
declare module 'wagmi' {
 interface Register {
  config: typeof config
 }
}
```

## Narrowing Parameters ​
Once your Config is registered with TypeScript, you are ready to access chain-specific properties! For example, Celo's `feeCurrency` is available.
index.tsxconfig.ts
ts```
import { parseEther } from 'viem'
import { useSimulateContract } from 'wagmi'
const result = useSimulateContract({
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
 feeCurrency: '0x…', 
})
```

ts```
import { http, createConfig } from 'wagmi'
import { base, celo, mainnet } from 'wagmi/chains'
export const config = createConfig({
 chains: [base, celo, mainnet],
 transports: {
  [base.id]: http(),
  [celo.id]: http(),
  [mainnet.id]: http(),
 },
})
declare module 'wagmi' {
 interface Register {
  config: typeof config
 }
}
```

This is great, but if you have multiple chains that support additional properties, your autocomplete could be overwhelmed with all of them. By setting the `chainId` property to a specific value (e.g. `celo.id`), you can narrow parameters to a single chain.
index.tsxconfig.ts
ts```
import { parseEther } from 'viem'
import { useSimulateContract } from 'wagmi'
import { celo } from 'wagmi/chains'
const result = useSimulateContract({
 to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
 value: parseEther('0.01'),
 chainId: celo.id, 
 feeCurrency: '0x…', 
 // ^? (property) feeCurrency?: `0x${string}` | undefined
})
```

ts```
import { http, createConfig } from 'wagmi'
import { base, celo, mainnet } from 'wagmi/chains'
export const config = createConfig({
 chains: [base, celo, mainnet],
 transports: {
  [base.id]: http(),
  [celo.id]: http(),
  [mainnet.id]: http(),
 },
})
declare module 'wagmi' {
 interface Register {
  config: typeof config
 }
}
```

## Narrowing Return Types ​
Return types can also have chain-specific properties attached to them. There are a couple approaches for extracting these properties.
### `chainId` Parameter ​
Not only can you use the `chainId` parameter to narrow parameters, you can also use it to narrow the return type.
index.tsxconfig.ts
ts```
import { useWaitForTransactionReceipt } from 'wagmi'
import { zkSync } from 'wagmi/chains'
const { data } = useWaitForTransactionReceipt({
 chainId: zkSync.id,
 hash: '0x16854fcdd0219cacf5aec5e4eb2154dac9e406578a1510a6fc48bd0b67e69ea9',
})
data?.logs
//  ^? (property) logs: ZkSyncLog[] | undefined
```

ts```
import { http, createConfig } from 'wagmi'
import { base, celo, mainnet } from 'wagmi/chains'
export const config = createConfig({
 chains: [base, celo, mainnet],
 transports: {
  [base.id]: http(),
  [celo.id]: http(),
  [mainnet.id]: http(),
 },
})
declare module 'wagmi' {
 interface Register {
  config: typeof config
 }
}
```

### `chainId` Data Property ​
Wagmi internally will set a `chainId` property on return types that you can use to narrow results. The `chainId` is determined from the `chainId` parameter or global state (e.g. connector). You can use this property to help TypeScript narrow the type.
index.tsxconfig.ts
ts```
import { useWaitForTransactionReceipt } from 'wagmi'
import { zkSync } from 'wagmi/chains'
const { data } = useWaitForTransactionReceipt({
 hash: '0x16854fcdd0219cacf5aec5e4eb2154dac9e406578a1510a6fc48bd0b67e69ea9',
})
if (data?.chainId === zkSync.id) {
 data?.logs
 //  ^? (property) logs: ZkSyncLog[] | undefined
}
```

ts```
import { http, createConfig } from 'wagmi'
import { base, celo, mainnet } from 'wagmi/chains'
export const config = createConfig({
 chains: [base, celo, mainnet],
 transports: {
  [base.id]: http(),
  [celo.id]: http(),
  [mainnet.id]: http(),
 },
})
declare module 'wagmi' {
 interface Register {
  config: typeof config
 }
}
```

## Troubleshooting ​
If chain properties aren't working, make sure TypeScript is configured correctly. Not all chains have additional properties, to check which ones do, see the Viem repo (chains that have a top-level directory under `src/chains` support additional properties).
