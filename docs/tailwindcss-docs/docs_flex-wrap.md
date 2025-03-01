v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. flex-wrap


Flexbox & Grid
# flex-wrap
Utilities for controlling how flex items wrap.
Class| Styles  
---|---  
`flex-nowrap`| `flex-wrap: nowrap;`  
`flex-wrap`| `flex-wrap: wrap;`  
`flex-wrap-reverse`| `flex-wrap: wrap-reverse;`  
## Examples
### Don't wrap
Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:
01
02
03
```
<div class="flex flex-nowrap"> <div>01</div> <div>02</div> <div>03</div></div>
```

### Wrap normally
Use `flex-wrap` to allow flex items to wrap:
01
02
03
```
<div class="flex flex-wrap"> <div>01</div> <div>02</div> <div>03</div></div>
```

### Wrap reversed
Use `flex-wrap-reverse` to wrap flex items in the reverse direction:
01
02
03
```
<div class="flex flex-wrap-reverse"> <div>01</div> <div>02</div> <div>03</div></div>
```

### Responsive design
Prefix a `flex-wrap` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="flex flex-wrap md:flex-wrap-reverse ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Don't wrap
    * Wrap normally
    * Wrap reversed
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fflex-wrap&r=&sid=PMFMDJGK&qs=%7B%7D&cid=4962163)
