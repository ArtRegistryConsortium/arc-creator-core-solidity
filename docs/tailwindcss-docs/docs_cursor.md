v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Interactivity
  2. cursor


Interactivity
# cursor
Utilities for controlling the cursor style when hovering over an element.
Class| Styles  
---|---  
`cursor-auto`| `cursor: auto;`  
`cursor-default`| `cursor: default;`  
`cursor-pointer`| `cursor: pointer;`  
`cursor-wait`| `cursor: wait;`  
`cursor-text`| `cursor: text;`  
`cursor-move`| `cursor: move;`  
`cursor-help`| `cursor: help;`  
`cursor-not-allowed`| `cursor: not-allowed;`  
`cursor-none`| `cursor: none;`  
`cursor-context-menu`| `cursor: context-menu;`  
`cursor-progress`| `cursor: progress;`  
`cursor-cell`| `cursor: cell;`  
`cursor-crosshair`| `cursor: crosshair;`  
`cursor-vertical-text`| `cursor: vertical-text;`  
`cursor-alias`| `cursor: alias;`  
`cursor-copy`| `cursor: copy;`  
`cursor-no-drop`| `cursor: no-drop;`  
`cursor-grab`| `cursor: grab;`  
`cursor-grabbing`| `cursor: grabbing;`  
`cursor-all-scroll`| `cursor: all-scroll;`  
`cursor-col-resize`| `cursor: col-resize;`  
`cursor-row-resize`| `cursor: row-resize;`  
`cursor-n-resize`| `cursor: n-resize;`  
`cursor-e-resize`| `cursor: e-resize;`  
`cursor-s-resize`| `cursor: s-resize;`  
`cursor-w-resize`| `cursor: w-resize;`  
`cursor-ne-resize`| `cursor: ne-resize;`  
`cursor-nw-resize`| `cursor: nw-resize;`  
`cursor-se-resize`| `cursor: se-resize;`  
`cursor-sw-resize`| `cursor: sw-resize;`  
`cursor-ew-resize`| `cursor: ew-resize;`  
`cursor-ns-resize`| `cursor: ns-resize;`  
`cursor-nesw-resize`| `cursor: nesw-resize;`  
`cursor-nwse-resize`| `cursor: nwse-resize;`  
`cursor-zoom-in`| `cursor: zoom-in;`  
`cursor-zoom-out`| `cursor: zoom-out;`  
`cursor-(<custom-property>)`| `cursor: var(<custom-property>);`  
`cursor-[<value>]`| `cursor: <value>;`  
Show more
## Examples
### Basic example
Use utilities like `cursor-pointer` and `cursor-grab` to control which cursor is displayed when hovering over an element:
Hover over each button to see the cursor change
SubmitSaving...Confirm
```
<button class="cursor-pointer ...">Submit</button><button class="cursor-progress ...">Saving...</button><button class="cursor-not-allowed ..." disabled>Confirm</button>
```

### Using a custom value
Use the `cursor-[<value>]` syntax to set the cursor based on a completely custom value:
```
<button class="cursor-[url(hand.cur),_pointer] ..."> <!-- ... --></button>
```

For CSS variables, you can also use the `cursor-(<custom-property>)` syntax:
```
<button class="cursor-(--my-cursor) ..."> <!-- ... --></button>
```

This is just a shorthand for `cursor-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `cursor` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<button class="cursor-not-allowed md:cursor-auto ..."> <!-- ... --></button>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fcursor&r=&sid=PMFMDJGK&qs=%7B%7D&cid=55456867)
