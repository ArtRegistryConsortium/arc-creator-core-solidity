v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. justify-content


Flexbox & Grid
# justify-content
Utilities for controlling how flex and grid items are positioned along a container's main axis.
Class| Styles  
---|---  
`justify-start`| `justify-content: flex-start;`  
`justify-end`| `justify-content: flex-end;`  
`justify-center`| `justify-content: center;`  
`justify-between`| `justify-content: space-between;`  
`justify-around`| `justify-content: space-around;`  
`justify-evenly`| `justify-content: space-evenly;`  
`justify-stretch`| `justify-content: stretch;`  
`justify-baseline`| `justify-content: baseline;`  
`justify-normal`| `justify-content: normal;`  
## Examples
### Start
Use `justify-start` to justify items against the start of the container's main axis:
01
02
03
```
<div class="flex justify-start ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Center
Use `justify-center` to justify items along the center of the container's main axis:
01
02
03
```
<div class="flex justify-center ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### End
Use `justify-end` to justify items against the end of the container's main axis:
01
02
03
```
<div class="flex justify-end ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Space between
Use `justify-between` to justify items along the container's main axis such that there is an equal amount of space between each item:
01
02
03
```
<div class="flex justify-between ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Space around
Use `justify-around` to justify items along the container's main axis such that there is an equal amount of space on each side of each item:
01
02
03
```
<div class="flex justify-around ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Space evenly
Use `justify-evenly` to justify items along the container's main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-around`:
01
02
03
```
<div class="flex justify-evenly ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Stretch
Use `justify-stretch` to allow content items to fill the available space along the container's main axis:
01
02
03
```
<div class="flex justify-stretch ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Normal
Use `justify-normal` to pack content items in their default position as if no `justify-content` value was set:
01
02
03
```
<div class="flex justify-normal ..."> <div>01</div> <div>02</div> <div>03</div></div>
```

### Responsive design
Prefix a `justify-content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="flex justify-start md:justify-between ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Start
    * Center
    * End
    * Space between
    * Space around
    * Space evenly
    * Stretch
    * Normal
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fjustify-content&r=&sid=PMFMDJGK&qs=%7B%7D&cid=21719378)
