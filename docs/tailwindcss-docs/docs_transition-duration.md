v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transitions & Animation
  2. transition-duration


Transitions & Animation
# transition-duration
Utilities for controlling the duration of CSS transitions.
Class| Styles  
---|---  
`duration-<number>`| `transition-duration: <number>ms;`  
`duration-initial`| `transition-duration: initial;`  
`duration-(<custom-property>)`| `transition-duration: var(<custom-property>);`  
`duration-[<value>]`| `transition-duration: <value>;`  
## Examples
### Basic example
Use utilities like `duration-150` and `duration-700` to set the transition duration of an element in milliseconds:
Hover each button to see the expected behavior
duration-150
Button A
duration-300
Button B
duration-700
Button C
```
<button class="transition duration-150 ease-in-out ...">Button A</button><button class="transition duration-300 ease-in-out ...">Button B</button><button class="transition duration-700 ease-in-out ...">Button C</button>
```

### Using a custom value
Use the `duration-[<value>]` syntax to set the transition duration based on a completely custom value:
```
<button class="duration-[1s,15s] ..."> <!-- ... --></button>
```

For CSS variables, you can also use the `duration-(<custom-property>)` syntax:
```
<button class="duration-(--my-duration) ..."> <!-- ... --></button>
```

This is just a shorthand for `duration-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `transition-duration` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<button class="duration-0 md:duration-150 ..."> <!-- ... --></button>
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
