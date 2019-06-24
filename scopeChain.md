# Scope Chain
1. references to the outer environment

```
//Lexically, sits in the same global environment as a()
//lexical environment is the global execution context lexical environment
function b(){
    console.log(myVar)
}

function a(){
    var myVar = 2
    b();
}

var myVar = 1;
a();
```
1. Global Execution Context; `myVar = 1`
2. a() execution context: `myVar = 2`
3. b() execution context: `empty, nothing was defined`
4. Every context has a reference to its outer environment 

### Lexical Environment
* meaning: where something is written physically in your code matters
* determines how the JS enginer will interpret and put things in memory
* Where would function `b()` sit?
  * on top of the global environment
* When you ask for variable while running line of code, inside any aprticular execution context
  * if it can't find that variable, will look at the outer reference, for variables there
  * outer reference to where that points, will depend on where function sits lexically
  * `b()` function sits onl global context
  * it's outer lexical environment is global, so is a()'s
* Execution contexts are created and it doesn't matter where the code is physically written, in regards to when an exect
* Appropriate outer refrence created based on where your function was written in the JS file
* Searching chaing of references to outer environments: `scope chain`
* Where something sits PHSYICALLT OR LEXICALLY
  * who created me?