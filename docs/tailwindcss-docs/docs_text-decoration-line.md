v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. text-decoration-line


Typography
# text-decoration-line
Utilities for controlling the decoration of text.
Class| Styles  
---|---  
`underline`| `text-decoration-line: underline;`  
`overline`| `text-decoration-line: overline;`  
`line-through`| `text-decoration-line: line-through;`  
`no-underline`| `text-decoration-line: none;`  
## Examples
### Underling text
Use the `underline` utility to add an underline to the text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="underline">The quick brown fox...</p>
```

### Adding an overline to text
Use the `overline` utility to add an overline to the text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="overline">The quick brown fox...</p>
```

### Adding a line through text
Use the `line-through` utility to add a line through the text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="line-through">The quick brown fox...</p>
```

### Removing a line from text
Use the `no-underline` utility to remove a line from the text of an element:
The quick brown fox jumps over the lazy dog.
```
<p class="no-underline">The quick brown fox...</p>
```

### Applying on hover
Prefix a `text-decoration-line` utility with a variant like `hover:*` to only apply the utility in that state:
Hover over the text to see the expected behavior
The quick brown fox jumps over the lazy dog.
```
<p>The <a href="..." class="no-underline hover:underline ...">quick brown fox</a> jumps over the lazy dog.</p>
```

Learn more about using variants in the variants documentation.
### Responsive design
Prefix a `text-decoration-line` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<a class="no-underline md:underline ..." href="..."> <!-- ... --></a>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Underling text
    * Adding an overline to text
    * Adding a line through text
    * Removing a line from text
    * Applying on hover
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftext-decoration-line&r=&sid=PMFMDJGK&qs=%7B%7D&cid=7525190)
