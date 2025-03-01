Skip to main content
Basic Svelte Introduction
  * Welcome to Svelte
  * Your first component
  * Dynamic attributes
  * Styling
  * Nested components
  * HTML tags

Reactivity
  * State
  * Deep state
  * Derived state
  * Inspecting state
  * Effects
  * Universal reactivity

Props
  * Declaring props
  * Default values
  * Spread props

Logic
  * If blocks
  * Else blocks
  * Else-if blocks
  * Each blocks
  * Keyed each blocks
  * Await blocks

Events
  * DOM events
  * Inline handlers
  * Capturing
  * Component events
  * Spreading events

Bindings
  * Text inputs
  * Numeric inputs
  * Checkbox inputs
  * Select bindings
  * Group inputs
  * Select multiple
  * Textarea inputs

Classes and styles
  * The class attribute
  * The style directive
  * Component styles

Actions
  * The use directive
  * Adding parameters

Transitions
  * The transition directive
  * Adding parameters
  * In and out
  * Custom CSS transitions
  * Custom JS transitions
  * Transition events
  * Global transitions
  * Key blocks

Advanced Svelte Advanced reactivity
  * Raw state
  * Reactive classes
  * Getters and setters
  * Reactive built-ins
  * Stores

Reusing content
  * Snippets and render tags
  * Passing snippets to components
  * Implicit snippet props

Motion
  * Tweened values
  * Springs

Advanced bindings
  * Contenteditable bindings
  * Each block bindings
  * Media elements
  * Dimensions
  * This
  * Component bindings
  * Binding to component instances

Advanced transitions
  * Deferred transitions
  * Animations

Context API
  * setContext and getContext

Special elements
  * <svelte:window>
  * <svelte:window> bindings
  * <svelte:document>
  * <svelte:body>
  * <svelte:head>
  * <svelte:element>
  * <svelte:boundary>

<script module>
  * Sharing code
  * Exports

Next steps
  * Congratulations!

Basic SvelteKit Introduction
  * What is SvelteKit?

Routing
  * Pages
  * Layouts
  * Route parameters

Loading data
  * Page data
  * Layout data

Headers and cookies
  * Setting headers
  * Reading and writing cookies

Shared modules
  * The $lib alias

Forms
  * The <form> element
  * Named form actions
  * Validation
  * Progressive enhancement
  * Customizing use:enhance

API routes
  * GET handlers
  * POST handlers
  * Other handlers

$app/state
  * page
  * navigating
  * updated

Errors and redirects
  * Basics
  * Error pages
  * Fallback errors
  * Redirects

Advanced SvelteKit Hooks
  * handle
  * The RequestEvent object
  * handleFetch
  * handleError

Page options
  * Basics
  * ssr
  * csr
  * prerender
  * trailingSlash

Link options
  * Preloading
  * Reloading the page

Advanced routing
  * Optional parameters
  * Rest parameters
  * Param matchers
  * Route groups
  * Breaking out of layouts

Advanced loading
  * Universal load functions
  * Using both load functions
  * Using parent data
  * Invalidation
  * Custom dependencies
  * invalidateAll

Environment variables
  * $env/static/private
  * $env/dynamic/private
  * $env/static/public
  * $env/dynamic/public

Conclusion
  * Next steps


Basic SvelteKit Introduction What is SvelteKit?
solve
Whereas Svelte is a _component framework_ , SvelteKit is an _app framework_ (or ‘metaframework’, depending on who you ask) that solves the tricky problems of building something production-ready:
  * Routing
  * Server-side rendering
  * Data fetching
  * Service workers
  * TypeScript integration
  * Prerendering
  * Single-page apps
  * Library packaging
  * Optimised production builds
  * Deploying to different hosting providers
  * ...and so on


SvelteKit apps are server-rendered by default (like traditional ‘multi-page apps’ or MPAs) for excellent first load performance and SEO characteristics, but can then transition to client-side navigation (like modern ‘single-page apps’ or SPAs) to avoid jankily reloading everything (including things like third-party analytics code) when the user navigates. They can run anywhere JavaScript runs, though — as we’ll see — your users may not need to run any JavaScript at all.
If that sounds complicated, worry not: SvelteKit is the framework that grows with you! Start simple and add new features as you need them.
## Project structure
On the right, in the file tree viewer, you’ll see a handful of files that SvelteKit expects to find in a project.
`package.json` will be familiar if you’ve worked with Node.js before. It lists the project’s dependencies — including `svelte` and `@sveltejs/kit` — and a variety of `scripts` for interacting with the SvelteKit CLI. (We’re currently running `npm run dev` in the bottom window.)
> Note that it also specifies `"type": "module"`, which means that `.js` files are treated as native JavaScript modules by default, rather than the legacy CommonJS format.
`svelte.config.js` contains your project configuration. We don’t need to worry about this file for now, but if you’re curious, visit the documentation.
`vite.config.js` contains the Vite configuration. Because SvelteKit uses Vite, you can use Vite features like hot module replacement, TypeScript support, static asset handling and so on.
`src` is where your app’s source code goes. `src/app.html` is your page template (SvelteKit replaces the `%sveltekit.head%` and `%sveltekit.body%` as appropriate), and `src/routes` defines the routes of your app.
Finally, `static` contains any assets (like a `favicon.png` or a `robots.txt`) that should be included when your app is deployed.
Edit this page on GitHub
previous next
Congratulations! Pages
  * project
  * src
  * routes
  * +page.svelte
  * app.html
  * static
  * shared.css
  * package.json


9
1
2
›
<h1>Welcome to SvelteKit</h1>
booting webcontainer
show text show editor
