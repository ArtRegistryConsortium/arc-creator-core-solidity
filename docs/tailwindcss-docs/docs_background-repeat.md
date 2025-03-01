v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Backgrounds
  2. background-repeat


Backgrounds
# background-repeat
Utilities for controlling the repetition of an element's background image.
Class| Styles  
---|---  
`bg-repeat`| `background-repeat: repeat;`  
`bg-repeat-x`| `background-repeat: repeat-x;`  
`bg-repeat-y`| `background-repeat: repeat-y;`  
`bg-repeat-space`| `background-repeat: space;`  
`bg-repeat-round`| `background-repeat: round;`  
`bg-no-repeat`| `background-repeat: no-repeat;`  
## Examples
### Basic example
Use the `bg-repeat` utility to repeat the background image both vertically and horizontally:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat ..."></div>
```

### Repeating horizontally
Use the `bg-repeat-x` utility to only repeat the background image horizontally:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-x ..."></div>
```

### Repeating vertically
Use the `bg-repeat-y` utility to only repeat the background image vertically:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-y ..."></div>
```

### Preventing clipping
Use the `bg-repeat-space` utility to repeat the background image without clipping:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-space ..."></div>
```

### Preventing clipping and gaps
Use the `bg-repeat-round` utility to repeat the background image without clipping, stretching if needed to avoid gaps:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-round ..."></div>
```

### Disabling repeating
Use the `bg-no-repeat` utility to prevent a background image from repeating:
```
<div class="bg-[url(/img/clouds.svg)] bg-center bg-no-repeat ..."></div>
```

### Responsive design
Prefix a `background-repeat` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-repeat md:bg-repeat-x ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Repeating horizontally
    * Repeating vertically
    * Preventing clipping
    * Preventing clipping and gaps
    * Disabling repeating
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-repeat&r=&sid=PMFMDJGK&qs=%7B%7D&cid=30101386)
