Skip to main content
‘Hooks’ are app-wide functions you declare that SvelteKit will call in response to specific events, giving you fine-grained control over the framework’s behaviour.
There are three hooks files, all optional:
  * `src/hooks.server.js` — your app’s server hooks
  * `src/hooks.client.js` — your app’s client hooks
  * `src/hooks.js` — your app’s hooks that run on both the client and server


Code in these modules will run when the application starts up, making them useful for initializing database clients and so on.
> You can configure the location of these files with `config.kit.files.hooks`.
## Server hooks
The following hooks can be added to `src/hooks.server.js`:
### handle
This function runs every time the SvelteKit server receives a request — whether that happens while the app is running, or during prerendering — and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
src/hooks.server
```
/** @type {import('@sveltejs/kit').Handle} */
export async function ```
function handle({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
handle({ `event: any`event, `resolve: any`resolve }) { if (`event: any`event.url.pathname.startsWith('/custom')) { return new `var Response: new (body?: BodyInit | null, init?: ResponseInit) => Response`
This Fetch API interface represents the response to a request.
MDN Reference
Response('custom response'); } const `const response: any`response = await `resolve: any`resolve(`event: any`event); return `const response: any`response; }`
```
```
import type { ```
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle } from '@sveltejs/kit'; export const `const handle: Handle`handle: ````
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { if (`event: RequestEvent<Partial<Record<string, string>>, string | null>`event.`RequestEvent<Partial<Record<string, string>>, string | null>.url: URL`
The requested URL.
url.`URL.pathname: string`
MDN Reference
pathname.`String.startsWith(searchString: string, position?: number): boolean`
Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
startsWith('/custom')) { return new `var Response: new (body?: BodyInit | null, init?: ResponseInit) => Response`
This Fetch API interface represents the response to a request.
MDN Reference
Response('custom response'); } const `const response: Response`response = await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event); return `const response: Response`response; };`
```

> Requests for static assets — which includes pages that were already prerendered — are _not_ handled by SvelteKit.
If unimplemented, defaults to `({ event, resolve }) => resolve(event)`.
During prerendering, SvelteKit crawls your pages for links and renders each route it finds. Rendering the route invokes the `handle` function (and all other route dependencies, like `load`). If you need to exclude some code from running during this phase, check that the app is not `building` beforehand.
### locals
To add custom data to the request, which is passed to handlers in `+server.js` and server `load` functions, populate the `event.locals` object, as shown below.
src/hooks.server
```
/** @type {import('@sveltejs/kit').Handle} */
export async function ```
function handle(input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}): MaybePromise<...>
```
`
@type{import('@sveltejs/kit').Handle}
handle({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) { `event: RequestEvent<Partial<Record<string, string>>, string | null>`event.`RequestEvent<Partial<Record<string, string>>, string | null>.locals: App.Locals`
Contains custom data that was added to the request within the `server handle hook`.
locals.`App.Locals.user: User`user = await `const getUserInformation: (cookie: string | void) => Promise<User>`getUserInformation(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event.`RequestEvent<Partial<Record<string, string>>, string | null>.cookies: Cookies`
Get or set cookies related to the current request
cookies.`Cookies.get(name: string, opts?: CookieParseOptions): string | undefined`
Gets a cookie that was previously set with `cookies.set`, or from the request headers.
@paramname the name of the cookie
@paramopts the options, passed directly to `cookie.parse`. See documentation here
get('sessionid')); const `const response: Response`response = await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event); // Note that modifying response headers isn't always safe. // Response objects can have immutable headers // (e.g. Response.redirect() returned from an endpoint). // Modifying immutable headers throws a TypeError. // In that case, clone the response or avoid creating a // response object with immutable headers. `const response: Response`response.`Response.headers: Headers`
MDN Reference
headers.`Headers.set(name: string, value: string): void`
MDN Reference
set('x-custom-header', 'potato'); return `const response: Response`response; }`
```
```
import type { ```
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle } from '@sveltejs/kit'; export const `const handle: Handle`handle: ````
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { `event: RequestEvent<Partial<Record<string, string>>, string | null>`event.`RequestEvent<Partial<Record<string, string>>, string | null>.locals: App.Locals`
Contains custom data that was added to the request within the `server handle hook`.
locals.`App.Locals.user: User`user = await `const getUserInformation: (cookie: string | void) => Promise<User>`getUserInformation(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event.`RequestEvent<Partial<Record<string, string>>, string | null>.cookies: Cookies`
Get or set cookies related to the current request
cookies.`Cookies.get(name: string, opts?: CookieParseOptions): string | undefined`
Gets a cookie that was previously set with `cookies.set`, or from the request headers.
@paramname the name of the cookie
@paramopts the options, passed directly to `cookie.parse`. See documentation here
get('sessionid')); const `const response: Response`response = await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event); // Note that modifying response headers isn't always safe. // Response objects can have immutable headers // (e.g. Response.redirect() returned from an endpoint). // Modifying immutable headers throws a TypeError. // In that case, clone the response or avoid creating a // response object with immutable headers. `const response: Response`response.`Response.headers: Headers`
MDN Reference
headers.`Headers.set(name: string, value: string): void`
MDN Reference
set('x-custom-header', 'potato'); return `const response: Response`response; };`
```

