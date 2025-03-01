v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. break-before


Layout
# break-before
Utilities for controlling how a column or page should break before an element.
Class| Styles  
---|---  
`break-before-auto`| `break-before: auto;`  
`break-before-avoid`| `break-before: avoid;`  
`break-before-all`| `break-before: all;`  
`break-before-avoid-page`| `break-before: avoid-page;`  
`break-before-page`| `break-before: page;`  
`break-before-left`| `break-before: left;`  
`break-before-right`| `break-before: right;`  
`break-before-column`| `break-before: column;`  
## Examples
### Basic example
Use utilities like `break-before-column` and `break-before-page` to control how a column or page break should behave before an element:
```
<div class="columns-2"> <p>Well, let me tell you something, ...</p> <p class="break-before-column">Sure, go ahead, laugh...</p> <p>Maybe we can live without...</p> <p>Look. If you think this is...</p></div>
```

### Responsive design
Prefix a `break-before` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="break-before-column md:break-before-auto ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbreak-before&r=&sid=PMFMDJGK&qs=%7B%7D&cid=35472341)
