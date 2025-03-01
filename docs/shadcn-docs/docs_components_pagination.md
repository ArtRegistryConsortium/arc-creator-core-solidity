Docs
Pagination
# Pagination
Pagination with page navigation, next and previous links.
PreviewCode
Style: 
Open in Copy
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add pagination

```

Copy
## Usage
```
import {
 Pagination,
 PaginationContent,
 PaginationEllipsis,
 PaginationItem,
 PaginationLink,
 PaginationNext,
 PaginationPrevious,
} from "@/components/ui/pagination"
```
Copy
```
<Pagination>
 <PaginationContent>
  <PaginationItem>
   <PaginationPrevious href="#" />
  </PaginationItem>
  <PaginationItem>
   <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem>
   <PaginationEllipsis />
  </PaginationItem>
  <PaginationItem>
   <PaginationNext href="#" />
  </PaginationItem>
 </PaginationContent>
</Pagination>
```
Copy
### Next.js
By default the `<PaginationLink />` component will render an `<a />` tag.
To use the Next.js `<Link />` component, make the following updates to `pagination.tsx`.
```
+ import Link from "next/link"
- type PaginationLinkProps = ... & React.ComponentProps<"a">
+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>
const PaginationLink = ({...props }: ) => (
 <PaginationItem>
-  <a>
+  <Link>
   // ...
-  </a>
+  </Link>
 </PaginationItem>
)

```
Copy
**Note:** We are making updates to the cli to automatically do this for you.
Navigation MenuPopover
On This Page
  * Installation
  * Usage
    * Next.js


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
