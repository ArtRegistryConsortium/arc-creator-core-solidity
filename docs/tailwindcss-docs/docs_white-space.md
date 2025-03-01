v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. white-space


Typography
# white-space
Utilities for controlling an element's white-space property.
Class| Styles  
---|---  
`whitespace-normal`| `white-space: normal;`  
`whitespace-nowrap`| `white-space: nowrap;`  
`whitespace-pre`| `white-space: pre;`  
`whitespace-pre-line`| `white-space: pre-line;`  
`whitespace-pre-wrap`| `white-space: pre-wrap;`  
`whitespace-break-spaces`| `white-space: break-spaces;`  
## Examples
### Normal
Use the `whitespace-normal` utility to cause text to wrap normally within an element. Newlines and spaces will be collapsed:
Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.
```
<p class="whitespace-normal">Hey everyone!It's almost 2022    and we still don't know if there       are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### No Wrap
Use the `whitespace-nowrap` utility to prevent text from wrapping within an element. Newlines and spaces will be collapsed:
Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.
```
<p class="overflow-auto whitespace-nowrap">Hey everyone!It's almost 2022    and we still don't know if there       are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### Pre
Use the `whitespace-pre` utility to preserve newlines and spaces within an element. Text will not be wrapped:
Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.
```
<p class="overflow-auto whitespace-pre">Hey everyone!It's almost 2022    and we still don't know if there       are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### Pre Line
Use the `whitespace-pre-line` utility to preserve newlines but not spaces within an element. Text will be wrapped normally:
Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.
```
<p class="whitespace-pre-line">Hey everyone!It's almost 2022    and we still don't know if there       are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### Pre Wrap
Use the `whitespace-pre-wrap` utility to preserve newlines and spaces within an element. Text will be wrapped normally:
Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.
```
<p class="whitespace-pre-wrap">Hey everyone!It's almost 2022    and we still don't know if there       are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### Break Spaces
Use the `whitespace-break-spaces` utility to preserve newlines and spaces within an element. White space at the end of lines will not hang, but will wrap to the next line:
Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.
```
<p class="whitespace-break-spaces">Hey everyone!It's almost 2022    and we still don't know if there       are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### Responsive design
Prefix a `white-space` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="whitespace-pre md:whitespace-normal ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Normal
    * No Wrap
    * Pre
    * Pre Line
    * Pre Wrap
    * Break Spaces
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fwhite-space&r=&sid=PMFMDJGK&qs=%7B%7D&cid=79897827)
