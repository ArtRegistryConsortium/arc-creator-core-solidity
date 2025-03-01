v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. isolation


Layout
# isolation
Utilities for controlling whether an element should explicitly create a new stacking context.
Class| Styles  
---|---  
`isolate`| `isolation: isolate;`  
`isolation-auto`| `isolation: auto;`  
## Examples
### Basic example
Use the `isolate` and `isolation-auto` utilities to control whether an element should explicitly create a new stacking context:
```
<div class="isolate ..."> <!-- ... --></div>
```

### Responsive design
Prefix an `isolation` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="isolate md:isolation-auto ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fisolation&r=&sid=PMFMDJGK&qs=%7B%7D&cid=54806069)
