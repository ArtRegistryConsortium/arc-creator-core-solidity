Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Configurationnext.config.js OptionspageExtensions
# pageExtensions
You can extend the default Page extensions (`.tsx`, `.ts`, `.jsx`, `.js`) used by Next.js. Inside `next.config.js`, add the `pageExtensions` config:
next.config.js
```
module.exports= {
 pageExtensions: ['mdx','md','jsx','js','tsx','ts'],
}
```

Changing these values affects _all_ Next.js pages, including the following:
  * `middleware.js`
  * `instrumentation.js`
  * `pages/_document.js`
  * `pages/_app.js`
  * `pages/api/`


For example, if you reconfigure `.ts` page extensions to `.page.ts`, you would need to rename pages like `middleware.page.ts`, `instrumentation.page.ts`, `_app.page.ts`.
## Including non-page files in the `pages` directory
You can colocate test files or other files used by components in the `pages` directory. Inside `next.config.js`, add the `pageExtensions` config:
next.config.js
```
module.exports= {
 pageExtensions: ['page.tsx','page.ts','page.jsx','page.js'],
}
```

Then, rename your pages to have a file extension that includes `.page` (e.g. rename `MyPage.tsx` to `MyPage.page.tsx`). Ensure you rename _all_ Next.js pages, including the files mentioned above.
Was this helpful?
supported.
Send
