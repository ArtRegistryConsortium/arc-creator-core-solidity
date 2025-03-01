Skip to main content
When you create a new SvelteKit project with `npx sv create`, it installs `adapter-auto` by default. This adapter automatically installs and uses the correct adapter for supported environments when you deploy:
  * `@sveltejs/adapter-cloudflare` for Cloudflare Pages
  * `@sveltejs/adapter-netlify` for Netlify
  * `@sveltejs/adapter-vercel` for Vercel
  * `svelte-adapter-azure-swa` for Azure Static Web Apps
  * `svelte-kit-sst` for AWS via SST
  * `@sveltejs/adapter-node` for Google Cloud Run


It’s recommended to install the appropriate adapter to your `devDependencies` once you’ve settled on a target environment, since this will add the adapter to your lockfile and slightly improve install times on CI.
## Environment-specific configuration
To add configuration options, such as `{ edge: true }` in `adapter-vercel` and `adapter-netlify`, you must install the underlying adapter — `adapter-auto` does not take any options.
## Adding community adapters
You can add zero-config support for additional adapters by editing adapters.js and opening a pull request.
Edit this page on GitHub
previous next
Adapters Node servers
