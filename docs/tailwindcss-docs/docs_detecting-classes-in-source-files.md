v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Core concepts
  2. Detecting classes in source files


Core concepts
# Detecting classes in source files
Understanding and customizing how Tailwind scans your source files.
## Overview
Tailwind works by scanning your project for utility classes, then generating all of the necessary CSS based on the classes you've actually used.
This makes sure your CSS is as small as possible, and is also what makes features like arbitrary values possible.
### How classes are detected
Tailwind treats all of your source files as plain text, and doesn't attempt to actually parse your files as code in any way.
Instead it just looks for any tokens in your file that could be classes based on which characters Tailwind is expecting in class names:
JSX
```
exportfunction Button({color,children }) {constcolors = {black: "bg-blacktext-white",blue: "bg-blue-500text-white",white: "bg-whitetext-black", };return (  <buttonclassName={`${colors[color]}rounded-fullpx-2py-1.5font-sanstext-sm/6font-mediumshadow`}>   {children}  </button> );}
```

Then it tries to generate the CSS for all of these tokens, throwing away any tokens that don't map to a utility class the framework knows about.
### Dynamic class names
Since Tailwind scans your source files as plain text, it has no way of understanding string concatenation or interpolation in the programming language you're using.
Don't construct class names dynamically
HTML
```
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

In the example above, the strings `text-red-600` and `text-green-600` do not exist, so Tailwind will not generate those classes.
Instead, make sure any class names you’re using exist in full:
Always use complete class names
HTML
```
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

If you're using a component library like React or Vue, this means you shouldn't use props to dynamically construct classes:
Don't use props to build class names dynamically
JSX
```
function Button({ color, children }) { return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;}
```

Instead, map props to complete class names that are statically detectable at build-time:
Always map props to static class names
JSX
```
function Button({ color, children }) { const colorVariants = {  blue: "bg-blue-600 hover:bg-blue-500",  red: "bg-red-600 hover:bg-red-500", }; return <button className={`${colorVariants[color]} ...`}>{children}</button>;}
```

This has the added benefit of letting you map different prop values to different color shades for example:
JSX
```
function Button({ color, children }) { const colorVariants = {  blue: "bg-blue-600 hover:bg-blue-500 text-white",  red: "bg-red-500 hover:bg-red-400 text-white",  yellow: "bg-yellow-300 hover:bg-yellow-400 text-black", }; return <button className={`${colorVariants[color]} ...`}>{children}</button>;}
```

As long as you always use complete class names in your code, Tailwind will generate all of your CSS perfectly every time.
### Which files are scanned
Tailwind will scan every file in your project for class names, except in the following cases:
  * Files that are in your `.gitignore` file
  * Binary files like images, videos, or zip files
  * CSS files
  * Common package manager lock files


If you need to scan any files that Tailwind is ignoring by default, you can explicitly register those sources.
## Explicitly registering sources
Use `@source` to explicitly register source paths relative to the stylesheet:
CSS
```
@import "tailwindcss";@source "../node_modules/@acmecorp/ui-lib";
```

This is especially useful when you need to scan an external library that is built with Tailwind, since dependencies are usually listed in your `.gitignore` file and ignored by Tailwind by default.
### Setting your base path
Tailwind uses the current working directory as its starting point when scanning for class names by default.
To set the base path for source detection explicitly, use the `source()` function when importing Tailwind in your CSS:
CSS
```
@import "tailwindcss"source("../src");
```

This can be useful when working with monorepos where your build commands run from the root of the monorepo instead of the root of each project.
### Disabling automatic detection
Use `source(none)` to completely disable automatic source detection if you want to register all of your sources explicitly:
CSS
```
@import "tailwindcss" source(none);@source "../admin";@source "../shared";
```

This can be useful in projects that have multiple Tailwind stylesheets where you want to make sure each one only includes the classes each stylesheet needs.
### On this page
  * Overview
    * How classes are detected
    * Dynamic class names
    * Which files are scanned
  * Explicitly registering sources
    * Setting your base path
    * Disabling automatic detection


![Refactoring UI](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbook-promo.27d91093.png&w=256&q=75)
From the creators of Tailwind CSS
Make your ideas look awesome, without relying on a designer.
> “This is the survival kit I wish I had when I started building apps.”
> Derrick Reimer, SavvyCal
Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Fdetecting-classes-in-source-files&r=&sid=PMFMDJGK&qs=%7B%7D&cid=38390102)
