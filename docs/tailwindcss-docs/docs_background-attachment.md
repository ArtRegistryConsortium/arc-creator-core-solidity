v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Backgrounds
  2. background-attachment


Backgrounds
# background-attachment
Utilities for controlling how a background image behaves when scrolling.
Class| Styles  
---|---  
`bg-fixed`| `background-attachment: fixed;`  
`bg-local`| `background-attachment: local;`  
`bg-scroll`| `background-attachment: scroll;`  
## Examples
### Fixing the background image
Use the `bg-fixed` utility to fix the background image relative to the viewport:
Scroll the content to see the background image fixed in place
My trip to the summit
November 16, 2021 · 4 min read
Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
```
<div class="bg-[url(/img/mountains.jpg)] bg-fixed ..."> <!-- ... --></div>
```

### Scrolling with the container
Use the `bg-local` utility to scroll the background image with the container and the viewport:
Scroll the content to see the background image scroll with the container
Because the mail never stops. It just keeps coming and coming and coming, there's never a let-up. It's relentless. Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps coming in. And then the barcode reader breaks and it's Publisher's Clearing House day.
— Newman
```
<div class="bg-[url(/img/mountains.jpg)] bg-local ..."> <!-- ... --></div>
```

### Scrolling with the viewport
Use the `bg-scroll` utility to scroll the background image with the viewport, but not with the container:
Scroll the content to see the background image fixed in the container
Because the mail never stops. It just keeps coming and coming and coming, there's never a let-up. It's relentless. Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps coming in. And then the barcode reader breaks and it's Publisher's Clearing House day.
— Newman
```
<div class="bg-[url(/img/mountains.jpg)] bg-scroll ..."> <!-- ... --></div>
```

### Responsive design
Prefix a `background-attachment` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="bg-local md:bg-fixed ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Fixing the background image
    * Scrolling with the container
    * Scrolling with the viewport
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fbackground-attachment&r=&sid=PMFMDJGK&qs=%7B%7D&cid=32144364)
