Skip to main content
Your project’s configuration lives in a `svelte.config.js` file at the root of your project. As well as SvelteKit, this config object is used by other tooling that integrates with Svelte such as editor extensions.
svelte.config
```
import const adapter: () => import("@sveltejs/kit").Adapteradapter from '@sveltejs/adapter-auto';
/** @type {import('@sveltejs/kit').Config} */
const const config: Config
@type{import('@sveltejs/kit').Config}
config = {
	Config.kit?: KitConfig | undefined
SvelteKit options


kit: {
		KitConfig.adapter?: Adapter | undefined
Your adapter is run when executing vite build. It determines how the output is converted for different platforms.


@defaultundefined
adapter: function adapter(): import("@sveltejs/kit").Adapteradapter()
	}
};
export default const config: Config
@type{import('@sveltejs/kit').Config}
config;
```

## Config
```
interface Config {…}
```

```
compilerOptions?: CompileOptions;
```

  * default `{}`


Options passed to `svelte.compile`.
```
extensions?: string[];
```

  * default `[".svelte"]`


List of file extensions that should be treated as Svelte files.
```
kit?: KitConfig;
```

SvelteKit options
```
preprocess?: any;
```

Preprocessor options, if any. Preprocessing can alternatively also be done through Vite’s preprocessor capabilities.
```
vitePlugin?: PluginOptions;
```

`vite-plugin-svelte` plugin options.
```
[key: string]: any;
```

Any additional options required by tooling that integrates with Svelte.
## KitConfig
The `kit` property configures SvelteKit, and can have the following properties:
## adapter
  * default `undefined`


Your adapter is run when executing `vite build`. It determines how the output is converted for different platforms.
## alias
  * default `{}`


