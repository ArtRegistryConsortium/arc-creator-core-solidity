v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Core concepts
  2. Functions and directives


Core concepts
# Functions and directives
A reference for the custom functions and directives Tailwind exposes to your CSS.
## Directives
Directives are custom Tailwind-specific at-rules you can use in your CSS that offer special functionality for Tailwind CSS projects.
### @import
Use the `@import` directive to inline import CSS files, including Tailwind itself:
CSS
```
@import "tailwindcss";
```

### @theme
Use the `@theme` directive to define your project's custom design tokens, like fonts, colors, and breakpoints:
CSS
```
@theme { --font-display: "Satoshi", "sans-serif"; --breakpoint-3xl: 1920px; --color-avocado-100: oklch(0.99 0 0); --color-avocado-200: oklch(0.98 0.04 113.22); --color-avocado-300: oklch(0.94 0.11 115.03); --color-avocado-400: oklch(0.92 0.19 114.08); --color-avocado-500: oklch(0.84 0.18 117.33); --color-avocado-600: oklch(0.53 0.12 118.34); --ease-fluid: cubic-bezier(0.3, 0, 0, 1); --ease-snappy: cubic-bezier(0.2, 0, 0, 1); /* ... */}
```

Learn more about customizing your theme in the theme variables documentation.
### @source
Use the `@source` directive to explicitly specify source files that aren't picked up by Tailwind's automatic content detection:
CSS
```
@source "../node_modules/@my-company/ui-lib";
```

Learn more about automatic content detection in the detecting classes in source files documentation.
### @utility
Use the `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg`:
CSS
```
@utility tab-4 { tab-size: 4;}
```

Learn more about registering custom utilities in the adding custom utilities documentation.
### @variant
Use the `@variant` directive to apply a Tailwind variant to styles in your CSS:
CSS
```
.my-element { background: white; @variant dark {  background: black; }}
```

If you need to apply multiple variants at the same time, use nesting:
CSS
```
.my-element { background: white; @variant dark {  @variant hover {   background: black;  } }}
```

Learn more about variants in the hover, focus, and other states documentation.
### @custom-variant
Use the `@custom-variant` directive to add a custom variant in your project:
CSS
```
@custom-variant pointer-coarse (@media (pointer: coarse));@custom-variant theme-midnight (&:where([data-theme="midnight"] *));
```

This lets you write utilities like `pointer-coarse:size-48` and `theme-midnight:bg-slate-900`.
Learn more about adding custom variants in the registering a custom variant documentation.
### @apply
Use the `@apply` directive to inline any existing utility classes into your own custom CSS:
CSS
```
.select2-dropdown { @apply rounded-b-lg shadow-md;}.select2-search { @apply rounded border border-gray-300;}.select2-results__group { @apply text-lg font-bold text-gray-900;}
```

This is useful when you need to write custom CSS (like to override the styles in a third-party library) but still want to work with your design tokens and use the same syntax you’re used to using in your HTML.
### @reference
If you want to use `@apply` or `@variant` in the `<style>` block of a Vue or Svelte component, or within CSS modules, you will need to import your theme variables, custom utilities, and custom variants to make those values available in that context.
To do this without duplicating any CSS in your output, use the `@reference` directive to import your main stylesheet for reference without actually including the styles:
Vue
```
<template> <h1>Hello world!</h1></template><style> @reference "../../app.css"; h1 {  @apply text-2xl font-bold text-red-500; }</style>
```

If you’re just using the default theme with no customizations, you can import `tailwindcss` directly:
Vue
```
<template> <h1>Hello world!</h1></template><style> @reference "tailwindcss"; h1 {  @apply text-2xl font-bold text-red-500; }</style>
```

## Functions
Tailwind provides the following build-time functions to make working with colors and the spacing scale easier.
### --alpha()
Use the `--alpha()` function to adjust the opacity of a color:
Input CSS
```
.my-element { color: --alpha(var(--color-lime-300) / 50%);}
```

Compiled CSS
```
.my-element { color: color-mix(in oklab, var(--color-lime-300) 50%, transparent);}
```

### --spacing()
Use the `--spacing()` function to generate a spacing value based on your theme:
Input CSS
```
.my-element { margin: --spacing(4);}
```

Compiled CSS
```
.my-element { margin: calc(var(--spacing) * 4);}
```

This can also be useful in arbitrary values, especially in combination with `calc()`:
HTML
```
<div class="py-[calc(--spacing(4)-1px)]"> <!-- ... --></div>
```

## Compatibility
The following directives and functions exist solely for compatibility with Tailwind CSS v3.x.
### @config
Use the `@config` directive to load a legacy JavaScript-based configuration file:
CSS
```
@config "../../tailwind.config.js";
```

The `corePlugins`, `safelist`, and `separator` options from the JavaScript-based config are not supported in v4.0.
### @plugin
Use the `@plugin` directive to load a legacy JavaScript-based plugin:
CSS
```
@plugin "@tailwindcss/typography";
```

The `@plugin` directive accepts either a package name or a local path.
### theme()
Use the `theme()` function to access your Tailwind theme values using dot notation:
CSS
```
.my-element { margin: theme(spacing.12);}
```

This function is deprecated, and we recommend using CSS theme variables instead.
### On this page
  * Directives
    * @import
    * @theme
    * @source
    * @utility
    * @variant
    * @custom-variant
    * @apply
    * @reference
  * Functions
    * --alpha()
    * --spacing()
  * Compatibility
    * @config
    * @plugin
    * theme()


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffunctions-and-directives&r=&sid=PMFMDJGK&qs=%7B%7D&cid=9437308)
