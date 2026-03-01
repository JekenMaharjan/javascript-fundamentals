
// Level 9: Scope & Closures

// -------------------------------
// Question 1: Scope
// -------------------------------
// What will this output?
let a = 10;

function test() {
    let a = 20;
    console.log(a);
}

test();
console.log(a);
// Why ?

// -------------------------------
// Answer:
// -------------------------------
// 20
// 10

// This happens because of block scope and lexical scoping.
// let a = 10 → global scope
// Inside test(), let a = 20 → function scope
// The inner a does NOT affect the outer a.
// So,
// test() → prints 20 (local variable)
// console.log(a) outside → prints 10(global variable)

// First, a is declared internally, function test is called where a = 20 is print.
// Second, prints a which is globally declared as a = 10.

// =======================================================================

// -------------------------------
// Question 2: Closure
// -------------------------------
// What will this output ?
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

let counter = outer();

counter();
counter();
counter();
// Explain what is happening internally.

// -------------------------------
// Answer:
// -------------------------------
// 1
// 2
// 3

// outer() runs once -> let counter = outer();

// count = 0
// outer() returns inner function
// counter now stores that returned function
// BUT important: inner() still has access to count

// A closure is:
// When an inner function remembers and accesses variables from its outer function even after the outer function has finished executing.

// Even though outer() has finished,
// count is NOT destroyed.
// It stays alive because inner() is still referencing it.

// So,
// First call: count = 0 → 1 → print 1
// Second call: count = 1 → 2 → print 2
// Third call: count = 2 → 3 → print 3
// The same count variable is being updated.