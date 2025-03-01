Docs
registry.json
# registry.json
Schema for running your own component registry.
The `registry.json` schema is used to define your custom component registry.
registry.json
```
{
 "$schema": "https://ui.shadcn.com/schema/registry.json",
 "name": "shadcn",
 "homepage": "https://ui.shadcn.com",
 "items": [
  {
   "name": "hello-world",
   "type": "registry:block",
   "title": "Hello World",
   "description": "A simple hello world component.",
   "files": [
    {
     "path": "registry/hello-world/hello-world.tsx",
     "type": "registry:component"
    }
   ]
  }
 ]
}
```
Copy
## Definitions
You can see the JSON Schema for `registry.json` here.
### $schema
The `$schema` property is used to specify the schema for the `registry.json` file.
registry.json
```
{
 "$schema": "https://ui.shadcn.com/schema/registry.json"
}
```
Copy
### name
The `name` property is used to specify the name of your registry. This is used for data attributes and other metadata.
registry.json
```
{
 "name": "acme"
}
```
Copy
### homepage
The homepage of your registry. This is used for data attributes and other metadata.
registry.json
```
{
 "homepage": "https://acme.com"
}
```
Copy
### items
The `items` in your registry. Each item must implement the registry-item schema specification.
registry.json
```
{
 "items": [
  {
   "name": "hello-world",
   "type": "registry:block",
   "title": "Hello World",
   "description": "A simple hello world component.",
   "files": [
    {
     "path": "registry/hello-world/hello-world.tsx",
     "type": "registry:component"
    }
   ]
  }
 ]
}
```
Copy
See the registry-item schema documentation for more information.
FAQregistry-item.json
On This Page
  * Definitions
    * $schema
    * name
    * homepage
    * items


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
