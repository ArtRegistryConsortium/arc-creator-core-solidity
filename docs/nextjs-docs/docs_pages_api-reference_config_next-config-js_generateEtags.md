Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Configurationnext.config.js OptionsgenerateEtags
# generateEtags
Next.js will generate etags for every page by default. You may want to disable etag generation for HTML pages depending on your cache strategy.
Open `next.config.js` and disable the `generateEtags` option:
next.config.js
```
module.exports= {
 generateEtags:false,
}
```

Was this helpful?
supported.
Send
