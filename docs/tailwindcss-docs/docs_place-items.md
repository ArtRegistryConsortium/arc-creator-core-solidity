v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. place-items


Flexbox & Grid
# place-items
Utilities for controlling how items are justified and aligned at the same time.
Class| Styles  
---|---  
`place-items-start`| `place-items: start;`  
`place-items-end`| `place-items: end;`  
`place-items-center`| `place-items: center;`  
`place-items-baseline`| `place-items: baseline;`  
`place-items-stretch`| `place-items: stretch;`  
## Examples
### Start
Use `place-items-start` to place grid items on the start of their grid areas on both axes:
01
02
03
04
05
06
```
<div class="grid grid-cols-3 place-items-start gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### End
Use `place-items-end` to place grid items on the end of their grid areas on both axes:
01
02
03
04
05
06
```
<div class="grid h-56 grid-cols-3 place-items-end gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Center
Use `place-items-center` to place grid items on the center of their grid areas on both axes:
01
02
03
04
05
06
```
<div class="grid h-56 grid-cols-3 place-items-center gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

### Stretch
Use `place-items-stretch` to stretch items along their grid areas on both axes:
01
02
03
04
05
06
```
<div class="grid h-56 grid-cols-3 place-items-stretch gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div> <div>05</div> <div>06</div></div>
```

## Responsive design
Prefix a `place-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="grid place-items-start md:place-items-center ..."> <!-- ... --></div>
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
