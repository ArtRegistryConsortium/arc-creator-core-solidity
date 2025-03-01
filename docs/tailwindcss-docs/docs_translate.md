v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Transforms
  2. translate


Transforms
# translate
Utilities for translating elements.
Class| Styles  
---|---  
`translate-<number>`| `translate: calc(var(--spacing) * <number>) calc(var(--spacing) * <number>);`  
`-translate-<number>`| `translate: calc(var(--spacing) * -<number>) calc(var(--spacing) * -<number>);`  
`translate-<fraction>`| `translate: calc(<fraction> * 100%) calc(<fraction> * 100%);`  
`-translate-<fraction>`| `translate: calc(<fraction> * -100%) calc(<fraction> * -100%);`  
`translate-full`| `translate: 100% 100%;`  
`-translate-full`| `translate: -100% -100%;`  
`translate-px`| `translate: 1px 1px;`  
`-translate-px`| `translate: -1px -1px;`  
`translate-(<custom-property>)`| `translate: var(<custom-property>) var(<custom-property>);`  
`translate-[<value>]`| `translate: <value> <value>;`  
`translate-x-<number>`| `translate: calc(var(--spacing) * <number>) var(--tw-translate-y);`  
`-translate-x-<number>`| `translate: calc(var(--spacing) * -<number>) var(--tw-translate-y);`  
`translate-x-<fraction>`| `translate: calc(<fraction> * 100%) var(--tw-translate-y);`  
`-translate-x-<fraction>`| `translate: calc(<fraction> * -100%) var(--tw-translate-y);`  
`translate-x-full`| `translate: 100% var(--tw-translate-y);`  
`-translate-x-full`| `translate: -100% var(--tw-translate-y);`  
`translate-x-px`| `translate: 1px var(--tw-translate-y);`  
`-translate-x-px`| `translate: -1px var(--tw-translate-y);`  
`translate-x-(<custom-property>)`| `translate: var(<custom-property>) var(--tw-translate-y);`  
`translate-x-[<value>]`| `translate: <value> var(--tw-translate-y);`  
`translate-y-<number>`| `translate: var(--tw-translate-x) calc(var(--spacing) * <number>);`  
`-translate-y-<number>`| `translate: var(--tw-translate-x) calc(var(--spacing) * -<number>);`  
`translate-y-<fraction>`| `translate: var(--tw-translate-x) calc(<fraction> * 100%);`  
`-translate-y-<fraction>`| `translate: var(--tw-translate-x) calc(<fraction> * -100%);`  
`translate-y-full`| `translate: var(--tw-translate-x) 100%;`  
`-translate-y-full`| `translate: var(--tw-translate-x) -100%;`  
`translate-y-px`| `translate: var(--tw-translate-x) 1px;`  
`-translate-y-px`| `translate: var(--tw-translate-x) -1px;`  
`translate-y-(<custom-property>)`| `translate: var(--tw-translate-x) var(<custom-property>);`  
`translate-y-[<value>]`| `translate: var(--tw-translate-x) <value>;`  
`translate-z-<number>`| `translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * <number>);`  
`-translate-z-<number>`| `translate: var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -<number>);`  
`translate-z-px`| `translate: var(--tw-translate-x) var(--tw-translate-y) 1px;`  
`-translate-z-px`| `translate: var(--tw-translate-x) var(--tw-translate-y) -1px;`  
`translate-z-(<custom-property>)`| `translate: var(--tw-translate-x) var(--tw-translate-y) var(<custom-property>);`  
`translate-z-[<value>]`| `translate: var(--tw-translate-x) var(--tw-translate-y) <value>;`  
`translate-none`| `translate: none;`  
Show more
## Examples
### Using the spacing scale
Use `translate-<number>` utilities like `translate-2` and `-translate-4` to translate an element on both axes based on the spacing scale:
-translate-6
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-2
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-8
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="-translate-6 ..." src="/img/mountains.jpg" /><img class="translate-2 ..." src="/img/mountains.jpg" /><img class="translate-8 ..." src="/img/mountains.jpg" />
```

### Using a percentage
Use `translate-<fraction>` utilities like `translate-1/4` and `-translate-full` to translate an element on both axes by a percentage of the element's size:
-translate-1/4
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-1/6
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-1/2
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="-translate-1/4 ..." src="/img/mountains.jpg" /><img class="translate-1/6 ..." src="/img/mountains.jpg" /><img class="translate-1/2 ..." src="/img/mountains.jpg" />
```

### Translating on the x-axis
Use `translate-x-<number>` or `translate-x-<fraction>` utilities like `translate-x-4` and `translate-x-1/4` to translate an element on the x-axis:
-translate-x-4
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-x-2
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-x-1/2
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="-translate-x-4 ..." src="/img/mountains.jpg" /><img class="translate-x-2 ..." src="/img/mountains.jpg" /><img class="translate-x-1/2 ..." src="/img/mountains.jpg" />
```

### Translating on the y-axis
Use `translate-y-<number>` or `translate-y-<fraction>` utilities like `translate-y-6` and `translate-y-1/3` to translate an element on the y-axis:
-translate-y-4
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-y-2
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-y-1/2
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<img class="-translate-y-4 ..." src="/img/mountains.jpg" /><img class="translate-y-2 ..." src="/img/mountains.jpg" /><img class="translate-y-1/2 ..." src="/img/mountains.jpg" />
```

### Translating on the z-axis
Use `translate-z-<number>` utilities like `translate-z-6` and `-translate-z-12` to translate an element on the z-axis:
-translate-z-8
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-z-4
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
translate-z-12
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)
```
<div class="transform-3d"> <img class="-translate-z-8 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /> <img class="translate-z-2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /> <img class="translate-z-1/2 rotate-x-50 rotate-z-45 ..." src="/img/mountains.jpg" /></div>
```

Note that the `translate-z-<number>` utilities require the `transform-3d` utility to be applied to the parent element.
### Using a custom value
Use the `translate-[<value>]` syntax to set the translation based on a completely custom value:
```
<img class="translate-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `translate-(<custom-property>)` syntax:
```
<img class="translate-(--my-translate) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `translate-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `translate` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<img class="translate-45 md:translate-60 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the variants documentation.
### On this page
  * Quick reference
  * Examples
    * Using the spacing scale
    * Using a percentage
    * Translating on the x-axis
    * Translating on the y-axis
    * Translating on the z-axis
    * Using a custom value
    * Responsive design


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
