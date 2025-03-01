v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. pointer-events


Interactivity
# pointer-events
Utilities for controlling whether an element responds to pointer events.
Class| Styles  
---|---  
`pointer-events-auto`| `pointer-events: auto;`  
`pointer-events-none`| `pointer-events: none;`  
## Examples
### Ignoring pointer events
Use the `pointer-events-none` utility to make an element ignore pointer events, like `:hover` and `click` events:
Click the search icons to see the expected behavior
pointer-events-auto
pointer-events-none
```
<div class="relative ..."> <div class="pointer-events-auto absolute ...">  <svg class="absolute h-5 w-5 text-gray-400">   <!-- ... -->  </svg> </div> <input type="text" placeholder="Search" class="..." /></div><div class="relative ..."> <div class="pointer-events-none absolute ...">  <svg class="absolute h-5 w-5 text-gray-400">   <!-- ... -->  </svg> </div> <input type="text" placeholder="Search" class="..." /></div>
```

The pointer events will still trigger on child elements and pass-through to elements that are "beneath" the target.
### Restoring pointer events
Use the `pointer-events-auto` utility to revert to the default browser behavior for pointer events:
```
<div class="pointer-events-none md:pointer-events-auto ..."> <!-- ... --></div>
```

### On this page
  * Quick reference
  * Examples
    * Ignoring pointer events
    * Restoring pointer events


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fpointer-events&r=&sid=PMFMDJGK&qs=%7B%7D&cid=46530143)
