v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. field-sizing


Interactivity
# field-sizing
Utilities for controlling the sizing of form controls.
Class| Styles  
---|---  
`field-sizing-fixed`| `field-sizing: fixed;`  
`field-sizing-content`| `field-sizing: content;`  
## Examples
### Sizing based on content
Use the `field-sizing-content` utility to allow a form control to adjust it's size based on the content:
Type in the input below to see the size change
Latex Salesman, Vanderlay Industries
```
<textarea class="field-sizing-content ..." rows="2"> Latex Salesman, Vanderlay Industries</textarea>
```

### Using a fixed size
Use the `field-sizing-fixed` utility to make a from control use a fixed size:
Type in the input below to see the size remain the same
Latex Salesman, Vanderlay Industries
```
<textarea class="field-sizing-fixed w-80 ..." rows="2"> Latex Salesman, Vanderlay Industries</textarea>
```

### Responsive design
Prefix a `field-sizing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<input class="field-sizing-content md:field-sizing-fixed ..." />
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Sizing based on content
    * Using a fixed size
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ffield-sizing&r=&sid=PMFMDJGK&qs=%7B%7D&cid=17133786)
