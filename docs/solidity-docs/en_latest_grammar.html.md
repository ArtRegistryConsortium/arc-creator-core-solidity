![Solidity logo](https://docs.soliditylang.org/en/latest/_static/img/logo.svg){skip to content}
  *   * Language Grammar
  * Edit on GitHub


# Language Grammar
_parser grammar _SolidityParser
    
Solidity is a statically typed, contract-oriented, high-level language for implementing smart contracts on the Ethereum platform.
_rule _source-unit
    
On top level, Solidity allows pragmas, import directives, and definitions of contracts, interfaces, libraries, structs, enums and constants.
pragmapragma-token;import-directiveusing-directivecontract-definitioninterface-definitionlibrary-definitionfunction-definitionconstant-variable-declarationstruct-definitionenum-definitionuser-defined-value-type-definitionerror-definitionevent-definitioneof
_rule _import-directive
    
Import directives import identifiers from different files.
importpathasidentifiersymbol-aliasesfrompath*asidentifierfrompath;
_rule _path
    
Path of a file to be imported.
non-empty-string-literal
_rule _symbol-aliases
    
List of aliases for symbols to be imported.
{identifierasidentifier,}
_rule _contract-definition
    
Top-level definition of a contract.
abstractcontractidentifierisinheritance-specifier,{contract-body-element}
_rule _interface-definition
    
Top-level definition of an interface.
interfaceidentifierisinheritance-specifier,{contract-body-element}
_rule _library-definition
    
Top-level definition of a library.
libraryidentifier{contract-body-element}
_rule _inheritance-specifier
    
Inheritance specifier for contracts and interfaces. Can optionally supply base constructor arguments.
identifier-pathcall-argument-list
_rule _contract-body-element
    
Declarations that can be used in contracts, interfaces and libraries.
Note that interfaces and libraries may not contain constructors, interfaces may not contain state variables and libraries may not contain fallback, receive functions nor non-constant state variables.
constructor-definitionfunction-definitionmodifier-definitionfallback-function-definitionreceive-function-definitionstruct-definitionenum-definitionuser-defined-value-type-definitionstate-variable-declarationevent-definitionerror-definitionusing-directive
_rule _call-argument-list
    
Arguments when calling a function or a similar callable object. The arguments are either given as comma separated list or as map of named arguments.
(expression,{identifier:expression,})
_rule _identifier-path
    
Qualified name.
identifier.
_rule _modifier-invocation
    
Call to a modifier. If the modifier takes no arguments, the argument list can be skipped entirely (including opening and closing parentheses).
identifier-pathcall-argument-list
_rule _visibility
    
Visibility for functions and function types.
internalexternalprivatepublic
_rule _parameter-list
    
A list of parameters, such as function arguments or return values.
type-namedata-locationidentifier,
_rule _constructor-definition
    
Definition of a constructor. Must always supply an implementation. Note that specifying internal or public visibility is deprecated.
constructor(parameter-list)modifier-invocationpayableinternalpublicblock
_rule _state-mutability
    
State mutability for function types. The default mutability ‘non-payable’ is assumed if no mutability is specified.
pureviewpayable
_rule _override-specifier
    
An override specifier used for functions, modifiers or state variables. In cases where there are ambiguous declarations in several base contracts being overridden, a complete list of base contracts has to be given.
override(identifier-path,)
_rule _function-definition
    
The definition of contract, library, interface or free functions. Depending on the context in which the function is defined, further restrictions may apply, e.g. functions in interfaces have to be unimplemented, i.e. may not contain a body block.
functionidentifierfallbackreceive(parameter-list)visibilitystate-mutabilitymodifier-invocationvirtualoverride-specifierreturns(parameter-list);block
_rule _modifier-definition
    
The definition of a modifier. Note that within the body block of a modifier, the underscore cannot be used as identifier, but is used as placeholder statement for the body of a function to which the modifier is applied.
modifieridentifier(parameter-list)virtualoverride-specifier;block
_rule _fallback-function-definition
    
Definition of the special fallback function.
fallback(parameter-list)externalstate-mutabilitymodifier-invocationvirtualoverride-specifierreturns(parameter-list);block
_rule _receive-function-definition
    
Definition of the special receive function.
receive()externalpayablemodifier-invocationvirtualoverride-specifier;block
_rule _struct-definition
    
Definition of a struct. Can occur at top-level within a source unit or within a contract, library or interface.
structidentifier{struct-member}
_rule _struct-member
    
The declaration of a named struct member.
type-nameidentifier;
_rule _enum-definition
    
Definition of an enum. Can occur at top-level within a source unit or within a contract, library or interface.
enumidentifier{identifier,}
_rule _user-defined-value-type-definition
    
Definition of a user defined value type. Can occur at top-level within a source unit or within a contract, library or interface.
typeidentifieriselementary-type-name;
_rule _state-variable-declaration
    
The declaration of a state variable.
type-namepublicprivateinternalconstantoverride-specifierimmutabletransientidentifier=expression;
_rule _constant-variable-declaration
    
The declaration of a constant variable.
type-nameconstantidentifier=expression;
_rule _event-parameter
    
Parameter of an event.
type-nameindexedidentifier
_rule _event-definition
    
Definition of an event. Can occur in contracts, libraries or interfaces.
eventidentifier(event-parameter,)anonymous;
_rule _error-parameter
    
Parameter of an error.
type-nameidentifier
_rule _error-definition
    
Definition of an error.
erroridentifier(error-parameter,);
_rule _user-definable-operator
    
Operators that users are allowed to implement for some types with using for.
&~|^+/%*-==>>=<<=!=
_rule _using-directive
    
Using directive to attach library functions and free functions to types. Can occur within contracts and libraries and at the file level.
usingidentifier-path{using-aliases,}for*type-nameglobal;
_rule _using-aliases
    
identifier-pathasuser-definable-operator
_rule _type-name
    
A type name can be an elementary type, a function type, a mapping type, a user-defined type (e.g. a contract or struct) or an array type.
elementary-type-namefunction-type-namemapping-typeidentifier-pathtype-name[expression]
_rule _elementary-type-name
    
addressaddresspayableboolstringbytessigned-integer-typeunsigned-integer-typefixed-bytesfixedufixed
_rule _function-type-name
    
function(parameter-list)visibilitystate-mutabilityreturns(parameter-list)
_rule _variable-declaration
    
The declaration of a single variable.
type-namedata-locationidentifier
_rule _data-location
    
memorystoragecalldata
_rule _expression
    
Complex expression. Can be an index access, an index range access, a member access, a function call (with optional function call options), a type conversion, an unary or binary expression, a comparison or assignment, a ternary expression, a new-expression (i.e. a contract creation or the allocation of a dynamic memory array), a tuple, an inline array or a primary expression (i.e. an identifier, literal or type name).
expression[expression]expression[expression:expression]expression.identifieraddressexpression{identifier:expression,}expressioncall-argument-listpayablecall-argument-listtype(type-name)++--!~delete-expressionexpression++--expression**expressionexpression*/%expressionexpression+-expressionexpression<<>>>>>expressionexpression&expressionexpression^expressionexpression|expressionexpression<><=>=expressionexpression==!=expressionexpression&&expressionexpression||expressionexpression?expression:expressionexpression=|=^=&=<<=>>=>>>=+=-=*=/=%=expressionnewtype-nametuple-expressioninline-array-expressionidentifierliteralliteral-with-sub-denominationelementary-type-name
_rule _tuple-expression
    
(expression,)
_rule _inline-array-expression
    
An inline array expression denotes a statically sized array of the common type of the contained expressions.
[expression,]
_rule _identifier
    
Besides regular non-keyword Identifiers, some keywords like ‘from’ and ‘error’ can also be used as identifiers.
identifierfromerrorrevertglobaltransient
_rule _literal
    
string-literalnumber-literalboolean-literalhex-string-literalunicode-string-literal
_rule _literal-with-sub-denomination
    
number-literalsub-denomination
_rule _boolean-literal
    
truefalse
_rule _string-literal
    
A full string literal consists of either one or several consecutive quoted strings.
non-empty-string-literalempty-string-literal
_rule _hex-string-literal
    
A full hex string literal that consists of either one or several consecutive hex strings.
hex-string
_rule _unicode-string-literal
    
A full unicode string literal that consists of either one or several consecutive unicode strings.
unicode-string-literal
_rule _number-literal
    
Number literals can be decimal or hexadecimal numbers with an optional unit.
decimal-numberhex-number
_rule _block
    
A curly-braced block of statements. Opens its own scope.
{statementunchecked-block}
_rule _unchecked-block
    
uncheckedblock
_rule _statement
    
blockvariable-declaration-statementexpression-statementif-statementfor-statementwhile-statementdo-while-statementcontinue-statementbreak-statementtry-statementreturn-statementemit-statementrevert-statementassembly-statement
_rule _if-statement
    
If statement with optional else part.
if(expression)statementelsestatement
_rule _for-statement
    
For statement with optional init, condition and post-loop part.
for(variable-declaration-statementexpression-statement;expression-statement;expression)statement
_rule _while-statement
    
while(expression)statement
_rule _do-while-statement
    
dostatementwhile(expression);
_rule _continue-statement
    
A continue statement. Only allowed inside for, while or do-while loops.
continue;
_rule _break-statement
    
A break statement. Only allowed inside for, while or do-while loops.
break;
_rule _try-statement
    
A try statement. The contained expression needs to be an external function call or a contract creation.
tryexpressionreturns(parameter-list)blockcatch-clause
_rule _catch-clause
    
The catch clause of a try statement.
catchidentifier(parameter-list)block
_rule _return-statement
    
returnexpression;
_rule _emit-statement
    
An emit statement. The contained expression needs to refer to an event.
emitexpressioncall-argument-list;
_rule _revert-statement
    
A revert statement. The contained expression needs to refer to an error.
revertexpressioncall-argument-list;
_rule _assembly-statement
    
An inline assembly block. The contents of an inline assembly block use a separate scanner/lexer, i.e. the set of keywords and allowed identifiers is different inside an inline assembly block.
assembly'"evmasm"'assembly-flags{yul-statement}
_rule _assembly-flags
    
Assembly flags. Comma-separated list of double-quoted strings as flags.
(assembly-flag-string,)
_rule _variable-declaration-tuple
    
A tuple of variable names to be used in variable declarations. May contain empty fields.
(,variable-declaration,variable-declaration)
_rule _variable-declaration-statement
    
A variable declaration statement. A single variable may be declared without initial value, whereas a tuple of variables can only be declared with initial value.
variable-declaration=expressionvariable-declaration-tuple=expression;
_rule _expression-statement
    
expression;
_rule _mapping-type
    
mapping(mapping-key-typeidentifier=>type-nameidentifier)
_rule _mapping-key-type
    
Only elementary types or user defined types are viable as mapping keys.
elementary-type-nameidentifier-path
_rule _yul-statement
    
A Yul statement within an inline assembly block. continue and break statements are only valid within for loops. leave statements are only valid within function bodies.
yul-blockyul-variable-declarationyul-assignmentyul-function-callyul-if-statementyul-for-statementyul-switch-statementleavebreakcontinueyul-function-definition
_rule _yul-block
    
{yul-statement}
_rule _yul-variable-declaration
    
The declaration of one or more Yul variables with optional initial value. If multiple variables are declared, only a function call is a valid initial value.
letyul-identifier:=yul-expressionletyul-identifier,:=yul-function-call
_rule _yul-assignment
    
Any expression can be assigned to a single Yul variable, whereas multi-assignments require a function call on the right-hand side.
yul-path:=yul-expressionyul-path,yul-path:=yul-function-call
_rule _yul-if-statement
    
ifyul-expressionyul-block
_rule _yul-for-statement
    
foryul-blockyul-expressionyul-blockyul-block
_rule _yul-switch-statement
    
A Yul switch statement can consist of only a default-case (deprecated) or one or more non-default cases optionally followed by a default-case.
switchyul-expressioncaseyul-literalyul-blockdefaultyul-blockdefaultyul-block
_rule _yul-function-definition
    
functionyul-identifier(yul-identifier,)->yul-identifier,yul-block
_rule _yul-path
    
While only identifiers without dots can be declared within inline assembly, paths containing dots can refer to declarations outside the inline assembly block.
yul-identifier.yul-identifieryul-evm-builtin
_rule _yul-function-call
    
A call to a function with return values can only occur as right-hand side of an assignment or a variable declaration.
yul-identifieryul-evm-builtin(yul-expression,)
_rule _yul-boolean
    
truefalse
_rule _yul-literal
    
yul-decimal-numberyul-string-literalyul-hex-numberyul-booleanhex-string
_rule _yul-expression
    
yul-pathyul-function-callyul-literal
_lexer grammar _SolidityLexer
    
_rule _fixed-bytes
    
Bytes types of fixed length.
'bytes1''bytes2''bytes3''bytes4''bytes5''bytes6''bytes7''bytes8''bytes9''bytes10''bytes11''bytes12''bytes13''bytes14''bytes15''bytes16''bytes17''bytes18''bytes19''bytes20''bytes21''bytes22''bytes23''bytes24''bytes25''bytes26''bytes27''bytes28''bytes29''bytes30''bytes31''bytes32'
_rule _sub-denomination
    
Unit denomination for numbers.
'wei''gwei''ether''seconds''minutes''hours''days''weeks''years'
_rule _signed-integer-type
    
Sized signed integer types. int is an alias of int256.
'int''int8''int16''int24''int32''int40''int48''int56''int64''int72''int80''int88''int96''int104''int112''int120''int128''int136''int144''int152''int160''int168''int176''int184''int192''int200''int208''int216''int224''int232''int240''int248''int256'
_rule _unsigned-integer-type
    
Sized unsigned integer types. uint is an alias of uint256.
'uint''uint8''uint16''uint24''uint32''uint40''uint48''uint56''uint64''uint72''uint80''uint88''uint96''uint104''uint112''uint120''uint128''uint136''uint144''uint152''uint160''uint168''uint176''uint184''uint192''uint200''uint208''uint216''uint224''uint232''uint240''uint248''uint256'
_rule _non-empty-string-literal
    
A non-empty quoted string literal restricted to printable characters.
'"'double-quoted-printableescape-sequence'"''\''single-quoted-printableescape-sequence'\''
_rule _empty-string-literal
    
An empty string literal
'"''"''\'''\''
_rule _single-quoted-printable
    
Any printable character except single quote or back slash.
[\u0020-\u0026\u0028-\u005B\u005D-\u007E]
_rule _double-quoted-printable
    
Any printable character except double quote or back slash.
[\u0020-\u0021\u0023-\u005B\u005D-\u007E]
_rule _escape-sequence
    
Escape sequence. Apart from common single character escape sequences, line breaks can be escaped as well as four hex digit unicode escapes \uXXXX and two digit hex escape sequences \xXX are allowed.
'\\\'['"\\\nrt\n\r]'u'[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f]'x'[0-9A-Fa-f][0-9A-Fa-f]
_rule _unicode-string-literal
    
A single quoted string literal allowing arbitrary unicode characters.
'unicode''"'~["\r\n\\\\]escape-sequence'"''\''~['\r\n\\\\]escape-sequence'\''
_rule _hex-string
    
Hex strings need to consist of an even number of hex digits that may be grouped using underscores.
'hex''"'[0-9A-Fa-f][0-9A-Fa-f]'_''"''\''[0-9A-Fa-f][0-9A-Fa-f]'_''\''
_rule _hex-number
    
Hex numbers consist of a prefix and an arbitrary number of hex digits that may be delimited by underscores.
'0''x'[0-9A-Fa-f]'_'
_rule _decimal-number
    
A decimal number literal consists of decimal digits that may be delimited by underscores and an optional positive or negative exponent. If the digits contain a decimal point, the literal has fixed point type.
[0-9]'_'[0-9]'_''.'[0-9]'_'[eE]'-'[0-9]'_'
_rule _identifier
    
An identifier in solidity has to start with a letter, a dollar-sign or an underscore and may additionally contain numbers after the first symbol.
[a-zA-Z$_][a-zA-Z0-9$_]
_rule _yul-evm-builtin
    
Builtin functions in the EVM Yul dialect.
'stop''add''sub''mul''div''sdiv''mod''smod''exp''not''lt''gt''slt''sgt''eq''iszero''and''or''xor''byte''shl''shr''sar''addmod''mulmod''signextend''keccak256''pop''mload''mstore''mstore8''sload''sstore''tload''tstore''msize''gas''address''balance''selfbalance''caller''callvalue''calldataload''calldatasize''calldatacopy''extcodesize''extcodecopy''returndatasize''returndatacopy''mcopy''extcodehash''create''create2''call''callcode''delegatecall''staticcall''return''revert''selfdestruct''invalid''log0''log1''log2''log3''log4''chainid''origin''gasprice''blockhash''blobhash''coinbase''timestamp''number''difficulty''prevrandao''gaslimit''basefee''blobbasefee'
_rule _yul-identifier
    
Yul identifiers consist of letters, dollar signs, underscores and numbers, but may not start with a number. In inline assembly there cannot be dots in user-defined identifiers. Instead see yulPath for expressions consisting of identifiers with dots.
[a-zA-Z$_][a-zA-Z0-9$_]
_rule _yul-hex-number
    
Hex literals in Yul consist of a prefix and one or more hexadecimal digits.
'0''x'[0-9a-fA-F]
_rule _yul-decimal-number
    
Decimal literals in Yul may be zero or any sequence of decimal digits without leading zeroes.
'0'[1-9][0-9]
_rule _yul-string-literal
    
String literals in Yul consist of one or more double-quoted or single-quoted strings that may contain escape sequences and printable characters except unescaped line breaks or unescaped double-quotes or single-quotes, respectively.
'"'double-quoted-printableescape-sequence'"''\''single-quoted-printableescape-sequence'\''
_rule _pragma-token
    
Pragma token. Can contain any kind of symbol except a semicolon. Note that currently the solidity parser only allows a subset of this.
