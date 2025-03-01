Skip to main content
## Other resources
Please see the Svelte FAQ and `vite-plugin-svelte` FAQ as well for the answers to questions deriving from those libraries.
## What can I make with SvelteKit?
SvelteKit can be used to create most kinds of applications. Out of the box, SvelteKit supports many features including:
  * Dynamic page content with load functions and API routes.
  * SEO-friendly dynamic content with server-side rendering (SSR).
  * User-friendly progressively-enhanced interactive pages with SSR and Form Actions.
  * Static pages with prerendering.


SvelteKit can also be deployed to a wide spectrum of hosted architectures via adapters. In cases where SSR is used (or server-side logic is added without prerendering), those functions will be adapted to the target backend. Some examples include:
  * Self-hosted dynamic web applications with a Node.js backend.
  * Serverless web applications with backend loaders and APIs deployed as remote functions. See zero-config deployments for popular deployment options.
  * Static pre-rendered sites such as a blog or multi-page site hosted on a CDN or static host. Statically-generated sites are shipped without a backend.
  * Single-page Applications (SPAs) with client-side routing and rendering for API-driven dynamic content. SPAs are shipped without a backend and are not server-rendered. This option is commonly chosen when bundling SvelteKit with an app written in PHP, .Net, Java, C, Golang, Rust, etc.
  * A mix of the above; some routes can be static, and some routes can use backend functions to fetch dynamic information. This can be configured with page options that includes the option to opt out of SSR.


In order to support SSR, a JS backend — such as Node.js or Deno-based server, serverless function, or edge function — is required.
It is also possible to write custom adapters or leverage community adapters to deploy SvelteKit to more platforms such as specialized server environments, browser extensions, or native applications. See integrations for more examples and integrations.
## How do I include details from package.json in my application?
You cannot directly require JSON files, since SvelteKit expects `svelte.config.js` to be an ES module. If you’d like to include your application’s version number or other information from `package.json` in your application, you can load JSON like so:
svelte.config
```
import { ```
function readFileSync(path: PathOrFileDescriptor, options?: {
  encoding?: null | undefined;
  flag?: string | undefined;
} | null): Buffer (+2 overloads)
```
`
Returns the contents of the `path`.
For detailed information, see the documentation of the asynchronous version of this API: {@link readFile } .
If the `encoding` option is specified then this function returns a string. Otherwise it returns a buffer.
Similar to {@link readFile } , when the path is a directory, the behavior of `fs.readFileSync()` is platform-specific.
```
import { readFileSync } from 'node:fs';
// macOS, Linux, and Windows
readFileSync('&#x3C;directory>');
// => [Error: EISDIR: illegal operation on a directory, read &#x3C;directory>]
// FreeBSD
readFileSync('&#x3C;directory>'); // => &#x3C;data>
```

@sincev0.1.8
@parampath filename or file descriptor
readFileSync } from 'node:fs'; import { `function fileURLToPath(url: string | URL, options?: FileUrlToPathOptions): string`
This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.
```
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
new URL('file:///C:/path/').pathname;   // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');// Correct:  C:\path\ (Windows)
new URL('file://nas/foo.txt').pathname;  // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');    // Correct:  \\nas\foo.txt (Windows)
new URL('file:///你好.txt').pathname;   // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');// Correct:  /你好.txt (POSIX)
new URL('file:///hello world').pathname;  // Incorrect: /hello%20world
fileURLToPath('file:///hello world');   // Correct:  /hello world (POSIX)
```

@sincev10.12.0
@paramurl The file URL string or URL object to convert to a path.
@returnThe fully-resolved platform-specific Node.js file path.
fileURLToPath } from 'node:url'; const `const path: string`path = `function fileURLToPath(url: string | URL, options?: FileUrlToPathOptions): string`
This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string.
```
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
new URL('file:///C:/path/').pathname;   // Incorrect: /C:/path/
fileURLToPath('file:///C:/path/');// Correct:  C:\path\ (Windows)
new URL('file://nas/foo.txt').pathname;  // Incorrect: /foo.txt
fileURLToPath('file://nas/foo.txt');    // Correct:  \\nas\foo.txt (Windows)
new URL('file:///你好.txt').pathname;   // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
fileURLToPath('file:///你好.txt');// Correct:  /你好.txt (POSIX)
new URL('file:///hello world').pathname;  // Incorrect: /hello%20world
fileURLToPath('file:///hello world');   // Correct:  /hello world (POSIX)
```

