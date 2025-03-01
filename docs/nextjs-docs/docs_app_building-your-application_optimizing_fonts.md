Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationOptimizingFonts
# Font Optimization
**`next/font`**will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.
> **🎥 Watch:** Learn more about using `next/font` → YouTube (6 minutes).
`next/font` includes **built-in automatic self-hosting** for _any_ font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS `size-adjust` property used.
This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. **No requests are sent to Google by the browser.**
## Google Fonts
Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment. **No requests are sent to Google by the browser.**
Get started by importing the font you would like to use from `next/font/google` as a function. We recommend using variable fonts for the best performance and flexibility.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Inter } from'next/font/google'
// If loading a variable font, you don't need to specify the font weight
constinter=Inter({
 subsets: ['latin'],
 display:'swap',
})
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en"className={inter.className}>
   <body>{children}</body>
  </html>
 )
}
```

If you can't use a variable font, you will **need to specify a weight** :
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Roboto } from'next/font/google'
constroboto=Roboto({
 weight:'400',
 subsets: ['latin'],
 display:'swap',
})
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en"className={roboto.className}>
   <body>{children}</body>
  </html>
 )
}
```

You can specify multiple weights and/or styles by using an array:
app/layout.js
```
constroboto=Roboto({
 weight: ['400','700'],
 style: ['normal','italic'],
 subsets: ['latin'],
 display:'swap',
})
```

> **Good to know** : Use an underscore (_) for font names with multiple words. E.g. `Roboto Mono` should be imported as `Roboto_Mono`.
### Specifying a subset
Google Fonts are automatically subset. This reduces the size of the font file and improves performance. You'll need to define which of these subsets you want to preload. Failing to specify any subsets while `preload` is `true` will result in a warning.
This can be done by adding it to the function call:
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
constinter=Inter({ subsets: ['latin'] })
```

View the Font API Reference for more information.
### Using Multiple Fonts
You can import and use multiple fonts in your application. There are two approaches you can take.
The first approach is to create a utility function that exports a font, imports it, and applies its `className` where needed. This ensures the font is preloaded only when it's rendered:
app/fonts.ts
TypeScript
JavaScriptTypeScript
```
import { Inter, Roboto_Mono } from'next/font/google'
exportconstinter=Inter({
 subsets: ['latin'],
 display:'swap',
})
exportconstroboto_mono=Roboto_Mono({
 subsets: ['latin'],
 display:'swap',
})
```

app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { inter } from'./fonts'
exportdefaultfunctionLayout({ children }: { children:React.ReactNode }) {
return (
  <htmllang="en"className={inter.className}>
   <body>
    <div>{children}</div>
   </body>
  </html>
 )
}
```

app/page.tsx
TypeScript
JavaScriptTypeScript
```
import { roboto_mono } from'./fonts'
exportdefaultfunctionPage() {
return (
  <>
   <h1className={roboto_mono.className}>My page</h1>
  </>
 )
}
```

In the example above, `Inter` will be applied globally, and `Roboto Mono` can be imported and applied as needed.
Alternatively, you can create a CSS variable and use it with your preferred CSS solution:
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Inter, Roboto_Mono } from'next/font/google'
import styles from'./global.css'
constinter=Inter({
 subsets: ['latin'],
 variable:'--font-inter',
 display:'swap',
})
constroboto_mono=Roboto_Mono({
 subsets: ['latin'],
 variable:'--font-roboto-mono',
 display:'swap',
})
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en"className={`${inter.variable}${roboto_mono.variable}`}>
   <body>
    <h1>My App</h1>
    <div>{children}</div>
   </body>
  </html>
 )
}
```

app/global.css
```
html {
font-family:var(--font-inter);
}
h1 {
font-family:var(--font-roboto-mono);
}
```

In the example above, `Inter` will be applied globally, and any `<h1>` tags will be styled with `Roboto Mono`.
> **Recommendation** : Use multiple fonts conservatively since each new font is an additional resource the client has to download.
## Local Fonts
Import `next/font/local` and specify the `src` of your local font file. We recommend using variable fonts for the best performance and flexibility.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import localFont from'next/font/local'
// Font files can be colocated inside of `app`
constmyFont=localFont({
 src:'./my-font.woff2',
 display:'swap',
})
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en"className={myFont.className}>
   <body>{children}</body>
  </html>
 )
}
```

If you want to use multiple files for a single font family, `src` can be an array:
```
constroboto=localFont({
 src: [
  {
   path:'./Roboto-Regular.woff2',
   weight:'400',
   style:'normal',
  },
  {
   path:'./Roboto-Italic.woff2',
   weight:'400',
   style:'italic',
  },
  {
   path:'./Roboto-Bold.woff2',
   weight:'700',
   style:'normal',
  },
  {
   path:'./Roboto-BoldItalic.woff2',
   weight:'700',
   style:'italic',
  },
 ],
})
```

View the Font API Reference for more information.
## With Tailwind CSS
`next/font` can be used with Tailwind CSS through a CSS variable.
In the example below, we use the font `Inter` from `next/font/google` (you can use any font from Google or Local Fonts). Load your font with the `variable` option to define your CSS variable name and assign it to `inter`. Then, use `inter.variable` to add the CSS variable to your HTML document.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Inter, Roboto_Mono } from'next/font/google'
constinter=Inter({
 subsets: ['latin'],
 display:'swap',
 variable:'--font-inter',
})
constroboto_mono=Roboto_Mono({
 subsets: ['latin'],
 display:'swap',
 variable:'--font-roboto-mono',
})
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en"className={`${inter.variable}${roboto_mono.variable}`}>
   <body>{children}</body>
  </html>
 )
}
```

Finally, add the CSS variable to your Tailwind CSS config:
tailwind.config.js
```
/** @type{import('tailwindcss').Config} */
module.exports= {
 content: [
'./pages/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
'./app/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {
   fontFamily: {
    sans: ['var(--font-inter)'],
    mono: ['var(--font-roboto-mono)'],
   },
  },
 },
 plugins: [],
}
```

You can now use the `font-sans` and `font-mono` utility classes to apply the font to your elements.
## Preloading
When a font function is called on a page of your site, it is not globally available and preloaded on all routes. Rather, the font is only preloaded on the related routes based on the type of file where it is used:
  * If it's a unique page, it is preloaded on the unique route for that page.
  * If it's a layout, it is preloaded on all the routes wrapped by the layout.
  * If it's the root layout, it is preloaded on all routes.


## Reusing fonts
Every time you call the `localFont` or Google font function, that font is hosted as one instance in your application. Therefore, if you load the same font function in multiple files, multiple instances of the same font are hosted. In this situation, it is recommended to do the following:
  * Call the font loader function in one shared file
  * Export it as a constant
  * Import the constant in each file where you would like to use this font


## API Reference
Learn more about the next/font API.
### Font
Optimizing loading web fonts with the built-in `next/font` loaders.
Was this helpful?
supported.
Send
