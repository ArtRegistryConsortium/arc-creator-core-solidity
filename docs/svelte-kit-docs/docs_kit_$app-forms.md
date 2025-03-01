Skip to main content
```
import { function applyAction<Success extends Record<string, unknown> | undefined, Failure extends Record<string, unknown> | undefined>(result: import("@sveltejs/kit").ActionResult<Success, Failure>): Promise<void>
This action updates the form property of the current page with the given data and updates page.status.
In case of an error, it redirects to the nearest error page.


applyAction, function deserialize<Success extends Record<string, unknown> | undefined, Failure extends Record<string, unknown> | undefined>(result: string): import("@sveltejs/kit").ActionResult<Success, Failure>
Use this function to deserialize the response from a form submission.
Usage:


```
import { deserialize } from '$app/forms';
async function handleSubmit(event) {
 const response = await fetch('/form?/action', {
	method: 'POST',
	body: new FormData(event.target)
 });
 const result = deserialize(await response.text());
 // ...
}
```

deserialize, ````
function enhance<Success extends Record<string, unknown> | undefined, Failure extends Record<string, unknown> | undefined>(form_element: HTMLFormElement, submit?: import("@sveltejs/kit").SubmitFunction<Success, Failure>): {
  destroy(): void;
}
```
`
This action enhances a `&#x3C;form>` element that otherwise would work without JavaScript.
The `submit` function is called upon submission with the given FormData and the `action` that should be triggered. If `cancel` is called, the form will not be submitted. You can use the abort `controller` to cancel the submission in case another one starts. If a function is returned, that function is called with the response from the server. If nothing is returned, the fallback will be used.
If this function or its return value isn’t set, it
  * falls back to updating the `form` prop with the returned data if the action is on the same page as the form
  * updates `page.status`
  * resets the `&#x3C;form>` element and invalidates all data in case of successful submission with no redirect response
  * redirects in case of a redirect response
  * redirects to the nearest error page in case of an unexpected error


If you provide a custom function with a callback and want to use the default behavior, invoke `update` in your callback.
@paramform_element The form element
@paramsubmit Submit callback
enhance } from '$app/forms';`
```

## applyAction
This action updates the `form` property of the current page with the given data and updates `page.status`. In case of an error, it redirects to the nearest error page.
```
function applyAction<
	Success extends Record<string, unknown> | undefined,
	Failure extends Record<string, unknown> | undefined
>(
	result: import('@sveltejs/kit').ActionResult<
		Success,
		Failure
	>
): Promise<void>;
```

## deserialize
Use this function to deserialize the response from a form submission. Usage:
```
import { function deserialize<Success extends Record<string, unknown> | undefined, Failure extends Record<string, unknown> | undefined>(result: string): import("@sveltejs/kit").ActionResult<Success, Failure>
Use this function to deserialize the response from a form submission.
Usage:


```
import { deserialize } from '$app/forms';
async function handleSubmit(event) {
 const response = await fetch('/form?/action', {
	method: 'POST',
	body: new FormData(event.target)
 });
 const result = deserialize(await response.text());
 // ...
}
```

deserialize } from '$app/forms'; async function `function handleSubmit(event: any): Promise<void>`handleSubmit(`event: any`event) { const `const response: Response`response = await `function fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> (+1 overload)`
MDN Reference
fetch('/form?/action', { `RequestInit.method?: string | undefined`
A string to set request’s method.
method: 'POST', `RequestInit.body?: BodyInit | null | undefined`
A BodyInit object or null to set request’s body.
body: new `var FormData: new (form?: HTMLFormElement, submitter?: HTMLElement | null) => FormData`
Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to “multipart/form-data”.
MDN Reference
FormData(`event: any`event.target) }); const `const result: ActionResult<Record<string, unknown> | undefined, Record<string, unknown> | undefined>`result = `deserialize<Record<string, unknown> | undefined, Record<string, unknown> | undefined>(result: string): ActionResult<Record<string, unknown> | undefined, Record<string, unknown> | undefined>`
Use this function to deserialize the response from a form submission. Usage:
```
import { deserialize } from '$app/forms';
async function handleSubmit(event) {
 const response = await fetch('/form?/action', {
	method: 'POST',
	body: new FormData(event.target)
 });
 const result = deserialize(await response.text());
 // ...
}
```

deserialize(await `const response: Response`response.`Body.text(): Promise<string>`
MDN Reference
text()); // ... }`
```

```
function deserialize<
	Success extends Record<string, unknown> | undefined,
	Failure extends Record<string, unknown> | undefined
>(
	result: string
): import('@sveltejs/kit').ActionResult<Success, Failure>;
```

## enhance
This action enhances a `<form>` element that otherwise would work without JavaScript.
The `submit` function is called upon submission with the given FormData and the `action` that should be triggered. If `cancel` is called, the form will not be submitted. You can use the abort `controller` to cancel the submission in case another one starts. If a function is returned, that function is called with the response from the server. If nothing is returned, the fallback will be used.
If this function or its return value isn’t set, it
  * falls back to updating the `form` prop with the returned data if the action is on the same page as the form
  * updates `page.status`
  * resets the `<form>` element and invalidates all data in case of successful submission with no redirect response
  * redirects in case of a redirect response
  * redirects to the nearest error page in case of an unexpected error


If you provide a custom function with a callback and want to use the default behavior, invoke `update` in your callback. It accepts an options object
  * `reset: false` if you don’t want the `<form>` values to be reset after a successful submission
  * `invalidateAll: false` if you don’t want the action to call `invalidateAll` after submission


```
function enhance<
	Success extends Record<string, unknown> | undefined,
	Failure extends Record<string, unknown> | undefined
>(
	form_element: HTMLFormElement,
	submit?: import('@sveltejs/kit').SubmitFunction<
		Success,
		Failure
	>
): {
	destroy(): void;
};
```

Edit this page on GitHub
previous next
$app/environment $app/navigation
