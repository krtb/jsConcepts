# Undefined
1. `undefined` VS `a is not defined`
2. initial execution phase is the context phase

```
console.log(a)

if (a === undefined ) {
    console.log('a is undefined);
} else {
    console.log('a is defined!')
}
```
3. when JS engine went through, didn't find a `var a = x`
4. was never setup in memory space
5. Will produce an `Uncaught ReferenceError: a is not defined`
6. IF var a is declared prior, will be stored in memory during the creation phase

```
var a;
console.log(a)

if (a === undefined ) {
    console.log('a is undefined);
} else {
    console.log('a is defined!')
}
```

7. above, the JS engine would store and place a value of `undefined`
8. Never ser value to be undefined
9. If setting to something else later, but use it beforehand, value would still be set to `undefined` but the JS engine
```
a = undefined
```