You can define multiple `handle` functions and execute them with the `sequence` helper function.
`resolve` also supports a second, optional parameter that gives you more control over how the response will be rendered. That parameter is an object that can have the following fields:
  * `transformPageChunk(opts: { html: string, done: boolean }): MaybePromise<string | undefined>` — applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
  * `filterSerializedResponseHeaders(name: string, value: string): boolean` — determines which headers should be included in serialized responses when a `load` function loads a resource with `fetch`. By default, none will be included.
  * `preload(input: { type: 'js' | 'css' | 'font' | 'asset', path: string }): boolean` — determines what files should be added to the `<head>` tag to preload it. The method is called with each file that was found at build time while constructing the code chunks — so if you for example have `import './styles.css` in your `+page.svelte`, `preload` will be called with the resolved path to that CSS file when visiting that page. Note that in dev mode `preload` is _not_ called, since it depends on analysis that happens at build time. Preloading can improve performance by downloading assets sooner, but it can also hurt if too much is downloaded unnecessarily. By default, `js` and `css` files will be preloaded. `asset` files are not preloaded at all currently, but we may add this later after evaluating feedback.


src/hooks.server
```
/** @type {import('@sveltejs/kit').Handle} */
export async function ```
function handle({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
handle({ `event: any`event, `resolve: any`resolve }) { const `const response: any`response = await `resolve: any`resolve(`event: any`event, { ````
transformPageChunk: ({ html }: {
  html: any;
}) => any
```
`transformPageChunk: ({ `html: any`html }) => `html: any`html.replace('old', 'new'), `filterSerializedResponseHeaders: (name: any) => any`filterSerializedResponseHeaders: (`name: any`name) => `name: any`name.startsWith('x-'), ````
preload: ({ type, path }: {
  type: any;
  path: any;
}) => any
```
`preload: ({ `type: any`type, `path: any`path }) => `type: any`type === 'js' || `path: any`path.includes('/important/') }); return `const response: any`response; }`
```
```
import type { ```
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle } from '@sveltejs/kit'; export const `const handle: Handle`handle: ````
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { const `const response: Response`response = await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
ResolveOptions.transformPageChunk?(input: {
  html: string;
  done: boolean;
}): MaybePromise<string | undefined>
```
`
Applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
@paraminput the html chunk and the info if this is the last chunk
transformPageChunk: ({ `html: string`html }) => `html: string`html.`String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)`
Replaces text in a string, using a regular expression or search string.
@paramsearchValue A string or regular expression to search for.
@paramreplaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
replace('old', 'new'), `ResolveOptions.filterSerializedResponseHeaders?(name: string, value: string): boolean`
Determines which headers should be included in serialized responses when a `load` function loads a resource with `fetch`. By default, none will be included.
@paramname header name
@paramvalue header value
filterSerializedResponseHeaders: (`name: string`name) => `name: string`name.`String.startsWith(searchString: string, position?: number): boolean`
Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
startsWith('x-'), ````
ResolveOptions.preload?(input: {
  type: "font" | "css" | "js" | "asset";
  path: string;
}): boolean
```
`
Determines what should be added to the `&#x3C;head>` tag to preload it. By default, `js` and `css` files will be preloaded.
@paraminput the type of the file and its path
preload: ({ `type: "font" | "css" | "js" | "asset"`type, `path: string`path }) => `type: "font" | "css" | "js" | "asset"`type === 'js' || `path: string`path.`String.includes(searchString: string, position?: number): boolean`
Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
@paramsearchString search string
@paramposition If position is undefined, 0 is assumed, so as to search all of the String.
includes('/important/') }); return `const response: Response`response; };`
```

