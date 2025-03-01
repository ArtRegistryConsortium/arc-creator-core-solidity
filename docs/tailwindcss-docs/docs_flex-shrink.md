v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. flex-shrink


Flexbox & Grid
# flex-shrink
Utilities for controlling how flex items shrink.
Class| Styles  
---|---  
`shrink`| `flex-shrink: 1;`  
`shrink-<number>`| `flex-shrink: <number>;`  
`shrink-[<value>]`| `flex-shrink: <value>;`  
`shrink-(<custom-property>)`| `flex-shrink: var(<custom-property>);`  
## Examples
### Allowing flex items to shrink
Use `shrink` to allow a flex item to shrink if needed:
01
02
03
```
<div class="flex ..."> <div class="h-14 w-14 flex-none ...">01</div> <div class="h-14 w-64 shrink ...">02</div> <div class="h-14 w-14 flex-none ...">03</div></div>
```

### Preventing items from shrinking
Use `shrink-0` to prevent a flex item from shrinking:
01
02
03
```
<div class="flex ..."> <div class="h-16 flex-1 ...">01</div> <div class="h-16 w-32 shrink-0 ...">02</div> <div class="h-16 flex-1 ...">03</div></div>
```

### Using a custom value
Use the `shrink-[<value>]` syntax to set the flex shrink factor based on a completely custom value:
```
<div class="shrink-[calc(100vw-var(--sidebar))] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `shrink-(<custom-property>)` syntax:
```
<div class="shrink-(--my-shrink) ..."> <!-- ... --></div>
```

This is just a shorthand for `shrink-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `flex-shrink` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="shrink md:shrink-0 ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Allowing flex items to shrink
    * Preventing items from shrinking
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fflex-shrink&r=&sid=PMFMDJGK&qs=%7B%7D&cid=54960000)
