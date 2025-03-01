Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationOptimizingStatic Assets
# Static Assets in `public`
Next.js can serve static files, like images, under a folder called `public` in the root directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).
For example, the file `public/avatars/me.png` can be viewed by visiting the `/avatars/me.png` path. The code to display that image might look like:
avatar.js
```
import Image from'next/image'
exportfunctionAvatar({ id, alt }) {
return <Imagesrc={`/avatars/${id}.png`} alt={alt} width="64"height="64" />
}
exportfunctionAvatarOfMe() {
return <Avatarid="me"alt="A portrait of me" />
}
```

## Caching
Next.js cannot safely cache assets in the `public` folder because they may change. The default caching headers applied are:
```
Cache-Control: public, max-age=0
```

## Robots, Favicons, and others
For static metadata files, such as `robots.txt`, `favicon.ico`, etc, you should use special metadata files inside the `app` folder.
> Good to know:
>   * The directory must be named `public`. The name cannot be changed and it's the only directory used to serve static assets.
>   * Only assets that are in the `public` directory at build time will be served by Next.js. Files added at request time won't be available. We recommend using a third-party service like Vercel Blob for persistent file storage.
> 

Was this helpful?
supported.
Send
