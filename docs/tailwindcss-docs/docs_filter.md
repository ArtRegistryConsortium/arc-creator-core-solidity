v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. filter


Filters
# filter
Utilities for applying filters to an element.
Class| Styles  
---|---  
`filter-none`| `filter: none;`  
`filter-(<custom-property>)`| `filter: var(<custom-property>);`  
`filter-[<value>]`| `filter: <value>;`  
## Examples
### Basic example
Use utilities like `blur-xs` and `grayscale` to apply filters to an element:
blur-xs
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
grayscale
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
combined
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="blur-xs" src="/img/mountains.jpg" /><img class="grayscale" src="/img/mountains.jpg" /><img class="blur-xsgrayscale" src="/img/mountains.jpg" />
```

You can combine the following filter utilities: blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, saturate, and sepia.
### Removing filters
Use the `filter-none` utility to remove all of the filters applied to an element:
```
<img class="blur-md brightness-150 invert md:filter-none" src="/img/mountains.jpg" />
```

### Using a custom value
Use the `filter-[<value>]` syntax to set the filter based on a completely custom value:
```
<img class="filter-[url('filters.svg#filter-id')] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `filter-(<custom-property>)` syntax:
```
<img class="filter-(--my-filter) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `filter-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Applying on hover
Prefix a `filter` utility with a variant like `hover:*` to only apply the utility in that state:
```
<img class="blur-sm hover:filter-none ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the variants documentation.
### Responsive design
Prefix a `filter` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="blur-sm md:filter-none ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Removing filters
    * Using a custom value
    * Applying on hover
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffilter&r=&sid=PMFMDJGK&qs=%7B%7D&cid=64090170)
