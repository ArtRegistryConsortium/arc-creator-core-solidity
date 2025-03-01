# Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
DenyAccept all
Consent Settings
Privacy Policy
Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
Marketing
Off
Marketing cookies and services are used to deliver personalized advertisements, promotions, and offers. These technologies enable targeted advertising and marketing campaigns by collecting information about users' interests, preferences, and online activities. 
Analytics
Off
Analytics cookies and services are used for collecting statistical information about how visitors interact with a website. These technologies provide insights into website usage, visitor behavior, and site performance to understand and improve the site and enhance user experience.
Functional
Off
Functional cookies and services are used to offer enhanced and personalized functionalities. These technologies provide additional features and improved user experiences, such as remembering your language preferences, font sizes, region selections, and customized layouts. Opting out of these cookies may render certain services or functionality of the website unavailable.
Essential
On
Essential cookies and services are used to enable core website features, such as ensuring the security of the website. 
SaveDenyAccept all
Privacy Policy
Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
Building Your ApplicationData FetchingServer Actions and Mutations
# Server Actions and Mutations
Server Actions are **asynchronous functions** that are executed on the server. They can be called in Server and Client Components to handle form submissions and data mutations in Next.js applications.
> **🎥 Watch:** Learn more about mutations with Server Actions → YouTube (10 minutes).
## Convention
A Server Action can be defined with the React `"use server"` directive. You can place the directive at the top of an `async` function to mark the function as a Server Action, or at the top of a separate file to mark all exports of that file as Server Actions.
### Server Components
Server Components can use the inline function level or module level `"use server"` directive. To inline a Server Action, add `"use server"` to the top of the function body:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionPage() {
// Server Action
asyncfunctioncreate() {
'use server'
// Mutate data
 }
return'...'
}
```

### Client Components
To call a Server Action in a Client Component, create a new file and add the `"use server"` directive at the top of it. All exported functions within the file will be marked as Server Actions that can be reused in both Client and Server Components:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
exportasyncfunctioncreate() {}
```

app/button.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { create } from'./actions'
exportfunctionButton() {
return <buttononClick={() =>create()}>Create</button>
}
```

### Passing actions as props
You can also pass a Server Action to a Client Component as a prop:
```
<ClientComponentupdateItemAction={updateItem} />
```

app/client-component.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
exportdefaultfunctionClientComponent({
 updateItemAction,
}: {
updateItemAction: (formData:FormData) =>void
}) {
return <formaction={updateItemAction}>{/* ... */}</form>
}
```

Usually, the Next.js TypeScript plugin would flag `updateItemAction` in `client-component.tsx` since it is a function which generally can't be serialized across client-server boundaries. However, props named `action` or ending with `Action` are assumed to receive Server Actions. This is only a heuristic since the TypeScript plugin doesn't actually know if it receives a Server Action or an ordinary function. Runtime type-checking will still ensure you don't accidentally pass a function to a Client Component.
## Behavior
  * Server actions can be invoked using the `action` attribute in a `<form>` element: 
    * Server Components support progressive enhancement by default, meaning the form will be submitted even if JavaScript hasn't loaded yet or is disabled.
    * In Client Components, forms invoking Server Actions will queue submissions if JavaScript isn't loaded yet, prioritizing client hydration.
    * After hydration, the browser does not refresh on form submission.
  * Server Actions are not limited to `<form>` and can be invoked from event handlers, `useEffect`, third-party libraries, and other form elements like `<button>`.
  * Server Actions integrate with the Next.js caching and revalidation architecture. When an action is invoked, Next.js can return both the updated UI and new data in a single server roundtrip.
  * Behind the scenes, actions use the `POST` method, and only this HTTP method can invoke them.
  * The arguments and return value of Server Actions must be serializable by React. See the React docs for a list of serializable arguments and values.
  * Server Actions are functions. This means they can be reused anywhere in your application.
  * Server Actions inherit the runtime from the page or layout they are used on.
  * Server Actions inherit the Route Segment Config from the page or layout they are used on, including fields like `maxDuration`.


## Examples
### Forms
React extends the HTML `<form>` element to allow Server Actions to be invoked with the `action` prop.
When invoked in a form, the action automatically receives the `FormData` object. You don't need to use React `useState` to manage fields, instead, you can extract the data using the native `FormData` methods:
app/invoices/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionPage() {
asyncfunctioncreateInvoice(formData:FormData) {
'use server'
constrawFormData= {
   customerId:formData.get('customerId'),
   amount:formData.get('amount'),
   status:formData.get('status'),
  }
// mutate data
// revalidate cache
 }
return <formaction={createInvoice}>...</form>
}
```

> **Good to know:**
>   * Example: Form with Loading & Error States
>   * When working with forms that have many fields, you may want to consider using the `entries()` method with JavaScript's `Object.fromEntries()`. For example: `const rawFormData = Object.fromEntries(formData)`. One thing to note is that the `formData` will include additional `$ACTION_` properties.
>   * See React `<form>` documentation to learn more.
> 

### Passing additional arguments
You can pass additional arguments to a Server Action using the JavaScript `bind` method.
app/client-component.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { updateUser } from'./actions'
exportfunctionUserProfile({ userId }: { userId:string }) {
constupdateUserWithId=updateUser.bind(null, userId)
return (
  <formaction={updateUserWithId}>
   <inputtype="text"name="name" />
   <buttontype="submit">Update User Name</button>
  </form>
 )
}
```

