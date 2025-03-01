v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. grid-auto-rows


Flexbox & Grid
# grid-auto-rows
Utilities for controlling the size of implicitly-created grid rows.
Class| Styles  
---|---  
`auto-rows-auto`| `grid-auto-rows: auto;`  
`auto-rows-min`| `grid-auto-rows: min-content;`  
`auto-rows-max`| `grid-auto-rows: max-content;`  
`auto-rows-fr`| `grid-auto-rows: minmax(0, 1fr);`  
`auto-rows-(<custom-property>)`| `grid-auto-rows: var(<custom-property>);`  
`auto-rows-[<value>]`| `grid-auto-rows: <value>;`  
## Examples
### Basic example
Use utilities like `auto-rows-min` and `auto-rows-max` to control the size of implicitly-created grid rows:
```
<div class="grid grid-flow-row auto-rows-max"> <div>01</div> <div>02</div> <div>03</div></div>
```

### Using a custom value
Use the `auto-rows-[<value>]` syntax to set the size of implicitly-created grid rows based on a completely custom value:
```
<div class="auto-rows-[minmax(0,2fr)] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `auto-rows-(<custom-property>)` syntax:
```
<div class="auto-rows-(--my-auto-rows) ..."> <!-- ... --></div>
```

This is just a shorthand for `auto-rows-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `grid-auto-rows` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="grid grid-flow-row auto-rows-max md:auto-rows-min ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fgrid-auto-rows&r=&sid=PMFMDJGK&qs=%7B%7D&cid=29153345)
