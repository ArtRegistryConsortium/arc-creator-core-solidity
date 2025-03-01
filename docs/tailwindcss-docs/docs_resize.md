v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. resize


Interactivity
# resize
Utilities for controlling how an element can be resized.
Class| Styles  
---|---  
`resize-none`| `resize: none;`  
`resize`| `resize: both;`  
`resize-y`| `resize: vertical;`  
`resize-x`| `resize: horizontal;`  
## Examples
### Resizing in all directions
Use `resize` to make an element horizontally and vertically resizable:
Drag the textarea handle in the demo to see the expected behavior
```
<textarea class="resize rounded-md ..."></textarea>
```

### Resizing vertically
Use `resize-y` to make an element vertically resizable:
Drag the textarea handle in the demo to see the expected behavior
```
<textarea class="resize-y rounded-md ..."></textarea>
```

### Resizing horizontally
Use `resize-x` to make an element horizontally resizable:
Drag the textarea handle in the demo to see the expected behavior
```
<textarea class="resize-x rounded-md ..."></textarea>
```

### Prevent resizing
Use `resize-none` to prevent an element from being resizable:
Notice that the textarea handle is gone
```
<textarea class="resize-none rounded-md"></textarea>
```

### Responsive design
Prefix a `resize` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="resize-none md:resize ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Resizing in all directions
    * Resizing vertically
    * Resizing horizontally
    * Prevent resizing
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