The Server Action will receive the `userId` argument, in addition to the form data:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
exportasyncfunctionupdateUser(userId:string, formData:FormData) {}
```

> **Good to know** :
>   * An alternative is to pass arguments as hidden input fields in the form (e.g. `<input type="hidden" name="userId" value={userId} />`). However, the value will be part of the rendered HTML and will not be encoded.
>   * `.bind` works in both Server and Client Components. It also supports progressive enhancement.
> 

### Nested form elements
You can also invoke a Server Action in elements nested inside `<form>` such as `<button>`, `<input type="submit">`, and `<input type="image">`. These elements accept the `formAction` prop or event handlers.
This is useful in cases where you want to call multiple server actions within a form. For example, you can create a specific `<button>` element for saving a post draft in addition to publishing it. See the React `<form>` docs for more information.
### Programmatic form submission
You can trigger a form submission programmatically using the `requestSubmit()` method. For example, when the user submits a form using the `⌘` + `Enter` keyboard shortcut, you can listen for the `onKeyDown` event:
app/entry.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
exportfunctionEntry() {
consthandleKeyDown= (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
if (
   (e.ctrlKey ||e.metaKey) &&
   (e.key ==='Enter'||e.key ==='NumpadEnter')
  ) {
e.preventDefault()
e.currentTarget.form?.requestSubmit()
  }
 }
return (
  <div>
   <textareaname="entry"rows={20} requiredonKeyDown={handleKeyDown} />
  </div>
 )
}
```

This will trigger the submission of the nearest `<form>` ancestor, which will invoke the Server Action.
### Server-side form validation
You can use the HTML attributes like `required` and `type="email"` for basic client-side form validation.
For more advanced server-side validation, you can use a library like zod to validate the form fields before mutating the data:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { z } from'zod'
constschema=z.object({
 email:z.string({
  invalid_type_error:'Invalid Email',
 }),
})
exportdefaultasyncfunctioncreateUser(formData:FormData) {
constvalidatedFields=schema.safeParse({
  email:formData.get('email'),
 })
// Return early if the form data is invalid
if (!validatedFields.success) {
return {
   errors:validatedFields.error.flatten().fieldErrors,
  }
 }
// Mutate data
}
```

Once the fields have been validated on the server, you can return a serializable object in your action and use the React `useActionState` hook to show a message to the user.
  * By passing the action to `useActionState`, the action's function signature changes to receive a new `prevState` or `initialState` parameter as its first argument.
  * `useActionState` is a React hook and therefore must be used in a Client Component.


app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { redirect } from'next/navigation'
exportasyncfunctioncreateUser(prevState:any, formData:FormData) {
constres=awaitfetch('https://...')
constjson=awaitres.json()
if (!res.ok) {
return { message:'Please enter a valid email' }
 }
redirect('/dashboard')
}
```

Then, you can pass your action to the `useActionState` hook and use the returned `state` to display an error message.
app/ui/signup.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useActionState } from'react'
import { createUser } from'@/app/actions'
constinitialState= {
 message:'',
}
exportfunctionSignup() {
const [state,formAction,pending] =useActionState(createUser, initialState)
return (
  <formaction={formAction}>
   <labelhtmlFor="email">Email</label>
   <inputtype="text"id="email"name="email"required />
   {/* ... */}
   <paria-live="polite">{state?.message}</p>
   <buttondisabled={pending}>Sign up</button>
  </form>
 )
}
```

### Pending states
The `useActionState` hook exposes a `pending` boolean that can be used to show a loading indicator while the action is being executed.
Alternatively, you can use the `useFormStatus` hook to show a loading indicator while the action is being executed. When using this hook, you'll need to create a separate component to render the loading indicator. For example, to disable the button when the action is pending:
app/ui/button.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useFormStatus } from'react-dom'
exportfunctionSubmitButton() {
const { pending } =useFormStatus()
return (
  <buttondisabled={pending} type="submit">
   Sign Up
  </button>
 )
}
```

