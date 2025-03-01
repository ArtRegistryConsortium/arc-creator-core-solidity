v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. align-self


Flexbox & Grid
# align-self
Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.
Class| Styles  
---|---  
`self-auto`| `align-self: auto;`  
`self-start`| `align-self: flex-start;`  
`self-end`| `align-self: flex-end;`  
`self-center`| `align-self: center;`  
`self-stretch`| `align-self: stretch;`  
`self-baseline`| `align-self: baseline;`  
## Examples
### Auto
Use `self-auto` to align an item based on the value of the container's `align-items` property:
01
02
03
```
<div class="flex items-stretch ..."> <div>01</div> <div class="self-auto ...">02</div> <div>03</div></div>
```

### Start
Use `self-start` to align an item to the start of the container's cross axis, despite the container's `align-items` value:
01
02
03
```
<div class="flex items-stretch ..."> <div>01</div> <div class="self-start ...">02</div> <div>03</div></div>
```

### Center
Use `self-center` to align an item along the center of the container's cross axis, despite the container's `align-items` value:
01
02
03
```
<div class="flex items-stretch ..."> <div>01</div> <div class="self-center ...">02</div> <div>03</div></div>
```

### End
Use `self-end` to align an item to the end of the container's cross axis, despite the container's `align-items` value:
01
02
03
```
<div class="flex items-stretch ..."> <div>01</div> <div class="self-end ...">02</div> <div>03</div></div>
```

### Stretch
Use `self-stretch` to stretch an item to fill the container's cross axis, despite the container's `align-items` value:
01
02
03
```
<div class="flex items-stretch ..."> <div>01</div> <div class="self-stretch ...">02</div> <div>03</div></div>
```

### Responsive design
Prefix an `align-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="self-auto md:self-end ..."> <!-- ... --></div>
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
