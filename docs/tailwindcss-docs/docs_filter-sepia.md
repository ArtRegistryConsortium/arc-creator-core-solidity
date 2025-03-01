v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. sepia


Filters
# filter: sepia()
Utilities for applying sepia filters to an element.
Class| Styles  
---|---  
`sepia`| `filter: sepia(100%);`  
`sepia-<number>`| `filter: sepia(<number>%);`  
`sepia-(<custom-property>)`| `filter: sepia(var(<custom-property>));`  
`sepia-[<value>]`| `filter: sepia(<value>);`  
## Examples
### Basic example
Use utilities like `sepia` and `sepia-50` to control the sepia effect applied to an element:
sepia-0
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
sepia-50
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
sepia
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="sepia-0" src="/img/mountains.jpg" /><img class="sepia-50" src="/img/mountains.jpg" /><img class="sepia" src="/img/mountains.jpg" />
```

### Using a custom value
Use the `sepia-[<value>]` syntax to set the sepia amount based on a completely custom value:
```
<img class="sepia-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `sepia-(<custom-property>)` syntax:
```
<img class="sepia-(--my-sepia) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `sepia-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `filter: sepia()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="sepia md:sepia-0 ..." src="/img/mountains.jpg" />
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffilter-sepia&r=&sid=PMFMDJGK&qs=%7B%7D&cid=92019760)