You can then nest the `SubmitButton` component inside the form:
app/ui/signup.tsx
TypeScript
JavaScriptTypeScript
```
import { SubmitButton } from'./button'
import { createUser } from'@/app/actions'
exportfunctionSignup() {
return (
  <formaction={createUser}>
   {/* Other form elements */}
   <SubmitButton />
  </form>
 )
}
```

> **Good to know:** In React 19, `useFormStatus` includes additional keys on the returned object, like data, method, and action. If you are not using React 19, only the `pending` key is available.
### Optimistic updates
You can use the React `useOptimistic` hook to optimistically update the UI before the Server Action finishes executing, rather than waiting for the response:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useOptimistic } from'react'
import { send } from'./actions'
typeMessage= {
 message:string
}
exportfunctionThread({ messages }: { messages:Message[] }) {
const [optimisticMessages,addOptimisticMessage] = useOptimistic<
  Message[],
  string
>(messages, (state, newMessage) => [...state, { message: newMessage }])
constformAction=async (formData:FormData) => {
constmessage=formData.get('message') asstring
addOptimisticMessage(message)
awaitsend(message)
 }
return (
  <div>
   {optimisticMessages.map((m, i) => (
    <divkey={i}>{m.message}</div>
   ))}
   <formaction={formAction}>
    <inputtype="text"name="message" />
    <buttontype="submit">Send</button>
   </form>
  </div>
 )
}
```

### Event handlers
While it's common to use Server Actions within `<form>` elements, they can also be invoked with event handlers such as `onClick`. For example, to increment a like count:
app/like-button.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { incrementLike } from'./actions'
import { useState } from'react'
exportdefaultfunctionLikeButton({ initialLikes }: { initialLikes:number }) {
const [likes,setLikes] =useState(initialLikes)
return (
  <>
   <p>Total Likes: {likes}</p>
   <button
onClick={async () => {
constupdatedLikes=awaitincrementLike()
setLikes(updatedLikes)
    }}
   >
    Like
   </button>
  </>
 )
}
```

You can also add event handlers to form elements, for example, to save a form field `onChange`:
app/ui/edit-post.tsx
```
'use client'
import { publishPost, saveDraft } from'./actions'
exportdefaultfunctionEditPost() {
return (
  <formaction={publishPost}>
   <textarea
name="content"
onChange={async (e) => {
awaitsaveDraft(e.target.value)
    }}
   />
   <buttontype="submit">Publish</button>
  </form>
 )
}
```

For cases like this, where multiple events might be fired in quick succession, we recommend **debouncing** to prevent unnecessary Server Action invocations.
### `useEffect`
You can use the React `useEffect` hook to invoke a Server Action when the component mounts or a dependency changes. This is useful for mutations that depend on global events or need to be triggered automatically. For example, `onKeyDown` for app shortcuts, an intersection observer hook for infinite scrolling, or when the component mounts to update a view count:
app/view-count.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { incrementViews } from'./actions'
import { useState, useEffect } from'react'
exportdefaultfunctionViewCount({ initialViews }: { initialViews:number }) {
const [views,setViews] =useState(initialViews)
useEffect(() => {
constupdateViews=async () => {
constupdatedViews=awaitincrementViews()
setViews(updatedViews)
  }
updateViews()
 }, [])
return <p>Total Views: {views}</p>
}
```

Remember to consider the behavior and caveats of `useEffect`.
### Error Handling
When an error is thrown, it'll be caught by the nearest `error.js` or `<Suspense>` boundary on the client. See Error Handling for more information.
> **Good to know:**
>   * Aside from throwing the error, you can also return an object to be handled by `useActionState`. See Server-side validation and error handling.
> 

### Revalidating data
You can revalidate the Next.js Cache inside your Server Actions with the `revalidatePath` API:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { revalidatePath } from'next/cache'
exportasyncfunctioncreatePost() {
try {
// ...
 } catch (error) {
// ...
 }
revalidatePath('/posts')
}
```

Or invalidate a specific data fetch with a cache tag using `revalidateTag`:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { revalidateTag } from'next/cache'
exportasyncfunctioncreatePost() {
try {
// ...
 } catch (error) {
// ...
 }
revalidateTag('posts')
}
```

### Redirecting
If you would like to redirect the user to a different route after the completion of a Server Action, you can use `redirect` API. `redirect` needs to be called outside of the `try/catch` block:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { redirect } from'next/navigation'
import { revalidateTag } from'next/cache'
exportasyncfunctioncreatePost(id:string) {
try {
// ...
 } catch (error) {
// ...
 }
revalidateTag('posts') // Update cached posts
redirect(`/post/${id}`) // Navigate to the new post page
}
```

