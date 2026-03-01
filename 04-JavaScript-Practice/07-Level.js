
// Level 7: map(), filter() and reduce()

// -------------------------------
// Question 1: map()
// -------------------------------
// What will this output?
let numbers = [1, 2, 3, 4];

let result = numbers.map(function (num) {
    return num * 2;
});

console.log(result);
// What does map() actually return?

// -------------------------------
// Answer:
// -------------------------------
// Output: [2, 4, 6, 8]
// map() - Returns a new array of the same length after transforming each element.
// It returns a new array after applying the callback to each element.
// map() does not modify original array.
// It always returns a new one.

// =======================================================================

// -------------------------------
// Question 2: filter()
// -------------------------------
// Predict the output:
let nums = [5, 10, 15, 20];

let res = nums.filter(function (n) {
    return n > 10;
});

console.log(res);
// What kind of values should filter() callback return?

// -------------------------------
// Answer:
// -------------------------------
// Output: [15, 20]
// filter() callback must return: A boolean value (true or false).
// If true → element is kept
// If false → element is removed
// It returns a new filtered array based on boolean return.

// =======================================================================

// -------------------------------
// Question 3: reduce()
// -------------------------------
// What will this output?
let arr = [1, 2, 3, 4];

let total = arr.reduce(function (acc, curr) {
    return acc + curr;
}, 0);

console.log(total);
// Explain:
// What is acc ?
// What is curr ?
// Why is 0 passed at the end ?

// -------------------------------
// Answer:
// -------------------------------
// Output: 10
// i.e. 0 + 1 = 1
//      1 + 2 = 3
//      3 + 3 = 6
//      6 + 4 = 10

// acc = Accumulator
// It stores the result of previous calculation.

// curr = Current element of the array in each iteration.

// That 0 is the initial value of accumulator.

// Without it:
// First acc becomes first element of array.
// Loop starts from second element.

// With 0:
// It clearly starts from 0.
// It is safer and recommended.

