v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. grayscale


Filters
# filter: grayscale()
Utilities for applying grayscale filters to an element.
Class| Styles  
---|---  
`grayscale`| `filter: grayscale(100%);`  
`grayscale-<number>`| `filter: grayscale(<number>%);`  
`grayscale-(<custom-property>)`| `filter: grayscale(var(<custom-property>));`  
`grayscale-[<value>]`| `filter: grayscale(<value>);`  
## Examples
### Basic example
Use utilities like `grayscale` and `grayscale-75` to control the amount of grayscale effect applied to an element:
grayscale-0
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
grayscale-25
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
grayscale-50
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
grayscale
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="grayscale-0 ..." src="/img/mountains.jpg" /><img class="grayscale-25 ..." src="/img/mountains.jpg" /><img class="grayscale-50 ..." src="/img/mountains.jpg" /><img class="grayscale ..." src="/img/mountains.jpg" />
```

### Using a custom value
Use the `grayscale-[<value>]` syntax to set the grayscale based on a completely custom value:
```
<img class="grayscale-[0.5] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `grayscale-(<custom-property>)` syntax:
```
<img class="grayscale-(--my-grayscale) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `grayscale-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `filter: grayscale()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="grayscale md:grayscale-0 ..." src="/img/mountains.jpg" />
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
