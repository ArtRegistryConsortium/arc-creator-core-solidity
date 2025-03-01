v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. justify-items


Flexbox & Grid
# justify-items
Utilities for controlling how grid items are aligned along their inline axis.
Class| Styles  
---|---  
`justify-items-start`| `justify-items: start;`  
`justify-items-end`| `justify-items: end;`  
`justify-items-center`| `justify-items: center;`  
`justify-items-stretch`| `justify-items: stretch;`  
`justify-items-normal`| `justify-items: normal;`  
## Examples
### Start
Use `justify-items-start` to justify grid items against the start of their inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-start ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### End
Use `justify-items-end` to justify grid items against the end of their inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-end ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Center
Use `justify-items-center` to justify grid items along their inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-center ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Stretch
Use `justify-items-stretch` to stretch items along their inline axis:
01
02
03
04
05
06
```
<div class="grid justify-items-stretch ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Responsive design
Prefix a `justify-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="grid justify-items-start md:justify-items-center ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Start
    * End
    * Center
    * Stretch
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fjustify-items&r=&sid=PMFMDJGK&qs=%7B%7D&cid=51715732)
