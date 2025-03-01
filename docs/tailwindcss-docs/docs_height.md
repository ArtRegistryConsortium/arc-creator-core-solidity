v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Sizing
  2. height


Sizing
# height
Utilities for setting the height of an element.
Class| Styles  
---|---  
`h-<number>`| `height: calc(var(--spacing) * <number>);`  
`h-<fraction>`| `height: calc(<fraction> * 100%);`  
`h-auto`| `height: auto;`  
`h-px`| `height: 1px;`  
`h-full`| `height: 100%;`  
`h-screen`| `height: 100vh;`  
`h-dvh`| `height: 100dvh;`  
`h-dvw`| `height: 100dvw;`  
`h-lvh`| `height: 100lvh;`  
`h-lvw`| `height: 100lvw;`  
`h-svh`| `height: 100svh;`  
`h-svw`| `height: 100svw;`  
`h-min`| `height: min-content;`  
`h-max`| `height: max-content;`  
`h-fit`| `height: fit-content;`  
`h-(<custom-property>)`| `height: var(<custom-property>);`  
`h-[<value>]`| `height: <value>;`  
`size-<number>`| `width: calc(var(--spacing) * <number>); height: calc(var(--spacing) * <number>);`  
`size-<fraction>`| `width: calc(<fraction> * 100%); height: calc(<fraction> * 100%);`  
`size-auto`| `width: auto; height: auto;`  
`size-px`| `width: 1px; height: 1px;`  
`size-full`| `width: 100%; height: 100%;`  
`size-dvw`| `width: 100dvw; height: 100dvw;`  
`size-dvh`| `width: 100dvh; height: 100dvh;`  
`size-lvw`| `width: 100lvw; height: 100lvw;`  
`size-lvh`| `width: 100lvh; height: 100lvh;`  
`size-svw`| `width: 100svw; height: 100svw;`  
`size-svh`| `width: 100svh; height: 100svh;`  
`size-min`| `width: min-content; height: min-content;`  
`size-max`| `width: max-content; height: max-content;`  
`size-fit`| `width: fit-content; height: fit-content;`  
`size-(<custom-property>)`| `width: var(<custom-property>); height: var(<custom-property>);`  
`size-[<value>]`| `width: <value>; height: <value>;`  
Show more
## Examples
### Basic example
Use `h-<number>` utilities like `h-24` and `h-64` to set an element to a fixed height based on the spacing scale:
h-96
h-80
h-64
h-48
h-40
h-32
h-24
```
<div class="h-96 ...">h-96</div><div class="h-80 ...">h-80</div><div class="h-64 ...">h-64</div><div class="h-48 ...">h-48</div><div class="h-40 ...">h-40</div><div class="h-32 ...">h-32</div><div class="h-24 ...">h-24</div>
```

### Using a percentage
Use `h-full` or `h-<fraction>` utilities like `h-1/2` and `h-2/5` to give an element a percentage-based height:
h-full
h-9/10
h-3/4
h-1/2
h-1/3
```
<div class="h-full ...">h-full</div><div class="h-9/10 ...">h-9/10</div><div class="h-3/4 ...">h-3/4</div><div class="h-1/2 ...">h-1/2</div><div class="h-1/3 ...">h-1/3</div>
```

### Matching viewport
Use the `h-screen` utility to make an element span the entire height of the viewport:
```
<div class="h-screen"> <!-- ... --></div>
```

### Matching dynamic viewport
Use the `h-dvh` utility to make an element span the entire height of the viewport, which changes as the browser UI expands or contracts:
Scroll the viewport to see the viewport height change
tailwindcss.com
h-dvh
```
<div class="h-dvh"> <!-- ... --></div>
```

### Matching large viewport
Use the `h-lvh` utility to set an element's height to the largest possible height of the viewport:
Scroll the viewport to see the viewport height change
tailwindcss.com
h-lvh
```
<div class="h-lvh"> <!-- ... --></div>
```

### Matching small viewport
Use the `h-svh` utility to set an element's height to the smallest possible height of the viewport:
Scroll the viewport to see the viewport height change
tailwindcss.com
h-svh
```
<div class="h-svh"> <!-- ... --></div>
```

### Setting both width and height
Use utilities like `size-px`, `size-4`, and `size-full` to set both the width and height of an element at the same time:
size-16
size-20
size-24
size-32
size-40
```
<div class="size-16 ...">size-16</div><div class="size-20 ...">size-20</div><div class="size-24 ...">size-24</div><div class="size-32 ...">size-32</div><div class="size-40 ...">size-40</div>
```

### Using a custom value
Use the `h-[<value>]` syntax to set the height based on a completely custom value:
```
<div class="h-[32rem] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `h-(<custom-property>)` syntax:
```
<div class="h-(--my-height) ..."> <!-- ... --></div>
```

This is just a shorthand for `h-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="h-1/2 md:h-full ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
The `h-<number>` and `size-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:
```
@theme { --spacing: 1px; }
```

Learn more about customizing the spacing scale in the theme variable documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a percentage
    * Matching viewport
    * Matching dynamic viewport
    * Matching large viewport
    * Matching small viewport
    * Setting both width and height
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
