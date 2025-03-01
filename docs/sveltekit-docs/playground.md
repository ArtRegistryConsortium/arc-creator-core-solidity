Skip to main content
Create new Introduction
  * Hello world
  * Dynamic attributes
  * Styling
  * Nested components
  * HTML tags

Reactivity
  * Reactive assignments
  * Reactive declarations
  * Reactive statements

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
  * Component events
  * Event forwarding
  * DOM event forwarding

Bindings
  * Text inputs
  * Numeric inputs
  * Checkbox inputs
  * Group inputs
  * Textarea inputs
  * File inputs
  * Select bindings
  * Select multiple
  * Each block bindings
  * Media elements
  * Dimensions
  * bind:this={canvas}
  * Component bindings

Lifecycle
  * onMount
  * onDestroy
  * tick

Stores
  * Writable stores
  * Auto-subscriptions
  * Readable stores
  * Derived stores
  * Custom stores

Motion
  * Tweened
  * Spring

Transitions
  * The transition directive
  * Adding parameters
  * In and out
  * Custom CSS transitions
  * Custom JS transitions
  * Transition events
  * Deferred transitions

Animations
  * The animate directive

Easing
  * Ease Visualiser

SVG
  * Clock
  * Bar chart
  * Area chart
  * Scatterplot
  * SVG transitions

Actions
  * The use directive
  * Adding parameters
  * A more complex action

Classes
  * The class directive
  * Shorthand class directive

Component composition
  * Render props
  * Render prop fallbacks
  * Named render props
  * Render prop props
  * Conditional render props
  * Modal

Context API
  * setContext and getContext

Special elements
  * <svelte:element>
  * <svelte:window>
  * <svelte:window> bindings
  * <svelte:document>
  * <svelte:body>
  * <svelte:head>

Module context
  * Named exports

Debugging
  * The @debug tag

7GUIs
  * Counter
  * Temperature Converter
  * Flight booker
  * Timer
  * CRUD
  * Circle Drawer

Miscellaneous
  * Recursive components
  * Dynamic components
  * Hacker News


log in
App.svelte
runes
9
1
2
3
4
5
6
›
⌄
<script>
let name = 'world';
</script>
<h1>Hello {name}!</h1>
Result JS output CSS output AST output
Console Clear
loading Svelte compiler...
9
1
›
/* Select a component to see its compiled code */
Compiler options
result = svelte.compile(source, { 
generate: "client" "server",
dev: false });
9
1
›
/* Select a component to see its compiled code */
Hello world • Playground • Svelte
