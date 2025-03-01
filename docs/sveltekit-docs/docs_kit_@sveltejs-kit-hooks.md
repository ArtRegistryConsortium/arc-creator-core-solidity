Skip to main content
```
import { function sequence(...handlers: import("@sveltejs/kit").Handle[]): import("@sveltejs/kit").Handle
A helper function for sequencing multiple handle calls in a middleware-like manner.
The behavior for the handle options is as follows:




  * transformPageChunk is applied in reverse order and merged


  * preload is applied in forward order, the first option “wins” and no preload options after it are called


  * filterSerializedResponseHeaders behaves the same as preload




src/hooks.server
```
import { sequence } from '@sveltejs/kit/hooks';
/// type: import('@sveltejs/kit').Handle
async function first({ event, resolve }) {
	console.log('first pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// transforms are applied in reverse order
			console.log('first transform');
			return html;
		},
		preload: () => {
			// this one wins as it's the first defined in the chain
			console.log('first preload');
			return true;
		}
	});
	console.log('first post-processing');
	return result;
}
/// type: import('@sveltejs/kit').Handle
async function second({ event, resolve }) {
	console.log('second pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log('second transform');
			return html;
		},
		preload: () => {
			console.log('second preload');
			return true;
		},
		filterSerializedResponseHeaders: () => {
			// this one wins as it's the first defined in the chain
			console.log('second filterSerializedResponseHeaders');
			return true;
		}
	});
	console.log('second post-processing');
	return result;
}
export const handle = sequence(first, second);
```

The example above would print:
```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

@paramhandlers The chain of `handle` functions
sequence } from '@sveltejs/kit/hooks';`
```

## sequence
A helper function for sequencing multiple `handle` calls in a middleware-like manner. The behavior for the `handle` options is as follows:
  * `transformPageChunk` is applied in reverse order and merged
  * `preload` is applied in forward order, the first option “wins” and no `preload` options after it are called
  * `filterSerializedResponseHeaders` behaves the same as `preload`


src/hooks.server
```
import { function sequence(...handlers: import("@sveltejs/kit").Handle[]): import("@sveltejs/kit").Handle
A helper function for sequencing multiple handle calls in a middleware-like manner.
The behavior for the handle options is as follows:




  * transformPageChunk is applied in reverse order and merged


  * preload is applied in forward order, the first option “wins” and no preload options after it are called


  * filterSerializedResponseHeaders behaves the same as preload




src/hooks.server
```
import { sequence } from '@sveltejs/kit/hooks';
/// type: import('@sveltejs/kit').Handle
async function first({ event, resolve }) {
	console.log('first pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// transforms are applied in reverse order
			console.log('first transform');
			return html;
		},
		preload: () => {
			// this one wins as it's the first defined in the chain
			console.log('first preload');
			return true;
		}
	});
	console.log('first post-processing');
	return result;
}
/// type: import('@sveltejs/kit').Handle
async function second({ event, resolve }) {
	console.log('second pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log('second transform');
			return html;
		},
		preload: () => {
			console.log('second preload');
			return true;
		},
		filterSerializedResponseHeaders: () => {
			// this one wins as it's the first defined in the chain
			console.log('second filterSerializedResponseHeaders');
			return true;
		}
	});
	console.log('second post-processing');
	return result;
}
export const handle = sequence(first, second);
```

The example above would print:
```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

