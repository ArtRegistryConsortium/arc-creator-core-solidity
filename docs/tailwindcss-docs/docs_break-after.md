v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. break-after


Layout
# break-after
Utilities for controlling how a column or page should break after an element.
Class| Styles  
---|---  
`break-after-auto`| `break-after: auto;`  
`break-after-avoid`| `break-after: avoid;`  
`break-after-all`| `break-after: all;`  
`break-after-avoid-page`| `break-after: avoid-page;`  
`break-after-page`| `break-after: page;`  
`break-after-left`| `break-after: left;`  
`break-after-right`| `break-after: right;`  
`break-after-column`| `break-after: column;`  
## Examples
### Basic example
Use utilities like `break-after-column` and `break-after-page` to control how a column or page break should behave after an element:
```
<div class="columns-2"> <p>Well, let me tell you something, ...</p> <p class="break-after-column">Sure, go ahead, laugh...</p> <p>Maybe we can live without...</p> <p>Look. If you think this is...</p></div>
```

### Responsive design
Prefix a `break-after` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="break-after-column md:break-after-auto ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbreak-after&r=&sid=PMFMDJGK&qs=%7B%7D&cid=63202074)
