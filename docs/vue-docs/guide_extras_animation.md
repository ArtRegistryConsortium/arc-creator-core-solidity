Skip to content
Menu
On this page 
On this page
Sponsors
Become a Sponsor
![ads via Carbon](https://srv.carbonads.net/static/30242/75dd292262b51c4fedced0ce4e76293bf16c44b5) Frontend Masters - Your Path to Becoming a Career-Ready Web Developer!  ads via Carbon
# Animation Techniques ​
Vue provides the `<Transition>` and `<TransitionGroup>` components for handling enter / leave and list transitions. However, there are many other ways of using animations on the web, even in a Vue application. Here we will discuss a few additional techniques.
## Class-based Animations ​
For elements that are not entering / leaving the DOM, we can trigger animations by dynamically adding a CSS class:
js```
const disabled = ref(false)
function warnDisabled() {
 disabled.value = true
 setTimeout(() => {
  disabled.value = false
 }, 1500)
}
```

js```
export default {
 data() {
  return {
   disabled: false
  }
 },
 methods: {
  warnDisabled() {
   this.disabled = true
   setTimeout(() => {
    this.disabled = false
   }, 1500)
  }
 }
}
```

template```
<div :class="{ shake: disabled }">
 <button @click="warnDisabled">Click me</button>
 <span v-if="disabled">This feature is disabled!</span>
</div>
```

css```
.shake {
 animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
 transform: translate3d(0, 0, 0);
}
@keyframes shake {
 10%,
 90% {
  transform: translate3d(-1px, 0, 0);
 }
 20%,
 80% {
  transform: translate3d(2px, 0, 0);
 }
 30%,
 50%,
 70% {
  transform: translate3d(-4px, 0, 0);
 }
 40%,
 60% {
  transform: translate3d(4px, 0, 0);
 }
}
```

Click me
## State-driven Animations ​
Some transition effects can be applied by interpolating values, for instance by binding a style to an element while an interaction occurs. Take this example for instance:
js```
const x = ref(0)
function onMousemove(e) {
 x.value = e.clientX
}
```

js```
export default {
 data() {
  return {
   x: 0
  }
 },
 methods: {
  onMousemove(e) {
   this.x = e.clientX
  }
 }
}
```

template```
<div
 @mousemove="onMousemove"
 :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
 class="movearea"
>
 <p>Move your mouse across this div...</p>
 <p>x: {{ x }}</p>
</div>
```

css```
.movearea {
 transition: 0.3s background-color ease;
}
```

Move your mouse across this div...
x: 0
In addition to color, you can also use style bindings to animate transform, width, or height. You can even animate SVG paths using spring physics - after all, they are all attribute data bindings:
Drag Me
Source code
## Animating with Watchers ​
With some creativity, we can use watchers to animate anything based on some numerical state. For example, we can animate the number itself:
js```
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'
const number = ref(0)
const tweened = reactive({
 number: 0
})
watch(number, (n) => {
 gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
})
```

template```
Type a number: <input v-model.number="number" />
<p>{{ tweened.number.toFixed(0) }}</p>
```

js```
import gsap from 'gsap'
export default {
 data() {
  return {
   number: 0,
   tweened: 0
  }
 },
 watch: {
  number(n) {
   gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 })
  }
 }
}
```

template```
Type a number: <input v-model.number="number" />
<p>{{ tweened.toFixed(0) }}</p>
```

Type a number: 
0
Try it in the Playground
Try it in the Playground
Edit this page on GitHub
Animation Techniques has loaded
