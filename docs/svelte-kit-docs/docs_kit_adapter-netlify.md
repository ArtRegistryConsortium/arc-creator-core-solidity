Skip to main content
To deploy to Netlify, use `adapter-netlify`.
This adapter will be installed by default when you use `adapter-auto`, but adding it to your project allows you to specify Netlify-specific options.
## Usage
Install with `npm i -D @sveltejs/adapter-netlify`, then add the adapter to your `svelte.config.js`:
svelte.config
```
import import adapteradapter from '@sveltejs/adapter-netlify';
export default {
	```
kit: {
  adapter: any;
}
```
`kit: { // default options are shown `adapter: any`adapter: `import adapter`adapter({ // if true, will create a Netlify Edge Function rather // than using standard Node-based functions `edge: boolean`edge: false, // if true, will split your app into multiple functions // instead of creating a single one for the entire app. // if `edge` is true, this option cannot be used `split: boolean`split: false }) } };`
```

Then, make sure you have a netlify.toml file in the project root. This will determine where to write static assets based on the `build.publish` settings, as per this sample configuration:
```
[build]
	command = "npm run build"
	publish = "build"
```

If the `netlify.toml` file or the `build.publish` value is missing, a default value of `"build"` will be used. Note that if you have set the publish directory in the Netlify UI to something else then you will need to set it in `netlify.toml` too, or use the default value of `"build"`.
### Node version
New projects will use the current Node LTS version by default. However, if you’re upgrading a project you created a while ago it may be stuck on an older version. See the Netlify docs for details on manually specifying a current Node version.
## Netlify Edge Functions
SvelteKit supports Netlify Edge Functions. If you pass the option `edge: true` to the `adapter` function, server-side rendering will happen in a Deno-based edge function that’s deployed close to the site visitor. If set to `false` (the default), the site will deploy to Node-based Netlify Functions.
svelte.config
```
import import adapteradapter from '@sveltejs/adapter-netlify';
export default {
	```
kit: {
  adapter: any;
}
```
`kit: { `adapter: any`adapter: `import adapter`adapter({ // will create a Netlify Edge Function using Deno-based // rather than using standard Node-based functions `edge: boolean`edge: true }) } };`
```

## Netlify alternatives to SvelteKit functionality
You may build your app using functionality provided directly by SvelteKit without relying on any Netlify functionality. Using the SvelteKit versions of these features will allow them to be used in dev mode, tested with integration tests, and to work with other adapters should you ever decide to switch away from Netlify. However, in some scenarios you may find it beneficial to use the Netlify versions of these features. One example would be if you’re migrating an app that’s already hosted on Netlify to SvelteKit.
### Redirect rules
During compilation, redirect rules are automatically appended to your `_redirects` file. (If it doesn’t exist yet, it will be created.) That means:
  * `[[redirects]]` in `netlify.toml` will never match as `_redirects` has a higher priority. So always put your rules in the `_redirects` file.
  * `_redirects` shouldn’t have any custom “catch all” rules such as `/* /foobar/:splat`. Otherwise the automatically appended rule will never be applied as Netlify is only processing the first matching rule.


### Netlify Forms
  1. Create your Netlify HTML form as described here, e.g. as `/routes/contact/+page.svelte`. (Don’t forget to add the hidden `form-name` input element!)
  2. Netlify’s build bot parses your HTML files at deploy time, which means your form must be prerendered as HTML. You can either add `export const prerender = true` to your `contact.svelte` to prerender just that page or set the `kit.prerender.force: true` option to prerender all pages.
  3. If your Netlify form has a custom success message like `<form netlify ... action="/success">` then ensure the corresponding `/routes/success/+page.svelte` exists and is prerendered.


### Netlify Functions
With this adapter, SvelteKit endpoints are hosted as Netlify Functions. Netlify function handlers have additional context, including Netlify Identity information. You can access this context via the `event.platform.context` field inside your hooks and `+page.server` or `+layout.server` endpoints. These are serverless functions when the `edge` property is `false` in the adapter config or edge functions when it is `true`.
+page.server
```
export const const load: (event: any) => Promise<void>load = async (event) => {
	const const context: anycontext = event: anyevent.platform.context;
	var console: Console
The console module provides a simple debugging console that is similar to the
JavaScript console mechanism provided by web browsers.


The module exports two specific components:




  * A Console class with methods such as console.log(), console.error() and console.warn() that can be used to write to any Node.js stream.


  * A global console instance configured to write to process.stdout and
process.stderr. The global console can be used without calling require('console').




 _**Warning**_: The global console object’s methods are neither consistently
synchronous like the browser APIs they resemble, nor are they consistently
asynchronous like all other Node.js streams. See the note on process I/O for
more information.


Example using the global console:


```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the`Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log(`const context: any`context); // shows up in your functions log in the Netlify app };`
```

Additionally, you can add your own Netlify functions by creating a directory for them and adding the configuration to your `netlify.toml` file. For example:
```
[build]
	command = "npm run build"
	publish = "build"
[functions]
	directory = "functions"
```

## Troubleshooting
### Accessing the file system
You can’t use `fs` in edge deployments.
You _can_ use it in serverless deployments, but it won’t work as expected, since files are not copied from your project into your deployment. Instead, use the `read` function from `$app/server` to access your files. `read` does not work inside edge deployments (this may change in future).
Alternatively, you can prerender the routes in question.
Edit this page on GitHub
previous next
Cloudflare Workers Vercel
