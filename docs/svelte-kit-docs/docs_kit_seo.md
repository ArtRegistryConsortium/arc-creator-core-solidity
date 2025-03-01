Skip to main content
The most important aspect of SEO is to create high-quality content that is widely linked to from around the web. However, there are a few technical considerations for building sites that rank well.
## Out of the box
### SSR
While search engines have got better in recent years at indexing content that was rendered with client-side JavaScript, server-side rendered content is indexed more frequently and reliably. SvelteKit employs SSR by default, and while you can disable it in `handle`, you should leave it on unless you have a good reason not to.
> SvelteKit’s rendering is highly configurable and you can implement dynamic rendering if necessary. It’s not generally recommended, since SSR has other benefits beyond SEO.
### Performance
Signals such as Core Web Vitals impact search engine ranking. Because Svelte and SvelteKit introduce minimal overhead, it’s easier to build high performance sites. You can test your site’s performance using Google’s PageSpeed Insights or Lighthouse. Read the performance page for more details.
### Normalized URLs
SvelteKit redirects pathnames with trailing slashes to ones without (or vice versa depending on your configuration), as duplicate URLs are bad for SEO.
## Manual setup
### <title> and <meta>
Every page should have well-written and unique `<title>` and `<meta name="description">` elements inside a `<svelte:head>`. Guidance on how to write descriptive titles and descriptions, along with other suggestions on making content understandable by search engines, can be found on Google’s Lighthouse SEO audits documentation.
> A common pattern is to return SEO-related `data` from page `load` functions, then use it (as `page.data`) in a `<svelte:head>` in your root layout.
### Sitemaps
Sitemaps help search engines prioritize pages within your site, particularly when you have a large amount of content. You can create a sitemap dynamically using an endpoint:
src/routes/sitemap.xml/+server
```
export async function function GET(): Promise<Response>GET() {
	return new var Response: new (body?: BodyInit | null, init?: ResponseInit) => Response
This Fetch API interface represents the response to a request.


MDN Reference


Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<!-- <url> elements go here -->
		</urlset>`.String.trim(): string
Removes the leading and trailing white space and line terminator characters from a string.


trim(),
		{
			ResponseInit.headers?: HeadersInit | undefinedheaders: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
```

### AMP
An unfortunate reality of modern web development is that it is sometimes necessary to create an Accelerated Mobile Pages (AMP) version of your site. In SvelteKit this can be done by setting the `inlineStyleThreshold` option...
svelte.config
```
/** @type {import('@sveltejs/kit').Config} */
const ```
const config: {
  kit: {
    inlineStyleThreshold: number;
  };
}
```
`
@type{import('@sveltejs/kit').Config}
config = { ````
kit: {
  inlineStyleThreshold: number;
}
```
`kit: { // since <link rel="stylesheet"> isn't // allowed, inline all styles `inlineStyleThreshold: number`inlineStyleThreshold: `var Infinity: number`Infinity } }; export default ````
const config: {
  kit: {
    inlineStyleThreshold: number;
  };
}
```
`
@type{import('@sveltejs/kit').Config}
config;`
```

...disabling `csr` in your root `+layout.js` / `+layout.server.js`...
src/routes/+layout.server
```
export const const csr: falsecsr = false;
```

...adding `amp` to your `app.html`
```
<html amp>
...
```

...and transforming the HTML using `transformPageChunk` along with `transform` imported from `@sveltejs/amp`:
src/hooks.server
```
import * as import ampamp from '@sveltejs/amp';
/** @type {import('@sveltejs/kit').Handle} */
export async function ```
function handle({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
handle({ `event: any`event, `resolve: any`resolve }) { let `let buffer: string`buffer = ''; return await `resolve: any`resolve(`event: any`event, { ````
transformPageChunk: ({ html, done }: {
  html: any;
  done: any;
}) => string | undefined
```
`transformPageChunk: ({ `html: any`html, `done: any`done }) => { `let buffer: string`buffer += `html: any`html; if (`done: any`done) return `import amp`amp.`function transform(html: string): string`transform(`let buffer: string`buffer); } }); }`
```
```
import * as import ampamp from '@sveltejs/amp';
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
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { let `let buffer: string`buffer = ''; return await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
ResolveOptions.transformPageChunk?(input: {
  html: string;
  done: boolean;
}): MaybePromise<string | undefined>
```
`
Applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
@paraminput the html chunk and the info if this is the last chunk
transformPageChunk: ({ `html: string`html, `done: boolean`done }) => { `let buffer: string`buffer += `html: string`html; if (`done: boolean`done) return `import amp`amp.`function transform(html: string): string`transform(`let buffer: string`buffer); } }); };`
```

