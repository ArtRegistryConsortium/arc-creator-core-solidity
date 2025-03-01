v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. SVG
  2. stroke-width


SVG
# stroke-width
Utilities for styling the stroke width of SVG elements.
Class| Styles  
---|---  
`stroke-<number>`| `stroke-width: <number>;`  
`stroke-(length:<custom-property>)`| `stroke-width: var(<custom-property>);`  
`stroke-[<value>]`| `stroke-width: <value>;`  
## Examples
### Basic example
Use `stroke-<number>` utilities like `stroke-1` and `stroke-2` to set the stroke width of an SVG:
```
<svg class="stroke-1 ..."></svg><svg class="stroke-2 ..."></svg>
```

This can be useful for styling icon sets like Heroicons.
### Using a custom value
Use the `stroke-[<value>]` syntax to set the stroke width based on a completely custom value:
```
<div class="stroke-[1.5] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `stroke-(length:<custom-property>)` syntax:
```
<div class="stroke-(length:--my-stroke-width) ..."> <!-- ... --></div>
```

This is just a shorthand for `stroke-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `stroke-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="stroke-1 md:stroke-2 ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fstroke-width&r=&sid=PMFMDJGK&qs=%7B%7D&cid=31816001)
