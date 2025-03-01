![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Contracts
  * Edit on GitHub


# Contracts
Contracts in Solidity are similar to classes in object-oriented languages. They contain persistent data in state variables, and functions that can modify these variables. Calling a function on a different contract (instance) will perform an EVM function call and thus switch the context such that state variables in the calling contract are inaccessible. A contract and its functions need to be called for anything to happen. There is no “cron” concept in Ethereum to call a function at a particular event automatically.
## Creating Contracts
Contracts can be created “from outside” via Ethereum transactions or from within Solidity contracts.
IDEs, such as Remix, make the creation process seamless using UI elements.
One way to create contracts programmatically on Ethereum is via the JavaScript API web3.js. It has a function called web3.eth.Contract to facilitate contract creation.
When a contract is created, its constructor (a function declared with the `constructor` keyword) is executed once.
A constructor is optional. Only one constructor is allowed, which means overloading is not supported.
After the constructor has executed, the final code of the contract is stored on the blockchain. This code includes all public and external functions and all functions that are reachable from there through function calls. The deployed code does not include the constructor code or internal functions only called from the constructor.
Internally, constructor arguments are passed ABI encoded after the code of the contract itself, but you do not have to care about this if you use `web3.js`.
If a contract wants to create another contract, the source code (and the binary) of the created contract has to be known to the creator. This means that cyclic creation dependencies are impossible.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.22<0.9.0;

contractOwnedToken{
// `TokenCreator` is a contract type that is defined below.
// It is fine to reference it as long as it is not used
// to create a new contract.
TokenCreatorcreator;
addressowner;
bytes32name;
// This is the constructor which registers the
// creator and the assigned name.
constructor(bytes32name_){
// State variables are accessed via their name
// and not via e.g. `this.owner`. Functions can
// be accessed directly or through `this.f`,
// but the latter provides an external view
// to the function. Especially in the constructor,
// you should not access functions externally,
// because the function does not exist yet.
// See the next section for details.
owner=msg.sender;
// We perform an explicit type conversion from `address`
// to `TokenCreator` and assume that the type of
// the calling contract is `TokenCreator`, there is
// no real way to verify that.
// This does not create a new contract.
creator=TokenCreator(msg.sender);
name=name_;
}
functionchangeName(bytes32newName)public{
// Only the creator can alter the name.
// We compare the contract based on its
// address which can be retrieved by
// explicit conversion to address.
if(msg.sender==address(creator))
name=newName;
}
functiontransfer(addressnewOwner)public{
// Only the current owner can transfer the token.
if(msg.sender!=owner)return;
// We ask the creator contract if the transfer
// should proceed by using a function of the
// `TokenCreator` contract defined below. If
// the call fails (e.g. due to out-of-gas),
// the execution also fails here.
if(creator.isTokenTransferOK(owner,newOwner))
owner=newOwner;
}
}

contractTokenCreator{
functioncreateToken(bytes32name)
public
returns(OwnedTokentokenAddress)
{
// Create a new `Token` contract and return its address.
// From the JavaScript side, the return type
// of this function is `address`, as this is
// the closest type available in the ABI.
returnnewOwnedToken(name);
}
functionchangeName(OwnedTokentokenAddress,bytes32name)public{
// Again, the external type of `tokenAddress` is
// simply `address`.
tokenAddress.changeName(name);
}
// Perform checks to determine if transferring a token to the
// `OwnedToken` contract should proceed
functionisTokenTransferOK(addresscurrentOwner,addressnewOwner)
public
pure
returns(boolok)
{
// Check an arbitrary condition to see if transfer should proceed
returnkeccak256(abi.encodePacked(currentOwner,newOwner))[0]==0x7f;
}
}

```

## Visibility and Getters
### State Variable Visibility
`public`
    
Public state variables differ from internal ones only in that the compiler automatically generates getter functions for them, which allows other contracts to read their values. When used within the same contract, the external access (e.g. `this.x`) invokes the getter while internal access (e.g. `x`) gets the variable value directly from storage. Setter functions are not generated so other contracts cannot directly modify their values.
`internal`
    
Internal state variables can only be accessed from within the contract they are defined in and in derived contracts. They cannot be accessed externally. This is the default visibility level for state variables.
`private`
    
Private state variables are like internal ones but they are not visible in derived contracts.
Warning
Making something `private` or `internal` only prevents other contracts from reading or modifying the information, but it will still be visible to the whole world outside of the blockchain.
### Function Visibility
Solidity knows two kinds of function calls: external ones that do create an actual EVM message call and internal ones that do not. Furthermore, internal functions can be made inaccessible to derived contracts. This gives rise to four types of visibility for functions.
`external`
    
External functions are part of the contract interface, which means they can be called from other contracts and via transactions. An external function `f` cannot be called internally (i.e. `f()` does not work, but `this.f()` works).
`public`
    
Public functions are part of the contract interface and can be either called internally or via message calls.
`internal`
    
Internal functions can only be accessed from within the current contract or contracts deriving from it. They cannot be accessed externally. Since they are not exposed to the outside through the contract’s ABI, they can take parameters of internal types like mappings or storage references.
`private`
    
Private functions are like internal ones but they are not visible in derived contracts.
Warning
Making something `private` or `internal` only prevents other contracts from reading or modifying the information, but it will still be visible to the whole world outside of the blockchain.
The visibility specifier is given after the type for state variables and between parameter list and return parameter list for functions.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractC{
functionf(uinta)privatepurereturns(uintb){returna+1;}
functionsetData(uinta)internal{data=a;}
uintpublic data;
}

```

In the following example, `D`, can call `c.getData()` to retrieve the value of `data` in state storage, but is not able to call `f`. Contract `E` is derived from `C` and, thus, can call `compute`.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractC{
uintprivate data;
functionf(uinta)privatepurereturns(uintb){returna+1;}
functionsetData(uinta)public{data=a;}
functiongetData()publicviewreturns(uint){returndata;}
functioncompute(uinta,uintb)internalpurereturns(uint){returna+b;}
}
// This will not compile
contractD{
functionreadData()public{
Cc=newC();
uintlocal=c.f(7);// error: member `f` is not visible
c.setData(3);
local=c.getData();
local=c.compute(3,5);// error: member `compute` is not visible
}
}
contractEisC{
functiong()public{
Cc=newC();
uintval=compute(3,5);// access to internal member (from derived to parent contract)
}
}

```

### Getter Functions
The compiler automatically creates getter functions for all **public** state variables. For the contract given below, the compiler will generate a function called `data` that does not take any arguments and returns a `uint`, the value of the state variable `data`. State variables can be initialized when they are declared.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractC{
uintpublic data=42;
}
contractCaller{
Cc=newC();
functionf()publicviewreturns(uint){
returnc.data();
}
}

```

The getter functions have external visibility. If the symbol is accessed internally (i.e. without `this.`), it evaluates to a state variable. If it is accessed externally (i.e. with `this.`), it evaluates to a function.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractC{
uintpublic data;
functionx()publicreturns(uint){
data=3;// internal access
returnthis.data();// external access
}
}

```

If you have a `public` state variable of array type, then you can only retrieve single elements of the array via the generated getter function. This mechanism exists to avoid high gas costs when returning an entire array. You can use arguments to specify which individual element to return, for example `myArray(0)`. If you want to return an entire array in one call, then you need to write a function, for example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractarrayExample{
// public state variable
uint[]publicmyArray;
// Getter function generated by the compiler
/*
  function myArray(uint i) public view returns (uint) {
    return myArray[i];
  }
  */
// function that returns entire array
functiongetArray()publicviewreturns(uint[]memory){
returnmyArray;
}
}

```

Now you can use `getArray()` to retrieve the entire array, instead of `myArray(i)`, which returns a single element per call.
The next example is more complex:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractComplex{
structData{
uinta;
bytes3b;
mapping(uint=>uint)map;
uint[3]c;
uint[]d;
bytese;
}
mapping(uint=>mapping(bool=>Data[]))publicdata;
}

```

It generates a function of the following form. The mapping and arrays (with the exception of byte arrays) in the struct are omitted because there is no good way to select individual struct members or provide a key for the mapping:
open in Remix
```
functiondata(uintarg1,boolarg2,uintarg3)
public
returns(uinta,bytes3b,bytesmemorye)
{
a=data[arg1][arg2][arg3].a;
b=data[arg1][arg2][arg3].b;
e=data[arg1][arg2][arg3].e;
}

```

## Function Modifiers
Modifiers can be used to change the behavior of functions in a declarative way. For example, you can use a modifier to automatically check a condition prior to executing the function.
Modifiers are inheritable properties of contracts and may be overridden by derived contracts, but only if they are marked `virtual`. For details, please see Modifier Overriding.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.1<0.9.0;
contractowned{
constructor(){owner=payable(msg.sender);}
addresspayableowner;
// This contract only defines a modifier but does not use
// it: it will be used in derived contracts.
// The function body is inserted where the special symbol
// `_;` in the definition of a modifier appears.
// This means that if the owner calls this function, the
// function is executed and otherwise, an exception is
// thrown.
modifieronlyOwner{
require(
msg.sender==owner,
"Only owner can call this function."
);
_;
}
}
contractpriced{
// Modifiers can receive arguments:
modifiercosts(uintprice){
if(msg.value>=price){
_;
}
}
}
contractRegisterispriced,owned{
mapping(address=>bool)registeredAddresses;
uintprice;
constructor(uintinitialPrice){price=initialPrice;}
// It is important to also provide the
// `payable` keyword here, otherwise the function will
// automatically reject all Ether sent to it.
functionregister()publicpayablecosts(price){
registeredAddresses[msg.sender]=true;
}
// This contract inherits the `onlyOwner` modifier from
// the `owned` contract. As a result, calls to `changePrice` will
// only take effect if they are made by the stored owner.
functionchangePrice(uintprice_)publiconlyOwner{
price=price_;
}
}
contractMutex{
boollocked;
modifiernoReentrancy(){
require(
!locked,
"Reentrant call."
);
locked=true;
_;
locked=false;
}
/// This function is protected by a mutex, which means that
/// reentrant calls from within `msg.sender.call` cannot call `f` again.
/// The `return 7` statement assigns 7 to the return value but still
/// executes the statement `locked = false` in the modifier.
functionf()publicnoReentrancyreturns(uint){
(boolsuccess,)=msg.sender.call("");
require(success);
return7;
}
}

```

If you want to access a modifier `m` defined in a contract `C`, you can use `C.m` to reference it without virtual lookup. It is only possible to use modifiers defined in the current contract or its base contracts. Modifiers can also be defined in libraries but their use is limited to functions of the same library.
Multiple modifiers are applied to a function by specifying them in a whitespace-separated list and are evaluated in the order presented.
Modifiers cannot implicitly access or change the arguments and return values of functions they modify. Their values can only be passed to them explicitly at the point of invocation.
In function modifiers, it is necessary to specify when you want the function to which the modifier is applied to be run. The placeholder statement (denoted by a single underscore character `_`) is used to denote where the body of the function being modified should be inserted. Note that the placeholder operator is different from using underscores as leading or trailing characters in variable names, which is a stylistic choice.
Explicit returns from a modifier or function body only leave the current modifier or function body. Return variables are assigned and control flow continues after the `_` in the preceding modifier.
Warning
In an earlier version of Solidity, `return` statements in functions having modifiers behaved differently.
An explicit return from a modifier with `return;` does not affect the values returned by the function. The modifier can, however, choose not to execute the function body at all and in that case the return variables are set to their default values just as if the function had an empty body.
The `_` symbol can appear in the modifier multiple times. Each occurrence is replaced with the function body, and the function returns the return value of the final occurrence.
Arbitrary expressions are allowed for modifier arguments and in this context, all symbols visible from the function are visible in the modifier. Symbols introduced in the modifier are not visible in the function (as they might change by overriding).
## Transient Storage
Transient storage is another data location besides memory, storage, calldata (and return-data and code) which was introduced alongside its respective opcodes `TSTORE` and `TLOAD` by EIP-1153. This new data location behaves as a key-value store similar to storage with the main difference being that data in transient storage is not permanent, but is scoped to the current transaction only, after which it will be reset to zero. Since the content of transient storage has very limited lifetime and size, it does not need to be stored permanently as a part of state and the associated gas costs are much lower than in case of storage. EVM version `cancun` or newer is required for transient storage to be available.
Transient storage variables cannot be initialized in place, i.e., they cannot be assigned to upon declaration, since the value would be cleared at the end of the creation transaction, rendering the initialization ineffective. Transient variables will be default value initialized depending on their underlying type. `constant` and `immutable` variables conflict with transient storage, since their values are either inlined or directly stored in code.
Transient storage variables have completely independent address space from storage, so that the order of transient state variables does not affect the layout of storage state variables and vice-versa. They do need distinct names though because all state variables share the same namespace. It is also important to note that the values in transient storage are packed in the same fashion as those in persistent storage. See Storage Layout for more information.
Besides that, transient variables can have visibility as well and `public` ones will have a getter function generated automatically as usual.
Note that, currently, such use of `transient` as a data location is only allowed for value type state variable declarations. Reference types, such as arrays, mappings and structs, as well as local or parameter variables are not yet supported.
An expected canonical use case for transient storage is cheaper reentrancy locks, which can be readily implemented with the opcodes as showcased next.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.28;
contractGenerosity{
mapping(address=>bool)sentGifts;
booltransientlocked;
modifiernonReentrant{
require(!locked,"Reentrancy attempt");
locked=true;
_;
// Unlocks the guard, making the pattern composable.
// After the function exits, it can be called again, even in the same transaction.
locked=false;
}
functionclaimGift()nonReentrantpublic{
require(address(this).balance>=1ether);
require(!sentGifts[msg.sender]);
(boolsuccess,)=msg.sender.call{value:1ether}("");
require(success);
// In a reentrant function, doing this last would open up the vulnerability
sentGifts[msg.sender]=true;
}
}

```

Transient storage is private to the contract that owns it, in the same way as persistent storage. Only owning contract frames may access their transient storage, and when they do, all the frames access the same transient store.
Transient storage is part of the EVM state and is subject to the same mutability enforcements as persistent storage. As such, any read access to it is not `pure` and writing access is not `view`.
If the `TSTORE` opcode is called within the context of a `STATICCALL`, it will result in an exception instead of performing the modification. `TLOAD` is allowed within the context of a `STATICCALL`.
When transient storage is used in the context of `DELEGATECALL` or `CALLCODE`, then the owning contract of the transient storage is the contract that issued `DELEGATECALL` or `CALLCODE` instruction (the caller) as with persistent storage. When transient storage is used in the context of `CALL` or `STATICCALL`, then the owning contract of the transient storage is the contract that is the target of the `CALL` or `STATICCALL` instruction (the callee).
Note
In the case of `DELEGATECALL`, since references to transient storage variables are currently not supported, it is not possible to pass those into library calls. In libraries, access to transient storage is only possible using inline assembly.
If a frame reverts, all writes to transient storage that took place between entry to the frame and the return are reverted, including those that took place in inner calls. The caller of an external call may employ a `try ... catch` block to prevent reverts bubbling up from the inner calls.
## Composability of Smart Contracts and the Caveats of Transient Storage
Given the caveats mentioned in the specification of EIP-1153, in order to preserve the composability of your smart contract, utmost care is recommended for more advanced use cases of transient storage.
For smart contracts, composability is a very important design principle to achieve self-contained behaviour, such that multiple calls into individual smart contracts can be composed to more complex applications. So far the EVM largely guaranteed composable behaviour, since multiple calls into a smart contract within a complex transaction are virtually indistinguishable from multiple calls to the contract stretched over several transactions. However, transient storage allows a violation of this principle, and incorrect use may lead to complex bugs that only surface when used across several calls.
Let’s illustrate the problem with a simple example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.28;
contractMulService{
uinttransientmultiplier;
functionsetMultiplier(uintmul)external{
multiplier=mul;
}
functionmultiply(uintvalue)externalviewreturns(uint){
returnvalue*multiplier;
}
}

```

and a sequence of external calls:
open in Remix
```
setMultiplier(42);
multiply(1);
multiply(2);

```

If the example used memory or storage to store the multiplier, it would be fully composable. It would not matter whether you split the sequence into separate transactions or grouped them in some way. You would always get the same result: after `multiplier` is set to `42`, the subsequent calls would return `42` and `84` respectively. This enables use cases such as batching calls from multiple transactions together to reduce gas costs. Transient storage potentially breaks such use cases since composability can no longer be taken for granted. In the example, if the calls are not executed in the same transaction, then `multiplier` is reset and the next calls to function `multiply` would always return `0`.
As another example, since transient storage is constructed as a relatively cheap key-value store, a smart contract author may be tempted to use transient storage as a replacement for in-memory mappings without keeping track of the modified keys in the mapping and thereby without clearing the mapping at the end of the call. This, however, can easily lead to unexpected behaviour in complex transactions, in which values set by a previous call into the contract within the same transaction remain.
The use of transient storage for reentrancy locks that are cleared at the end of the call frame into the contract, is safe. However, be sure to resist the temptation to save the 100 gas used for resetting the reentrancy lock, since failing to do so, will restrict your contract to only one call within a transaction, preventing its use in complex composed transactions, which have been a cornerstone for complex applications on chain.
It is recommend to generally always clear transient storage completely at the end of a call into your smart contract to avoid these kinds of issues and to simplify the analysis of the behaviour of your contract within complex transactions. Check the Security Considerations section of EIP-1153 for further details.
## Constant and Immutable State Variables
State variables can be declared as `constant` or `immutable`. In both cases, the variables cannot be modified after the contract has been constructed. For `constant` variables, the value has to be fixed at compile-time, while for `immutable`, it can still be assigned at construction time.
It is also possible to define `constant` variables at the file level.
Every occurrence of such a variable in the source is replaced by its underlying value and the compiler does not reserve a storage slot for it. It cannot be assigned a slot in transient storage using the `transient` keyword either.
Compared to regular state variables, the gas costs of constant and immutable variables are much lower. For a constant variable, the expression assigned to it is copied to all the places where it is accessed and also re-evaluated each time. This allows for local optimizations. Immutable variables are evaluated once at construction time and their value is copied to all the places in the code where they are accessed. For these values, 32 bytes are reserved, even if they would fit in fewer bytes. Due to this, constant values can sometimes be cheaper than immutable values.
Not all types for constants and immutables are implemented at this time. The only supported types are strings (only for constants) and value types.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.21;
uintconstantX=32**22+8;
contractC{
stringconstantTEXT="abc";
bytes32constantMY_HASH=keccak256("abc");
uintimmutabledecimals=18;
uintimmutablemaxBalance;
addressimmutableowner=msg.sender;
constructor(uintdecimals_,addressref){
if(decimals_!=0)
// Immutables are only immutable when deployed.
// At construction time they can be assigned to any number of times.
decimals=decimals_;
// Assignments to immutables can even access the environment.
maxBalance=ref.balance;
}
functionisBalanceTooHigh(addressother)publicviewreturns(bool){
returnother.balance>maxBalance;
}
}

```

### Constant
For `constant` variables, the value has to be a constant at compile time and it has to be assigned where the variable is declared. Any expression that accesses storage, blockchain data (e.g. `block.timestamp`, `address(this).balance` or `block.number`) or execution data (`msg.value` or `gasleft()`) or makes calls to external contracts is disallowed. Expressions that might have a side-effect on memory allocation are allowed, but those that might have a side-effect on other memory objects are not. The built-in functions `keccak256`, `sha256`, `ripemd160`, `ecrecover`, `addmod` and `mulmod` are allowed (even though, with the exception of `keccak256`, they do call external contracts).
The reason behind allowing side-effects on the memory allocator is that it should be possible to construct complex objects like e.g. lookup-tables. This feature is not yet fully usable.
### Immutable
Variables declared as `immutable` are a bit less restricted than those declared as `constant`: Immutable variables can be assigned a value at construction time. The value can be changed at any time before deployment and then it becomes permanent.
One additional restriction is that immutables can only be assigned to inside expressions for which there is no possibility of being executed after creation. This excludes all modifier definitions and functions other than constructors.
There are no restrictions on reading immutable variables. The read is even allowed to happen before the variable is written to for the first time because variables in Solidity always have a well-defined initial value. For this reason it is also allowed to never explicitly assign a value to an immutable.
Warning
When accessing immutables at construction time, please keep the initialization order in mind. Even if you provide an explicit initializer, some expressions may end up being evaluated before that initializer, especially when they are at a different level in inheritance hierarchy.
Note
Before Solidity 0.8.21 initialization of immutable variables was more restrictive. Such variables had to be initialized exactly once at construction time and could not be read before then.
The contract creation code generated by the compiler will modify the contract’s runtime code before it is returned by replacing all references to immutables with the values assigned to them. This is important if you are comparing the runtime code generated by the compiler with the one actually stored in the blockchain. The compiler outputs where these immutables are located in the deployed bytecode in the `immutableReferences` field of the compiler JSON standard output.
## Functions
Functions can be defined inside and outside of contracts.
Functions outside of a contract, also called “free functions”, always have implicit `internal` visibility. Their code is included in all contracts that call them, similar to internal library functions.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.1<0.9.0;
functionsum(uint[]memoryarr)purereturns(uints){
for(uinti=0;i<arr.length;i++)
s+=arr[i];
}
contractArrayExample{
boolfound;
functionf(uint[]memoryarr)public{
// This calls the free function internally.
// The compiler will add its code to the contract.
uints=sum(arr);
require(s>=10);
found=true;
}
}

```

Note
Functions defined outside a contract are still always executed in the context of a contract. They still can call other contracts, send them Ether and destroy the contract that called them, among other things. The main difference to functions defined inside a contract is that free functions do not have direct access to the variable `this`, storage variables and functions not in their scope.
### Function Parameters and Return Variables
Functions take typed parameters as input and may, unlike in many other languages, also return an arbitrary number of values as output.
#### Function Parameters
Function parameters are declared the same way as variables, and the name of unused parameters can be omitted.
For example, if you want your contract to accept one kind of external call with two integers, you would use something like the following:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractSimple{
uintsum;
functiontaker(uinta,uintb)public{
sum=a+b;
}
}

```

Function parameters can be used as any other local variable and they can also be assigned to.
#### Return Variables
Function return variables are declared with the same syntax after the `returns` keyword.
For example, suppose you want to return two results: the sum and the product of two integers passed as function parameters, then you use something like:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractSimple{
functionarithmetic(uinta,uintb)
public
pure
returns(uintsum,uintproduct)
{
sum=a+b;
product=a*b;
}
}

```

The names of return variables can be omitted. Return variables can be used as any other local variable and they are initialized with their default value and have that value until they are (re-)assigned.
You can either explicitly assign to return variables and then leave the function as above, or you can provide return values (either a single or multiple ones) directly with the `return` statement:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractSimple{
functionarithmetic(uinta,uintb)
public
pure
returns(uintsum,uintproduct)
{
return(a+b,a*b);
}
}

```

If you use an early `return` to leave a function that has return variables, you must provide return values together with the return statement.
Note
You cannot return some types from non-internal functions. This includes the types listed below and any composite types that recursively contain them:
  * mappings,
  * internal function types,
  * reference types with location set to `storage`,
  * multi-dimensional arrays (applies only to ABI coder v1),
  * structs (applies only to ABI coder v1).


This restriction does not apply to library functions because of their different internal ABI.
#### Returning Multiple Values
When a function has multiple return types, the statement `return (v0, v1, ..., vn)` can be used to return multiple values. The number of components must be the same as the number of return variables and their types have to match, potentially after an implicit conversion.
### State Mutability
#### View Functions
Functions can be declared `view` in which case they promise not to modify the state.
Note
If the compiler’s EVM target is Byzantium or newer (default) the opcode `STATICCALL` is used when `view` functions are called, which enforces the state to stay unmodified as part of the EVM execution. For library `view` functions `DELEGATECALL` is used, because there is no combined `DELEGATECALL` and `STATICCALL`. This means library `view` functions do not have run-time checks that prevent state modifications. This should not impact security negatively because library code is usually known at compile-time and the static checker performs compile-time checks.
The following statements are considered modifying the state:
  1. Writing to state variables (storage and transient storage).
  2. Emitting events.
  3. Creating other contracts.
  4. Using `selfdestruct`.
  5. Sending Ether via calls.
  6. Calling any function not marked `view` or `pure`.
  7. Using low-level calls.
  8. Using inline assembly that contains certain opcodes.


open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.5.0<0.9.0;
contractC{
functionf(uinta,uintb)publicviewreturns(uint){
returna*(b+42)+block.timestamp;
}
}

```

Note
`constant` on functions used to be an alias to `view`, but this was dropped in version 0.5.0.
Note
Getter methods are automatically marked `view`.
Note
Prior to version 0.5.0, the compiler did not use the `STATICCALL` opcode for `view` functions. This enabled state modifications in `view` functions through the use of invalid explicit type conversions. By using `STATICCALL` for `view` functions, modifications to the state are prevented on the level of the EVM.
#### Pure Functions
Functions can be declared `pure` in which case they promise not to read from or modify the state. In particular, it should be possible to evaluate a `pure` function at compile-time given only its inputs and `msg.data`, but without any knowledge of the current blockchain state. This means that reading from `immutable` variables can be a non-pure operation.
Note
If the compiler’s EVM target is Byzantium or newer (default) the opcode `STATICCALL` is used, which does not guarantee that the state is not read, but at least that it is not modified.
In addition to the list of state modifying statements explained above, the following are considered reading from the state:
  1. Reading from state variables (storage and transient storage).
  2. Accessing `address(this).balance` or `<address>.balance`.
  3. Accessing any of the members of `block`, `tx`, `msg` (with the exception of `msg.sig` and `msg.data`).
  4. Calling any function not marked `pure`.
  5. Using inline assembly that contains certain opcodes.


open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.5.0<0.9.0;
contractC{
functionf(uinta,uintb)publicpurereturns(uint){
returna*(b+42);
}
}

```

Pure functions are able to use the `revert()` and `require()` functions to revert potential state changes when an error occurs.
Reverting a state change is not considered a “state modification”, as only changes to the state made previously in code that did not have the `view` or `pure` restriction are reverted and that code has the option to catch the `revert` and not pass it on.
This behavior is also in line with the `STATICCALL` opcode.
Warning
It is not possible to prevent functions from reading the state at the level of the EVM, it is only possible to prevent them from writing to the state (i.e. only `view` can be enforced at the EVM level, `pure` can not).
Note
Prior to version 0.5.0, the compiler did not use the `STATICCALL` opcode for `pure` functions. This enabled state modifications in `pure` functions through the use of invalid explicit type conversions. By using `STATICCALL` for `pure` functions, modifications to the state are prevented on the level of the EVM.
Note
Prior to version 0.4.17 the compiler did not enforce that `pure` is not reading the state. It is a compile-time type check, which can be circumvented by doing invalid explicit conversions between contract types, because the compiler can verify that the type of the contract does not do state-changing operations, but it cannot check that the contract that will be called at runtime is actually of that type.
### Special Functions
#### Receive Ether Function
A contract can have at most one `receive` function, declared using `receive() external payable { ... }` (without the `function` keyword). This function cannot have arguments, cannot return anything and must have `external` visibility and `payable` state mutability. It can be virtual, can override and can have modifiers.
The receive function is executed on a call to the contract with empty calldata. This is the function that is executed on plain Ether transfers (e.g. via `.send()` or `.transfer()`). If no such function exists, but a payable fallback function exists, the fallback function will be called on a plain Ether transfer. If neither a receive Ether nor a payable fallback function is present, the contract cannot receive Ether through a transaction that does not represent a payable function call and throws an exception.
In the worst case, the `receive` function can only rely on 2300 gas being available (for example when `send` or `transfer` is used), leaving little room to perform other operations except basic logging. The following operations will consume more gas than the 2300 gas stipend:
  * Writing to storage
  * Creating a contract
  * Calling an external function which consumes a large amount of gas
  * Sending Ether


Warning
When Ether is sent directly to a contract (without a function call, i.e. sender uses `send` or `transfer`) but the receiving contract does not define a receive Ether function or a payable fallback function, an exception will be thrown, sending back the Ether (this was different before Solidity v0.4.0). If you want your contract to receive Ether, you have to implement a receive Ether function (using payable fallback functions for receiving Ether is not recommended, since the fallback is invoked and would not fail for interface confusions on the part of the sender).
Warning
A contract without a receive Ether function can receive Ether as a recipient of a _coinbase transaction_ (aka _miner block reward_) or as a destination of a `selfdestruct`.
A contract cannot react to such Ether transfers and thus also cannot reject them. This is a design choice of the EVM and Solidity cannot work around it.
It also means that `address(this).balance` can be higher than the sum of some manual accounting implemented in a contract (i.e. having a counter updated in the receive Ether function).
Below you can see an example of a Sink contract that uses function `receive`.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
// This contract keeps all Ether sent to it with no way
// to get it back.
contractSink{
eventReceived(address,uint);
receive()externalpayable{
emitReceived(msg.sender,msg.value);
}
}

```

#### Fallback Function
A contract can have at most one `fallback` function, declared using either `fallback () external [payable]` or `fallback (bytes calldata input) external [payable] returns (bytes memory output)` (both without the `function` keyword). This function must have `external` visibility. A fallback function can be virtual, can override and can have modifiers.
The fallback function is executed on a call to the contract if none of the other functions match the given function signature, or if no data was supplied at all and there is no receive Ether function. The fallback function always receives data, but in order to also receive Ether it must be marked `payable`.
If the version with parameters is used, `input` will contain the full data sent to the contract (equal to `msg.data`) and can return data in `output`. The returned data will not be ABI-encoded. Instead it will be returned without modifications (not even padding).
In the worst case, if a payable fallback function is also used in place of a receive function, it can only rely on 2300 gas being available (see receive Ether function for a brief description of the implications of this).
Like any function, the fallback function can execute complex operations as long as there is enough gas passed on to it.
Warning
A `payable` fallback function is also executed for plain Ether transfers, if no receive Ether function is present. It is recommended to always define a receive Ether function as well, if you define a payable fallback function to distinguish Ether transfers from interface confusions.
Note
If you want to decode the input data, you can check the first four bytes for the function selector and then you can use `abi.decode` together with the array slice syntax to decode ABI-encoded data: `(c, d) = abi.decode(input[4:], (uint256, uint256));` Note that this should only be used as a last resort and proper functions should be used instead.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.2<0.9.0;
contractTest{
uintx;
// This function is called for all messages sent to
// this contract (there is no other function).
// Sending Ether to this contract will cause an exception,
// because the fallback function does not have the `payable`
// modifier.
fallback()external{x=1;}
}
contractTestPayable{
uintx;
uinty;
// This function is called for all messages sent to
// this contract, except plain Ether transfers
// (there is no other function except the receive function).
// Any call with non-empty calldata to this contract will execute
// the fallback function (even if Ether is sent along with the call).
fallback()externalpayable{x=1;y=msg.value;}
// This function is called for plain Ether transfers, i.e.
// for every call with empty calldata.
receive()externalpayable{x=2;y=msg.value;}
}
contractCaller{
functioncallTest(Testtest)publicreturns(bool){
(boolsuccess,)=address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
require(success);
// results in test.x becoming == 1.
// address(test) will not allow to call ``send`` directly, since ``test`` has no payable
// fallback function.
// It has to be converted to the ``address payable`` type to even allow calling ``send`` on it.
addresspayabletestPayable=payable(address(test));
// If someone sends Ether to that contract,
// the transfer will fail, i.e. this returns false here.
returntestPayable.send(2ether);
}
functioncallTestPayable(TestPayabletest)publicreturns(bool){
(boolsuccess,)=address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
require(success);
// results in test.x becoming == 1 and test.y becoming 0.
(success,)=address(test).call{value:1}(abi.encodeWithSignature("nonExistingFunction()"));
require(success);
// results in test.x becoming == 1 and test.y becoming 1.
// If someone sends Ether to that contract, the receive function in TestPayable will be called.
// Since that function writes to storage, it takes more gas than is available with a
// simple ``send`` or ``transfer``. Because of that, we have to use a low-level call.
(success,)=address(test).call{value:2ether}("");
require(success);
// results in test.x becoming == 2 and test.y becoming 2 ether.
returntrue;
}
}

```

### Function Overloading
A contract can have multiple functions of the same name but with different parameter types. This process is called “overloading” and also applies to inherited functions. The following example shows overloading of the function `f` in the scope of contract `A`.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractA{
functionf(uintvalue)publicpurereturns(uintout){
out=value;
}
functionf(uintvalue,boolreally)publicpurereturns(uintout){
if(really)
out=value;
}
}

```

Overloaded functions are also present in the external interface. It is an error if two externally visible functions differ by their Solidity types but not by their external types.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
// This will not compile
contractA{
functionf(Bvalue)publicpurereturns(Bout){
out=value;
}
functionf(addressvalue)publicpurereturns(addressout){
out=value;
}
}
contractB{
}

```

Both `f` function overloads above end up accepting the address type for the ABI although they are considered different inside Solidity.
#### Overload resolution and Argument matching
Overloaded functions are selected by matching the function declarations in the current scope to the arguments supplied in the function call. Functions are selected as overload candidates if all arguments can be implicitly converted to the expected types. If there is not exactly one candidate, resolution fails.
Note
Return parameters are not taken into account for overload resolution.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
contractA{
functionf(uint8val)publicpurereturns(uint8out){
out=val;
}
functionf(uint256val)publicpurereturns(uint256out){
out=val;
}
}

```

Calling `f(50)` would create a type error since `50` can be implicitly converted both to `uint8` and `uint256` types. On another hand `f(256)` would resolve to `f(uint256)` overload as `256` cannot be implicitly converted to `uint8`.
## Events
Solidity events give an abstraction on top of the EVM’s logging functionality. Applications can subscribe and listen to these events through the RPC interface of an Ethereum client.
Events can be defined at file level or as inheritable members of contracts (including interfaces and libraries). When you call them, they cause the arguments to be stored in the transaction’s log - a special data structure in the blockchain. These logs are associated with the address of the contract that emitted them, are incorporated into the blockchain, and stay there as long as a block is accessible (forever as of now, but this might change in the future). The Log and its event data is not accessible from within contracts (not even from the contract that created them).
It is possible to request a Merkle proof for logs, so if an external entity supplies a contract with such a proof, it can check that the log actually exists inside the blockchain. You have to supply block headers because the contract can only see the last 256 block hashes.
You can add the attribute `indexed` to up to three parameters which adds them to a special data structure known as “topics” instead of the data part of the log. A topic can only hold a single word (32 bytes) so if you use a reference type for an indexed argument, the Keccak-256 hash of the value is stored as a topic instead.
All parameters without the `indexed` attribute are ABI-encoded into the data part of the log.
Topics allow you to search for events, for example when filtering a sequence of blocks for certain events. You can also filter events by the address of the contract that emitted the event.
For example, the code below uses the web3.js `subscribe("logs")` method to filter logs that match a topic with a certain address value:
```
varoptions={
fromBlock:0,
address:web3.eth.defaultAccount,
topics:["0x0000000000000000000000000000000000000000000000000000000000000000",null,null]
};
web3.eth.subscribe('logs',options,function(error,result){
if(!error)
console.log(result);
})
.on("data",function(log){
console.log(log);
})
.on("changed",function(log){
});

```

The hash of the signature of the event is one of the topics, except if you declared the event with the `anonymous` specifier. This means that it is not possible to filter for specific anonymous events by name, you can only filter by the contract address. The advantage of anonymous events is that they are cheaper to deploy and call. It also allows you to declare four indexed arguments rather than three.
Note
Since the transaction log only stores the event data and not the type, you have to know the type of the event, including which parameter is indexed and if the event is anonymous in order to correctly interpret the data. In particular, it is possible to “fake” the signature of another event using an anonymous event.
### Members of Events
  * `event.selector`: For non-anonymous events, this is a `bytes32` value containing the `keccak256` hash of the event signature, as used in the default topic.


### Example
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.21<0.9.0;
contractClientReceipt{
eventDeposit(
addressindexedfrom,
bytes32indexedid,
uintvalue
);
functiondeposit(bytes32id)publicpayable{
// Events are emitted using `emit`, followed by
// the name of the event and the arguments
// (if any) in parentheses. Any such invocation
// (even deeply nested) can be detected from
// the JavaScript API by filtering for `Deposit`.
emitDeposit(msg.sender,id,msg.value);
}
}

```

The use in the JavaScript API is as follows:
```
varabi=/* abi as generated by the compiler */;
varClientReceipt=web3.eth.contract(abi);
varclientReceipt=ClientReceipt.at("0x1234...ab67"/* address */);
vardepositEvent=clientReceipt.Deposit();
// watch for changes
depositEvent.watch(function(error,result){
// result contains non-indexed arguments and topics
// given to the `Deposit` call.
if(!error)
console.log(result);
});

// Or pass a callback to start watching immediately
vardepositEvent=clientReceipt.Deposit(function(error,result){
if(!error)
console.log(result);
});

```

The output of the above looks like the following (trimmed):
```
{
"returnValues":{
"from":"0x1111…FFFFCCCC",
"id":"0x50…sd5adb20",
"value":"0x420042"
},
"raw":{
"data":"0x7f…91385",
"topics":["0xfd4…b4ead7","0x7f…1a91385"]
}
}

```

### Additional Resources for Understanding Events
  * JavaScript documentation
  * Example usage of events
  * How to access them in js


## Custom Errors
Errors in Solidity provide a convenient and gas-efficient way to explain to the user why an operation failed. They can be defined inside and outside of contracts (including interfaces and libraries).
They have to be used together with the revert statement or the require function. In the case of `revert` statements, or `require` calls where the condition is evaluated to be false, all changes in the current call are reverted, and the error data passed back to the caller.
The example below shows custom error usage with the `revert` statement in function `transferWithRevertError`, as well as the newer approach with `require` in function `transferWithRequireError`.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.27;
/// Insufficient balance for transfer. Needed `required` but only
/// `available` available.
/// @param available balance available.
/// @param required requested amount to transfer.
errorInsufficientBalance(uint256available,uint256required);
contractTestToken{
mapping(address=>uint)balance;
functiontransferWithRevertError(addressto,uint256amount)public{
if(amount>balance[msg.sender])
revertInsufficientBalance({
available:balance[msg.sender],
required:amount
});
balance[msg.sender]-=amount;
balance[to]+=amount;
}
functiontransferWithRequireError(addressto,uint256amount)public{
require(amount<=balance[msg.sender],InsufficientBalance(balance[msg.sender],amount));
balance[msg.sender]-=amount;
balance[to]+=amount;
}
// ...
}

```

Another important detail to mention when it comes to using `require` with custom errors, is that memory allocation for the error-based revert reason will only happen in the reverting case, which, along with optimization of constants and string literals makes this about as gas-efficient as the `if (!condition) revert CustomError(args)` pattern.
Errors cannot be overloaded or overridden but are inherited. The same error can be defined in multiple places as long as the scopes are distinct. Instances of errors can only be created using `revert` statements, or as the second argument to `require` functions.
The error creates data that is then passed to the caller with the revert operation to either return to the off-chain component or catch it in a try/catch statement. Note that an error can only be caught when coming from an external call, reverts happening in internal calls or inside the same function cannot be caught.
If you do not provide any parameters, the error only needs four bytes of data and you can use NatSpec as above to further explain the reasons behind the error, which is not stored on chain. This makes this a very cheap and convenient error-reporting feature at the same time.
More specifically, an error instance is ABI-encoded in the same way as a function call to a function of the same name and types would be and then used as the return data in the `revert` opcode. This means that the data consists of a 4-byte selector followed by ABI-encoded data. The selector consists of the first four bytes of the keccak256-hash of the signature of the error type.
Note
It is possible for a contract to revert with different errors of the same name or even with errors defined in different places that are indistinguishable by the caller. For the outside, i.e. the ABI, only the name of the error is relevant, not the contract or file where it is defined.
The statement `require(condition, "description");` would be equivalent to `if (!condition) revert Error("description")` if you could define `error Error(string)`. Note, however, that `Error` is a built-in type and cannot be defined in user-supplied code.
Similarly, a failing `assert` or similar conditions will revert with an error of the built-in type `Panic(uint256)`.
Note
Error data should only be used to give an indication of failure, but not as a means for control-flow. The reason is that the revert data of inner calls is propagated back through the chain of external calls by default. This means that an inner call can “forge” revert data that looks like it could have come from the contract that called it.
### Members of Errors
  * `error.selector`: A `bytes4` value containing the error selector.


## Inheritance
Solidity supports multiple inheritance including polymorphism.
Polymorphism means that a function call (internal and external) always executes the function of the same name (and parameter types) in the most derived contract in the inheritance hierarchy. This has to be explicitly enabled on each function in the hierarchy using the `virtual` and `override` keywords. See Function Overriding for more details.
It is possible to call functions further up in the inheritance hierarchy internally by explicitly specifying the contract using `ContractName.functionName()` or using `super.functionName()` if you want to call the function one level higher up in the flattened inheritance hierarchy (see below).
When a contract inherits from other contracts, only a single contract is created on the blockchain, and the code from all the base contracts is compiled into the created contract. This means that all internal calls to functions of base contracts also just use internal function calls (`super.f(..)` will use JUMP and not a message call).
State variable shadowing is considered as an error. A derived contract can only declare a state variable `x`, if there is no visible state variable with the same name in any of its bases.
The general inheritance system is very similar to Python’s, especially concerning multiple inheritance, but there are also some differences.
Details are given in the following example.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractOwned{
addresspayableowner;
constructor(){owner=payable(msg.sender);}
}
// Use `is` to derive from another contract. Derived
// contracts can access all non-private members including
// internal functions and state variables. These cannot be
// accessed externally via `this`, though.
contractEmittableisOwned{
eventEmitted();
// The keyword `virtual` means that the function can change
// its behavior in derived classes ("overriding").
functionemitEvent()virtualpublic{
if(msg.sender==owner)
emitEmitted();
}
}
// These abstract contracts are only provided to make the
// interface known to the compiler. Note the function
// without body. If a contract does not implement all
// functions it can only be used as an interface.
abstractcontractConfig{
functionlookup(uintid)publicvirtualreturns(addressadr);
}
abstractcontractNameReg{
functionregister(bytes32name)publicvirtual;
functionunregister()publicvirtual;
}
// Multiple inheritance is possible. Note that `Owned` is
// also a base class of `Emittable`, yet there is only a single
// instance of `Owned` (as for virtual inheritance in C++).
contractNamedisOwned,Emittable{
constructor(bytes32name){
Configconfig=Config(0xD5f9D8D94886E70b06E474c3fB14Fd43E2f23970);
NameReg(config.lookup(1)).register(name);
}
// Functions can be overridden by another function with the same name and
// the same number/types of inputs. If the overriding function has different
// types of output parameters, that causes an error.
// Both local and message-based function calls take these overrides
// into account.
// If you want the function to override, you need to use the
// `override` keyword. You need to specify the `virtual` keyword again
// if you want this function to be overridden again.
functionemitEvent()publicvirtualoverride{
if(msg.sender==owner){
Configconfig=Config(0xD5f9D8D94886E70b06E474c3fB14Fd43E2f23970);
NameReg(config.lookup(1)).unregister();
// It is still possible to call a specific
// overridden function.
Emittable.emitEvent();
}
}
}

// If a constructor takes an argument, it needs to be
// provided in the header or modifier-invocation-style at
// the constructor of the derived contract (see below).
contractPriceFeedisOwned,Emittable,Named("GoldFeed"){
uintinfo;
functionupdateInfo(uintnewInfo)public{
if(msg.sender==owner)info=newInfo;
}
// Here, we only specify `override` and not `virtual`.
// This means that contracts deriving from `PriceFeed`
// cannot change the behavior of `emitEvent` anymore.
functionemitEvent()publicoverride(Emittable,Named){Named.emitEvent();}
functionget()publicviewreturns(uintr){returninfo;}
}

```

Note that above, we call `Emittable.emitEvent()` to “forward” the emit event request. The way this is done is problematic, as seen in the following example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractOwned{
addresspayableowner;
constructor(){owner=payable(msg.sender);}
}
contractEmittableisOwned{
eventEmitted();
functionemitEvent()virtualpublic{
if(msg.sender==owner){
emitEmitted();
}
}
}
contractBase1isEmittable{
eventBase1Emitted();
functionemitEvent()publicvirtualoverride{
/* Here, we emit an event to simulate some Base1 logic */
emitBase1Emitted();
Emittable.emitEvent();
}
}
contractBase2isEmittable{
eventBase2Emitted();
functionemitEvent()publicvirtualoverride{
/* Here, we emit an event to simulate some Base2 logic */
emitBase2Emitted();
Emittable.emitEvent();
}
}
contractFinalisBase1,Base2{
eventFinalEmitted();
functionemitEvent()publicoverride(Base1,Base2){
/* Here, we emit an event to simulate some Final logic */
emitFinalEmitted();
Base2.emitEvent();
}
}

```

A call to `Final.emitEvent()` will call `Base2.emitEvent` because we specify it explicitly in the final override, but this function will bypass `Base1.emitEvent`, resulting in the following sequence of events: `FinalEmitted -> Base2Emitted -> Emitted`, instead of the expected sequence: `FinalEmitted -> Base2Emitted -> Base1Emitted -> Emitted`. The way around this is to use `super`:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractOwned{
addresspayableowner;
constructor(){owner=payable(msg.sender);}
}
contractEmittableisOwned{
eventEmitted();
functionemitEvent()virtualpublic{
if(msg.sender==owner){
emitEmitted();
}
}
}
contractBase1isEmittable{
eventBase1Emitted();
functionemitEvent()publicvirtualoverride{
/* Here, we emit an event to simulate some Base1 logic */
emitBase1Emitted();
super.emitEvent();
}
}

contractBase2isEmittable{
eventBase2Emitted();
functionemitEvent()publicvirtualoverride{
/* Here, we emit an event to simulate some Base2 logic */
emitBase2Emitted();
super.emitEvent();
}
}
contractFinalisBase1,Base2{
eventFinalEmitted();
functionemitEvent()publicoverride(Base1,Base2){
/* Here, we emit an event to simulate some Final logic */
emitFinalEmitted();
super.emitEvent();
}
}

```

If `Final` calls a function of `super`, it does not simply call this function on one of its base contracts. Rather, it calls this function on the next base contract in the final inheritance graph, so it will call `Base1.emitEvent()` (note that the final inheritance sequence is – starting with the most derived contract: Final, Base2, Base1, Emittable, Owned). The actual function that is called when using super is not known in the context of the class where it is used, although its type is known. This is similar for ordinary virtual method lookup.
### Function Overriding
Base functions can be overridden by inheriting contracts to change their behavior if they are marked as `virtual`. The overriding function must then use the `override` keyword in the function header. The overriding function may only change the visibility of the overridden function from `external` to `public`. The mutability may be changed to a more strict one following the order: `nonpayable` can be overridden by `view` and `pure`. `view` can be overridden by `pure`. `payable` is an exception and cannot be changed to any other mutability.
The following example demonstrates changing mutability and visibility:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractBase
{
functionfoo()virtualexternalview{}
}
contractMiddleisBase{}
contractInheritedisMiddle
{
functionfoo()overridepublicpure{}
}

```

For multiple inheritance, the most derived base contracts that define the same function must be specified explicitly after the `override` keyword. In other words, you have to specify all base contracts that define the same function and have not yet been overridden by another base contract (on some path through the inheritance graph). Additionally, if a contract inherits the same function from multiple (unrelated) bases, it has to explicitly override it:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
contractBase1
{
functionfoo()virtualpublic{}
}
contractBase2
{
functionfoo()virtualpublic{}
}
contractInheritedisBase1,Base2
{
// Derives from multiple bases defining foo(), so we must explicitly
// override it
functionfoo()publicoverride(Base1,Base2){}
}

```

An explicit override specifier is not required if the function is defined in a common base contract or if there is a unique function in a common base contract that already overrides all other functions.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
contractA{functionf()publicpure{}}
contractBisA{}
contractCisA{}
// No explicit override required
contractDisB,C{}

```

More formally, it is not required to override a function (directly or indirectly) inherited from multiple bases if there is a base contract that is part of all override paths for the signature, and (1) that base implements the function and no paths from the current contract to the base mentions a function with that signature or (2) that base does not implement the function and there is at most one mention of the function in all paths from the current contract to that base.
In this sense, an override path for a signature is a path through the inheritance graph that starts at the contract under consideration and ends at a contract mentioning a function with that signature that does not override.
If you do not mark a function that overrides as `virtual`, derived contracts can no longer change the behavior of that function.
Note
Functions with the `private` visibility cannot be `virtual`.
Note
Functions without implementation have to be marked `virtual` outside of interfaces. In interfaces, all functions are automatically considered `virtual`.
Note
Starting from Solidity 0.8.8, the `override` keyword is not required when overriding an interface function, except for the case where the function is defined in multiple bases.
Public state variables can override external functions if the parameter and return types of the function matches the getter function of the variable:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
contractA
{
functionf()externalviewvirtualreturns(uint){return5;}
}
contractBisA
{
uintpublic overridef;
}

```

Note
While public state variables can override external functions, they themselves cannot be overridden.
### Modifier Overriding
Function modifiers can override each other. This works in the same way as function overriding (except that there is no overloading for modifiers). The `virtual` keyword must be used on the overridden modifier and the `override` keyword must be used in the overriding modifier:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
contractBase
{
modifierfoo()virtual{_;}
}
contractInheritedisBase
{
modifierfoo()override{_;}
}

```

In case of multiple inheritance, all direct base contracts must be specified explicitly:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
contractBase1
{
modifierfoo()virtual{_;}
}
contractBase2
{
modifierfoo()virtual{_;}
}
contractInheritedisBase1,Base2
{
modifierfoo()override(Base1,Base2){_;}
}

```

### Constructors
A constructor is an optional function declared with the `constructor` keyword which is executed upon contract creation, and where you can run contract initialization code.
Before the constructor code is executed, state variables are initialised to their specified value if you initialise them inline, or their default value if you do not.
After the constructor has run, the final code of the contract is deployed to the blockchain. The deployment of the code costs additional gas linear to the length of the code. This code includes all functions that are part of the public interface and all functions that are reachable from there through function calls. It does not include the constructor code or internal functions that are only called from the constructor.
If there is no constructor, the contract will assume the default constructor, which is equivalent to `constructor() {}`. For example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
abstractcontractA{
uintpublic a;
constructor(uinta_){
a=a_;
}
}
contractBisA(1){
constructor(){}
}

```

You can use internal parameters in a constructor (for example storage pointers). In this case, the contract has to be marked abstract, because these parameters cannot be assigned valid values from outside but only through the constructors of derived contracts.
Warning
Prior to version 0.4.22, constructors were defined as functions with the same name as the contract. This syntax was deprecated and is not allowed anymore in version 0.5.0.
Warning
Prior to version 0.7.0, you had to specify the visibility of constructors as either `internal` or `public`.
### Arguments for Base Constructors
The constructors of all the base contracts will be called following the linearization rules explained below. If the base constructors have arguments, derived contracts need to specify all of them. This can be done in two ways:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractBase{
uintx;
constructor(uintx_){x=x_;}
}
// Either directly specify in the inheritance list...
contractDerived1isBase(7){
constructor(){}
}
// or through a "modifier" of the derived constructor...
contractDerived2isBase{
constructor(uinty)Base(y*y){}
}
// or declare abstract...
abstractcontractDerived3isBase{
}
// and have the next concrete derived contract initialize it.
contractDerivedFromDerivedisDerived3{
constructor()Base(10+10){}
}

```

One way is directly in the inheritance list (`is Base(7)`). The other is in the way a modifier is invoked as part of the derived constructor (`Base(y * y)`). The first way to do it is more convenient if the constructor argument is a constant and defines the behavior of the contract or describes it. The second way has to be used if the constructor arguments of the base depend on those of the derived contract. Arguments have to be given either in the inheritance list or in modifier-style in the derived constructor. Specifying arguments in both places is an error.
If a derived contract does not specify the arguments to all of its base contracts’ constructors, it must be declared abstract. In that case, when another contract derives from it, that other contract’s inheritance list or constructor must provide the necessary parameters for all base classes that haven’t had their parameters specified (otherwise, that other contract must be declared abstract as well). For example, in the above code snippet, see `Derived3` and `DerivedFromDerived`.
### Multiple Inheritance and Linearization
Languages that allow multiple inheritance have to deal with several problems. One is the Diamond Problem. Solidity is similar to Python in that it uses “C3 Linearization” to force a specific order in the directed acyclic graph (DAG) of base classes. This results in the desirable property of monotonicity but disallows some inheritance graphs. Especially, the order in which the base classes are given in the `is` directive is important: You have to list the direct base contracts in the order from “most base-like” to “most derived”. Note that this order is the reverse of the one used in Python.
Another simplifying way to explain this is that when a function is called that is defined multiple times in different contracts, the given bases are searched from right to left (left to right in Python) in a depth-first manner, stopping at the first match. If a base contract has already been searched, it is skipped.
In the following code, Solidity will give the error “Linearization of inheritance graph impossible”.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractX{}
contractAisX{}
// This will not compile
contractCisA,X{}

```

The reason for this is that `C` requests `X` to override `A` (by specifying `A, X` in this order), but `A` itself requests to override `X`, which is a contradiction that cannot be resolved.
Due to the fact that you have to explicitly override a function that is inherited from multiple bases without a unique override, C3 linearization is not too important in practice.
One area where inheritance linearization is especially important and perhaps not as clear is when there are multiple constructors in the inheritance hierarchy. The constructors will always be executed in the linearized order, regardless of the order in which their arguments are provided in the inheriting contract’s constructor. For example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractBase1{
constructor(){}
}
contractBase2{
constructor(){}
}
// Constructors are executed in the following order:
// 1 - Base1
// 2 - Base2
// 3 - Derived1
contractDerived1isBase1,Base2{
constructor()Base1()Base2(){}
}
// Constructors are executed in the following order:
// 1 - Base2
// 2 - Base1
// 3 - Derived2
contractDerived2isBase2,Base1{
constructor()Base2()Base1(){}
}
// Constructors are still executed in the following order:
// 1 - Base2
// 2 - Base1
// 3 - Derived3
contractDerived3isBase2,Base1{
constructor()Base1()Base2(){}
}

```

### Inheriting Different Kinds of Members of the Same Name
The only situations where, due to inheritance, a contract may contain multiple definitions sharing the same name are:
  * Overloading of functions.
  * Overriding of virtual functions.
  * Overriding of external virtual functions by state variable getters.
  * Overriding of virtual modifiers.
  * Overloading of events.


## Abstract Contracts
Contracts must be marked as abstract when at least one of their functions is not implemented or when they do not provide arguments for all of their base contract constructors. Even if this is not the case, a contract may still be marked abstract, such as when you do not intend for the contract to be created directly. Abstract contracts are similar to Interfaces but an interface is more limited in what it can declare.
An abstract contract is declared using the `abstract` keyword as shown in the following example. Note that this contract needs to be defined as abstract, because the function `utterance()` is declared, but no implementation was provided (no implementation body `{ }` was given).
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
abstractcontractFeline{
functionutterance()publicvirtualreturns(bytes32);
}

```

Such abstract contracts can not be instantiated directly. This is also true, if an abstract contract itself does implement all defined functions. The usage of an abstract contract as a base class is shown in the following example:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
abstractcontractFeline{
functionutterance()publicpurevirtualreturns(bytes32);
}
contractCatisFeline{
functionutterance()publicpureoverridereturns(bytes32){return"miaow";}
}

```

If a contract inherits from an abstract contract and does not implement all non-implemented functions by overriding, it needs to be marked as abstract as well.
Note that a function without implementation is different from a Function Type even though their syntax looks very similar.
Example of function without implementation (a function declaration):
open in Remix
```
functionfoo(address)externalreturns(address);

```

Example of a declaration of a variable whose type is a function type:
open in Remix
```
function(address)externalreturns(address)foo;

```

Abstract contracts decouple the definition of a contract from its implementation providing better extensibility and self-documentation and facilitating patterns like the Template method and removing code duplication. Abstract contracts are useful in the same way that defining methods in an interface is useful. It is a way for the designer of the abstract contract to say “any child of mine must implement this method”.
Note
Abstract contracts cannot override an implemented virtual function with an unimplemented one.
## Interfaces
Interfaces are similar to abstract contracts, but they cannot have any functions implemented. There are further restrictions:
  * They cannot inherit from other contracts, but they can inherit from other interfaces.
  * All declared functions must be external in the interface, even if they are public in the contract.
  * They cannot declare a constructor.
  * They cannot declare state variables.
  * They cannot declare modifiers.


Some of these restrictions might be lifted in the future.
Interfaces are basically limited to what the Contract ABI can represent, and the conversion between the ABI and an interface should be possible without any information loss.
Interfaces are denoted by their own keyword:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.2<0.9.0;
interfaceToken{
enumTokenType{Fungible,NonFungible}
structCoin{stringobverse;stringreverse;}
functiontransfer(addressrecipient,uintamount)external;
}

```

Contracts can inherit interfaces as they would inherit other contracts.
All functions declared in interfaces are implicitly `virtual` and any functions that override them do not need the `override` keyword. This does not automatically mean that an overriding function can be overridden again - this is only possible if the overriding function is marked `virtual`.
Interfaces can inherit from other interfaces. This has the same rules as normal inheritance.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.2<0.9.0;
interfaceParentA{
functiontest()externalreturns(uint256);
}
interfaceParentB{
functiontest()externalreturns(uint256);
}
interfaceSubInterfaceisParentA,ParentB{
// Must redefine test in order to assert that the parent
// meanings are compatible.
functiontest()externaloverride(ParentA,ParentB)returns(uint256);
}

```

Types defined inside interfaces and other contract-like structures can be accessed from other contracts: `Token.TokenType` or `Token.Coin`.
Warning
Interfaces have supported `enum` types since Solidity version 0.5.0, make sure the pragma version specifies this version as a minimum.
## Libraries
Libraries are similar to contracts, but their purpose is that they are deployed only once at a specific address and their code is reused using the `DELEGATECALL` (`CALLCODE` until Homestead) feature of the EVM. This means that if library functions are called, their code is executed in the context of the calling contract, i.e. `this` points to the calling contract, and especially the storage from the calling contract can be accessed. As a library is an isolated piece of source code, it can only access state variables of the calling contract if they are explicitly supplied (it would have no way to name them, otherwise). Library functions can only be called directly (i.e. without the use of `DELEGATECALL`) if they do not modify the state (i.e. if they are `view` or `pure` functions), because libraries are assumed to be stateless. In particular, it is not possible to destroy a library.
Note
Until version 0.4.20, it was possible to destroy libraries by circumventing Solidity’s type system. Starting from that version, libraries contain a mechanism that disallows state-modifying functions to be called directly (i.e. without `DELEGATECALL`).
Libraries can be seen as implicit base contracts of the contracts that use them. They will not be explicitly visible in the inheritance hierarchy, but calls to library functions look just like calls to functions of explicit base contracts (using qualified access like `L.f()`). Of course, calls to internal functions use the internal calling convention, which means that all internal types can be passed and types stored in memory will be passed by reference and not copied. To realize this in the EVM, the code of internal library functions that are called from a contract and all functions called from therein will at compile time be included in the calling contract, and a regular `JUMP` call will be used instead of a `DELEGATECALL`.
Note
The inheritance analogy breaks down when it comes to public functions. Calling a public library function with `L.f()` results in an external call (`DELEGATECALL` to be precise). In contrast, `A.f()` is an internal call when `A` is a base contract of the current contract.
The following example illustrates how to use libraries (but using a manual method, be sure to check out using for for a more advanced example to implement a set).
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;

// We define a new struct datatype that will be used to
// hold its data in the calling contract.
structData{
mapping(uint=>bool)flags;
}
librarySet{
// Note that the first parameter is of type "storage
// reference" and thus only its storage address and not
// its contents is passed as part of the call. This is a
// special feature of library functions. It is idiomatic
// to call the first parameter `self`, if the function can
// be seen as a method of that object.
functioninsert(Datastorageself,uintvalue)
public
returns(bool)
{
if(self.flags[value])
returnfalse;// already there
self.flags[value]=true;
returntrue;
}
functionremove(Datastorageself,uintvalue)
public
returns(bool)
{
if(!self.flags[value])
returnfalse;// not there
self.flags[value]=false;
returntrue;
}
functioncontains(Datastorageself,uintvalue)
public
view
returns(bool)
{
returnself.flags[value];
}
}

contractC{
DataknownValues;
functionregister(uintvalue)public{
// The library functions can be called without a
// specific instance of the library, since the
// "instance" will be the current contract.
require(Set.insert(knownValues,value));
}
// In this contract, we can also directly access knownValues.flags, if we want.
}

```

Of course, you do not have to follow this way to use libraries: they can also be used without defining struct data types. Functions also work without any storage reference parameters, and they can have multiple storage reference parameters and in any position.
The calls to `Set.contains`, `Set.insert` and `Set.remove` are all compiled as calls (`DELEGATECALL`) to an external contract/library. If you use libraries, be aware that an actual external function call is performed. `msg.sender`, `msg.value` and `this` will retain their values in this call, though (prior to Homestead, because of the use of `CALLCODE`, `msg.sender` and `msg.value` changed, though).
The following example shows how to use types stored in memory and internal functions in libraries in order to implement custom types without the overhead of external function calls:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.0;
structbigint{
uint[]limbs;
}
libraryBigInt{
functionfromUint(uintx)internalpurereturns(bigintmemoryr){
r.limbs=newuint[](1);
r.limbs[0]=x;
}
functionadd(bigintmemorya,bigintmemoryb)internalpurereturns(bigintmemoryr){
r.limbs=newuint[](max(a.limbs.length,b.limbs.length));
uintcarry=0;
for(uinti=0;i<r.limbs.length;++i){
uintlimbA=limb(a,i);
uintlimbB=limb(b,i);
unchecked{
r.limbs[i]=limbA+limbB+carry;
if(limbA+limbB<limbA||(limbA+limbB==type(uint).max&&carry>0))
carry=1;
else
carry=0;
}
}
if(carry>0){
// too bad, we have to add a limb
uint[]memorynewLimbs=newuint[](r.limbs.length+1);
uinti;
for(i=0;i<r.limbs.length;++i)
newLimbs[i]=r.limbs[i];
newLimbs[i]=carry;
r.limbs=newLimbs;
}
}
functionlimb(bigintmemorya,uintindex)internalpurereturns(uint){
returnindex<a.limbs.length?a.limbs[index]:0;
}
functionmax(uinta,uintb)privatepurereturns(uint){
returna>b?a:b;
}
}
contractC{
usingBigIntforbigint;
functionf()publicpure{
bigintmemoryx=BigInt.fromUint(7);
bigintmemoryy=BigInt.fromUint(type(uint).max);
bigintmemoryz=x.add(y);
assert(z.limb(1)>0);
}
}

```

It is possible to obtain the address of a library by converting the library type to the `address` type, i.e. using `address(LibraryName)`.
As the compiler does not know the address where the library will be deployed, the compiled hex code will contain placeholders of the form `__$30bbc0abd4d6364515865950d3e0d10953$__` (format was different <v0.5.0). The placeholder is a 34 character prefix of the hex encoding of the keccak256 hash of the fully qualified library name, which would be for example `libraries/bigint.sol:BigInt` if the library was stored in a file called `bigint.sol` in a `libraries/` directory. Such bytecode is incomplete and should not be deployed. Placeholders need to be replaced with actual addresses. You can do that by either passing them to the compiler when the library is being compiled or by using the linker to update an already compiled binary. See Library Linking for information on how to use the commandline compiler for linking.
In comparison to contracts, libraries are restricted in the following ways:
  * they cannot have state variables
  * they cannot inherit nor be inherited
  * they cannot receive Ether
  * they cannot be destroyed


(These might be lifted at a later point.)
### Function Signatures and Selectors in Libraries
While external calls to public or external library functions are possible, the calling convention for such calls is considered to be internal to Solidity and not the same as specified for the regular contract ABI. External library functions support more argument types than external contract functions, for example recursive structs and storage pointers. For that reason, the function signatures used to compute the 4-byte selector are computed following an internal naming schema and arguments of types not supported in the contract ABI use an internal encoding.
The following identifiers are used for the types in the signatures:
  * Value types, non-storage `string` and non-storage `bytes` use the same identifiers as in the contract ABI.
  * Non-storage array types follow the same convention as in the contract ABI, i.e. `<type>[]` for dynamic arrays and `<type>[M]` for fixed-size arrays of `M` elements.
  * Non-storage structs are referred to by their fully qualified name, i.e. `C.S` for `contract C { struct S { ... } }`.
  * Storage pointer mappings use `mapping(<keyType> => <valueType>) storage` where `<keyType>` and `<valueType>` are the identifiers for the key and value types of the mapping, respectively.
  * Other storage pointer types use the type identifier of their corresponding non-storage type, but append a single space followed by `storage` to it.


The argument encoding is the same as for the regular contract ABI, except for storage pointers, which are encoded as a `uint256` value referring to the storage slot to which they point.
Similarly to the contract ABI, the selector consists of the first four bytes of the Keccak256-hash of the signature. Its value can be obtained from Solidity using the `.selector` member as follows:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.5.14<0.9.0;
libraryL{
functionf(uint256)external{}
}
contractC{
functiong()publicpurereturns(bytes4){
returnL.f.selector;
}
}

```

### Call Protection For Libraries
As mentioned in the introduction, if a library’s code is executed using a `CALL` instead of a `DELEGATECALL` or `CALLCODE`, it will revert unless a `view` or `pure` function is called.
The EVM does not provide a direct way for a contract to detect whether it was called using `CALL` or not, but a contract can use the `ADDRESS` opcode to find out “where” it is currently running. The generated code compares this address to the address used at construction time to determine the mode of calling.
More specifically, the runtime code of a library always starts with a push instruction, which is a zero of 20 bytes at compilation time. When the deploy code runs, this constant is replaced in memory by the current address and this modified code is stored in the contract. At runtime, this causes the deploy time address to be the first constant to be pushed onto the stack and the dispatcher code compares the current address against this constant for any non-view and non-pure function.
This means that the actual code stored on chain for a library is different from the code reported by the compiler as `deployedBytecode`.
## Using For
The directive `using A for B` can be used to attach functions (`A`) as operators to user-defined value types or as member functions to any type (`B`). The member functions receive the object they are called on as their first parameter (like the `self` variable in Python). The operator functions receive operands as parameters.
It is valid either at file level or inside a contract, at contract level.
The first part, `A`, can be one of:
  * A list of functions, optionally with an operator name assigned (e.g. `using {f, g as +, h, L.t} for uint`). If no operator is specified, the function can be either a library function or a free function and is attached to the type as a member function. Otherwise it must be a free function and it becomes the definition of that operator on the type.
  * The name of a library (e.g. `using L for uint`) - all non-private functions of the library are attached to the type as member functions


At file level, the second part, `B`, has to be an explicit type (without data location specifier). Inside contracts, you can also use `*` in place of the type (e.g. `using L for *;`), which has the effect that all functions of the library `L` are attached to _all_ types.
If you specify a library, _all_ non-private functions in the library get attached, even those where the type of the first parameter does not match the type of the object. The type is checked at the point the function is called and function overload resolution is performed.
If you use a list of functions (e.g. `using {f, g, h, L.t} for uint`), then the type (`uint`) has to be implicitly convertible to the first parameter of each of these functions. This check is performed even if none of these functions are called. Note that private library functions can only be specified when `using for` is inside a library.
If you define an operator (e.g. `using {f as +} for T`), then the type (`T`) must be a user-defined value type and the definition must be a `pure` function. Operator definitions must be global. The following operators can be defined this way:
Category | Operator | Possible signatures  
---|---|---  
Bitwise | `&` | `function (T, T) pure returns (T)`  
`|` | `function (T, T) pure returns (T)`  
`^` | `function (T, T) pure returns (T)`  
`~` | `function (T) pure returns (T)`  
Arithmetic | `+` | `function (T, T) pure returns (T)`  
`-` | `function (T, T) pure returns (T)`  
`function (T) pure returns (T)`  
`*` | `function (T, T) pure returns (T)`  
`/` | `function (T, T) pure returns (T)`  
`%` | `function (T, T) pure returns (T)`  
Comparison | `==` | `function (T, T) pure returns (bool)`  
`!=` | `function (T, T) pure returns (bool)`  
`<` | `function (T, T) pure returns (bool)`  
`<=` | `function (T, T) pure returns (bool)`  
`>` | `function (T, T) pure returns (bool)`  
`>=` | `function (T, T) pure returns (bool)`  
Note that unary and binary `-` need separate definitions. The compiler will choose the right definition based on how the operator is invoked.
The `using A for B;` directive is active only within the current scope (either the contract or the current module/source unit), including within all of its functions, and has no effect outside of the contract or module in which it is used.
When the directive is used at file level and applied to a user-defined type which was defined at file level in the same file, the word `global` can be added at the end. This will have the effect that the functions and operators are attached to the type everywhere the type is available (including other files), not only in the scope of the using statement.
Let us rewrite the set example from the Libraries section in this way, using file-level functions instead of library functions.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.13;
structData{mapping(uint=>bool)flags;}
// Now we attach functions to the type.
// The attached functions can be used throughout the rest of the module.
// If you import the module, you have to
// repeat the using directive there, for example as
//  import "flags.sol" as Flags;
//  using {Flags.insert, Flags.remove, Flags.contains}
//   for Flags.Data;
using{insert,remove,contains}forData;
functioninsert(Datastorageself,uintvalue)
returns(bool)
{
if(self.flags[value])
returnfalse;// already there
self.flags[value]=true;
returntrue;
}
functionremove(Datastorageself,uintvalue)
returns(bool)
{
if(!self.flags[value])
returnfalse;// not there
self.flags[value]=false;
returntrue;
}
functioncontains(Datastorageself,uintvalue)
view
returns(bool)
{
returnself.flags[value];
}

contractC{
DataknownValues;
functionregister(uintvalue)public{
// Here, all variables of type Data have
// corresponding member functions.
// The following function call is identical to
// `Set.insert(knownValues, value)`
require(knownValues.insert(value));
}
}

```

It is also possible to extend built-in types in that way. In this example, we will use a library.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.13;
librarySearch{
functionindexOf(uint[]storageself,uintvalue)
public
view
returns(uint)
{
for(uinti=0;i<self.length;i++)
if(self[i]==value)returni;
returntype(uint).max;
}
}
usingSearchforuint[];
contractC{
uint[]data;
functionappend(uintvalue)public{
data.push(value);
}
functionreplace(uintfrom,uintto)public{
// This performs the library function call
uintindex=data.indexOf(from);
if(index==type(uint).max)
data.push(to);
else
data[index]=to;
}
}

```

Note that all external library calls are actual EVM function calls. This means that if you pass memory or value types, a copy will be performed, even in case of the `self` variable. The only situation where no copy will be performed is when storage reference variables are used or when internal library functions are called.
Another example shows how to define a custom operator for a user-defined type:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.19;
typeUFixed16x2isuint16;
using{
addas+,
divas/
}forUFixed16x2global;
uint32constantSCALE=100;
functionadd(UFixed16x2a,UFixed16x2b)purereturns(UFixed16x2){
returnUFixed16x2.wrap(UFixed16x2.unwrap(a)+UFixed16x2.unwrap(b));
}
functiondiv(UFixed16x2a,UFixed16x2b)purereturns(UFixed16x2){
uint32a32=UFixed16x2.unwrap(a);
uint32b32=UFixed16x2.unwrap(b);
uint32result32=a32*SCALE/b32;
require(result32<=type(uint16).max,"Divide overflow");
returnUFixed16x2.wrap(uint16(a32*SCALE/b32));
}
contractMath{
functionavg(UFixed16x2a,UFixed16x2b)publicpurereturns(UFixed16x2){
return(a+b)/UFixed16x2.wrap(200);
}
}

```