An object containing zero or more aliases used to replace values in `import` statements. These aliases are automatically passed to Vite and TypeScript.
svelte.config
```
/** @type {import('@sveltejs/kit').Config} */
const ```
const config: {
  kit: {
    alias: {
 'my-file': string;
 'my-directory': string;
      'my-directory/*': string;
    };
  };
}
```
`
@type{import('@sveltejs/kit').Config}
config = { ````
kit: {
  alias: {
    'my-file': string;
    'my-directory': string;
    'my-directory/*': string;
  };
}
```
`kit: { ````
alias: {
  'my-file': string;
  'my-directory': string;
  'my-directory/*': string;
}
```
`alias: { // this will match a file 'my-file': 'path/to/my-file.js', // this will match a directory and its contents // (`my-directory/x` resolves to `path/to/my-directory/x`) 'my-directory': 'path/to/my-directory', // an alias ending /* will only match // the contents of a directory, not the directory itself 'my-directory/*': 'path/to/my-directory/*' } } };`
```

> The built-in `$lib` alias is controlled by `config.kit.files.lib` as it is used for packaging.
> You will need to run `npm run dev` to have SvelteKit automatically generate the required alias configuration in `jsconfig.json` or `tsconfig.json`.
## appDir
  * default `"_app"`


The directory where SvelteKit keeps its stuff, including static assets (such as JS and CSS) and internally-used routes.
If `paths.assets` is specified, there will be two app directories — `${paths.assets}/${appDir}` and `${paths.base}/${appDir}`.
## csp
Content Security Policy configuration. CSP helps to protect your users against cross-site scripting (XSS) attacks, by limiting the places resources can be loaded from. For example, a configuration like this...
svelte.config
```
/** @type {import('@sveltejs/kit').Config} */
const ```
const config: {
  kit: {
    csp: {
 directives: {
  'script-src': string[];
 };
 reportOnly: {
  'script-src': string[];
  'report-uri': string[];
 };
    };
  };
}
```
`
@type{import('@sveltejs/kit').Config}
config = { ````
kit: {
  csp: {
    directives: {
 'script-src': string[];
    };
    reportOnly: {
 'script-src': string[];
 'report-uri': string[];
    };
  };
}
```
`kit: { ````
csp: {
  directives: {
    'script-src': string[];
  };
  reportOnly: {
    'script-src': string[];
    'report-uri': string[];
  };
}
```
`csp: { ````
directives: {
  'script-src': string[];
}
```
`directives: { 'script-src': ['self'] }, // must be specified with either the `report-uri` or `report-to` directives, or both ````
reportOnly: {
  'script-src': string[];
  'report-uri': string[];
}
```
`reportOnly: { 'script-src': ['self'], 'report-uri': ['/'] } } } }; export default ````
const config: {
  kit: {
    csp: {
 directives: {
  'script-src': string[];
 };
 reportOnly: {
  'script-src': string[];
  'report-uri': string[];
      };
    };
  };
}
```
`
@type{import('@sveltejs/kit').Config}
config;`
```

...would prevent scripts loading from external sites. SvelteKit will augment the specified directives with nonces or hashes (depending on `mode`) for any inline styles and scripts it generates.
To add a nonce for scripts and links manually included in `src/app.html`, you may use the placeholder `%sveltekit.nonce%` (for example `<script nonce="%sveltekit.nonce%">`).
When pages are prerendered, the CSP header is added via a `<meta http-equiv>` tag (note that in this case, `frame-ancestors`, `report-uri` and `sandbox` directives will be ignored).
> When `mode` is `'auto'`, SvelteKit will use nonces for dynamically rendered pages and hashes for prerendered pages. Using nonces with prerendered pages is insecure and therefore forbidden.
> Note that most Svelte transitions work by creating an inline `<style>` element. If you use these in your app, you must either leave the `style-src` directive unspecified or add `unsafe-inline`.
If this level of configuration is insufficient and you have more dynamic requirements, you can use the `handle` hook to roll your own CSP.
```
mode?: 'hash' | 'nonce' | 'auto';
```

Whether to use hashes or nonces to restrict `<script>` and `<style>` elements. `'auto'` will use hashes for prerendered pages, and nonces for dynamically rendered pages.
```
directives?: CspDirectives;
```

Directives that will be added to `Content-Security-Policy` headers.
```
reportOnly?: CspDirectives;
```

Directives that will be added to `Content-Security-Policy-Report-Only` headers.
## csrf
Protection against cross-site request forgery (CSRF) attacks.
```
checkOrigin?: boolean;
```

  * default `true`


Whether to check the incoming `origin` header for `POST`, `PUT`, `PATCH`, or `DELETE` form submissions and verify that it matches the server’s origin.
To allow people to make `POST`, `PUT`, `PATCH`, or `DELETE` requests with a `Content-Type` of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain` to your app from other origins, you will need to disable this option. Be careful!
## embedded
  * default `false`


Whether or not the app is embedded inside a larger app. If `true`, SvelteKit will add its event listeners related to navigation etc on the parent of `%sveltekit.body%` instead of `window`, and will pass `params` from the server rather than inferring them from `location.pathname`. Note that it is generally not supported to embed multiple SvelteKit apps on the same page and use client-side SvelteKit features within them (things such as pushing to the history state assume a single instance).
## env
Environment variable configuration
```
dir?: string;
```

  * default `"."`


The directory to search for `.env` files.
```
publicPrefix?: string;
```

  * default `"PUBLIC_"`


A prefix that signals that an environment variable is safe to expose to client-side code. See `$env/static/public` and `$env/dynamic/public`. Note that Vite’s `envPrefix` must be set separately if you are using Vite’s environment variable handling - though use of that feature should generally be unnecessary.
```
privatePrefix?: string;
```

  * default `""`
  * available since v1.21.0


A prefix that signals that an environment variable is unsafe to expose to client-side code. Environment variables matching neither the public nor the private prefix will be discarded completely. See `$env/static/private` and `$env/dynamic/private`.
## files
Where to find various files within your project.
```
assets?: string;
```

  * default `"static"`


a place to put static files that should have stable URLs and undergo no processing, such as `favicon.ico` or `manifest.json`
```
hooks?: {…}
```

```
client?: string;
```

  * default `"src/hooks.client"`


The location of your client hooks.
```
server?: string;
```

  * default `"src/hooks.server"`


The location of your server hooks.
```
universal?: string;
```

  * default `"src/hooks"`
  * available since v2.3.0


The location of your universal hooks.
```
lib?: string;
```

  * default `"src/lib"`


your app’s internal library, accessible throughout the codebase as `$lib`
```
params?: string;
```

  * default `"src/params"`


a directory containing parameter matchers
```
routes?: string;
```

  * default `"src/routes"`


the files that define the structure of your app (see Routing)
```
serviceWorker?: string;
```

  * default `"src/service-worker"`


the location of your service worker’s entry point (see Service workers)
```
appTemplate?: string;
```

  * default `"src/app.html"`


the location of the template for HTML responses
```
errorTemplate?: string;
```

  * default `"src/error.html"`


the location of the template for fallback error responses
## inlineStyleThreshold
  * default `0`


Inline CSS inside a `<style>` block at the head of the HTML. This option is a number that specifies the maximum length of a CSS file in UTF-16 code units, as specified by the String.length property, to be inlined. All CSS files needed for the page and smaller than this value are merged and inlined in a `<style>` block.
> This results in fewer initial requests and can improve your First Contentful Paint score. However, it generates larger HTML output and reduces the effectiveness of browser caches. Use it advisedly.
## moduleExtensions
  * default `[".js", ".ts"]`


An array of file extensions that SvelteKit will treat as modules. Files with extensions that match neither `config.extensions` nor `config.kit.moduleExtensions` will be ignored by the router.
## outDir
  * default `".svelte-kit"`


The directory that SvelteKit writes files to during `dev` and `build`. You should exclude this directory from version control.
## output
Options related to the build output format
```
preloadStrategy?: 'modulepreload' | 'preload-js' | 'preload-mjs';
```

  * default `"modulepreload"`
  * available since v1.8.4


SvelteKit will preload the JavaScript modules needed for the initial page to avoid import ‘waterfalls’, resulting in faster application startup. There are three strategies with different trade-offs:
  * `modulepreload` - uses `<link rel="modulepreload">`. This delivers the best results in Chromium-based browsers, in Firefox 115+, and Safari 17+. It is ignored in older browsers.
  * `preload-js` - uses `<link rel="preload">`. Prevents waterfalls in Chromium and Safari, but Chromium will parse each module twice (once as a script, once as a module). Causes modules to be requested twice in Firefox. This is a good setting if you want to maximise performance for users on iOS devices at the cost of a very slight degradation for Chromium users.
  * `preload-mjs` - uses `<link rel="preload">` but with the `.mjs` extension which prevents double-parsing in Chromium. Some static webservers will fail to serve .mjs files with a `Content-Type: application/javascript` header, which will cause your application to break. If that doesn’t apply to you, this is the option that will deliver the best performance for the largest number of users, until `modulepreload` is more widely supported.


```
bundleStrategy?: 'split' | 'single' | 'inline';
```

  * default `'split'`
  * available since v2.13.0


The bundle strategy option affects how your app’s JavaScript and CSS files are loaded.
  * If `'split'`, splits the app up into multiple .js/.css files so that they are loaded lazily as the user navigates around the app. This is the default, and is recommended for most scenarios.
  * If `'single'`, creates just one .js bundle and one .css file containing code for the entire app.
  * If `'inline'`, inlines all JavaScript and CSS of the entire app into the HTML. The result is usable without a server (i.e. you can just open the file in your browser).


When using `'split'`, you can also adjust the bundling behaviour by setting `output.experimentalMinChunkSize` and `output.manualChunks` inside your Vite config’s `build.rollupOptions`.
If you want to inline your assets, you’ll need to set Vite’s `build.assetsInlineLimit` option to an appropriate size then import your assets through Vite.
vite.config
```
import { function sveltekit(): Promise<Plugin<any>[]>
Returns the SvelteKit Vite plugins.


sveltekit } from '@sveltejs/kit/vite';
import { function defineConfig(config: UserConfig): UserConfig (+3 overloads)
Type helper to make it easier to use vite.config.ts
accepts a direct 
{@link 
UserConfig
}
 object, or a function that returns it.
The function receives a 
{@link 
ConfigEnv
}
 object.


defineConfig } from 'vite';
export default function defineConfig(config: UserConfig): UserConfig (+3 overloads)
Type helper to make it easier to use vite.config.ts
accepts a direct 
{@link 
UserConfig
}
 object, or a function that returns it.
The function receives a 
{@link 
ConfigEnv
}
 object.


defineConfig({
	UserConfig.plugins?: PluginOption[] | undefined
Array of vite plugins to use.


plugins: [function sveltekit(): Promise<Plugin<any>[]>
Returns the SvelteKit Vite plugins.


sveltekit()],
	UserConfig.build?: BuildOptions | undefined
Build specific options


build: {
		// inline all imported assets
		BuildOptions.assetsInlineLimit?: number | ((filePath: string, content: Buffer) => boolean | undefined) | undefined
Static asset files smaller than this number (in bytes) will be inlined as
base64 strings. Default limit is 4096 (4 KiB). Set to 0 to disable.


@default4096
assetsInlineLimit: var Infinity: numberInfinity
	}
});
```

src/routes/+layout
```
<script>
	// import the asset through Vite
	import favicon from './favicon.png';
</script>
<svelte:head>
	<!-- this asset will be inlined as a base64 URL -->
	<link rel="icon" href={favicon} />
</svelte:head>
```
```
<script lang="ts">
	// import the asset through Vite
	import favicon from './favicon.png';
</script>
<svelte:head>
	<!-- this asset will be inlined as a base64 URL -->
	<link rel="icon" href={favicon} />
</svelte:head>
```

## paths
```
assets?: '' | `http://${string}` | `https://${string}`;
```

  * default `""`


An absolute path that your app’s files are served from. This is useful if your files are served from a storage bucket of some kind.
```
base?: '' | `/${string}`;
```

  * default `""`


A root-relative path that must start, but not end with `/` (e.g. `/base-path`), unless it is the empty string. This specifies where your app is served from and allows the app to live on a non-root path. Note that you need to prepend all your root-relative links with the base value or they will point to the root of your domain, not your `base` (this is how the browser works). You can use `base` from `$app/paths` for that: `<a href="{base}/your-page">Link</a>`. If you find yourself writing this often, it may make sense to extract this into a reusable component.
```
relative?: boolean;
```

  * default `true`
  * available since v1.9.0


Whether to use relative asset paths.
If `true`, `base` and `assets` imported from `$app/paths` will be replaced with relative asset paths during server-side rendering, resulting in more portable HTML. If `false`, `%sveltekit.assets%` and references to build artifacts will always be root-relative paths, unless `paths.assets` is an external URL
Single-page app fallback pages will always use absolute paths, regardless of this setting.
If your app uses a `<base>` element, you should set this to `false`, otherwise asset URLs will incorrectly be resolved against the `<base>` URL rather than the current page.
In 1.0, `undefined` was a valid value, which was set by default. In that case, if `paths.assets` was not external, SvelteKit would replace `%sveltekit.assets%` with a relative path and use relative paths to reference build artifacts, but `base` and `assets` imported from `$app/paths` would be as specified in your config.
## prerender
See Prerendering.
```
concurrency?: number;
```

  * default `1`


How many pages can be prerendered simultaneously. JS is single-threaded, but in cases where prerendering performance is network-bound (for example loading content from a remote CMS) this can speed things up by processing other tasks while waiting on the network response.
```
crawl?: boolean;
```

  * default `true`


Whether SvelteKit should find pages to prerender by following links from `entries`.
```
entries?: var Array: ArrayConstructorArray<'*' | `/${string}`>;
```

  * default `["*"]`


An array of pages to prerender, or start crawling from (if `crawl: true`). The `*` string includes all routes containing no required `[parameters]` with optional parameters included as being empty (since SvelteKit doesn’t know what value any parameters should have).
```
handleHttpError?: PrerenderHttpErrorHandlerValue;
```

  * default `"fail"`
  * available since v1.15.7


How to respond to HTTP errors encountered while prerendering the app.
  * `'fail'` — fail the build
  * `'ignore'` - silently ignore the failure and continue
  * `'warn'` — continue, but print a warning
  * `(details) => void` — a custom error handler that takes a `details` object with `status`, `path`, `referrer`, `referenceType` and `message` properties. If you `throw` from this function, the build will fail


svelte.config
```
/** @type {import('@sveltejs/kit').Config} */
const ```
const config: {
  kit: {
    prerender: {
 handleHttpError: ({ path, referrer, message }: {
  path: any;
  referrer: any;
   message: any;
 }) => void;
    };
  };
}
```
`
@type{import('@sveltejs/kit').Config}
config = { ````
kit: {
  prerender: {
    handleHttpError: ({ path, referrer, message }: {
 path: any;
 referrer: any;
 message: any;
    }) => void;
  };
}
```
`kit: { ````
prerender: {
  handleHttpError: ({ path, referrer, message }: {
    path: any;
    referrer: any;
    message: any;
  }) => void;
}
```
`prerender: { ````
handleHttpError: ({ path, referrer, message }: {
  path: any;
  referrer: any;
  message: any;
}) => void
```
`handleHttpError: ({ `path: any`path, `referrer: any`referrer, `message: any`message }) => { // ignore deliberate link to shiny 404 page if (`path: any`path === '/not-found' && `referrer: any`referrer === '/blog/how-we-built-our-404-page') { return; } // otherwise fail the build throw new ````
var Error: ErrorConstructor
new (message?: string, options?: ErrorOptions) => Error (+1 overload)
```
`Error(`message: any`message); } } } };`
```

```
handleMissingId?: PrerenderMissingIdHandlerValue;
```

  * default `"fail"`
  * available since v1.15.7


How to respond when hash links from one prerendered page to another don’t correspond to an `id` on the destination page.
  * `'fail'` — fail the build
  * `'ignore'` - silently ignore the failure and continue
  * `'warn'` — continue, but print a warning
  * `(details) => void` — a custom error handler that takes a `details` object with `path`, `id`, `referrers` and `message` properties. If you `throw` from this function, the build will fail


```
handleEntryGeneratorMismatch?: PrerenderEntryGeneratorMismatchHandlerValue;
```

  * default `"fail"`
  * available since v1.16.0


How to respond when an entry generated by the `entries` export doesn’t match the route it was generated from.
  * `'fail'` — fail the build
  * `'ignore'` - silently ignore the failure and continue
  * `'warn'` — continue, but print a warning
  * `(details) => void` — a custom error handler that takes a `details` object with `generatedFromId`, `entry`, `matchedId` and `message` properties. If you `throw` from this function, the build will fail


```
var origin: string
MDN Reference


origin?: string;
```

  * default `"http://sveltekit-prerender"`


The value of `url.origin` during prerendering; useful if it is included in rendered content.
## router
```
type?: 'pathname' | 'hash';
```

  * default `"pathname"`
  * available since v2.14.0


What type of client-side router to use.
  * `'pathname'` is the default and means the current URL pathname determines the route
  * `'hash'` means the route is determined by `location.hash`. In this case, SSR and prerendering are disabled. This is only recommended if `pathname` is not an option, for example because you don’t control the webserver where your app is deployed. It comes with some caveats: you can’t use server-side rendering (or indeed any server logic), and you have to make sure that the links in your app all start with #/, or they won’t work. Beyond that, everything works exactly like a normal SvelteKit app.


```
resolution?: 'client' | 'server';
```

  * default `"client"`
  * available since v2.17.0


How to determine which route to load when navigating to a new page.
By default, SvelteKit will serve a route manifest to the browser. When navigating, this manifest is used (along with the `reroute` hook, if it exists) to determine which components to load and which `load` functions to run. Because everything happens on the client, this decision can be made immediately. The drawback is that the manifest needs to be loaded and parsed before the first navigation can happen, which may have an impact if your app contains many routes.
Alternatively, SvelteKit can determine the route on the server. This means that for every navigation to a path that has not yet been visited, the server will be asked to determine the route. This has several advantages:
  * The client does not need to load the routing manifest upfront, which can lead to faster initial page loads
  * The list of routes is hidden from public view
  * The server has an opportunity to intercept each navigation (for example through a middleware), enabling (for example) A/B testing opaque to SvelteKit


The drawback is that for unvisited paths, resolution will take slightly longer (though this is mitigated by preloading).
> When using server-side route resolution and prerendering, the resolution is prerendered along with the route itself.
## serviceWorker
```
register?: boolean;
```

  * default `true`


Whether to automatically register the service worker, if it exists.
```
files?(filepath: stringfilepath: string): boolean;
```

  * default `(filename) => !/\.DS_Store/.test(filename)`


Determine which files in your `static` directory will be available in `$service-worker.files`.
## typescript
```
config?: (config: Record<string, any>config: type Record<K extends keyof any, T> = { [P in K]: T; }
Construct a type with a set of properties K of type T


Record<string, any>) => Record<string, any> | void;
```

  * default `(config) => config`
  * available since v1.3.0


A function that allows you to edit the generated `tsconfig.json`. You can mutate the config (recommended) or return a new one. This is useful for extending a shared `tsconfig.json` in a monorepo root, for example.
## version
Client-side navigation can be buggy if you deploy a new version of your app while people are using it. If the code for the new page is already loaded, it may have stale content; if it isn’t, the app’s route manifest may point to a JavaScript file that no longer exists. SvelteKit helps you solve this problem through version management. If SvelteKit encounters an error while loading the page and detects that a new version has been deployed (using the `name` specified here, which defaults to a timestamp of the build) it will fall back to traditional full-page navigation. Not all navigations will result in an error though, for example if the JavaScript for the next page is already loaded. If you still want to force a full-page navigation in these cases, use techniques such as setting the `pollInterval` and then using `beforeNavigate`:
+layout
```
<script>
	import { beforeNavigate } from '$app/navigation';
	import { updated } from '$app/state';
	beforeNavigate(({ willUnload, to }) => {
		if (updated.current && !willUnload && to?.url) {
			location.href = to.url.href;
		}
	});
</script>
```

If you set `pollInterval` to a non-zero value, SvelteKit will poll for new versions in the background and set the value of `updated.current` `true` when it detects one.
```
const name: void
@deprecated
name?: string;
```

The current app version string. If specified, this must be deterministic (e.g. a commit ref rather than `Math.random()` or `Date.now().toString()`), otherwise defaults to a timestamp of the build.
For example, to use the current commit hash, you could do use `git rev-parse HEAD`:
svelte.config
```
import * as module "node:child_process"child_process from 'node:child_process';
export default {
	```
kit: {
  version: {
    name: string;
  };
}
```
`kit: { ````
version: {
  name: string;
}
```
`version: { `name: string`name: `module "node:child_process"`child_process.`function execSync(command: string): Buffer (+3 overloads)`
The `child_process.execSync()` method is generally identical to {@link exec } with the exception that the method will not return until the child process has fully closed. When a timeout has been encountered and `killSignal` is sent, the method won’t return until the process has completely exited. If the child process intercepts and handles the `SIGTERM` signal and doesn’t exit, the parent process will wait until the child process has exited.
If the process times out or has a non-zero exit code, this method will throw. The `Error` object will contain the entire result from {@link spawnSync } .
**Never pass unsanitized user input to this function. Any input containing shell** **metacharacters may be used to trigger arbitrary command execution.**
@sincev0.11.12
@paramcommand The command to run.
@returnThe stdout from the command.
execSync('git rev-parse HEAD').`Buffer.toString(encoding?: BufferEncoding, start?: number, end?: number): string`
Decodes `buf` to a string according to the specified character encoding in`encoding`. `start` and `end` may be passed to decode only a subset of `buf`.
If `encoding` is `'utf8'` and a byte sequence in the input is not valid UTF-8, then each invalid byte is replaced with the replacement character `U+FFFD`.
The maximum length of a string instance (in UTF-16 code units) is available as {@link constants.MAX_STRING_LENGTH } .
```
import { Buffer } from 'node:buffer';
const buf1 = Buffer.allocUnsafe(26);
for (let i = 0; i &#x3C; 26; i++) {
 // 97 is the decimal ASCII value for 'a'.
 buf1[i] = i + 97;
}
console.log(buf1.toString('utf8'));
// Prints: abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('utf8', 0, 5));
// Prints: abcde
const buf2 = Buffer.from('tést');
console.log(buf2.toString('hex'));
// Prints: 74c3a97374
console.log(buf2.toString('utf8', 0, 3));
// Prints: té
console.log(buf2.toString(undefined, 0, 3));
// Prints: té
```

@sincev0.1.90
@paramencoding The character encoding to use.
@paramstart The byte offset to start decoding at.
@paramend The byte offset to stop decoding at (not inclusive).
toString().`String.trim(): string`
Removes the leading and trailing white space and line terminator characters from a string.
trim() } } };`
```

```
pollInterval?: number;
```

  * default `0`


The interval in milliseconds to poll for version changes. If this is `0`, no polling occurs.
Edit this page on GitHub
previous next
$service-worker Command Line Interface
