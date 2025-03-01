Skip to content
On this page
Sponsors
Become a Sponsor
![ads via Carbon](https://srv.carbonads.net/static/30242/d41e3aae00de42b6c1a93a26e8f90a2d220d29bd) Get Started Today with a Free 7-day Trial. Unlock access to over 200+ high-quality frontend and fullstack courses.  ads via Carbon
# Production Error Code Reference ​
## Runtime Errors ​
In production builds, the 3rd argument passed to the following error handler APIs will be a short code instead of the full information string:
  * `app.config.errorHandler`
  * `onErrorCaptured` (Composition API)
  * `errorCaptured` (Options API)


The following table maps the codes to their original full information strings.
Code| Message  
---|---  
0| setup function  
1| render function  
2| watcher getter  
3| watcher callback  
4| watcher cleanup function  
5| native event handler  
6| component event handler  
7| vnode hook  
8| directive hook  
9| transition hook  
10| app errorHandler  
11| app warnHandler  
12| ref function  
13| async component loader  
14| scheduler flush  
15| component update  
16| app unmount cleanup function  
sp| serverPrefetch hook  
bc| beforeCreate hook  
c| created hook  
bm| beforeMount hook  
m| mounted hook  
bu| beforeUpdate hook  
u| updated  
bum| beforeUnmount hook  
um| unmounted hook  
a| activated hook  
da| deactivated hook  
ec| errorCaptured hook  
rtc| renderTracked hook  
rtg| renderTriggered hook  
## Compiler Errors ​
The following table provides a mapping of the production compiler error codes to their original messages.
Code| Message  
---|---  
0| Illegal comment.  
1| CDATA section is allowed only in XML context.  
2| Duplicate attribute.  
3| End tag cannot have attributes.  
4| Illegal '/' in tags.  
5| Unexpected EOF in tag.  
6| Unexpected EOF in CDATA section.  
7| Unexpected EOF in comment.  
8| Unexpected EOF in script.  
9| Unexpected EOF in tag.  
10| Incorrectly closed comment.  
11| Incorrectly opened comment.  
12| Illegal tag name. Use '&lt;' to print '<'.  
13| Attribute value was expected.  
14| End tag name was expected.  
15| Whitespace was expected.  
16| Unexpected '<!--' in comment.  
17| Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).  
18| Unquoted attribute value cannot contain U+0022 ("), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).  
19| Attribute name cannot start with '='.  
20| Unexpected null character.  
21| '<?' is allowed only in XML context.  
22| Illegal '/' in tags.  
23| Invalid end tag.  
24| Element is missing end tag.  
25| Interpolation end sign was not found.  
26| Legal directive name was expected.  
27| End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.  
28| v-if/v-else-if is missing expression.  
29| v-if/else branches must use unique keys.  
30| v-else/v-else-if has no adjacent v-if or v-else-if.  
31| v-for is missing expression.  
32| v-for has invalid expression.  
33| <template v-for> key should be placed on the <template> tag.  
34| v-bind is missing expression.  
35| v-on is missing expression.  
36| Unexpected custom directive on <slot> outlet.  
37| Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.  
38| Duplicate slot names found.   
39| Extraneous children found when component already has explicitly named default slot. These children will be ignored.  
40| v-slot can only be used on components or <template> tags.  
41| v-model is missing expression.  
42| v-model value must be a valid JavaScript member expression.  
43| v-model cannot be used on v-for or v-slot scope variables because they are not writable.  
44| v-model cannot be used on a prop, because local prop bindings are not writable. Use a v-bind binding combined with a v-on listener that emits update:x event instead.  
45| Error parsing JavaScript expression:   
46| <KeepAlive> expects exactly one child component.  
47| "prefixIdentifiers" option is not supported in this build of compiler.  
48| ES module mode is not supported in this build of compiler.  
49| "cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.  
50| "scopeId" option is only supported in module mode.  
51| @vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.  
52| v-bind with same-name shorthand only allows static argument.  
53| v-html is missing expression.  
54| v-html will override element children.  
55| v-text is missing expression.  
56| v-text will override element children.  
57| v-model can only be used on <input>, <textarea> and <select> elements.  
58| v-model argument is not supported on plain elements.  
59| v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.  
60| Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.  
61| v-show is missing expression.  
62| <Transition> expects exactly one child element or component.  
63| Tags with side effect (<script> and <style>) are ignored in client component templates.  
Edit this page on GitHub
Production Error Code Reference has loaded
