// PART B – PRACTICAL TEST

// Q7. Simple Function

// Write a function that takes two numbers
// and returns their sum
function sum(a, b) {
    return a + b;
}
console.log("Sum: " + sum(12, 55));

// -----------------------------------------

// Q8. Even or Odd

// Write a function that takes a number
// and prints whether it is Even or Odd
function EvenOdd(c) {
    if ( c % 2 == 0 ) {
        console.log("Given number is Even!");
    } else {
        console.log("Given number is Odd!");
    }
}
EvenOdd(5);

// -----------------------------------------

// Q9. Array Creation

// Create an array of 5 numbers
// Print the first and last element
const a = [2,3,5,4,1]
console.log("The first and last number are: " + a[0] + " and " + a[4]);

// -----------------------------------------

// Q10. Array Loop

// Using a loop, print all elements of the array
console.log("All elements of the array are:");
for ( let i = 0; i < a.length ;i++ ) {
    console.log(a[i]);
}

// -----------------------------------------

// Q11. Array Methods

// Using array methods:
// 1. Add a new element at the end
// 2. Remove the last element
const arrayMethod = [4, 2, 3, 5, 6];
arrayMethod.push(23); // add
arrayMethod.pop(); // remove last
console.log(arrayMethod);

// -----------------------------------------

// Q12. Function + Array Logic

// Write a function that takes an array of numbers
// and returns the largest number
function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) largest = arr[i];
    }
    return largest;
}

console.log("Largest number is " + largestNumber([2, 5, 1, 4, 5, 22, 44, 23]));
