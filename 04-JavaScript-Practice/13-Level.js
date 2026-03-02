
// Level 13: Event Loop (Microtask vs Macrotask)

// Microtasks → Promises, await
// Macrotasks → setTimeout, setInterval, DOM events
// Microtasks run before macrotasks.

// -------------------------------
// Question 1: Order Prediction
// -------------------------------
// What will be the output ?
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
// Write the exact order.
// Explain WHY.

// -------------------------------
// Answer:
// -------------------------------
/*
- Start
- End
- Promise
- Timeout

Because synchronous code finishes completely before microtasks run.
setTimeout → goes to Macrotask Queue
Promise.resolve() → goes to Microtask Queue

Microtask queue: Promise
Then macrotask: Timeout

Execution breakdown:
1. "Start" → synchronous
2. setTimeout → macrotask queue
3. Promise → microtask queue
4. "End" → synchronous finishes
5. Microtasks run → "Promise"
6. Then macrotask → "Timeout"
*/

// =======================================================================

// -------------------------------
// Question 2:
// -------------------------------
setTimeout(() => {  
    console.log("1");
}, 0);

Promise.resolve().then(() => {
    console.log("2");
}).then(() => {
    console.log("3");
});

console.log("4");
// What is the final output order ?
// Explain step by step.

// -------------------------------
// Answer:
// -------------------------------
/*
- 4
- 2
- 3
- 1

Because synchronous code (4) always runs first.
Promise .then() is microtask.
setTimeout runs last:

Execution breakdown:
1. setTimeout → macrotask
2. Promise chain → microtasks
3. console.log("4") → sync first
4. Microtask queue:
    - "2"
    - then next .then() → "3"
5. Macrotask queue → "1"
*/
