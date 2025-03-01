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


Basic Svelte Introduction Welcome to Svelte
solve
Welcome to the Svelte tutorial! This will teach you everything you need to know to easily build web applications of all sizes, with high performance and a small footprint.
You can also consult the API docs and visit the playground, or — if you’re impatient to start hacking on your machine locally — create a project with `npx sv create`.
## What is Svelte?
Svelte is a tool for building web applications. Like other user interface frameworks, it allows you to build your app _declaratively_ out of components that combine markup, styles and behaviours.
These components are _compiled_ into small, efficient JavaScript modules that eliminate overhead traditionally associated with UI frameworks.
You can build your entire app with Svelte (for example, using an application framework like SvelteKit, which this tutorial will cover), or you can add it incrementally to an existing codebase. You can also ship components as standalone packages that work anywhere.
## How to use this tutorial
> You’ll need to have basic familiarity with HTML, CSS and JavaScript to understand Svelte.
This tutorial is split into four main parts:
  * Basic Svelte (you are here)
  * Advanced Svelte
  * Basic SvelteKit
  * Advanced SvelteKit


Each section will present an exercise designed to illustrate a feature. Later exercises build on the knowledge gained in earlier ones, so it’s recommended that you go from start to finish. If necessary, you can navigate via the menu above.
If you get stuck, you can click the `solve` button in the top right of the screen. (The `solve` button is disabled on sections like this one that don’t include an exercise.) Try not to rely on it too much; you will learn faster by figuring out where to put each suggested code block and manually typing it in to the editor.
Edit this page on GitHub
previous next
Your first component
  * src
  * App.svelte


9
1
2
›
<h1>Welcome!</h1>
loading Svelte compiler...
loading svelte compiler
show text show editor
