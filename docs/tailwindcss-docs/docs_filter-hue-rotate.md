v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. hue-rotate


Filters
# filter: hue-rotate()
Utilities for applying hue-rotate filters to an element.
Class| Styles  
---|---  
`hue-rotate-<number>`| `filter: hue-rotate(<number>deg);`  
`-hue-rotate-<number>`| `filter: hue-rotate(calc(<number>deg * -1));`  
`hue-rotate-(<custom-property>)`| `filter: hue-rotate(var(<custom-property>));`  
`hue-rotate-[<value>]`| `filter: hue-rotate(<value>);`  
## Examples
### Basic example
Use utilities like `hue-rotate-90` and `hue-rotate-180` to rotate the hue of an element by degrees:
hue-rotate-15
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
hue-rotate-90
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
hue-rotate-180
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
hue-rotate-270
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="hue-rotate-15" src="/img/mountains.jpg" /><img class="hue-rotate-90" src="/img/mountains.jpg" /><img class="hue-rotate-180" src="/img/mountains.jpg" /><img class="hue-rotate-270" src="/img/mountains.jpg" />
```

### Using negative values
Use utilities like `-hue-rotate-15` and `-hue-rotate-45` to set a negative hue rotate value:
-hue-rotate-15
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
-hue-rotate-45
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
-hue-rotate-90
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="-hue-rotate-15" src="/img/mountains.jpg" /><img class="-hue-rotate-45" src="/img/mountains.jpg" /><img class="-hue-rotate-90" src="/img/mountains.jpg" />
```

### Using a custom value
Use the `hue-rotate-[<value>]` syntax to set the hue rotation based on a completely custom value:
```
<img class="hue-rotate-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `hue-rotate-(<custom-property>)` syntax:
```
<img class="hue-rotate-(--my-hue-rotate) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `hue-rotate-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `filter: hue-rotate()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="hue-rotate-60 md:hue-rotate-0 ..." src="/img/mountains.jpg" />
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffilter-hue-rotate&r=&sid=PMFMDJGK&qs=%7B%7D&cid=20484870)
