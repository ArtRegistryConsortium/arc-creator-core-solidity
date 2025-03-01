v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. text-transform


Typography
# text-transform
Utilities for controlling the capitalization of text.
Class| Styles  
---|---  
`uppercase`| `text-transform: uppercase;`  
`lowercase`| `text-transform: lowercase;`  
`capitalize`| `text-transform: capitalize;`  
`normal-case`| `text-transform: none;`  
## Examples
### Uppercasing text
Use the `uppercase` utility to uppercase the text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="uppercase">The quick brown fox ...</p>
```

### Lowercasing text
Use the `lowercase` utility to lowercase the text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="lowercase">The quick brown fox ...</p>
```

### Capitalizing text
Use the `capitalize` utility to capitalize text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="capitalize">The quick brown fox ...</p>
```

### Resetting text casing
Use the `normal-case` utility to preserve the original text casing of an element—typically used to reset capitalization at different breakpoints:
The quick brown fox jumps over the lazy dog.
```
<p class="normal-case">The quick brown fox ...</p>
```

### Responsive design
Prefix a `text-transform` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="capitalize md:uppercase ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Uppercasing text
    * Lowercasing text
    * Capitalizing text
    * Resetting text casing
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
