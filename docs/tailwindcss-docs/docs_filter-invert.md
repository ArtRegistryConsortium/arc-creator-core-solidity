v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. invert


Filters
# filter: invert()
Utilities for applying invert filters to an element.
Class| Styles  
---|---  
`invert`| `filter: invert(100%);`  
`invert-<number>`| `filter: invert(<number>%);`  
`invert-(<custom-property>)`| `filter: invert(var(<custom-property>))`  
`invert-[<value>]`| `filter: invert(<value>);`  
## Examples
### Basic example
Use utilities like `invert` and `invert-20` to control the color inversion of an element:
invert-0
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
invert-20
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
invert
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="invert-0" src="/img/mountains.jpg" /><img class="invert-20" src="/img/mountains.jpg" /><img class="invert" src="/img/mountains.jpg" />
```

### Using a custom value
Use the `invert-[<value>]` syntax to set the color inversion based on a completely custom value:
```
<img class="invert-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `invert-(<custom-property>)` syntax:
```
<img class="invert-(--my-inversion) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `invert-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `filter: invert()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="invert md:invert-0 ..." src="/img/mountains.jpg" />
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffilter-invert&r=&sid=PMFMDJGK&qs=%7B%7D&cid=73611160)