@paramhandlers The chain of `handle` functions
sequence } from '@sveltejs/kit/hooks'; /** @type {import('@sveltejs/kit').Handle} */ async function ````
function first({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
first({ `event: any`event, `resolve: any`resolve }) { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first pre-processing'); const `const result: any`result = await `resolve: any`resolve(`event: any`event, { ````
transformPageChunk: ({ html }: {
  html: any;
}) => any
```
`transformPageChunk: ({ `html: any`html }) => { // transforms are applied in reverse order `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first transform'); return `html: any`html; }, `preload: () => boolean`preload: () => { // this one wins as it's the first defined in the chain `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first preload'); return true; } }); `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first post-processing'); return `const result: any`result; } /** @type {import('@sveltejs/kit').Handle} */ async function ````
function second({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
second({ `event: any`event, `resolve: any`resolve }) { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second pre-processing'); const `const result: any`result = await `resolve: any`resolve(`event: any`event, { ````
transformPageChunk: ({ html }: {
  html: any;
}) => any
```
`transformPageChunk: ({ `html: any`html }) => { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second transform'); return `html: any`html; }, `preload: () => boolean`preload: () => { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second preload'); return true; }, `filterSerializedResponseHeaders: () => boolean`filterSerializedResponseHeaders: () => { // this one wins as it's the first defined in the chain `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second filterSerializedResponseHeaders'); return true; } }); `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second post-processing'); return `const result: any`result; } export const `const handle: Handle`handle = `function sequence(...handlers: import("@sveltejs/kit").Handle[]): import("@sveltejs/kit").Handle`
A helper function for sequencing multiple `handle` calls in a middleware-like manner. The behavior for the `handle` options is as follows:
  * `transformPageChunk` is applied in reverse order and merged
  * `preload` is applied in forward order, the first option “wins” and no `preload` options after it are called
  * `filterSerializedResponseHeaders` behaves the same as `preload`


src/hooks.server
```
import { sequence } from '@sveltejs/kit/hooks';
/// type: import('@sveltejs/kit').Handle
async function first({ event, resolve }) {
	console.log('first pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// transforms are applied in reverse order
			console.log('first transform');
			return html;
		},
		preload: () => {
			// this one wins as it's the first defined in the chain
			console.log('first preload');
			return true;
		}
	});
	console.log('first post-processing');
	return result;
}
/// type: import('@sveltejs/kit').Handle
async function second({ event, resolve }) {
	console.log('second pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log('second transform');
			return html;
		},
		preload: () => {
			console.log('second preload');
			return true;
		},
		filterSerializedResponseHeaders: () => {
			// this one wins as it's the first defined in the chain
			console.log('second filterSerializedResponseHeaders');
			return true;
		}
	});
	console.log('second post-processing');
	return result;
}
export const handle = sequence(first, second);
```

The example above would print:
```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

@paramhandlers The chain of `handle` functions
sequence(````
function first({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
first, ````
function second({ event, resolve }: {
  event: any;
  resolve: any;
}): Promise<any>
```
`
@type{import('@sveltejs/kit').Handle}
second);`
```
```
import { function sequence(...handlers: import("@sveltejs/kit").Handle[]): import("@sveltejs/kit").Handle
A helper function for sequencing multiple handle calls in a middleware-like manner.
The behavior for the handle options is as follows:




  * transformPageChunk is applied in reverse order and merged


  * preload is applied in forward order, the first option “wins” and no preload options after it are called


  * filterSerializedResponseHeaders behaves the same as preload




src/hooks.server
```
import { sequence } from '@sveltejs/kit/hooks';
/// type: import('@sveltejs/kit').Handle
async function first({ event, resolve }) {
	console.log('first pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// transforms are applied in reverse order
			console.log('first transform');
			return html;
		},
		preload: () => {
			// this one wins as it's the first defined in the chain
			console.log('first preload');
			return true;
		}
	});
	console.log('first post-processing');
	return result;
}
/// type: import('@sveltejs/kit').Handle
async function second({ event, resolve }) {
	console.log('second pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log('second transform');
			return html;
		},
		preload: () => {
			console.log('second preload');
			return true;
		},
		filterSerializedResponseHeaders: () => {
			// this one wins as it's the first defined in the chain
			console.log('second filterSerializedResponseHeaders');
			return true;
		}
	});
	console.log('second post-processing');
	return result;
}
export const handle = sequence(first, second);
```

The example above would print:
```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

@paramhandlers The chain of `handle` functions
sequence } from '@sveltejs/kit/hooks'; import type { ````
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle } from '@sveltejs/kit'; const `const first: Handle`first: ````
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first pre-processing'); const `const result: Response`result = await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
ResolveOptions.transformPageChunk?(input: {
  html: string;
  done: boolean;
}): MaybePromise<string | undefined>
```
`
Applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
@paraminput the html chunk and the info if this is the last chunk
transformPageChunk: ({ `html: string`html }) => { // transforms are applied in reverse order `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first transform'); return `html: string`html; }, ````
ResolveOptions.preload?(input: {
  type: "font" | "css" | "js" | "asset";
  path: string;
}): boolean
```
`
Determines what should be added to the `&#x3C;head>` tag to preload it. By default, `js` and `css` files will be preloaded.
@paraminput the type of the file and its path
preload: () => { // this one wins as it's the first defined in the chain `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first preload'); return true; } }); `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('first post-processing'); return `const result: Response`result; }; const `const second: Handle`second: ````
type Handle = (input: {
  event: RequestEvent;
  resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}) => MaybePromise<...>
```
`
The `handle` hook runs every time the SvelteKit server receives a request and determines the response. It receives an `event` object representing the request and a function called `resolve`, which renders the route and generates a `Response`. This allows you to modify response headers or bodies, or bypass SvelteKit entirely (for implementing routes programmatically, for example).
Handle = async ({ `event: RequestEvent<Partial<Record<string, string>>, string | null>`event, `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve }) => { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second pre-processing'); const `const result: Response`result = await `resolve: (event: RequestEvent, opts?: ResolveOptions) => MaybePromise<Response>`resolve(`event: RequestEvent<Partial<Record<string, string>>, string | null>`event, { ````
ResolveOptions.transformPageChunk?(input: {
  html: string;
  done: boolean;
}): MaybePromise<string | undefined>
```
`
Applies custom transforms to HTML. If `done` is true, it’s the final chunk. Chunks are not guaranteed to be well-formed HTML (they could include an element’s opening tag but not its closing tag, for example) but they will always be split at sensible boundaries such as `%sveltekit.head%` or layout/page components.
@paraminput the html chunk and the info if this is the last chunk
transformPageChunk: ({ `html: string`html }) => { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second transform'); return `html: string`html; }, ````
ResolveOptions.preload?(input: {
  type: "font" | "css" | "js" | "asset";
  path: string;
}): boolean
```
`
Determines what should be added to the `&#x3C;head>` tag to preload it. By default, `js` and `css` files will be preloaded.
@paraminput the type of the file and its path
preload: () => { `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second preload'); return true; }, `ResolveOptions.filterSerializedResponseHeaders?(name: string, value: string): boolean`
Determines which headers should be included in serialized responses when a `load` function loads a resource with `fetch`. By default, none will be included.
@paramname header name
@paramvalue header value
filterSerializedResponseHeaders: () => { // this one wins as it's the first defined in the chain `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second filterSerializedResponseHeaders'); return true; } }); `var console: Console`
The `console` module provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.
The module exports two specific components:
  * A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.
  * A global `console` instance configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('console')`.


_**Warning**_ : The global console object’s methods are neither consistently synchronous like the browser APIs they resemble, nor are they consistently asynchronous like all other Node.js streams. See the `note on process I/O` for more information.
Example using the global `console`:
```
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//  Error: Whoops, something bad happened
//   at [eval]:5:15
//   at Script.runInThisContext (node:vm:132:18)
//   at Object.runInThisContext (node:vm:309:38)
//   at node:internal/process/execution:77:19
//   at [eval]-wrapper:6:22
//   at evalScript (node:internal/process/execution:76:60)
//   at node:internal/main/eval_string:23:3
const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr
```

Example using the `Console` class:
```
const out = getStreamSomehow();
const err = getStreamSomehow();
const myConsole = new console.Console(out, err);
myConsole.log('hello world');
// Prints: hello world, to out
myConsole.log('hello %s', 'world');
// Prints: hello world, to out
myConsole.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to err
const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to err
```

@seesource
console.`Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)`
Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
```
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.
@sincev0.1.100
log('second post-processing'); return `const result: Response`result; }; export const `const handle: Handle`handle = `function sequence(...handlers: import("@sveltejs/kit").Handle[]): import("@sveltejs/kit").Handle`
A helper function for sequencing multiple `handle` calls in a middleware-like manner. The behavior for the `handle` options is as follows:
  * `transformPageChunk` is applied in reverse order and merged
  * `preload` is applied in forward order, the first option “wins” and no `preload` options after it are called
  * `filterSerializedResponseHeaders` behaves the same as `preload`


src/hooks.server
```
import { sequence } from '@sveltejs/kit/hooks';
/// type: import('@sveltejs/kit').Handle
async function first({ event, resolve }) {
	console.log('first pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// transforms are applied in reverse order
			console.log('first transform');
			return html;
		},
		preload: () => {
			// this one wins as it's the first defined in the chain
			console.log('first preload');
			return true;
		}
	});
	console.log('first post-processing');
	return result;
}
/// type: import('@sveltejs/kit').Handle
async function second({ event, resolve }) {
	console.log('second pre-processing');
	const result = await resolve(event, {
		transformPageChunk: ({ html }) => {
			console.log('second transform');
			return html;
		},
		preload: () => {
			console.log('second preload');
			return true;
		},
		filterSerializedResponseHeaders: () => {
			// this one wins as it's the first defined in the chain
			console.log('second filterSerializedResponseHeaders');
			return true;
		}
	});
	console.log('second post-processing');
	return result;
}
export const handle = sequence(first, second);
```

The example above would print:
```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

@paramhandlers The chain of `handle` functions
sequence(`const first: Handle`first, `const second: Handle`second);`
```

The example above would print:
```
first pre-processing
first preload
second pre-processing
second filterSerializedResponseHeaders
second transform
first transform
second post-processing
first post-processing
```

```
function sequence(
	...handlers: import('@sveltejs/kit').Handle[]
): import('@sveltejs/kit').Handle;
```

Edit this page on GitHub
previous next
@sveltejs/kit @sveltejs/kit/node/polyfills
