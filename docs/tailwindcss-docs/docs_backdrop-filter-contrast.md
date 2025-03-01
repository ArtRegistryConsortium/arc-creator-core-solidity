v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. contrast


Filters
# backdrop-filter: contrast()
Utilities for applying backdrop contrast filters to an element.
Class| Styles  
---|---  
`backdrop-contrast-<number>`| `backdrop-filter: contrast(<number>%);`  
`backdrop-contrast-(<custom-property>)`| `backdrop-filter: contrast(var(<custom-property>));`  
`backdrop-contrast-[<value>]`| `backdrop-filter: contrast(<value>);`  
## Examples
### Basic example
Use utilities like `backdrop-contrast-50` and `backdrop-contrast-100` to control an element's backdrop contrast:
backdrop-contrast-50
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-contrast-200
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-contrast-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-contrast-200 ..."></div></div>
```

### Using a custom value
Use the `backdrop-contrast-[<value>]` syntax to set the backdrop contrast based on a completely custom value:
```
<div class="backdrop-contrast-[.25] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-contrast-(<custom-property>)` syntax:
```
<div class="backdrop-contrast-(--my-backdrop-contrast) ..."> <!-- ... --></div>
```

This is just a shorthand for `backdrop-contrast-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `backdrop-filter: contrast()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="backdrop-contrast-125 md:backdrop-contrast-150 ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackdrop-filter-contrast&r=&sid=PMFMDJGK&qs=%7B%7D&cid=30549701)
