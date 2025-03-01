v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. box-sizing


Layout
# box-sizing
Utilities for controlling how the browser should calculate an element's total size.
Class| Styles  
---|---  
`box-border`| `box-sizing: border-box`  
`box-content`| `box-sizing: content-box`  
## Examples
### Including borders and padding
Use the `box-border` utility to set an element's `box-sizing` to `border-box`, telling the browser to include the element's borders and padding when you give it a height or width.
This means a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px:
128px
128px
```
<div class="box-border size-32 border-4 p-4 ..."> <!-- ... --></div>
```

Tailwind makes this the default for all elements in our preflight base styles.
### Excluding borders and padding
Use the `box-content` utility to set an element's `box-sizing` to `content-box`, telling the browser to add borders and padding on top of the element's specified width or height.
This means a 100px × 100px element with a 2px border and 4px of padding on all sides will actually be rendered as 112px × 112px, with an internal content area of 100px × 100px:
128px
128px
```
<div class="box-content size-32 border-4 p-4 ..."> <!-- ... --></div>
```

### Responsive design
Prefix a `box-sizing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="box-content md:box-border ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Including borders and padding
    * Excluding borders and padding
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
