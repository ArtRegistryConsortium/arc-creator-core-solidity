![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Solidity by Example
  * Edit on GitHub


# Solidity by Example
## Voting
The following contract is quite complex, but showcases a lot of Solidity’s features. It implements a voting contract. Of course, the main problems of electronic voting is how to assign voting rights to the correct persons and how to prevent manipulation. We will not solve all problems here, but at least we will show how delegated voting can be done so that vote counting is **automatic and completely transparent** at the same time.
The idea is to create one contract per ballot, providing a short name for each option. Then the creator of the contract who serves as chairperson will give the right to vote to each address individually.
The persons behind the addresses can then choose to either vote themselves or to delegate their vote to a person they trust.
At the end of the voting time, `winningProposal()` will return the proposal with the largest number of votes.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
/// @title Voting with delegation.
contractBallot{
// This declares a new complex type which will
// be used for variables later.
// It will represent a single voter.
structVoter{
uintweight;// weight is accumulated by delegation
boolvoted;// if true, that person already voted
addressdelegate;// person delegated to
uintvote;// index of the voted proposal
}
// This is a type for a single proposal.
structProposal{
bytes32name;// short name (up to 32 bytes)
uintvoteCount;// number of accumulated votes
}
addresspublic chairperson;
// This declares a state variable that
// stores a `Voter` struct for each possible address.
mapping(address=>Voter)publicvoters;
// A dynamically-sized array of `Proposal` structs.
Proposal[]publicproposals;
/// Create a new ballot to choose one of `proposalNames`.
constructor(bytes32[]memoryproposalNames){
chairperson=msg.sender;
voters[chairperson].weight=1;
// For each of the provided proposal names,
// create a new proposal object and add it
// to the end of the array.
for(uinti=0;i<proposalNames.length;i++){
// `Proposal({...})` creates a temporary
// Proposal object and `proposals.push(...)`
// appends it to the end of `proposals`.
proposals.push(Proposal({
name:proposalNames[i],
voteCount:0
}));
}
}
// Give `voter` the right to vote on this ballot.
// May only be called by `chairperson`.
functiongiveRightToVote(addressvoter)external{
// If the first argument of `require` evaluates
// to `false`, execution terminates and all
// changes to the state and to Ether balances
// are reverted.
// This used to consume all gas in old EVM versions, but
// not anymore.
// It is often a good idea to use `require` to check if
// functions are called correctly.
// As a second argument, you can also provide an
// explanation about what went wrong.
require(
msg.sender==chairperson,
"Only chairperson can give right to vote."
);
require(
!voters[voter].voted,
"The voter already voted."
);
require(voters[voter].weight==0);
voters[voter].weight=1;
}
/// Delegate your vote to the voter `to`.
functiondelegate(addressto)external{
// assigns reference
Voterstoragesender=voters[msg.sender];
require(sender.weight!=0,"You have no right to vote");
require(!sender.voted,"You already voted.");
require(to!=msg.sender,"Self-delegation is disallowed.");
// Forward the delegation as long as
// `to` also delegated.
// In general, such loops are very dangerous,
// because if they run too long, they might
// need more gas than is available in a block.
// In this case, the delegation will not be executed,
// but in other situations, such loops might
// cause a contract to get "stuck" completely.
while(voters[to].delegate!=address(0)){
to=voters[to].delegate;
// We found a loop in the delegation, not allowed.
require(to!=msg.sender,"Found loop in delegation.");
}
Voterstoragedelegate_=voters[to];
// Voters cannot delegate to accounts that cannot vote.
require(delegate_.weight>=1);
// Since `sender` is a reference, this
// modifies `voters[msg.sender]`.
sender.voted=true;
sender.delegate=to;
if(delegate_.voted){
// If the delegate already voted,
// directly add to the number of votes
proposals[delegate_.vote].voteCount+=sender.weight;
}else{
// If the delegate did not vote yet,
// add to her weight.
delegate_.weight+=sender.weight;
}
}
/// Give your vote (including votes delegated to you)
/// to proposal `proposals[proposal].name`.
functionvote(uintproposal)external{
Voterstoragesender=voters[msg.sender];
require(sender.weight!=0,"Has no right to vote");
require(!sender.voted,"Already voted.");
sender.voted=true;
sender.vote=proposal;
// If `proposal` is out of the range of the array,
// this will throw automatically and revert all
// changes.
proposals[proposal].voteCount+=sender.weight;
}
/// @dev Computes the winning proposal taking all
/// previous votes into account.
functionwinningProposal()publicview
returns(uintwinningProposal_)
{
uintwinningVoteCount=0;
for(uintp=0;p<proposals.length;p++){
if(proposals[p].voteCount>winningVoteCount){
winningVoteCount=proposals[p].voteCount;
winningProposal_=p;
}
}
}
// Calls winningProposal() function to get the index
// of the winner contained in the proposals array and then
// returns the name of the winner
functionwinnerName()externalview
returns(bytes32winnerName_)
{
winnerName_=proposals[winningProposal()].name;
}
}

```

### Possible Improvements
Currently, many transactions are needed to assign the rights to vote to all participants. Moreover, if two or more proposals have the same number of votes, `winningProposal()` is not able to register a tie. Can you think of a way to fix these issues?
## Blind Auction
In this section, we will show how easy it is to create a completely blind auction contract on Ethereum. We will start with an open auction where everyone can see the bids that are made and then extend this contract into a blind auction where it is not possible to see the actual bid until the bidding period ends.
### Simple Open Auction
The general idea of the following simple auction contract is that everyone can send their bids during a bidding period. The bids already include sending some compensation, e.g. Ether, in order to bind the bidders to their bid. If the highest bid is raised, the previous highest bidder gets their Ether back. After the end of the bidding period, the contract has to be called manually for the beneficiary to receive their Ether - contracts cannot activate themselves.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractSimpleAuction{
// Parameters of the auction. Times are either
// absolute unix timestamps (seconds since 1970-01-01)
// or time periods in seconds.
addresspayablepublicbeneficiary;
uintpublic auctionEndTime;
// Current state of the auction.
addresspublic highestBidder;
uintpublic highestBid;
// Allowed withdrawals of previous bids
mapping(address=>uint)pendingReturns;
// Set to true at the end, disallows any change.
// By default initialized to `false`.
boolended;
// Events that will be emitted on changes.
eventHighestBidIncreased(addressbidder,uintamount);
eventAuctionEnded(addresswinner,uintamount);
// Errors that describe failures.
// The triple-slash comments are so-called natspec
// comments. They will be shown when the user
// is asked to confirm a transaction or
// when an error is displayed.
/// The auction has already ended.
errorAuctionAlreadyEnded();
/// There is already a higher or equal bid.
errorBidNotHighEnough(uinthighestBid);
/// The auction has not ended yet.
errorAuctionNotYetEnded();
/// The function auctionEnd has already been called.
errorAuctionEndAlreadyCalled();
/// Create a simple auction with `biddingTime`
/// seconds bidding time on behalf of the
/// beneficiary address `beneficiaryAddress`.
constructor(
uintbiddingTime,
addresspayablebeneficiaryAddress
){
beneficiary=beneficiaryAddress;
auctionEndTime=block.timestamp+biddingTime;
}
/// Bid on the auction with the value sent
/// together with this transaction.
/// The value will only be refunded if the
/// auction is not won.
functionbid()externalpayable{
// No arguments are necessary, all
// information is already part of
// the transaction. The keyword payable
// is required for the function to
// be able to receive Ether.
// Revert the call if the bidding
// period is over.
if(block.timestamp>auctionEndTime)
revertAuctionAlreadyEnded();
// If the bid is not higher, send the
// Ether back (the revert statement
// will revert all changes in this
// function execution including
// it having received the Ether).
if(msg.value<=highestBid)
revertBidNotHighEnough(highestBid);
if(highestBid!=0){
// Sending back the Ether by simply using
// highestBidder.send(highestBid) is a security risk
// because it could execute an untrusted contract.
// It is always safer to let the recipients
// withdraw their Ether themselves.
pendingReturns[highestBidder]+=highestBid;
}
highestBidder=msg.sender;
highestBid=msg.value;
emitHighestBidIncreased(msg.sender,msg.value);
}
/// Withdraw a bid that was overbid.
functionwithdraw()externalreturns(bool){
uintamount=pendingReturns[msg.sender];
if(amount>0){
// It is important to set this to zero because the recipient
// can call this function again as part of the receiving call
// before `send` returns.
pendingReturns[msg.sender]=0;
// msg.sender is not of type `address payable` and must be
// explicitly converted using `payable(msg.sender)` in order
// use the member function `send()`.
if(!payable(msg.sender).send(amount)){
// No need to call throw here, just reset the amount owing
pendingReturns[msg.sender]=amount;
returnfalse;
}
}
returntrue;
}
/// End the auction and send the highest bid
/// to the beneficiary.
functionauctionEnd()external{
// It is a good guideline to structure functions that interact
// with other contracts (i.e. they call functions or send Ether)
// into three phases:
// 1. checking conditions
// 2. performing actions (potentially changing conditions)
// 3. interacting with other contracts
// If these phases are mixed up, the other contract could call
// back into the current contract and modify the state or cause
// effects (ether payout) to be performed multiple times.
// If functions called internally include interaction with external
// contracts, they also have to be considered interaction with
// external contracts.
// 1. Conditions
if(block.timestamp<auctionEndTime)
revertAuctionNotYetEnded();
if(ended)
revertAuctionEndAlreadyCalled();
// 2. Effects
ended=true;
emitAuctionEnded(highestBidder,highestBid);
// 3. Interaction
beneficiary.transfer(highestBid);
}
}

```

### Blind Auction
The previous open auction is extended to a blind auction in the following. The advantage of a blind auction is that there is no time pressure towards the end of the bidding period. Creating a blind auction on a transparent computing platform might sound like a contradiction, but cryptography comes to the rescue.
During the **bidding period** , a bidder does not actually send their bid, but only a hashed version of it. Since it is currently considered practically impossible to find two (sufficiently long) values whose hash values are equal, the bidder commits to the bid by that. After the end of the bidding period, the bidders have to reveal their bids: They send their values unencrypted, and the contract checks that the hash value is the same as the one provided during the bidding period.
Another challenge is how to make the auction **binding and blind** at the same time: The only way to prevent the bidder from just not sending the Ether after they won the auction is to make them send it together with the bid. Since value transfers cannot be blinded in Ethereum, anyone can see the value.
The following contract solves this problem by accepting any value that is larger than the highest bid. Since this can of course only be checked during the reveal phase, some bids might be **invalid** , and this is on purpose (it even provides an explicit flag to place invalid bids with high-value transfers): Bidders can confuse competition by placing several high or low invalid bids.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractBlindAuction{
structBid{
bytes32blindedBid;
uintdeposit;
}
addresspayablepublicbeneficiary;
uintpublic biddingEnd;
uintpublic revealEnd;
boolpublic ended;
mapping(address=>Bid[])publicbids;
addresspublic highestBidder;
uintpublic highestBid;
// Allowed withdrawals of previous bids
mapping(address=>uint)pendingReturns;
eventAuctionEnded(addresswinner,uinthighestBid);
// Errors that describe failures.
/// The function has been called too early.
/// Try again at `time`.
errorTooEarly(uinttime);
/// The function has been called too late.
/// It cannot be called after `time`.
errorTooLate(uinttime);
/// The function auctionEnd has already been called.
errorAuctionEndAlreadyCalled();
// Modifiers are a convenient way to validate inputs to
// functions. `onlyBefore` is applied to `bid` below:
// The new function body is the modifier's body where
// `_` is replaced by the old function body.
modifieronlyBefore(uinttime){
if(block.timestamp>=time)revertTooLate(time);
_;
}
modifieronlyAfter(uinttime){
if(block.timestamp<=time)revertTooEarly(time);
_;
}
constructor(
uintbiddingTime,
uintrevealTime,
addresspayablebeneficiaryAddress
){
beneficiary=beneficiaryAddress;
biddingEnd=block.timestamp+biddingTime;
revealEnd=biddingEnd+revealTime;
}
/// Place a blinded bid with `blindedBid` =
/// keccak256(abi.encodePacked(value, fake, secret)).
/// The sent ether is only refunded if the bid is correctly
/// revealed in the revealing phase. The bid is valid if the
/// ether sent together with the bid is at least "value" and
/// "fake" is not true. Setting "fake" to true and sending
/// not the exact amount are ways to hide the real bid but
/// still make the required deposit. The same address can
/// place multiple bids.
functionbid(bytes32blindedBid)
external
payable
onlyBefore(biddingEnd)
{
bids[msg.sender].push(Bid({
blindedBid:blindedBid,
deposit:msg.value
}));
}
/// Reveal your blinded bids. You will get a refund for all
/// correctly blinded invalid bids and for all bids except for
/// the totally highest.
functionreveal(
uint[]calldatavalues,
bool[]calldatafakes,
bytes32[]calldatasecrets
)
external
onlyAfter(biddingEnd)
onlyBefore(revealEnd)
{
uintlength=bids[msg.sender].length;
require(values.length==length);
require(fakes.length==length);
require(secrets.length==length);
uintrefund;
for(uinti=0;i<length;i++){
BidstoragebidToCheck=bids[msg.sender][i];
(uintvalue,boolfake,bytes32secret)=
(values[i],fakes[i],secrets[i]);
if(bidToCheck.blindedBid!=keccak256(abi.encodePacked(value,fake,secret))){
// Bid was not actually revealed.
// Do not refund deposit.
continue;
}
refund+=bidToCheck.deposit;
if(!fake&&bidToCheck.deposit>=value){
if(placeBid(msg.sender,value))
refund-=value;
}
// Make it impossible for the sender to re-claim
// the same deposit.
bidToCheck.blindedBid=bytes32(0);
}
payable(msg.sender).transfer(refund);
}
/// Withdraw a bid that was overbid.
functionwithdraw()external{
uintamount=pendingReturns[msg.sender];
if(amount>0){
// It is important to set this to zero because the recipient
// can call this function again as part of the receiving call
// before `transfer` returns (see the remark above about
// conditions -> effects -> interaction).
pendingReturns[msg.sender]=0;
payable(msg.sender).transfer(amount);
}
}
/// End the auction and send the highest bid
/// to the beneficiary.
functionauctionEnd()
external
onlyAfter(revealEnd)
{
if(ended)revertAuctionEndAlreadyCalled();
emitAuctionEnded(highestBidder,highestBid);
ended=true;
beneficiary.transfer(highestBid);
}
// This is an "internal" function which means that it
// can only be called from the contract itself (or from
// derived contracts).
functionplaceBid(addressbidder,uintvalue)internal
returns(boolsuccess)
{
if(value<=highestBid){
returnfalse;
}
if(highestBidder!=address(0)){
// Refund the previously highest bidder.
pendingReturns[highestBidder]+=highestBid;
}
highestBid=value;
highestBidder=bidder;
returntrue;
}
}

```

## Safe Remote Purchase
Purchasing goods remotely currently requires multiple parties that need to trust each other. The simplest configuration involves a seller and a buyer. The buyer would like to receive an item from the seller and the seller would like to get some compensation, e.g. Ether, in return. The problematic part is the shipment here: There is no way to determine for sure that the item arrived at the buyer.
There are multiple ways to solve this problem, but all fall short in one or the other way. In the following example, both parties have to put twice the value of the item into the contract as escrow. As soon as this happened, the Ether will stay locked inside the contract until the buyer confirms that they received the item. After that, the buyer is returned the value (half of their deposit) and the seller gets three times the value (their deposit plus the value). The idea behind this is that both parties have an incentive to resolve the situation or otherwise their Ether is locked forever.
This contract of course does not solve the problem, but gives an overview of how you can use state machine-like constructs inside a contract.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity^0.8.4;
contractPurchase{
uintpublic value;
addresspayablepublicseller;
addresspayablepublicbuyer;
enumState{Created,Locked,Release,Inactive}
// The state variable has a default value of the first member, `State.created`
Statepublicstate;
modifiercondition(boolcondition_){
require(condition_);
_;
}
/// Only the buyer can call this function.
errorOnlyBuyer();
/// Only the seller can call this function.
errorOnlySeller();
/// The function cannot be called at the current state.
errorInvalidState();
/// The provided value has to be even.
errorValueNotEven();
modifieronlyBuyer(){
if(msg.sender!=buyer)
revertOnlyBuyer();
_;
}
modifieronlySeller(){
if(msg.sender!=seller)
revertOnlySeller();
_;
}
modifierinState(Statestate_){
if(state!=state_)
revertInvalidState();
_;
}
eventAborted();
eventPurchaseConfirmed();
eventItemReceived();
eventSellerRefunded();
// Ensure that `msg.value` is an even number.
// Division will truncate if it is an odd number.
// Check via multiplication that it wasn't an odd number.
constructor()payable{
seller=payable(msg.sender);
value=msg.value/2;
if((2*value)!=msg.value)
revertValueNotEven();
}
/// Abort the purchase and reclaim the ether.
/// Can only be called by the seller before
/// the contract is locked.
functionabort()
external
onlySeller
inState(State.Created)
{
emitAborted();
state=State.Inactive;
// We use transfer here directly. It is
// reentrancy-safe, because it is the
// last call in this function and we
// already changed the state.
seller.transfer(address(this).balance);
}
/// Confirm the purchase as buyer.
/// Transaction has to include `2 * value` ether.
/// The ether will be locked until confirmReceived
/// is called.
functionconfirmPurchase()
external
inState(State.Created)
condition(msg.value==(2*value))
payable
{
emitPurchaseConfirmed();
buyer=payable(msg.sender);
state=State.Locked;
}
/// Confirm that you (the buyer) received the item.
/// This will release the locked ether.
functionconfirmReceived()
external
onlyBuyer
inState(State.Locked)
{
emitItemReceived();
// It is important to change the state first because
// otherwise, the contracts called using `send` below
// can call in again here.
state=State.Release;
buyer.transfer(value);
}
/// This function refunds the seller, i.e.
/// pays back the locked funds of the seller.
functionrefundSeller()
external
onlySeller
inState(State.Release)
{
emitSellerRefunded();
// It is important to change the state first because
// otherwise, the contracts called using `send` below
// can call in again here.
state=State.Inactive;
seller.transfer(3*value);
}
}

```

## Micropayment Channel
In this section, we will learn how to build an example implementation of a payment channel. It uses cryptographic signatures to make repeated transfers of Ether between the same parties secure, instantaneous, and without transaction fees. For the example, we need to understand how to sign and verify signatures, and setup the payment channel.
### Creating and verifying signatures
Imagine Alice wants to send some Ether to Bob, i.e. Alice is the sender and Bob is the recipient.
Alice only needs to send cryptographically signed messages off-chain (e.g. via email) to Bob and it is similar to writing checks.
Alice and Bob use signatures to authorize transactions, which is possible with smart contracts on Ethereum. Alice will build a simple smart contract that lets her transmit Ether, but instead of calling a function herself to initiate a payment, she will let Bob do that, and therefore pay the transaction fee.
The contract will work as follows:
>   1. Alice deploys the `ReceiverPays` contract, attaching enough Ether to cover the payments that will be made.
>   2. Alice authorizes a payment by signing a message with her private key.
>   3. Alice sends the cryptographically signed message to Bob. The message does not need to be kept secret (explained later), and the mechanism for sending it does not matter.
>   4. Bob claims his payment by presenting the signed message to the smart contract, it verifies the authenticity of the message and then releases the funds.
> 

#### Creating the signature
Alice does not need to interact with the Ethereum network to sign the transaction, the process is completely offline. In this tutorial, we will sign messages in the browser using web3.js and MetaMask, using the method described in EIP-712, as it provides a number of other security benefits.
```
/// Hashing first makes things easier
varhash=web3.utils.sha3("message to sign");
web3.eth.personal.sign(hash,web3.eth.defaultAccount,function(){console.log("Signed");});

```

Note
The `web3.eth.personal.sign` prepends the length of the message to the signed data. Since we hash first, the message will always be exactly 32 bytes long, and thus this length prefix is always the same.
#### What to Sign
For a contract that fulfills payments, the signed message must include:
>   1. The recipient’s address.
>   2. The amount to be transferred.
>   3. Protection against replay attacks.
> 

A replay attack is when a signed message is reused to claim authorization for a second action. To avoid replay attacks we use the same technique as in Ethereum transactions themselves, a so-called nonce, which is the number of transactions sent by an account. The smart contract checks if a nonce is used multiple times.
Another type of replay attack can occur when the owner deploys a `ReceiverPays` smart contract, makes some payments, and then destroys the contract. Later, they decide to deploy the `RecipientPays` smart contract again, but the new contract does not know the nonces used in the previous deployment, so the attacker can use the old messages again.
Alice can protect against this attack by including the contract’s address in the message, and only messages containing the contract’s address itself will be accepted. You can find an example of this in the first two lines of the `claimPayment()` function of the full contract at the end of this section.
Furthermore, instead of destroying the contract by calling `selfdestruct`, which is currently deprecated, we will disable the contract’s functionalities by freezing it, resulting in the reversion of any call after it being frozen.
#### Packing arguments
Now that we have identified what information to include in the signed message, we are ready to put the message together, hash it, and sign it. For simplicity, we concatenate the data. The ethereumjs-abi library provides a function called `soliditySHA3` that mimics the behavior of Solidity’s `keccak256` function applied to arguments encoded using `abi.encodePacked`. Here is a JavaScript function that creates the proper signature for the `ReceiverPays` example:
```
// recipient is the address that should be paid.
// amount, in wei, specifies how much ether should be sent.
// nonce can be any unique number to prevent replay attacks
// contractAddress is used to prevent cross-contract replay attacks
functionsignPayment(recipient,amount,nonce,contractAddress,callback){
varhash="0x"+abi.soliditySHA3(
["address","uint256","uint256","address"],
[recipient,amount,nonce,contractAddress]
).toString("hex");
web3.eth.personal.sign(hash,web3.eth.defaultAccount,callback);
}

```

#### Recovering the Message Signer in Solidity
In general, ECDSA signatures consist of two parameters, `r` and `s`. Signatures in Ethereum include a third parameter called `v`, that you can use to verify which account’s private key was used to sign the message, and the transaction’s sender. Solidity provides a built-in function ecrecover that accepts a message along with the `r`, `s` and `v` parameters and returns the address that was used to sign the message.
#### Extracting the Signature Parameters
Signatures produced by web3.js are the concatenation of `r`, `s` and `v`, so the first step is to split these parameters apart. You can do this on the client-side, but doing it inside the smart contract means you only need to send one signature parameter rather than three. Splitting apart a byte array into its constituent parts is a mess, so we use inline assembly to do the job in the `splitSignature` function (the third function in the full contract at the end of this section).
#### Computing the Message Hash
The smart contract needs to know exactly what parameters were signed, and so it must recreate the message from the parameters and use that for signature verification. The functions `prefixed` and `recoverSigner` do this in the `claimPayment` function.
#### The full contract
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractOwned{
addresspayableowner;
constructor(){
owner=payable(msg.sender);
}
}
contractFreezableisOwned{
boolprivate _frozen=false;
modifiernotFrozen(){
require(!_frozen,"Inactive Contract.");
_;
}
functionfreeze()internal{
if(msg.sender==owner)
_frozen=true;
}
}
contractReceiverPaysisFreezable{
mapping(uint256=>bool)usedNonces;
constructor()payable{}
functionclaimPayment(uint256amount,uint256nonce,bytesmemorysignature)
external
notFrozen
{
require(!usedNonces[nonce]);
usedNonces[nonce]=true;
// this recreates the message that was signed on the client
bytes32message=prefixed(keccak256(abi.encodePacked(msg.sender,amount,nonce,this)));
require(recoverSigner(message,signature)==owner);
payable(msg.sender).transfer(amount);
}
/// freeze the contract and reclaim the leftover funds.
functionshutdown()
external
notFrozen
{
require(msg.sender==owner);
freeze();
payable(msg.sender).transfer(address(this).balance);
}
/// signature methods.
functionsplitSignature(bytesmemorysig)
internal
pure
returns(uint8v,bytes32r,bytes32s)
{
require(sig.length==65);
assembly{
// first 32 bytes, after the length prefix.
r:=mload(add(sig,32))
// second 32 bytes.
s:=mload(add(sig,64))
// final byte (first byte of the next 32 bytes).
v:=byte(0,mload(add(sig,96)))
}
return(v,r,s);
}
functionrecoverSigner(bytes32message,bytesmemorysig)
internal
pure
returns(address)
{
(uint8v,bytes32r,bytes32s)=splitSignature(sig);
returnecrecover(message,v,r,s);
}
/// builds a prefixed hash to mimic the behavior of eth_sign.
functionprefixed(bytes32hash)internalpurereturns(bytes32){
returnkeccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32",hash));
}
}

```

### Writing a Simple Payment Channel
Alice now builds a simple but complete implementation of a payment channel. Payment channels use cryptographic signatures to make repeated transfers of Ether securely, instantaneously, and without transaction fees.
#### What is a Payment Channel?
Payment channels allow participants to make repeated transfers of Ether without using transactions. This means that you can avoid the delays and fees associated with transactions. We are going to explore a simple unidirectional payment channel between two parties (Alice and Bob). It involves three steps:
>   1. Alice funds a smart contract with Ether. This “opens” the payment channel.
>   2. Alice signs messages that specify how much of that Ether is owed to the recipient. This step is repeated for each payment.
>   3. Bob “closes” the payment channel, withdrawing his portion of the Ether and sending the remainder back to the sender.
> 

Note
Only steps 1 and 3 require Ethereum transactions, step 2 means that the sender transmits a cryptographically signed message to the recipient via off chain methods (e.g. email). This means only two transactions are required to support any number of transfers.
Bob is guaranteed to receive his funds because the smart contract escrows the Ether and honours a valid signed message. The smart contract also enforces a timeout, so Alice is guaranteed to eventually recover her funds even if the recipient refuses to close the channel. It is up to the participants in a payment channel to decide how long to keep it open. For a short-lived transaction, such as paying an internet café for each minute of network access, the payment channel may be kept open for a limited duration. On the other hand, for a recurring payment, such as paying an employee an hourly wage, the payment channel may be kept open for several months or years.
#### Opening the Payment Channel
To open the payment channel, Alice deploys the smart contract, attaching the Ether to be escrowed and specifying the intended recipient and a maximum duration for the channel to exist. This is the function `SimplePaymentChannel` in the contract, at the end of this section.
#### Making Payments
Alice makes payments by sending signed messages to Bob. This step is performed entirely outside of the Ethereum network. Messages are cryptographically signed by the sender and then transmitted directly to the recipient.
Each message includes the following information:
>   * The smart contract’s address, used to prevent cross-contract replay attacks.
>   * The total amount of Ether that is owed to the recipient so far.
> 

A payment channel is closed just once, at the end of a series of transfers. Because of this, only one of the messages sent is redeemed. This is why each message specifies a cumulative total amount of Ether owed, rather than the amount of the individual micropayment. The recipient will naturally choose to redeem the most recent message because that is the one with the highest total. The nonce per-message is not needed anymore, because the smart contract only honours a single message. The address of the smart contract is still used to prevent a message intended for one payment channel from being used for a different channel.
Here is the modified JavaScript code to cryptographically sign a message from the previous section:
```
functionconstructPaymentMessage(contractAddress,amount){
returnabi.soliditySHA3(
["address","uint256"],
[contractAddress,amount]
);
}
functionsignMessage(message,callback){
web3.eth.personal.sign(
"0x"+message.toString("hex"),
web3.eth.defaultAccount,
callback
);
}
// contractAddress is used to prevent cross-contract replay attacks.
// amount, in wei, specifies how much Ether should be sent.
functionsignPayment(contractAddress,amount,callback){
varmessage=constructPaymentMessage(contractAddress,amount);
signMessage(message,callback);
}

```

#### Closing the Payment Channel
When Bob is ready to receive his funds, it is time to close the payment channel by calling a `close` function on the smart contract. Closing the channel pays the recipient the Ether they are owed and deactivates the contract by freezing it, sending any remaining Ether back to Alice. To close the channel, Bob needs to provide a message signed by Alice.
The smart contract must verify that the message contains a valid signature from the sender. The process for doing this verification is the same as the process the recipient uses. The Solidity functions `isValidSignature` and `recoverSigner` work just like their JavaScript counterparts in the previous section, with the latter function borrowed from the `ReceiverPays` contract.
Only the payment channel recipient can call the `close` function, who naturally passes the most recent payment message because that message carries the highest total owed. If the sender were allowed to call this function, they could provide a message with a lower amount and cheat the recipient out of what they are owed.
The function verifies the signed message matches the given parameters. If everything checks out, the recipient is sent their portion of the Ether, and the sender is sent the remaining funds via a `transfer`. You can see the `close` function in the full contract.
#### Channel Expiration
Bob can close the payment channel at any time, but if they fail to do so, Alice needs a way to recover her escrowed funds. An _expiration_ time was set at the time of contract deployment. Once that time is reached, Alice can call `claimTimeout` to recover her funds. You can see the `claimTimeout` function in the full contract.
After this function is called, Bob can no longer receive any Ether, so it is important that Bob closes the channel before the expiration is reached.
#### The full contract
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.7.0<0.9.0;
contractFrozeable{
boolprivate _frozen=false;
modifiernotFrozen(){
require(!_frozen,"Inactive Contract.");
_;
}
functionfreeze()internal{
_frozen=true;
}
}
contractSimplePaymentChannelisFrozeable{
addresspayablepublicsender;// The account sending payments.
addresspayablepublicrecipient;// The account receiving the payments.
uint256public expiration;// Timeout in case the recipient never closes.
constructor(addresspayablerecipientAddress,uint256duration)
payable
{
sender=payable(msg.sender);
recipient=recipientAddress;
expiration=block.timestamp+duration;
}
/// the recipient can close the channel at any time by presenting a
/// signed amount from the sender. the recipient will be sent that amount,
/// and the remainder will go back to the sender
functionclose(uint256amount,bytesmemorysignature)
external
notFrozen
{
require(msg.sender==recipient);
require(isValidSignature(amount,signature));
recipient.transfer(amount);
freeze();
sender.transfer(address(this).balance);
}
/// the sender can extend the expiration at any time
functionextend(uint256newExpiration)
external
notFrozen
{
require(msg.sender==sender);
require(newExpiration>expiration);
expiration=newExpiration;
}
/// if the timeout is reached without the recipient closing the channel,
/// then the Ether is released back to the sender.
functionclaimTimeout()
external
notFrozen
{
require(block.timestamp>=expiration);
freeze();
sender.transfer(address(this).balance);
}
functionisValidSignature(uint256amount,bytesmemorysignature)
internal
view
returns(bool)
{
bytes32message=prefixed(keccak256(abi.encodePacked(this,amount)));
// check that the signature is from the payment sender
returnrecoverSigner(message,signature)==sender;
}
/// All functions below this are just taken from the chapter
/// 'creating and verifying signatures' chapter.
functionsplitSignature(bytesmemorysig)
internal
pure
returns(uint8v,bytes32r,bytes32s)
{
require(sig.length==65);
assembly{
// first 32 bytes, after the length prefix
r:=mload(add(sig,32))
// second 32 bytes
s:=mload(add(sig,64))
// final byte (first byte of the next 32 bytes)
v:=byte(0,mload(add(sig,96)))
}
return(v,r,s);
}
functionrecoverSigner(bytes32message,bytesmemorysig)
internal
pure
returns(address)
{
(uint8v,bytes32r,bytes32s)=splitSignature(sig);
returnecrecover(message,v,r,s);
}
/// builds a prefixed hash to mimic the behavior of eth_sign.
functionprefixed(bytes32hash)internalpurereturns(bytes32){
returnkeccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32",hash));
}
}

```

Note
The function `splitSignature` does not use all security checks. A real implementation should use a more rigorously tested library, such as openzeppelin’s version of this code.
#### Verifying Payments
Unlike in the previous section, messages in a payment channel aren’t redeemed right away. The recipient keeps track of the latest message and redeems it when it’s time to close the payment channel. This means it’s critical that the recipient perform their own verification of each message. Otherwise there is no guarantee that the recipient will be able to get paid in the end.
The recipient should verify each message using the following process:
>   1. Verify that the contract address in the message matches the payment channel.
>   2. Verify that the new total is the expected amount.
>   3. Verify that the new total does not exceed the amount of Ether escrowed.
>   4. Verify that the signature is valid and comes from the payment channel sender.
> 

We’ll use the ethereumjs-util library to write this verification. The final step can be done a number of ways, and we use JavaScript. The following code borrows the `constructPaymentMessage` function from the signing **JavaScript code** above:
```
// this mimics the prefixing behavior of the eth_sign JSON-RPC method.
functionprefixed(hash){
returnethereumjs.ABI.soliditySHA3(
["string","bytes32"],
["\x19Ethereum Signed Message:\n32",hash]
);
}
functionrecoverSigner(message,signature){
varsplit=ethereumjs.Util.fromRpcSig(signature);
varpublicKey=ethereumjs.Util.ecrecover(message,split.v,split.r,split.s);
varsigner=ethereumjs.Util.pubToAddress(publicKey).toString("hex");
returnsigner;
}
functionisValidSignature(contractAddress,amount,signature,expectedSigner){
varmessage=prefixed(constructPaymentMessage(contractAddress,amount));
varsigner=recoverSigner(message,signature);
returnsigner.toLowerCase()==
ethereumjs.Util.stripHexPrefix(expectedSigner).toLowerCase();
}

```

## Modular Contracts
A modular approach to building your contracts helps you reduce the complexity and improve the readability which will help to identify bugs and vulnerabilities during development and code review. If you specify and control the behavior of each module in isolation, the interactions you have to consider are only those between the module specifications and not every other moving part of the contract. In the example below, the contract uses the `move` method of the `Balances` library to check that balances sent between addresses match what you expect. In this way, the `Balances` library provides an isolated component that properly tracks balances of accounts. It is easy to verify that the `Balances` library never produces negative balances or overflows and the sum of all balances is an invariant across the lifetime of the contract.
open in Remix
```
// SPDX-License-Identifier: GPL-3.0
pragma solidity>=0.5.0<0.9.0;
libraryBalances{
functionmove(mapping(address=>uint256)storagebalances,addressfrom,addressto,uintamount)internal{
require(balances[from]>=amount);
require(balances[to]+amount>=balances[to]);
balances[from]-=amount;
balances[to]+=amount;
}
}
contractToken{
mapping(address=>uint256)balances;
usingBalancesfor*;
mapping(address=>mapping(address=>uint256))allowed;
eventTransfer(addressfrom,addressto,uintamount);
eventApproval(addressowner,addressspender,uintamount);
functiontransfer(addressto,uintamount)externalreturns(boolsuccess){
balances.move(msg.sender,to,amount);
emitTransfer(msg.sender,to,amount);
returntrue;
}
functiontransferFrom(addressfrom,addressto,uintamount)externalreturns(boolsuccess){
require(allowed[from][msg.sender]>=amount);
allowed[from][msg.sender]-=amount;
balances.move(from,to,amount);
emitTransfer(from,to,amount);
returntrue;
}
functionapprove(addressspender,uinttokens)externalreturns(boolsuccess){
require(allowed[msg.sender][spender]==0,"");
allowed[msg.sender][spender]=tokens;
emitApproval(msg.sender,spender,tokens);
returntrue;
}
functionbalanceOf(addresstokenOwner)externalviewreturns(uintbalance){
returnbalances[tokenOwner];
}
}

```

