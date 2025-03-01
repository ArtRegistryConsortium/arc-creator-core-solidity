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
# Config Options ​
Configuration options for Wagmi CLI.
## contracts ​
`ContractConfig[] | undefined`
Array of contracts to use when running commands. `abi` and `name` are required, all other properties are optional.
### address ​
`Address | Record<chainId, Address> | undefined`
Contract address or addresses. Accepts an object `{ [chainId]: address }` for targeting specific chains.
wagmi.config.ts
ts```
export default {
 out: 'src/generated.ts',
 contracts: [
  {
   abi: […],
   address: '0x…',
   name: 'MyCoolContract',
  },
  {
   abi: […],
   address: {
    1: '0xfoo…',
    5: '0xbar…',
   },
   name: 'MyCoolMultichainContract'
  }
 ],
}
```

### abi ​
`Abi`
ABI for contract. Used by plugins to generate code base on properties.
wagmi.config.ts
ts```
export default {
 out: 'src/generated.ts',
 contracts: [
  {
   abi: […],
   name: 'MyCoolContract'
  },
 ],
}
```

### name ​
`string`
Name of contract. Must be unique. Used by plugins to name generated code.
wagmi.config.ts
ts```
export default {
 out: 'src/generated.ts',
 contracts: [
  {
   abi: […],
   name: 'MyCoolContract'
  },
 ],
}
```

## out ​
`string`
Path to output generated code. Must be unique per config. Use an Array Config for multiple outputs.
wagmi.config.ts
ts```
export default {
 out: 'src/generated.ts',
 contracts: [
  {
   abi: […],
   name: 'MyCoolContract'
  },
 ],
}
```

## plugins ​
`Plugin[] | undefined`
Plugins to use and their configuration.
Wagmi CLI has multiple built-in plugins that are used to manage ABIs, generate code, etc.
wagmi.config.ts
ts```
import { etherscan, react } from '@wagmi/cli/plugins'
export default {
 out: 'src/generated.js',
 plugins: [
  etherscan({
   apiKey: process.env.ETHERSCAN_API_KEY,
   chainId: 5,
   contracts: [
    {
     name: 'EnsRegistry',
     address: {
      1: '0x314159265dd8dbb310642f98f50c066173c1259b',
      5: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
     },
    },
   ],
  }),
  react(),
 ],
}
```

