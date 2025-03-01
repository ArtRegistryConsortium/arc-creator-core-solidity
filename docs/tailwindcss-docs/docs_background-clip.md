v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Backgrounds
  2. background-clip


Backgrounds
# background-clip
Utilities for controlling the bounding box of an element's background.
Class| Styles  
---|---  
`bg-clip-border`| `background-clip: border-box;`  
`bg-clip-padding`| `background-clip: padding-box;`  
`bg-clip-content`| `background-clip: content-box;`  
`bg-clip-text`| `background-clip: text;`  
## Examples
### Basic example
Use the `bg-clip-border`, `bg-clip-padding`, and `bg-clip-content` utilities to control the bounding box of an element's background:
bg-clip-border
bg-clip-padding
bg-clip-content
```
<div class="border-4 bg-indigo-500 bg-clip-border p-3"></div><div class="border-4 bg-indigo-500 bg-clip-padding p-3"></div><div class="border-4 bg-indigo-500 bg-clip-content p-3"></div>
```

### Cropping to text
Use the `bg-clip-text` utility to crop an element's background to match the shape of the text:
Hello world
```
<p class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ..."> Hello world</p>
```

### Responsive design
Prefix a `background-clip` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-clip-border md:bg-clip-padding ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Cropping to text
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-clip&r=&sid=PMFMDJGK&qs=%7B%7D&cid=13077518)
