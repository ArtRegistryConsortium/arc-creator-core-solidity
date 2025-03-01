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
# hardhat ​
Plugin for resolving ABIs from Hardhat projects. Supports `watch` mode.
ts```
import { hardhat } from '@wagmi/cli/plugins'
```

## Usage ​
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   project: '../hello_hardhat',
  }),
 ],
})
```

## Configuration ​
ts```
import { type HardhatConfig } from '@wagmi/cli/plugins'
```

### artifacts ​
`string | undefined`
  * Project's artifacts directory. Same as your project's `artifacts` path configuration option.
  * Defaults to `'artifacts/'`.


ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   artifacts: 'out/', 
   project: '../hello_hardhat',
  }),
 ],
})
```

### deployments ​
`{ [key: string]: address?: Address | Record<chainId, Address> | undefined } | undefined`
Mapping of addresses to attach to artifacts.
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   project: '../hello_hardhat',
   deployments: { 
    Counter: { 
     1: '0x314159265dd8dbb310642f98f50c066173c1259b', 
     5: '0x112234455c3a32fd11230c42e7bccd4a84e02010', 
    }, 
   }, 
  }),
 ],
})
```

### exclude ​
`string[] | undefined`
Artifact files to exclude relative to `artifacts`. Supports glob patterns.
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   exclude: [ 
    // the following patterns are excluded by default
    'build-info/**', 
    '*.dbg.json', 
   ], 
   project: '../hello_hardhat',
  }),
 ],
})
```

### commands ​
`{ clean?: string | boolean | undefined; build?: string | boolean | undefined; rebuild?: string | boolean | undefined } | undefined`
Hardhat command options.
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   commands: { 
    clean: 'pnpm hardhat clean', 
    build: 'pnpm hardhat compile', 
    rebuild: 'pnpm hardhat compile', 
   }, 
   project: '../hello_hardhat',
  }),
 ],
})
```

#### clean ​
  * Remove build artifacts and cache directories on start up.
  * Defaults to `'${packageManger} hardhat clean'`.


#### build ​
  * Build Foundry project before fetching artifacts.
  * Defaults to `'${packageManger} hardhat compile'`.


#### rebuild ​
  * Command to run when watched file or directory is changed. Used for setting up `watch` mode.
  * Defaults to `'${packageManger} hardhat compile'`.


### include ​
`string[] | undefined`
Artifact files to include relative to `artifacts`. Supports glob patterns.
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   include: [ 
    // the following patterns are included by default
    '*.json', 
   ], 
   project: '../hello_hardhat',
  }),
 ],
})
```

### namePrefix ​
`string | undefined`
Prefix to prepend to artifact names. Useful for preventing name collisions between contracts from other sources.
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   namePrefix: 'HelloHardhat', 
   project: '../hello_hardhat',
  }),
 ],
})
```

### project ​
`string`
Path to Hardhat project.
ts```
import { defineConfig } from '@wagmi/cli'
import { hardhat } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  hardhat({
   project: '../hello_hardhat', 
  }),
 ],
})
```

