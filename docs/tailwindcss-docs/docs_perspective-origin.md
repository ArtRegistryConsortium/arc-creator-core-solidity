v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. perspective-origin


Transforms
# perspective-origin
Utilities for controlling an element's perspective origin when placed in 3D space.
Class| Styles  
---|---  
`perspective-origin-center`| `perspective-origin: center;`  
`perspective-origin-top`| `perspective-origin: top;`  
`perspective-origin-top-right`| `perspective-origin: top right;`  
`perspective-origin-right`| `perspective-origin: right;`  
`perspective-origin-bottom-right`| `perspective-origin: bottom right;`  
`perspective-origin-bottom`| `perspective-origin: bottom;`  
`perspective-origin-bottom-left`| `perspective-origin: bottom left;`  
`perspective-origin-left`| `perspective-origin: left;`  
`perspective-origin-top-left`| `perspective-origin: top left;`  
`perspective-origin-(<custom-property>)`| `perspective-origin: var(<custom-property>);`  
`perspective-origin-[<value>]`| `perspective-origin: <value>;`  
## Examples
### Basic example
Use utilities like `perspective-origin-top` and `perspective-origin-bottom-left` to control where the vanishing point of a perspective is located:
perspective-origin-top-left
1
2
3
4
5
6
perspective-origin-bottom-right
1
2
3
4
5
6
```
<div class="size-20 perspective-near perspective-origin-top-left ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div><div class="size-20 perspective-near perspective-origin-bottom-right …"> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div>
```

### Using a custom value
Use the `perspective-origin-[<value>]` syntax to set the perspective origin based on a completely custom value:
```
<div class="perspective-origin-[200%_150%] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `perspective-origin-(<custom-property>)` syntax:
```
<div class="perspective-origin-(--my-perspective-origin) ..."> <!-- ... --></div>
```

This is just a shorthand for `perspective-origin-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `perspective-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="perspective-origin-center md:perspective-origin-bottom-left ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fperspective-origin&r=&sid=PMFMDJGK&qs=%7B%7D&cid=34285654)
