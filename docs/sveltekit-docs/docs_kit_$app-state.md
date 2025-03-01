Skip to main content
SvelteKit makes three read-only state objects available via the `$app/state` module — `page`, `navigating` and `updated`.
> This module was added in 2.12. If you’re using an earlier version of SvelteKit, use `$app/stores` instead.
```
import { ```
const navigating: Navigation | {
  from: null;
  to: null;
  type: null;
  willUnload: null;
  delta: null;
  complete: null;
}
```
`
An object representing an in-progress navigation, with `from`, `to`, `type` and (if `type === 'popstate'`) `delta` properties. Values are `null` when no navigation is occurring, or during server rendering.
navigating, `const page: Page<Record<string, string>, string | null>`
A reactive object with information about the current page, serving several use cases:
  * retrieving the combined `data` of all pages/layouts anywhere in your component tree (also see loading data)
  * retrieving the current value of the `form` prop anywhere in your component tree (also see form actions)
  * retrieving the page state that was set through `goto`, `pushState` or `replaceState` (also see goto and shallow routing)
  * retrieving metadata such as the URL you’re on, the current route and its parameters, and whether or not there was an error


```
&#x3C;! file: +layout.svelte >
&#x3C;script>
	import { page } from '$app/state';
&#x3C;/script>
&#x3C;p>Currently at {page.url.pathname}&#x3C;/p>
{#if page.error}
	&#x3C;span class="red">Problem detected&#x3C;/span>
{:else}
	&#x3C;span class="small">All systems operational&#x3C;/span>
{/if}
```

On the server, values can only be read during rendering (in other words _not_ in e.g. `load` functions). In the browser, the values can be read at any time.
page, ````
const updated: {
  readonly current: boolean;
  check(): Promise<boolean>;
}
```
`
A reactive value that’s initially `false`. If `version.pollInterval` is a non-zero value, SvelteKit will poll for new versions of the app and update `current` to `true` when it detects one. `updated.check()` will force an immediate check, regardless of polling.
updated } from '$app/state';`
```

## navigating
A read-only object representing an in-progress navigation, with `from`, `to`, `type` and (if `type === 'popstate'`) `delta` properties. Values are `null` when no navigation is occurring, or during server rendering.
```
const navigating:
	| import('@sveltejs/kit').Navigation
	| {
			from: null;
			to: null;
			type: null;
			willUnload: null;
			delta: null;
			complete: null;
	 };
```

## page
A read-only reactive object with information about the current page, serving several use cases:
  * retrieving the combined `data` of all pages/layouts anywhere in your component tree (also see loading data)
  * retrieving the current value of the `form` prop anywhere in your component tree (also see form actions)
  * retrieving the page state that was set through `goto`, `pushState` or `replaceState` (also see goto and shallow routing)
  * retrieving metadata such as the URL you’re on, the current route and its parameters, and whether or not there was an error


+layout
```
<script>
	import { page } from '$app/state';
</script>
<p>Currently at {page.url.pathname}</p>
{#if page.error}
	<span class="red">Problem detected</span>
{:else}
	<span class="small">All systems operational</span>
{/if}
```
```
<script lang="ts">
	import { page } from '$app/state';
</script>
<p>Currently at {page.url.pathname}</p>
{#if page.error}
	<span class="red">Problem detected</span>
{:else}
	<span class="small">All systems operational</span>
{/if}
```

Changes to `page` are available exclusively with runes. (The legacy reactivity syntax will not reflect any changes)
+page
```
<script>
	import { page } from '$app/state';
	const id = $derived(page.params.id); // This will correctly update id for usage on this page
	$: badId = page.params.id; // Do not use; will never update after initial load
</script>
```
```
<script lang="ts">
	import { page } from '$app/state';
	const id = $derived(page.params.id); // This will correctly update id for usage on this page
	$: badId = page.params.id; // Do not use; will never update after initial load
</script>
```

On the server, values can only be read during rendering (in other words _not_ in e.g. `load` functions). In the browser, the values can be read at any time.
```
const page: import('@sveltejs/kit').Page;
```

## updated
A read-only reactive value that’s initially `false`. If `version.pollInterval` is a non-zero value, SvelteKit will poll for new versions of the app and update `current` to `true` when it detects one. `updated.check()` will force an immediate check, regardless of polling.
```
const updated: {
	get current(): boolean;
	check(): Promise<boolean>;
};
```

Edit this page on GitHub
previous next
$app/server $app/stores
