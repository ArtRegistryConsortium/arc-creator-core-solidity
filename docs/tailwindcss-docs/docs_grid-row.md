v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. grid-row


Flexbox & Grid
# grid-row
Utilities for controlling how elements are sized and placed across grid rows.
Class| Styles  
---|---  
`row-span-<number>`| `grid-row: span <number> / span <number>;`  
`row-span-full`| `grid-row: 1 / -1;`  
`row-span-(<custom-property>)`| `grid-row: span var(<custom-property>) / span var(<custom-property>);`  
`row-span-[<value>]`| `grid-row: span <value> / span <value>;`  
`row-start-<number>`| `grid-row-start: <number>;`  
`-row-start-<number>`| `grid-row-start: calc(<number> * -1);`  
`row-start-auto`| `grid-row-start: auto;`  
`row-start-(<custom-property>)`| `grid-row-start: var(<custom-property>);`  
`row-start-[<value>]`| `grid-row-start: <value>;`  
`row-end-<number>`| `grid-row-end: <number>;`  
`-row-end-<number>`| `grid-row-end: calc(<number> * -1);`  
`row-end-auto`| `grid-row-end: auto;`  
`row-end-(<custom-property>)`| `grid-row-end: var(<custom-property>);`  
`row-end-[<value>]`| `grid-row-end: <value>;`  
`row-auto`| `grid-row: auto;`  
`row-(<custom-property>)`| `grid-row: var(<custom-property>);`  
`row-[<value>]`| `grid-row: <value>;`  
Show more
## Examples
### Spanning rows
Use `row-span-<number>` utilities like `row-span-2` and `row-span-4` to make an element span _n_ rows:
01
02
03
```
<div class="grid grid-flow-col grid-rows-3 gap-4"> <div class="row-span-3 ...">01</div> <div class="col-span-2 ...">02</div> <div class="col-span-2 row-span-2 ...">03</div></div>
```

### Starting and ending lines
Use `row-start-<number>` or `row-end-<number>` utilities like `row-start-2` and `row-end-3` to make an element start or end at the _nth_ grid line:
01
02
03
```
<div class="grid grid-flow-col grid-rows-3 gap-4"> <div class="row-span-2 row-start-2 ...">01</div> <div class="row-span-2 row-end-3 ...">02</div> <div class="row-start-1row-end-4 ...">03</div></div>
```

These can also be combined with the `row-span-<number>` utilities to span a specific number of rows.
### Using a custom value
Use utilities like `row-[<value>]`,`row-span-[<value>]`,`row-start-[<value>]`, and `row-end-[<value>]` to set the grid row size and location based on a completely custom value:
```
<div class="row-[span_16_/_span_16] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `row-(<custom-property>)` syntax:
```
<div class="row-(--my-rows) ..."> <!-- ... --></div>
```

This is just a shorthand for `row-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix `grid-row`,`grid-row-start`, and `grid-row-end` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="row-span-3 md:row-span-4 ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Spanning rows
    * Starting and ending lines
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fgrid-row&r=&sid=PMFMDJGK&qs=%7B%7D&cid=4148643)
