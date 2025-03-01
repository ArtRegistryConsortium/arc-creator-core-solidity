Tailwind CSSAn update on Tailwind v4
# Building Blocks for the Web
Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.
Browse BlocksAdd a block
FeaturedSidebarAuthenticationLogin
PreviewCode
A sidebar that collapses to icons.
Open in New Tab
npx shadcn add sidebar-07
Open in 
![sidebar-07](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Fsidebar-07-light.png&w=3840&q=75)![sidebar-07](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Fsidebar-07-dark.png&w=3840&q=75)
Files
  * app
    * dashboard
      * page.tsx
  * components
    * app-sidebar.tsx
    * nav-main.tsx
    * nav-projects.tsx
    * nav-user.tsx
    * team-switcher.tsx


app/dashboard/page.tsx
```
import { AppSidebar } from "@/components/app-sidebar"
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
 SidebarInset,
 SidebarProvider,
 SidebarTrigger,
} from "@/components/ui/sidebar"
export default function Page() {
 return (
  <SidebarProvider>
   <AppSidebar />
   <SidebarInset>
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
     <div className="flex items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
       <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
         <BreadcrumbLink href="#">
          Building Your Application
         </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
         <BreadcrumbPage>Data Fetching</BreadcrumbPage>
        </BreadcrumbItem>
       </BreadcrumbList>
      </Breadcrumb>
     </div>
    </header>
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
     </div>
     <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
   </SidebarInset>
  </SidebarProvider>
 )
}

```

PreviewCode
A sidebar with submenus.
Open in New Tab
npx shadcn add sidebar-03
Open in 
![sidebar-03](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Fsidebar-03-light.png&w=3840&q=75)![sidebar-03](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Fsidebar-03-dark.png&w=3840&q=75)
Files
  * app
    * dashboard
      * page.tsx
  * components
    * app-sidebar.tsx


app/dashboard/page.tsx
```
import { AppSidebar } from "@/components/app-sidebar"
import {
 Breadcrumb,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
 SidebarInset,
 SidebarProvider,
 SidebarTrigger,
} from "@/components/ui/sidebar"
export default function Page() {
 return (
  <SidebarProvider>
   <AppSidebar />
   <SidebarInset>
    <header className="flex h-16 shrink-0 items-center gap-2 border-b">
     <div className="flex items-center gap-2 px-3">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
       <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
         <BreadcrumbLink href="#">
          Building Your Application
         </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
         <BreadcrumbPage>Data Fetching</BreadcrumbPage>
        </BreadcrumbItem>
       </BreadcrumbList>
      </Breadcrumb>
     </div>
    </header>
    <div className="flex flex-1 flex-col gap-4 p-4">
     <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
      <div className="aspect-video rounded-xl bg-muted/50" />
     </div>
     <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
   </SidebarInset>
  </SidebarProvider>
 )
}

```

PreviewCode
A login page with a muted background color.
Open in New Tab
npx shadcn add login-03
Open in 
![login-03](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Flogin-03-light.png&w=3840&q=75)![login-03](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Flogin-03-dark.png&w=3840&q=75)
Files
  * app
    * login
      * page.tsx
  * components
    * login-form.tsx


app/login/page.tsx
```
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
export default function LoginPage() {
 return (
  <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
   <div className="flex w-full max-w-sm flex-col gap-6">
    <a href="#" className="flex items-center gap-2 self-center font-medium">
     <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
      <GalleryVerticalEnd className="size-4" />
     </div>
     Acme Inc.
    </a>
    <LoginForm />
   </div>
  </div>
 )
}

```

PreviewCode
A login page with form and image.
Open in New Tab
npx shadcn add login-04
Open in 
![login-04](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Flogin-04-light.png&w=3840&q=75)![login-04](https://ui.shadcn.com/_next/image?url=%2Fr%2Fstyles%2Fnew-york%2Flogin-04-dark.png&w=3840&q=75)
Files
  * app
    * login
      * page.tsx
  * components
    * login-form.tsx


app/login/page.tsx
```
import { LoginForm } from "@/components/login-form"
export default function LoginPage() {
 return (
  <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
   <div className="w-full max-w-sm md:max-w-3xl">
    <LoginForm />
   </div>
  </div>
 )
}

```

Browse all blocks
