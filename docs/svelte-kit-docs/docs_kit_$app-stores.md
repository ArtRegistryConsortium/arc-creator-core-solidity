Skip to main content
This module contains store-based equivalents of the exports from `$app/state`. If you’re using SvelteKit 2.12 or later, use that module instead.
```
import { ```
function getStores(): {
  page: typeof page;
  navigating: typeof navigating;
  updated: typeof updated;
}
```
`getStores, `const navigating: Readable<Navigation | null>`
A readable store. When navigating starts, its value is a `Navigation` object with `from`, `to`, `type` and (if `type === 'popstate'`) `delta` properties. When navigating finishes, its value reverts to `null`.
On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
@deprecatedUse `navigating` from `$app/state` instead (requires Svelte 5, see docs for more info)
navigating, `const page: Readable<Page<Record<string, string>, string | null>>`
A readable store whose value contains page data.
On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
@deprecatedUse `page` from `$app/state` instead (requires Svelte 5, see docs for more info)
page, ````
const updated: Readable<boolean> & {
  check(): Promise<boolean>;
}
```
`
A readable store whose initial value is `false`. If `version.pollInterval` is a non-zero value, SvelteKit will poll for new versions of the app and update the store value to `true` when it detects one. `updated.check()` will force an immediate check, regardless of polling.
On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
@deprecatedUse `updated` from `$app/state` instead (requires Svelte 5, see docs for more info)
updated } from '$app/stores';`
```

## getStores
```
function getStores(): {
	page: typeof page;
	navigating: typeof navigating;
	updated: typeof updated;
};
```

## navigating
> Use `navigating` from `$app/state` instead (requires Svelte 5, see docs for more info)
A readable store. When navigating starts, its value is a `Navigation` object with `from`, `to`, `type` and (if `type === 'popstate'`) `delta` properties. When navigating finishes, its value reverts to `null`.
On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
```
const navigating: import('svelte/store').Readable<
	import('@sveltejs/kit').Navigation | null
>;
```

## page
> Use `page` from `$app/state` instead (requires Svelte 5, see docs for more info)
A readable store whose value contains page data.
On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
```
const page: import('svelte/store').Readable<
	import('@sveltejs/kit').Page
>;
```

## updated
> Use `updated` from `$app/state` instead (requires Svelte 5, see docs for more info)
A readable store whose initial value is `false`. If `version.pollInterval` is a non-zero value, SvelteKit will poll for new versions of the app and update the store value to `true` when it detects one. `updated.check()` will force an immediate check, regardless of polling.
On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.
```
const updated: import('svelte/store').Readable<boolean> & {
	check(): Promise<boolean>;
};
```

Edit this page on GitHub
previous next
$app/state $env/dynamic/private
