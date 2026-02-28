
// Level 1: Variables & Data Types


// -------------------------------
// Question 1:
// -------------------------------
// What will be the output?
let a = 10;
let b = "10";

console.log(a == b);  // True
console.log(a === b); // False

// -------------------------------
// Answer:
// -------------------------------
// First, True as it only checks if "a" and "b" are equal or not.
// Second, False as it does check if "a" and "b" are equal or not and also check its datatype as well where datatype of "a" is number and "b" is string as value "b" is written inside double quotes.

// =======================================================================

// -------------------------------
// Question 2:
// -------------------------------
// What is the difference between: var, let and const?

// -------------------------------
// Answer:
// -------------------------------
// "var" -> variable whose value can be re-declared, re-assigned and Hoisted (initialized as undefined). It's function-scoped.
var c = 10;
var c = 20; // allowed
c = 30;     // allowed
// Avoid using var in modern JavaScript.

// "let" -> variable whose value cannot be re-declared in same scope but can be re-assigned. It's block-scoped.
let d = 10;
d = 20;        // allowed
// let d = 30; // not allowed

// "const" -> variable whose value cannot be re-declared and re-assigned once assigned. It's block-scoped.
const e = 10; // now the value of "a" cannot be changed (its fixed)
// e = 30;    // not allowed

// =======================================================================

// -------------------------------
// Question 3:
// -------------------------------
// What will this print?
let x;
console.log(x); // undefined

let y = null;
console.log(y); // null
// What is the difference between undefined and null?

// -------------------------------
// Answer:
// -------------------------------
// First, undefined.
// Second, null.
// Undefined -> A variable is declared but not assigned any value.
//           -> Automatically assigned by JavaScript.
// Null -> It is an intentional empty value.
//      -> Assigned manually by developer.
//      -> Means: “no value” or “empty value”.
