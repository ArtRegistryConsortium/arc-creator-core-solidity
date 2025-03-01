v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. scroll-snap-align


Interactivity
# scroll-snap-align
Utilities for controlling the scroll snap alignment of an element.
Class| Styles  
---|---  
`snap-start`| `scroll-snap-align: start;`  
`snap-end`| `scroll-snap-align: end;`  
`snap-center`| `scroll-snap-align: center;`  
`snap-align-none`| `scroll-snap-align: none;`  
## Examples
### Snapping to the center
Use the `snap-center` utility to snap an element to its center when being scrolled inside a snap container:
Scroll in the grid of images to see the expected behavior
snap point
![](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
```
<div class="snap-x ..."> <div class="snap-center ...">  <img src="/img/vacation-01.jpg" /> </div> <div class="snap-center ...">  <img src="/img/vacation-02.jpg" /> </div> <div class="snap-center ...">  <img src="/img/vacation-03.jpg" /> </div> <div class="snap-center ...">  <img src="/img/vacation-04.jpg" /> </div> <div class="snap-center ...">  <img src="/img/vacation-05.jpg" /> </div> <div class="snap-center ...">  <img src="/img/vacation-06.jpg" /> </div></div>
```

### Snapping to the start
Use the `snap-start` utility to snap an element to its start when being scrolled inside a snap container:
Scroll in the grid of images to see the expected behavior
snap point
![](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
```
<div class="snap-x ..."> <div class="snap-start ...">  <img src="/img/vacation-01.jpg" /> </div> <div class="snap-start ...">  <img src="/img/vacation-02.jpg" /> </div> <div class="snap-start ...">  <img src="/img/vacation-03.jpg" /> </div> <div class="snap-start ...">  <img src="/img/vacation-04.jpg" /> </div> <div class="snap-start ...">  <img src="/img/vacation-05.jpg" /> </div> <div class="snap-start ...">  <img src="/img/vacation-06.jpg" /> </div></div>
```

### Snapping to the end
Use the `snap-end` utility to snap an element to its end when being scrolled inside a snap container:
Scroll in the grid of images to see the expected behavior
snap point
![](https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
![](https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80)
```
<div class="snap-x ..."> <div class="snap-end ...">  <img src="/img/vacation-01.jpg" /> </div> <div class="snap-end ...">  <img src="/img/vacation-02.jpg" /> </div> <div class="snap-end ...">  <img src="/img/vacation-03.jpg" /> </div> <div class="snap-end ...">  <img src="/img/vacation-04.jpg" /> </div> <div class="snap-end ...">  <img src="/img/vacation-05.jpg" /> </div> <div class="snap-end ...">  <img src="/img/vacation-06.jpg" /> </div></div>
```

### Responsive design
Prefix a `scroll-snap-align` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="snap-center md:snap-start ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Snapping to the center
    * Snapping to the start
    * Snapping to the end
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fscroll-snap-align&r=&sid=PMFMDJGK&qs=%7B%7D&cid=20592418)
