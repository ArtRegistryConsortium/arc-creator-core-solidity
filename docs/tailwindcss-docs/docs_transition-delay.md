v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transitions & Animation
  2. transition-delay


Transitions & Animation
# transition-delay
Utilities for controlling the delay of CSS transitions.
Class| Styles  
---|---  
`delay-<number>`| `transition-delay: <number>ms;`  
`delay-(<custom-property>)`| `transition-delay: var(<custom-property>);`  
`delay-[<value>]`| `transition-delay: <value>;`  
## Examples
### Basic example
Use utilities like `delay-150` and `delay-700` to set the transition delay of an element in milliseconds:
Hover each button to see the expected behavior
delay-150
Button A
delay-300
Button B
delay-700
Button C
```
<button class="transition delay-150 duration-300 ease-in-out ...">Button A</button><button class="transition delay-300 duration-300 ease-in-out ...">Button B</button><button class="transition delay-700 duration-300 ease-in-out ...">Button C</button>
```

### Using a custom value
Use the `delay-[<value>]` syntax to set the transition delay based on a completely custom value:
```
<button class="delay-[1s,250ms] ..."> <!-- ... --></button>
```

For CSS variables, you can also use the `delay-(<custom-property>)` syntax:
```
<button class="delay-(--my-delay) ..."> <!-- ... --></button>
```

This is just a shorthand for `delay-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `transition-delay` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<button class="delay-150 md:delay-300 ..."> <!-- ... --></button>
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
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftransition-delay&r=&sid=PMFMDJGK&qs=%7B%7D&cid=19170251)
