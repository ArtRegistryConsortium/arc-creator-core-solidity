v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. grid-auto-flow


Flexbox & Grid
# grid-auto-flow
Utilities for controlling how elements in a grid are auto-placed.
Class| Styles  
---|---  
`grid-flow-row`| `grid-auto-flow: row;`  
`grid-flow-col`| `grid-auto-flow: column;`  
`grid-flow-dense`| `grid-auto-flow: dense;`  
`grid-flow-row-dense`| `grid-auto-flow: row dense;`  
`grid-flow-col-dense`| `grid-auto-flow: column dense;`  
## Examples
### Basic example
Use utilities like `grid-flow-col` and `grid-flow-row-dense` to control how the auto-placement algorithm works for a grid layout:
01
02
03
04
05
```
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ..."> <div class="col-span-2">01</div> <div class="col-span-2">02</div> <div>03</div> <div>04</div> <div>05</div></div>
```

### Responsive design
Prefix a `grid-auto-flow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="grid grid-flow-col md:grid-flow-row ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fgrid-auto-flow&r=&sid=PMFMDJGK&qs=%7B%7D&cid=22326867)