### Cookies
You can `get`, `set`, and `delete` cookies inside a Server Action using the `cookies` API:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { cookies } from'next/headers'
exportasyncfunctionexampleAction() {
constcookieStore=awaitcookies()
// Get cookie
cookieStore.get('name')?.value
// Set cookie
cookieStore.set('name','Delba')
// Delete cookie
cookieStore.delete('name')
}
```

See additional examples for deleting cookies from Server Actions.
## Security
By default, when a Server Action is created and exported, it creates a public HTTP endpoint and should be treated with the same security assumptions and authorization checks. This means, even if a Server Action or utility function is not imported elsewhere in your code, it’s still publicly accessible.
To improve security, Next.js has the following built-in features:
  * **Secure action IDs:** Next.js creates encrypted, non-deterministic IDs to allow the client to reference and call the Server Action. These IDs are periodically recalculated between builds for enhanced security.
  * **Dead code elimination:** Unused Server Actions (referenced by their IDs) are removed from client bundle to avoid public access by third-party.


> **Good to know** :
> The IDs are created during compilation and are cached for a maximum of 14 days. They will be regenerated when a new build is initiated or when the build cache is invalidated. This security improvement reduces the risk in cases where an authentication layer is missing. However, you should still treat Server Actions like public HTTP endpoints.
```
// app/actions.js
'use server'
// This action **is** used in our application, so Next.js
// will create a secure ID to allow the client to reference
// and call the Server Action.
exportasyncfunctionupdateUserAction(formData) {}
// This action **is not** used in our application, so Next.js
// will automatically remove this code during `next build`
// and will not create a public endpoint.
exportasyncfunctiondeleteUserAction(formData) {}
```

### Authentication and authorization
You should ensure that the user is authorized to perform the action. For example:
app/actions.ts
```
'use server'
import { auth } from'./lib'
exportfunctionaddItem() {
const { user } =auth()
if (!user) {
thrownewError('You must be signed in to perform this action')
 }
// ...
}
```

### Closures and encryption
Defining a Server Action inside a component creates a closure where the action has access to the outer function's scope. For example, the `publish` action has access to the `publishVersion` variable:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultasyncfunctionPage() {
constpublishVersion=awaitgetLatestVersion();
asyncfunctionpublish() {
"use server";
if (publishVersion !==awaitgetLatestVersion()) {
thrownewError('The version has changed since pressing publish');
  }
...
 }
return (
  <form>
   <buttonformAction={publish}>Publish</button>
  </form>
 );
}
```

Closures are useful when you need to capture a _snapshot_ of data (e.g. `publishVersion`) at the time of rendering so that it can be used later when the action is invoked.
However, for this to happen, the captured variables are sent to the client and back to the server when the action is invoked. To prevent sensitive data from being exposed to the client, Next.js automatically encrypts the closed-over variables. A new private key is generated for each action every time a Next.js application is built. This means actions can only be invoked for a specific build.
> **Good to know:** We don't recommend relying on encryption alone to prevent sensitive values from being exposed on the client. Instead, you should use the React taint APIs to proactively prevent specific data from being sent to the client.
### Overwriting encryption keys (advanced)
When self-hosting your Next.js application across multiple servers, each server instance may end up with a different encryption key, leading to potential inconsistencies.
To mitigate this, you can overwrite the encryption key using the `process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` environment variable. Specifying this variable ensures that your encryption keys are persistent across builds, and all server instances use the same key. This variable **must** be AES-GCM encrypted.
This is an advanced use case where consistent encryption behavior across multiple deployments is critical for your application. You should consider standard security practices such key rotation and signing.
> **Good to know:** Next.js applications deployed to Vercel automatically handle this.
### Allowed origins (advanced)
Since Server Actions can be invoked in a `<form>` element, this opens them up to CSRF attacks.
Behind the scenes, Server Actions use the `POST` method, and only this HTTP method is allowed to invoke them. This prevents most CSRF vulnerabilities in modern browsers, particularly with SameSite cookies being the default.
As an additional protection, Server Actions in Next.js also compare the Origin header to the Host header (or `X-Forwarded-Host`). If these don't match, the request will be aborted. In other words, Server Actions can only be invoked on the same host as the page that hosts it.
For large applications that use reverse proxies or multi-layered backend architectures (where the server API differs from the production domain), it's recommended to use the configuration option `serverActions.allowedOrigins` option to specify a list of safe origins. The option accepts an array of strings.
next.config.js
```
/** @type{import('next').NextConfig} */
module.exports= {
 experimental: {
  serverActions: {
   allowedOrigins: ['my-proxy.com','*.my-proxy.com'],
  },
 },
}
```

Learn more about Security and Server Actions.
## Additional resources
For more information, check out the following React docs:
  * Server Actions
  * `"use server"`
  * `<form>`
  * `useFormStatus`
  * `useActionState`
  * `useOptimistic`


## Next Steps
Learn how to configure Server Actions in Next.js
### serverActions
Configure Server Actions behavior in your Next.js application.
Was this helpful?
supported.
Send
