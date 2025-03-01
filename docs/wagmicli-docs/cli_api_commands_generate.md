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
# generate ​
Generates code based on configuration, using `contracts` and `plugins`.
## Usage ​
bash```
wagmi generate
```

## Options ​
### -c, --config <path> ​
`string`
Path to config file.
bash```
wagmi generate --config wagmi.config.ts
```

### -r, --root <path> ​
`string`
Root path to resolve config from.
bash```
wagmi generate --root path/to/root
```

### -w, --watch ​
`boolean`
Watch for changes (for plugins that support watch mode).
bash```
wagmi generate --watch
```

### -h, --help ​
Displays help message.
bash```
wagmi generate --help
```

