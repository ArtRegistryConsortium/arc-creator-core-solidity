v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Base styles
  2. Preflight


Base styles
# Preflight
An opinionated set of base styles for Tailwind projects.
## Overview
Built on top of modern-normalize, Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.
When you import `tailwindcss` into your project, Preflight is automatically injected into the `base` layer:
CSS
```
@layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);
```

While most of the styles in Preflight are meant to go unnoticed—they simply make things behave more like you'd expect them to—some are more opinionated and can be surprising when you first encounter them.
For a complete reference of all the styles applied by Preflight, see the stylesheet.
### Margins are removed
Preflight removes all of the default margins from all elements including headings, blockquotes, paragraphs, etc:
CSS
```
*,::after,::before,::backdrop,::file-selector-button { margin: 0; padding: 0;}
```

This makes it harder to accidentally rely on margin values applied by the user-agent stylesheet that are not part of your spacing scale.
### Border styles are reset
In order to make it easy to add a border by simply adding the `border` class, Tailwind overrides the default border styles for all elements with the following rules:
CSS
```
*,::after,::before,::backdrop,::file-selector-button { box-sizing: border-box; border: 0 solid;}
```

Since the `border` class only sets the `border-width` property, this reset ensures that adding that class always adds a solid `1px` border that uses `currentColor`.
This can cause some unexpected results when integrating certain third-party libraries, like Google maps for example.
When you run into situations like this, you can work around them by overriding the Preflight styles with your own custom CSS:
CSS
```
@layer base { .google-map * {  border-style: none; }}
```

### Headings are unstyled
All heading elements are completely unstyled by default, and have the same font size and weight as normal text:
CSS
```
h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit;}
```

The reason for this is two-fold:
  * **It helps you avoid accidentally deviating from your type scale**. By default, browsers assign sizes to headings that don't exist in Tailwind's default type scale, and aren't guaranteed to exist in your own type scale.
  * **In UI development, headings should often be visually de-emphasized**. Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately.


You can always add default header styles to your project by adding your own base styles.
### Lists are unstyled
Ordered and unordered lists are unstyled by default, with no bullets or numbers:
CSS
```
ol,ul,menu { list-style: none;}
```

If you'd like to style a list, you can do so using the list-style-type and list-style-position utilities:
HTML
```
<ul class="list-inside list-disc"> <li>One</li> <li>Two</li> <li>Three</li></ul>
```

You can always add default list styles to your project by adding your own base styles.
#### Accessibility considerations
Unstyled lists are not announced as lists by VoiceOver. If your content is truly a list but you would like to keep it unstyled, add a "list" role to the element:
HTML
```
<ul role="list"> <li>One</li> <li>Two</li> <li>Three</li></ul>
```

### Images are block-level
Images and other replaced elements (like `svg`, `video`, `canvas`, and others) are `display: block` by default:
CSS
```
img,svg,video,canvas,audio,iframe,embed,object { display: block; vertical-align: middle;}
```

This helps to avoid unexpected alignment issues that you often run into using the browser default of `display: inline`.
If you ever need to make one of these elements `inline` instead of `block`, simply use the `inline` utility:
HTML
```
<img class="inline" src="..." alt="..." />
```

### Images are constrained
Images and videos are constrained to the parent width in a way that preserves their intrinsic aspect ratio:
CSS
```
img,video { max-width: 100%; height: auto;}
```

This prevents them from overflowing their containers and makes them responsive by default. If you ever need to override this behavior, use the `max-w-none` utility:
HTML
```
<img class="max-w-none" src="..." alt="..." />
```

## Extending Preflight
If you'd like to add your own base styles on top of Preflight, add them to the `base` CSS layer in your CSS using `@layer base`:
CSS
```
@layer base { h1 {  font-size: var(--text-2xl); } h2 {  font-size: var(--text-xl); } h3 {  font-size: var(--text-lg); } a {  color: var(--color-blue-600);  text-decoration-line: underline; }}
```

Learn more in the adding base styles documentation.
## Disabling Preflight
If you'd like to completely disable Preflight—perhaps because you're integrating Tailwind into an existing project or you'd prefer to define your own base styles—you can do so by importing only the parts of Tailwind that you need.
By default, this is what `@import "tailwindcss";` injects:
CSS
```
@layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);
```

To disable Preflight, simply omit its import while keeping everything else:
CSS
```
@layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);
```

### On this page
  * Overview
    * Margins are removed
    * Border styles are reset
    * Headings are unstyled
    * Lists are unstyled
    * Images are block-level
    * Images are constrained
  * Extending Preflight
  * Disabling Preflight


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fpreflight&r=&sid=PMFMDJGK&qs=%7B%7D&cid=12280848)
