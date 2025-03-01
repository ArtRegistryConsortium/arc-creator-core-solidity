v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. will-change


Interactivity
# will-change
Utilities for optimizing upcoming animations of elements that are expected to change.
Class| Styles  
---|---  
`will-change-auto`| `will-change: auto;`  
`will-change-scroll`| `will-change: scroll-position;`  
`will-change-contents`| `will-change: contents;`  
`will-change-transform`| `will-change: transform;`  
`will-change-<custom-property>`| `will-change: var(<custom-property>);`  
`will-change-[<value>]`| `will-change: <value>;`  
## Examples
### Optimizing with will change
Use the `will-change-scroll`, `will-change-contents` and `will-change-transform` utilities to optimize an element that's expected to change in the near future by instructing the browser to prepare the necessary animation before it actually begins:
```
<div class="overflow-auto will-change-scroll"> <!-- ... --></div>
```

It's recommended that you apply these utilities just before an element changes, and then remove it shortly after it finishes using `will-change-auto`.
The `will-change` property is intended to be used as a last resort when dealing with **known performance problems**. Avoid using these utilities too much, or simply in anticipation of performance issues, as it could actually cause the page to be less performant.
### Using a custom value
Use the `will-change-[<value>]` syntax to set the `will-change` property based on a completely custom value:
```
<div class="will-change-[top,left] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `will-change-(<custom-property>)` syntax:
```
<div class="will-change-(--my-properties) ..."> <!-- ... --></div>
```

This is just a shorthand for `will-change-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### On this page
  * Quick reference
  * Examples
    * Optimizing with will change
    * Using a custom value


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fwill-change&r=&sid=PMFMDJGK&qs=%7B%7D&cid=90843111)
