v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Borders
  2. outline-offset


Borders
# outline-offset
Utilities for controlling the offset of an element's outline.
Class| Styles  
---|---  
`outline-offset-<number>`| `outline-offset: <number>px;`  
`-outline-offset-<number>`| `outline-offset: calc(<number>px * -1);`  
`outline-offset-(<custom-property>)`| `outline-offset: var(<custom-property>);`  
`outline-offset-[<value>]`| `outline-offset: <value>;`  
## Examples
### Basic example
Use utilities like `outline-offset-2` and `outline-offset-4` to change the offset of an element's outline:
outline-offset-0
Button A
outline-offset-2
Button B
outline-offset-4
Button C
```
<button class="outline-2 outline-offset-0 ...">Button A</button><button class="outline-2 outline-offset-2 ...">Button B</button><button class="outline-2 outline-offset-4 ...">Button C</button>
```

### Using a custom value
Use the `outline-offset-[<value>]` syntax to set the outline offset based on a completely custom value:
```
<div class="outline-offset-[2vw] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `outline-offset-(<custom-property>)` syntax:
```
<div class="outline-offset-(--my-outline-offset) ..."> <!-- ... --></div>
```

This is just a shorthand for `outline-offset-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `outline-offset` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="outline md:outline-offset-2 ..."> <!-- ... --></div>
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
