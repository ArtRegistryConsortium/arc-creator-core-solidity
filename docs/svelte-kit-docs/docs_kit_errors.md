Skip to main content
Errors are an inevitable fact of software development. SvelteKit handles errors differently depending on where they occur, what kind of errors they are, and the nature of the incoming request.
## Error objects
SvelteKit distinguishes between expected and unexpected errors, both of which are represented as simple `{ message: string }` objects by default.
You can add additional properties, like a `code` or a tracking `id`, as shown in the examples below. (When using TypeScript this requires you to redefine the `Error` type as described in type safety).
## Expected errors
An _expected_ error is one created with the `error` helper imported from `@sveltejs/kit`:
src/routes/blog/[slug]/+page.server
```
import { function error(status: number, body: App.Error): never (+1 overload)
Throws an error with a HTTP status code and an optional message.
When called during request handling, this will cause SvelteKit to
return an error response without invoking handleError.
Make sure you’re not catching the thrown error, which would prevent SvelteKit from handling it.


@paramstatus The HTTP status code. Must be in the range 400-599.
@parambody An object that conforms to the App.Error type. If a string is passed, it will be used as the message property.
@throwsHttpError This error instructs SvelteKit to initiate HTTP error handling.
@throwsError If the provided status is invalid (not between 400 and 599).
error } from '@sveltejs/kit';
import * as module "$lib/server/database"db from '$lib/server/database';
/** @type {import('./$types').PageServerLoad} */
export async function function load(event: ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>): MaybePromise<void | Record<string, any>>
@type{import('./$types').PageServerLoad}
load({ params: Record<string, any>
The parameters of the current route - e.g. for a route like /blog/[slug], a { slug: string } object


params }) {
	const ```
const post: {
  title: string;
  content: string;
} | undefined
```
`post = await `module "$lib/server/database"`db.````
function getPost(slug: string): Promise<{
  title: string;
  content: string;
} | undefined>
```
`getPost(`params: Record<string, any>`
The parameters of the current route - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object
params.slug); if (!````
const post: {
  title: string;
  content: string;
} | undefined
```
`post) { `function error(status: number, body: App.Error): never (+1 overload)`
Throws an error with a HTTP status code and an optional message. When called during request handling, this will cause SvelteKit to return an error response without invoking `handleError`. Make sure you’re not catching the thrown error, which would prevent SvelteKit from handling it.
@paramstatus The HTTP status code. Must be in the range 400-599.
@parambody An object that conforms to the App.Error type. If a string is passed, it will be used as the message property.
@throwsHttpError This error instructs SvelteKit to initiate HTTP error handling.
@throwsError If the provided status is invalid (not between 400 and 599).
error(404, { `App.Error.message: string`message: 'Not found' }); } return { ````
post: {
  title: string;
  content: string;
}
```
`post }; }`
```
```
import { function error(status: number, body: App.Error): never (+1 overload)
Throws an error with a HTTP status code and an optional message.
When called during request handling, this will cause SvelteKit to
return an error response without invoking handleError.
Make sure you’re not catching the thrown error, which would prevent SvelteKit from handling it.


@paramstatus The HTTP status code. Must be in the range 400-599.
@parambody An object that conforms to the App.Error type. If a string is passed, it will be used as the message property.
@throwsHttpError This error instructs SvelteKit to initiate HTTP error handling.
@throwsError If the provided status is invalid (not between 400 and 599).
error } from '@sveltejs/kit';
import * as module "$lib/server/database"db from '$lib/server/database';
import type { type PageServerLoad = (event: ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>PageServerLoad } from './$types';
export const const load: PageServerLoadload: type PageServerLoad = (event: ServerLoadEvent<Record<string, any>, Record<string, any>, string | null>) => MaybePromise<void | Record<string, any>>PageServerLoad = async ({ params: Record<string, any>
The parameters of the current route - e.g. for a route like /blog/[slug], a { slug: string } object


params }) => {
	const ```
const post: {
  title: string;
  content: string;
} | undefined
```
`post = await `module "$lib/server/database"`db.````
function getPost(slug: string): Promise<{
  title: string;
  content: string;
} | undefined>
```
`getPost(`params: Record<string, any>`
The parameters of the current route - e.g. for a route like `/blog/[slug]`, a `{ slug: string }` object
params.slug); if (!````
const post: {
  title: string;
  content: string;
} | undefined
```
`post) { `function error(status: number, body: App.Error): never (+1 overload)`
Throws an error with a HTTP status code and an optional message. When called during request handling, this will cause SvelteKit to return an error response without invoking `handleError`. Make sure you’re not catching the thrown error, which would prevent SvelteKit from handling it.
@paramstatus The HTTP status code. Must be in the range 400-599.
@parambody An object that conforms to the App.Error type. If a string is passed, it will be used as the message property.
@throwsHttpError This error instructs SvelteKit to initiate HTTP error handling.
@throwsError If the provided status is invalid (not between 400 and 599).
error(404, { `App.Error.message: string`message: 'Not found' }); } return { ````
post: {
  title: string;
  content: string;
}
```
`post }; };`
```

