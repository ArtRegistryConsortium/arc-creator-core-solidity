v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. order


Flexbox & Grid
# order
Utilities for controlling the order of flex and grid items.
Class| Styles  
---|---  
`order-<number>`| `order: <number>;`  
`-order-<number>`| `order: calc(<number> * -1);`  
`order-first`| `order: calc(-infinity);`  
`order-last`| `order: calc(infinity);`  
`order-none`| `order: 0;`  
`order-(<custom-property>)`| `order: var(<custom-property>);`  
`order-[<value>]`| `order: <value>;`  
## Examples
### Explicitly setting a sort order
Use `order-<number>` utilities like `order-1` and `order-3` to render flex and grid items in a different order than they appear in the document:
01
02
03
```
<div class="flex justify-between ..."> <div class="order-3 ...">01</div> <div class="order-1 ...">02</div> <div class="order-2 ...">03</div></div>
```

### Ordering items first or last
Use the `order-first` and `order-last` utilities to render flex and grid items first or last:
01
02
03
```
<div class="flex justify-between ..."> <div class="order-last ...">01</div> <div class="...">02</div> <div class="order-first ...">03</div></div>
```

### Using negative values
To use a negative order value, prefix the class name with a dash to convert it to a negative value:
```
<div class="-order-1"> <!-- ... --></div>
```

### Using a custom value
Use the `order-[<value>]` syntax to set the order based on a completely custom value:
```
<div class="order-[min(var(--total-items),10)] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `order-(<custom-property>)` syntax:
```
<div class="order-(--my-order) ..."> <!-- ... --></div>
```

This is just a shorthand for `order-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `order` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="order-first md:order-last ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Explicitly setting a sort order
    * Ordering items first or last
    * Using negative values
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
