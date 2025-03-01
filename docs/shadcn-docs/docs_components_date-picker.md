Docs
Date Picker
# Date Picker
A date picker component with range and presets.
PreviewCode
Style: 
Open in Copy
Pick a date
## Installation
The Date Picker is built using a composition of the `<Popover />` and the `<Calendar />` components.
See installation instructions for the Popover and the Calendar components.
## Usage
```
"use client"
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from "@/components/ui/popover"
export function DatePickerDemo() {
 const [date, setDate] = React.useState<Date>()
 return (
  <Popover>
   <PopoverTrigger asChild>
    <Button
     variant={"outline"}
     className={cn(
      "w-[280px] justify-start text-left font-normal",
      !date && "text-muted-foreground"
     )}
    >
     <CalendarIcon className="mr-2 h-4 w-4" />
     {date ? format(date, "PPP") : <span>Pick a date</span>}
    </Button>
   </PopoverTrigger>
   <PopoverContent className="w-auto p-0">
    <Calendar
     mode="single"
     selected={date}
     onSelect={setDate}
     initialFocus
    />
   </PopoverContent>
  </Popover>
 )
}
```
Copy
See the React DayPicker documentation for more information.
## Examples
### Date Picker
PreviewCode
Style: 
Open in Copy
Pick a date
### Date Range Picker
PreviewCode
Style: 
Open in Copy
Jan 20, 2022 - Feb 09, 2022
### With Presets
PreviewCode
Style: 
Open in Copy
Pick a date
### Form
PreviewCode
Style: 
Copy
Date of birthPick a date
Your date of birth is used to calculate your age.
Submit
Data TableDialog
On This Page
  * Installation
  * Usage
  * Examples
    * Date Picker
    * Date Range Picker
    * With Presets
    * Form


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
