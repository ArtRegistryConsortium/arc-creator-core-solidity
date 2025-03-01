v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. list-style-image


Typography
# list-style-image
Utilities for controlling the marker images for list items.
Class| Styles  
---|---  
`list-image-[<value>]`| `list-style-image: <value>;`  
`list-image-(<custom-property>)`| `list-style-image: var(<custom-property>);`  
`list-image-none`| `list-style-image: none;`  
## Examples
### Basic example
Use the `list-image-[<value>]` syntax to control the marker image for list items:
  * 5 cups chopped Porcini mushrooms
  * 1/2 cup of olive oil
  * 3lb of celery


```
<ul class="list-image-[url(/img/checkmark.png)]"> <li>5 cups chopped Porcini mushrooms</li> <!-- ... --></ul>
```

### Using a CSS variable
Use the `list-image-(<custom-property>)` syntax to control the marker image for list items using a CSS variable:
```
<ul class="list-image-(--my-list-image)"> <!-- ... --></ul>
```

This is just a shorthand for `list-image-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Removing a marker image
Use the `list-image-none` utility to remove an existing marker image from list items:
```
<ul class="list-image-none"> <!-- ... --></ul>
```

### Responsive design
Prefix a `list-style-image` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="list-image-none md:list-image-[url(/img/checkmark.png)] ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a CSS variable
    * Removing a marker image
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Flist-style-image&r=&sid=PMFMDJGK&qs=%7B%7D&cid=22495976)
