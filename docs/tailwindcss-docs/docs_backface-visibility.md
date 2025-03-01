v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. backface-visibility


Transforms
# backface-visibility
Utilities for controlling if an element's backface is visible.
Class| Styles  
---|---  
`backface-hidden`| `backface-visibility: hidden;`  
`backface-visible`| `backface-visibility: visible;`  
## Examples
### Basic example
Use the `backface-visible` utility to show the backface of an element, like a cube, even when it's rotated away from view:
backface-hidden
1
2
3
4
5
6
backface-visible
1
2
3
4
5
6
```
<div class="size-20 ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden ...">6</div></div><div class="size-20 ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible ...">6</div></div>
```

### Responsive design
Prefix a `backface-visibility` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="backface-visible md:backface-hidden ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackface-visibility&r=&sid=PMFMDJGK&qs=%7B%7D&cid=83557668)
