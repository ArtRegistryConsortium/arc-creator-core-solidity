v4.0
`⌘K``Ctrl K`DocsComponentsBlogShowcase
  1. Getting Started
  2. Play CDN


Installation
# Get started with Tailwind CSS
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
It's fast, flexible, and reliable — with zero-runtime.
## Installation
  * ## Using Vite
  * ## Using PostCSS
  * ## Tailwind CLI
  * ## Framework Guides
  * ## Play CDN


### Using Play CDN
Use the Play CDN to try Tailwind right in the browser without any build step. The Play CDN is designed for development purposes only, and is not intended for production.
01
#### Add the Play CDN script to your HTML
Add the Play CDN script tag to the `<head>` of your HTML file, and start using Tailwind’s utility classes to style your content.
index.html
```
<!doctype html><html> <head>  <meta charset="UTF-8" />  <meta name="viewport" content="width=device-width, initial-scale=1.0" />  <script src="https://unpkg.com/@tailwindcss/browser@4"></script> </head> <body>  <h1 class="text-3xl font-bold underline">   Hello world!  </h1> </body></html>
```

02
#### Try adding some custom CSS
Use `type="text/tailwindcss"` to add custom CSS that supports all of Tailwind's CSS features.
index.html
```
<!doctype html><html> <head>  <meta charset="UTF-8" />  <meta name="viewport" content="width=device-width, initial-scale=1.0" />  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>  <style type="text/tailwindcss">   @theme {    --color-clifford: #da373d;   }  </style> </head> <body>  <h1 class="text-3xl font-bold underline text-clifford">   Hello world!  </h1> </body></html>
```

Copyright © 2025 Tailwind Labs Inc.·Trademark Policy
![](https://cdn.usefathom.com/?h=https%3A%2F%2Ftailwindcss.com&p=%2Fdocs%2Finstallation%2Fplay-cdn&r=&sid=PMFMDJGK&qs=%7B%7D&cid=54459237)
