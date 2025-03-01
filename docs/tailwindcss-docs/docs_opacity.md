v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Effects
  2. opacity


Effects
# opacity
Utilities for controlling the opacity of an element.
Class| Styles  
---|---  
`opacity-<number>`| `opacity: <number>%;`  
`opacity-(<custom-property>)`| `opacity: var(<custom-property>);`  
`opacity-[<value>]`| `opacity: <value>;`  
## Examples
### Basic example
Use `opacity-<number>` utilities like `opacity-25` and `opacity-100` to set the opacity of an element:
opacity-100
Button A
opacity-75
Button B
opacity-50
Button C
opacity-25
Button D
```
<button class="bg-indigo-500 opacity-100 ..."></button><button class="bg-indigo-500 opacity-75 ..."></button><button class="bg-indigo-500 opacity-50 ..."></button><button class="bg-indigo-500 opacity-25 ..."></button>
```

### Applying conditionally
Prefix an `opacity` utility with a variant like `disabled:*` to only apply the utility in that state:
```
<input class="opacity-100 disabled:opacity-75 ..." type="text" />
```

Learn more about using variants in the variants documentation.
### Using a custom value
Use the `opacity-[<value>]` syntax to set the opacity based on a completely custom value:
```
<button class="opacity-[.67] ..."> <!-- ... --></button>
```

For CSS variables, you can also use the `opacity-(<custom-property>)` syntax:
```
<button class="opacity-(--my-opacity) ..."> <!-- ... --></button>
```

This is just a shorthand for `opacity-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `opacity` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<button class="opacity-50 md:opacity-100 ..."> <!-- ... --></button>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Applying conditionally
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fopacity&r=&sid=PMFMDJGK&qs=%7B%7D&cid=87341224)
