![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * SMTChecker and Formal Verification
  * Edit on GitHub


# SMTChecker and Formal Verification
Using formal verification it is possible to perform an automated mathematical proof that your source code fulfills a certain formal specification. The specification is still formal (just as the source code), but usually much simpler.
Note that formal verification itself can only help you understand the difference between what you did (the specification) and how you did it (the actual implementation). You still need to check whether the specification is what you wanted and that you did not miss any unintended effects of it.
Solidity implements a formal verification approach based on SMT (Satisfiability Modulo Theories) and Horn solving. The SMTChecker module automatically tries to prove that the code satisfies the specification given by `require` and `assert` statements. That is, it considers `require` statements as assumptions and tries to prove that the conditions inside `assert` statements are always true. If an assertion failure is found, a counterexample may be given to the user showing how the assertion can be violated. If no warning is given by the SMTChecker for a property, it means that the property is safe.
The other verification targets that the SMTChecker checks at compile time are:
  * Arithmetic underflow and overflow.
  * Division by zero.
  * Trivial conditions and unreachable code.
  * Popping an empty array.
  * Out of bounds index access.
  * Insufficient funds for a transfer.


All the targets above are automatically checked by default if all engines are enabled, except underflow and overflow for Solidity >=0.8.7.
The potential warnings that the SMTChecker reports are:
  * `<failing  property> happens here.`. This means that the SMTChecker proved that a certain property fails. A counterexample may be given, however in complex situations it may also not show a counterexample. This result may also be a false positive in certain cases, when the SMT encoding adds abstractions for Solidity code that is either hard or impossible to express.
  * `<failing property> might happen here`. This means that the solver could not prove either case within the given timeout. Since the result is unknown, the SMTChecker reports the potential failure for soundness. This may be solved by increasing the query timeout, but the problem might also simply be too hard for the engine to solve.


To enable the SMTChecker, you must select which engine should run, where the default is no engine. Selecting the engine enables the SMTChecker on all files.
Note
Prior to Solidity 0.8.4, the default way to enable the SMTChecker was via `pragma experimental SMTChecker;` and only the contracts containing the pragma would be analyzed. That pragma has been deprecated, and although it still enables the SMTChecker for backwards compatibility, it will be removed in Solidity 0.9.0. Note also that now using the pragma even in a single file enables the SMTChecker for all files.
Note
The lack of warnings for a verification target represents an undisputed mathematical proof of correctness, assuming no bugs in the SMTChecker and the underlying solver. Keep in mind that these problems are _very hard_ and sometimes _impossible_ to solve automatically in the general case. Therefore, several properties might not be solved or might lead to false positives for large contracts. Every proven property should be seen as an important achievement. For advanced users, see SMTChecker Tuning to learn a few options that might help proving more complex properties.
## Tutorial
### Overflow
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractOverflow{
uintimmutablex;
uintimmutabley;
functionadd(uintx_,uinty_)internalpurereturns(uint){
returnx_+y_;
}
constructor(uintx_,uinty_){
(x,y)=(x_,y_);
}
functionstateAdd()publicviewreturns(uint){
returnadd(x,y);
}
}

```

The contract above shows an overflow check example. The SMTChecker does not check underflow and overflow by default for Solidity >=0.8.7, so we need to use the command-line option `--model-checker-targets "underflow,overflow"` or the JSON option `settings.modelChecker.targets = ["underflow", "overflow"]`. See this section for targets configuration. Here, it reports the following:
```
Warning: CHC: Overflow (resulting value larger than 2**256 - 1) happens here.
Counterexample:
x = 1, y = 115792089237316195423570985008687907853269984665640564039457584007913129639935
 = 0
Transaction trace:
Overflow.constructor(1, 115792089237316195423570985008687907853269984665640564039457584007913129639935)
State: x = 1, y = 115792089237316195423570985008687907853269984665640564039457584007913129639935
Overflow.stateAdd()
  Overflow.add(1, 115792089237316195423570985008687907853269984665640564039457584007913129639935) -- internal call
 --> o.sol:9:20:
 |
9 |       return x_ + y_;
 |          ^^^^^^^

```

If we add `require` statements that filter out overflow cases, the SMTChecker proves that no overflow is reachable (by not reporting warnings):
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractOverflow{
uintimmutablex;
uintimmutabley;
functionadd(uintx_,uinty_)internalpurereturns(uint){
returnx_+y_;
}
constructor(uintx_,uinty_){
(x,y)=(x_,y_);
}
functionstateAdd()publicviewreturns(uint){
require(x<type(uint128).max);
require(y<type(uint128).max);
returnadd(x,y);
}
}

```

### Assert
An assertion represents an invariant in your code: a property that must be true _for all transactions, including all input and storage values_ , otherwise there is a bug.
The code below defines a function `f` that guarantees no overflow. Function `inv` defines the specification that `f` is monotonically increasing: for every possible pair `(a, b)`, if `b > a` then `f(b) > f(a)`. Since `f` is indeed monotonically increasing, the SMTChecker proves that our property is correct. You are encouraged to play with the property and the function definition to see what results come out!
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractMonotonic{
functionf(uintx)internalpurereturns(uint){
require(x<type(uint128).max);
returnx*42;
}
functioninv(uinta,uintb)publicpure{
require(b>a);
assert(f(b)>f(a));
}
}

```

We can also add assertions inside loops to verify more complicated properties. The following code searches for the maximum element of an unrestricted array of numbers, and asserts the property that the found element must be greater or equal every element in the array.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractMax{
functionmax(uint[]memorya)publicpurereturns(uint){
uintm=0;
for(uinti=0;i<a.length;++i)
if(a[i]>m)
m=a[i];
for(uinti=0;i<a.length;++i)
assert(m>=a[i]);
returnm;
}
}

```

Note that in this example the SMTChecker will automatically try to prove three properties:
  1. `++i` in the first loop does not overflow.
  2. `++i` in the second loop does not overflow.
  3. The assertion is always true.


Note
The properties involve loops, which makes it _much much_ harder than the previous examples, so beware of loops!
All the properties are correctly proven safe. Feel free to change the properties and/or add restrictions on the array to see different results. For example, changing the code to
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractMax{
functionmax(uint[]memorya)publicpurereturns(uint){
require(a.length>=5);
uintm=0;
for(uinti=0;i<a.length;++i)
if(a[i]>m)
m=a[i];
for(uinti=0;i<a.length;++i)
assert(m>a[i]);
returnm;
}
}

```

gives us:
```
Warning: CHC: Assertion violation happens here.
Counterexample:
a = [0, 0, 0, 0, 0]
 = 0
Transaction trace:
Test.constructor()
Test.max([0, 0, 0, 0, 0])
 --> max.sol:14:4:
  |
14 |      assert(m > a[i]);

```

### State Properties
So far the examples only demonstrated the use of the SMTChecker over pure code, proving properties about specific operations or algorithms. A common type of properties in smart contracts are properties that involve the state of the contract. Multiple transactions might be needed to make an assertion fail for such a property.
As an example, consider a 2D grid where both axis have coordinates in the range (-2^128, 2^128 - 1). Let us place a robot at position (0, 0). The robot can only move diagonally, one step at a time, and cannot move outside the grid. The robot’s state machine can be represented by the smart contract below.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractRobot{
intx=0;
inty=0;
modifierwall{
require(x>type(int128).min&&x<type(int128).max);
require(y>type(int128).min&&y<type(int128).max);
_;
}
functionmoveLeftUp()wallpublic{
--x;
++y;
}
functionmoveLeftDown()wallpublic{
--x;
--y;
}
functionmoveRightUp()wallpublic{
++x;
++y;
}
functionmoveRightDown()wallpublic{
++x;
--y;
}
functioninv()publicview{
assert((x+y)%2==0);
}
}

```

Function `inv` represents an invariant of the state machine that `x + y` must be even. The SMTChecker manages to prove that regardless how many commands we give the robot, even if infinitely many, the invariant can _never_ fail. The interested reader may want to prove that fact manually as well. Hint: this invariant is inductive.
We can also trick the SMTChecker into giving us a path to a certain position we think might be reachable. We can add the property that (2, 4) is _not_ reachable, by adding the following function.
open in Remix
```
functionreach_2_4()publicview{
assert(!(x==2&&y==4));
}

```

This property is false, and while proving that the property is false, the SMTChecker tells us exactly _how_ to reach (2, 4):
```
Warning: CHC: Assertion violation happens here.
Counterexample:
x = 2, y = 4
Transaction trace:
Robot.constructor()
State: x = 0, y = 0
Robot.moveLeftUp()
State: x = (- 1), y = 1
Robot.moveRightUp()
State: x = 0, y = 2
Robot.moveRightUp()
State: x = 1, y = 3
Robot.moveRightUp()
State: x = 2, y = 4
Robot.reach_2_4()
 --> r.sol:35:4:
  |
35 |      assert(!(x == 2 && y == 4));
  |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^

```

Note that the path above is not necessarily deterministic, as there are other paths that could reach (2, 4). The choice of which path is shown might change depending on the used solver, its version, or just randomly.
### External Calls and Reentrancy
Every external call is treated as a call to unknown code by the SMTChecker. The reasoning behind that is that even if the code of the called contract is available at compile time, there is no guarantee that the deployed contract will indeed be the same as the contract where the interface came from at compile time.
In some cases, it is possible to automatically infer properties over state variables that are still true even if the externally called code can do anything, including reenter the caller contract.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
interfaceUnknown{
functionrun()external;
}
contractMutex{
uintx;
boollock;
Unknownimmutableunknown;
constructor(Unknownu){
require(address(u)!=address(0));
unknown=u;
}
modifiermutex{
require(!lock);
lock=true;
_;
lock=false;
}
functionset(uintx_)mutexpublic{
x=x_;
}
functionrun()mutexpublic{
uintxPre=x;
unknown.run();
assert(xPre==x);
}
}

```

The example above shows a contract that uses a mutex flag to forbid reentrancy. The solver is able to infer that when `unknown.run()` is called, the contract is already “locked”, so it would not be possible to change the value of `x`, regardless of what the unknown called code does.
If we “forget” to use the `mutex` modifier on function `set`, the SMTChecker is able to synthesize the behavior of the externally called code so that the assertion fails:
```
Warning: CHC: Assertion violation happens here.
Counterexample:
x = 1, lock = true, unknown = 1
Transaction trace:
Mutex.constructor(1)
State: x = 0, lock = false, unknown = 1
Mutex.run()
  unknown.run() -- untrusted external call, synthesized as:
    Mutex.set(1) -- reentrant call
 --> m.sol:32:3:
  |
32 |        assert(xPre == x);
  |        ^^^^^^^^^^^^^^^^^

```

## SMTChecker Options and Tuning
### Timeout
The SMTChecker uses a hardcoded resource limit (`rlimit`) chosen per solver, which is not precisely related to time. We chose the `rlimit` option as the default because it gives more determinism guarantees than time inside the solver.
This options translates roughly to “a few seconds timeout” per query. Of course many properties are very complex and need a lot of time to be solved, where determinism does not matter. If the SMTChecker does not manage to solve the contract properties with the default `rlimit`, a timeout can be given in milliseconds via the CLI option `--model-checker-timeout <time>` or the JSON option `settings.modelChecker.timeout=<time>`, where 0 means no timeout.
### Verification Targets
The types of verification targets created by the SMTChecker can also be customized via the CLI option `--model-checker-target <targets>` or the JSON option `settings.modelChecker.targets=<targets>`. In the CLI case, `<targets>` is a no-space-comma-separated list of one or more verification targets, and an array of one or more targets as strings in the JSON input. The keywords that represent the targets are:
  * Assertions: `assert`.
  * Arithmetic underflow: `underflow`.
  * Arithmetic overflow: `overflow`.
  * Division by zero: `divByZero`.
  * Trivial conditions and unreachable code: `constantCondition`.
  * Popping an empty array: `popEmptyArray`.
  * Out of bounds array/fixed bytes index access: `outOfBounds`.
  * Insufficient funds for a transfer: `balance`.
  * All of the above: `default` (CLI only).


A common subset of targets might be, for example: `--model-checker-targets assert,overflow`.
All targets are checked by default, except underflow and overflow for Solidity >=0.8.7.
There is no precise heuristic on how and when to split verification targets, but it can be useful especially when dealing with large contracts.
### Proved Targets
If there are any proved targets, the SMTChecker issues one warning per engine stating how many targets were proved. If the user wishes to see all the specific proved targets, the CLI option `--model-checker-show-proved-safe` and the JSON option `settings.modelChecker.showProvedSafe = true` can be used.
### Unproved Targets
If there are any unproved targets, the SMTChecker issues one warning stating how many unproved targets there are. If the user wishes to see all the specific unproved targets, the CLI option `--model-checker-show-unproved` and the JSON option `settings.modelChecker.showUnproved = true` can be used.
### Unsupported Language Features
Certain Solidity language features are not completely supported by the SMT encoding that the SMTChecker applies, for example assembly blocks. The unsupported construct is abstracted via overapproximation to preserve soundness, meaning any properties reported safe are safe even though this feature is unsupported. However such abstraction may cause false positives when the target properties depend on the precise behavior of the unsupported feature. If the encoder encounters such cases it will by default report a generic warning stating how many unsupported features it has seen. If the user wishes to see all the specific unsupported features, the CLI option `--model-checker-show-unsupported` and the JSON option `settings.modelChecker.showUnsupported = true` can be used, where their default value is `false`.
### Verified Contracts
By default all the deployable contracts in the given sources are analyzed separately as the one that will be deployed. This means that if a contract has many direct and indirect inheritance parents, all of them will be analyzed on their own, even though only the most derived will be accessed directly on the blockchain. This causes an unnecessary burden on the SMTChecker and the solver. To aid cases like this, users can specify which contracts should be analyzed as the deployed one. The parent contracts are of course still analyzed, but only in the context of the most derived contract, reducing the complexity of the encoding and generated queries. Note that abstract contracts are by default not analyzed as the most derived by the SMTChecker.
The chosen contracts can be given via a comma-separated list (whitespace is not allowed) of <source>:<contract> pairs in the CLI: `--model-checker-contracts "<source1.sol:contract1>,<source2.sol:contract2>,<source2.sol:contract3>"`, and via the object `settings.modelChecker.contracts` in the JSON input, which has the following form:
```
"contracts":{
"source1.sol":["contract1"],
"source2.sol":["contract2","contract3"]
}

```

### Trusted External Calls
By default, the SMTChecker does not assume that compile-time available code is the same as the runtime code for external calls. Take the following contracts as an example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractExt{
uintpublic x;
functionsetX(uint_x)public{x=_x;}
}
contractMyContract{
functioncallExt(Ext_e)public{
_e.setX(42);
assert(_e.x()==42);
}
}

```

When `MyContract.callExt` is called, an address is given as the argument. At deployment time, we cannot know for sure that address `_e` actually contains a deployment of contract `Ext`. Therefore, the SMTChecker will warn that the assertion above can be violated, which is true, if `_e` contains another contract than `Ext`.
However, it can be useful to treat these external calls as trusted, for example, to test that different implementations of an interface conform to the same property. This means assuming that address `_e` indeed was deployed as contract `Ext`. This mode can be enabled via the CLI option `--model-checker-ext-calls=trusted` or the JSON field `settings.modelChecker.extCalls: "trusted"`.
Please be aware that enabling this mode can make the SMTChecker analysis much more computationally costly.
An important part of this mode is that it is applied to contract types and high level external calls to contracts, and not low level calls such as `call` and `delegatecall`. The storage of an address is stored per contract type, and the SMTChecker assumes that an externally called contract has the type of the caller expression. Therefore, casting an `address` or a contract to different contract types will yield different storage values and can give unsound results if the assumptions are inconsistent, such as the example below:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractD{
constructor(uint_x){x=_x;}
uintpublic x;
functionsetX(uint_x)public{x=_x;}
}
contractE{
constructor(){x=2;}
uintpublic x;
functionsetX(uint_x)public{x=_x;}
}
contractC{
functionf()public{
addressd=address(newD(42));
// `d` was deployed as `D`, so its `x` should be 42 now.
assert(D(d).x()==42);// should hold
assert(D(d).x()==43);// should fail
// E and D have the same interface, so the following
// call would also work at runtime.
// However, the change to `E(d)` is not reflected in `D(d)`.
E(d).setX(1024);
// Reading from `D(d)` now will show old values.
// The assertion below should fail at runtime,
// but succeeds in this mode's analysis (unsound).
assert(D(d).x()==42);
// The assertion below should succeed at runtime,
// but fails in this mode's analysis (false positive).
assert(D(d).x()==1024);
}
}

```

Due to the above, make sure that the trusted external calls to a certain variable of `address` or `contract` type always have the same caller expression type.
It is also helpful to cast the called contract’s variable as the type of the most derived type in case of inheritance.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
interfaceToken{
functionbalanceOf(address_a)externalviewreturns(uint);
functiontransfer(address_to,uint_amt)external;
}
contractTokenCorrectisToken{
mapping(address=>uint)balance;
constructor(address_a,uint_b){
balance[_a]=_b;
}
functionbalanceOf(address_a)publicviewoverridereturns(uint){
returnbalance[_a];
}
functiontransfer(address_to,uint_amt)publicoverride{
require(balance[msg.sender]>=_amt);
balance[msg.sender]-=_amt;
balance[_to]+=_amt;
}
}
contractTest{
functionproperty_transfer(address_token,address_to,uint_amt)public{
require(_to!=address(this));
TokenCorrectt=TokenCorrect(_token);
uintxPre=t.balanceOf(address(this));
require(xPre>=_amt);
uintyPre=t.balanceOf(_to);
t.transfer(_to,_amt);
uintxPost=t.balanceOf(address(this));
uintyPost=t.balanceOf(_to);
assert(xPost==xPre-_amt);
assert(yPost==yPre+_amt);
}
}

```

Note that in function `property_transfer`, the external calls are performed on variable `t`.
Another caveat of this mode are calls to state variables of contract type outside the analyzed contract. In the code below, even though `B` deploys `A`, it is also possible for the address stored in `B.a` to be called by anyone outside of `B` in between transactions to `B` itself. To reflect the possible changes to `B.a`, the encoding allows an unbounded number of calls to be made to `B.a` externally. The encoding will keep track of `B.a`’s storage, therefore assertion (2) should hold. However, currently the encoding allows such calls to be made from `B` conceptually, therefore assertion (3) fails. Making the encoding stronger logically is an extension of the trusted mode and is under development. Note that the encoding does not keep track of storage for `address` variables, therefore if `B.a` had type `address` the encoding would assume that its storage does not change in between transactions to `B`.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractA{
uintpublic x;
addressimmutablepublicowner;
constructor(){
owner=msg.sender;
}
functionsetX(uint_x)public{
require(msg.sender==owner);
x=_x;
}
}
contractB{
Aa;
constructor(){
a=newA();
assert(a.x()==0);// (1) should hold
}
functiong()publicview{
assert(a.owner()==address(this));// (2) should hold
assert(a.x()==0);// (3) should hold, but fails due to a false positive
}
}

```

### Reported Inferred Inductive Invariants
For properties that were proved safe with the CHC engine, the SMTChecker can retrieve inductive invariants that were inferred by the Horn solver as part of the proof. Currently only two types of invariants can be reported to the user:
  * Contract Invariants: these are properties over the contract’s state variables that are true before and after every possible transaction that the contract may ever run. For example, `x >= y`, where `x` and `y` are a contract’s state variables.
  * Reentrancy Properties: they represent the behavior of the contract in the presence of external calls to unknown code. These properties can express a relation between the value of the state variables before and after the external call, where the external call is free to do anything, including making reentrant calls to the analyzed contract. Primed variables represent the state variables’ values after said external call. Example: `lock -> x = x'`.


The user can choose the type of invariants to be reported using the CLI option `--model-checker-invariants "contract,reentrancy"` or as an array in the field `settings.modelChecker.invariants` in the JSON input. By default the SMTChecker does not report invariants.
### Division and Modulo With Slack Variables
Spacer, the default Horn solver used by the SMTChecker, often dislikes division and modulo operations inside Horn rules. Because of that, by default the Solidity division and modulo operations are encoded using the constraint `a = b * d + m` where `d = a / b` and `m = a % b`. However, other solvers, such as Eldarica, prefer the syntactically precise operations. The command-line flag `--model-checker-div-mod-no-slacks` and the JSON option `settings.modelChecker.divModNoSlacks` can be used to toggle the encoding depending on the used solver preferences.
### Natspec Function Abstraction
Certain functions including common math methods such as `pow` and `sqrt` may be too complex to be analyzed in a fully automated way. These functions can be annotated with Natspec tags that indicate to the SMTChecker that these functions should be abstracted. This means that the body of the function is not used, and when called, the function will:
  * Return a nondeterministic value, and either keep the state variables unchanged if the abstracted function is view/pure, or also set the state variables to nondeterministic values otherwise. This can be used via the annotation `/// @custom:smtchecker abstract-function-nondet`.
  * Act as an uninterpreted function. This means that the semantics of the function (given by the body) are ignored, and the only property this function has is that given the same input it guarantees the same output. This is currently under development and will be available via the annotation `/// @custom:smtchecker abstract-function-uf`.


### Model Checking Engines
The SMTChecker module implements two different reasoning engines, a Bounded Model Checker (BMC) and a system of Constrained Horn Clauses (CHC). Both engines are currently under development, and have different characteristics. The engines are independent and every property warning states from which engine it came. Note that all the examples above with counterexamples were reported by CHC, the more powerful engine.
By default both engines are used, where CHC runs first, and every property that was not proven is passed over to BMC. You can choose a specific engine via the CLI option `--model-checker-engine {all,bmc,chc,none}` or the JSON option `settings.modelChecker.engine={all,bmc,chc,none}`.
#### Bounded Model Checker (BMC)
The BMC engine analyzes functions in isolation, that is, it does not take the overall behavior of the contract over multiple transactions into account when analyzing each function. Loops are also ignored in this engine at the moment. Internal function calls are inlined as long as they are not recursive, directly or indirectly. External function calls are inlined if possible. Knowledge that is potentially affected by reentrancy is erased.
The characteristics above make BMC prone to reporting false positives, but it is also lightweight and should be able to quickly find small local bugs.
#### Constrained Horn Clauses (CHC)
A contract’s Control Flow Graph (CFG) is modelled as a system of Horn clauses, where the life cycle of the contract is represented by a loop that can visit every public/external function non-deterministically. This way, the behavior of the entire contract over an unbounded number of transactions is taken into account when analyzing any function. Loops are fully supported by this engine. Internal function calls are supported, and external function calls assume the called code is unknown and can do anything.
The CHC engine is much more powerful than BMC in terms of what it can prove, and might require more computing resources.
### SMT and Horn solvers
The two engines detailed above use automated theorem provers as their logical backends. BMC uses an SMT solver, whereas CHC uses a Horn solver. Often the same tool can act as both, as seen in z3, which is primarily an SMT solver and makes Spacer available as a Horn solver, and Eldarica which does both.
The user can choose which solvers should be used, if available, via the CLI option `--model-checker-solvers {all,cvc5,eld,smtlib2,z3}` or the JSON option `settings.modelChecker.solvers=[smtlib2,z3]`, where:
  * `cvc5` is used via its binary which must be installed in the system. Only BMC uses `cvc5`.
  * `eld` is used via its binary which must be installed in the system. Only CHC uses `eld`, and only if `z3` is not enabled.
  * `smtlib2` outputs SMT/Horn queries in the smtlib2 format. These can be used together with the compiler’s callback mechanism so that any solver binary from the system can be employed to synchronously return the results of the queries to the compiler. This can be used by both BMC and CHC depending on which solvers are called.
  * `z3` is available statically in `soljson.js` (from Solidity 0.6.9), that is, the JavaScript binary of the compiler. Otherwise it is used via its binary which must be installed in the system.


Note
z3 version 4.8.16 broke ABI compatibility with previous versions and cannot be used with solc <=0.8.13. If you are using z3 >=4.8.16 please use solc >=0.8.14, and conversely, only use older z3 with older solc releases. We also recommend using the latest z3 release which is what SMTChecker also does.
Since both BMC and CHC use `z3`, and `z3` is available in a greater variety of environments, including in the browser, most users will almost never need to be concerned about this option. More advanced users might apply this option to try alternative solvers on more complex problems.
Please note that certain combinations of chosen engine and solver will lead to the SMTChecker doing nothing, for example choosing CHC and `cvc5`.
## Abstraction and False Positives
The SMTChecker implements abstractions in an incomplete and sound way: If a bug is reported, it might be a false positive introduced by abstractions (due to erasing knowledge or using a non-precise type). If it determines that a verification target is safe, it is indeed safe, that is, there are no false negatives (unless there is a bug in the SMTChecker).
If a target cannot be proven you can try to help the solver by using the tuning options in the previous section. If you are sure of a false positive, adding `require` statements in the code with more information may also give some more power to the solver.
### SMT Encoding and Types
The SMTChecker encoding tries to be as precise as possible, mapping Solidity types and expressions to their closest SMT-LIB representation, as shown in the table below.
Solidity type | SMT sort | Theories  
---|---|---  
Boolean | Bool | Bool  
intN, uintN, address, bytesN, enum, contract | Integer | LIA, NIA  
array, mapping, bytes, string | Tuple (Array elements, Integer length) | Datatypes, Arrays, LIA  
struct | Tuple | Datatypes  
other types | Integer | LIA  
Types that are not yet supported are abstracted by a single 256-bit unsigned integer, where their unsupported operations are ignored.
For more details on how the SMT encoding works internally, see the paper SMT-based Verification of Solidity Smart Contracts.
### Function Calls
In the BMC engine, function calls to the same contract (or base contracts) are inlined when possible, that is, when their implementation is available. Calls to functions in other contracts are not inlined even if their code is available, since we cannot guarantee that the actual deployed code is the same.
The CHC engine creates nonlinear Horn clauses that use summaries of the called functions to support internal function calls. External function calls are treated as calls to unknown code, including potential reentrant calls.
Complex pure functions are abstracted by an uninterpreted function (UF) over the arguments.
Functions | BMC/CHC behavior  
---|---  
`assert` | Verification target.  
`require` | Assumption.  
internal call | BMC: Inline function call. CHC: Function summaries.  
external call to known code | BMC: Inline function call or erase knowledge about state variables and local storage references. CHC: Assume called code is unknown. Try to infer invariants that hold after the call returns.  
Storage array push/pop | Supported precisely. Checks whether it is popping an empty array.  
ABI functions | Abstracted with UF.  
`addmod`, `mulmod` | Supported precisely.  
`gasleft`, `blobhash`, `blockhash`, `keccak256`, `ecrecover`, `ripemd160` | Abstracted with UF.  
pure functions without implementation (external or complex) | Abstracted with UF  
external functions without implementation | BMC: Erase state knowledge and assume result is nondeterministic. CHC: Nondeterministic summary. Try to infer invariants that hold after the call returns.  
transfer | BMC: Checks whether the contract’s balance is sufficient. CHC: does not yet perform the check.  
others | Currently unsupported  
Using abstraction means loss of precise knowledge, but in many cases it does not mean loss of proving power.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractRecover
{
functionf(
bytes32hash,
uint8v1,uint8v2,
bytes32r1,bytes32r2,
bytes32s1,bytes32s2
)publicpurereturns(address){
addressa1=ecrecover(hash,v1,r1,s1);
require(v1==v2);
require(r1==r2);
require(s1==s2);
addressa2=ecrecover(hash,v2,r2,s2);
assert(a1==a2);
returna1;
}
}

```

In the example above, the SMTChecker is not expressive enough to actually compute `ecrecover`, but by modelling the function calls as uninterpreted functions we know that the return value is the same when called on equivalent parameters. This is enough to prove that the assertion above is always true.
Abstracting a function call with an UF can be done for functions known to be deterministic, and can be easily done for pure functions. It is however difficult to do this with general external functions, since they might depend on state variables.
### Reference Types and Aliasing
Solidity implements aliasing for reference types with the same data location. That means one variable may be modified through a reference to the same data area. The SMTChecker does not keep track of which references refer to the same data. This implies that whenever a local reference or state variable of reference type is assigned, all knowledge regarding variables of the same type and data location is erased. If the type is nested, the knowledge removal also includes all the prefix base types.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.0;
contractAliasing
{
uint[]array1;
uint[][]array2;
functionf(
uint[]memorya,
uint[]memoryb,
uint[][]memoryc,
uint[]storaged
)internal{
array1[0]=42;
a[0]=2;
c[0][0]=2;
b[0]=1;
// Erasing knowledge about memory references should not
// erase knowledge about state variables.
assert(array1[0]==42);
// However, an assignment to a storage reference will erase
// storage knowledge accordingly.
d[0]=2;
// Fails as false positive because of the assignment above.
assert(array1[0]==42);
// Fails because `a == b` is possible.
assert(a[0]==2);
// Fails because `c[i] == b` is possible.
assert(c[0][0]==2);
assert(d[0]==2);
assert(b[0]==1);
}
functiong(
uint[]memorya,
uint[]memoryb,
uint[][]memoryc,
uintx
)public{
f(a,b,c,array2[x]);
}
}

```

After the assignment to `b[0]`, we need to clear knowledge about `a` since it has the same type (`uint[]`) and data location (memory). We also need to clear knowledge about `c`, since its base type is also a `uint[]` located in memory. This implies that some `c[i]` could refer to the same data as `b` or `a`.
Notice that we do not clear knowledge about `array` and `d` because they are located in storage, even though they also have type `uint[]`. However, if `d` was assigned, we would need to clear knowledge about `array` and vice-versa.
### Contract Balance
A contract may be deployed with funds sent to it, if `msg.value` > 0 in the deployment transaction. However, the contract’s address may already have funds before deployment, which are kept by the contract. Therefore, the SMTChecker assumes that `address(this).balance >= msg.value` in the constructor in order to be consistent with the EVM rules. The contract’s balance may also increase without triggering any calls to the contract, if
  * `selfdestruct` is executed by another contract with the analyzed contract as the target of the remaining funds,
  * the contract is the coinbase (i.e., `block.coinbase`) of some block.


To model this properly, the SMTChecker assumes that at every new transaction the contract’s balance may grow by at least `msg.value`.
## Real World Assumptions
Some scenarios can be expressed in Solidity and the EVM, but are expected to never occur in practice. One of such cases is the length of a dynamic storage array overflowing during a push: If the `push` operation is applied to an array of length 2^256 - 1, its length silently overflows. However, this is unlikely to happen in practice, since the operations required to grow the array to that point would take billions of years to execute. Another similar assumption taken by the SMTChecker is that an address’ balance can never overflow.
A similar idea was presented in EIP-1985.
