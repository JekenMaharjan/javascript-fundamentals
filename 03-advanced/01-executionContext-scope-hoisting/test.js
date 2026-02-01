// ADVANCED EXAM 1 – PRACTICAL TEST

// Q1: Fix the hoisting issue
function printValue() {
    // Should return 10
    var value = 10; // declare first
    return value;
}

// -----------------------------------------

// Q2: Fix the block scope issue
function scopeTest() {
    let x;
    if (true) {
        x = 5;
    }
    // Should return 5
    return x;
}

// -----------------------------------------

// Q3: Explain via code (no comments)
// Modify the code so it works correctly
function counter() {
    let count = 0; // private variable

    return function () {
        count++;
        return count;
    }
}

const myCounter = counter();
myCounter(); // 1
myCounter(); // 2

// -----------------------------------------

// Q4: Fix the bug
var x = 10;

function test() {
    var x = 20; // declare inside function
    console.log(x); // 20
}

test();
console.log(x); // 10 (global unchanged)
