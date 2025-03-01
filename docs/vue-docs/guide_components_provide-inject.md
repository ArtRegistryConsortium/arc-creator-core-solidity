Skip to content
Menu
On this page 
On this page
Sponsors
Become a Sponsor
![ads via Carbon](https://srv.carbonads.net/static/30242/4ba790229c6114149037637d63c301b1d9530897) Create a website that reflects your personal brand with Squarespace. Start your free trial.  ads via Carbon
![ads via Carbon](https://ad.doubleclick.net/ddm/trackimp/N718679.452584BUYSELLADS.COM/B29090009.401295014;dc_trk_aid=593217890;dc_trk_cid=206564386;ord=173980250;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$;gdpr_consent=$;ltd=;dc_tdv=1)
# Provide / Inject ​
> This page assumes you've already read the Components Basics. Read that first if you are new to components.
## Prop Drilling ​
Usually, when we need to pass data from the parent to a child component, we use props. However, imagine the case where we have a large component tree, and a deeply nested component needs something from a distant ancestor component. With only props, we would have to pass the same prop across the entire parent chain:
![prop drilling diagram](https://vuejs.org/assets/prop-drilling.XJXa8UE-.png)
Notice although the `<Footer>` component may not care about these props at all, it still needs to declare and pass them along just so `<DeepChild>` can access them. If there is a longer parent chain, more components would be affected along the way. This is called "props drilling" and definitely isn't fun to deal with.
We can solve props drilling with `provide` and `inject`. A parent component can serve as a **dependency provider** for all its descendants. Any component in the descendant tree, regardless of how deep it is, can **inject** dependencies provided by components up in its parent chain.
![Provide/inject scheme](https://vuejs.org/assets/provide-inject.C0gAIfVn.png)
## Provide ​
To provide data to a component's descendants, use the `provide()` function:
vue```
<script setup>
import { provide } from 'vue'
provide(/* key */ 'message', /* value */ 'hello!')
</script>
```

If not using `<script setup>`, make sure `provide()` is called synchronously inside `setup()`:
js```
import { provide } from 'vue'
export default {
 setup() {
  provide(/* key */ 'message', /* value */ 'hello!')
 }
}
```

The `provide()` function accepts two arguments. The first argument is called the **injection key** , which can be a string or a `Symbol`. The injection key is used by descendant components to lookup the desired value to inject. A single component can call `provide()` multiple times with different injection keys to provide different values.
The second argument is the provided value. The value can be of any type, including reactive state such as refs:
js```
import { ref, provide } from 'vue'
const count = ref(0)
provide('key', count)
```

Providing reactive values allows the descendant components using the provided value to establish a reactive connection to the provider component.
To provide data to a component's descendants, use the `provide` option:
js```
export default {
 provide: {
  message: 'hello!'
 }
}
```

For each property in the `provide` object, the key is used by child components to locate the correct value to inject, while the value is what ends up being injected.
If we need to provide per-instance state, for example data declared via the `data()`, then `provide` must use a function value:
js```
export default {
 data() {
  return {
   message: 'hello!'
  }
 },
 provide() {
  // use function syntax so that we can access `this`
  return {
   message: this.message
  }
 }
}
```

However, do note this does **not** make the injection reactive. We will discuss making injections reactive below.
## App-level Provide ​
In addition to providing data in a component, we can also provide at the app level:
js```
import { createApp } from 'vue'
const app = createApp({})
app.provide(/* key */ 'message', /* value */ 'hello!')
```

App-level provides are available to all components rendered in the app. This is especially useful when writing plugins, as plugins typically wouldn't be able to provide values using components.
## Inject ​
To inject data provided by an ancestor component, use the `inject()` function:
vue```
<script setup>
import { inject } from 'vue'
const message = inject('message')
</script>
```

If the provided value is a ref, it will be injected as-is and will **not** be automatically unwrapped. This allows the injector component to retain the reactivity connection to the provider component.
Full provide + inject Example with Reactivity
Again, if not using `<script setup>`, `inject()` should only be called synchronously inside `setup()`:
js```
import { inject } from 'vue'
export default {
 setup() {
  const message = inject('message')
  return { message }
 }
}
```

To inject data provided by an ancestor component, use the `inject` option:
js```
export default {
 inject: ['message'],
 created() {
  console.log(this.message) // injected value
 }
}
```

Injections are resolved **before** the component's own state, so you can access injected properties in `data()`:
js```
export default {
 inject: ['message'],
 data() {
  return {
   // initial data based on injected value
   fullMessage: this.message
  }
 }
}
```

Full provide + inject example
### Injection Aliasing ​
When using the array syntax for `inject`, the injected properties are exposed on the component instance using the same key. In the example above, the property was provided under the key `"message"`, and injected as `this.message`. The local key is the same as the injection key.
If we want to inject the property using a different local key, we need to use the object syntax for the `inject` option:
js```
export default {
 inject: {
  /* local key */ localMessage: {
   from: /* injection key */ 'message'
  }
 }
}
```

Here, the component will locate a property provided with the key `"message"`, and then expose it as `this.localMessage`.
### Injection Default Values ​
By default, `inject` assumes that the injected key is provided somewhere in the parent chain. In the case where the key is not provided, there will be a runtime warning.
If we want to make an injected property work with optional providers, we need to declare a default value, similar to props:
js```
// `value` will be "default value"
// if no data matching "message" was provided
const value = inject('message', 'default value')
```

In some cases, the default value may need to be created by calling a function or instantiating a new class. To avoid unnecessary computation or side effects in case the optional value is not used, we can use a factory function for creating the default value:
js```
const value = inject('key', () => new ExpensiveClass(), true)
```

The third parameter indicates the default value should be treated as a factory function.
js```
export default {
 // object syntax is required
 // when declaring default values for injections
 inject: {
  message: {
   from: 'message', // this is optional if using the same key for injection
   default: 'default value'
  },
  user: {
   // use a factory function for non-primitive values that are expensive
   // to create, or ones that should be unique per component instance.
   default: () => ({ name: 'John' })
  }
 }
}
```

## Working with Reactivity ​
When using reactive provide / inject values, **it is recommended to keep any mutations to reactive state inside of the _provider_ whenever possible**. This ensures that the provided state and its possible mutations are co-located in the same component, making it easier to maintain in the future.
There may be times when we need to update the data from an injector component. In such cases, we recommend providing a function that is responsible for mutating the state:
vue```
<!-- inside provider component -->
<script setup>
import { provide, ref } from 'vue'
const location = ref('North Pole')
function updateLocation() {
 location.value = 'South Pole'
}
provide('location', {
 location,
 updateLocation
})
</script>
```

vue```
<!-- in injector component -->
<script setup>
import { inject } from 'vue'
const { location, updateLocation } = inject('location')
</script>
<template>
 <button @click="updateLocation">{{ location }}</button>
</template>
```

Finally, you can wrap the provided value with `readonly()` if you want to ensure that the data passed through `provide` cannot be mutated by the injector component.
vue```
<script setup>
import { ref, provide, readonly } from 'vue'
const count = ref(0)
provide('read-only-count', readonly(count))
</script>
```

In order to make injections reactively linked to the provider, we need to provide a computed property using the computed() function:
js```
import { computed } from 'vue'
export default {
 data() {
  return {
   message: 'hello!'
  }
 },
 provide() {
  return {
   // explicitly provide a computed property
   message: computed(() => this.message)
  }
 }
}
```

Full provide + inject Example with Reactivity
The `computed()` function is typically used in Composition API components, but can also be used to complement certain use cases in Options API. You can learn more about its usage by reading the Reactivity Fundamentals and Computed Properties with the API Preference set to Composition API.
## Working with Symbol Keys ​
So far, we have been using string injection keys in the examples. If you are working in a large application with many dependency providers, or you are authoring components that are going to be used by other developers, it is best to use Symbol injection keys to avoid potential collisions.
It's recommended to export the Symbols in a dedicated file:
js```
// keys.js
export const myInjectionKey = Symbol()
```

js```
// in provider component
import { provide } from 'vue'
import { myInjectionKey } from './keys.js'
provide(myInjectionKey, {
 /* data to provide */
})
```

js```
// in injector component
import { inject } from 'vue'
import { myInjectionKey } from './keys.js'
const injected = inject(myInjectionKey)
```

See also: Typing Provide / Inject
js```
// in provider component
import { myInjectionKey } from './keys.js'
export default {
 provide() {
  return {
   [myInjectionKey]: {
    /* data to provide */
   }
  }
 }
}
```

js```
// in injector component
import { myInjectionKey } from './keys.js'
export default {
 inject: {
  injected: { from: myInjectionKey }
 }
}
```

Edit this page on GitHub
Provide / Inject has loaded
