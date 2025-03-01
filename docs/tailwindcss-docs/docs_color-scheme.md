v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. color-scheme


Interactivity
# color-scheme
Utilities for controlling the color scheme of an element.
Class| Styles  
---|---  
`scheme-normal`| `color-scheme: normal;`  
`scheme-dark`| `color-scheme: dark;`  
`scheme-light`| `color-scheme: light;`  
`scheme-light-dark`| `color-scheme: light dark;`  
`scheme-only-dark`| `color-scheme: only dark;`  
`scheme-only-light`| `color-scheme: only light;`  
## Examples
### Basic example
Use utilities like `scheme-light` and `scheme-light-dark` to control how element should be rendered:
Try switching your system color scheme to see the difference
scheme-light
scheme-dark
scheme-light-dark
```
<div class="scheme-light ..."> <input type="date" /></div><div class="scheme-dark ..."> <input type="date" /></div><div class="scheme-light-dark ..."> <input type="date" /></div>
```

### Applying in dark mode
Prefix a `color-scheme` utility with a variant like `dark:*` to only apply the utility in that state:
```
<html class="scheme-light dark:scheme-dark ..."> <!-- ... --></html>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Applying in dark mode


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fcolor-scheme&r=&sid=PMFMDJGK&qs=%7B%7D&cid=87426872)
