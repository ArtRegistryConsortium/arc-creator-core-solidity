v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Borders
  2. outline-width


Borders
# outline-width
Utilities for controlling the width of an element's outline.
Class| Styles  
---|---  
`outline`| `outline-width: 1px;`  
`outline-<number>`| `outline-width: <number>px;`  
`outline-(length:<custom-property>)`| `outline-width: var(<custom-property>);`  
`outline-[<value>]`| `outline-width: <value>;`  
## Examples
### Basic example
Use `outline` or `outline-<number>` utilities like `outline-2` and `outline-4` to set the width of an element's outline:
outline
Button A
outline-2
Button B
outline-4
Button C
```
<button class="outline outline-offset-2 ...">Button A</button><button class="outline-2 outline-offset-2 ...">Button B</button><button class="outline-4 outline-offset-2 ...">Button C</button>
```

### Applying on focus
Prefix an `outline-width` utility with a variant like `focus:*` to only apply the utility in that state:
Focus the button to see the outline added
Save Changes
```
<button class="outline-offset-2 outline-sky-500 focus:outline-2 ...">Save Changes</button>
```

Learn more about using variants in the variants documentation.
### Using a custom value
Use the `outline-[<value>]` syntax to set the outline width based on a completely custom value:
```
<div class="outline-[2vw] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `outline-(length:<custom-property>)` syntax:
```
<div class="outline-(length:--my-outline-width) ..."> <!-- ... --></div>
```

This is just a shorthand for `outline-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `outline-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="outline md:outline-2 ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Applying on focus
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Foutline-width&r=&sid=PMFMDJGK&qs=%7B%7D&cid=50049562)
