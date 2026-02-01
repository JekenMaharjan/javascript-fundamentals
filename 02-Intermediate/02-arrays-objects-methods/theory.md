# INTERMEDIATE LEVEL – EXAM 2

## Topic: Arrays, Objects & Methods

## PART A – THEORY

### Q1. What is an array in JavaScript? How is it different from an object?

**Answer:**
An array is an ordered collection of values accessed by index (starting from 0).

An object is a collection of key–value pairs where values are accessed using keys.

Arrays are best for lists.
Objects are best for structured data.

---

### Q2. What are common array methods? Explain any four.

**Answer:**
Common array methods:

1. push() – adds element at the end
2. pop() – removes last element
3. map() – transforms each element
4. filter() – selects elements based on condition

---

### Q3. What is the difference between `map()`, `filter()`, and `reduce()`?

**Answer:**
`map()` returns a new array by modifying each element.

`filter()` returns a new array with elements that pass a condition.

`reduce()` reduces all values into a single value.

---

### Q4. What does `forEach()` do? How is it different from `map()`?

**Answer:**
`forEach()` is used to execute logic on each element.
It does not return a new array.

`map()` returns a new array after transformation.

---

### Q5. What is destructuring? Explain array and object destructuring with examples.

**Answer:**
Destructuring allows extracting values from arrays or objects.

Array:

```bash
const [a, b] = [1, 2];
```

Object:

```bash
const { name, age } = { name: "Ram", age: 20 };
```

---

### Q6. What are object methods? How are they defined?

**Answer:**
Object methods are functions defined inside an object.

Example:

```bash
const user = {
  name: "Ram",
  greet() {
    return "Hello";
  }
};
```

---

### Q7. Explain `this` keyword in an object context.

**Answer:**
`this` refers to the object that is calling the method.

---

### Q8. What is the difference between shallow copy and deep copy?

**Answer:**
Shallow copy copies only first-level references.
Deep copy creates a completely independent copy.

Example:
Shallow: [...arr]
Deep: JSON.parse(JSON.stringify(obj))

