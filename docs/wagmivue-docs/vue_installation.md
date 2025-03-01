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
Install Wagmi via your package manager, a `<script>` tag, or build from source.
## Package Manager ​
Install the required packages.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/vue viem@2.x @tanstack/vue-query
```

bash```
npm install @wagmi/vue viem@2.x @tanstack/vue-query
```

bash```
yarn add @wagmi/vue viem@2.x @tanstack/vue-query
```

bash```
bun add @wagmi/vue viem@2.x @tanstack/vue-query
```

  * Viem is a TypeScript interface for Ethereum that performs blockchain operations.
  * TanStack Query is an async state manager that handles requests, caching, and more.
  * TypeScript is optional, but highly recommended. Learn more about TypeScript support.


## Requirements ​
Wagmi is optimized for modern browsers. It is compatible with the latest versions of the following browsers.
![chrome](https://wagmi.sh/browsers/chrome.png)![edge](https://wagmi.sh/browsers/edge.png)![firefox](https://wagmi.sh/browsers/firefox.png)![opera](https://wagmi.sh/browsers/opera.png)![safari](https://wagmi.sh/browsers/safari.png)
TIP
Depending on your environment, you might need to add polyfills. See Viem Platform Compatibility for more info.
## Using Unreleased Commits ​
If you can't wait for a new release to test the latest features, you can either install from the `canary` tag (tracks the `main` branch).
pnpmnpmyarnbun
bash```
pnpm add @wagmi/vue@canary
```

bash```
npm install @wagmi/vue@canary
```

bash```
yarn add @wagmi/vue@canary
```

bash```
bun add @wagmi/vue@canary
```

Or clone the Wagmi repo to your local machine, build, and link it yourself.
bash```
gh repo clone wevm/wagmi
cd wagmi
pnpm install
pnpm build
cd packages/vue
pnpm link --global
```

Then go to the project where you are using Wagmi and run `pnpm link --global @wagmi/vue` (or the package manager that you used to link Wagmi globally). Make sure you installed any required peer dependencies and their versions are correct.
## Security ​
Ethereum-related projects are often targeted in attacks to steal users' assets. Make sure you follow security best-practices for your project. Some quick things to get started.
  * Pin package versions, upgrade mindfully, and inspect lockfile changes to minimize the risk of supply-chain attacks.
  * Install the Socket Security GitHub App to help detect and block supply-chain attacks.
  * Add a Content Security Policy to defend against external scripts running in your app.


