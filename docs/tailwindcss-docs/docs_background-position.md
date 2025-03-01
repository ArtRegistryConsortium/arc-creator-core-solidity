v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Backgrounds
  2. background-position


Backgrounds
# background-position
Utilities for controlling the position of an element's background image.
Class| Styles  
---|---  
`bg-bottom`| `background-position: bottom;`  
`bg-center`| `background-position: center;`  
`bg-left`| `background-position: left;`  
`bg-left-bottom`| `background-position: left bottom;`  
`bg-left-top`| `background-position: left top;`  
`bg-right`| `background-position: right;`  
`bg-right-bottom`| `background-position: right bottom;`  
`bg-right-top`| `background-position: right top;`  
`bg-top`| `background-position: top;`  
`bg-(position:<custom-property>)`| `background-position: var(<custom-property>);`  
`bg-[<value>]`| `background-position: <value>;`  
## Examples
### Basic example
Use utilities like `bg-center`, `bg-right`, and `bg-left-top` to control the position of an element's background image:
Hover over these examples to see the full image
bg-left-top
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-top
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-right-top
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-left
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-center
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-right
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-left-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
bg-right-bottom
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)] bg-left-top"></div><div class="bg-[url(/img/mountains.jpg)] bg-top"></div><div class="bg-[url(/img/mountains.jpg)] bg-right-top"></div><div class="bg-[url(/img/mountains.jpg)] bg-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-center"></div><div class="bg-[url(/img/mountains.jpg)] bg-right"></div><div class="bg-[url(/img/mountains.jpg)] bg-left-bottom"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom"></div><div class="bg-[url(/img/mountains.jpg)] bg-right-bottom"></div>
```

### Using a custom value
Use the `bg-[<value>]` syntax to set the background position based on a completely custom value:
```
<div class="bg-[center_top_1rem] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `bg-(position:<custom-property>)` syntax:
```
<div class="bg-(position:--my-bg-position) ..."> <!-- ... --></div>
```

This is just a shorthand for `bg-[position:var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `background-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-center md:bg-top ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-position&r=&sid=PMFMDJGK&qs=%7B%7D&cid=18901290)
