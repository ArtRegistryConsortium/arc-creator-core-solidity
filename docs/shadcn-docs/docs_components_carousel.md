Docs
Carousel
# Carousel
A carousel with motion and swipe built using Embla.
DocsAPI Reference
PreviewCode
Style: 
Open in Copy
1
2
3
4
5
Previous slideNext slide
## About
The carousel component is built using the Embla Carousel library.
## Installation
CLIManual
pnpmnpmyarnbun
```
pnpm dlx shadcn@latest add carousel

```

Copy
## Usage
```
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel"
```
Copy
```
<Carousel>
 <CarouselContent>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
 </CarouselContent>
 <CarouselPrevious />
 <CarouselNext />
</Carousel>
```
Copy
## Examples
### Sizes
To set the size of the items, you can use the `basis` utility class on the `<CarouselItem />`.
PreviewCode
Style: 
Open in Copy
1
2
3
4
5
Previous slideNext slide
Example
```
// 33% of the carousel width.
<Carousel>
 <CarouselContent>
  <CarouselItem className="basis-1/3">...</CarouselItem>
  <CarouselItem className="basis-1/3">...</CarouselItem>
  <CarouselItem className="basis-1/3">...</CarouselItem>
 </CarouselContent>
</Carousel>
```
Copy
Responsive
```
// 50% on small screens and 33% on larger screens.
<Carousel>
 <CarouselContent>
  <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
  <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
 </CarouselContent>
</Carousel>
```
Copy
### Spacing
To set the spacing between the items, we use a `pl-[VALUE]` utility on the `<CarouselItem />` and a negative `-ml-[VALUE]` on the `<CarouselContent />`.
**Why:** I tried to use the `gap` property or a `grid` layout on the `  <CarouselContent />` but it required a lot of math and mental effort to get the spacing right. I found `pl-[VALUE]` and `-ml-[VALUE]` utilities much easier to use.
You can always adjust this in your own project if you need to.
PreviewCode
Style: 
Open in Copy
1
2
3
4
5
Previous slideNext slide
Example
```
<Carousel>
 <CarouselContent className="-ml-4">
  <CarouselItem className="pl-4">...</CarouselItem>
  <CarouselItem className="pl-4">...</CarouselItem>
  <CarouselItem className="pl-4">...</CarouselItem>
 </CarouselContent>
</Carousel>
```
Copy
Responsive
```
<Carousel>
 <CarouselContent className="-ml-2md:-ml-4">
  <CarouselItem className="pl-2md:pl-4">...</CarouselItem>
  <CarouselItem className="pl-2md:pl-4">...</CarouselItem>
  <CarouselItem className="pl-2md:pl-4">...</CarouselItem>
 </CarouselContent>
</Carousel>
```
Copy
### Orientation
Use the `orientation` prop to set the orientation of the carousel.
PreviewCode
Style: 
Open in Copy
1
2
3
4
5
Previous slideNext slide
```
<Carousel orientation="vertical | horizontal">
 <CarouselContent>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
 </CarouselContent>
</Carousel>
```
Copy
## Options
You can pass options to the carousel using the `opts` prop. See the Embla Carousel docs for more information.
```
<Carousel
 opts={{
  align: "start",
  loop: true,
 }}
>
 <CarouselContent>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
  <CarouselItem>...</CarouselItem>
 </CarouselContent>
</Carousel>
```
Copy
## API
Use a state and the `setApi` props to get an instance of the carousel API.
PreviewCode
Style: 
Open in Copy
1
2
3
4
5
Previous slideNext slide
Slide 0 of 0
```
import { type CarouselApi } from "@/components/ui/carousel"
export function Example() {
 const [api, setApi] = React.useState<CarouselApi>()
 const [current, setCurrent] = React.useState(0)
 const [count, setCount] = React.useState(0)
 React.useEffect(() => {
  if (!api) {
   return
  }
  setCount(api.scrollSnapList().length)
  setCurrent(api.selectedScrollSnap() + 1)
  api.on("select", () => {
   setCurrent(api.selectedScrollSnap() + 1)
  })
 }, [api])
 return (
  <Carousel setApi={setApi}>
   <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
   </CarouselContent>
  </Carousel>
 )
}
```
Copy
## Events
You can listen to events using the api instance from `setApi`.
```
import { type CarouselApi } from "@/components/ui/carousel"
export function Example() {
 const [api, setApi] = React.useState<CarouselApi>()
 React.useEffect(() => {
  if (!api) {
   return
  }
  api.on("select", () => {
   // Do something on select.
  })
 }, [api])
 return (
  <Carousel setApi={setApi}>
   <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
   </CarouselContent>
  </Carousel>
 )
}
```
Copy
See the Embla Carousel docs for more information on using events.
## Plugins
You can use the `plugins` prop to add plugins to the carousel.
```
import Autoplay from "embla-carousel-autoplay"
export function Example() {
 return (
  <Carousel
   plugins={[
    Autoplay({
     delay: 2000,
    }),
   ]}
  >
   // ...
  </Carousel>
 )
}
```
Copy
PreviewCode
Style: 
Open in Copy
1
2
3
4
5
Previous slideNext slide
See the Embla Carousel docs for more information on using plugins.
CardChart
On This Page
  * About
  * Installation
  * Usage
  * Examples
    * Sizes
    * Spacing
    * Orientation
  * Options
  * API
  * Events
  * Plugins


Deploy your shadcn/ui app on Vercel
Trusted by OpenAI, Sonos, Chick-fil-A, and more.
Vercel provides tools and infrastructure to deploy apps and features at scale.
Deploy NowDeploy to Vercel
