v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. transform


Transforms
# transform
Utilities for transforming elements.
Class| Styles  
---|---  
`transform-(<custom-property>)`| `transform: var(<custom-property>);`  
`transform-[<value>]`| `transform: <value>;`  
`transform-none`| `transform: none;`  
`transform-gpu`| `transform: translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);`  
`transform-cpu`| `transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);`  
## Examples
### Hardware acceleration
If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility:
```
<div class="scale-150 transform-gpu"> <!-- ... --></div>
```

Use the `transform-cpu` utility to force things back to the CPU if you need to undo this conditionally.
### Removing transforms
Use the `transform-none` utility to remove all of the transforms on an element at once:
```
<div class="skew-y-3 md:transform-none"> <!-- ... --></div>
```

### Using a custom value
Use the `transform-[<value>]` syntax to set the transform based on a completely custom value:
```
<div class="transform-[matrix(1,2,3,4,5,6)] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `transform-(<custom-property>)` syntax:
```
<div class="transform-(--my-transform) ..."> <!-- ... --></div>
```

This is just a shorthand for `transform-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### On this page
  * Quick reference
  * Examples
    * Hardware acceleration
    * Removing transforms
    * Using a custom value


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftransform&r=&sid=PMFMDJGK&qs=%7B%7D&cid=62743028)
