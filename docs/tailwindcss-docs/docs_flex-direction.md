v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. flex-direction


Flexbox & Grid
# flex-direction
Utilities for controlling the direction of flex items.
Class| Styles  
---|---  
`flex-row`| `flex-direction: row;`  
`flex-row-reverse`| `flex-direction: row-reverse;`  
`flex-col`| `flex-direction: column;`  
`flex-col-reverse`| `flex-direction: column-reverse;`  
## Examples
### Row
Use `flex-row` to position flex items horizontally in the same direction as text:
01
02
03
```
<div class="flex flex-row ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Row reversed
Use `flex-row-reverse` to position flex items horizontally in the opposite direction:
01
02
03
```
<div class="flex flex-row-reverse ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Column
Use `flex-col` to position flex items vertically:
01
02
03
```
<div class="flex flex-col ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Column reversed
Use `flex-col-reverse` to position flex items vertically in the opposite direction:
01
02
03
```
<div class="flex flex-col-reverse ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Responsive design
Prefix a `flex-direction` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="flex flex-col md:flex-row ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Row
    * Row reversed
    * Column
    * Column reversed
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fflex-direction&r=&sid=PMFMDJGK&qs=%7B%7D&cid=76455615)
