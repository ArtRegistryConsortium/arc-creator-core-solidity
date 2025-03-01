v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Sizing
  2. max-height


Sizing
# max-height
Utilities for setting the maximum height of an element.
Class| Styles  
---|---  
`max-h-<number>`| `max-height: calc(var(--spacing) * <number>);`  
`max-h-<fraction>`| `max-height: calc(<fraction> * 100%);`  
`max-h-auto`| `max-height: auto;`  
`max-h-none`| `max-height: none;`  
`max-h-px`| `max-height: 1px;`  
`max-h-full`| `max-height: 100%;`  
`max-h-screen`| `max-height: 100vh;`  
`max-h-dvh`| `max-height: 100dvh;`  
`max-h-dvw`| `max-height: 100dvw;`  
`max-h-lvh`| `max-height: 100lvh;`  
`max-h-lvw`| `max-height: 100lvw;`  
`max-h-svh`| `max-height: 100svh;`  
`max-h-svw`| `max-height: 100svw;`  
`max-h-min`| `max-height: min-content;`  
`max-h-max`| `max-height: max-content;`  
`max-h-fit`| `max-height: fit-content;`  
`max-h-(<custom-property>)`| `max-height: var(<custom-property>);`  
`max-h-[<value>]`| `max-height: <value>;`  
Show more
## Examples
### Basic example
Use `max-h-<number>` utilities like `max-h-24` and `max-h-64` to set an element to a fixed maximum height based on the spacing scale:
max-h-80
max-h-64
max-h-48
max-h-40
max-h-32
max-h-24
```
<div class="h-96 ..."> <div class="h-full max-h-80 ...">max-h-80</div> <div class="h-full max-h-64 ...">max-h-64</div> <div class="h-full max-h-48 ...">max-h-48</div> <div class="h-full max-h-40 ...">max-h-40</div> <div class="h-full max-h-32 ...">max-h-32</div> <div class="h-full max-h-24 ...">max-h-24</div></div>
```

### Using a percentage
Use `max-h-full` or `max-h-<fraction>` utilities like `max-h-1/2` and `max-h-2/5` to give an element a percentage-based maximum height:
max-h-9/10
max-h-3/4
max-h-1/2
max-h-1/4
max-h-full
```
<div class="h-96 ..."> <div class="h-full max-h-9/10 ...">max-h-9/10</div> <div class="h-full max-h-3/4 ...">max-h-3/4</div> <div class="h-full max-h-1/2 ...">max-h-1/2</div> <div class="h-full max-h-1/4 ...">max-h-1/4</div> <div class="h-full max-h-full ...">max-h-full</div></div>
```

### Using a custom value
Use the `max-h-[<value>]` syntax to set the maximum height based on a completely custom value:
```
<div class="max-h-[220px] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `max-h-(<custom-property>)` syntax:
```
<div class="max-h-(--my-max-height) ..."> <!-- ... --></div>
```

This is just a shorthand for `max-h-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `max-height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="h-48 max-h-full md:max-h-screen ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
The `max-h-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:
```
@theme { --spacing: 1px; }
```

Learn more about customizing the spacing scale in the theme variable documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a percentage
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
