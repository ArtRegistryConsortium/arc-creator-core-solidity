v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. list-style-position


Typography
# list-style-position
Utilities for controlling the position of bullets and numbers in lists.
Class| Styles  
---|---  
`list-inside`| `list-style-position: inside;`  
`list-outside`| `list-style-position: outside;`  
## Examples
### Basic example
Use utilities like `list-inside` and `list-outside` to control the position of the markers and text indentation in a list:
list-inside
  * 5 cups chopped Porcini mushrooms
  * 1/2 cup of olive oil
  * 3lb of celery


list-outside
  * 5 cups chopped Porcini mushrooms
  * 1/2 cup of olive oil
  * 3lb of celery


```
<ul class="list-inside"> <li>5 cups chopped Porcini mushrooms</li> <!-- ... --></ul><ul class="list-outside"> <li>5 cups chopped Porcini mushrooms</li> <!-- ... --></ul>
```

### Responsive design
Prefix a `list-style-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<ul class="list-outside md:list-inside ..."> <!-- ... --></ul>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Flist-style-position&r=&sid=PMFMDJGK&qs=%7B%7D&cid=52158944)
