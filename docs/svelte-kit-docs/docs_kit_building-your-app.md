Skip to main content
Building a SvelteKit app happens in two stages, which both happen when you run `vite build` (usually via `npm run build`).
Firstly, Vite creates an optimized production build of your server code, your browser code, and your service worker (if you have one). Prerendering is executed at this stage, if appropriate.
Secondly, an _adapter_ takes this production build and tunes it for your target environment — more on this on the following pages.
## During the build
SvelteKit will load your `+page/layout(.server).js` files (and all files they import) for analysis during the build. Any code that should _not_ be executed at this stage must check that `building` from `$app/environment` is `false`:
```
import { const building: boolean
SvelteKit analyses your app during the build step by running it. During this process, building is true. This also applies during prerendering.


building } from '$app/environment';
import { import setupMyDatabasesetupMyDatabase } from '$lib/server/database';
if (!const building: boolean
SvelteKit analyses your app during the build step by running it. During this process, building is true. This also applies during prerendering.


building) {
	import setupMyDatabasesetupMyDatabase();
}
export function function load(): voidload() {
	// ...
}
```

## Preview your app
After building, you can view your production build locally with `vite preview` (via `npm run preview`). Note that this will run the app in Node, and so is not a perfect reproduction of your deployed app — adapter-specific adjustments like the `platform` object do not apply to previews.
Edit this page on GitHub
previous next
State management Adapters
