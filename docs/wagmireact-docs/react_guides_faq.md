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
# FAQ / Troubleshooting ​
Collection of frequently asked questions with ideas on how to troubleshoot and resolve them.
## Type inference doesn't work ​
  * Check that you set up TypeScript correctly with `"strict": true` in your `tsconfig.json` (TypeScript docs)
  * Check that you const-asserted any ABIs or Typed Data you are using.
  * Restart your language server or IDE, and check for type errors in your code.


## My wallet doesn't work ​
If you run into issues with a specific wallet, try another before opening up an issue. There are many different wallets and it's likely that the issue is with the wallet itself, not Wagmi. For example, if you are using Wallet X and sending a transaction doesn't work, try Wallet Y and see if it works.
## `BigInt` Serialization ​
Using native `BigInt` with `JSON.stringify` will raise a `TypeError` as `BigInt` values are not serializable. There are two techniques to mitigate this:
#### Lossless serialization ​
Lossless serialization means that `BigInt` will be converted to a format that can be deserialized later (e.g. `69420n` → `"#bigint.69420"`). The trade-off is that these values are not human-readable and are not intended to be displayed to the user.
Lossless serialization can be achieved with wagmi's `serialize` and `deserialize` utilities.
tsx```
import { serialize, deserialize } from 'wagmi'
const serialized = serialize({ value: 69420n })
// '{"value":"#bigint.69420"}'
const deserialized = deserialize(serialized)
// { value: 69420n }
```

#### Lossy serialization ​
Lossy serialization means that the `BigInt` will be converted to a normal display string (e.g. `69420n` → `'69420'`). The trade-off is that you will not be able to deserialize the `BigInt` with `JSON.parse` as it can not distinguish between a normal string and a `BigInt`.
This method can be achieved by modifying `JSON.stringify` to include a BigInt `replacer`:
tsx```
const replacer = (key, value) =>
 typeof value === 'bigint' ? value.toString() : value
JSON.stringify({ value: 69420n }, replacer)
// '{"value":"69420"}'
```

## How do I support the project? ​
Wagmi is an open source software project and free to use. If you enjoy using Wagmi or would like to support Wagmi development, you can:
  * Become a sponsor on GitHub
  * Send us crypto 
    * Mainnet: 0x4557B18E779944BFE9d78A672452331C186a9f48
    * Multichain: 0xd2135CfB216b74109775236E36d4b433F1DF507B
  * Become a supporter on Drips


If you use Wagmi at work, consider asking your company to sponsor Wagmi. This may not be easy, but **business sponsorships typically make a much larger impact on the sustainability of OSS projects** than individual donations, so you will help us much more if you succeed.
## Is Wagmi production ready? ​
Yes. Wagmi is very stable and is used in production by thousands of organizations, like Stripe, Shopify, Coinbase, Uniswap, ENS, Optimism.
## Is Wagmi strict with semver? ​
Yes, Wagmi is very strict with semantic versioning and we will never introduce breaking changes to the runtime API in a minor version bump.
For exported types, we try our best to not introduce breaking changes in non-major versions, however, TypeScript doesn't follow semver and often introduces breaking changes in minor releases that can cause Wagmi type issues. See the TypeScript docs for more information.
## How can I contribute to Wagmi? ​
The Wagmi team accepts all sorts of contributions. Check out the Contributing guide to get started. If you are interested in adding a new connector to Wagmi, check out the Creating Connectors guide.
## Anything else you want to know? ​
Please create a new GitHub Discussion thread. You're also free to suggest changes to this or any other page on the site using the "Suggest changes to this page" button at the bottom of the page.
## How does Wagmi work? ​
Until there's a more in-depth write-up about Wagmi internals, here is the gist:
  * Wagmi is essentially a wrapper around Viem and TanStack Query that adds connector and multichain support.
  * Connectors allow Wagmi and Ethereum accounts to communicate with each other.
  * The Wagmi `Config` manages connections established between Wagmi and Connectors, as well as some global state. Connections come with one or more addresses and a chain ID. 
    * If there are connections, the Wagmi `Config` listens for connection changes and updates the `chainId` based on the "current" connection. (The Wagmi `Config` can have many connections established at once, but only one connection can be the "current" connection. Usually this is the connection from the last connector that is connected, but can change based on event emitted from other connectors or through the `useSwitchAccount` hook and `switchAccount` action.)
    * If there are no connections, the Wagmi `Config` defaults the global state `chainId` to the first chain it was created with or last established connection.
    * The global `chainId` can be changed directly using the `useSwitchChain` hook and `switchChain` action. This works when there are no connections as well as for most connectors (not all connectors support chain switching).
  * Wagmi uses the global `chainId` (from the "current" connection or global state) to internally create Viem Client's, which are used by hooks and actions.
  * Hooks are constructed by TanStack Query options helpers, exported by the `'@wagmi/core/query'` entrypoint, and some additional code to wire up type parameters, hook into React Context, etc.
  * There are three types of hooks: query hooks, mutation hooks, and config hooks. Query hooks, like `useCall`, generally read blockchain state and mutation hooks, like `useSendTransaction`, usually change state through sending transactions via the "current" connection. Config hooks are for getting data from and managing the Wagmi `Config` instance, e.g. `useChainId` and `useSwitchAccount`. Query and mutation hooks usually have corresponding Viem actions.


