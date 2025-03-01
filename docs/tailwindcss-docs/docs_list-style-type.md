v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. list-style-type


Typography
# list-style-type
Utilities for controlling the marker style of a list.
Class| Styles  
---|---  
`list-disc`| `list-style-type: disc;`  
`list-decimal`| `list-style-type: decimal;`  
`list-none`| `list-style-type: none;`  
`list-(<custom-property>)`| `list-style-type: var(<custom-property>);`  
`list-[<value>]`| `list-style-type: <value>;`  
## Examples
### Basic example
Use utilities like `list-disc` and `list-decimal` to control the style of the markers in a list:
list-disc
  * Now this is a story all about how, my life got flipped-turned upside down
  * And I'd like to take a minute just sit right there
  * I'll tell you how I became the prince of a town called Bel-Air


list-decimal
  * Now this is a story all about how, my life got flipped-turned upside down
  * And I'd like to take a minute just sit right there
  * I'll tell you how I became the prince of a town called Bel-Air


list-none
  * Now this is a story all about how, my life got flipped-turned upside down
  * And I'd like to take a minute just sit right there
  * I'll tell you how I became the prince of a town called Bel-Air


```
<ul class="list-disc"> <li>Now this is a story all about how, my life got flipped-turned upside down</li> <!-- ... --></ul><ol class="list-decimal"> <li>Now this is a story all about how, my life got flipped-turned upside down</li> <!-- ... --></ol><ul class="list-none"> <li>Now this is a story all about how, my life got flipped-turned upside down</li> <!-- ... --></ul>
```

### Using a custom value
Use the `list-[<value>]` syntax to set the marker based on a completely custom value:
```
<ol class="list-[upper-roman] ..."> <!-- ... --></ol>
```

For CSS variables, you can also use the `list-(<custom-property>)` syntax:
```
<ol class="list-(--my-marker) ..."> <!-- ... --></ol>
```

This is just a shorthand for `list-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `list-style-type` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<ul class="list-none md:list-disc ..."> <!-- ... --></ul>
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
