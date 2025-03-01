v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. saturate


Filters
# filter: saturate()
Utilities for applying saturation filters to an element.
Class| Styles  
---|---  
`saturate-<number>`| `filter: saturate(<number>%);`  
`saturate-(<custom-property>)`| `filter: saturate(var(<custom-property>));`  
`saturate-[<value>]`| `filter: saturate(<value>);`  
## Examples
### Basic example
Use utilities like `saturate-50` and `saturate-100` to control an element's saturation:
saturate-50
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
saturate-100
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
saturate-150
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
saturate-200
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="saturate-50 ..." src="/img/mountains.jpg" /><img class="saturate-100 ..." src="/img/mountains.jpg" /><img class="saturate-150 ..." src="/img/mountains.jpg" /><img class="saturate-200 ..." src="/img/mountains.jpg" />
```

### Using a custom value
Use the `saturate-[<value>]` syntax to set the saturation based on a completely custom value:
```
<img class="saturate-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `saturate-(<custom-property>)` syntax:
```
<img class="saturate-(--my-saturation) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `saturate-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `filter: saturate()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="saturate-50 md:saturate-150 ..." src="/img/mountains.jpg" />
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffilter-saturate&r=&sid=PMFMDJGK&qs=%7B%7D&cid=9468098)
