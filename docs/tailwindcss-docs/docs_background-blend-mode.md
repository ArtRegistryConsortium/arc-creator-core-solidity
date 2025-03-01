v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Effects
  2. background-blend-mode


Effects
# background-blend-mode
Utilities for controlling how an element's background image should blend with its background color.
Class| Styles  
---|---  
`bg-blend-normal`| `background-blend-mode: normal;`  
`bg-blend-multiply`| `background-blend-mode: multiply;`  
`bg-blend-screen`| `background-blend-mode: screen;`  
`bg-blend-overlay`| `background-blend-mode: overlay;`  
`bg-blend-darken`| `background-blend-mode: darken;`  
`bg-blend-lighten`| `background-blend-mode: lighten;`  
`bg-blend-color-dodge`| `background-blend-mode: color-dodge;`  
`bg-blend-color-burn`| `background-blend-mode: color-burn;`  
`bg-blend-hard-light`| `background-blend-mode: hard-light;`  
`bg-blend-soft-light`| `background-blend-mode: soft-light;`  
`bg-blend-difference`| `background-blend-mode: difference;`  
`bg-blend-exclusion`| `background-blend-mode: exclusion;`  
`bg-blend-hue`| `background-blend-mode: hue;`  
`bg-blend-saturation`| `background-blend-mode: saturation;`  
`bg-blend-color`| `background-blend-mode: color;`  
`bg-blend-luminosity`| `background-blend-mode: luminosity;`  
Show more
## Examples
### Basic example
Use utilities like `bg-blend-difference` and `bg-blend-saturation` to control how the background image and color of an element are blended:
bg-blend-multiply
bg-blend-soft-light
bg-blend-overlay
```
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-multiply ..."></div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-soft-light ..."></div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-overlay ..."></div>
```

### Responsive design
Prefix a `background-blend-mode` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-lighten md:bg-blend-darken ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-blend-mode&r=&sid=PMFMDJGK&qs=%7B%7D&cid=86875804)
