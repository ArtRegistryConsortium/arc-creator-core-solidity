v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Borders
  2. border-style


Borders
# border-style
Utilities for controlling the style of an element's borders.
Class| Styles  
---|---  
`border-solid`| `border-style: solid;`  
`border-dashed`| `border-style: dashed;`  
`border-dotted`| `border-style: dotted;`  
`border-double`| `border-style: double;`  
`border-hidden`| `border-style: hidden;`  
`border-none`| `border-style: none;`  
`divide-solid`| `& > :not(:last-child) {  border-style: solid; }`  
`divide-dashed`| `& > :not(:last-child) {  border-style: dashed; }`  
`divide-dotted`| `& > :not(:last-child) {  border-style: dotted; }`  
`divide-double`| `& > :not(:last-child) {  border-style: double; }`  
`divide-hidden`| `& > :not(:last-child) {  border-style: hidden; }`  
`divide-none`| `& > :not(:last-child) {  border-style: none; }`  
## Examples
### Basic example
Use utilities like `border-solid` and `border-dotted` to control an element's border style:
border-solid
Button A
border-dashed
Button A
border-dotted
Button A
border-double
Button A
```
<div class="border-2 border-solid ..."></div><div class="border-2 border-dashed ..."></div><div class="border-2 border-dotted ..."></div><div class="border-4 border-double ..."></div>
```

### Removing a border
Use the `border-none` utility to remove an existing border from an element:
Save Changes
```
<button class="border-none ...">Save Changes</button>
```

This is most commonly used to remove a border style that was applied at a smaller breakpoint.
### Setting the divider style
Use utilities like `divide-dashed` and `divide-dotted` control the border style between child elements
01
02
03
```
<div class="grid grid-cols-3 divide-x-3 divide-dashed divide-indigo-500"> <div>01</div> <div>02</div> <div>03</div></div>
```

### Responsive design
Prefix a `border-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="border-solid md:border-dotted ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Removing a border
    * Setting the divider style
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fborder-style&r=&sid=PMFMDJGK&qs=%7B%7D&cid=50396544)