@sincev10.12.0
@paramurl The file URL string or URL object to convert to a path.
@returnThe fully-resolved platform-specific Node.js file path.
fileURLToPath(new ````
new URL(input: string | {
  toString: () => string;
}, base?: string | URL): URL
```
`
Browser-compatible `URL` class, implemented by following the WHATWG URL Standard. Examples of parsed URLs may be found in the Standard itself. The `URL` class is also available on the global object.
In accordance with browser conventions, all properties of `URL` objects are implemented as getters and setters on the class prototype, rather than as data properties on the object itself. Thus, unlike `legacy urlObject`s, using the `delete` keyword on any properties of `URL` objects (e.g. `delete myURL.protocol`, `delete myURL.pathname`, etc) has no effect but will still return `true`.
@sincev7.0.0, v6.13.0
URL('package.json', import.meta.`ImportMeta.url: string`
The absolute `file:` URL of the module.
url)); const `const pkg: any`pkg = `var JSON: JSON`
An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
JSON.`JSON.parse(text: string, reviver?: (this: any, key: string, value: any) => any): any`
Converts a JavaScript Object Notation (JSON) string into an object.
@paramtext A valid JSON string.
@paramreviver A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
parse(````
function readFileSync(path: PathOrFileDescriptor, options: {
  encoding: BufferEncoding;
  flag?: string | undefined;
} | BufferEncoding): string (+2 overloads)
```
`
Synchronously reads the entire contents of a file.
@parampath A path to a file. If a URL is provided, it must use the `file:` protocol. If a file descriptor is provided, the underlying file will _not_ be closed automatically.
@paramoptions Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`.
readFileSync(`const path: string`path, 'utf8'));`
```

## How do I fix the error I’m getting trying to include a package?
Most issues related to including a library are due to incorrect packaging. You can check if a library’s packaging is compatible with Node.js by entering it into the publint website.
Here are a few things to keep in mind when checking if a library is packaged correctly:
  * `exports` takes precedence over the other entry point fields such as `main` and `module`. Adding an `exports` field may not be backwards-compatible as it prevents deep imports.
  * ESM files should end with `.mjs` unless `"type": "module"` is set in which any case CommonJS files should end with `.cjs`.
  * `main` should be defined if `exports` is not. It should be either a CommonJS or ESM file and adhere to the previous bullet. If a `module` field is defined, it should refer to an ESM file.
  * Svelte components should be distributed as uncompiled `.svelte` files with any JS in the package written as ESM only. Custom script and style languages, like TypeScript and SCSS, should be preprocessed as vanilla JS and CSS respectively. We recommend using `svelte-package` for packaging Svelte libraries, which will do this for you.


Libraries work best in the browser with Vite when they distribute an ESM version, especially if they are dependencies of a Svelte component library. You may wish to suggest to library authors that they provide an ESM version. However, CommonJS (CJS) dependencies should work as well since, by default, `vite-plugin-svelte` will ask Vite to pre-bundle them using `esbuild` to convert them to ESM.
If you are still encountering issues we recommend searching both the Vite issue tracker and the issue tracker of the library in question. Sometimes issues can be worked around by fiddling with the `optimizeDeps` or `ssr` config values though we recommend this as only a short-term workaround in favor of fixing the library in question.
## How do I use the view transitions API with SvelteKit?
While SvelteKit does not have any specific integration with view transitions, you can call `document.startViewTransition` in `onNavigate` to trigger a view transition on every client-side navigation.
```
import { function onNavigate(callback: (navigation: import("@sveltejs/kit").OnNavigate) => MaybePromise<void | (() => void)>): void
A lifecycle function that runs the supplied callback immediately before we navigate to a new URL except during full-page navigations.


If you return a Promise, SvelteKit will wait for it to resolve before completing the navigation. This allows you to — for example — use document.startViewTransition. Avoid promises that are slow to resolve, since navigation will appear stalled to the user.


If a function (or a Promise that resolves to a function) is returned from the callback, it will be called once the DOM has updated.


onNavigate must be called during a component initialization. It remains active as long as the component is mounted.


onNavigate } from '$app/navigation';
function onNavigate(callback: (navigation: import("@sveltejs/kit").OnNavigate) => MaybePromise<void | (() => void)>): void
A lifecycle function that runs the supplied callback immediately before we navigate to a new URL except during full-page navigations.


If you return a Promise, SvelteKit will wait for it to resolve before completing the navigation. This allows you to — for example — use document.startViewTransition. Avoid promises that are slow to resolve, since navigation will appear stalled to the user.


If a function (or a Promise that resolves to a function) is returned from the callback, it will be called once the DOM has updated.


onNavigate must be called during a component initialization. It remains active as long as the component is mounted.


onNavigate((navigation: OnNavigatenavigation) => {
	if (!var document: Document
MDN Reference


document.startViewTransition) return;
	return new ```
var Promise: PromiseConstructor
new <void | (() => void)>(executor: (resolve: (value: void | (() => void) | PromiseLike<void | (() => void)>) => void, reject: (reason?: any) => void) => void) => Promise<void | (() => void)>
```
`
Creates a new Promise.
@paramexecutor A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
Promise((`resolve: (value: void | (() => void) | PromiseLike<void | (() => void)>) => void`resolve) => { `var document: Document`
MDN Reference
document.startViewTransition(async () => { `resolve: (value: void | (() => void) | PromiseLike<void | (() => void)>) => void`resolve(); await `navigation: OnNavigate`navigation.`Navigation.complete: Promise<void>`
A promise that resolves once the navigation is complete, and rejects if the navigation fails or is aborted. In the case of a `willUnload` navigation, the promise will never resolve
complete; }); }); });`
```

For more, see “Unlocking view transitions” on the Svelte blog.
## How do I use X with SvelteKit?
Make sure you’ve read the documentation section on integrations. If you’re still having trouble, solutions to common issues are listed below.
### How do I setup a database?
Put the code to query your database in a server route - don’t query the database in .svelte files. You can create a `db.js` or similar that sets up a connection immediately and makes the client accessible throughout the app as a singleton. You can execute any one-time setup code in `hooks.server.js` and import your database helpers into any endpoint that needs them.
### How do I use a client-side only library that depends on document or window?
If you need access to the `document` or `window` variables or otherwise need code to run only on the client-side you can wrap it in a `browser` check:
```
import { const browser: boolean
true if the app is running in the browser.


browser } from '$app/environment';
if (const browser: boolean
true if the app is running in the browser.


browser) {
	// client-only code here
}
```

You can also run code in `onMount` if you’d like to run it after the component has been first rendered to the DOM:
```
import { function onMount<T>(fn: () => NotFunction<T> | Promise<NotFunction<T>> | (() => any)): void
The onMount function schedules a callback to run as soon as the component has been mounted to the DOM.
It must be called during the component’s initialisation (but doesn’t need to live _inside_ the component;
it can be called from an external module).


If a function is returned _synchronously_ from onMount, it will be called when the component is unmounted.


onMount does not run inside server-side components.


onMount } from 'svelte';
onMount<void>(fn: () => void | (() => any) | Promise<void>): void
The onMount function schedules a callback to run as soon as the component has been mounted to the DOM.
It must be called during the component’s initialisation (but doesn’t need to live _inside_ the component;
it can be called from an external module).


If a function is returned _synchronously_ from onMount, it will be called when the component is unmounted.


onMount does not run inside server-side components.


onMount(async () => {
	const { const method: anymethod } = await import('some-browser-only-library');
	const method: anymethod('hello world');
});
```

If the library you’d like to use is side-effect free you can also statically import it and it will be tree-shaken out in the server-side build where`onMount` will be automatically replaced with a no-op:
```
import { function onMount<T>(fn: () => NotFunction<T> | Promise<NotFunction<T>> | (() => any)): void
The onMount function schedules a callback to run as soon as the component has been mounted to the DOM.
It must be called during the component’s initialisation (but doesn’t need to live _inside_ the component;
it can be called from an external module).


If a function is returned _synchronously_ from onMount, it will be called when the component is unmounted.


onMount does not run inside server-side components.


onMount } from 'svelte';
import { module "some-browser-only-library"method } from 'some-browser-only-library';
onMount<void>(fn: () => void | (() => any) | Promise<void>): void
The onMount function schedules a callback to run as soon as the component has been mounted to the DOM.
It must be called during the component’s initialisation (but doesn’t need to live _inside_ the component;
it can be called from an external module).


If a function is returned _synchronously_ from onMount, it will be called when the component is unmounted.


onMount does not run inside server-side components.


onMount(() => {
	module "some-browser-only-library"method('hello world');
});
```

Finally, you may also consider using an`{#await}` block:
index
```
<script>
	import { browser } from '$app/environment';
	const ComponentConstructor = browser ?
		import('some-browser-only-library').then((module) => module.Component) :
		new Promise(() => {});
</script>
{#await ComponentConstructor}
	<p>Loading...</p>
{:then component}
	<svelte:component this={component} />
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
```
```
<script lang="ts">
	import { browser } from '$app/environment';
	const ComponentConstructor = browser ?
		import('some-browser-only-library').then((module) => module.Component) :
		new Promise(() => {});
</script>
{#await ComponentConstructor}
	<p>Loading...</p>
{:then component}
	<svelte:component this={component} />
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
```

### How do I use a different backend API server?
You can use `event.fetch` to request data from an external API server, but be aware that you would need to deal with CORS, which will result in complications such as generally requiring requests to be preflighted resulting in higher latency. Requests to a separate subdomain may also increase latency due to an additional DNS lookup, TLS setup, etc. If you wish to use this method, you may find `handleFetch` helpful.
Another approach is to set up a proxy to bypass CORS headaches. In production, you would rewrite a path like `/api` to the API server; for local development, use Vite’s `server.proxy` option.
How to setup rewrites in production will depend on your deployment platform. If rewrites aren’t an option, you could alternatively add an API route:
src/routes/api/[...path]/+server
```
/** @type {import('./$types').RequestHandler} */
export function ```
function GET({ params, url }: {
  params: any;
  url: any;
}): Promise<Response>
```
`
@type{import('./$types').RequestHandler}
GET({ `params: any`params, `url: any`url }) { return `function fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> (+1 overload)`
MDN Reference
fetch(`https://my-api-server.com/${`params: any`params.path + `url: any`url.search}`); }`
```
```
import type { ```
type RequestHandler = (event: Kit.RequestEvent<Record<string, any>, string | null>) => MaybePromise<Response>
type RequestHandler = (event: Kit.RequestEvent<Record<string, any>, string | null>) => MaybePromise<Response>
```
`RequestHandler } from './$types'; export const `const GET: RequestHandler`GET: ````
type RequestHandler = (event: Kit.RequestEvent<Record<string, any>, string | null>) => MaybePromise<Response>
type RequestHandler = (event: Kit.RequestEvent<Record<string, any>, string | null>) => MaybePromise<Response>
```
`RequestHandler = ({ `params: Record<string, any>`
The parameters of the current route - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object
params, `url: URL`
The requested URL.
url }) => { return `function fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> (+1 overload)`
MDN Reference
fetch(`https://my-api-server.com/${`params: Record<string, any>`
The parameters of the current route - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object
params.path + `url: URL`
The requested URL.
url.`URL.search: string`
MDN Reference
search}`); };`
```

(Note that you may also need to proxy `POST` / `PATCH` etc requests, and forward `request.headers`, depending on your needs.)
### How do I use middleware?
`adapter-node` builds a middleware that you can use with your own server for production mode. In dev, you can add middleware to Vite by using a Vite plugin. For example:
```
import { module "@sveltejs/kit/vite"sveltekit } from '@sveltejs/kit/vite';
/** @type {import('vite').Plugin} */
const const myPlugin: Plugin<any>
@type{import('vite').Plugin}
myPlugin = {
	OutputPlugin.name: stringname: 'log-request-middleware',
	Plugin<any>.configureServer?: ObjectHook<ServerHook> | undefined
Configure the vite server. The hook receives the 
{@link 
ViteDevServer
}


instance. This can also be used to store a reference to the server
for use in other hooks.


The hooks will be called before internal middlewares are applied. A hook
can return a post hook that will be called after internal middlewares
are applied. Hook can be async functions and will be called in series.


configureServer(server: ViteDevServerserver) {
		server: ViteDevServerserver.ViteDevServer.middlewares: Connect.Server
A connect app instance.




  * Can be used to attach custom middlewares to the dev server.


  * Can also be used as the handler function of a custom http server
or as a middleware in any connect-style Node.js frameworks




https://github.com/senchalabs/connect#use-middleware


middlewares.Connect.Server.use(fn: Connect.NextHandleFunction): Connect.Server (+3 overloads)
Utilize the given middleware handle to the given route,
defaulting to _/_. This “route” is the mount-point for the
middleware, when given a value other than _/_ the middleware
is only effective when that segment is present in the request’s
pathname.


For example if we were to mount a function at _/admin_, it would
be invoked on _/admin_, and _/admin/settings_, however it would
not be invoked for _/_, or _/posts_.


use((req: Connect.IncomingMessagereq, res: ServerResponse<IncomingMessage>res, next: Connect.NextFunctionnext) => {
			var console: Console
The console module provides a simple debugging console that is similar to the
JavaScript console mechanism provided by web browsers.


The module exports two specific components:




  * A Console class with methods such as console.log(), console.error() and console.warn() that can be used to write to any Node.js stream.


  * A global console instance configured to write to process.stdout and
process.stderr. The global console can be used without calling require('console').




_**Warning**_: The global console object’s methods are neither consistently
synchronous like the browser APIs they resemble, nor are they consistently
asynchronous like all other Node.js streams. See the note on process I/O for
more information.


Example using the global console:


```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the`Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log(`Got request ${`req: Connect.IncomingMessage`req.`IncomingMessage.url?: string | undefined`
**Only valid for request obtained from {@link Server } .**
Request URL string. This contains only the URL that is present in the actual HTTP request. Take the following request:
```
GET /status?name=ryan HTTP/1.1
Accept: text/plain
```

To parse the URL into its parts:
```
new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`);
```

When `request.url` is `'/status?name=ryan'` and `process.env.HOST` is undefined:
```
$ node
> new URL(`http://${process.env.HOST ?? 'localhost'}${request.url}`);
URL {
 href: 'http://localhost/status?name=ryan',
 origin: 'http://localhost',
 protocol: 'http:',
 username: '',
 password: '',
 host: 'localhost',
 hostname: 'localhost',
 port: '',
 pathname: '/status',
 search: '?name=ryan',
 searchParams: URLSearchParams { 'name' => 'ryan' },
 hash: ''
}
```

Ensure that you set `process.env.HOST` to the server’s host name, or consider replacing this part entirely. If using `req.headers.host`, ensure proper validation is used, as clients may specify a custom `Host` header.
@sincev0.1.90
url}`); `next: (err?: any) => void`next(); }); } }; /** @type {import('vite').UserConfig} */ const `const config: UserConfig`
@type{import('vite').UserConfig}
config = { `UserConfig.plugins?: PluginOption[] | undefined`
Array of vite plugins to use.
plugins: [`const myPlugin: Plugin<any>`
@type{import('vite').Plugin}
myPlugin, `module "@sveltejs/kit/vite"`sveltekit()] }; export default `const config: UserConfig`
@type{import('vite').UserConfig}
config;`
```

