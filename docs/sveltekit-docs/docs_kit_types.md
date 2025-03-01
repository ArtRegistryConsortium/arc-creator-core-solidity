Skip to main content
## Generated types
The `RequestHandler` and `Load` types both accept a `Params` argument allowing you to type the `params` object. For example this endpoint expects `foo`, `bar` and `baz` params:
src/routes/[foo]/[bar]/[baz]/+page.server
```
/** @type {import('@sveltejs/kit').RequestHandler<{
	foo: string;
	bar: string;
	baz: string
 }>} */
export async function ```
function GET({ params }: {
  params: any;
}): Promise<void>
```
`
@type{import('@sveltejs/kit').RequestHandler<{ foo: string; bar: string; baz: string }>}
GET({ `params: any`params }) { // ... }`
```
```
import type { type RequestHandler<Params extends Partial<Record<string, string>> = Partial<Record<string, string>>, RouteId extends string | null = string | null> = (event: RequestEvent<Params, RouteId>) => MaybePromise<Response>
A (event: RequestEvent) => Response function exported from a +server.js file that corresponds to an HTTP verb (GET, PUT, PATCH, etc) and handles requests with that method.


It receives Params as the first generic argument, which you can skip by using generated types instead.


RequestHandler } from '@sveltejs/kit';
export const ```
const GET: RequestHandler<{
  foo: string;
  bar: string;
  baz: string;
}>
```
`GET: `type RequestHandler<Params extends Partial<Record<string, string>> = Partial<Record<string, string>>, RouteId extends string | null = string | null> = (event: RequestEvent<Params, RouteId>) => MaybePromise<Response>`
A `(event: RequestEvent) => Response` function exported from a `+server.js` file that corresponds to an HTTP verb (`GET`, `PUT`, `PATCH`, etc) and handles requests with that method.
It receives `Params` as the first generic argument, which you can skip by using generated types instead.
RequestHandler<{ `foo: string`foo: string; `bar: string`bar: string; `baz: string`baz: string }> = async ({ ````
params: {
  foo: string;
  bar: string;
  baz: string;
}
```
`
The parameters of the current route - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object
params }) => { // ... };`
```

Needless to say, this is cumbersome to write out, and less portable (if you were to rename the `[foo]` directory to `[qux]`, the type would no longer reflect reality).
To solve this problem, SvelteKit generates `.d.ts` files for each of your endpoints and pages:
.svelte-kit/types/src/routes/[foo]/[bar]/[baz]/$types.d
```
import type * as module "@sveltejs/kit"Kit from '@sveltejs/kit';
type ```
type RouteParams = {
  foo: string;
  bar: string;
  baz: string;
}
```
`RouteParams = { `foo: string`foo: string; `bar: string`bar: string; `baz: string`baz: string; }; export type `type PageServerLoad = (event: Kit.ServerLoadEvent<RouteParams, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>`PageServerLoad = `module "@sveltejs/kit"`Kit.`type ServerLoad<Params extends Partial<Record<string, string>> = Partial<Record<string, string>>, ParentData extends Record<string, any> = Record<string, any>, OutputData extends Record<string, any> | void = void | Record<...>, RouteId extends string | null = string | null> = (event: Kit.ServerLoadEvent<Params, ParentData, RouteId>) => MaybePromise<OutputData>`
The generic form of `PageServerLoad` and `LayoutServerLoad`. You should import those from `./$types` (see generated types) rather than using `ServerLoad` directly.
ServerLoad<````
type RouteParams = {
  foo: string;
  bar: string;
  baz: string;
}
```
`RouteParams>; export type `type PageLoad = (event: Kit.LoadEvent<RouteParams, Record<string, any> | null, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>`PageLoad = `module "@sveltejs/kit"`Kit.`type Load<Params extends Partial<Record<string, string>> = Partial<Record<string, string>>, InputData extends Record<string, unknown> | null = Record<string, any> | null, ParentData extends Record<string, unknown> = Record<...>, OutputData extends Record<string, unknown> | void = void | Record<...>, RouteId extends string | null = string | null> = (event: Kit.LoadEvent<Params, InputData, ParentData, RouteId>) => MaybePromise<OutputData>`
The generic form of `PageLoad` and `LayoutLoad`. You should import those from `./$types` (see generated types) rather than using `Load` directly.
Load<````
type RouteParams = {
  foo: string;
  bar: string;
  baz: string;
}
```
`RouteParams>;`
```

These files can be imported into your endpoints and pages as siblings, thanks to the `rootDirs` option in your TypeScript configuration:
src/routes/[foo]/[bar]/[baz]/+page.server
```
/** @type {import('./$types').PageServerLoad} */
export async function function GET(event: ServerLoadEvent<RouteParams, Record<string, any>, string | null>): MaybePromise<void | Record<string, any>>
@type{import('./$types').PageServerLoad}
GET({ params: RouteParams
The parameters of the current route - e.g. for a route like /blog/[slug], a { slug: string } object


params }) {
	// ...
}
```
```
import type { type PageServerLoad = (event: ServerLoadEvent<RouteParams, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>PageServerLoad } from './$types';
export const const GET: PageServerLoadGET: type PageServerLoad = (event: ServerLoadEvent<RouteParams, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>PageServerLoad = async ({ params: RouteParams
The parameters of the current route - e.g. for a route like /blog/[slug], a { slug: string } object


params }) => {
	// ...
};
```

src/routes/[foo]/[bar]/[baz]/+page
```
/** @type {import('./$types').PageLoad} */
export async function function load(event: LoadEvent<RouteParams, Record<string, any> | null, Record<string, any>, string | null>): MaybePromise<void | Record<string, any>>
@type{import('./$types').PageLoad}
load({ params: RouteParams
The parameters of the current page - e.g. for a route like /blog/[slug], a { slug: string } object


params, ```
fetch: {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  (input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response>;
}
```
`
`fetch` is equivalent to the native `fetch` web API, with a few additional features:
  * It can be used to make credentialed requests on the server, as it inherits the `cookie` and `authorization` headers for the page request.
  * It can make relative requests on the server (ordinarily, `fetch` requires a URL with an origin when used in a server context).
  * Internal requests (e.g. for `+server.js` routes) go directly to the handler function when running on the server, without the overhead of an HTTP call.
  * During server-side rendering, the response will be captured and inlined into the rendered HTML by hooking into the `text` and `json` methods of the `Response` object. Note that headers will _not_ be serialized, unless explicitly included via `filterSerializedResponseHeaders`
  * During hydration, the response will be read from the HTML, guaranteeing consistency and preventing an additional network request.


You can learn more about making credentialed requests with cookies here
fetch }) { // ... }`
```
```
import type { type PageLoad = (event: LoadEvent<RouteParams, Record<string, any> | null, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>PageLoad } from './$types';
export const const load: PageLoadload: type PageLoad = (event: LoadEvent<RouteParams, Record<string, any> | null, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>PageLoad = async ({ params: RouteParams
The parameters of the current page - e.g. for a route like /blog/[slug], a { slug: string } object


params, ```
fetch: {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  (input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response>;
}
```
`
`fetch` is equivalent to the native `fetch` web API, with a few additional features:
  * It can be used to make credentialed requests on the server, as it inherits the `cookie` and `authorization` headers for the page request.
  * It can make relative requests on the server (ordinarily, `fetch` requires a URL with an origin when used in a server context).
  * Internal requests (e.g. for `+server.js` routes) go directly to the handler function when running on the server, without the overhead of an HTTP call.
  * During server-side rendering, the response will be captured and inlined into the rendered HTML by hooking into the `text` and `json` methods of the `Response` object. Note that headers will _not_ be serialized, unless explicitly included via `filterSerializedResponseHeaders`
  * During hydration, the response will be read from the HTML, guaranteeing consistency and preventing an additional network request.


You can learn more about making credentialed requests with cookies here
fetch }) => { // ... };`
```

The return types of the load functions are then available through the `$types` module as `PageData` and `LayoutData` respectively, while the union of the return values of all `Actions` is available as `ActionData`. Starting with version 2.16.0, two additional helper types are provided. `PageProps` defines `data: PageData`, as well as `form: ActionData`, when there are actions defined. `LayoutProps` defines `data: LayoutData`, as well as `children: Snippet`:
src/routes/+page
```
<script>
	/** @type {import('./$types').PageProps} */
	let { data, form } = $props();
</script>
```
```
<script lang="ts">
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>
```

> Legacy mode
> Before 2.16.0:
> src/routes/+page
> ```
<script>
	/** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
	let { data, form } = $props();
</script>
```
```
<script lang="ts">
	import type { PageData, ActionData } from './$types';
	let { data, form }: { data: PageData, form: ActionData } = $props();
</script>
```

> Using Svelte 4:
> src/routes/+page
> ```
<script>
 /** @type {import('./$types').PageData} */
 export let data;
 /** @type {import('./$types').ActionData} */
 export let form;
</script>
```
```
<script lang="ts">
	import type { PageData, ActionData } from './$types';
 export let data: PageData;
 export let form: ActionData;
</script>
```

> For this to work, your own `tsconfig.json` or `jsconfig.json` should extend from the generated `.svelte-kit/tsconfig.json` (where `.svelte-kit` is your `outDir`):
> `{ "extends": "./.svelte-kit/tsconfig.json" }`
### Default tsconfig.json
The generated `.svelte-kit/tsconfig.json` file contains a mixture of options. Some are generated programmatically based on your project configuration, and should generally not be overridden without good reason:
.svelte-kit/tsconfig
```
{
	"compilerOptions": {
		"paths": {
			"$lib": ["../src/lib"],
			"$lib/*": ["../src/lib/*"]
		},
		"rootDirs": ["..", "./types"]
	},
	"include": [
		"ambient.d.ts",
		"non-ambient.d.ts",
		"./types/**/$types.d.ts",
		"../vite.config.js",
		"../vite.config.ts",
		"../src/**/*.js",
		"../src/**/*.ts",
		"../src/**/*.svelte",
		"../tests/**/*.js",
		"../tests/**/*.ts",
		"../tests/**/*.svelte"
	],
	"exclude": [
		"../node_modules/**",
		"../src/service-worker.js",
		"../src/service-worker/**/*.js",
		"../src/service-worker.ts",
		"../src/service-worker/**/*.ts",
		"../src/service-worker.d.ts",
		"../src/service-worker/**/*.d.ts"
	]
}
```

Others are required for SvelteKit to work properly, and should also be left untouched unless you know what you’re doing:
.svelte-kit/tsconfig
```
{
	"compilerOptions": {
		// this ensures that types are explicitly
		// imported with `import type`, which is
		// necessary as Svelte/Vite cannot
		// otherwise compile components correctly
		"verbatimModuleSyntax": true,
		// Vite compiles one TypeScript module
		// at a time, rather than compiling
		// the entire module graph
		"isolatedModules": true,
		// Tell TS it's used only for type-checking
		"noEmit": true,
		// This ensures both `vite build`
		// and `svelte-package` work correctly
		"lib": ["esnext", "DOM", "DOM.Iterable"],
		"moduleResolution": "bundler",
		"module": "esnext",
		"target": "esnext"
	}
}
```

## $lib
This is a simple alias to `src/lib`, or whatever directory is specified as `config.kit.files.lib`. It allows you to access common components and utility modules without `../../../../` nonsense.
### $lib/server
A subdirectory of `$lib`. SvelteKit will prevent you from importing any modules in `$lib/server` into client-side code. See server-only modules.
## app.d.ts
The `app.d.ts` file is home to the ambient types of your apps, i.e. types that are available without explicitly importing them.
Always part of this file is the `App` namespace. This namespace contains several types that influence the shape of certain SvelteKit features you interact with.
## Error
Defines the common shape of expected and unexpected errors. Expected errors are thrown using the `error` function. Unexpected errors are handled by the `handleError` hooks which should return this shape.
```
interface Error {…}
```

```
message: string;
```

## Locals
The interface that defines `event.locals`, which can be accessed in server hooks (`handle`, and `handleError`), server-only `load` functions, and `+server.js` files.
```
interface Locals {}
```

## PageData
Defines the common shape of the page.data state and $page.data store - that is, the data that is shared between all pages. The `Load` and `ServerLoad` functions in `./$types` will be narrowed accordingly. Use optional properties for data that is only present on specific pages. Do not add an index signature (`[key: string]: any`).
```
interface PageData {}
```

## PageState
The shape of the `page.state` object, which can be manipulated using the `pushState` and `replaceState` functions from `$app/navigation`.
```
interface PageState {}
```

## Platform
If your adapter provides platform-specific context via `event.platform`, you can specify it here.
```
interface Platform {}
```

Edit this page on GitHub
previous next
Command Line Interface
