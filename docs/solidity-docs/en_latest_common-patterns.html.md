![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Common Patterns
  * Edit on GitHub


# Common Patterns
## Withdrawal from Contracts
The recommended method of sending funds after an effect is using the withdrawal pattern. Although the most intuitive method of sending Ether, as a result of an effect, is a direct `transfer` call, this is not recommended as it introduces a potential security risk. You may read more about this on the Security Considerations page.
The following is an example of the withdrawal pattern in practice in a contract where the goal is to send the most of some compensation, e.g. Ether, to the contract in order to become the “richest”, inspired by King of the Ether.
In the following contract, if you are no longer the richest, you receive the funds of the person who is now the richest.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractWithdrawalContract{
addresspublic richest;
uintpublic mostSent;
mapping(address=>uint)pendingWithdrawals;
/// The amount of Ether sent was not higher than
/// the currently highest amount.
errorNotEnoughEther();
constructor()payable{
richest=msg.sender;
mostSent=msg.value;
}
functionbecomeRichest()publicpayable{
if(msg.value<=mostSent)revertNotEnoughEther();
pendingWithdrawals[richest]+=msg.value;
richest=msg.sender;
mostSent=msg.value;
}
functionwithdraw()public{
uintamount=pendingWithdrawals[msg.sender];
// Remember to zero the pending refund before
// sending to prevent reentrancy attacks
pendingWithdrawals[msg.sender]=0;
payable(msg.sender).transfer(amount);
}
}

```

This is as opposed to the more intuitive sending pattern:
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractSendContract{
addresspayablepublicrichest;
uintpublic mostSent;
/// The amount of Ether sent was not higher than
/// the currently highest amount.
errorNotEnoughEther();
constructor()payable{
richest=payable(msg.sender);
mostSent=msg.value;
}
functionbecomeRichest()publicpayable{
if(msg.value<=mostSent)revertNotEnoughEther();
// This line can cause problems (explained below).
richest.transfer(msg.value);
richest=payable(msg.sender);
mostSent=msg.value;
}
}

```

Notice that, in this example, an attacker could trap the contract into an unusable state by causing `richest` to be the address of a contract that has a receive or fallback function which fails (e.g. by using `revert()` or by just consuming more than the 2300 gas stipend transferred to them). That way, whenever `transfer` is called to deliver funds to the “poisoned” contract, it will fail and thus also `becomeRichest` will fail, with the contract being stuck forever.
In contrast, if you use the “withdraw” pattern from the first example, the attacker can only cause his or her own withdraw to fail and not the rest of the contract’s workings.
## Restricting Access
Restricting access is a common pattern for contracts. Note that you can never restrict any human or computer from reading the content of your transactions or your contract’s state. You can make it a bit harder by using encryption, but if your contract is supposed to read the data, so will everyone else.
You can restrict read access to your contract’s state by **other contracts**. That is actually the default unless you declare your state variables `public`.
Furthermore, you can restrict who can make modifications to your contract’s state or call your contract’s functions and this is what this section is about.
The use of **function modifiers** makes these restrictions highly readable.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractAccessRestriction{
// These will be assigned at the construction
// phase, where `msg.sender` is the account
// creating this contract.
addresspublic owner=msg.sender;
uintpublic creationTime=block.timestamp;
// Now follows a list of errors that
// this contract can generate together
// with a textual explanation in special
// comments.
/// Sender not authorized for this
/// operation.
errorUnauthorized();
/// Function called too early.
errorTooEarly();
/// Not enough Ether sent with function call.
errorNotEnoughEther();
// Modifiers can be used to change
// the body of a function.
// If this modifier is used, it will
// prepend a check that only passes
// if the function is called from
// a certain address.
modifieronlyBy(addressaccount)
{
if(msg.sender!=account)
revertUnauthorized();
// Do not forget the "_;"! It will
// be replaced by the actual function
// body when the modifier is used.
_;
}
/// Make `newOwner` the new owner of this
/// contract.
functionchangeOwner(addressnewOwner)
public
onlyBy(owner)
{
owner=newOwner;
}
modifieronlyAfter(uinttime){
if(block.timestamp<time)
revertTooEarly();
_;
}
/// Erase ownership information.
/// May only be called 6 weeks after
/// the contract has been created.
functiondisown()
public
onlyBy(owner)
onlyAfter(creationTime+6weeks)
{
deleteowner;
}
// This modifier requires a certain
// fee being associated with a function call.
// If the caller sent too much, he or she is
// refunded, but only after the function body.
// This was dangerous before Solidity version 0.4.0,
// where it was possible to skip the part after `_;`.
modifiercosts(uintamount){
if(msg.value<amount)
revertNotEnoughEther();
_;
if(msg.value>amount)
payable(msg.sender).transfer(msg.value-amount);
}
functionforceOwnerChange(addressnewOwner)
public
payable
costs(200ether)
{
owner=newOwner;
// just some example condition
if(uint160(owner)&0==1)
// This did not refund for Solidity
// before version 0.4.0.
return;
// refund overpaid fees
}
}

```

A more specialised way in which access to function calls can be restricted will be discussed in the next example.
## State Machine
Contracts often act as a state machine, which means that they have certain **stages** in which they behave differently or in which different functions can be called. A function call often ends a stage and transitions the contract into the next stage (especially if the contract models **interaction**). It is also common that some stages are automatically reached at a certain point in **time**.
An example for this is a blind auction contract which starts in the stage “accepting blinded bids”, then transitions to “revealing bids” which is ended by “determine auction outcome”.
Function modifiers can be used in this situation to model the states and guard against incorrect usage of the contract.
### Example
In the following example, the modifier `atStage` ensures that the function can only be called at a certain stage.
Automatic timed transitions are handled by the modifier `timedTransitions`, which should be used for all functions.
Note
**Modifier Order Matters**. If atStage is combined with timedTransitions, make sure that you mention it after the latter, so that the new stage is taken into account.
Finally, the modifier `transitionNext` can be used to automatically go to the next stage when the function finishes.
Note
**Modifier May be Skipped**. This only applies to Solidity before version 0.4.0: Since modifiers are applied by simply replacing code and not by using a function call, the code in the transitionNext modifier can be skipped if the function itself uses return. If you want to do that, make sure to call nextStage manually from those functions. Starting with version 0.4.0, modifier code will run even if the function explicitly returns.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractStateMachine{
enumStages{
AcceptingBlindedBids,
RevealBids,
AnotherStage,
AreWeDoneYet,
Finished
}
/// Function cannot be called at this time.
errorFunctionInvalidAtThisStage();
// This is the current stage.
Stagespublicstage=Stages.AcceptingBlindedBids;
uintpublic creationTime=block.timestamp;
modifieratStage(Stagesstage_){
if(stage!=stage_)
revertFunctionInvalidAtThisStage();
_;
}
functionnextStage()internal{
stage=Stages(uint(stage)+1);
}
// Perform timed transitions. Be sure to mention
// this modifier first, otherwise the guards
// will not take the new stage into account.
modifiertimedTransitions(){
if(stage==Stages.AcceptingBlindedBids&&
block.timestamp>=creationTime+10days)
nextStage();
if(stage==Stages.RevealBids&&
block.timestamp>=creationTime+12days)
nextStage();
// The other stages transition by transaction
_;
}
// Order of the modifiers matters here!
functionbid()
public
payable
timedTransitions
atStage(Stages.AcceptingBlindedBids)
{
// We will not implement that here
}
functionreveal()
public
timedTransitions
atStage(Stages.RevealBids)
{
}
// This modifier goes to the next stage
// after the function is done.
modifiertransitionNext()
{
_;
nextStage();
}
functiong()
public
timedTransitions
atStage(Stages.AnotherStage)
transitionNext
{
}
functionh()
public
timedTransitions
atStage(Stages.AreWeDoneYet)
transitionNext
{
}
functioni()
public
timedTransitions
atStage(Stages.Finished)
{
}
}

```

