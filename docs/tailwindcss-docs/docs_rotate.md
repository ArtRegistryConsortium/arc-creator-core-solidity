v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. rotate


Transforms
# rotate
Utilities for rotating elements.
Class| Styles  
---|---  
`rotate-none`| `rotate: none;`  
`rotate-<number>`| `rotate: <number>deg;`  
`-rotate-<number>`| `rotate: calc(<number>deg * -1);`  
`rotate-(<custom-property>)`| `rotate: var(<custom-property>);`  
`rotate-[<value>]`| `rotate: <value>;`  
`rotate-x-<number>`| `transform: rotateX(<number>deg) var(--tw-rotate-y);`  
`-rotate-x-<number>`| `transform: rotateX(-<number>deg) var(--tw-rotate-y);`  
`rotate-x-(<custom-property>)`| `transform: rotateX(var(<custom-property>)) var(--tw-rotate-y);`  
`rotate-x-[<value>]`| `transform: rotateX(<value>) var(--tw-rotate-y);`  
`rotate-y-<number>`| `transform: var(--tw-rotate-x) rotateY(<number>deg);`  
`-rotate-y-<number>`| `transform: var(--tw-rotate-x) rotateY(-<number>deg);`  
`rotate-y-(<custom-property>)`| `transform: var(--tw-rotate-x) rotateY(var(<custom-property>));`  
`rotate-y-[<value>]`| `transform: var(--tw-rotate-x) rotateY(<value>);`  
`rotate-z-<number>`| `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<number>deg);`  
`-rotate-z-<number>`| `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-<number>deg);`  
`rotate-z-(<custom-property>)`| `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var(<custom-property>));`  
`rotate-z-[<value>]`| `transform: var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(<value>);`  
Show more
## Examples
### Basic example
Use `rotate-<number>` utilities like `rotate-45` and `rotate-90` to rotate an element by degrees:
rotate-45
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
rotate-90
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
rotate-210
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="rotate-45 ..." src="/img/mountains.jpg" /><img class="rotate-90 ..." src="/img/mountains.jpg" /><img class="rotate-210 ..." src="/img/mountains.jpg" />
```

### Using negative values
Use `-rotate-<number>` utilities like `-rotate-45` and `-rotate-90` to rotate an element counterclockwise by degrees:
-rotate-45
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
-rotate-90
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
-rotate-210
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="-rotate-45 ..." src="/img/mountains.jpg" /><img class="-rotate-90 ..." src="/img/mountains.jpg" /><img class="-rotate-210 ..." src="/img/mountains.jpg" />
```

### Rotating in 3D space
Use `rotate-x-<number>`, `rotate-y-<number>`, and `rotate-z-<number>` utilities like `rotate-x-50`, `-rotate-y-30`, and `rotate-z-45` together to rotate an element in 3D space:
rotate-x-50
rotate-z-45
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
rotate-x-15
-rotate-y-30
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
rotate-y-25
rotate-z-30
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /><img class="rotate-x-15-rotate-y-30 ..." src="/img/mountains.jpg" /><img class="rotate-y-25rotate-z-30 ..." src="/img/mountains.jpg" />
```

### Using a custom value
Use the `rotate-[<value>]` syntax to set the rotation based on a completely custom value:
```
<img class="rotate-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `rotate-(<custom-property>)` syntax:
```
<img class="rotate-(--my-rotation) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `rotate-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `rotate` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="rotate-45 md:rotate-60 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using negative values
    * Rotating in 3D space
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Frotate&r=&sid=PMFMDJGK&qs=%7B%7D&cid=86145207)
