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
Install Wagmi Core via your package manager, a `<script>` tag, or build from source.
## Package Manager ​
Install the required packages.
pnpmnpmyarnbun
bash```
pnpm add @wagmi/core viem@2.x
```

bash```
npm install @wagmi/core viem@2.x
```

bash```
yarn add @wagmi/core viem@2.x
```

bash```
bun add @wagmi/core viem@2.x
```

  * Viem is a TypeScript interface for Ethereum that performs blockchain operations.
  * TypeScript is optional, but highly recommended. Learn more about TypeScript support.


## CDN ​
If you're not using a package manager, you can also use Wagmi Core via an ESM-compatible CDN such as esm.sh. Simply add a `<script type="module">` tag to the bottom of your HTML file with the following content.
html```
<script type="module">
 import { createClient } from 'https://esm.sh/viem'
 import { createConfig } from 'https://esm.sh/@wagmi/core@2.x'
 import { injected } from 'https://esm.sh/@wagmi/connectors'
</script>
```

## Requirements ​
Wagmi is optimized for modern browsers. It is compatible with the latest versions of the following browsers.
![chrome](https://wagmi.sh/browsers/chrome.png)![edge](https://wagmi.sh/browsers/edge.png)![firefox](https://wagmi.sh/browsers/firefox.png)![opera](https://wagmi.sh/browsers/opera.png)![safari](https://wagmi.sh/browsers/safari.png)
TIP
Depending on your environment, you might need to add polyfills. See Viem Platform Compatibility for more info.
## Using Unreleased Commits ​
If you can't wait for a new release to test the latest features, you can either install from the `canary` tag (tracks the `main` branch).
pnpmnpmyarnbun
bash```
pnpm add @wagmi/core@canary
```

bash```
npm install @wagmi/core@canary
```

bash```
yarn add @wagmi/core@canary
```

bash```
bun add @wagmi/core@canary
```

Or clone the Wagmi repo to your local machine, build, and link it yourself.
bash```
gh repo clone wevm/wagmi
cd wagmi
pnpm install
pnpm build
cd packages/core
pnpm link --global
```

Then go to the project where you are using Wagmi and run `pnpm link --global @wagmi/core` (or the package manager that you used to link Wagmi globally). Make sure you installed any required peer dependencies and their versions are correct.
## Security ​
Ethereum-related projects are often targeted in attacks to steal users' assets. Make sure you follow security best-practices for your project. Some quick things to get started.
  * Pin package versions, upgrade mindfully, and inspect lockfile changes to minimize the risk of supply-chain attacks.
  * Install the Socket Security GitHub App to help detect and block supply-chain attacks.
  * Add a Content Security Policy to defend against external scripts running in your app.


