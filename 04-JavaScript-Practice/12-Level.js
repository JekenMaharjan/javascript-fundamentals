
// Level 12: Promises & Async

// -------------------------------
// Question 1: Promise Basics
// -------------------------------
// What will this output?
let promise = new Promise(function (resolve, reject) {
    resolve("Success");
});

promise.then(function (result) {
    console.log(result);
});

// -------------------------------
// Answer:
// -------------------------------
// Success

// =======================================================================

// -------------------------------
// Question 2: Async / Await
// -------------------------------
// Predict the order:
async function test() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("Start");
test();
console.log("End");
// What is the final output order?
// Explain why.

// -------------------------------
// Answer:
// -------------------------------
// Order:
// Start
// A
// End
// B

// Step by step:
// 1. 'console.log("Start")'
// 2. 'test()' runs
// 3. Inside test:
//     prints "A"
//     hits 'await'
// 4. 'await' pauses function
// 5. Control returns to main thread
// 6. 'console.log("End")'
// 7. Microtask queue runs → prints "B"

// Note: 'await' always makes remaining code run asynchronously. Even with Promise.resolve().