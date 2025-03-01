Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
App RouterGetting StartedImages and Fonts
# How to optimize images and fonts
Next.js comes with automatic image and font optimization for better performance and user experience. This page will guide you through how to start using them.
## Handling static assets
You can store static files, like images and fonts, under a folder called `public` in the root directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).
![Folder structure showing app and public folders](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fpublic-folder.png&w=3840&q=75)![Folder structure showing app and public folders](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fpublic-folder.png&w=3840&q=75)
## Optimizing images
The Next.js `<Image>` component extends the HTML `<img>` element to provide:
  * **Size optimization:** Automatically serving correctly sized images for each device, using modern image formats like WebP.
  * **Visual stability:** Preventing layout shift automatically when images are loading.
  * **Faster page loads:** Only loading images when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
  * **Asset flexibility:** Resizing images on-demand, even images stored on remote servers.


To start using `<Image>`, import it from `next/image` and render it within your component.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import Image from'next/image'
exportdefaultfunctionPage() {
return <Imagesrc=""alt="" />
}
```

The `src` property can be a local or remote image.
### Local images
To use a local image, `import` your `.jpg`, `.png`, or `.webp` image files from your `public` folder.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import Image from'next/image'
import profilePic from'./me.png'
exportdefaultfunctionPage() {
return (
  <Image
src={profilePic}
alt="Picture of the author"
// width={500} automatically provided
// height={500} automatically provided
// blurDataURL="data:..." automatically provided
// placeholder="blur" // Optional blur-up while loading
  />
 )
}
```

Next.js will automatically determine the intrinsic `width` and `height` of your image based on the imported file. These values are used to determine the image ratio and prevent Cumulative Layout Shift while your image is loading.
### Remote images
To use a remote image, you can provide a URL string for the `src` property.
app/page.tsx
TypeScript
JavaScriptTypeScript
```
import Image from'next/image'
exportdefaultfunctionPage() {
return (
  <Image
src="https://s3.amazonaws.com/my-bucket/profile.png"
alt="Picture of the author"
width={500}
height={500}
  />
 )
}
```

Since Next.js does not have access to remote files during the build process, you'll need to provide the `width`, `height` and optional `blurDataURL` props manually. The `width` and `height` attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in.
Then, to safely allow images from remote servers, you need to define a list of supported URL patterns in `next.config.js`. Be as specific as possible to prevent malicious usage. For example, the following configuration will only allow images from a specific AWS S3 bucket:
next.config.ts
TypeScript
JavaScriptTypeScript
```
import { NextConfig } from'next'
constconfig:NextConfig= {
 images: {
  remotePatterns: [
   {
    protocol:'https',
    hostname:'s3.amazonaws.com',
    port:'',
    pathname:'/my-bucket/**',
    search:'',
   },
  ],
 },
}
exportdefault config
```

## Optimizing fonts
The `next/font` module automatically optimizes your fonts and removes external network requests for improved privacy and performance.
It includes **built-in automatic self-hosting** for _any_ font file. This means you can optimally load web fonts with no layout shift.
To start using `next/font`, import it from `next/font/local` or `next/font/google`, call it as a function with the appropriate options, and set the `className` of the element you want to apply the font to. For example:
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Geist } from'next/font/google'
constgeist=Geist({
 subsets: ['latin'],
})
exportdefaultfunctionLayout({ children }: { children:React.ReactNode }) {
return (
  <htmllang="en"className={geist.className}>
   <body>{children}</body>
  </html>
 )
}
```

### Google fonts
You can automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment, meaning no requests are sent to Google by the browser when the user visits your site.
To start using a Google Font, import your chosen font from `next/font/google`:
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Geist } from'next/font/google'
constgeist=Geist({
 subsets: ['latin'],
})
exportdefaultfunctionRootLayout({
 children,
}: {
 children:React.ReactNode
}) {
return (
  <htmllang="en"className={geist.className}>
   <body>{children}</body>
  </html>
 )
}
```

We recommend using variable fonts for the best performance and flexibility. But if you can't use a variable font, you will **need to specify a weight** :
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import { Roboto } from'next/font/google'
constroboto=Roboto({
 weight:'400',
 subsets: ['latin'],
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

### Local fonts
To use a local font, import your font from `next/font/local` and specify the `src` of your local font file in the `public` folder.
app/layout.tsx
TypeScript
JavaScriptTypeScript
```
import localFont from'next/font/local'
constmyFont=localFont({
 src:'./my-font.woff2',
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

## API Reference
Learn more about the features mentioned in this page by reading the API Reference.
### Font
Optimizing loading web fonts with the built-in `next/font` loaders.
### Image
Optimize Images in your Next.js Application using the built-in `next/image` Component.
Was this helpful?
supported.
Send
