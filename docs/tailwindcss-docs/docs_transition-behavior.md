v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transitions & Animation
  2. transition-behavior


Transitions & Animation
# transition-behavior
Utilities to control the behavior of CSS transitions.
Class| Styles  
---|---  
`transition-normal`| `transition-behavior: normal;`  
`transition-discrete`| `transition-behavior: allow-discrete;`  
## Examples
### Basic example
Use the `transition-discrete` utility to start transitions when changing properties with a discrete set of values, such as elements that change from `hidden` to `block`:
Interact with the checkboxes to see the expected behavior
transition-normalI hide
transition-discreteI fade out
```
<label class="peer ..."> <input type="checkbox" checked /></label><button class="hidden transition-all not-peer-has-checked:opacity-0 peer-has-checked:block ..."> I hide</button><label class="peer ..."> <input type="checkbox" checked /></label><button class="hidden transition-all transition-discrete not-peer-has-checked:opacity-0 peer-has-checked:block ..."> I fade out</button>
```

### Responsive design
Prefix a `transition-behavior` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<button class="transition-discrete md:transition-normal ..."> <!-- ... --></button>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Ftransition-behavior&r=&sid=PMFMDJGK&qs=%7B%7D&cid=86201231)
