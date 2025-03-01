Skip to main content
Before you can deploy your SvelteKit app, you need to _adapt_ it for your deployment target. Adapters are small plugins that take the built app as input and generate output for deployment.
Official adapters exist for a variety of platforms — these are documented on the following pages:
  * `@sveltejs/adapter-cloudflare` for Cloudflare Pages
  * `@sveltejs/adapter-cloudflare-workers` for Cloudflare Workers
  * `@sveltejs/adapter-netlify` for Netlify
  * `@sveltejs/adapter-node` for Node servers
  * `@sveltejs/adapter-static` for static site generation (SSG)
  * `@sveltejs/adapter-vercel` for Vercel


Additional community-provided adapters exist for other platforms.
## Using adapters
Your adapter is specified in `svelte.config.js`:
svelte.config
```
import const adapter: (opts: any) => import("@sveltejs/kit").Adapteradapter from 'svelte-adapter-foo';
/** @type {import('@sveltejs/kit').Config} */
const const config: Config
@type{import('@sveltejs/kit').Config}
config = {
	Config.kit?: KitConfig | undefined
SvelteKit options


kit: {
		KitConfig.adapter?: Adapter | undefined
Your adapter is run when executing vite build. It determines how the output is converted for different platforms.


@defaultundefined
adapter: function adapter(opts: any): import("@sveltejs/kit").Adapteradapter({
			// adapter options go here
		})
	}
};
export default const config: Config
@type{import('@sveltejs/kit').Config}
config;
```

## Platform-specific context
Some adapters may have access to additional information about the request. For example, Cloudflare Workers can access an `env` object containing KV namespaces etc. This can be passed to the `RequestEvent` used in hooks and server routes as the `platform` property — consult each adapter’s documentation to learn more.
Edit this page on GitHub
previous next
Building your app Zero-config deployments
