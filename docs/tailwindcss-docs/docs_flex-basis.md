v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Flexbox & Grid
  2. flex-basis


Flexbox & Grid
# flex-basis
Utilities for controlling the initial size of flex items.
Class| Styles  
---|---  
`basis-<number>`| `flex-basis: calc(var(--spacing) * <number>);`  
`basis-<fraction>`| `flex-basis: calc(<fraction> * 100%);`  
`basis-full`| `flex-basis: 100%;`  
`basis-auto`| `flex-basis: auto;`  
`basis-3xs`| `flex-basis: var(--container-3xs); /* 16rem (256px) */`  
`basis-2xs`| `flex-basis: var(--container-2xs); /* 18rem (288px) */`  
`basis-xs`| `flex-basis: var(--container-xs); /* 20rem (320px) */`  
`basis-sm`| `flex-basis: var(--container-sm); /* 24rem (384px) */`  
`basis-md`| `flex-basis: var(--container-md); /* 28rem (448px) */`  
`basis-lg`| `flex-basis: var(--container-lg); /* 32rem (512px) */`  
`basis-xl`| `flex-basis: var(--container-xl); /* 36rem (576px) */`  
`basis-2xl`| `flex-basis: var(--container-2xl); /* 42rem (672px) */`  
`basis-3xl`| `flex-basis: var(--container-3xl); /* 48rem (768px) */`  
`basis-4xl`| `flex-basis: var(--container-4xl); /* 56rem (896px) */`  
`basis-5xl`| `flex-basis: var(--container-5xl); /* 64rem (1024px) */`  
`basis-6xl`| `flex-basis: var(--container-6xl); /* 72rem (1152px) */`  
`basis-7xl`| `flex-basis: var(--container-7xl); /* 80rem (1280px) */`  
`basis-(<custom-property>)`| `flex-basis: var(<custom-property>);`  
`basis-[<value>]`| `flex-basis: <value>;`  
Show more
## Examples
### Using the spacing scale
Use `basis-<number>` utilities like `basis-64` and `basis-128` to set the initial size of flex items based on the spacing scale:
01
02
03
```
<div class="flex flex-row"> <div class="basis-64">01</div> <div class="basis-64">02</div> <div class="basis-128">03</div></div>
```

### Using the container scale
Use utilities like `basis-xs` and `basis-sm` to set the initial size of flex items based on the container scale:
01
02
03
04
```
<div class="flex flex-row"> <div class="basis-3xs">01</div> <div class="basis-2xs">02</div> <div class="basis-xs">03</div> <div class="basis-sm">04</div></div>
```

### Using percentages
Use `basis-<fraction>` utilities like `basis-1/2` and `basis-2/3` to set the initial size of flex items:
01
02
```
<div class="flex flex-row"> <div class="basis-1/3">01</div> <div class="basis-2/3">02</div></div>
```

### Using a custom value
Use the `basis-[<value>]` syntax to set the basis based on a completely custom value:
```
<div class="basis-[30vw] ..."> <!-- ... --></div>
```

For CSS variables, you can also use the `basis-(<custom-property>)` syntax:
```
<div class="basis-(--my-basis) ..."> <!-- ... --></div>
```

This is just a shorthand for `basis-[var(<custom-property>)]` that adds the `var()` function for you automatically.
### Responsive design
Prefix a `flex-basis` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:
```
<div class="flex flex-row"> <div class="basis-1/4 md:basis-1/3">01</div> <div class="basis-1/4 md:basis-1/3">02</div> <div class="basis-1/2 md:basis-1/3">03</div></div>
```

Learn more about using variants in the variants documentation.
## Customizing your theme
Use the `--container-*` theme variables to customize the fixed-width basis utilities in your project:
```
@theme { --container-4xs: 14rem; }
```

Now the `basis-4xs` utility can be used in your markup:
```
<div class="basis-4xs"> <!-- ... --></div>
```

The `basis-<number>` utilities are driven by the `--spacing` theme variable, which you can also customize:
```
@theme { --spacing: 1px; }
```

Learn more about customizing the spacing scale in the theme documentation.
### On this page
  * Quick reference
  * Examples
    * Using the spacing scale
    * Using the container scale
    * Using percentages
    * Using a custom value
    * Responsive design
  * Customizing your theme


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fflex-basis&r=&sid=PMFMDJGK&qs=%7B%7D&cid=85297442)
