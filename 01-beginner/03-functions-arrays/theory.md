# BEGINNER LEVEL – EXAM 3

## Topic: Functions & Arrays (Core Building Blocks)

This exam is very important.
Functions and arrays are everywhere—in React, backend logic, interviews, everything.

---

## Syllabus

This test covers:

1. What functions are
2. Function declaration vs function expression
3. Parameters & return values
4. Arrays
5. Array indexing
6. Basic array methods
7. Looping through arrays
8. Simple problem-solving using functions + arrays

---

## Part A – Theory

### Q1. What is a function in JavaScript? Why do we use it?

**Answer:**
A function in JavaScript is a block of reusable code that performs a specific task. Functions help reduce code repetition and improve readability.

---

### Q2. Difference between function declaration and function expression

**Answer:**  
Function declaration: function foo() {} → hoisted, can be called before definition

Function expression: const foo = function() {} → not hoisted, defined at runtime

---

### Q3. What are parameters and return values?

**Answer:**  
Parameters are the arguments or value that are called in the functions.
Return values are the value or output that are given after the execution of particular function.

---

### Q4. What is an array? Why is it used?

**Answer:**  
Array is a list of data with index of each data starting from 0.

It is used to store multiple data inside of a declared single variable.

---

### Q5. Difference between length and index in an array

**Answer:**  
Length in an array is the actual length or how many list are there in an array.

Index in an array is the location of the data stored in the list in an array - starting from 0 index.

---

### Q6. Name and explain any three array methods

**Answer:**  
Any three array methods are:

- push() → add element at the end
- pop() → remove last element
- shift() → remove first element
- Optional: unshift(), slice(), splice()

Example:
- push() – Add element at the end
Adds a new element to the end of an array.

```bash
let numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
// Output: [1, 2, 3, 4]
```

- pop() – Remove last element
Removes the last element from an array.

```bash
let numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);
// Output: [1, 2]
```

- shift() – Remove first element
Removes the first element from an array.

```bash
let numbers = [1, 2, 3];

numbers.shift();

console.log(numbers);
// Output: [2, 3]
```

- unshift() – Add element at the beginning

```bash
let numbers = [2, 3];

numbers.unshift(1);

console.log(numbers);
// Output: [1, 2, 3]
```
