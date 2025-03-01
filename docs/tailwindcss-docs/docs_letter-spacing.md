v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. letter-spacing


Typography
# letter-spacing
Utilities for controlling the tracking, or letter spacing, of an element.
Class| Styles  
---|---  
`tracking-tighter`| `letter-spacing: var(--tracking-tighter); /* -0.05em */`  
`tracking-tight`| `letter-spacing: var(--tracking-tight); /* -0.025em */`  
`tracking-normal`| `letter-spacing: var(--tracking-normal); /* 0em */`  
`tracking-wide`| `letter-spacing: var(--tracking-wide); /* 0.025em */`  
`tracking-wider`| `letter-spacing: var(--tracking-wider); /* 0.05em */`  
`tracking-widest`| `letter-spacing: var(--tracking-widest); /* 0.1em */`  
`tracking-(<custom-property>)`| `letter-spacing: var(<custom-property>);`  
`tracking-[<value>]`| `letter-spacing: <value>;`  
## Examples
### Basic example
Use utilities like `tracking-tight` and `tracking-wide` to set the letter spacing of an element:
tracking-tight
The quick brown fox jumps over the lazy dog.
tracking-normal
The quick brown fox jumps over the lazy dog.
tracking-wide
The quick brown fox jumps over the lazy dog.
```
<p class="tracking-tight ...">The quick brown fox ...</p><p class="tracking-normal ...">The quick brown fox ...</p><p class="tracking-wide ...">The quick brown fox ...</p>
```

### Using negative values
Using negative values doesn't make a ton of sense with the named letter spacing scale Tailwind includes out of the box, but if you've customized your scale to use numbers it can be useful:
```
@theme { --tracking-1: 0em; --tracking-2: 0.025em; --tracking-3: 0.05em; --tracking-4: 0.1em;}
```

To use a negative letter spacing value, prefix the class name with a dash to convert it to a negative value:
```
<p class="-tracking-2">The quick brown fox ...</p>
```

### Using a custom value
Use the `tracking-[<value>]` syntax to set the letter spacing based on a completely custom value:
```
<p class="tracking-[.25em] ..."> <!-- ... --></p>
```

For CSS variables, you can also use the `tracking-(<custom-property>)` syntax:
```
<p class="tracking-(--my-tracking) ..."> <!-- ... --></p>
```

This is just a shorthand for `tracking-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `letter-spacing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="tracking-tight md:tracking-wide ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
Use the `--tracking-*` theme variables to customize the letter spacing utilities in your project:
```
@theme { --tracking-tightest: -0.075em; }
```

Now the `tracking-tightest` utility can be used in your markup:
```
<p class="tracking-tightest"> <!-- ... --></p>
```

Learn more about customizing your theme in the theme documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using negative values
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
