Skip to main content
Similar to `$env/dynamic/private`, but only includes variables that begin with `config.kit.env.publicPrefix` (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
Dynamic environment variables cannot be used during prerendering.
```
import { import envenv } from '$env/dynamic/public';
var console: Console
The console module provides a simple debugging console that is similar to the
JavaScript console mechanism provided by web browsers.


The module exports two specific components:




  * A Console class with methods such as console.log(), console.error() and console.warn() that can be used to write to any Node.js stream.


  * A global console instance configured to write to process.stdout and
process.stderr. The global console can be used without calling require('console').




_**Warning**_: The global console object’s methods are neither consistently
synchronous like the browser APIs they resemble, nor are they consistently
asynchronous like all other Node.js streams. See the note on process I/O for
more information.


Example using the global console:


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

Example using the`Console` class:
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
log(`import env`env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);`
```

Edit this page on GitHub
previous next
$env/dynamic/private $env/static/private
