v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Backgrounds
  2. background-origin


Backgrounds
# background-origin
Utilities for controlling how an element's background is positioned relative to borders, padding, and content.
Class| Styles  
---|---  
`bg-origin-border`| `background-origin: border-box;`  
`bg-origin-padding`| `background-origin: padding-box;`  
`bg-origin-content`| `background-origin: content-box;`  
## Examples
### Basic example
Use the `bg-origin-border`, `bg-origin-padding`, and `bg-origin-content` utilities to control where an element's background is rendered:
bg-origin-border
bg-origin-padding
bg-origin-content
```
<div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-border p-3 ..."></div><div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-padding p-3 ..."></div><div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-content p-3 ..."></div>
```

### Responsive design
Prefix a `background-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-origin-border md:bg-origin-padding ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-origin&r=&sid=PMFMDJGK&qs=%7B%7D&cid=79373689)
