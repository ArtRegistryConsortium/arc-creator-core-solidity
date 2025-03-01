Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationRoutingRoute Groups
# Route Groups
In the `app` directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a **Route Group** to prevent the folder from being included in the route's URL path.
This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.
Route groups are useful for:
  * Organizing routes into groups e.g. by site section, intent, or team.
  * Enabling nested layouts in the same route segment level: 
    * Creating multiple nested layouts in the same segment, including multiple root layouts
    * Adding a layout to a subset of routes in a common segment
  * Adding a loading skeleton to specific route in a common segment


## Convention
A route group can be created by wrapping a folder's name in parenthesis: `(folderName)`
## Examples
### Organize routes without affecting the URL path
To organize routes without affecting the URL, create a group to keep related routes together. The folders in parenthesis will be omitted from the URL (e.g. `(marketing)` or `(shop)`.
![Organizing Routes with Route Groups](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-organisation.png&w=3840&q=75)![Organizing Routes with Route Groups](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-organisation.png&w=3840&q=75)
Even though routes inside `(marketing)` and `(shop)` share the same URL hierarchy, you can create a different layout for each group by adding a `layout.js` file inside their folders.
![Route Groups with Multiple Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-multiple-layouts.png&w=3840&q=75)![Route Groups with Multiple Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-multiple-layouts.png&w=3840&q=75)
### Opting specific segments into a layout
To opt specific routes into a layout, create a new route group (e.g. `(shop)`) and move the routes that share the same layout into the group (e.g. `account` and `cart`). The routes outside of the group will not share the layout (e.g. `checkout`).
![Route Groups with Opt-in Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-opt-in-layouts.png&w=3840&q=75)![Route Groups with Opt-in Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-opt-in-layouts.png&w=3840&q=75)
### Opting for loading skeletons on a specific route
To apply a loading skeleton via a `loading.js` file to a specific route, create a new route group (e.g., `/(overview)`) and then move your `loading.tsx` inside that route group.
![Folder structure showing a loading.tsx and a page.tsx inside the route group](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-loading.png&w=3840&q=75)![Folder structure showing a loading.tsx and a page.tsx inside the route group](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-loading.png&w=3840&q=75)
Now, the `loading.tsx` file will only apply to your dashboard → overview page instead of all your dashboard pages without affecting the URL path structure.
### Creating multiple root layouts
To create multiple root layouts, remove the top-level `layout.js` file, and add a `layout.js` file inside each route group. This is useful for partitioning an application into sections that have a completely different UI or experience. The `<html>` and `<body>` tags need to be added to each root layout.
![Route Groups with Multiple Root Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Froute-group-multiple-root-layouts.png&w=3840&q=75)![Route Groups with Multiple Root Layouts](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-group-multiple-root-layouts.png&w=3840&q=75)
In the example above, both `(marketing)` and `(shop)` have their own root layout.
> **Good to know** :
>   * The naming of route groups has no special significance other than for organization. They do not affect the URL path.
>   * Routes that include a route group **should not** resolve to the same URL path as other routes. For example, since route groups don't affect URL structure, `(marketing)/about/page.js` and `(shop)/about/page.js` would both resolve to `/about` and cause an error.
>   * If you use multiple root layouts without a top-level `layout.js` file, your home `page.js` file should be defined in one of the route groups, For example: `app/(marketing)/page.js`.
>   * Navigating **across multiple root layouts** will cause a **full page load** (as opposed to a client-side navigation). For example, navigating from `/cart` that uses `app/(shop)/layout.js` to `/blog` that uses `app/(marketing)/layout.js` will cause a full page load. This **only** applies to multiple root layouts.
> 

Was this helpful?
supported.
Send