See Vite’s `configureServer` docs for more details including how to control ordering.
### Does it work with Yarn 2?
Sort of. The Plug’n'Play feature, aka ‘pnp’, is broken (it deviates from the Node module resolution algorithm, and doesn’t yet work with native JavaScript modules which SvelteKit — along with an increasing number of packages — uses). You can use `nodeLinker: 'node-modules'` in your `.yarnrc.yml` file to disable pnp, but it’s probably easier to just use npm or pnpm, which is similarly fast and efficient but without the compatibility headaches.
### How do I use with Yarn 3?
Currently ESM Support within the latest Yarn (version 3) is considered experimental.
The below seems to work although your results may vary.
First create a new application:
```
yarn create svelte myapp
cd myapp
```

And enable Yarn Berry:
```
yarn set version berry
yarn install
```

#### Yarn 3 global cache
One of the more interesting features of Yarn Berry is the ability to have a single global cache for packages, instead of having multiple copies for each project on the disk. However, setting `enableGlobalCache` to true causes building to fail, so it is recommended to add the following to the `.yarnrc.yml` file:
```
nodeLinker: node-modules
```

This will cause packages to be downloaded into a local node_modules directory but avoids the above problem and is your best bet for using version 3 of Yarn at this point in time.
Edit this page on GitHub
previous next
SEO Integrations
