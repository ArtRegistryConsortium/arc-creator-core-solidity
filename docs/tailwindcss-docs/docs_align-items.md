v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. align-items


Flexbox & Grid
# align-items
Utilities for controlling how flex and grid items are positioned along a container's cross axis.
Class| Styles  
---|---  
`items-start`| `align-items: flex-start;`  
`items-end`| `align-items: flex-end;`  
`items-center`| `align-items: center;`  
`items-baseline`| `align-items: baseline;`  
`items-stretch`| `align-items: stretch;`  
## Examples
### Stretch
Use `items-stretch` to stretch items to fill the container's cross axis:
01
02
03
```
<div class="flex items-stretch ..."> <div class="py-4">01</div> <div class="py-12">02</div> <div class="py-8">03</div></div>
```

### Start
Use `items-start` to align items to the start of the container's cross axis:
01
02
03
```
<div class="flex items-start ..."> <div class="py-4">01</div> <div class="py-12">02</div> <div class="py-8">03</div></div>
```

### Center
Use `items-center` to align items along the center of the container's cross axis:
01
02
03
```
<div class="flex items-center ..."> <div class="py-4">01</div> <div class="py-12">02</div> <div class="py-8">03</div></div>
```

### End
Use `items-end` to align items to the end of the container's cross axis:
01
02
03
```
<div class="flex items-end ..."> <div class="py-4">01</div> <div class="py-12">02</div> <div class="py-8">03</div></div>
```

### Baseline
Use `items-baseline` to align items along the container's cross axis such that all of their baselines align:
01
02
03
```
<div class="flex items-baseline ..."> <div class="pt-2 pb-6">01</div> <div class="pt-8 pb-12">02</div> <div class="pt-12 pb-4">03</div></div>
```

### Responsive design
Prefix an `align-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="flex items-stretch md:items-center ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Stretch
    * Start
    * Center
    * End
    * Baseline
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
