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
# foundry ​
Plugin for resolving ABIs from Foundry projects. Supports `watch` mode.
## Import ​
ts```
import { foundry } from '@wagmi/cli/plugins'
```

## Usage ​
ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({
   project: '../hello_foundry',
  }),
 ],
})
```

## Configuration ​
ts```
import { type FoundryConfig } from '@wagmi/cli/plugins'
```

### artifacts ​
`string | undefined`
  * Project's artifacts directory. Same as your `foundry.toml`/`forge`s `--out` (`-o`) option.
  * Defaults to `'out/'`.


ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({
   artifacts: 'out/', 
  }),
 ],
})
```

### deployments ​
`{ [key: string]: address?: Address | Record<chainId, Address> | undefined } | undefined`
Mapping of addresses to attach to artifacts.
ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({
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
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({
   exclude: [ 
    // the following patterns are excluded by default
    'Common.sol/**', 
    'Components.sol/**', 
    'Script.sol/**', 
    'StdAssertions.sol/**', 
    'StdInvariant.sol/**', 
    'StdError.sol/**', 
    'StdCheats.sol/**', 
    'StdMath.sol/**', 
    'StdJson.sol/**', 
    'StdStorage.sol/**', 
    'StdUtils.sol/**', 
    'Vm.sol/**', 
    'console.sol/**', 
    'console2.sol/**', 
    'test.sol/**', 
    '**.s.sol/*.json', 
    '**.t.sol/*.json', 
   ], 
  }),
 ],
})
```

### forge ​
`{ clean?: boolean | undefined; build?: boolean | undefined; path?: string | undefined; rebuild?: boolean | undefined } | undefined`
Options for `forge`.
ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({
   forge: { 
    clean: true, 
    build: true, 
    path: 'path/to/forge', 
    rebuild: true, 
   }, 
  }),
 ],
})
```

#### clean ​
  * Remove build artifacts and cache directories on start up.
  * Defaults to `false`.


#### build ​
  * Build Foundry project before fetching artifacts.
  * Defaults to `true`.


#### path ​
  * Path to `forge` executable command.
  * Defaults to `forge`.


#### rebuild ​
  * Rebuild every time a watched file or directory is changed. Used for setting up `watch` mode.
  * Defaults to `true`.


### include ​
`string[] | undefined`
Artifact files to include relative to `artifacts`. Supports glob patterns.
ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({
   include: [ 
    // the following patterns are included by default
    '*.json', 
   ], 
  }),
 ],
})
```

### namePrefix ​
`string | undefined`
Prefix to prepend to artifact names. Useful for preventing name collisions between contracts from other sources.
ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({ 
   namePrefix: 'HelloFoundry', 
  }), 
 ],
})
```

### project ​
`string | undefined`
  * Path to Foundry project.
  * Defaults to Foundry configuration using `forge config --json` command.


ts```
import { defineConfig } from '@wagmi/cli'
import { foundry } from '@wagmi/cli/plugins'
export default defineConfig({
 plugins: [
  foundry({ 
   project: '../hello_foundry', 
  }), 
 ],
})
```

