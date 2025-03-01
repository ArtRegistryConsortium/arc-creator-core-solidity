v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. position


Layout
# position
Utilities for controlling how an element is positioned in the document.
Class| Styles  
---|---  
`static`| `position: static;`  
`fixed`| `position: fixed;`  
`absolute`| `position: absolute;`  
`relative`| `position: relative;`  
`sticky`| `position: sticky;`  
## Examples
### Statically positioning elements
Use the `static` utility to position an element according to the normal flow of the document:
Static parent
Absolute child
```
<div class="static ..."> <p>Static parent</p> <div class="absolute bottom-0 left-0 ...">  <p>Absolute child</p> </div></div>
```

With statically positioned elements, any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.
### Relatively positioning elements
Use the `relative` utility to position an element according to the normal flow of the document:
Relative parent
Absolute child
```
<div class="relative ..."> <p>Relative parent</p> <div class="absolute bottom-0 left-0 ...">  <p>Absolute child</p> </div></div>
```

With relatively position elements, any offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
### Absolutely positioning elements
Use the `absolute` utility to position an element _outside_ of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist:
With static positioning
Relative parent
Static parent
Static child?
Static sibling
With absolute positioning
Relative parent
Static parent
Absolute child
Static sibling
```
<div class="static ..."> <!-- Static parent --> <div class="static ..."><p>Static child</p></div> <div class="inline-block ..."><p>Static sibling</p></div> <!-- Static parent --> <div class="absolute ..."><p>Absolute child</p></div> <div class="inline-block ..."><p>Static sibling</p></div></div>
```

With absolutely positioned elements, any offsets are calculated relative to the nearest parent that has a position other than `static`, and the element will act as a position reference for other absolutely positioned children.
### Fixed positioning elements
Use the `fixed` utility to position an element relative to the browser window:
Scroll this element to see the fixed positioning in action
Contacts
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Andrew Alfred**
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Debra Houston**
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Jane White**
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Ray Flint**
![](https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Mindy Albrect**
![](https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**David Arnold**
```
<div class="relative"> <div class="fixed top-0 right-0 left-0">Contacts</div> <div>  <div>   <img src="/img/andrew.jpg" />   <strong>Andrew Alfred</strong>  </div>  <div>   <img src="/img/debra.jpg" />   <strong>Debra Houston</strong>  </div>  <!-- ... --> </div></div>
```

With fixed positioned elements, any offsets are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children:
### Sticky positioning elements
Use the `sticky` utility to position an element as `relative` until it crosses a specified threshold, then treat it as `fixed` until its parent is off screen:
Scroll this element to see the sticky positioning in action
A
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Andrew Alfred**
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Aisha Houston**
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Anna White**
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Andy Flint**
B
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Bob Alfred**
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Bianca Houston**
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Brianna White**
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Bert Flint**
C
![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Colton Alfred**
![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Cynthia Houston**
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Cheyenne White**
![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Charlie Flint**
```
<div> <div>  <div class="stickytop-0 ...">A</div>  <div>   <div>    <img src="/img/andrew.jpg" />    <strong>Andrew Alfred</strong>   </div>   <div>    <img src="/img/aisha.jpg" />    <strong>Aisha Houston</strong>   </div>   <!-- ... -->  </div> </div> <div>  <div class="stickytop-0">B</div>  <div>   <div>    <img src="/img/bob.jpg" />    <strong>Bob Alfred</strong>   </div>   <!-- ... -->  </div> </div> <!-- ... --></div>
```

With sticky positioned elements, any offsets are calculated relative to the element's normal position and the element will act as a position reference for absolutely positioned children.
### Responsive design
Prefix a `position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="relative md:absolute ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Statically positioning elements
    * Relatively positioning elements
    * Absolutely positioning elements
    * Fixed positioning elements
    * Sticky positioning elements
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fposition&r=&sid=PMFMDJGK&qs=%7B%7D&cid=22369417)
