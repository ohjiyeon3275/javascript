
console.log("11");

setTimeout(() => {
    console.log('22')
}, 3000); // callback i will call you back

console.log('33')

// synchronous
function printNow(print) {
    print();
}

printNow(() => console.log('hi'))

// asynchronous

function printNotNow(print, timeout) {
    setTimeout(print, timeout)
}

printNotNow(() => console.log('async'), 2000);


