
// Level 3: Functions


// -------------------------------
// Question 1:
// -------------------------------
// What is the difference between:
function greet() {
    return "Hello";
}
// and
const greet = () => {
    return "Hello";
}
// Are they exactly the same? If not, why?

// -------------------------------
// Answer:
// -------------------------------
// They are not same because first is function and second is arrow function.
// Arrow functions do not have their own this or arguments object.
// Function declarations(function greet()) are hoisted, arrow functions are not.

// =======================================================================

// -------------------------------
// Question 2:
// -------------------------------
// What will this output?
function test() {
    console.log(a);
    var a = 5;
}

test();
// Why?

// -------------------------------
// Answer:
// -------------------------------
// Output: undefined
// "a" is undefined because the value of "a" is assigned only after the console.log output is called.
// Reason: var a is hoisted to the top of the function scope, but initialization happens later, so at console.log(a), it exists but is undefined.

