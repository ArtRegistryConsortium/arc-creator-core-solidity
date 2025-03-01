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
# create-wagmi ​
## Overview ​
create-wagmi is a command line interface (CLI) for scaffolding new Wagmi projects.
## Usage ​
pnpmnpmyarnbun
bash```
pnpm create wagmi
```

bash```
npm create wagmi@latest
```

bash```
yarn create wagmi
```

bash```
bun create wagmi
```

## Options ​
### `-t`, `--template` ​
You can specify a custom template by passing the `--template`/`-t` flag:
pnpmnpmyarnbun
bash```
pnpm create wagmi --template next
```

bash```
npm create wagmi@latest --template next
```

bash```
yarn create wagmi --template next
```

bash```
bun create wagmi --template next
```

### `--bun`/`--npm`/`--pnpm`/`--yarn` ​
Use a specific package manager to install dependencies. By default, `create-wagmi` will use the package manager you used to run the command.
### `-h`, `--help` ​
Prints the help message.
### `-v`, `--version` ​
Prints the CLI version.
## Templates ​
`create-wagmi` currently comes with the following templates:
  * `next`: A Next.js Wagmi project.
  * `nuxt`: A Nuxt Wagmi project.
  * `vite-react`: A Vite (React) Wagmi project.
  * `vite-vanilla`: A Vite Wagmi Core project.
  * `vite-vue`: A Vite (Vue) Wagmi project.


If you do not specify the template on the command line, you will be prompted to select a framework and variant.
  * **React** : A React project. 
    * **Vite** : A React + Vite Wagmi project (`vite-react`).
    * **Next** : A React + Next Wagmi project (`next`).
  * **Vue** : A Vue project. 
    * **Vite** : A Vue + Vite Wagmi project (`vite-vue`).
    * **Nuxt** : A Vue + Nuxt Wagmi project (`nuxt`).
  * **Vanilla** : A Vite Wagmi project without React (`vite-vanilla`).


