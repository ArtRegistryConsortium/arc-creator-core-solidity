![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Style Guide
  * Edit on GitHub


# Style Guide
## Introduction
This guide is intended to provide coding conventions for writing Solidity code. This guide should be thought of as an evolving document that will change over time as useful conventions are found and old conventions are rendered obsolete.
Many projects will implement their own style guides. In the event of conflicts, project specific style guides take precedence.
The structure and many of the recommendations within this style guide were taken from Python’s pep8 style guide.
The goal of this guide is _not_ to be the right way or the best way to write Solidity code. The goal of this guide is _consistency_. A quote from Python’s pep8 captures this concept well.
Note
A style guide is about consistency. Consistency with this style guide is important. Consistency within a project is more important. Consistency within one module or function is most important.
But most importantly: **know when to be inconsistent** – sometimes the style guide just doesn’t apply. When in doubt, use your best judgment. Look at other examples and decide what looks best. And do not hesitate to ask!
## Code Layout
### Indentation
Use 4 spaces per indentation level.
### Tabs or Spaces
Spaces are the preferred indentation method.
Mixing tabs and spaces should be avoided.
### Blank Lines
Surround top level declarations in Solidity source with two blank lines.
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractA{
// ...
}

contractB{
// ...
}

contractC{
// ...
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractA{
// ...
}
contractB{
// ...
}
contractC{
// ...
}

```

Within a contract surround function declarations with a single blank line.
Blank lines may be omitted between groups of related one-liners (such as stub functions for an abstract contract)
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
abstractcontractA{
functionspam()publicvirtualpure;
functionham()publicvirtualpure;
}

contractBisA{
functionspam()publicpureoverride{
// ...
}
functionham()publicpureoverride{
// ...
}
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.6.0<0.9.0;
abstractcontractA{
functionspam()virtualpurepublic;
functionham()publicvirtualpure;
}

contractBisA{
functionspam()publicpureoverride{
// ...
}
functionham()publicpureoverride{
// ...
}
}

```

### Maximum Line Length
Maximum suggested line length is 120 characters.
Wrapped lines should conform to the following guidelines.
  1. The first argument should not be attached to the opening parenthesis.
  2. One, and only one, indent should be used.
  3. Each argument should fall on its own line.
  4. The terminating element, `);`, should be placed on the final line by itself.


Function Calls
Yes:
open in Remix
```
thisFunctionCallIsReallyLong(
longArgument1,
longArgument2,
longArgument3
);

```

No:
open in Remix
```
thisFunctionCallIsReallyLong(longArgument1,
longArgument2,
longArgument3
);
thisFunctionCallIsReallyLong(longArgument1,
longArgument2,
longArgument3
);
thisFunctionCallIsReallyLong(
longArgument1,longArgument2,
longArgument3
);
thisFunctionCallIsReallyLong(
longArgument1,
longArgument2,
longArgument3
);
thisFunctionCallIsReallyLong(
longArgument1,
longArgument2,
longArgument3);

```

Assignment Statements
Yes:
open in Remix
```
thisIsALongNestedMapping[being][set][toSomeValue]=someFunction(
argument1,
argument2,
argument3,
argument4
);

```

No:
open in Remix
```
thisIsALongNestedMapping[being][set][toSomeValue]=someFunction(argument1,
argument2,
argument3,
argument4);

```

Event Definitions and Event Emitters
Yes:
open in Remix
```
eventLongAndLotsOfArgs(
addresssender,
addressrecipient,
uint256publicKey,
uint256amount,
bytes32[]options
);
emitLongAndLotsOfArgs(
sender,
recipient,
publicKey,
amount,
options
);

```

No:
open in Remix
```
eventLongAndLotsOfArgs(addresssender,
addressrecipient,
uint256publicKey,
uint256amount,
bytes32[]options);
emitLongAndLotsOfArgs(sender,
recipient,
publicKey,
amount,
options);

```

### Source File Encoding
UTF-8 or ASCII encoding is preferred.
### Imports
Import statements should always be placed at the top of the file.
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
import"./Owned.sol";
contractA{
// ...
}

contractBisOwned{
// ...
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractA{
// ...
}

import"./Owned.sol";

contractBisOwned{
// ...
}

```

### Order of Functions
Ordering helps readers identify which functions they can call and to find the constructor and fallback definitions easier.
Functions should be grouped according to their visibility and ordered:
  * constructor
  * receive function (if exists)
  * fallback function (if exists)
  * external
  * public
  * internal
  * private


Within a grouping, place the `view` and `pure` functions last.
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractA{
constructor(){
// ...
}
receive()externalpayable{
// ...
}
fallback()external{
// ...
}
// External functions
// ...
// External functions that are view
// ...
// External functions that are pure
// ...
// Public functions
// ...
// Internal functions
// ...
// Private functions
// ...
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractA{
// External functions
// ...
fallback()external{
// ...
}
receive()externalpayable{
// ...
}
// Private functions
// ...
// Public functions
// ...
constructor(){
// ...
}
// Internal functions
// ...
}

```

### Whitespace in Expressions
Avoid extraneous whitespace in the following situations:
Immediately inside parenthesis, brackets or braces, with the exception of single line function declarations.
Yes:
open in Remix
```
spam(ham[1],Coin({name:"ham"}));

```

No:
open in Remix
```
spam(ham[1],Coin({name:"ham"}));

```

Exception:
open in Remix
```
functionsingleLine()public{spam();}

```

Immediately before a comma, semicolon:
Yes:
open in Remix
```
functionspam(uinti,Coincoin)public;

```

No:
open in Remix
```
functionspam(uinti,Coincoin)public;

```

More than one space around an assignment or other operator to align with another:
Yes:
open in Remix
```
x=1;
y=2;
longVariable=3;

```

No:
open in Remix
```
x=1;
y=2;
longVariable=3;

```

Do not include a whitespace in the receive and fallback functions:
Yes:
open in Remix
```
receive()externalpayable{
...
}
fallback()external{
...
}

```

No:
open in Remix
```
receive()externalpayable{
...
}
fallback()external{
...
}

```

### Control Structures
The braces denoting the body of a contract, library, functions and structs should:
  * open on the same line as the declaration
  * close on their own line at the same indentation level as the beginning of the declaration.
  * The opening brace should be preceded by a single space.


Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractCoin{
structBank{
addressowner;
uintbalance;
}
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractCoin
{
structBank{
addressowner;
uintbalance;
}
}

```

The same recommendations apply to the control structures `if`, `else`, `while`, and `for`.
Additionally there should be a single space between the control structures `if`, `while`, and `for` and the parenthetic block representing the conditional, as well as a single space between the conditional parenthetic block and the opening brace.
Yes:
open in Remix
```
if(...){
...
}
for(...){
...
}

```

No:
open in Remix
```
if(...)
{
...
}
while(...){
}
for(...){
...;}

```

For control structures whose body contains a single statement, omitting the braces is ok _if_ the statement is contained on a single line.
Yes:
open in Remix
```
if(x<10)
x+=1;

```

No:
open in Remix
```
if(x<10)
someArray.push(Coin({
name:'spam',
value:42
}));

```

For `if` blocks which have an `else` or `else if` clause, the `else` should be placed on the same line as the `if`’s closing brace. This is an exception compared to the rules of other block-like structures.
Yes:
open in Remix
```
if(x<3){
x+=1;
}elseif(x>7){
x-=1;
}else{
x=5;
}

if(x<3)
x+=1;
else
x-=1;

```

No:
open in Remix
```
if(x<3){
x+=1;
}
else{
x-=1;
}

```

### Function Declaration
For short function declarations, it is recommended for the opening brace of the function body to be kept on the same line as the function declaration.
The closing brace should be at the same indentation level as the function declaration.
The opening brace should be preceded by a single space.
Yes:
open in Remix
```
functionincrement(uintx)publicpurereturns(uint){
returnx+1;
}
functionincrement(uintx)publicpureonlyOwnerreturns(uint){
returnx+1;
}

```

No:
open in Remix
```
functionincrement(uintx)publicpurereturns(uint)
{
returnx+1;
}
functionincrement(uintx)publicpurereturns(uint){
returnx+1;
}
functionincrement(uintx)publicpurereturns(uint){
returnx+1;
}
functionincrement(uintx)publicpurereturns(uint){
returnx+1;}

```

The modifier order for a function should be:
  1. Visibility
  2. Mutability
  3. Virtual
  4. Override
  5. Custom modifiers


Yes:
open in Remix
```
functionbalance(uintfrom)publicviewoverridereturns(uint){
returnbalanceOf[from];
}
functionincrement(uintx)publicpureonlyOwnerreturns(uint){
returnx+1;
}

```

No:
open in Remix
```
functionbalance(uintfrom)publicoverrideviewreturns(uint){
returnbalanceOf[from];
}
functionincrement(uintx)onlyOwnerpublicpurereturns(uint){
returnx+1;
}

```

For long function declarations, it is recommended to drop each argument onto its own line at the same indentation level as the function body. The closing parenthesis and opening bracket should be placed on their own line as well at the same indentation level as the function declaration.
Yes:
open in Remix
```
functionthisFunctionHasLotsOfArguments(
addressa,
addressb,
addressc,
addressd,
addresse,
addressf
)
public
{
doSomething();
}

```

No:
open in Remix
```
functionthisFunctionHasLotsOfArguments(addressa,addressb,addressc,
addressd,addresse,addressf)public{
doSomething();
}
functionthisFunctionHasLotsOfArguments(addressa,
addressb,
addressc,
addressd,
addresse,
addressf)public{
doSomething();
}
functionthisFunctionHasLotsOfArguments(
addressa,
addressb,
addressc,
addressd,
addresse,
addressf)public{
doSomething();
}

```

If a long function declaration has modifiers, then each modifier should be dropped to its own line.
Yes:
open in Remix
```
functionthisFunctionNameIsReallyLong(addressx,addressy,addressz)
public
onlyOwner
priced
returns(address)
{
doSomething();
}
functionthisFunctionNameIsReallyLong(
addressx,
addressy,
addressz
)
public
onlyOwner
priced
returns(address)
{
doSomething();
}

```

No:
open in Remix
```
functionthisFunctionNameIsReallyLong(addressx,addressy,addressz)
public
onlyOwner
priced
returns(address){
doSomething();
}
functionthisFunctionNameIsReallyLong(addressx,addressy,addressz)
publiconlyOwnerpricedreturns(address)
{
doSomething();
}
functionthisFunctionNameIsReallyLong(addressx,addressy,addressz)
public
onlyOwner
priced
returns(address){
doSomething();
}

```

Multiline output parameters and return statements should follow the same style recommended for wrapping long lines found in the Maximum Line Length section.
Yes:
open in Remix
```
functionthisFunctionNameIsReallyLong(
addressa,
addressb,
addressc
)
public
returns(
addresssomeAddressName,
uint256LongArgument,
uint256Argument
)
{
doSomething()
return(
veryLongReturnArg1,
veryLongReturnArg2,
veryLongReturnArg3
);
}

```

No:
open in Remix
```
functionthisFunctionNameIsReallyLong(
addressa,
addressb,
addressc
)
public
returns(addresssomeAddressName,
uint256LongArgument,
uint256Argument)
{
doSomething()
return(veryLongReturnArg1,
veryLongReturnArg1,
veryLongReturnArg1);
}

```

For constructor functions on inherited contracts whose bases require arguments, it is recommended to drop the base constructors onto new lines in the same manner as modifiers if the function declaration is long or hard to read.
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
// Base contracts just to make this compile
contractB{
constructor(uint){
}
}

contractC{
constructor(uint,uint){
}
}

contractD{
constructor(uint){
}
}

contractAisB,C,D{
uintx;
constructor(uintparam1,uintparam2,uintparam3,uintparam4,uintparam5)
B(param1)
C(param2,param3)
D(param4)
{
// do something with param5
x=param5;
}
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
// Base contracts just to make this compile
contractB{
constructor(uint){
}
}

contractC{
constructor(uint,uint){
}
}

contractD{
constructor(uint){
}
}

contractAisB,C,D{
uintx;
constructor(uintparam1,uintparam2,uintparam3,uintparam4,uintparam5)
B(param1)
C(param2,param3)
D(param4){
x=param5;
}
}

contractXisB,C,D{
uintx;
constructor(uintparam1,uintparam2,uintparam3,uintparam4,uintparam5)
B(param1)
C(param2,param3)
D(param4){
x=param5;
}
}

```

When declaring short functions with a single statement, it is permissible to do it on a single line.
Permissible:
open in Remix
```
functionshortFunction()public{doSomething();}

```

These guidelines for function declarations are intended to improve readability. Authors should use their best judgment as this guide does not try to cover all possible permutations for function declarations.
### Mappings
In variable declarations, do not separate the keyword `mapping` from its type by a space. Do not separate any nested `mapping` keyword from its type by whitespace.
Yes:
open in Remix
```
mapping(uint=>uint)map;
mapping(address=>bool)registeredAddresses;
mapping(uint=>mapping(bool=>Data[]))publicdata;
mapping(uint=>mapping(uint=>s))data;

```

No:
open in Remix
```
mapping(uint=>uint)map;
mapping(address=>bool)registeredAddresses;
mapping(uint=>mapping(bool=>Data[]))publicdata;
mapping(uint=>mapping(uint=>s))data;

```

### Variable Declarations
Declarations of array variables should not have a space between the type and the brackets.
Yes:
open in Remix
```
uint[]x;

```

No:
open in Remix
```
uint[]x;

```

### Other Recommendations
  * Strings should be quoted with double-quotes instead of single-quotes.


Yes:
open in Remix
```
str="foo";
str="Hamlet says, 'To be or not to be...'";

```

No:
open in Remix
```
str='bar';
str='"Be yourself; everyone else is already taken." -Oscar Wilde';

```

  * Surround operators with a single space on either side.


Yes:
open in Remix
```
x=3;
x=100/10;
x+=3+4;
x|=y&&z;

```

No:
open in Remix
```
x=3;
x=100/10;
x+=3+4;
x|=y&&z;

```

  * Operators with a higher priority than others can exclude surrounding whitespace in order to denote precedence. This is meant to allow for improved readability for complex statements. You should always use the same amount of whitespace on either side of an operator:


Yes:
open in Remix
```
x=2**3+5;
x=2*y+3*z;
x=(a+b)*(a-b);

```

No:
open in Remix
```
x=2**3+5;
x=y+z;
x+=1;

```

## Order of Layout
Contract elements should be laid out in the following order:
  1. Pragma statements
  2. Import statements
  3. Events
  4. Errors
  5. Interfaces
  6. Libraries
  7. Contracts


Inside each contract, library or interface, use the following order:
  1. Type declarations
  2. State variables
  3. Events
  4. Errors
  5. Modifiers
  6. Functions


Note
It might be clearer to declare types close to their use in events or state variables.
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.4<0.9.0;
abstractcontractMath{
errorDivideByZero();
functiondivide(int256numerator,int256denominator)publicvirtualreturns(uint256);
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.8.4<0.9.0;
abstractcontractMath{
functiondivide(int256numerator,int256denominator)publicvirtualreturns(uint256);
errorDivideByZero();
}

```

## Naming Conventions
Naming conventions are powerful when adopted and used broadly. The use of different conventions can convey significant _meta_ information that would otherwise not be immediately available.
The naming recommendations given here are intended to improve the readability, and thus they are not rules, but rather guidelines to try and help convey the most information through the names of things.
Lastly, consistency within a codebase should always supersede any conventions outlined in this document.
### Naming Styles
To avoid confusion, the following names will be used to refer to different naming styles.
  * `b` (single lowercase letter)
  * `B` (single uppercase letter)
  * `lowercase`
  * `UPPERCASE`
  * `UPPER_CASE_WITH_UNDERSCORES`
  * `CapitalizedWords` (or CapWords)
  * `mixedCase` (differs from CapitalizedWords by initial lowercase character!)


Note
When using initialisms in CapWords, capitalize all the letters of the initialisms. Thus HTTPServerError is better than HttpServerError. When using initialisms in mixedCase, capitalize all the letters of the initialisms, except keep the first one lower case if it is the beginning of the name. Thus xmlHTTPRequest is better than XMLHTTPRequest.
### Names to Avoid
  * `l` - Lowercase letter el
  * `O` - Uppercase letter oh
  * `I` - Uppercase letter eye


Never use any of these for single letter variable names. They are often indistinguishable from the numerals one and zero.
### Contract and Library Names
  * Contracts and libraries should be named using the CapWords style. Examples: `SimpleToken`, `SmartBank`, `CertificateHashRepository`, `Player`, `Congress`, `Owned`.
  * Contract and library names should also match their filenames.
  * If a contract file includes multiple contracts and/or libraries, then the filename should match the _core contract_. This is not recommended however if it can be avoided.


As shown in the example below, if the contract name is `Congress` and the library name is `Owned`, then their associated filenames should be `Congress.sol` and `Owned.sol`.
Yes:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
// Owned.sol
contractOwned{
addresspublic owner;
modifieronlyOwner{
require(msg.sender==owner);
_;
}
constructor(){
owner=msg.sender;
}
functiontransferOwnership(addressnewOwner)publiconlyOwner{
owner=newOwner;
}
}

```

and in `Congress.sol`:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
import"./Owned.sol";

contractCongressisOwned,TokenRecipient{
//...
}

```

No:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
// owned.sol
contractowned{
addresspublic owner;
modifieronlyOwner{
require(msg.sender==owner);
_;
}
constructor(){
owner=msg.sender;
}
functiontransferOwnership(addressnewOwner)publiconlyOwner{
owner=newOwner;
}
}

```

and in `Congress.sol`:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.7.0;

import"./owned.sol";

contractCongressisowned,tokenRecipient{
//...
}

```

### Struct Names
Structs should be named using the CapWords style. Examples: `MyCoin`, `Position`, `PositionXY`.
### Event Names
Events should be named using the CapWords style. Examples: `Deposit`, `Transfer`, `Approval`, `BeforeTransfer`, `AfterTransfer`.
### Function Names
Functions should use mixedCase. Examples: `getBalance`, `transfer`, `verifyOwner`, `addMember`, `changeOwner`.
### Function Argument Names
Function arguments should use mixedCase. Examples: `initialSupply`, `account`, `recipientAddress`, `senderAddress`, `newOwner`.
When writing library functions that operate on a custom struct, the struct should be the first argument and should always be named `self`.
### Local and State Variable Names
Use mixedCase. Examples: `totalSupply`, `remainingSupply`, `balancesOf`, `creatorAddress`, `isPreSale`, `tokenExchangeRate`.
### Constants
Constants should be named with all capital letters with underscores separating words. Examples: `MAX_BLOCKS`, `TOKEN_NAME`, `TOKEN_TICKER`, `CONTRACT_VERSION`.
### Modifier Names
Use mixedCase. Examples: `onlyBy`, `onlyAfter`, `onlyDuringThePreSale`.
### Enums
Enums, in the style of simple type declarations, should be named using the CapWords style. Examples: `TokenGroup`, `Frame`, `HashStyle`, `CharacterLocation`.
### Avoiding Naming Collisions
  * `singleTrailingUnderscore_`


This convention is suggested when the desired name collides with that of an existing state variable, function, built-in or otherwise reserved name.
### Underscore Prefix for Non-external Functions and Variables
  * `_singleLeadingUnderscore`


This convention is suggested for non-external functions and state variables (`private` or `internal`). State variables without a specified visibility are `internal` by default.
When designing a smart contract, the public-facing API (functions that can be called by any account) is an important consideration. Leading underscores allow you to immediately recognize the intent of such functions, but more importantly, if you change a function from non-external to external (including `public`) and rename it accordingly, this forces you to review every call site while renaming. This can be an important manual check against unintended external functions and a common source of security vulnerabilities (avoid find-replace-all tooling for this change).
## NatSpec
Solidity contracts can also contain NatSpec comments. They are written with a triple slash (`///`) or a double asterisk block (`/** ... */`) and they should be used directly above function declarations or statements.
For example, the contract from a simple smart contract with the comments added looks like the one below:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.16<0.9.0;
/// @author The Solidity Team
/// @title A simple storage example
contractSimpleStorage{
uintstoredData;
/// Store `x`.
/// @param x the new value to store
/// @dev stores the number in the state variable `storedData`
functionset(uintx)public{
storedData=x;
}
/// Return the stored value.
/// @dev retrieves the value of the state variable `storedData`
/// @return the stored value
functionget()publicviewreturns(uint){
returnstoredData;
}
}

```

It is recommended that Solidity contracts are fully annotated using NatSpec for all public interfaces (everything in the ABI).
Please see the section about NatSpec for a detailed explanation.
