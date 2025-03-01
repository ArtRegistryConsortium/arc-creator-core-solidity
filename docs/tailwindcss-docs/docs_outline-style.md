v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Borders
  2. outline-style


Borders
# outline-style
Utilities for controlling the style of an element's outline.
Class| Styles  
---|---  
`outline-solid`| `outline-style: solid;`  
`outline-dashed`| `outline-style: dashed;`  
`outline-dotted`| `outline-style: dotted;`  
`outline-double`| `outline-style: double;`  
`outline-none`| `outline-style: none;`  
`outline-hidden`| `outline: 2px solid transparent; outline-offset: 2px;`  
## Examples
### Basic example
Use utilities like `outline-solid` and `outline-dashed` to set the style of an element's outline:
outline-solid
Button A
outline-dashed
Button B
outline-dotted
Button C
outline-double
Button D
```
<button class="outline-2 outline-offset-2 outline-solid ...">Button A</button><button class="outline-2 outline-offset-2 outline-dashed ...">Button B</button><button class="outline-2 outline-offset-2 outline-dotted ...">Button C</button><button class="outline-3 outline-offset-2 outline-double ...">Button D</button>
```

### Hiding an outline
Use the `outline-hidden` utility to hide the default browser outline on focused elements, while still preserving the outline in forced colors mode:
Try emulating `forced-colors: active` in your developer tools to see the behavior
```
<input class="focus:border-indigo-600 focus:outline-hidden ..." type="text" />
```

It is highly recommended to apply your own focus styling for accessibility when using this utility.
### Removing outlines
Use the `outline-none` utility to completely remove the default browser outline on focused elements:
Post
```
<div class="focus-within:outline-2 focus-within:outline-indigo-600 ..."> <textarea class="outline-none ..." placeholder="Leave a comment..." /> <button class="..." type="button">Post</button></div>
```

It is highly recommended to apply your own focus styling for accessibility when using this utility.
### Responsive design
Prefix an `outline-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="outline md:outline-dashed ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Hiding an outline
    * Removing outlines
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Foutline-style&r=&sid=PMFMDJGK&qs=%7B%7D&cid=10169645)
