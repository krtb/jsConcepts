// when at the top of the page, what happens is different
// most languages execute code one line at a time
function b(){
    console.log('called b');
}

b();
//output: called b
console.log(a, 'first');
//output: undefined

var a = 'hello, world!'

console.log(a, 'second')
// 'hello, world'

