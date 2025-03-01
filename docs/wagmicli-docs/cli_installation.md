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
# Installation ​
Install Wagmi CLI via your package manager.
## Package Manager ​
Install the required package.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/cli
```

bash```
npm install @wagmi/cli
```

bash```
yarn add @wagmi/cli
```

bash```
bun add @wagmi/cli
```

## Using Unreleased Commits ​
If you can't wait for a new release to test the latest features, you can either install from the `canary` tag (tracks the `main` branch).
pnpmnpmyarnbun
bash```
pnpm add @wagmi/cli@canary
```

bash```
npm install @wagmi/cli@canary
```

bash```
yarn add @wagmi/cli@canary
```

bash```
bun add @wagmi/cli@canary
```

Or clone the Wagmi repo to your local machine, build, and link it yourself.
bash```
git clone https://github.com/wevm/wagmi.git
cd wagmi
pnpm install
pnpm build
cd packages/cli
pnpm link --global
```

Then go to the project where you are using the Wagmi CLI and run `pnpm link --global @wagmi/cli` (or the package manager that you used to link Wagmi CLI globally).
