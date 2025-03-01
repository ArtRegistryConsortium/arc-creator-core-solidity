Skip to content
# API Reference
Filter
## Global API
### Application
  * createApp()
  * createSSRApp()
  * app.mount()
  * app.unmount()
  * app.onUnmount()
  * app.component()
  * app.directive()
  * app.use()
  * app.mixin()
  * app.provide()
  * app.runWithContext()
  * app.version
  * app.config
  * app.config.errorHandler
  * app.config.warnHandler
  * app.config.performance
  * app.config.compilerOptions
  * app.config.globalProperties
  * app.config.optionMergeStrategies
  * app.config.idPrefix
  * app.config.throwUnhandledErrorInProduction


### General
  * version
  * nextTick()
  * defineComponent()
  * defineAsyncComponent()


## Composition API
### setup()
  * Basic Usage
  * Accessing Props
  * Setup Context
  * Usage with Render Functions


### Reactivity: Core
  * ref()
  * computed()
  * reactive()
  * readonly()
  * watchEffect()
  * watchPostEffect()
  * watchSyncEffect()
  * watch()
  * onWatcherCleanup()


### Reactivity: Utilities
  * isRef()
  * unref()
  * toRef()
  * toValue()
  * toRefs()
  * isProxy()
  * isReactive()
  * isReadonly()


### Reactivity: Advanced
  * shallowRef()
  * triggerRef()
  * customRef()
  * shallowReactive()
  * shallowReadonly()
  * toRaw()
  * markRaw()
  * effectScope()
  * getCurrentScope()
  * onScopeDispose()


### Lifecycle Hooks
  * onMounted()
  * onUpdated()
  * onUnmounted()
  * onBeforeMount()
  * onBeforeUpdate()
  * onBeforeUnmount()
  * onErrorCaptured()
  * onRenderTracked()
  * onRenderTriggered()
  * onActivated()
  * onDeactivated()
  * onServerPrefetch()


### Dependency Injection
  * provide()
  * inject()
  * hasInjectionContext()


### Helpers
  * useAttrs()
  * useSlots()
  * useModel()
  * useTemplateRef()
  * useId()


## Options API
### Options: State
  * data
  * props
  * computed
  * methods
  * watch
  * emits
  * expose


### Options: Rendering
  * template
  * render
  * compilerOptions
  * slots


### Options: Lifecycle
  * beforeCreate
  * created
  * beforeMount
  * mounted
  * beforeUpdate
  * updated
  * beforeUnmount
  * unmounted
  * errorCaptured
  * renderTracked
  * renderTriggered
  * activated
  * deactivated
  * serverPrefetch


### Options: Composition
  * provide
  * inject
  * mixins
  * extends


### Options: Misc
  * name
  * inheritAttrs
  * components
  * directives


### Component Instance
  * $data
  * $props
  * $el
  * $options
  * $parent
  * $root
  * $slots
  * $refs
  * $attrs
  * $watch()
  * $emit()
  * $forceUpdate()
  * $nextTick()


## Built-ins
### Directives
  * v-text
  * v-html
  * v-show
  * v-if
  * v-else
  * v-else-if
  * v-for
  * v-on
  * v-bind
  * v-model
  * v-slot
  * v-pre
  * v-once
  * v-memo
  * v-cloak


### Components
  * <Transition>
  * <TransitionGroup>
  * <KeepAlive>
  * <Teleport>
  * <Suspense>


### Special Elements
  * <component>
  * <slot>
  * <template>


### Special Attributes
  * key
  * ref
  * is


## Single-File Component
### Syntax Specification
  * Overview
  * Language Blocks
  * Automatic Name Inference
  * Pre-Processors
  * src Imports
  * Comments


### <script setup>
  * Basic Syntax
  * Reactivity
  * Using Components
  * Using Custom Directives
  * defineProps() & defineEmits()
  * defineModel()
  * defineExpose()
  * defineOptions()
  * defineSlots()
  * useSlots() & useAttrs()
  * Usage alongside normal <script>
  * Top-level await
  * Import Statements
  * Generics
  * Restrictions


### CSS Features
  * Scoped CSS
  * CSS Modules
  * v-bind() in CSS


## Advanced APIs
### Custom Elements
  * defineCustomElement()
  * useHost()
  * useShadowRoot()
  * this.$host


### Render Function
  * h()
  * mergeProps()
  * cloneVNode()
  * isVNode()
  * resolveComponent()
  * resolveDirective()
  * withDirectives()
  * withModifiers()


### Server-Side Rendering
  * renderToString()
  * renderToNodeStream()
  * pipeToNodeWritable()
  * renderToWebStream()
  * pipeToWebWritable()
  * renderToSimpleStream()
  * useSSRContext()
  * data-allow-mismatch


### TypeScript Utility Types
  * PropType<T>
  * MaybeRef<T>
  * MaybeRefOrGetter<T>
  * ExtractPropTypes<T>
  * ExtractPublicPropTypes<T>
  * ComponentCustomProperties
  * ComponentCustomOptions
  * ComponentCustomProps
  * CSSProperties


### Custom Renderer
  * createRenderer()


### Compile-Time Flags
  * __VUE_OPTIONS_API__
  * __VUE_PROD_DEVTOOLS__
  * __VUE_PROD_HYDRATION_MISMATCH_DETAILS__
  * Configuration Guides


API Reference has loaded