Note that `resolve(...)` will never throw an error, it will always return a `Promise<Response>` with the appropriate status code. If an error is thrown elsewhere during `handle`, it is treated as fatal, and SvelteKit will respond with a JSON representation of the error or a fallback error page — which can be customised via `src/error.html` — depending on the `Accept` header. You can read more about error handling here.
### handleFetch
This function allows you to modify (or replace) a `fetch` request that happens inside a `load` or `action` function that runs on the server (or during pre-rendering).
For example, your `load` function might make a request to a public URL like `https://api.yourapp.com` when the user performs a client-side navigation to the respective page, but during SSR it might make sense to hit the API directly (bypassing whatever proxies and load balancers sit between it and the public internet).
src/hooks.server
```
/** @type {import('@sveltejs/kit').HandleFetch} */
export async function ```
function handleFetch({ request, fetch }: {
  request: any;
  fetch: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').HandleFetch}
handleFetch({ `request: any`request, `fetch: any`fetch }) { if (`request: any`request.url.startsWith('https://api.yourapp.com/')) { // clone the original request, but change the URL `request: any`request = new `var Request: new (input: RequestInfo | URL, init?: RequestInit) => Request`
This Fetch API interface represents a resource request.
MDN Reference
Request( `request: any`request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'), `request: any`request ); } return `fetch: any`fetch(`request: any`request); }`
```
```
import type { ```
type HandleFetch = (input: {
  event: RequestEvent;
  request: Request;
  fetch: typeof fetch;
}) => MaybePromise<Response>
```
`
The `handleFetch` hook allows you to modify (or replace) a `fetch` request that happens inside a `load` function that runs on the server (or during pre-rendering)
HandleFetch } from '@sveltejs/kit'; export const `const handleFetch: HandleFetch`handleFetch: ````
type HandleFetch = (input: {
  event: RequestEvent;
  request: Request;
  fetch: typeof fetch;
}) => MaybePromise<Response>
```
`
The `handleFetch` hook allows you to modify (or replace) a `fetch` request that happens inside a `load` function that runs on the server (or during pre-rendering)
HandleFetch = async ({ `request: Request`request, ````
fetch: {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  (input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response>;
}
```
`fetch }) => { if (`request: Request`request.`Request.url: string`
Returns the URL of request as a string.
MDN Reference
url.`String.startsWith(searchString: string, position?: number): boolean`
Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
startsWith('https://api.yourapp.com/')) { // clone the original request, but change the URL `request: Request`request = new `var Request: new (input: RequestInfo | URL, init?: RequestInit) => Request`
This Fetch API interface represents a resource request.
MDN Reference
Request( `request: Request`request.`Request.url: string`
Returns the URL of request as a string.
MDN Reference
url.`String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)`
Replaces text in a string, using a regular expression or search string.
@paramsearchValue A string or regular expression to search for.
@paramreplaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
replace('https://api.yourapp.com/', 'http://localhost:9999/'), `request: Request`request ); } return `fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => Promise<Response> (+1 overload)`
MDN Reference
fetch(`request: Request`request); };`
```

**Credentials**
For same-origin requests, SvelteKit’s `fetch` implementation will forward `cookie` and `authorization` headers unless the `credentials` option is set to `"omit"`.
For cross-origin requests, `cookie` will be included if the request URL belongs to a subdomain of the app — for example if your app is on `my-domain.com`, and your API is on `api.my-domain.com`, cookies will be included in the request.
If your app and your API are on sibling subdomains — `www.my-domain.com` and `api.my-domain.com` for example — then a cookie belonging to a common parent domain like `my-domain.com` will _not_ be included, because SvelteKit has no way to know which domain the cookie belongs to. In these cases you will need to manually include the cookie using `handleFetch`:
src/hooks.server
```
/** @type {import('@sveltejs/kit').HandleFetch} */
export async function ```
function handleFetch({ event, request, fetch }: {
  event: any;
  request: any;
  fetch: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').HandleFetch}
handleFetch({ `event: any`event, `request: any`request, `fetch: any`fetch }) { if (`request: any`request.url.startsWith('https://api.my-domain.com/')) { `request: any`request.headers.set('cookie', `event: any`event.request.headers.get('cookie')); } return `fetch: any`fetch(`request: any`request); }`
```
```
import type { ```
type HandleFetch = (input: {
  event: RequestEvent;
  request: Request;
  fetch: typeof fetch;
}) => MaybePromise<Response>
```
`
The `handleFetch` hook allows you to modify (or replace) a `fetch` request that happens inside a `load` function that runs on the server (or during pre-rendering)
HandleFetch } from '@sveltejs/kit'; export const `const handleFetch: HandleFetch`handleFetch: ````
type HandleFetch = (input: {
  event: RequestEvent;
  request: Request;
  fetch: typeof fetch;
}) => MaybePromise<Response>
```
`
The `handleFetch` hook allows you to modify (or replace) a `fetch` request that happens inside a `load` function that runs on the server (or during pre-rendering)
HandleFetch = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `request: Request`request, ````
fetch: {
  (input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  (input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response>;
}
```
`fetch }) => { if (`request: Request`request.`Request.url: string`
Returns the URL of request as a string.
MDN Reference
url.`String.startsWith(searchString: string, position?: number): boolean`
Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
startsWith('https://api.my-domain.com/')) { `request: Request`request.`Request.headers: Headers`
Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the “Host” header.
MDN Reference
headers.`Headers.set(name: string, value: string): void`
MDN Reference
set('cookie', `event: RequestEvent<Partial<Record<string, string>>, string | null>`event.`RequestEvent<Partial<Record<string, string>>, string | null>.request: Request`
The original request object
request.`Request.headers: Headers`
Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the “Host” header.
MDN Reference
headers.`Headers.get(name: string): string | null`
MDN Reference
get('cookie')); } return `fetch: (input: string | URL | globalThis.Request, init?: RequestInit) => Promise<Response> (+1 overload)`
MDN Reference
fetch(`request: Request`request); };`
```

## Shared hooks
The following can be added to `src/hooks.server.js` _and_ `src/hooks.client.js`:
### handleError
If an unexpected error is thrown during loading or rendering, this function will be called with the `error`, `event`, `status` code and `message`. This allows for two things:
  * you can log the error
  * you can generate a custom representation of the error that is safe to show to users, omitting sensitive details like messages and stack traces. The returned value, which defaults to `{ message }`, becomes the value of `$page.error`.


For errors thrown from your code (or library code called by your code) the status will be 500 and the message will be “Internal Error”. While `error.message` may contain sensitive information that should not be exposed to users, `message` is safe (albeit meaningless to the average user).
To add more information to the `$page.error` object in a type-safe way, you can customize the expected shape by declaring an `App.Error` interface (which must include `message: string`, to guarantee sensible fallback behavior). This allows you to — for example — append a tracking ID for users to quote in correspondence with your technical support staff:
src/app.d
```
declare global {
	namespace App {
		interface interface App.Error
Defines the common shape of expected and unexpected errors. Expected errors are thrown using the error function. Unexpected errors are handled by the handleError hooks which should return this shape.


Error {
			App.Error.message: stringmessage: string;
			App.Error.errorId: stringerrorId: string;
		}
	}
}
export {};
```

src/hooks.server
```
import * as module "@sentry/sveltekit"Sentry from '@sentry/sveltekit';
module "@sentry/sveltekit"Sentry.const init: (opts: any) => voidinit({/*...*/})
/** @type {import('@sveltejs/kit').HandleServerError} */
export async function ```
function handleError(input: {
  error: unknown;
  event: RequestEvent;
  status: number;
  message: string;
}): MaybePromise<void | App.Error>
```
`
@type{import('@sveltejs/kit').HandleServerError}
handleError({ `error: unknown`error, `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `status: number`status, `message: string`message }) { const `const errorId: `${string}-${string}-${string}-${string}-${string}``errorId = `var crypto: Crypto`
MDN Reference
crypto.`Crypto.randomUUID(): `${string}-${string}-${string}-${string}-${string}``
Available only in secure contexts.
MDN Reference
randomUUID(); // example integration with https://sentry.io/ `module "@sentry/sveltekit"`Sentry.`const captureException: (error: any, opts: any) => void`captureException(`error: unknown`error, { ````
extra: {
  event: RequestEvent<Partial<Record<string, string>>, string | null>;
  errorId: `${string}-${string}-${string}-${string}-${string}`;
  status: number;
}
```
`extra: { `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `errorId: `${string}-${string}-${string}-${string}-${string}``errorId, `status: number`status } }); return { `App.Error.message: string`message: 'Whoops!', errorId }; }`
```
```
import * as module "@sentry/sveltekit"Sentry from '@sentry/sveltekit';
import type { ```
type HandleServerError = (input: {
  error: unknown;
  event: RequestEvent;
  status: number;
  message: string;
}) => MaybePromise<void | App.Error>
```
`
The server-side `handleError` hook runs when an unexpected error is thrown while responding to a request.
If an unexpected error is thrown during loading or rendering, this function will be called with the error and the event. Make sure that this function _never_ throws an error.
HandleServerError } from '@sveltejs/kit'; `module "@sentry/sveltekit"`Sentry.`const init: (opts: any) => void`init({/*...*/}) export const `const handleError: HandleServerError`handleError: ````
type HandleServerError = (input: {
  error: unknown;
  event: RequestEvent;
  status: number;
  message: string;
}) => MaybePromise<void | App.Error>
```
`
The server-side `handleError` hook runs when an unexpected error is thrown while responding to a request.
If an unexpected error is thrown during loading or rendering, this function will be called with the error and the event. Make sure that this function _never_ throws an error.
HandleServerError = async ({ `error: unknown`error, `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `status: number`status, `message: string`message }) => { const `const errorId: `${string}-${string}-${string}-${string}-${string}``errorId = `var crypto: Crypto`
MDN Reference
crypto.`Crypto.randomUUID(): `${string}-${string}-${string}-${string}-${string}``
Available only in secure contexts.
MDN Reference
randomUUID(); // example integration with https://sentry.io/ `module "@sentry/sveltekit"`Sentry.`const captureException: (error: any, opts: any) => void`captureException(`error: unknown`error, { ````
extra: {
  event: RequestEvent<Partial<Record<string, string>>, string | null>;
  errorId: `${string}-${string}-${string}-${string}-${string}`;
  status: number;
}
```
`extra: { `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `errorId: `${string}-${string}-${string}-${string}-${string}``errorId, `status: number`status } }); return { `App.Error.message: string`message: 'Whoops!', `errorId: `${string}-${string}-${string}-${string}-${string}``errorId }; };`
```

src/hooks.client
```
import * as module "@sentry/sveltekit"Sentry from '@sentry/sveltekit';
module "@sentry/sveltekit"Sentry.const init: (opts: any) => voidinit({/*...*/})
/** @type {import('@sveltejs/kit').HandleClientError} */
export async function ```
function handleError(input: {
  error: unknown;
  event: NavigationEvent;
  status: number;
  message: string;
}): MaybePromise<void | App.Error>
```
`
@type{import('@sveltejs/kit').HandleClientError}
handleError({ `error: unknown`error, `event: NavigationEvent<Partial<Record<string, string>>, string | null>`event, `status: number`status, `message: string`message }) { const `const errorId: `${string}-${string}-${string}-${string}-${string}``errorId = `var crypto: Crypto`
MDN Reference
crypto.`Crypto.randomUUID(): `${string}-${string}-${string}-${string}-${string}``
Available only in secure contexts.
MDN Reference
randomUUID(); // example integration with https://sentry.io/ `module "@sentry/sveltekit"`Sentry.`const captureException: (error: any, opts: any) => void`captureException(`error: unknown`error, { ````
extra: {
  event: NavigationEvent<Partial<Record<string, string>>, string | null>;
  errorId: `${string}-${string}-${string}-${string}-${string}`;
  status: number;
}
```
`extra: { `event: NavigationEvent<Partial<Record<string, string>>, string | null>`event, `errorId: `${string}-${string}-${string}-${string}-${string}``errorId, `status: number`status } }); return { `App.Error.message: string`message: 'Whoops!', errorId }; }`
```
```
import * as module "@sentry/sveltekit"Sentry from '@sentry/sveltekit';
import type { ```
type HandleClientError = (input: {
  error: unknown;
  event: NavigationEvent;
  status: number;
  message: string;
}) => MaybePromise<void | App.Error>
```
`
The client-side `handleError` hook runs when an unexpected error is thrown while navigating.
If an unexpected error is thrown during loading or the following render, this function will be called with the error and the event. Make sure that this function _never_ throws an error.
HandleClientError } from '@sveltejs/kit'; `module "@sentry/sveltekit"`Sentry.`const init: (opts: any) => void`init({/*...*/}) export const `const handleError: HandleClientError`handleError: ````
type HandleClientError = (input: {
  error: unknown;
  event: NavigationEvent;
  status: number;
  message: string;
}) => MaybePromise<void | App.Error>
```
`
The client-side `handleError` hook runs when an unexpected error is thrown while navigating.
If an unexpected error is thrown during loading or the following render, this function will be called with the error and the event. Make sure that this function _never_ throws an error.
HandleClientError = async ({ `error: unknown`error, `event: NavigationEvent<Partial<Record<string, string>>, string | null>`event, `status: number`status, `message: string`message }) => { const `const errorId: `${string}-${string}-${string}-${string}-${string}``errorId = `var crypto: Crypto`
MDN Reference
crypto.`Crypto.randomUUID(): `${string}-${string}-${string}-${string}-${string}``
Available only in secure contexts.
MDN Reference
randomUUID(); // example integration with https://sentry.io/ `module "@sentry/sveltekit"`Sentry.`const captureException: (error: any, opts: any) => void`captureException(`error: unknown`error, { ````
extra: {
  event: NavigationEvent<Partial<Record<string, string>>, string | null>;
  errorId: `${string}-${string}-${string}-${string}-${string}`;
  status: number;
}
```
`extra: { `event: NavigationEvent<Partial<Record<string, string>>, string | null>`event, `errorId: `${string}-${string}-${string}-${string}-${string}``errorId, `status: number`status } }); return { `App.Error.message: string`message: 'Whoops!', `errorId: `${string}-${string}-${string}-${string}-${string}``errorId }; };`
```

> In `src/hooks.client.js`, the type of `handleError` is `HandleClientError` instead of `HandleServerError`, and `event` is a `NavigationEvent` rather than a `RequestEvent`.
This function is not called for _expected_ errors (those thrown with the `error` function imported from `@sveltejs/kit`).
During development, if an error occurs because of a syntax error in your Svelte code, the passed in error has a `frame` property appended highlighting the location of the error.
> Make sure that `handleError` _never_ throws an error
### init
This function runs once, when the server is created or the app starts in the browser, and is a useful place to do asynchronous work such as initializing a database connection.
> If your environment supports top-level await, the `init` function is really no different from writing your initialisation logic at the top level of the module, but some environments — most notably, Safari — don’t.
src/hooks.server
```
import * as import dbdb from '$lib/server/database';
/** @type {import('@sveltejs/kit').ServerInit} */
export async function function init(): Promise<void>
@type{import('@sveltejs/kit').ServerInit}
init() {
	await import dbdb.connect();
}
```
```
import * as import dbdb from '$lib/server/database';
import type { type ServerInit = () => MaybePromise<void>
The init will be invoked before the server responds to its first request


@since2.10.0
ServerInit } from '@sveltejs/kit';
export const const init: ServerInitinit: type ServerInit = () => MaybePromise<void>
The init will be invoked before the server responds to its first request


@since2.10.0
ServerInit = async () => {
	await import dbdb.connect();
};
```

> In the browser, asynchronous work in `init` will delay hydration, so be mindful of what you put in there.
## Universal hooks
The following can be added to `src/hooks.js`. Universal hooks run on both server and client (not to be confused with shared hooks, which are environment-specific).
### reroute
This function runs before `handle` and allows you to change how URLs are translated into routes. The returned pathname (which defaults to `url.pathname`) is used to select the route and its parameters.
For example, you might have a `src/routes/[[lang]]/about/+page.svelte` page, which should be accessible as `/en/about` or `/de/ueber-uns` or `/fr/a-propos`. You could implement this with `reroute`:
src/hooks
```

/** @type {Record<string, string>} */
const ```
const translated: {
  '/en/about': string;
  '/de/ueber-uns': string;
  '/fr/a-propos': string;
}
```
`
@type{Record<string, string>}
translated = { '/en/about': '/en/about', '/de/ueber-uns': '/de/about', '/fr/a-propos': '/fr/about', }; /** @type {import('@sveltejs/kit').Reroute} */ export function ````
function reroute({ url }: {
  url: any;
}): any
```
`
@type{import('@sveltejs/kit').Reroute}
reroute({ `url: any`url }) { if (`url: any`url.pathname in ````
const translated: {
  '/en/about': string;
  '/de/ueber-uns': string;
  '/fr/a-propos': string;
}
```
`
@type{Record<string, string>}
translated) { return ````
const translated: {
  '/en/about': string;
  '/de/ueber-uns': string;
  '/fr/a-propos': string;
}
```
`
@type{Record<string, string>}
translated[`url: any`url.pathname]; } }`
```
```
import type { ```
type Reroute = (event: {
  url: URL;
}) => void | string
```
`
The `reroute` hook allows you to modify the URL before it is used to determine which route to render.
@since2.3.0
Reroute } from '@sveltejs/kit'; const `const translated: Record<string, string>`translated: `type Record<K extends keyof any, T> = { [P in K]: T; }`
Construct a type with a set of properties K of type T
Record<string, string> = { '/en/about': '/en/about', '/de/ueber-uns': '/de/about', '/fr/a-propos': '/fr/about', }; export const `const reroute: Reroute`reroute: ````
type Reroute = (event: {
  url: URL;
}) => void | string
```
`
The `reroute` hook allows you to modify the URL before it is used to determine which route to render.
@since2.3.0
Reroute = ({ `url: URL`url }) => { if (`url: URL`url.`URL.pathname: string`
MDN Reference
pathname in `const translated: Record<string, string>`translated) { return `const translated: Record<string, string>`translated[`url: URL`url.`URL.pathname: string`
MDN Reference
pathname]; } };`
```

The `lang` parameter will be correctly derived from the returned pathname.
Using `reroute` will _not_ change the contents of the browser’s address bar, or the value of `event.url`.
### transport
This is a collection of _transporters_ , which allow you to pass custom types — returned from `load` and form actions — across the server/client boundary. Each transporter contains an `encode` function, which encodes values on the server (or returns `false` for anything that isn’t an instance of the type) and a corresponding `decode` function:
src/hooks
```
import { import VectorVector } from '$lib/math';
/** @type {import('@sveltejs/kit').Transport} */
export const ```
const transport: {
  Vector: {
    encode: (value: any) => false | any[];
    decode: ([x, y]: [any, any]) => any;
  };
}
```
`
@type{import('@sveltejs/kit').Transport}
transport = { ````
type Vector: {
  encode: (value: any) => false | any[];
  decode: ([x, y]: [any, any]) => any;
}
```
`Vector: { `encode: (value: any) => false | any[]`encode: (`value: any`value) => `value: any`value instanceof `import Vector`Vector && [`value: any`value.x, `value: any`value.y], `decode: ([x, y]: [any, any]) => any`decode: ([`x: any`x, `y: any`y]) => new `import Vector`Vector(`x: any`x, `y: any`y) } };`
```
```
import { import VectorVector } from '$lib/math';
import type { ```
type Transport = {
  [x: string]: Transporter<any, any>;
}
```
`
The `transport` hook allows you to transport custom types across the server/client boundary.
Each transporter has a pair of `encode` and `decode` functions. On the server, `encode` determines whether a value is an instance of the custom type and, if so, returns a non-falsy encoding of the value which can be an object or an array (or `false` otherwise).
In the browser, `decode` turns the encoding back into an instance of the custom type.
```
import type { Transport } from '@sveltejs/kit';
declare class MyCustomType {
	data: any
}
// hooks.js
export const transport: Transport = {
	MyCustomType: {
		encode: (value) => value instanceof MyCustomType &#x26;&#x26; [value.data],
		decode: ([data]) => new MyCustomType(data)
	}
};
```

@since2.11.0
Transport } from '@sveltejs/kit'; export const `const transport: Transport`transport: ````
type Transport = {
  [x: string]: Transporter<any, any>;
}
```
`
The `transport` hook allows you to transport custom types across the server/client boundary.
Each transporter has a pair of `encode` and `decode` functions. On the server, `encode` determines whether a value is an instance of the custom type and, if so, returns a non-falsy encoding of the value which can be an object or an array (or `false` otherwise).
In the browser, `decode` turns the encoding back into an instance of the custom type.
```
import type { Transport } from '@sveltejs/kit';
declare class MyCustomType {
	data: any
}
// hooks.js
export const transport: Transport = {
	MyCustomType: {
		encode: (value) => value instanceof MyCustomType &#x26;&#x26; [value.data],
		decode: ([data]) => new MyCustomType(data)
	}
};
```

@since2.11.0
Transport = { ````
type Vector: {
  encode: (value: any) => false | any[];
  decode: ([x, y]: any) => any;
}
```
`Vector: { `Transporter<any, any>.encode: (value: any) => any`encode: (`value: any`value) => `value: any`value instanceof `import Vector`Vector && [`value: any`value.x, `value: any`value.y], `Transporter<any, any>.decode: (data: any) => any`decode: ([`x: any`x, `y: any`y]) => new `import Vector`Vector(`x: any`x, `y: any`y) } };`
```

## Further reading
  * Tutorial: Hooks


Edit this page on GitHub
previous next
Advanced routing Errors
