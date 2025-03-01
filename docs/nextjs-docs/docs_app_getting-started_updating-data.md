Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
App RouterGetting StartedUpdating Data
# How to update data
You can update data in Next.js using React's Server Functions. This page will go through how you can create and invoke Server Functions.
## Creating Server Functions
A Server Function can be defined by using the `use server` directive. You can place the directive at the top of an **asynchronous** function to mark the function as a Server Function, or at the top of a separate file to mark all exports of that file. We recommend using a separate file in most instances.
app/lib/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
exportasyncfunctioncreatePost(formData:FormData) {}
exportasyncfunctiondeletePost(formData:FormData) {}
```

### Server Components
Server Functions can be inlined in Server Components by adding the `"use server"` directive to the top of the function body:
app/page.tsx
TypeScript
JavaScriptTypeScript
```
exportdefaultfunctionPage() {
// Server Action
asyncfunctioncreatePost() {
'use server'
// Update data
// ...
return <></>
}
```

### Client Components
It's not possible to define Server Functions in Client Components. However, you can invoke them in Client Components by importing them from a file that has the `"use server"` directive at the top of it:
app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
exportasyncfunctioncreatePost() {}
```

app/ui/button.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { createPost } from'@/app/actions'
exportfunctionButton() {
return <buttonformAction={createPost}>Create</button>
}
```

## Invoking Server Functions
There are two main ways you can invoke a Server Function:
  1. Forms in Server and Client Components
  2. Event Handlers in Client Components


### Forms
React extends the HTML `<form>` element to allow Server Function to be invoked with the HTML `action` prop.
When invoked in a form, the function automatically receives the `FormData` object. You can extract the data using the native `FormData` methods:
app/ui/form.tsx
TypeScript
JavaScriptTypeScript
```
import { createPost } from'@/app/actions'
exportfunctionForm() {
return (
  <formaction={createPost}>
   <inputtype="text"name="title" />
   <inputtype="text"name="content" />
   <buttontype="submit">Create</button>
  </form>
 )
}
```

app/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
exportasyncfunctioncreatePost(formData:FormData) {
consttitle=formData.get('title')
constcontent=formData.get('content')
// Update data
// Revalidate cache
}
```

> **Good to know:** When passed to the `action` prop, Server Functions are also known as _Server Actions_.
### Event Handlers
You can invoke a Server Function in a Client Component by using event handlers such as `onClick`.
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

### Showing a pending state
While executing a Server Function, you can show a loading indicator with React's `useActionState` hook. This hook returns a `pending` boolean:
app/ui/button.tsx
TypeScript
JavaScriptTypeScript
```
'use client'
import { useActionState } from'react'
import { createPost } from'@/app/actions'
import { LoadingSpinner } from'@/app/ui/loading-spinner'
exportfunctionButton() {
const [state,action,pending] =useActionState(createPost,false)
return (
  <buttononClick={async () =>action()}>
   {pending ? <LoadingSpinner /> :'Create Post'}
  </button>
 )
}
```

### Revalidating the cache
After performing an update, you can revalidate the Next.js cache and show the updated data by calling `revalidatePath` or `revalidateTag` within the Server Function:
app/lib/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { revalidatePath } from'next/cache'
exportasyncfunctioncreatePost(formData:FormData) {
// Update data
// ...
revalidatePath('/posts')
}
```

### Redirecting
You may want to redirect the user to a different page after performing an update. You can do this by calling `redirect` within the Server Function:
app/lib/actions.ts
TypeScript
JavaScriptTypeScript
```
'use server'
import { redirect } from'next/navigation'
exportasyncfunctioncreatePost(formData:FormData) {
// Update data
// ...
redirect('/posts')
}
```

## API Reference
Learn more about the features mentioned in this page by reading the API Reference.
### revalidatePath
API Reference for the revalidatePath function.
### revalidateTag
API Reference for the revalidateTag function.
### redirect
API Reference for the redirect function.
Was this helpful?
supported.
Send
