# Creation & Hoisting
1. Even though function can be below where it's executed, can still run
2. How is the execution context created(CREATION PHASE)?
   1.  CREATION PHASE
       1.  global object setup in memory
       2.  this is always created inside the execution context
       3.  Outer Environment
       4.  Parser will recognize where you've created variables and where you've created functions
       5.  HOISTING
           1. setup Memory Space for variables and functions
           2. functions and variables exist in memory
              1. when code runs line by line, it can access them
           3. Variables are different
              1. placeholder setup for value of `a`, the variable
              2. UNDEFINED
                 1. same value if we never set it at all
                 2. all variables in JS initially set to undefined
                 3. Functions are sitting in memory

    1. EXECUTION PHASE
       1. JS engine takes code that was written and makes decisions.