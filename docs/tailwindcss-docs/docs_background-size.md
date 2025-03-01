v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Backgrounds
  2. background-size


Backgrounds
# background-size
Utilities for controlling the background size of an element's background image.
Class| Styles  
---|---  
`bg-auto`| `background-size: auto;`  
`bg-cover`| `background-size: cover;`  
`bg-contain`| `background-size: contain;`  
`bg-(length:<custom-property>)`| `background-size: var(<custom-property>);`  
`bg-[<value>]`| `background-size: <value>;`  
## Examples
### Filling the container
Use the `bg-cover` utility to scale the background image until it fills the background layer, cropping the image if needed:
```
<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center"></div>
```

### Filling without cropping
Use the `bg-contain` utility to scale the background image to the outer edges without cropping or stretching:
```
<div class="bg-[url(/img/mountains.jpg)] bg-contain bg-center"></div>
```

### Using the default size
Use the `bg-auto` utility to display the background image at its default size:
```
<div class="bg-[url(/img/mountains.jpg)] bg-auto bg-center bg-no-repeat"></div>
```

### Using a custom value
Use the `bg-[<value>]` syntax to set the background image size based on a completely custom value:
```
<div class="bg-[auto_100px] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `bg-(length:<custom-property>)` syntax:
```
<div class="bg-(length:--my-image-size) ..."> <!-- ... --></div>
```

This is just a shorthand for `bg-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `background-size` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-auto md:bg-contain ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Filling the container
    * Filling without cropping
    * Using the default size
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-size&r=&sid=PMFMDJGK&qs=%7B%7D&cid=58323932)
