# INTERMEDIATE LEVEL – EXAM 3

## Topic: Asynchronous JavaScript & Closures

## PART A – THEORY

### Q1. What is synchronous vs asynchronous JavaScript? Explain in simple terms with an example.

**Answer:**
- **Synchronous JavaScript** executes code line by line, and each operation must finish before the next one starts.

- **Asynchronous JavaScript** allows long-running tasks (like API calls or timers) to run in the background without blocking the rest of the code.
Example:

```bash
// synchronous
console.log("A");
console.log("B");

// asynchronous
console.log("A");
setTimeout(() => console.log("B"), 1000);
console.log("C");

// Output: A C B
```

---

### Q2. What is a callback function? Why can callbacks become problematic?

**Answer:**
A **callback function** is a function passed as an argument to another function and executed later.

Callbacks become problematic because:

- They can lead to callback hell (nested callbacks)
- Code becomes hard to read, debug, and maintain

---

### Q3. What is a Promise in JavaScript? Explain its states.

**Answer:**
A Promise represents the eventual result of an asynchronous operation.

**Promise states**:

1. **Pending** – initial state
2. **Fulfilled** – operation completed successfully
3. **Rejected** – operation failed

---

### Q4. What does `async` and `await` do? Why are they preferred over `.then()`?

**Answer:**
- `async` makes a function return a Promise

- `await` pauses execution until the Promise resolves

They are preferred because:

- Code looks **synchronous**
- Easier to **read and debug**
- Better **error handling** with try/catch

---

### Q5. What is a closure? Explain with a real-world analogy.

**Answer:**
A **closure** is created when a function remembers variables from its outer scope even after the outer function has finished executing.

**Analogy**:
Like a **locker key** — even if the locker room is closed, the key still gives access to what’s inside.

---

### Q6. Why are closures useful in JavaScript? Mention at least two use cases.

**Answer:**
Closures are useful for:

1. **Data encapsulation** (private variables)
2. **Maintaining state** (counters, caches)

---

### Q7. What is the JavaScript event loop (basic idea)?

**Answer:**
The **event loop** allows JavaScript to handle asynchronous tasks by:

- Executing synchronous code first
- Then processing callbacks from the task queue

This is how JavaScript remains **non-blocking**.

---

### Q8. What happens if you don’t handle errors in async code?

**Answer:**
If async errors are not handled:

- The application may crash
- Promises may fail silently
- Bugs become hard to track

Proper handling is done using:

- .catch()
- try/catch with async/await

