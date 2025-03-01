Skip to main content
```
import { let assets: "" | `https://${string}` | `http://${string}` | "/_svelte_kit_assets"
An absolute path that matches config.kit.paths.assets.


>  If a value for config.kit.paths.assets is specified, it will be replaced with '/_svelte_kit_assets' during vite dev or vite preview, since the assets don’t yet live at their eventual URL.
> 

assets, let base: "" | `/${string}`
A string that matches config.kit.paths.base.


Example usage: &#x3C;a href="{base}/your-page">Link&#x3C;/a>


base, function resolveRoute(id: string, params: Record<string, string | undefined>): string
Populate a route ID with params to resolve a pathname.


@examplejs import { resolveRoute } from '$app/paths'; resolveRoute(  `/blog/[slug]/[...somethingElse]`,  {   slug: 'hello-world',   somethingElse: 'something/else'  } ); // `/blog/hello-world/something/else` 
resolveRoute } from '$app/paths';
```

## assets
An absolute path that matches `config.kit.paths.assets`.
> If a value for `config.kit.paths.assets` is specified, it will be replaced with `'/_svelte_kit_assets'` during `vite dev` or `vite preview`, since the assets don’t yet live at their eventual URL.
```
let assets:
	| ''
	| `https://${string}`
	| `http://${string}`
	| '/_svelte_kit_assets';
```

## base
A string that matches `config.kit.paths.base`.
Example usage: `<a href="{base}/your-page">Link</a>`
```
let base: '' | `/${string}`;
```

## resolveRoute
Populate a route ID with params to resolve a pathname.
```
import { function resolveRoute(id: string, params: Record<string, string | undefined>): string
Populate a route ID with params to resolve a pathname.


@examplejs import { resolveRoute } from '$app/paths'; resolveRoute(  `/blog/[slug]/[...somethingElse]`,  {   slug: 'hello-world',   somethingElse: 'something/else'  } ); // `/blog/hello-world/something/else` 
resolveRoute } from '$app/paths';
function resolveRoute(id: string, params: Record<string, string | undefined>): string
Populate a route ID with params to resolve a pathname.


@examplejs import { resolveRoute } from '$app/paths'; resolveRoute(  `/blog/[slug]/[...somethingElse]`,  {   slug: 'hello-world',   somethingElse: 'something/else'  } ); // `/blog/hello-world/something/else` 
resolveRoute(
	`/blog/[slug]/[...somethingElse]`,
	{
		slug: stringslug: 'hello-world',
		somethingElse: stringsomethingElse: 'something/else'
	}
); // `/blog/hello-world/something/else`
```

```
function resolveRoute(
	id: string,
	params: Record<string, string | undefined>
): string;
```

Edit this page on GitHub
previous next
$app/navigation $app/server
