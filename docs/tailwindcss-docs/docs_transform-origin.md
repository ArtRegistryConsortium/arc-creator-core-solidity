v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. transform-origin


Transforms
# transform-origin
Utilities for specifying the origin for an element's transformations.
Class| Styles  
---|---  
`origin-center`| `transform-origin: center;`  
`origin-top`| `transform-origin: top;`  
`origin-top-right`| `transform-origin: top right;`  
`origin-right`| `transform-origin: right;`  
`origin-bottom-right`| `transform-origin: bottom right;`  
`origin-bottom`| `transform-origin: bottom;`  
`origin-bottom-left`| `transform-origin: bottom left;`  
`origin-left`| `transform-origin: left;`  
`origin-top-left`| `transform-origin: top left;`  
`origin-(<custom-property>)`| `transform-origin: var(<custom-property>);`  
`origin-[<value>]`| `transform-origin: <value>;`  
## Examples
### Basic example
Use utilities like `origin-top` and `origin-bottom-left` to set an element's transform origin:
origin-center
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
origin-top-left
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
origin-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="origin-center rotate-45 ..." src="/img/mountains.jpg" /><img class="origin-top-left rotate-12 ..." src="/img/mountains.jpg" /><img class="origin-bottom -rotate-12 ..." src="/img/mountains.jpg" />
```

### Using a custom value
Use the `origin-[<value>]` syntax to set the transform origin based on a completely custom value:
```
<img class="origin-[33%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `origin-(<custom-property>)` syntax:
```
<img class="origin-(--my-transform-origin) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `origin-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `transform-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="origin-center md:origin-top ..." src="/img/mountains.jpg" />
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftransform-origin&r=&sid=PMFMDJGK&qs=%7B%7D&cid=17381487)
