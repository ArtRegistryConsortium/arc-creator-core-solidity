Menu
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Using Pages Router
Features available in /pages
Using Latest Version
15.1.7
Building Your ApplicationData FetchingForms and Mutations
# Forms and Mutations
Forms enable you to create and update data in web applications. Next.js provides a powerful way to handle form submissions and data mutations using **API Routes**.
> **Good to know:**
>   * We will soon recommend incrementally adopting the App Router and using Server Actions for handling form submissions and data mutations. Server Actions allow you to define asynchronous server functions that can be called directly from your components, without needing to manually create an API Route.
>   * API Routes do not specify CORS headers, meaning they are same-origin only by default.
>   * Since API Routes run on the server, we're able to use sensitive values (like API keys) through Environment Variables without exposing them to the client. This is critical for the security of your application.
> 

## Examples
### Server-only form
With the Pages Router, you need to manually create API endpoints to handle securely mutating data on the server.
pages/api/submit.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
constdata=req.body
constid=awaitcreateItem(data)
res.status(200).json({ id })
}
```

Then, call the API Route from the client with an event handler:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import { FormEvent } from'react'
exportdefaultfunctionPage() {
asyncfunctiononSubmit(event:FormEvent<HTMLFormElement>) {
event.preventDefault()
constformData=newFormData(event.currentTarget)
constresponse=awaitfetch('/api/submit', {
   method:'POST',
   body: formData,
  })
// Handle response if necessary
constdata=awaitresponse.json()
// ...
 }
return (
  <formonSubmit={onSubmit}>
   <inputtype="text"name="name" />
   <buttontype="submit">Submit</button>
  </form>
 )
}
```

## Form validation
We recommend using HTML validation like `required` and `type="email"` for basic client-side form validation.
For more advanced server-side validation, you can use a schema validation library like zod to validate the form fields before mutating the data:
pages/api/submit.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
import { z } from'zod'
constschema=z.object({
// ...
})
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
constparsed=schema.parse(req.body)
// ...
}
```

### Error handling
You can use React state to show an error message when a form submission fails:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import React, { useState, FormEvent } from'react'
exportdefaultfunctionPage() {
const [isLoading,setIsLoading] =useState<boolean>(false)
const [error,setError] =useState<string|null>(null)
asyncfunctiononSubmit(event:FormEvent<HTMLFormElement>) {
event.preventDefault()
setIsLoading(true)
setError(null) // Clear previous errors when a new request starts
try {
constformData=newFormData(event.currentTarget)
constresponse=awaitfetch('/api/submit', {
    method:'POST',
    body: formData,
   })
if (!response.ok) {
thrownewError('Failed to submit the data. Please try again.')
   }
// Handle response if necessary
constdata=awaitresponse.json()
// ...
  } catch (error) {
// Capture the error message to display to the user
setError(error.message)
console.error(error)
  } finally {
setIsLoading(false)
  }
 }
return (
  <div>
   {error && <divstyle={{ color:'red' }}>{error}</div>}
   <formonSubmit={onSubmit}>
    <inputtype="text"name="name" />
    <buttontype="submit"disabled={isLoading}>
     {isLoading ?'Loading...':'Submit'}
    </button>
   </form>
  </div>
 )
}
```

## Displaying loading state
You can use React state to show a loading state when a form is submitting on the server:
pages/index.tsx
TypeScript
JavaScriptTypeScript
```
import React, { useState, FormEvent } from'react'
exportdefaultfunctionPage() {
const [isLoading,setIsLoading] =useState<boolean>(false)
asyncfunctiononSubmit(event:FormEvent<HTMLFormElement>) {
event.preventDefault()
setIsLoading(true) // Set loading to true when the request starts
try {
constformData=newFormData(event.currentTarget)
constresponse=awaitfetch('/api/submit', {
    method:'POST',
    body: formData,
   })
// Handle response if necessary
constdata=awaitresponse.json()
// ...
  } catch (error) {
// Handle error if necessary
console.error(error)
  } finally {
setIsLoading(false) // Set loading to false when the request completes
  }
 }
return (
  <formonSubmit={onSubmit}>
   <inputtype="text"name="name" />
   <buttontype="submit"disabled={isLoading}>
    {isLoading ?'Loading...':'Submit'}
   </button>
  </form>
 )
}
```

### Redirecting
If you would like to redirect the user to a different route after a mutation, you can `redirect` to any absolute or relative URL:
pages/api/submit.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
constid=awaitaddPost()
res.redirect(307,`/post/${id}`)
}
```

### Setting cookies
You can set cookies inside an API Route using the `setHeader` method on the response:
pages/api/cookie.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
res.setHeader('Set-Cookie','username=lee; Path=/; HttpOnly')
res.status(200).send('Cookie has been set.')
}
```

### Reading cookies
You can read cookies inside an API Route using the `cookies` request helper:
pages/api/cookie.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
constauth=req.cookies.authorization
// ...
}
```

### Deleting cookies
You can delete cookies inside an API Route using the `setHeader` method on the response:
pages/api/cookie.ts
TypeScript
JavaScriptTypeScript
```
importtype { NextApiRequest, NextApiResponse } from'next'
exportdefaultasyncfunctionhandler(
 req:NextApiRequest,
 res:NextApiResponse
) {
res.setHeader('Set-Cookie','username=; Path=/; HttpOnly; Max-Age=0')
res.status(200).send('Cookie has been deleted.')
}
```

Was this helpful?
supported.
Send
