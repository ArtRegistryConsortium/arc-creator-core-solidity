v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. vertical-align


Typography
# vertical-align
Utilities for controlling the vertical alignment of an inline or table-cell box.
Class| Styles  
---|---  
`align-baseline`| `vertical-align: baseline;`  
`align-top`| `vertical-align: top;`  
`align-middle`| `vertical-align: middle;`  
`align-bottom`| `vertical-align: bottom;`  
`align-text-top`| `vertical-align: text-top;`  
`align-text-bottom`| `vertical-align: text-bottom;`  
`align-sub`| `vertical-align: sub;`  
`align-super`| `vertical-align: super;`  
`align-(<custom-property>)`| `vertical-align: var(<custom-property>);`  
`align-[<value>]`| `vertical-align: <value>;`  
## Examples
### Aligning to baseline
Use the `align-baseline` utility to align the baseline of an element with the baseline of its parent:
The quick brown fox jumps over the lazy dog.
```
<span class="inline-block align-baseline">The quick brown fox...</span>
```

### Aligning to top
Use the `align-top` utility to align the top of an element and its descendants with the top of the entire line:
The quick brown fox jumps over the lazy dog.
```
<span class="inline-block align-top">The quick brown fox...</span>
```

### Aligning to middle
Use the `align-middle` utility to align the middle of an element with the baseline plus half the x-height of the parent:
The quick brown fox jumps over the lazy dog.
```
<span class="inline-block align-middle">The quick brown fox...</span>
```

### Aligning to bottom
Use the `align-bottom` utility to align the bottom of an element and its descendants with the bottom of the entire line:
The quick brown fox jumps over the lazy dog.
```
<span class="inline-block align-bottom">The quick brown fox...</span>
```

### Aligning to parent top
Use the `align-text-top` utility to align the top of an element with the top of the parent element's font:
The quick brown fox jumps over the lazy dog.
```
<span class="inline-block align-text-top">The quick brown fox...</span>
```

### Aligning to parent bottom
Use the `align-text-bottom` utility to align the bottom of an element with the bottom of the parent element's font:
The quick brown fox jumps over the lazy dog.
```
<span class="inline-block align-text-bottom">The quick brown fox...</span>
```

### Using a custom value
Use the `align-[<value>]` syntax to set the vertical alignment based on a completely custom value:
```
<span class="align-[4px] ..."> <!-- ... --></span>
```

For CSS variables, you can also use the `align-(<custom-property>)` syntax:
```
<span class="align-(--my-alignment) ..."> <!-- ... --></span>
```

This is just a shorthand for `align-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `vertical-align` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<span class="align-middle md:align-top ..."> <!-- ... --></span>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Aligning to baseline
    * Aligning to top
    * Aligning to middle
    * Aligning to bottom
    * Aligning to parent top
    * Aligning to parent bottom
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fvertical-align&r=&sid=PMFMDJGK&qs=%7B%7D&cid=80494333)
