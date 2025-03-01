Skip to main content
If you’re used to building client-only apps, state management in an app that spans server and client might seem intimidating. This section provides tips for avoiding some common gotchas.
## Avoid shared state on the server
Browsers are _stateful_ — state is stored in memory as the user interacts with the application. Servers, on the other hand, are _stateless_ — the content of the response is determined entirely by the content of the request.
Conceptually, that is. In reality, servers are often long-lived and shared by multiple users. For that reason it’s important not to store data in shared variables. For example, consider this code:
+page.server
```
let let user: anyuser;
/** @type {import('./$types').PageServerLoad} */
export function ```
function load(): {
  user: any;
}
```
`
@type{import('./$types').PageServerLoad}
load() { return { `user: any`user }; } /** @satisfies {import('./$types').Actions} */ export const ````
const actions: {
  default: ({ request }: {
    request: any;
  }) => Promise<void>;
}
```
`
@satisfies{import('./$types').Actions}
actions = { ````
default: ({ request }: {
  request: any;
}) => Promise<void>
```
`default: async ({ `request: any`request }) => { const `const data: any`data = await `request: any`request.formData(); // NEVER DO THIS! `let user: any`user = { `name: any`name: `const data: any`data.get('name'), `embarrassingSecret: any`embarrassingSecret: `const data: any`data.get('secret') }; } }`
```
```
import type { ```
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
```
`PageServerLoad, ````
type Actions = {
  [x: string]: Kit.Action<Record<string, any>, void | Record<string, any>, string | null>;
}
type Actions = {
  [x: string]: Kit.Action<Record<string, any>, void | Record<string, any>, string | null>;
}
```
`Actions } from './$types'; let `let user: any`user; export const `const load: PageServerLoad`load: ````
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
```
`PageServerLoad = () => { return { `user: any`user }; }; export const ````
const actions: {
  default: ({ request }: Kit.RequestEvent<Record<string, any>, string | null>) => Promise<void>;
}
```
`actions = { `default: ({ request }: Kit.RequestEvent<Record<string, any>, string | null>) => Promise<void>`default: async ({ `request: Request`
The original request object
request }) => { const `const data: FormData`data = await `request: Request`
The original request object
request.`Body.formData(): Promise<FormData>`
MDN Reference
formData(); // NEVER DO THIS! `let user: any`user = { `name: FormDataEntryValue | null`name: `const data: FormData`data.`FormData.get(name: string): FormDataEntryValue | null`
MDN Reference
get('name'), `embarrassingSecret: FormDataEntryValue | null`embarrassingSecret: `const data: FormData`data.`FormData.get(name: string): FormDataEntryValue | null`
MDN Reference
get('secret') }; } } satisfies ````
type Actions = {
  [x: string]: Kit.Action<Record<string, any>, void | Record<string, any>, string | null>;
}
type Actions = {
  [x: string]: Kit.Action<Record<string, any>, void | Record<string, any>, string | null>;
}
```
`Actions`
```

The `user` variable is shared by everyone who connects to this server. If Alice submitted an embarrassing secret, and Bob visited the page after her, Bob would know Alice’s secret. In addition, when Alice returns to the site later in the day, the server may have restarted, losing her data.
Instead, you should _authenticate_ the user using `cookies` and persist the data to a database.
## No side-effects in load
For the same reason, your `load` functions should be _pure_ — no side-effects (except maybe the occasional `console.log(...)`). For example, you might be tempted to write to a store or global state inside a `load` function so that you can use the value in your components:
+page
```
import { ```
const user: {
  set: (value: any) => void;
}
```
`user } from '$lib/user'; /** @type {import('./$types').PageLoad} */ export async function `function load(event: LoadEvent<Record<string, any>, Record<string, any> | null, Record<string, any>, string | null>): MaybePromise<void | Record<string, any>>`
@type{import('./$types').PageLoad}
load({ ````
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
fetch }) { const `const response: Response`response = await `fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => Promise<Response> (+1 overload)`
MDN Reference
fetch('/api/user'); // NEVER DO THIS! ````
const user: {
  set: (value: any) => void;
}
```
`user.`set: (value: any) => void`set(await `const response: Response`response.`Body.json(): Promise<any>`
MDN Reference
json()); }`
```
```
import { ```
const user: {
  set: (value: any) => void;
}
```
`user } from '$lib/user'; import type { `type PageLoad = (event: LoadEvent<Record<string, any>, Record<string, any> | null, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>`PageLoad } from './$types'; export const `const load: PageLoad`load: `type PageLoad = (event: LoadEvent<Record<string, any>, Record<string, any> | null, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>`PageLoad = async ({ ````
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
fetch }) => { const `const response: Response`response = await `fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => Promise<Response> (+1 overload)`
MDN Reference
fetch('/api/user'); // NEVER DO THIS! ````
const user: {
  set: (value: any) => void;
}
```
`user.`set: (value: any) => void`set(await `const response: Response`response.`Body.json(): Promise<any>`
MDN Reference
json()); };`
```

As with the previous example, this puts one user’s information in a place that is shared by _all_ users. Instead, just return the data...
+page
```
/** @type {import('./$types').PageServerLoad} */
export async function ```
function load({ fetch }: {
  fetch: any;
}): Promise<{
  user: any;
}>
```
`
@type{import('./$types').PageServerLoad}
load({ `fetch: any`fetch }) { const `const response: any`response = await `fetch: any`fetch('/api/user'); return { `user: any`user: await `const response: any`response.json() }; }`
```
```
import type { ```
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
```
`PageServerLoad } from './$types'; export const `const load: PageServerLoad`load: ````
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
type PageServerLoad = (event: Kit.ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>
```
`PageServerLoad = async ({ ````
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
fetch }) => { const `const response: Response`response = await `fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => Promise<Response> (+1 overload)`
MDN Reference
fetch('/api/user'); return { `user: any`user: await `const response: Response`response.`Body.json(): Promise<any>`
MDN Reference
json() }; };`
```

...and pass it around to the components that need it, or use `page.data`.
If you’re not using SSR, then there’s no risk of accidentally exposing one user’s data to another. But you should still avoid side-effects in your `load` functions — your application will be much easier to reason about without them.
## Using state and stores with context
You might wonder how we’re able to use `page.data` and other app state (or app stores) if we can’t use global state. The answer is that app state and app stores on the server use Svelte’s context API — the state (or store) is attached to the component tree with `setContext`, and when you subscribe you retrieve it with `getContext`. We can do the same thing with our own state:
src/routes/+layout
```
<script>
	import { setContext } from 'svelte';
	/** @type {import('./$types').LayoutProps} */
	let { data } = $props();
	// Pass a function referencing our state
	// to the context for child components to access
	setContext('user', () => data.user);
</script>
```
```
<script lang="ts">
	import { setContext } from 'svelte';
	import type { LayoutProps } from './$types';
	let { data }: LayoutProps = $props();
	// Pass a function referencing our state
	// to the context for child components to access
	setContext('user', () => data.user);
</script>
```

src/routes/user/+page
```
<script>
	import { getContext } from 'svelte';
	// Retrieve user store from context
	const user = getContext('user');
</script>
<p>Welcome {user().name}</p>
```
```
<script lang="ts">
	import { getContext } from 'svelte';
	// Retrieve user store from context
	const user = getContext('user');
</script>
<p>Welcome {user().name}</p>
```

> We’re passing a function into `setContext` to keep reactivity across boundaries. Read more about it here
> Legacy mode
> You also use stores from `svelte/store` for this, but when using Svelte 5 it is recommended to make use of universal reactivity instead.
Updating the value of context-based state in deeper-level pages or components while the page is being rendered via SSR will not affect the value in the parent component because it has already been rendered by the time the state value is updated. In contrast, on the client (when CSR is enabled, which is the default) the value will be propagated and components, pages, and layouts higher in the hierarchy will react to the new value. Therefore, to avoid values ‘flashing’ during state updates during hydration, it is generally recommended to pass state down into components rather than up.
If you’re not using SSR (and can guarantee that you won’t need to use SSR in future) then you can safely keep state in a shared module, without using the context API.
## Component and page state is preserved
When you navigate around your application, SvelteKit reuses existing layout and page components. For example, if you have a route like this...
src/routes/blog/[slug]/+page
```
<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	// THIS CODE IS BUGGY!
	const wordCount = data.content.split(' ').length;
	const estimatedReadingTime = wordCount / 250;
</script>
<header>
	<h1>{data.title}</h1>
	<p>Reading time: {Math.round(estimatedReadingTime)} minutes</p>
</header>
<div>{@html data.content}</div>
```
```
<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	// THIS CODE IS BUGGY!
	const wordCount = data.content.split(' ').length;
	const estimatedReadingTime = wordCount / 250;
</script>
<header>
	<h1>{data.title}</h1>
	<p>Reading time: {Math.round(estimatedReadingTime)} minutes</p>
</header>
<div>{@html data.content}</div>
```

...then navigating from `/blog/my-short-post` to `/blog/my-long-post` won’t cause the layout, page and any other components within to be destroyed and recreated. Instead the `data` prop (and by extension `data.title` and `data.content`) will update (as it would with any other Svelte component) and, because the code isn’t rerunning, lifecycle methods like `onMount` and `onDestroy` won’t rerun and `estimatedReadingTime` won’t be recalculated.
Instead, we need to make the value _reactive_:
src/routes/blog/[slug]/+page
```
<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	let wordCount = $derived(data.content.split(' ').length);
	let estimatedReadingTime = $derived(wordCount / 250);
</script>
```
```
<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let wordCount = $derived(data.content.split(' ').length);
	let estimatedReadingTime = $derived(wordCount / 250);
</script>
```

> If your code in `onMount` and `onDestroy` has to run again after navigation you can use afterNavigate and beforeNavigate respectively.
Reusing components like this means that things like sidebar scroll state are preserved, and you can easily animate between changing values. In the case that you do need to completely destroy and remount a component on navigation, you can use this pattern:
```
<script>
	import { page } from '$app/state';
</script>
{#key page.url.pathname}
	<BlogPost title={data.title} content={data.title} />
{/key}
```

## Storing state in the URL
If you have state that should survive a reload and/or affect SSR, such as filters or sorting rules on a table, URL search parameters (like `?sort=price&order=ascending`) are a good place to put them. You can put them in `<a href="...">` or `<form action="...">` attributes, or set them programmatically via `goto('?key=value')`. They can be accessed inside `load` functions via the `url` parameter, and inside components via `page.url.searchParams`.
## Storing ephemeral state in snapshots
Some UI state, such as ‘is the accordion open?’, is disposable — if the user navigates away or refreshes the page, it doesn’t matter if the state is lost. In some cases, you _do_ want the data to persist if the user navigates to a different page and comes back, but storing the state in the URL or in a database would be overkill. For this, SvelteKit provides snapshots, which let you associate component state with a history entry.
Edit this page on GitHub
previous next
Page options Building your app
