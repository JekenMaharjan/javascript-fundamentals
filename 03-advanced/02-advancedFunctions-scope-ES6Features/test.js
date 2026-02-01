// ADVANCED EXAM 2 – PRACTICAL TEST

// Q1: Write an IIFE that prints "Hello Advanced JS"

(function() {
    console.log("Hello Advanced JS");
})();

// -----------------------------------------

// Q2: Convert this function declaration to a function expression

const greet = function(name) {
    return `Hello ${name}`;
}

// -----------------------------------------

// Q3: Create a shallow copy of an array

const arr = [1, 2, 3, 4, 5];
const shallowCopy = [...arr];

// -----------------------------------------

// Q4: Create a deep copy of an object

const obj = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(obj));

// -----------------------------------------

// Q5: Create a simple module
// export a function and import it in another file

// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5

// -----------------------------------------

// Q6: Add a method to a prototype of a constructor function

function Person(name) {
    this.name = name;
}
// Add method greet() via prototype
Person.prototype.greet = function () {
    return `Hello ${this.name}`;
};
const p1 = new Person("Ram");
p1.greet(); // Hello Ram

// -----------------------------------------

// Q7: Use Rest operator to accept multiple arguments in a function

function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
sumAll(1, 2, 3, 4); // 10

// -----------------------------------------

// Q8: Use Spread operator to merge two arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // [1,2,3,4,5,6]

// -----------------------------------------

// Q9: Use destructuring to extract values from array and object
const numbersArr = [10, 20, 30];
const [x, y, z] = numbersArr;

const userObj = { id: 1, name: "Ram" };
const { id, name } = userObj;

