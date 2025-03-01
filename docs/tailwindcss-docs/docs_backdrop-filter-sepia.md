v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. sepia


Filters
# backdrop-filter: sepia()
Utilities for applying backdrop sepia filters to an element.
Class| Styles  
---|---  
`backdrop-sepia`| `backdrop-filter: sepia(100%);`  
`backdrop-sepia-<number>`| `backdrop-filter: sepia(<number>%);`  
`backdrop-sepia-(<custom-property>)`| `backdrop-filter: sepia(var(<custom-property>));`  
`backdrop-sepia-[<value>]`| `backdrop-filter: sepia(<value>);`  
## Examples
### Basic example
Use utilities like `backdrop-sepia` and `backdrop-sepia-50` to control the sepia effect applied to an element's backdrop:
backdrop-sepia-0
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-sepia-50
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-sepia
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-sepia-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-sepia-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-sepia ..."></div></div>
```

### Using a custom value
Use the `backdrop-sepia-[<value>]` syntax to set the backdrop sepia based on a completely custom value:
```
<div class="backdrop-sepia-[.25] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-sepia-(<custom-property>)` syntax:
```
<div class="backdrop-sepia-(--my-backdrop-sepia) ..."> <!-- ... --></div>
```

This is just a shorthand for `backdrop-sepia-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `backdrop-filter: sepia()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="backdrop-sepia md:backdrop-sepia-0 ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackdrop-filter-sepia&r=&sid=PMFMDJGK&qs=%7B%7D&cid=12872006)
