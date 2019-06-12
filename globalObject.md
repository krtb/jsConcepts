# Global Execution Context
1. Base execution context, is your global execution context
2. accesible everywhere to everything in code
3. Creates 2 things for you
   * Global object of name/value pairs
   * THIS
4. There will always be A global object
5. What that is will change
6. Global DEF
   * in JS, anything not inside a function
7. in JS, when you create variable and functions
   * that are not inside a function
   * those vars/functions get attached to the global object
8. Overview
   * When JS code is run in the browser
   * An execution context is created
   * at base level, when not inside a function, have a global object created by JS engine as part of execution context.
   * If inside a browser, global object would be Window object.
   * Outer Environment
     * If not inside a function, at global level, is NULL
   * Then your code
9. Execution Context is wrapper that has other things you didn't write.