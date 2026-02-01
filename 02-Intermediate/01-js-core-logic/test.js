// INTERMEDIATE EXAM 1 – PRACTICAL TEST
// Do NOT use console.log unless asked

// Q1: Write a function that returns the square of a number
function square(num) {
    const squareNum = sqrt(num);
    return squareNum;
}

// -----------------------------------------

// Q2: Write a function that checks if a number is even or odd
function checkEvenOdd(num) {
    if (num%2 == 0) {
        return ("number is even");
    } else {
        return ("number is odd");
    }
}

// -----------------------------------------

// Q3: Convert this function into an arrow function
function greet(name) {
    return `Hello, ${name}`;
}
// arrow function...
const greet = (name) => {
    return `Hello, ${name}`;
}

// -----------------------------------------

// Q4: Write a function that accepts an array
// and returns the total sum of its elements
function sumArray(arr) {
    let sum = 0;
    for (i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return ("Sum of given elements are: " + sum);
}

// -----------------------------------------

// Q5: Write a function that returns the largest number in an array
function findLargest(arr) {
    let largeNum;
    largeNum = arr[0];

    for (i=1; i<arr.length; i++) {
        if (largeNum > arr[i]) {
            return (largeNum);
        } else {
            largeNum = arr[i];
        }
    }
}

// -----------------------------------------

// Q6: Write a function that uses a callback
// The function should accept a number and a callback
// and return the result of the callback
function processNumber(num, callback) {
    
    return callback;
}

// -----------------------------------------

// Q7: Fix the bug
function multiply(a, b) {
    a * b;
}

function multiply(a, b) {
    return (a * b);
}
