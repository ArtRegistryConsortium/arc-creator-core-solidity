v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. invert


Filters
# backdrop-filter: invert()
Utilities for applying backdrop invert filters to an element.
Class| Styles  
---|---  
`backdrop-invert`| `backdrop-filter: invert(100%);`  
`backdrop-invert-<number>`| `backdrop-filter: invert(<number>%);`  
`backdrop-invert-(<custom-property>)`| `backdrop-filter: invert(var(<custom-property>))`  
`backdrop-invert-[<value>]`| `backdrop-filter: invert(<value>);`  
## Examples
### Basic example
Use utilities like `backdrop-invert` and `backdrop-invert-65` to control the color inversion of an element's backdrop:
backdrop-invert-0
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-invert-65
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-invert
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-invert-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-invert-65 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-invert ..."></div></div>
```

### Using a custom value
Use the `backdrop-invert-[<value>]` syntax to set the backdrop inversion based on a completely custom value:
```
<div class="backdrop-invert-[.25] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-invert-(<custom-property>)` syntax:
```
<div class="backdrop-invert-(--my-backdrop-inversion) ..."> <!-- ... --></div>
```

This is just a shorthand for `backdrop-invert-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `backdrop-filter: invert()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="backdrop-invert-0 md:backdrop-invert ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackdrop-filter-invert&r=&sid=PMFMDJGK&qs=%7B%7D&cid=49323991)
