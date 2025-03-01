Skip to main content
If an adapter for your preferred environment doesn’t yet exist, you can build your own. We recommend looking at the source for an adapter to a platform similar to yours and copying it as a starting point.
Adapter packages implement the following API, which creates an `Adapter`:
```
/** @param {AdapterSpecificOptions} options */
export default function (options: any
@paramoptions 
options) {
	/** @type {import('@sveltejs/kit').Adapter} */
	const const adapter: Adapter
@type{import('@sveltejs/kit').Adapter}
adapter = {
		Adapter.name: string
The name of the adapter, using for logging. Will typically correspond to the package name.


name: 'adapter-package-name',
		async Adapter.adapt(builder: Builder): MaybePromise<void>
This function is called after SvelteKit has built your app.


@parambuilder An object provided by SvelteKit that contains methods for adapting the app
adapt(builder: Builderbuilder) {
			// adapter implementation
		},
		async Adapter.emulate?(): MaybePromise<Emulator>
Creates an Emulator, which allows the adapter to influence the environment
during dev, build and prerendering


emulate() {
			return {
				async ```
Emulator.platform?(details: {
  config: any;
  prerender: PrerenderOption;
}): MaybePromise<App.Platform>
```
`
A function that is called with the current route `config` and `prerender` option and returns an `App.Platform` object
platform({ `config: any`config, `prerender: PrerenderOption`prerender }) { // the returned object becomes `event.platform` during dev, build and // preview. Its shape is that of `App.Platform` } } }, ````
Adapter.supports?: {
  read?: (details: {
    config: any;
    route: {
      id: string;
    };
  }) => boolean;
} | undefined
```
`
Checks called during dev and build to determine whether specific features will work in production with this adapter
supports: { read: ({ `config: any`config, ````
route: {
  id: string;
}
```
`route }) => { // Return `true` if the route with the given `config` can use `read` // from `$app/server` in production, return `false` if it can't. // Or throw a descriptive error describing how to configure the deployment } } }; return `const adapter: Adapter`
@type{import('@sveltejs/kit').Adapter}
adapter; }`
```

Of these, `name` and `adapt` are required. `emulate` and `supports` are optional.
Within the `adapt` method, there are a number of things that an adapter should do:
  * Clear out the build directory
  * Write SvelteKit output with `builder.writeClient`, `builder.writeServer`, and `builder.writePrerendered`
  * Output code that:
    * Imports `Server` from `${builder.getServerDirectory()}/index.js`
    * Instantiates the app with a manifest generated with `builder.generateManifest({ relativePath })`
    * Listens for requests from the platform, converts them to a standard Request if necessary, calls the `server.respond(request, { getClientAddress })` function to generate a Response and responds with it
    * expose any platform-specific information to SvelteKit via the `platform` option passed to `server.respond`
    * Globally shims `fetch` to work on the target platform, if necessary. SvelteKit provides a `@sveltejs/kit/node/polyfills` helper for platforms that can use `undici`
  * Bundle the output to avoid needing to install dependencies on the target platform, if necessary
  * Put the user’s static files and the generated JS/CSS in the correct location for the target platform


Where possible, we recommend putting the adapter output under the `build/` directory with any intermediate output placed under `.svelte-kit/[adapter-name]`.
Edit this page on GitHub
previous next
Vercel Advanced routing
