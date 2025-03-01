v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. z-index


Layout
# z-index
Utilities for controlling the stack order of an element.
Class| Styles  
---|---  
`z-<number>`| `z-index: <number>;`  
`z-auto`| `z-index: auto;`  
`z-[<value>]`| `z-index: <value>;`  
`z-(<custom-property>)`| `z-index: var(<custom-property>);`  
## Examples
### Basic example
Use the `z-<number>` utilities like `z-10` and `z-50` to control the stack order (or three-dimensional positioning) of an element, regardless of the order it has been displayed:
05
04
03
02
01
```
<div class="z-40 ...">05</div><div class="z-30 ...">04</div><div class="z-20 ...">03</div><div class="z-10 ...">02</div><div class="z-0 ...">01</div>
```

### Using negative values
To use a negative z-index value, prefix the class name with a dash to convert it to a negative value:
01
02
03
04
05
```
<div class="...">05</div><div class="...">04</div><div class="-z-10 ...">03</div><div class="...">02</div><div class="...">01</div>
```

### Using a custom value
Use the `z-[<value>]` syntax to set the stack order based on a completely custom value:
```
<div class="z-[calc(var(--index)+1)] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `z-(<custom-property>)` syntax:
```
<div class="z-(--my-z) ..."> <!-- ... --></div>
```

This is just a shorthand for `z-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `z-index` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="z-0 md:z-50 ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fz-index&r=&sid=PMFMDJGK&qs=%7B%7D&cid=39737838)
