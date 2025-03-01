Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationConfiguringsrc Directory
# src Directory
As an alternative to having the special Next.js `app` or `pages` directories in the root of your project, Next.js also supports the common pattern of placing application code under the `src` directory.
This separates application code from project configuration files which mostly live in the root of a project, which is preferred by some individuals and teams.
To use the `src` directory, move the `app` Router folder or `pages` Router folder to `src/app` or `src/pages` respectively.
![An example folder structure with the `src` directory](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fproject-organization-src-directory.png&w=3840&q=75)![An example folder structure with the `src` directory](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-src-directory.png&w=3840&q=75)
> **Good to know** :
>   * The `/public` directory should remain in the root of your project.
>   * Config files like `package.json`, `next.config.js` and `tsconfig.json` should remain in the root of your project.
>   * `.env.*` files should remain in the root of your project.
>   * `src/app` or `src/pages` will be ignored if `app` or `pages` are present in the root directory.
>   * If you're using `src`, you'll probably also move other application folders such as `/components` or `/lib`.
>   * If you're using Middleware, ensure it is placed inside the `src` directory.
>   * If you're using Tailwind CSS, you'll need to add the `/src` prefix to the `tailwind.config.js` file in the content section.
>   * If you are using TypeScript paths for imports such as `@/*`, you should update the `paths` object in `tsconfig.json` to include `src/`.
> 

Was this helpful?
supported.
Send
