
// Level 8: Destructuring & Spread

// -------------------------------
// Question 1: Object Destructuring
// -------------------------------
// What will this print ?
let user = {
    name: "Jeken",
    age: 24
};

let { name, age } = user;

console.log(name);
console.log(age);
// What is happening here ?

// -------------------------------
// Answer:
// -------------------------------
// "Jeken"
// 24

// This is called object destructuring.
// Instead of writing:
// let name = user.name;
// let age = user.age;
// We use a shorter modern syntax:
// let { name, age } = user;
// Extracts properties from an object and assigns them to variables with the same names.

// =======================================================================

// -------------------------------
// Question 2: Spread Operator
// -------------------------------
// Predict the output:
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

console.log(arr2);
// What does ...arr1 do?

// -------------------------------
// Answer:
// -------------------------------
// [1, 2, 3, 4]

// "...arr1" merge all the items of arr1 into arr2.
// The spread operator (...): Expands(spreads) the elements of an iterable(like an array) into individual elements.