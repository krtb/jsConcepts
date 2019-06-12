var a = 'Hello, World!';

function b() {
    console.log('CALLED B!');
}

// expect to see, call B then A
b();
console.log(a);
