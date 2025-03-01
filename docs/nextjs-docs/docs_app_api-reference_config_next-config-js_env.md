Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Configurationnext.config.jsenv
# env
> Since the release of Next.js 9.4 we now have a more intuitive and ergonomic experience for adding environment variables. Give it a try!
> **Good to know** : environment variables specified in this way will **always** be included in the JavaScript bundle, prefixing the environment variable name with `NEXT_PUBLIC_` only has an effect when specifying them through the environment or .env files.
To add environment variables to the JavaScript bundle, open `next.config.js` and add the `env` config:
next.config.js
```
module.exports= {
 env: {
  customKey:'my-value',
 },
}
```

Now you can access `process.env.customKey` in your code. For example:
```
functionPage() {
return <h1>The value of customKey is: {process.env.customKey}</h1>
}
exportdefault Page
```

Next.js will replace `process.env.customKey` with `'my-value'` at build time. Trying to destructure `process.env` variables won't work due to the nature of webpack DefinePlugin.
For example, the following line:
```
return <h1>The value of customKey is: {process.env.customKey}</h1>
```

Will end up being:
```
return <h1>The value of customKey is: {'my-value'}</h1>
```

Was this helpful?
supported.
Send
