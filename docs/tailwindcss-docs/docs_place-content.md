v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. place-content


Flexbox & Grid
# place-content
Utilities for controlling how content is justified and aligned at the same time.
Class| Styles  
---|---  
`place-content-center`| `place-content: center;`  
`place-content-start`| `place-content: start;`  
`place-content-end`| `place-content: end;`  
`place-content-between`| `place-content: space-between;`  
`place-content-around`| `place-content: space-around;`  
`place-content-evenly`| `place-content: space-evenly;`  
`place-content-baseline`| `place-content: baseline;`  
`place-content-stretch`| `place-content: stretch;`  
## Examples
### Center
Use `place-content-center` to pack items in the center of the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-center gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### Start
Use `place-content-start` to pack items against the start of the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-start gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### End
Use `place-content-end` to pack items against the end of the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-end gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### Space between
Use `place-content-between` to distribute grid items along the block axis so that there is an equal amount of space between each row on the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-between gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### Space around
Use `place-content-around` to distribute grid items such that there is an equal amount of space around each row on the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-around gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### Space evenly
Use `place-content-evenly` to distribute grid items such that they are evenly spaced on the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-evenly gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### Stretch
Use `place-content-stretch` to stretch grid items along their grid areas on the block axis:
01
02
03
04
```
<div class="grid h-48 grid-cols-2 place-content-stretch gap-4 ..."> <div>01</div> <div>02</div> <div>03</div> <div>04</div></div>
```

### Responsive design
Prefix a `place-content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="grid place-content-start md:place-content-center ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Center
    * Start
    * End
    * Space between
    * Space around
    * Space evenly
    * Stretch
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
