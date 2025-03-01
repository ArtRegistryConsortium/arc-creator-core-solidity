v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. perspective


Transforms
# perspective
Utilities for controlling an element'ss perspective when placed in 3D space.
Class| Styles  
---|---  
`perspective-dramatic`| `perspective: var(--perspective-dramatic); /* 100px */`  
`perspective-near`| `perspective: var(--perspective-near); /* 300px */`  
`perspective-normal`| `perspective: var(--perspective-normal); /* 500px */`  
`perspective-midrange`| `perspective: var(--perspective-midrange); /* 800px */`  
`perspective-distant`| `perspective: var(--perspective-distant); /* 1200px */`  
`perspective-none`| `perspective: none;`  
`perspective-(<custom-property>)`| `perspective: var(<custom-property>);`  
`perspective-[<value>]`| `perspective: <value>;`  
## Examples
### Basic example
Use utilities like `perspective-normal` and `perspective-distant` to control how close or how far away the z-plane is from the screen:
perspective-dramatic
1
2
3
4
5
6
perspective-normal
1
2
3
4
5
6
```
<div class="size-20 perspective-dramatic ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div><div class="size-20 perspective-normal ..."> <div class="translate-z-12 rotate-x-0 bg-sky-300/75 ...">1</div> <div class="-translate-z-12 rotate-y-18 bg-sky-300/75 ...">2</div> <div class="translate-x-12 rotate-y-90 bg-sky-300/75 ...">3</div> <div class="-translate-x-12 -rotate-y-90 bg-sky-300/75 ...">4</div> <div class="-translate-y-12 rotate-x-90 bg-sky-300/75 ...">5</div> <div class="translate-y-12 -rotate-x-90 bg-sky-300/75 ...">6</div></div>
```

This is like moving a camera closer to or further away from an object.
### Removing a perspective
Use the `perspective-none` utility to remove a perspective transform from an element:
```
<div class="perspective-none ..."> <!-- ... --></div>
```

### Using a custom value
Use the `perspective-[<value>]` syntax to set the perspective based on a completely custom value:
```
<div class="perspective-[750px] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `perspective-(<custom-property>)` syntax:
```
<div class="perspective-(--my-perspective) ..."> <!-- ... --></div>
```

This is just a shorthand for `perspective-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `perspective` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="perspective-midrange md:perspective-dramatic ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
Use the `--perspective-*` theme variables to customize the perspective utilities in your project:
```
@theme { --perspective-remote: 1800px; }
```

Now the `perspective-remote` utility can be used in your markup:
```
<div class="perspective-remote"> <!-- ... --></div>
```

Learn more about customizing your theme in the theme documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Removing a perspective
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fperspective&r=&sid=PMFMDJGK&qs=%7B%7D&cid=61098118)
