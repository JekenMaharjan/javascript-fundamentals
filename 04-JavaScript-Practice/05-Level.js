
// Level 5: Objects


// -------------------------------
// Question 1: Object Basics
// -------------------------------
// What will this print?
let person = {
    name: "Jeken",
    age: 24
};

console.log(person.name);
console.log(person["age"]);

// -------------------------------
// Answer:
// -------------------------------
// "Jeken"
// 24

// =======================================================================

// -------------------------------
// Question 2: Object Methods
// -------------------------------
// Predict the output:
let calculator = {
    add: function (a, b) {
        return a + b;
    }
};

console.log(calculator.add(5, 3));

// -------------------------------
// Answer:
// -------------------------------
// 8
