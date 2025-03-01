Learn React
Escape Hatches
# Referencing Values with Refs
When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a _ref_.
### You will learn
  * How to add a ref to your component
  * How to update a ref’s value
  * How refs are different from state
  * How to use refs safely


## Adding a ref to your component 
You can add a ref to your component by importing the `useRef` Hook from React:
```

import { useRef } from 'react';

```

Inside your component, call the `useRef` Hook and pass the initial value that you want to reference as the only argument. For example, here is a ref to the value `0`:
```

const ref = useRef(0);

```

`useRef` returns an object like this:
```

{ 
 current: 0 // The value you passed to useRef
}

```

![An arrow with 'current' written on it stuffed into a pocket with 'ref' written on it.](https://react.dev/images/docs/illustrations/i_ref.png)
Illustrated by Rachel Lee Nabors
You can access the current value of that ref through the `ref.current` property. This value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn’t track. (This is what makes it an “escape hatch” from React’s one-way data flow—more on that below!)
Here, a button will increment `ref.current` on every click:
App.js
App.js
Download ResetFork
```
import { useRef } from 'react';
export default function Counter() {
 let ref = useRef(0);
 function handleClick() {
  ref.current = ref.current + 1;
  alert('You clicked ' + ref.current + ' times!');
 }
 return (
  <button onClick={handleClick}>
   Click me!
  </button>
 );
}

```

Show more
The ref points to a number, but, like state, you could point to anything: a string, an object, or even a function. Unlike state, ref is a plain JavaScript object with the `current` property that you can read and modify.
Note that **the component doesn’t re-render with every increment.** Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!
## Example: building a stopwatch 
You can combine refs and state in a single component. For example, let’s make a stopwatch that the user can start or stop by pressing a button. In order to display how much time has passed since the user pressed “Start”, you will need to keep track of when the Start button was pressed and what the current time is. **This information is used for rendering, so you’ll keep it in state:**
```

const [startTime, setStartTime] = useState(null);
const [now, setNow] = useState(null);

```

When the user presses “Start”, you’ll use `setInterval` in order to update the time every 10 milliseconds:
App.js
App.js
Download ResetFork
```
import { useState } from 'react';
export default function Stopwatch() {
 const [startTime, setStartTime] = useState(null);
 const [now, setNow] = useState(null);
 function handleStart() {
  // Start counting.
  setStartTime(Date.now());
  setNow(Date.now());
  setInterval(() => {
   // Update the current time every 10ms.
   setNow(Date.now());
  }, 10);
 }
 let secondsPassed = 0;
 if (startTime != null && now != null) {
  secondsPassed = (now - startTime) / 1000;
 }
 return (
  <>
   <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
   <button onClick={handleStart}>
    Start
   </button>
  </>
 );
}

```

Show more
When the “Stop” button is pressed, you need to cancel the existing interval so that it stops updating the `now` state variable. You can do this by calling `clearInterval`, but you need to give it the interval ID that was previously returned by the `setInterval` call when the user pressed Start. You need to keep the interval ID somewhere. **Since the interval ID is not used for rendering, you can keep it in a ref:**
App.js
App.js
Download ResetFork
```
import { useState, useRef } from 'react';
export default function Stopwatch() {
 const [startTime, setStartTime] = useState(null);
 const [now, setNow] = useState(null);
 const intervalRef = useRef(null);
 function handleStart() {
  setStartTime(Date.now());
  setNow(Date.now());
  clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => {
   setNow(Date.now());
  }, 10);
 }
 function handleStop() {
  clearInterval(intervalRef.current);
 }
 let secondsPassed = 0;
 if (startTime != null && now != null) {
  secondsPassed = (now - startTime) / 1000;
 }
 return (
  <>
   <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
   <button onClick={handleStart}>
    Start
   </button>
   <button onClick={handleStop}>
    Stop
   </button>
  </>
 );
}

```

Show more
When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, using a ref may be more efficient.
## Differences between refs and state 
Perhaps you’re thinking refs seem less “strict” than state—you can mutate them instead of always having to use a state setting function, for instance. But in most cases, you’ll want to use state. Refs are an “escape hatch” you won’t need often. Here’s how state and refs compare:
refs| state  
---|---  
`useRef(initialValue)` returns `{ current: initialValue }`| `useState(initialValue)` returns the current value of a state variable and a state setter function ( `[value, setValue]`)  
Doesn’t trigger re-render when you change it.| Triggers re-render when you change it.  
Mutable—you can modify and update `current`’s value outside of the rendering process.| ”Immutable”—you must use the state setting function to modify state variables to queue a re-render.  
You shouldn’t read (or write) the `current` value during rendering.| You can read state at any time. However, each render has its own snapshot of state which does not change.  
Here is a counter button that’s implemented with state:
App.js
App.js
Download ResetFork
```
import { useState } from 'react';
export default function Counter() {
 const [count, setCount] = useState(0);
 function handleClick() {
  setCount(count + 1);
 }
 return (
  <button onClick={handleClick}>
   You clicked {count} times
  </button>
 );
}

```

Because the `count` value is displayed, it makes sense to use a state value for it. When the counter’s value is set with `setCount()`, React re-renders the component and the screen updates to reflect the new count.
If you tried to implement this with a ref, React would never re-render the component, so you’d never see the count change! See how clicking this button **does not update its text** :
App.js
App.js
Download ResetFork
```
import { useRef } from 'react';
export default function Counter() {
 let countRef = useRef(0);
 function handleClick() {
  // This doesn't re-render the component!
  countRef.current = countRef.current + 1;
 }
 return (
  <button onClick={handleClick}>
   You clicked {countRef.current} times
  </button>
 );
}

```

Show more
This is why reading `ref.current` during render leads to unreliable code. If you need that, use state instead.
##### Deep Dive
#### How does useRef work inside? 
Show Details
Although both `useState` and `useRef` are provided by React, in principle `useRef` could be implemented _on top of_ `useState`. You can imagine that inside of React, `useRef` is implemented like this:
```

// Inside of React
function useRef(initialValue) {
 const [ref, unused] = useState({ current: initialValue });
 return ref;
}

```

During the first render, `useRef` returns `{ current: initialValue }`. This object is stored by React, so during the next render the same object will be returned. Note how the state setter is unused in this example. It is unnecessary because `useRef` always needs to return the same object!
React provides a built-in version of `useRef` because it is common enough in practice. But you can think of it as a regular state variable without a setter. If you’re familiar with object-oriented programming, refs might remind you of instance fields—but instead of `this.something` you write `somethingRef.current`.
## When to use refs 
Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component. Here are a few of these rare situations:
  * Storing timeout IDs
  * Storing and manipulating DOM elements, which we cover on the next page
  * Storing other objects that aren’t necessary to calculate the JSX.


If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.
## Best practices for refs 
Following these principles will make your components more predictable:
  * **Treat refs as an escape hatch.** Refs are useful when you work with external systems or browser APIs. If much of your application logic and data flow relies on refs, you might want to rethink your approach.
  * **Don’t read or write`ref.current` during rendering.** If some information is needed during rendering, use state instead. Since React doesn’t know when `ref.current` changes, even reading it while rendering makes your component’s behavior difficult to predict. (The only exception to this is code like `if (!ref.current) ref.current = new Thing()` which only sets the ref once during the first render.)


Limitations of React state don’t apply to refs. For example, state acts like a snapshot for every render and doesn’t update synchronously. But when you mutate the current value of a ref, it changes immediately:
```

ref.current = 5;
console.log(ref.current); // 5

```

This is because **the ref itself is a regular JavaScript object,** and so it behaves like one.
You also don’t need to worry about avoiding mutation when you work with a ref. As long as the object you’re mutating isn’t used for rendering, React doesn’t care what you do with the ref or its contents.
## Refs and the DOM 
You can point a ref to any value. However, the most common use case for a ref is to access a DOM element. For example, this is handy if you want to focus an input programmatically. When you pass a ref to a `ref` attribute in JSX, like `<div ref={myRef}>`, React will put the corresponding DOM element into `myRef.current`. Once the element is removed from the DOM, React will update `myRef.current` to be `null`. You can read more about this in Manipulating the DOM with Refs.
## Recap
  * Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
  * A ref is a plain JavaScript object with a single property called `current`, which you can read or set.
  * You can ask React to give you a ref by calling the `useRef` Hook.
  * Like state, refs let you retain information between re-renders of a component.
  * Unlike state, setting the ref’s `current` value does not trigger a re-render.
  * Don’t read or write `ref.current` during rendering. This makes your component hard to predict.


## Try out some challenges
1. Fix a broken chat input 2. Fix a component failing to re-render 3. Fix debouncing 4. Read the latest state 
#### 
Challenge 1 of 4: 
Fix a broken chat input 
Type a message and click “Send”. You will notice there is a three second delay before you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. This “Undo” button is supposed to stop the “Sent!” message from appearing. It does this by calling `clearTimeout` for the timeout ID saved during `handleSend`. However, even after “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and fix it.
App.js
App.js
Download ResetFork
```
import { useState } from 'react';
export default function Chat() {
 const [text, setText] = useState('');
 const [isSending, setIsSending] = useState(false);
 let timeoutID = null;
 function handleSend() {
  setIsSending(true);
  timeoutID = setTimeout(() => {
   alert('Sent!');
   setIsSending(false);
  }, 3000);
 }
 function handleUndo() {
  setIsSending(false);
  clearTimeout(timeoutID);
 }
 return (
  <>
   <input
    disabled={isSending}
    value={text}
    onChange={e => setText(e.target.value)}
   />
   <button
    disabled={isSending}
    onClick={handleSend}>
    {isSending ? 'Sending...' : 'Send'}
   </button>
   {isSending &&
    <button onClick={handleUndo}>
     Undo
    </button>
   }
  </>
 );
}

```

Show more
Show hint Show solution
Next Challenge
PreviousEscape Hatches
NextManipulating the DOM with Refs
