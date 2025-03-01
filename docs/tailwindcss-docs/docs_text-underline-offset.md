v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. text-underline-offset


Typography
# text-underline-offset
Utilities for controlling the offset of a text underline.
Class| Styles  
---|---  
`underline-offset-<number>`| `text-underline-offset: <number>px;`  
`-underline-offset-<number>`| `text-underline-offset: calc(<number>px * -1);`  
`underline-offset-auto`| `text-underline-offset: auto;`  
`underline-offset-(<custom-property>)`| `text-underline-offset: var(<custom-property>);`  
`underline-offset-[<value>]`| `text-underline-offset: <value>;`  
## Examples
### Basic example
Use `underline-offset-<number>` utilities like `underline-offset-2` and `underline-offset-4` to change the offset of a text underline:
underline-offset-1
The quick brown fox jumps over the lazy dog.
underline-offset-2
The quick brown fox jumps over the lazy dog.
underline-offset-4
The quick brown fox jumps over the lazy dog.
underline-offset-8
The quick brown fox jumps over the lazy dog.
```
<p class="underline underline-offset-1">The quick brown fox...</p><p class="underline underline-offset-2">The quick brown fox...</p><p class="underline underline-offset-4">The quick brown fox...</p><p class="underline underline-offset-8">The quick brown fox...</p>
```

### Using a custom value
Use the `underline-offset-[<value>]` syntax to set the text underline offset based on a completely custom value:
```
<p class="underline-offset-[3px] ..."> <!-- ... --></p>
```

For CSS variables, you can also use the `underline-offset-(<custom-property>)` syntax:
```
<p class="underline-offset-(--my-underline-offset) ..."> <!-- ... --></p>
```

This is just a shorthand for `underline-offset-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `text-underline-offset` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="underline md:underline-offset-4 ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftext-underline-offset&r=&sid=PMFMDJGK&qs=%7B%7D&cid=25981658)
