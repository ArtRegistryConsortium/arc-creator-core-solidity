Skip to main content
SvelteKit strives to provide an accessible platform for your app by default. Svelte’s compile-time accessibility checks will also apply to any SvelteKit application you build.
Here’s how SvelteKit’s built-in accessibility features work and what you need to do to help these features to work as well as possible. Keep in mind that while SvelteKit provides an accessible foundation, you are still responsible for making sure your application code is accessible. If you’re new to accessibility, see the “further reading” section of this guide for additional resources.
We recognize that accessibility can be hard to get right. If you want to suggest improvements to how SvelteKit handles accessibility, please open a GitHub issue.
## Route announcements
In traditional server-rendered applications, every navigation (e.g. clicking on an `<a>` tag) triggers a full page reload. When this happens, screen readers and other assistive technology will read out the new page’s title so that users understand that the page has changed.
Since navigation between pages in SvelteKit happens without reloading the page (known as client-side routing), SvelteKit injects a live region onto the page that will read out the new page name after each navigation. This determines the page name to announce by inspecting the `<title>` element.
Because of this behavior, every page in your app should have a unique, descriptive title. In SvelteKit, you can do this by placing a `<svelte:head>` element on each page:
src/routes/+page
```
<svelte:head>
	<title>Todo List</title>
</svelte:head>
```

This will allow screen readers and other assistive technology to identify the new page after a navigation occurs. Providing a descriptive title is also important for SEO.
## Focus management
In traditional server-rendered applications, every navigation will reset focus to the top of the page. This ensures that people browsing the web with a keyboard or screen reader will start interacting with the page from the beginning.
To simulate this behavior during client-side routing, SvelteKit focuses the `<body>` element after each navigation and enhanced form submission. There is one exception - if an element with the `autofocus` attribute is present, SvelteKit will focus that element instead. Make sure to consider the implications for assistive technology when using that attribute.
If you want to customize SvelteKit’s focus management, you can use the `afterNavigate` hook:
```
import { function afterNavigate(callback: (navigation: import("@sveltejs/kit").AfterNavigate) => void): void
A lifecycle function that runs the supplied callback when the current component mounts, and also whenever we navigate to a new URL.


afterNavigate must be called during a component initialization. It remains active as long as the component is mounted.


afterNavigate } from '$app/navigation';
function afterNavigate(callback: (navigation: import("@sveltejs/kit").AfterNavigate) => void): void
A lifecycle function that runs the supplied callback when the current component mounts, and also whenever we navigate to a new URL.


afterNavigate must be called during a component initialization. It remains active as long as the component is mounted.


afterNavigate(() => {
	/** @type {HTMLElement | null} */
	const const to_focus: Element | null
@type{HTMLElement | null}
to_focus = var document: Document
MDN Reference


document.ParentNode.querySelector<Element>(selectors: string): Element | null (+4 overloads)
Returns the first element that is a descendant of node that matches selectors.


MDN Reference


querySelector('.focus-me');
	const to_focus: Element | null
@type{HTMLElement | null}
to_focus?.focus();
});
```

You can also programmatically navigate to a different page using the `goto` function. By default, this will have the same client-side routing behavior as clicking on a link. However, `goto` also accepts a `keepFocus` option that will preserve the currently-focused element instead of resetting focus. If you enable this option, make sure the currently-focused element still exists on the page after navigation. If the element no longer exists, the user’s focus will be lost, making for a confusing experience for assistive technology users.
## The “lang” attribute
By default, SvelteKit’s page template sets the default language of the document to English. If your content is not in English, you should update the `<html>` element in `src/app.html` to have the correct `lang` attribute. This will ensure that any assistive technology reading the document uses the correct pronunciation. For example, if your content is in German, you should update `app.html` to the following:
src/app
```
<html lang="de">
```

If your content is available in multiple languages, you should set the `lang` attribute based on the language of the current page. You can do this with SvelteKit’s handle hook:
src/app
```
<html lang="%lang%">
```

src/hooks.server
```
/** @type {import('@sveltejs/kit').Handle} */
export function ```
function handle({ event, resolve }: {
  event: any;
  resolve: any;
}): any
```
`
@type{import('@sveltejs/kit').Handle}
handle({ `event: any`event, `resolve: any`resolve }) { return `resolve: any`resolve(`event: any`event, { ````
transformPageChunk: ({ html }: {
  html: any;
}) => any
```
`transformPageChunk: ({ `html: any`html }) => `html: any`html.replace('%lang%', `function get_lang(event: any): string`
@paramevent
get_lang(`event: any`event)) }); }`
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
Handle = ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { return `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
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
replace('%lang%', `function get_lang(event: any): string`
@paramevent
get_lang(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event)) }); };`
```

## Further reading
For the most part, building an accessible SvelteKit app is the same as building an accessible web app. You should be able to apply information from the following general accessibility resources to any web experience you build:
  * MDN Web Docs: Accessibility
  * The A11y Project
  * How to Meet WCAG (Quick Reference)


Edit this page on GitHub
previous next
Images SEO