This throws an exception that SvelteKit catches, causing it to set the response status code to 404 and render an `+error.svelte` component, where `page.error` is the object provided as the second argument to `error(...)`.
src/routes/+error
```
<script>
	import { page } from '$app/state';
</script>
<h1>{page.error.message}</h1>
```
```
<script lang="ts">
	import { page } from '$app/state';
</script>
<h1>{page.error.message}</h1>
```

> Legacy mode
> `$app/state` was added in SvelteKit 2.12. If you’re using an earlier version or are using Svelte 4, use `$app/stores` instead.
You can add extra properties to the error object if needed...
```
function error(status: number, body: App.Error): never (+1 overload)
Throws an error with a HTTP status code and an optional message.
When called during request handling, this will cause SvelteKit to
return an error response without invoking handleError.
Make sure you’re not catching the thrown error, which would prevent SvelteKit from handling it.


@paramstatus The HTTP status code. Must be in the range 400-599.
@parambody An object that conforms to the App.Error type. If a string is passed, it will be used as the message property.
@throwsHttpError This error instructs SvelteKit to initiate HTTP error handling.
@throwsError If the provided status is invalid (not between 400 and 599).
error(404, {
	App.Error.message: stringmessage: 'Not found',
	App.Error.code: stringcode: 'NOT_FOUND'
});
```

...otherwise, for convenience, you can pass a string as the second argument:
```
error(404, { message: 'Not found' });
```
function error(status: number, body?: {
  message: string;
} extends App.Error ? App.Error | string | undefined : never): never (+1 overload)
```
`
Throws an error with a HTTP status code and an optional message. When called during request handling, this will cause SvelteKit to return an error response without invoking `handleError`. Make sure you’re not catching the thrown error, which would prevent SvelteKit from handling it.
@paramstatus The HTTP status code. Must be in the range 400-599.
@parambody An object that conforms to the App.Error type. If a string is passed, it will be used as the message property.
@throwsHttpError This error instructs SvelteKit to initiate HTTP error handling.
@throwsError If the provided status is invalid (not between 400 and 599).
error(404, 'Not found');`
```

> In SvelteKit 1.x you had to `throw` the `error` yourself
## Unexpected errors
An _unexpected_ error is any other exception that occurs while handling a request. Since these can contain sensitive information, unexpected error messages and stack traces are not exposed to users.
By default, unexpected errors are printed to the console (or, in production, your server logs), while the error that is exposed to the user has a generic shape:
```
{ "message": "Internal Error" }
```

Unexpected errors will go through the `handleError` hook, where you can add your own error handling — for example, sending errors to a reporting service, or returning a custom error object which becomes `$page.error`.
## Responses
If an error occurs inside `handle` or inside a `+server.js` request handler, SvelteKit will respond with either a fallback error page or a JSON representation of the error object, depending on the request’s `Accept` headers.
You can customise the fallback error page by adding a `src/error.html` file:
```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>%sveltekit.error.message%</title>
	</head>
	<body>
		<h1>My custom error page</h1>
		<p>Status: %sveltekit.status%</p>
		<p>Message: %sveltekit.error.message%</p>
	</body>
</html>
```

SvelteKit will replace `%sveltekit.status%` and `%sveltekit.error.message%` with their corresponding values.
If the error instead occurs inside a `load` function while rendering a page, SvelteKit will render the `+error.svelte` component nearest to where the error occurred. If the error occurs inside a `load` function in `+layout(.server).js`, the closest error boundary in the tree is an `+error.svelte` file _above_ that layout (not next to it).
The exception is when the error occurs inside the root `+layout.js` or `+layout.server.js`, since the root layout would ordinarily _contain_ the `+error.svelte` component. In this case, SvelteKit uses the fallback error page.
## Type safety
If you’re using TypeScript and need to customize the shape of errors, you can do so by declaring an `App.Error` interface in your app (by convention, in `src/app.d.ts`, though it can live anywhere that TypeScript can ‘see’):
src/app.d
```
declare global {
	namespace App {
		interface interface App.Error
Defines the common shape of expected and unexpected errors. Expected errors are thrown using the error function. Unexpected errors are handled by the handleError hooks which should return this shape.


Error {
			App.Error.code: stringcode: string;
			App.Error.id: stringid: string;
		}
	}
}
export {};
```

This interface always includes a `message: string` property.
## Further reading
  * Tutorial: Errors and redirects
  * Tutorial: Hooks


Edit this page on GitHub
previous next
Hooks Link options
