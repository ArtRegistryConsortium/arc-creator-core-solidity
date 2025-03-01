v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. hyphens


Typography
# hyphens
Utilities for controlling how words should be hyphenated.
Class| Styles  
---|---  
`hyphens-none`| `hyphens: none;`  
`hyphens-manual`| `hyphens: manual;`  
`hyphens-auto`| `hyphens: auto;`  
## Examples
### Preventing hyphenation
Use the `hyphens-none` utility to prevent words from being hyphenated even if the line break suggestion `&shy;` is used:
Officially recognized by the Duden dictionary as the longest word in German, Kraftfahrzeug­haftpflichtversicherung is a 36 letter word for motor vehicle liability insurance.
```
<p class="hyphens-none"> ... Kraftfahrzeug&shy;haftpflichtversicherung is a ...</p>
```

### Manual hyphenation
Use the `hyphens-manual` utility to only set hyphenation points where the line break suggestion `&shy;` is used:
Officially recognized by the Duden dictionary as the longest word in German, Kraftfahrzeug­haftpflichtversicherung is a 36 letter word for motor vehicle liability insurance.
```
<p class="hyphens-manual"> ... Kraftfahrzeug&shy;haftpflichtversicherung is a ...</p>
```

This is the default browser behavior.
### Automatic hyphenation
Use the `hyphens-auto` utility to allow the browser to automatically choose hyphenation points based on the language:
Officially recognized by the Duden dictionary as the longest word in German, Kraftfahrzeughaftpflichtversicherung is a 36 letter word for motor vehicle liability insurance.
```
<p class="hyphens-auto"lang="de"> ... Kraftfahrzeughaftpflichtversicherung is a ...</p>
```

The line break suggestion `&shy;` will be preferred over automatic hyphenation points.
### Responsive design
Prefix a `hyphens` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="hyphens-none md:hyphens-auto ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Preventing hyphenation
    * Manual hyphenation
    * Automatic hyphenation
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fhyphens&r=&sid=PMFMDJGK&qs=%7B%7D&cid=58489275)
