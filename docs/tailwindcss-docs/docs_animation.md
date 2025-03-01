v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transitions & Animation
  2. animation


Transitions & Animation
# animation
Utilities for animating elements with CSS animations.
Class| Styles  
---|---  
`animate-spin`| `animation: var(--animate-spin); /* spin 1s linear infinite */ @keyframes spin {  to {   transform: rotate(360deg);  } }`  
`animate-ping`| `animation: var(--animate-ping); /* ping 1s cubic-bezier(0, 0, 0.2, 1) infinite */ @keyframes ping {  75%, 100% {   transform: scale(2);   opacity: 0;  } }`  
`animate-pulse`| `animation: var(--animate-pulse); /* pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite */ @keyframes pulse {  50% {   opacity: 0.5;  } }`  
`animate-bounce`| `animation: var(--animate-bounce); /* bounce 1s infinite */ @keyframes bounce {  0%, 100% {   transform: translateY(-25%);   animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {   transform: none;   animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  } }`  
`animate-none`| `animation: none;`  
`animate-(<custom-property>)`| `animation: var(<custom-property>);`  
`animate-[<value>]`| `animation: <value>;`  
## Examples
### Adding a spin animation
Use the `animate-spin` utility to add a linear spin animation to elements like loading indicators:
Processing…
```
<button type="button" class="bg-indigo-500 ..." disabled> <svg class="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">  <!-- ... --> </svg> Processing…</button>
```

### Adding a ping animation
Use the `animate-ping` utility to make an element scale and fade like a radar ping or ripple of water—useful for things like notification badges:
Transactions
```
<span class="relative flex size-3"> <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span> <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span></span>
```

### Adding a pulse animation
Use the `animate-pulse` utility to make an element gently fade in and out—useful for things like skeleton loaders:
```
<div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4"> <div class="flex animate-pulse space-x-4">  <div class="size-10 rounded-full bg-gray-200"></div>  <div class="flex-1 space-y-6 py-1">   <div class="h-2 rounded bg-gray-200"></div>   <div class="space-y-3">    <div class="grid grid-cols-3 gap-4">     <div class="col-span-2 h-2 rounded bg-gray-200"></div>     <div class="col-span-1 h-2 rounded bg-gray-200"></div>    </div>    <div class="h-2 rounded bg-gray-200"></div>   </div>  </div> </div></div>
```

### Adding a bounce animation
Use the `animate-bounce` utility to make an element bounce up and down—useful for things like "scroll down" indicators:
```
<svg class="size-6 animate-bounce ..."> <!-- ... --></svg>
```

### Supporting reduced motion
For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the `motion-safe` and `motion-reduce` variants:
```
<button type="button" class="bg-indigo-600 ..." disabled> <svg class="mr-3 size-5 motion-safe:animate-spin ..." viewBox="0 0 24 24">  <!-- ... --> </svg> Processing</button>
```

### Using a custom value
Use the `animate-[<value>]` syntax to set the animation based on a completely custom value:
```
<div class="animate-[wiggle_1s_ease-in-out_infinite] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `animate-(<custom-property>)` syntax:
```
<div class="animate-(--my-animation) ..."> <!-- ... --></div>
```

This is just a shorthand for `animate-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix an `animation` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="animate-none md:animate-spin ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
Use the `--animate-*` theme variables to customize the animation utilities in your project:
```
@theme { --animate-wiggle: wiggle 1s ease-in-out infinite; @keyframes wiggle {  0%,  100% {   transform: rotate(-3deg);  }  50% {   transform: rotate(3deg);  } }}
```

Now the `animate-wiggle` utility can be used in your markup:
```
<div class="animate-wiggle"> <!-- ... --></div>
```

Learn more about customizing your theme in the theme documentation.
### On this page
  * Quick reference
  * Examples
    * Adding a spin animation
    * Adding a ping animation
    * Adding a pulse animation
    * Adding a bounce animation
    * Supporting reduced motion
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fanimation&r=&sid=PMFMDJGK&qs=%7B%7D&cid=96076894)
