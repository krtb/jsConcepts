# Variable Environment
* Where  variables that have been created live, and how they relate to each other in memory.
* Memory space created for variable pertaining to a specific execution context.

```
function b(){
    var myVar;
}

function a(){
    var myVar = 2;
    b();
}

var myVar = 1;
a();

//to understand value of 
//myVar at different points, 
//have to think of the execution context
```

1. `var myVAr = 1` created and stored in memory
2. then `a()` is executed
3. A new execution context is created for `a()`, then this is put into it's very own `Execution Context`.
4. Every execution context has it's own variable environment.
5. `myVar` for `b()` to be stored in it's own execution context with a valuie of `undefined`
6. 