v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Filters
  2. blur


Filters
# backdrop-filter: blur()
Utilities for applying backdrop blur filters to an element.
Class| Styles  
---|---  
`backdrop-blur-xs`| `backdrop-filter: blur(var(--blur-xs)); /* 4px */`  
`backdrop-blur-sm`| `backdrop-filter: blur(var(--blur-sm)); /* 8px */`  
`backdrop-blur-md`| `backdrop-filter: blur(var(--blur-md)); /* 12px */`  
`backdrop-blur-lg`| `backdrop-filter: blur(var(--blur-lg)); /* 16px */`  
`backdrop-blur-xl`| `backdrop-filter: blur(var(--blur-xl)); /* 24px */`  
`backdrop-blur-2xl`| `backdrop-filter: blur(var(--blur-2xl)); /* 40px */`  
`backdrop-blur-3xl`| `backdrop-filter: blur(var(--blur-3xl)); /* 64px */`  
`backdrop-blur-none`| `backdrop-filter: ;`  
`backdrop-blur-(<custom-property>)`| `backdrop-filter: blur(var(<custom-property>));`  
`backdrop-blur-[<value>]`| `backdrop-filter: blur(<value>);`  
## Examples
### Basic example
Use utilities like `backdrop-blur-sm` and `backdrop-blur-lg` to control an element’s backdrop blur:
backdrop-blur-none
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-blur-sm
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
backdrop-blur-md
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-blur-none ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-blur-sm ..."></div></div><div class="bg-[url(/img/mountains.jpg)]"> <div class="bg-white/30 backdrop-blur-md ..."></div></div>
```

### Using a custom value
Use the `backdrop-blur-[<value>]` syntax to set the backdrop blur based on a completely custom value:
```
<div class="backdrop-blur-[2px] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-blur-(<custom-property>)` syntax:
```
<div class="backdrop-blur-(--my-backdrop-blur) ..."> <!-- ... --></div>
```

This is just a shorthand for `backdrop-blur-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `backdrop-filter: blur()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="backdrop-blur-none md:backdrop-blur-lg ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
Use the `--blur-*` theme variables to customize the backdrop blur utilities in your project:
```
@theme { --blur-2xs: 2px; }
```

Now the `backdrop-blur-2xs` utility can be used in your markup:
```
<div class="backdrop-blur-2xs"> <!-- ... --></div>
```

Learn more about customizing your theme in the theme documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackdrop-filter-blur&r=&sid=PMFMDJGK&qs=%7B%7D&cid=51653569)
