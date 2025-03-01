v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. hue-rotate


Filters
# backdrop-filter: hue-rotate()
Utilities for applying backdrop hue-rotate filters to an element.
Class| Styles  
---|---  
`backdrop-hue-rotate-<number>`| `backdrop-filter: hue-rotate(<number>deg);`  
`-backdrop-hue-rotate-<number>`| `backdrop-filter: hue-rotate(calc(<number>deg * -1));`  
`backdrop-hue-rotate-(<custom-property>)`| `backdrop-filter: hue-rotate(var(<custom-property>));`  
`backdrop-hue-rotate-[<value>]`| `backdrop-filter: hue-rotate(<value>);`  
## Examples
### Basic example
Use utilities like `backdrop-hue-rotate-90` and `backdrop-hue-rotate-180` to rotate the hue of an element's backdrop:
backdrop-hue-rotate-90
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-hue-rotate-180
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-hue-rotate-270
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-hue-rotate-90 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-hue-rotate-180 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-hue-rotate-270 ..."></div></div>
```

### Using negative values
Use utilities like `-backdrop-hue-rotate-90` and `-backdrop-hue-rotate-180` to set a negative backdrop hue rotation value:
-backdrop-hue-rotate-15
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
-backdrop-hue-rotate-45
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
-backdrop-hue-rotate-90
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 -backdrop-hue-rotate-15 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 -backdrop-hue-rotate-45 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 -backdrop-hue-rotate-90 ..."></div></div>
```

### Using a custom value
Use the `backdrop-hue-rotate-[<value>]` syntax to set the backdrop hue rotation based on a completely custom value:
```
<div class="backdrop-hue-rotate-[3.142rad] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-hue-rotate-(<custom-property>)` syntax:
```
<div class="backdrop-hue-rotate-(--my-backdrop-hue-rotation) ..."> <!-- ... --></div>
```

This is just a shorthand for `backdrop-hue-rotate-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `backdrop-filter: hue-rotate()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="backdrop-hue-rotate-15 md:backdrop-hue-rotate-0 ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using negative values
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackdrop-filter-hue-rotate&r=&sid=PMFMDJGK&qs=%7B%7D&cid=51534960)
