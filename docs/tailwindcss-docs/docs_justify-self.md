v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. justify-self


Flexbox & Grid
# justify-self
Utilities for controlling how an individual grid item is aligned along its inline axis.
Class| Styles  
---|---  
`justify-self-auto`| `justify-self: auto;`  
`justify-self-start`| `justify-self: start;`  
`justify-self-end`| `justify-self: end;`  
`justify-self-center`| `justify-self: center;`  
`justify-self-stretch`| `justify-self: stretch;`  
## Examples
### Auto
Use `justify-self-auto` to align an item based on the value of the grid's `justify-items` property:
01
02
03
04
05
06
```
<div class="grid justify-items-stretch ..."> <!-- ... --> <div class="justify-self-auto ...">02</div> <!-- ... --></div>
```

### Start
Use `justify-self-start` to align a grid item to the start of its inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-stretch ..."> <!-- ... --> <div class="justify-self-start ...">02</div> <!-- ... --></div>
```

### Center
Use `justify-self-center` to align a grid item along the center of its inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-stretch ..."> <!-- ... --> <div class="justify-self-center ...">02</div> <!-- ... --></div>
```

### End
Use `justify-self-end` to align a grid item to the end of its inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-stretch ..."> <!-- ... --> <div class="justify-self-end ...">02</div> <!-- ... --></div>
```

### Stretch
Use `justify-self-stretch` to stretch a grid item to fill the grid area on its inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-start ..."> <!-- ... --> <div class="justify-self-stretch ...">02</div> <!-- ... --></div>
```

### Responsive design
Prefix a `justify-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="justify-self-start md:justify-self-end ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Auto
    * Start
    * Center
    * End
    * Stretch
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fjustify-self&r=&sid=PMFMDJGK&qs=%7B%7D&cid=66861548)
