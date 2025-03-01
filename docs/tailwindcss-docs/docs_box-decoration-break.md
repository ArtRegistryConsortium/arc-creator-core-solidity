v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. box-decoration-break


Layout
# box-decoration-break
Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.
Class| Styles  
---|---  
`box-decoration-clone`| `box-decoration-break: clone`  
`box-decoration-slice`| `box-decoration-break: slice`  
## Examples
### Basic example
Use the `box-decoration-slice` and `box-decoration-clone` utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks:
box-decoration-slice
HelloWorld
box-decoration-clone
HelloWorld
```
<span class="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ..."> Hello<br />World</span><span class="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ..."> Hello<br />World</span>
```

### Responsive design
Prefix a `box-decoration-break` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="box-decoration-clone md:box-decoration-slice ..."> <!-- ... --></div>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbox-decoration-break&r=&sid=PMFMDJGK&qs=%7B%7D&cid=55076715)
