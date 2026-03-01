
// Level 11: setTimeout & Event Loop

// -------------------------------
// Question 1: Simple Timeout
// -------------------------------
console.log("Start");

setTimeout(function () {
    console.log("Inside Timeout");
}, 0);

console.log("End");
// What will be the output order ?
// Explain why 0 delay does NOT run immediately.

// -------------------------------
// Answer:
// -------------------------------
// Output Order:
// Start
// End
// Inside Timeout (0 second)

// Because:
// 1. JS runs synchronously first.
// 2. 'setTimeout' callback goes to Web API.
// 3. After call stack is empty, callback moves to callback queue.
// 4. Then it executes.

// Note: Even with delay 0, it waits until call stack is empty.

// =======================================================================

// ----------------------------------
// Question 2: Closure + setTimeout
// ----------------------------------
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// What will this print after 1 second ?
// Why ?
// How can you fix it to print:
// 1
// 2
// 3

// -------------------------------
// Answer:
// -------------------------------
// After 1 second, this will print:
// 4
// 4
// 4

// Because:
// 1. var is function-scoped.
// 2. Loop finishes first.
// 3. After loop ends, i becomes 4.
// 4. All callbacks reference same i.
// So, when they run → they print 4.

// Fix:

// Option 1: Use let
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
// Because let is block-scoped.Each iteration gets its own i.

// Option 2: Use IIFE
for (var i = 1; i <= 3; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 1000);
    })(i);
}

