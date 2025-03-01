v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. place-self


Flexbox & Grid
# place-self
Utilities for controlling how an individual item is justified and aligned at the same time.
Class| Styles  
---|---  
`place-self-auto`| `place-self: auto;`  
`place-self-start`| `place-self: start;`  
`place-self-end`| `place-self: end;`  
`place-self-center`| `place-self: center;`  
`place-self-stretch`| `place-self: stretch;`  
## Examples
### Auto
Use `place-self-auto` to align an item based on the value of the container's `place-items` property:
01
02
03
04
05
06
```
<div class="grid grid-cols-3 gap-4 ..."> <div>01</div> <div class="place-self-auto ...">02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Start
Use `place-self-start` to align an item to the start on both axes:
01
02
03
04
05
06
```
<div class="grid grid-cols-3 gap-4 ..."> <div>01</div> <div class="place-self-start ...">02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Center
Use `place-self-center` to align an item at the center on both axes:
01
02
03
04
05
06
```
<div class="grid grid-cols-3 gap-4 ..."> <div>01</div> <div class="place-self-center ...">02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### End
Use `place-self-end` to align an item to the end on both axes:
01
02
03
04
05
06
```
<div class="grid grid-cols-3 gap-4 ..."> <div>01</div> <div class="place-self-end ...">02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Stretch
Use `place-self-stretch` to stretch an item on both axes:
01
02
03
04
05
06
```
<div class="grid grid-cols-3 gap-4 ..."> <div>01</div> <div class="place-self-stretch ...">02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Responsive design
Prefix a `place-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="place-self-start md:place-self-end ..."> <!-- ... --></div>
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
