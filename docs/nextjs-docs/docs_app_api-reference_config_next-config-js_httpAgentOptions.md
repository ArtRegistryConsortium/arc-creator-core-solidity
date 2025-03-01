Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jshttpAgentOptions
# httpAgentOptions
In Node.js versions prior to 18, Next.js automatically polyfills `fetch()` with undici and enables HTTP Keep-Alive by default.
To disable HTTP Keep-Alive for all `fetch()` calls on the server-side, open `next.config.js` and add the `httpAgentOptions` config:
next.config.js
```
module.exports= {
 httpAgentOptions: {
  keepAlive:false,
 },
}
```

Was this helpful?
supported.
Send
