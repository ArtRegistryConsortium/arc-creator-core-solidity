v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. content


Typography
# content
Utilities for controlling the content of the before and after pseudo-elements.
Class| Styles  
---|---  
`content-[<value>]`| `content: <value>;`  
`content-(<custom-property>)`| `content: var(<custom-property>);`  
`content-none`| `content: none;`  
## Examples
### Basic example
Use the `content-[<value>]` syntax, along with the `before` and `after` variants, to set the contents of the `::before` and `::after` pseudo-elements:
Higher resolution means more than just a better-quality image. With a Retina 6K display, Pro Display XDR gives you nearly 40 percent more screen real estate than a 5K display.
```
<p>Higher resolution means more than just a better-quality image. With aRetina 6K display, <a class="text-blue-600 after:content-['_↗']" href="...">Pro Display XDR</a> gives you nearly 40 percent more screen real estate thana 5K display.</p>
```

### Referencing an attribute value
Use the `content-[attr(<name>)]` syntax to reference a value stored in an attribute using the `attr()` CSS function:
```
<p before="Hello World" class="before:content-[attr(before)] ..."> <!-- ... --></p>
```

### Using spaces and underscores
Since whitespace denotes the end of a class in HTML, replace any spaces in an arbitrary value with an underscore:
```
<p class="before:content-['Hello_World'] ..."> <!-- ... --></p>
```

If you need to include an actual underscore, you can do this by escaping it with a backslash:
```
<p class="before:content-['Hello\_World']"> <!-- ... --></p>
```

### Using a CSS variable
Use the `content-(<custom-property>)` syntax to control the contents of the `::before` and `::after` pseudo-elements using a CSS variable:
```
<p class="content-(--my-content)"> <!-- ... --></p>
```

This is just a shorthand for `content-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<p class="before:content-['Mobile'] md:before:content-['Desktop'] ..."> <!-- ... --></p>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Referencing an attribute value
    * Using spaces and underscores
    * Using a CSS variable
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fcontent&r=&sid=PMFMDJGK&qs=%7B%7D&cid=88153693)
