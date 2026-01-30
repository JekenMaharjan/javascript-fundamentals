
// PART B – PRACTICAL TEST

// Q6.Variable Test

// Declare variables using let and const
// name → your name
// age → your age
// isStudent → true or false
const Name = "Jeken Maharjan";
let age = 25;
let isStudent = true;

// Print them using console.log
console.log(Name);
console.log(age);
console.log(isStudent);

// -----------------------------------------

// Q7. Data Type Check

// Declare variables of type:
// string, number, boolean, undefined, null
const fullName = "Hari Maharjan";
const rollNo = 45;
const isEntered = false;
let notDefine;
const empty = null;

// Use typeof to print each type
console.log(typeof (fullName));
console.log(typeof (rollNo));
console.log(typeof (isEntered));
console.log(typeof (notDefine));
console.log(typeof (empty)); // typeof null // "object" (classic JS quirk)

// -----------------------------------------

// Q8. Operator Test

// Declare two numbers
const a = 12;
const b = 15;

// Print:
// sum
const sum = (a + b);

// difference
const diff = (a - b);

// product
const prod = (a * b);

// division
const div = (a / b);

console.log(sum);
console.log(diff);
console.log(prod);
console.log(div);

// -----------------------------------------

// Q9. Condition Test

// Write a program that checks:
// if age is 18 or above → print "Eligible to vote"
// else → print "Not eligible to vote"
const ageOne = 24

if (ageOne >= 18) {
    console.log("Eligible to Vote!");
} else {
    console.log("Not eligible to Vote!");
}

// -----------------------------------------

// Q10.Equality Test

// Compare these two values:
// 10 and "10"
// Print result using ==
// Print result using ===
const x = 10;
const y = "10";

console.log(x == y);
console.log(x === y);
