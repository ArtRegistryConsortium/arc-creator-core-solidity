![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Structure of a Contract
  * Edit on GitHub


# Structure of a Contract
Contracts in Solidity are similar to classes in object-oriented languages. Each contract can contain declarations of State Variables, Functions, Function Modifiers, Events, Errors, Struct Types and Enum Types. Furthermore, contracts can inherit from other contracts.
There are also special kinds of contracts called libraries and interfaces.
The section about contracts contains more details than this section, which serves to provide a quick overview.
## State Variables
State variables are variables whose values are either permanently stored in contract storage or, alternatively, temporarily stored in transient storage which is cleaned at the end of each transaction. See data locations for more details.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractSimpleStorage{
uintstoredData;// State variable
// ...
}

```

See the Types section for valid state variable types and Visibility and Getters for possible choices for visibility.
## Functions
Functions are the executable units of code. Functions are usually defined inside a contract, but they can also be defined outside of contracts.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.1<0.9.0;
contractSimpleAuction{
functionbid()publicpayable{// Function
// ...
}
}
// Helper function defined outside of a contract
functionhelper(uintx)purereturns(uint){
returnx*2;
}

```

Function Calls can happen internally or externally and have different levels of visibility towards other contracts. Functions accept parameters and return variables to pass parameters and values between them.
## Function Modifiers
Function modifiers can be used to amend the semantics of functions in a declarative way (see Function Modifiers in the contracts section).
Overloading, that is, having the same modifier name with different parameters, is not possible.
Like functions, modifiers can be overridden.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.22<0.9.0;
contractPurchase{
addresspublic seller;
modifieronlySeller(){// Modifier
require(
msg.sender==seller,
"Only seller can call this."
);
_;
}
functionabort()publicviewonlySeller{// Modifier usage
// ...
}
}

```

## Events
Events are convenience interfaces with the EVM logging facilities.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.22;
eventHighestBidIncreased(addressbidder,uintamount);// Event
contractSimpleAuction{
functionbid()publicpayable{
// ...
emitHighestBidIncreased(msg.sender,msg.value);// Triggering event
}
}

```

See Events in contracts section for information on how events are declared and can be used from within a dapp.
## Errors
Errors allow you to define descriptive names and data for failure situations. Errors can be used in revert statements. In comparison to string descriptions, errors are much cheaper and allow you to encode additional data. You can use NatSpec to describe the error to the user.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
/// Not enough funds for transfer. Requested `requested`,
/// but only `available` available.
errorNotEnoughFunds(uintrequested,uintavailable);
contractToken{
mapping(address=>uint)balances;
functiontransfer(addressto,uintamount)public{
uintbalance=balances[msg.sender];
if(balance<amount)
revertNotEnoughFunds(amount,balance);
balances[msg.sender]-=amount;
balances[to]+=amount;
// ...
}
}

```

See Custom Errors in the contracts section for more information.
## Struct Types
Structs are custom defined types that can group several variables (see Structs in types section).
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractBallot{
structVoter{// Struct
uintweight;
boolvoted;
addressdelegate;
uintvote;
}
}

```

## Enum Types
Enums can be used to create custom types with a finite set of ‘constant values’ (see Enums in types section).
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.4.0<0.9.0;
contractPurchase{
enumState{Created,Locked,Inactive}// Enum
}

```

