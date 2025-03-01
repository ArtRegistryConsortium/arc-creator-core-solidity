v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. grid-auto-columns


Flexbox & Grid
# grid-auto-columns
Utilities for controlling the size of implicitly-created grid columns.
Class| Styles  
---|---  
`auto-cols-auto`| `grid-auto-columns: auto;`  
`auto-cols-min`| `grid-auto-columns: min-content;`  
`auto-cols-max`| `grid-auto-columns: max-content;`  
`auto-cols-fr`| `grid-auto-columns: minmax(0, 1fr);`  
`auto-cols-(<custom-property>)`| `grid-auto-columns: var(<custom-property>);`  
`auto-cols-[<value>]`| `grid-auto-columns: <value>;`  
## Examples
### Basic example
Use utilities like `auto-cols-min` and `auto-cols-max` to control the size of implicitly-created grid columns:
```
<div class="grid auto-cols-max grid-flow-col"> <div>01</div> <div>02</div> <div>03</div></div>
```

### Using a custom value
Use the `auto-cols-[<value>]` syntax to set the size of implicitly-created grid columns based on a completely custom value:
```
<div class="auto-cols-[minmax(0,2fr)] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `auto-cols-(<custom-property>)` syntax:
```
<div class="auto-cols-(--my-auto-cols) ..."> <!-- ... --></div>
```

This is just a shorthand for `auto-cols-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `grid-auto-columns` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="grid grid-flow-col auto-cols-max md:auto-cols-min ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fgrid-auto-columns&r=&sid=PMFMDJGK&qs=%7B%7D&cid=28603309)
