# Function Invocation
* running in function, in JS with paranthesis `()`

## what happens when invoking a funciton in JS
  
```
function b(){
    //stored in memory
}

function a(){
    b();
    //stored in memory
}

a();

```

1. Global Execution Context
   1.  created and code executed
   2.  parser parses code, and compiler interprets code starts
   3.  creates variable object, global object (in browser creates a window object)
2.  A new execution context is created and placed on the execution stack
   ```
    a()
   ```
3.  Any time a function is invoked, a new execution stack is created and put on the execution stack.
4.  Execution context similar to the global one, will have it's own space for variables and functions.
5.  goest line by line and executes code in function
6.  When it reaches a function, stops at that line of code and creates another execution context and runs code.
7.  Every function creates a new execution context.
8.  When `b()` finishes, will get popped off stack, then `a()`, then back to global.

### EX
```
fucntion a(){
    b()
    var c;
}

function b(){
    var d;
}

a();
var d;
```

1. Everytime a new function is run, a new execution context is created for that specific function.
2. The `this` variable is created for that function
3. the variables within it are setup during the creation phase
4. Even if function is invoking iteself, new execution context is created.