To prevent shipping any unused CSS as a result of transforming the page to amp, we can use `dropcss`:
src/hooks.server
```
import * as import ampamp from '@sveltejs/amp';
import module "dropcss"dropcss from 'dropcss';
/** @type {import('@sveltejs/kit').Handle} */
export async function ```
function handle(input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}): MaybePromise<...>
```
`
@type{import('@sveltejs/kit').Handle}
handle({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) { let `let buffer: string`buffer = ''; return await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
ResolveOptions.transformPageChunk?(input: {
  html: string;
  done: boolean;
}): MaybePromise<string | undefined>
```
`
Applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
@paraminput the html chunk and the info if this is the last chunk
transformPageChunk: ({ `html: string`html, `done: boolean`done }) => { `let buffer: string`buffer += `html: string`html; if (`done: boolean`done) { let `let css: string`css = ''; const `const markup: string`markup = `import amp`amp .`function transform(html: string): string`transform(`let buffer: string`buffer) .`String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)`
Replaces text in a string, using a regular expression or search string.
@paramsearchValue A string or regular expression to search for.
@paramreplaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
replace('⚡', 'amp') // dropcss can't handle this character .````
String.replace(searchValue: {
  [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
}, replacer: (substring: string, ...args: any[]) => string): string (+3 overloads)
```
`
Replaces text in a string, using an object that supports replacement within a string.
@paramsearchValue A object can search for and replace matches within a string.
@paramreplacer A function that returns the replacement text.
replace(/<style amp-custom([^>]*?)>([^]+?)<\/style>/, (`match: string`match, `attributes: any`attributes, `contents: any`contents) => { `let css: string`css = `contents: any`contents; return `<style amp-custom${`attributes: any`attributes}></style>`; }); `let css: string`css = `module "dropcss"`dropcss({ `css: string`css, `html: string`html: `const markup: string`markup }).css; return `const markup: string`markup.`String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)`
Replaces text in a string, using a regular expression or search string.
@paramsearchValue A string or regular expression to search for.
@paramreplaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
replace('</style>', `${`let css: string`css}</style>`); } } }); } `
```
```
import * as import ampamp from '@sveltejs/amp';
import module "dropcss"dropcss from 'dropcss';
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
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { let `let buffer: string`buffer = ''; return await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
ResolveOptions.transformPageChunk?(input: {
  html: string;
  done: boolean;
}): MaybePromise<string | undefined>
```
`
Applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
@paraminput the html chunk and the info if this is the last chunk
transformPageChunk: ({ `html: string`html, `done: boolean`done }) => { `let buffer: string`buffer += `html: string`html; if (`done: boolean`done) { let `let css: string`css = ''; const `const markup: string`markup = `import amp`amp .`function transform(html: string): string`transform(`let buffer: string`buffer) .`String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)`
Replaces text in a string, using a regular expression or search string.
@paramsearchValue A string or regular expression to search for.
@paramreplaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
replace('⚡', 'amp') // dropcss can't handle this character .````
String.replace(searchValue: {
  [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
}, replacer: (substring: string, ...args: any[]) => string): string (+3 overloads)
```
`
Replaces text in a string, using an object that supports replacement within a string.
@paramsearchValue A object can search for and replace matches within a string.
@paramreplacer A function that returns the replacement text.
replace(/<style amp-custom([^>]*?)>([^]+?)<\/style>/, (`match: string`match, `attributes: any`attributes, `contents: any`contents) => { `let css: string`css = `contents: any`contents; return `<style amp-custom${`attributes: any`attributes}></style>`; }); `let css: string`css = `module "dropcss"`dropcss({ `css: string`css, `html: string`html: `const markup: string`markup }).css; return `const markup: string`markup.`String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)`
Replaces text in a string, using a regular expression or search string.
@paramsearchValue A string or regular expression to search for.
@paramreplaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
replace('</style>', `${`let css: string`css}</style>`); } } }); };`
```

> It’s a good idea to use the `handle` hook to validate the transformed HTML using `amphtml-validator`, but only if you’re prerendering pages since it’s very slow.
Edit this page on GitHub
previous next
Accessibility Frequently asked questions
