v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. text-overflow


Typography
# text-overflow
Utilities for controlling how the text of an element overflows.
Class| Styles  
---|---  
`truncate`| `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`  
`text-ellipsis`| `text-overflow: ellipsis;`  
`text-clip`| `text-overflow: clip;`  
## Examples
### Truncating text
Use the `truncate` utility to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed:
The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
```
<p class="truncate">The longest word in any of the major...</p>
```

### Adding an ellipsis
Use the `text-ellipsis` utility to truncate overflowing text with an ellipsis (…) if needed:
The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
```
<p class="overflow-hidden text-ellipsis">The longest word in any of the major...</p>
```

### Clipping text
Use the `text-clip` utility to truncate the text at the limit of the content area:
The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
```
<p class="overflow-hidden text-clip">The longest word in any of the major...</p>
```

This is the default browser behavior.
### Responsive design
Prefix a `text-overflow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="text-ellipsis md:text-clip ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Truncating text
    * Adding an ellipsis
    * Clipping text
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftext-overflow&r=&sid=PMFMDJGK&qs=%7B%7D&cid=28334895)
