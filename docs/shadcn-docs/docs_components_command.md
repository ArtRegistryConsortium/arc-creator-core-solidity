Docs
Command
# Command
Fast, composable, unstyled command menu for React.
Docs
PreviewCode
Style: 
Open in Copy
No results found.
Suggestions
Calendar
Search Emoji
Calculator
Settings
Profile⌘P
Billing⌘B
Settings⌘S
## About
The `<Command />` component uses the `cmdk` component by pacocoursey.
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add command

```

Copy
## Usage
```
import {
 Command,
 CommandDialog,
 CommandEmpty,
 CommandGroup,
 CommandInput,
 CommandItem,
 CommandList,
 CommandSeparator,
 CommandShortcut,
} from "@/components/ui/command"
```
Copy
```
<Command>
 <CommandInput placeholder="Type a command or search..." />
 <CommandList>
  <CommandEmpty>No results found.</CommandEmpty>
  <CommandGroup heading="Suggestions">
   <CommandItem>Calendar</CommandItem>
   <CommandItem>Search Emoji</CommandItem>
   <CommandItem>Calculator</CommandItem>
  </CommandGroup>
  <CommandSeparator />
  <CommandGroup heading="Settings">
   <CommandItem>Profile</CommandItem>
   <CommandItem>Billing</CommandItem>
   <CommandItem>Settings</CommandItem>
  </CommandGroup>
 </CommandList>
</Command>
```
Copy
## Examples
### Dialog
PreviewCode
Style: 
Open in Copy
Press `⌘J`
To show the command menu in a dialog, use the `<CommandDialog />` component.
```
export function CommandMenu() {
 const [open, setOpen] = React.useState(false)
 React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
   if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    setOpen((open) => !open)
   }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
 }, [])
 return (
  <CommandDialog open={open} onOpenChange={setOpen}>
   <CommandInput placeholder="Type a command or search..." />
   <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
     <CommandItem>Calendar</CommandItem>
     <CommandItem>Search Emoji</CommandItem>
     <CommandItem>Calculator</CommandItem>
    </CommandGroup>
   </CommandList>
  </CommandDialog>
 )
}
```
Copy
### Combobox
You can use the `<Command />` component as a combobox. See the Combobox page for more information.
## Changelog
### 2024-10-25 Classes for icons
Added `gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0` to the `<CommandItem />` to automatically style icon inside.
Add the following classes to the `cva` call in your `command.tsx` file.
command.tsx
```
const CommandItem = React.forwardRef<
 React.ElementRef<typeof CommandPrimitive.Item>,
 React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
 <CommandPrimitive.Item
  ref={ref}
  className={cn(
   "... gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
   className
  )}
  {...props}
 />
))
```
Copy
ComboboxContext Menu
On This Page
  * About
  * Installation
  * Usage
  * Examples
    * Dialog
    * Combobox
  * Changelog
    * 2024-10-25 Classes for icons


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
