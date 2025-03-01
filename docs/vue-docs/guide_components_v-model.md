Skip to content
Menu
On this page 
On this page
Sponsors
Become a Sponsor
![ads via Carbon](https://srv.carbonads.net/static/30242/d41e3aae00de42b6c1a93a26e8f90a2d220d29bd) Get Started Today with a Free 7-day Trial. Unlock access to over 200+ high-quality frontend and fullstack courses.  ads via Carbon
# Component v-model ​
## Basic Usage ​
`v-model` can be used on a component to implement a two-way binding.
Starting in Vue 3.4, the recommended approach to achieve this is using the `defineModel()` macro:
vue```
<!-- Child.vue -->
<script setup>
const model = defineModel()
function update() {
 model.value++
}
</script>
<template>
 <div>Parent bound v-model is: {{ model }}</div>
 <button @click="update">Increment</button>
</template>
```

The parent can then bind a value with `v-model`:
template```
<!-- Parent.vue -->
<Child v-model="countModel" />
```

The value returned by `defineModel()` is a ref. It can be accessed and mutated like any other ref, except that it acts as a two-way binding between a parent value and a local one:
  * Its `.value` is synced with the value bound by the parent `v-model`;
  * When it is mutated by the child, it causes the parent bound value to be updated as well.


This means you can also bind this ref to a native input element with `v-model`, making it straightforward to wrap native input elements while providing the same `v-model` usage:
vue```
<script setup>
const model = defineModel()
</script>
<template>
 <input v-model="model" />
</template>
```

Try it in the playground
### Under the Hood ​
`defineModel` is a convenience macro. The compiler expands it to the following:
  * A prop named `modelValue`, which the local ref's value is synced with;
  * An event named `update:modelValue`, which is emitted when the local ref's value is mutated.


This is how you would implement the same child component shown above prior to 3.4:
vue```
<!-- Child.vue -->
<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
<template>
 <input
  :value="props.modelValue"
  @input="emit('update:modelValue', $event.target.value)"
 />
</template>
```

Then, `v-model="foo"` in the parent component will be compiled to:
template```
<!-- Parent.vue -->
<Child
 :modelValue="foo"
 @update:modelValue="$event => (foo = $event)"
/>
```

As you can see, it is quite a bit more verbose. However, it is helpful to understand what is happening under the hood.
Because `defineModel` declares a prop, you can therefore declare the underlying prop's options by passing it to `defineModel`:
js```
// making the v-model required
const model = defineModel({ required: true })
// providing a default value
const model = defineModel({ default: 0 })
```

WARNING
If you have a `default` value for `defineModel` prop and you don't provide any value for this prop from the parent component, it can cause a de-synchronization between parent and child components. In the example below, the parent's `myRef` is undefined, but the child's `model` is 1:
**Child component:**
js```
const model = defineModel({ default: 1 })
```

**Parent component:**
js```
const myRef = ref()
```

html```
<Child v-model="myRef"></Child>
```

First let's revisit how `v-model` is used on a native element:
template```
<input v-model="searchText" />
```

Under the hood, the template compiler expands `v-model` to the more verbose equivalent for us. So the above code does the same as the following:
template```
<input
 :value="searchText"
 @input="searchText = $event.target.value"
/>
```

When used on a component, `v-model` instead expands to this:
template```
<CustomInput
 :model-value="searchText"
 @update:model-value="newValue => searchText = newValue"
/>
```

For this to actually work though, the `<CustomInput>` component must do two things:
  1. Bind the `value` attribute of a native `<input>` element to the `modelValue` prop
  2. When a native `input` event is triggered, emit an `update:modelValue` custom event with the new value


Here's that in action:
vue```
<!-- CustomInput.vue -->
<script>
export default {
 props: ['modelValue'],
 emits: ['update:modelValue']
}
</script>
<template>
 <input
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
 />
</template>
```

Now `v-model` should work perfectly with this component:
template```
<CustomInput v-model="searchText" />
```

Try it in the Playground
Another way of implementing `v-model` within this component is to use a writable `computed` property with both a getter and a setter. The `get` method should return the `modelValue` property and the `set` method should emit the corresponding event:
vue```
<!-- CustomInput.vue -->
<script>
export default {
 props: ['modelValue'],
 emits: ['update:modelValue'],
 computed: {
  value: {
   get() {
    return this.modelValue
   },
   set(value) {
    this.$emit('update:modelValue', value)
   }
  }
 }
}
</script>
<template>
 <input v-model="value" />
</template>
```

## `v-model` arguments ​
`v-model` on a component can also accept an argument:
template```
<MyComponent v-model:title="bookTitle" />
```

In the child component, we can support the corresponding argument by passing a string to `defineModel()` as its first argument:
vue```
<!-- MyComponent.vue -->
<script setup>
const title = defineModel('title')
</script>
<template>
 <input type="text" v-model="title" />
</template>
```

Try it in the Playground
If prop options are also needed, they should be passed after the model name:
js```
const title = defineModel('title', { required: true })
```

Pre 3.4 Usage
vue```
<!-- MyComponent.vue -->
<script setup>
defineProps({
 title: {
  required: true
 }
})
defineEmits(['update:title'])
</script>
<template>
 <input
  type="text"
  :value="title"
  @input="$emit('update:title', $event.target.value)"
 />
</template>
```

Try it in the Playground
In this case, instead of the default `modelValue` prop and `update:modelValue` event, the child component should expect a `title` prop and emit an `update:title` event to update the parent value:
vue```
<!-- MyComponent.vue -->
<script>
export default {
 props: ['title'],
 emits: ['update:title']
}
</script>
<template>
 <input
  type="text"
  :value="title"
  @input="$emit('update:title', $event.target.value)"
 />
</template>
```

Try it in the Playground
## Multiple `v-model` bindings ​
By leveraging the ability to target a particular prop and event as we learned before with `v-model` arguments, we can now create multiple `v-model` bindings on a single component instance.
Each `v-model` will sync to a different prop, without the need for extra options in the component:
template```
<UserName
 v-model:first-name="first"
 v-model:last-name="last"
/>
```

vue```
<script setup>
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>
<template>
 <input type="text" v-model="firstName" />
 <input type="text" v-model="lastName" />
</template>
```

Try it in the Playground
Pre 3.4 Usage
vue```
<script setup>
defineProps({
 firstName: String,
 lastName: String
})
defineEmits(['update:firstName', 'update:lastName'])
</script>
<template>
 <input
  type="text"
  :value="firstName"
  @input="$emit('update:firstName', $event.target.value)"
 />
 <input
  type="text"
  :value="lastName"
  @input="$emit('update:lastName', $event.target.value)"
 />
</template>
```

Try it in the Playground
vue```
<script>
export default {
 props: {
  firstName: String,
  lastName: String
 },
 emits: ['update:firstName', 'update:lastName']
}
</script>
<template>
 <input
  type="text"
  :value="firstName"
  @input="$emit('update:firstName', $event.target.value)"
 />
 <input
  type="text"
  :value="lastName"
  @input="$emit('update:lastName', $event.target.value)"
 />
</template>
```

Try it in the Playground
## Handling `v-model` modifiers ​
When we were learning about form input bindings, we saw that `v-model` has built-in modifiers - `.trim`, `.number` and `.lazy`. In some cases, you might also want the `v-model` on your custom input component to support custom modifiers.
Let's create an example custom modifier, `capitalize`, that capitalizes the first letter of the string provided by the `v-model` binding:
template```
<MyComponent v-model.capitalize="myText" />
```

Modifiers added to a component `v-model` can be accessed in the child component by destructuring the `defineModel()` return value like this:
vue```
<script setup>
const [model, modifiers] = defineModel()
console.log(modifiers) // { capitalize: true }
</script>
<template>
 <input type="text" v-model="model" />
</template>
```

To conditionally adjust how the value should be read / written based on modifiers, we can pass `get` and `set` options to `defineModel()`. These two options receive the value on get / set of the model ref and should return a transformed value. This is how we can use the `set` option to implement the `capitalize` modifier:
vue```
<script setup>
const [model, modifiers] = defineModel({
 set(value) {
  if (modifiers.capitalize) {
   return value.charAt(0).toUpperCase() + value.slice(1)
  }
  return value
 }
})
</script>
<template>
 <input type="text" v-model="model" />
</template>
```

Try it in the Playground
Pre 3.4 Usage
vue```
<script setup>
const props = defineProps({
 modelValue: String,
 modelModifiers: { default: () => ({}) }
})
const emit = defineEmits(['update:modelValue'])
function emitValue(e) {
 let value = e.target.value
 if (props.modelModifiers.capitalize) {
  value = value.charAt(0).toUpperCase() + value.slice(1)
 }
 emit('update:modelValue', value)
}
</script>
<template>
 <input type="text" :value="props.modelValue" @input="emitValue" />
</template>
```

Try it in the Playground
Modifiers added to a component `v-model` will be provided to the component via the `modelModifiers` prop. In the below example, we have created a component that contains a `modelModifiers` prop that defaults to an empty object:
vue```
<script>
export default {
 props: {
  modelValue: String,
  modelModifiers: {
   default: () => ({})
  }
 },
 emits: ['update:modelValue'],
 created() {
  console.log(this.modelModifiers) // { capitalize: true }
 }
}
</script>
<template>
 <input
  type="text"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
 />
</template>
```

Notice the component's `modelModifiers` prop contains `capitalize` and its value is `true` - due to it being set on the `v-model` binding `v-model.capitalize="myText"`.
Now that we have our prop set up, we can check the `modelModifiers` object keys and write a handler to change the emitted value. In the code below we will capitalize the string whenever the `<input />` element fires an `input` event.
vue```
<script>
export default {
 props: {
  modelValue: String,
  modelModifiers: {
   default: () => ({})
  }
 },
 emits: ['update:modelValue'],
 methods: {
  emitValue(e) {
   let value = e.target.value
   if (this.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
   }
   this.$emit('update:modelValue', value)
  }
 }
}
</script>
<template>
 <input type="text" :value="modelValue" @input="emitValue" />
</template>
```

Try it in the Playground
### Modifiers for `v-model` with arguments ​
For `v-model` bindings with both argument and modifiers, the generated prop name will be `arg + "Modifiers"`. For example:
template```
<MyComponent v-model:title.capitalize="myText">
```

The corresponding declarations should be:
js```
export default {
 props: ['title', 'titleModifiers'],
 emits: ['update:title'],
 created() {
  console.log(this.titleModifiers) // { capitalize: true }
 }
}
```

Here's another example of using modifiers with multiple `v-model` with different arguments:
template```
<UserName
 v-model:first-name.capitalize="first"
 v-model:last-name.uppercase="last"
/>
```

vue```
<script setup>
const [firstName, firstNameModifiers] = defineModel('firstName')
const [lastName, lastNameModifiers] = defineModel('lastName')
console.log(firstNameModifiers) // { capitalize: true }
console.log(lastNameModifiers) // { uppercase: true }
</script>
```

Pre 3.4 Usage
vue```
<script setup>
const props = defineProps({
firstName: String,
lastName: String,
firstNameModifiers: { default: () => ({}) },
lastNameModifiers: { default: () => ({}) }
})
defineEmits(['update:firstName', 'update:lastName'])
console.log(props.firstNameModifiers) // { capitalize: true }
console.log(props.lastNameModifiers) // { uppercase: true }
</script>
```

vue```
<script>
export default {
 props: {
  firstName: String,
  lastName: String,
  firstNameModifiers: {
   default: () => ({})
  },
  lastNameModifiers: {
   default: () => ({})
  }
 },
 emits: ['update:firstName', 'update:lastName'],
 created() {
  console.log(this.firstNameModifiers) // { capitalize: true }
  console.log(this.lastNameModifiers) // { uppercase: true }
 }
}
</script>
```

Edit this page on GitHub
Component v-model has loaded
