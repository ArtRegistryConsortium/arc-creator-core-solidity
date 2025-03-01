v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Layout
  2. aspect-ratio


Layout
# aspect-ratio
Utilities for controlling the aspect ratio of an element.
Class| Styles  
---|---  
`aspect-<ratio>`| `aspect-ratio: <ratio>;`  
`aspect-square`| `aspect-ratio: 1 / 1;`  
`aspect-video`| `aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */`  
`aspect-auto`| `aspect-ratio: auto;`  
`aspect-(<custom-property>)`| `aspect-ratio: var(<custom-property>);`  
`aspect-[<value>]`| `aspect-ratio: <value>;`  
## Examples
### Basic example
Use `aspect-<ratio>` utilities like `aspect-3/2` to give an element a specific aspect ratio:
Resize the example to see the expected behavior
![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80)
```
<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />
```

### Using a video aspect ratio
Use the `aspect-video` utility to give a video element a 16 / 9 aspect ratio:
Resize the example to see the expected behavior
```
<iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

### Using a custom value
Use the `aspect-[<value>]` syntax to set the aspect ratio based on a completely custom value:
```
<img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />
```

For CSS variables, you can also use the `aspect-(<custom-property>)` syntax:
```
<img class="aspect-(--my-aspect-ratio) ..." src="/img/villas.jpg" />
```

This is just a shorthand for `aspect-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `aspect-ratio` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
Use the `--aspect-*` theme variables to customize the aspect ratio utilities in your project:
```
@theme { --aspect-retro: 4 / 3; }
```

Now the `aspect-retro` utility can be used in your markup:
```
<iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

Learn more about customizing your theme in the theme documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Using a video aspect ratio
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Faspect-ratio&r=&sid=PMFMDJGK&qs=%7B%7D&cid=2652949)
