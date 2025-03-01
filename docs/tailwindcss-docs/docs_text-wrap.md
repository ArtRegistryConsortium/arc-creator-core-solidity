v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. text-wrap


Typography
# text-wrap
Utilities for controlling how text wraps within an element.
Class| Styles  
---|---  
`text-wrap`| `text-wrap: wrap;`  
`text-nowrap`| `text-wrap: nowrap;`  
`text-balance`| `text-wrap: balance;`  
`text-pretty`| `text-wrap: pretty;`  
## Examples
### Allowing text to wrap
Use the `text-wrap` utility to wrap overflowing text onto multiple lines at logical points in the text:
Beloved Manhattan soup stand closes
New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
```
<article class="text-wrap"> <h3>Beloved Manhattan soup stand closes</h3> <p>New Yorkers are facing the winter chill...</p></article>
```

### Preventing text from wrapping
Use the `text-nowrap` utility to prevent text from wrapping, allowing it to overflow if necessary:
Beloved Manhattan soup stand closes
New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
```
<article class="text-nowrap"> <h3>Beloved Manhattan soup stand closes</h3> <p>New Yorkers are facing the winter chill...</p></article>
```

### Balanced text wrapping
Use the `text-balance` utility to distribute the text evenly across each line:
Beloved Manhattan soup stand closes
New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
```
<article> <h3 class="text-balance">Beloved Manhattan soup stand closes</h3> <p>New Yorkers are facing the winter chill...</p></article>
```

For performance reasons browsers limit text balancing to blocks that are ~6 lines or less, making it best suited for headings.
### Pretty text wrapping
Use the `text-pretty` utility to prevent orphans (a single word on its own line) at the end of a text block:
Beloved Manhattan soup stand closes
New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
```
<article> <h3 class="text-pretty">Beloved Manhattan soup stand closes</h3> <p>New Yorkers are facing the winter chill...</p></article>
```

### Responsive design
Prefix a `text-wrap` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<h1 class="text-pretty md:text-balance ..."> <!-- ... --></h1>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Allowing text to wrap
    * Preventing text from wrapping
    * Balanced text wrapping
    * Pretty text wrapping
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftext-wrap&r=&sid=PMFMDJGK&qs=%7B%7D&cid=46532649)
