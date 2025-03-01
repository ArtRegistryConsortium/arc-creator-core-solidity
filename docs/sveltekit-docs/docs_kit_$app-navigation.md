Skip to main content
```
import {
	function afterNavigate(callback: (navigation: import("@sveltejs/kit").AfterNavigate) => void): void
A lifecycle function that runs the supplied callback when the current component mounts, and also whenever we navigate to a new URL.


afterNavigate must be called during a component initialization. It remains active as long as the component is mounted.


afterNavigate,
	function beforeNavigate(callback: (navigation: import("@sveltejs/kit").BeforeNavigate) => void): void
A navigation interceptor that triggers before we navigate to a URL, whether by clicking a link, calling goto(...), or using the browser back/forward controls.


Calling cancel() will prevent the navigation from completing. If navigation.type === 'leave' — meaning the user is navigating away from the app (or closing the tab) — calling cancel will trigger the native browser unload confirmation dialog. In this case, the navigation may or may not be cancelled depending on the user’s response.


When a navigation isn’t to a SvelteKit-owned route (and therefore controlled by SvelteKit’s client-side router), navigation.to.route.id will be null.


If the navigation will (if not cancelled) cause the document to unload — in other words 'leave' navigations and 'link' navigations where navigation.to.route === null — navigation.willUnload is true.


beforeNavigate must be called during a component initialization. It remains active as long as the component is mounted.


beforeNavigate,
	function disableScrollHandling(): void
If called when the page is being updated following a navigation (in onMount or afterNavigate or an action, for example), this disables SvelteKit’s built-in scroll handling.
This is generally discouraged, since it breaks user expectations.


disableScrollHandling,
	```
function goto(url: string | URL, opts?: {
  replaceState?: boolean | undefined;
  noScroll?: boolean | undefined;
  keepFocus?: boolean | undefined;
  invalidateAll?: boolean | undefined;
  state?: App.PageState | undefined;
} | undefined): Promise<void>
```
`
Allows you to navigate programmatically to a given route, with options such as keeping the current element focused. Returns a Promise that resolves when SvelteKit navigates (or fails to navigate, in which case the promise rejects) to the specified `url`.
For external URLs, use `window.location = url` instead of calling `goto(url)`.
@paramurl Where to navigate to. Note that if you've set `config.kit.paths.base` and the URL is root-relative, you need to prepend the base path if you want to navigate within the app.
@paramopts Options related to the navigation
goto, `function invalidate(resource: string | URL | ((url: URL) => boolean)): Promise<void>`
Causes any `load` functions belonging to the currently active page to re-run if they depend on the `url` in question, via `fetch` or `depends`. Returns a `Promise` that resolves when the page is subsequently updated.
If the argument is given as a `string` or `URL`, it must resolve to the same URL that was passed to `fetch` or `depends` (including query parameters). To create a custom identifier, use a string beginning with `[a-z]+:` (e.g. `custom:state`) — this is a valid URL.
The `function` argument can be used define a custom predicate. It receives the full `URL` and causes `load` to rerun if `true` is returned. This can be useful if you want to invalidate based on a pattern instead of a exact match.
```
// Example: Match '/path' regardless of the query parameters
import { invalidate } from '$app/navigation';
invalidate((url) => url.pathname === '/path');
```

