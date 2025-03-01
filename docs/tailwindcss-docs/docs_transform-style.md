v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. transform-style


Transforms
# transform-style
Utilities for controlling if an elements children are placed in 3D space.
Class| Styles  
---|---  
`transform-3d`| `transform-style: preserve-3d;`  
`transform-flat`| `transform-style: flat;`  
## Examples
### Basic example
Use `transform-3d` to position children in 3D space:
transform-flat
1
2
3
4
5
6
transform-3d
1
2
3
4
5
6
```
<div class="size-20 transform-flat ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div><div class="size-20 transform-3d ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div>
```

Without this, any children will only be transformed in 2D space and not in 3D space.
### Responsive design
Prefix a `transform-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="transform-3d md:transform-flat ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftransform-style&r=&sid=PMFMDJGK&qs=%7B%7D&cid=71575426)
