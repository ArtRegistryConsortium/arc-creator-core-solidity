Docs
Calendar
# Calendar
A date field component that allows users to enter and edit date.
Docs
PreviewCode
Style: 
Open in Copy
February 2025
Su| Mo| Tu| We| Th| Fr| Sa  
---|---|---|---|---|---|---  
26| 27| 28| 29| 30| 31| 1  
2| 3| 4| 5| 6| 7| 8  
9| 10| 11| 12| 13| 14| 15  
16| 17| 18| 19| 20| 21| 22  
23| 24| 25| 26| 27| 28| 1  
## About
The `Calendar` component is built on top of React DayPicker.
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add calendar

```

Copy
## Usage
```
import { Calendar } from "@/components/ui/calendar"
```
Copy
```
const [date, setDate] = React.useState<Date | undefined>(new Date())
return (
 <Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
 />
)
```
Copy
See the React DayPicker documentation for more information.
## Date Picker
You can use the `<Calendar>` component to build a date picker. See the Date Picker page for more information.
## Examples
### Form
PreviewCode
Style: 
Copy
Date of birthPick a date
Your date of birth is used to calculate your age.
Submit
## Changelog
### 11-03-2024 day_outside color
  * Changed the color of the `day_outside` class to the following to improve contrast:
calendar.tsx
```
"day_outside:
   "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
```
Copy


ButtonCard
On This Page
  * About
  * Installation
  * Usage
  * Date Picker
  * Examples
    * Form
  * Changelog
    * 11-03-2024 day_outside color


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
