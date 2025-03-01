v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. object-position


Layout
# object-position
Utilities for controlling how a replaced element's content should be positioned within its container.
Class| Styles  
---|---  
`object-bottom`| `object-position: bottom;`  
`object-center`| `object-position: center;`  
`object-left`| `object-position: left;`  
`object-left-bottom`| `object-position: left bottom;`  
`object-left-top`| `object-position: left top;`  
`object-right`| `object-position: right;`  
`object-right-bottom`| `object-position: right bottom;`  
`object-right-top`| `object-position: right top;`  
`object-top`| `object-position: top;`  
`object-(<custom-property>)`| `object-position: var(<custom-property>);`  
`object-[<value>]`| `object-position: <value>;`  
## Examples
### Basic example
Use utilities like `object-left` and `object-right-bottom` to specify how a replaced element's content should be positioned within its container:
Hover over examples to see the full image
object-left-top
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-top
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-right-top
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-left
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-center
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-right
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-left-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
object-right-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="size-24 object-left-top ..." src="/img/mountains.jpg" /><img class="size-24 object-top ..." src="/img/mountains.jpg" /><img class="size-24 object-right-top ..." src="/img/mountains.jpg" /><img class="size-24 object-left ..." src="/img/mountains.jpg" /><img class="size-24 object-center ..." src="/img/mountains.jpg" /><img class="size-24 object-right ..." src="/img/mountains.jpg" /><img class="size-24 object-left-bottom ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom ..." src="/img/mountains.jpg" /><img class="size-24 object-right-bottom ..." src="/img/mountains.jpg" />
```

### Using a custom value
Use the `object-[<value>]` syntax to set the object position based on a completely custom value:
```
<img class="object-[25%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `object-(<custom-property>)` syntax:
```
<img class="object-(--my-object) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `object-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `object-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="object-center md:object-top ..." src="/img/mountains.jpg" />
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
