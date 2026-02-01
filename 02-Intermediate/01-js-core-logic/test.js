// INTERMEDIATE EXAM 1 – PRACTICAL TEST
// Do NOT use console.log unless asked

// Q1: Write a function that returns the square of a number
function square(num) {
    return num * num;
}

// -----------------------------------------

// Q2: Write a function that checks if a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// -----------------------------------------

// Q3: Convert this function into an arrow function
function greet(name) {
    return `Hello, ${name}`;
}
// Converted...
const greet = (name) => {
    return `Hello, ${name}`;
}

// -----------------------------------------

// Q4: Write a function that accepts an array
// and returns the total sum of its elements
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// -----------------------------------------

// Q5: Write a function that returns the largest number in an array
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// -----------------------------------------

// Q6: Write a function that uses a callback
// The function should accept a number and a callback
// and return the result of the callback
function processNumber(num, callback) {
    return callback(num);
}

// -----------------------------------------

// Q7: Fix the bug
function multiply(a, b) {
    return a * b;
}
