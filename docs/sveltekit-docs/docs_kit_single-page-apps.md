Skip to main content
You can turn any SvelteKit app, using any adapter, into a fully client-rendered single-page app (SPA) by disabling SSR at the root layout:
src/routes/+layout
```
export const const ssr: falsessr = false;
```

> In most situations this is not recommended: it harms SEO, tends to slow down perceived performance, and makes your app inaccessible to users if JavaScript fails or is disabled (which happens more often than you probably think).
If you don’t have any server-side logic (i.e. `+page.server.js`, `+layout.server.js` or `+server.js` files) you can use `adapter-static` to create your SPA by adding a _fallback page_.
## Usage
Install with `npm i -D @sveltejs/adapter-static`, then add the adapter to your `svelte.config.js` with the following options:
svelte.config
```
import import adapteradapter from '@sveltejs/adapter-static';
export default {
	```
kit: {
  adapter: any;
}
```
`kit: { `adapter: any`adapter: `import adapter`adapter({ `fallback: string`fallback: '200.html' // may differ from host to host }) } };`
```

The `fallback` page is an HTML page created by SvelteKit from your page template (e.g. `app.html`) that loads your app and navigates to the correct route. For example Surge, a static web host, lets you add a `200.html` file that will handle any requests that don’t correspond to static assets or prerendered pages.
On some hosts it may be `index.html` or something else entirely — consult your platform’s documentation.
> Note that the fallback page will always contain absolute asset paths (i.e. beginning with `/` rather than `.`) regardless of the value of `paths.relative`, since it is used to respond to requests for arbitrary paths.
## Apache
To run an SPA on Apache, you should add a `static/.htaccess` file to route requests to the fallback page:
```
<IfModule mod_rewrite.c>
	RewriteEngine On
	RewriteBase /
	RewriteRule ^200\.html$ - [L]
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteRule . /200.html [L]
</IfModule>
```

## Prerendering individual pages
If you want certain pages to be prerendered, you can re-enable `ssr` alongside `prerender` for just those parts of your app:
src/routes/my-prerendered-page/+page
```
export const const prerender: trueprerender = true;
export const const ssr: truessr = true;
```

Edit this page on GitHub
previous next
Static site generation Cloudflare Pages
