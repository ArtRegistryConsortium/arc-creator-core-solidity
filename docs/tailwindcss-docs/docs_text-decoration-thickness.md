v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. text-decoration-thickness


Typography
# text-decoration-thickness
Utilities for controlling the thickness of text decorations.
Class| Styles  
---|---  
`decoration-<number>`| `text-decoration-thickness: <number>px;`  
`decoration-from-font`| `text-decoration-thickness: from-font;`  
`decoration-auto`| `text-decoration-thickness: auto;`  
`decoration-(<custom-property>)`| `text-decoration-thickness: var(<custom-property>);`  
`decoration-[<value>]`| `text-decoration-thickness: <value>;`  
## Examples
### Basic example
Use `decoration-<number>` utilities like `decoration-2` and `decoration-4` to change the text decoration thickness of an element:
decoration-1
The quick brown fox jumps over the lazy dog.
decoration-2
The quick brown fox jumps over the lazy dog.
decoration-4
The quick brown fox jumps over the lazy dog.
```
<p class="underline decoration-1">The quick brown fox...</p><p class="underline decoration-2">The quick brown fox...</p><p class="underline decoration-4">The quick brown fox...</p>
```

### Using a custom value
Use the `decoration-[<value>]` syntax to set the text decoration thickness based on a completely custom value:
```
<p class="decoration-[0.25rem] ..."> <!-- ... --></p>
```

For CSS variables, you can also use the `decoration-(<custom-property>)` syntax:
```
<p class="decoration-(--my-decoration-thickness) ..."> <!-- ... --></p>
```

This is just a shorthand for `decoration-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `text-decoration-thickness` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="underline md:decoration-4 ..."> <!-- ... --></p>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftext-decoration-thickness&r=&sid=PMFMDJGK&qs=%7B%7D&cid=91764265)
