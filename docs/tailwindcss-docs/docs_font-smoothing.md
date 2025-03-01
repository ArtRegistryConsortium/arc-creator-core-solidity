v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. font-smoothing


Typography
# font-smoothing
Utilities for controlling the font smoothing of an element.
Class| Styles  
---|---  
`antialiased`| `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`  
`subpixel-antialiased`| `-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;`  
## Examples
### Grayscale antialiasing
Use the `antialiased` utility to render text using grayscale antialiasing:
The quick brown fox jumps over the lazy dog.
```
<p class="antialiased ...">The quick brown fox ...</p>
```

### Subpixel antialiasing
Use the `subpixel-antialiased` utility to render text using subpixel antialiasing:
The quick brown fox jumps over the lazy dog.
```
<p class="subpixel-antialiased ...">The quick brown fox ...</p>
```

### Responsive design
Prefix `-webkit-font-smoothing` and `-moz-osx-font-smoothing` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="antialiased md:subpixel-antialiased ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Grayscale antialiasing
    * Subpixel antialiasing
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