@paramresource The invalidated URL
invalidate, `function invalidateAll(): Promise<void>`
Causes all `load` functions belonging to the currently active page to re-run. Returns a `Promise` that resolves when the page is subsequently updated.
invalidateAll, `function onNavigate(callback: (navigation: import("@sveltejs/kit").OnNavigate) => MaybePromise<void | (() => void)>): void`
A lifecycle function that runs the supplied `callback` immediately before we navigate to a new URL except during full-page navigations.
If you return a `Promise`, SvelteKit will wait for it to resolve before completing the navigation. This allows you to — for example — use `document.startViewTransition`. Avoid promises that are slow to resolve, since navigation will appear stalled to the user.
If a function (or a `Promise` that resolves to a function) is returned from the callback, it will be called once the DOM has updated.
`onNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
onNavigate, `function preloadCode(pathname: string): Promise<void>`
Programmatically imports the code for routes that haven’t yet been fetched. Typically, you might call this to speed up subsequent navigation.
You can specify routes by any matching pathname such as `/about` (to match `src/routes/about/+page.svelte`) or `/blog/*` (to match `src/routes/blog/[slug]/+page.svelte`).
Unlike `preloadData`, this won’t call `load` functions. Returns a Promise that resolves when the modules have been imported.
preloadCode, ````
function preloadData(href: string): Promise<{
  type: "loaded";
  status: number;
  data: Record<string, any>;
} | {
  type: "redirect";
  location: string;
}>
```
`
Programmatically preloads the given page, which means
  1. ensuring that the code for the page is loaded, and
  2. calling the page’s load function with the appropriate options.


This is the same behaviour that SvelteKit triggers when the user taps or mouses over an `&#x3C;a>` element with `data-sveltekit-preload-data`. If the next navigation is to `href`, the values returned from load will be used, making navigation instantaneous. Returns a Promise that resolves with the result of running the new route’s `load` functions once the preload is complete.
@paramhref Page to preload
preloadData, `function pushState(url: string | URL, state: App.PageState): void`
Programmatically create a new history entry with the given `page.state`. To use the current URL, you can pass `''` as the first argument. Used for shallow routing.
pushState, `function replaceState(url: string | URL, state: App.PageState): void`
Programmatically replace the current history entry with the given `page.state`. To use the current URL, you can pass `''` as the first argument. Used for shallow routing.
replaceState } from '$app/navigation';`
```

## afterNavigate
A lifecycle function that runs the supplied `callback` when the current component mounts, and also whenever we navigate to a URL.
`afterNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
```
function afterNavigate(
	callback: (
		navigation: import('@sveltejs/kit').AfterNavigate
	) => void
): void;
```

## beforeNavigate
A navigation interceptor that triggers before we navigate to a URL, whether by clicking a link, calling `goto(...)`, or using the browser back/forward controls.
Calling `cancel()` will prevent the navigation from completing. If `navigation.type === 'leave'` — meaning the user is navigating away from the app (or closing the tab) — calling `cancel` will trigger the native browser unload confirmation dialog. In this case, the navigation may or may not be cancelled depending on the user’s response.
When a navigation isn’t to a SvelteKit-owned route (and therefore controlled by SvelteKit’s client-side router), `navigation.to.route.id` will be `null`.
If the navigation will (if not cancelled) cause the document to unload — in other words `'leave'` navigations and `'link'` navigations where `navigation.to.route === null` — `navigation.willUnload` is `true`.
`beforeNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
```
function beforeNavigate(
	callback: (
		navigation: import('@sveltejs/kit').BeforeNavigate
	) => void
): void;
```

## disableScrollHandling
If called when the page is being updated following a navigation (in `onMount` or `afterNavigate` or an action, for example), this disables SvelteKit’s built-in scroll handling. This is generally discouraged, since it breaks user expectations.
```
function disableScrollHandling(): void;
```

## goto
Allows you to navigate programmatically to a given route, with options such as keeping the current element focused. Returns a Promise that resolves when SvelteKit navigates (or fails to navigate, in which case the promise rejects) to the specified `url`.
For external URLs, use `window.location = url` instead of calling `goto(url)`.
```
function goto(
	url: string | URL,
	opts?:
		| {
				replaceState?: boolean | undefined;
				noScroll?: boolean | undefined;
				keepFocus?: boolean | undefined;
				invalidateAll?: boolean | undefined;
				invalidate?:
					| (string | URL | ((url: URL) => boolean))[]
					| undefined;
				state?: App.PageState | undefined;
		 }
		| undefined
): Promise<void>;
```

## invalidate
Causes any `load` functions belonging to the currently active page to re-run if they depend on the `url` in question, via `fetch` or `depends`. Returns a `Promise` that resolves when the page is subsequently updated.
If the argument is given as a `string` or `URL`, it must resolve to the same URL that was passed to `fetch` or `depends` (including query parameters). To create a custom identifier, use a string beginning with `[a-z]+:` (e.g. `custom:state`) — this is a valid URL.
The `function` argument can be used define a custom predicate. It receives the full `URL` and causes `load` to rerun if `true` is returned. This can be useful if you want to invalidate based on a pattern instead of a exact match.
```
// Example: Match '/path' regardless of the query parameters
import { function invalidate(resource: string | URL | ((url: URL) => boolean)): Promise<void>
Causes any load functions belonging to the currently active page to re-run if they depend on the url in question, via fetch or depends. Returns a Promise that resolves when the page is subsequently updated.


If the argument is given as a string or URL, it must resolve to the same URL that was passed to fetch or depends (including query parameters).
To create a custom identifier, use a string beginning with [a-z]+: (e.g. custom:state) — this is a valid URL.


The function argument can be used define a custom predicate. It receives the full URL and causes load to rerun if true is returned.
This can be useful if you want to invalidate based on a pattern instead of a exact match.


```
// Example: Match '/path' regardless of the query parameters
import { invalidate } from '$app/navigation';
invalidate((url) => url.pathname === '/path');
```

@paramresource The invalidated URL
invalidate } from '$app/navigation'; `function invalidate(resource: string | URL | ((url: URL) => boolean)): Promise<void>`
Causes any `load` functions belonging to the currently active page to re-run if they depend on the `url` in question, via `fetch` or `depends`. Returns a `Promise` that resolves when the page is subsequently updated.
If the argument is given as a `string` or `URL`, it must resolve to the same URL that was passed to `fetch` or `depends` (including query parameters). To create a custom identifier, use a string beginning with `[a-z]+:` (e.g. `custom:state`) — this is a valid URL.
The `function` argument can be used define a custom predicate. It receives the full `URL` and causes `load` to rerun if `true` is returned. This can be useful if you want to invalidate based on a pattern instead of a exact match.
```
// Example: Match '/path' regardless of the query parameters
import { invalidate } from '$app/navigation';
invalidate((url) => url.pathname === '/path');
```

@paramresource The invalidated URL
invalidate((`url: URL`url) => `url: URL`url.`URL.pathname: string`
MDN Reference
pathname === '/path');`
```

```
function invalidate(
	resource: string | URL | ((url: URL) => boolean)
): Promise<void>;
```

## invalidateAll
Causes all `load` functions belonging to the currently active page to re-run. Returns a `Promise` that resolves when the page is subsequently updated.
```
function invalidateAll(): Promise<void>;
```

## onNavigate
A lifecycle function that runs the supplied `callback` immediately before we navigate to a new URL except during full-page navigations.
If you return a `Promise`, SvelteKit will wait for it to resolve before completing the navigation. This allows you to — for example — use `document.startViewTransition`. Avoid promises that are slow to resolve, since navigation will appear stalled to the user.
If a function (or a `Promise` that resolves to a function) is returned from the callback, it will be called once the DOM has updated.
`onNavigate` must be called during a component initialization. It remains active as long as the component is mounted.
```
function onNavigate(
	callback: (
		navigation: import('@sveltejs/kit').OnNavigate
	) => MaybePromise<(() => void) | void>
): void;
```

## preloadCode
Programmatically imports the code for routes that haven’t yet been fetched. Typically, you might call this to speed up subsequent navigation.
You can specify routes by any matching pathname such as `/about` (to match `src/routes/about/+page.svelte`) or `/blog/*` (to match `src/routes/blog/[slug]/+page.svelte`).
Unlike `preloadData`, this won’t call `load` functions. Returns a Promise that resolves when the modules have been imported.
```
function preloadCode(pathname: string): Promise<void>;
```

## preloadData
Programmatically preloads the given page, which means
  1. ensuring that the code for the page is loaded, and
  2. calling the page’s load function with the appropriate options.


This is the same behaviour that SvelteKit triggers when the user taps or mouses over an `<a>` element with `data-sveltekit-preload-data`. If the next navigation is to `href`, the values returned from load will be used, making navigation instantaneous. Returns a Promise that resolves with the result of running the new route’s `load` functions once the preload is complete.
```
function preloadData(href: string): Promise<
	| {
			type: 'loaded';
			status: number;
			data: Record<string, any>;
	 }
	| {
			type: 'redirect';
			location: string;
	 }
>;
```

## pushState
Programmatically create a new history entry with the given `page.state`. To use the current URL, you can pass `''` as the first argument. Used for shallow routing.
```
function pushState(
	url: string | URL,
	state: App.PageState
): void;
```

## replaceState
Programmatically replace the current history entry with the given `page.state`. To use the current URL, you can pass `''` as the first argument. Used for shallow routing.
```
function replaceState(
	url: string | URL,
	state: App.PageState
): void;
```

Edit this page on GitHub
previous next
$app/forms $app/paths
