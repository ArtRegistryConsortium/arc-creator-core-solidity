v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Effects
  2. mix-blend-mode


Effects
# mix-blend-mode
Utilities for controlling how an element should blend with the background.
Class| Styles  
---|---  
`mix-blend-normal`| `mix-blend-mode: normal;`  
`mix-blend-multiply`| `mix-blend-mode: multiply;`  
`mix-blend-screen`| `mix-blend-mode: screen;`  
`mix-blend-overlay`| `mix-blend-mode: overlay;`  
`mix-blend-darken`| `mix-blend-mode: darken;`  
`mix-blend-lighten`| `mix-blend-mode: lighten;`  
`mix-blend-color-dodge`| `mix-blend-mode: color-dodge;`  
`mix-blend-color-burn`| `mix-blend-mode: color-burn;`  
`mix-blend-hard-light`| `mix-blend-mode: hard-light;`  
`mix-blend-soft-light`| `mix-blend-mode: soft-light;`  
`mix-blend-difference`| `mix-blend-mode: difference;`  
`mix-blend-exclusion`| `mix-blend-mode: exclusion;`  
`mix-blend-hue`| `mix-blend-mode: hue;`  
`mix-blend-saturation`| `mix-blend-mode: saturation;`  
`mix-blend-color`| `mix-blend-mode: color;`  
`mix-blend-luminosity`| `mix-blend-mode: luminosity;`  
`mix-blend-plus-darker`| `mix-blend-mode: plus-darker;`  
`mix-blend-plus-lighter`| `mix-blend-mode: plus-lighter;`  
Show more
## Examples
### Basic example
Use utilities like `mix-blend-overlay` and `mix-blend-soft-light` to control how an element's content and background is blended with other content in the same stacking context:
```
<div class="flex justify-center -space-x-14"> <div class="bg-blue-500 mix-blend-multiply ..."></div> <div class="bg-pink-500 mix-blend-multiply ..."></div></div>
```

### Isolating blending
Use the `isolate` utility on the parent element to create a new stacking context and prevent blending with content behind it:
```
<div class="isolate flex justify-center -space-x-14"> <div class="bg-yellow-500 mix-blend-multiply ..."></div> <div class="bg-green-500 mix-blend-multiply ..."></div></div><div class="flex justify-center -space-x-14"> <div class="bg-yellow-500 mix-blend-multiply ..."></div> <div class="bg-green-500 mix-blend-multiply ..."></div></div>
```

### Responsive design
Prefix a `mix-blend-mode` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="mix-blend-multiply md:mix-blend-overlay ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Isolating blending
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fmix-blend-mode&r=&sid=PMFMDJGK&qs=%7B%7D&cid=90422802)
