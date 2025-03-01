v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Typography
  2. line-clamp


Typography
# line-clamp
Utilities for clamping text to a specific number of lines.
Class| Styles  
---|---  
`line-clamp-<number>`| `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <number>;`  
`line-clamp-none`| `overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: unset;`  
`line-clamp-(<custom-property>)`| `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: var(<custom-property>);`  
`line-clamp-[<value>]`| `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <value>;`  
## Examples
### Basic example
Use `line-clamp-<number>` utilities like `line-clamp-2` and `line-clamp-3` to truncate multi-line text after a specific number of lines:
Mar 10, 2020
Boost your conversion rate
Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.
![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)Lindsay Walton
```
<article> <time>Mar 10, 2020</time> <h2>Boost your conversion rate</h2> <p class="line-clamp-3">  Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut  sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat  dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt  ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur  enim. </p> <div>  <img src="/img/lindsay.jpg" />  Lindsay Walton </div></article>
```

### Undoing line clamping
Use `line-clamp-none` to undo a previously applied line clamp utility:
```
<p class="line-clamp-3 lg:line-clamp-none"> <!-- ... --></p>
```

### Using a custom value
Use the `line-clamp-[<value>]` syntax to set the number of lines based on a completely custom value:
```
<p class="line-clamp-[calc(var(--characters)/100)] ..."> <!-- ... --></p>
```

For CSS variables, you can also use the `line-clamp-(<custom-property>)` syntax:
```
<p class="line-clamp-(--my-line-count) ..."> <!-- ... --></p>
```

This is just a shorthand for `line-clamp-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `line-clamp` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="line-clamp-3 md:line-clamp-4 ..."> <!-- ... --></div>
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Basic example
    * Undoing line clamping
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fline-clamp&r=&sid=PMFMDJGK&qs=%7B%7D&cid=18220834)
