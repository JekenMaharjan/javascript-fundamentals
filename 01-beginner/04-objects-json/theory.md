# BEGINNER LEVEL – EXAM 4

## Topic: Objects & JSON

## Syllabus

This test covers:

1. What objects are
1. Key–value pairs
1. Accessing object properties
1. Modifying object values
1. Object methods
1. What JSON is
1. Difference between Object and JSON
1. Converting Object ↔ JSON

---

## PART A – THEORY

### Q1. What is an object in JavaScript?

**Answer:**

An object in JavaScript is a collection of related data and functions stored as key–value pairs.

---

### Q2. What are key–value pairs?

**Answer:**

A key–value pair consists of a property name (key) and its associated value, for example:

```bash
name: "Jeken"
```

---

### Q3. How do you access object properties? (give examples)

**Answer:**

```bash
student.name
student["age"]
```

---

### Q4. How do you update or add new properties in an object?

**Answer:**

In JavaScript, object properties can be updated or added using dot notation or bracket notation.

If the property already exists, its value is updated.
If the property does not exist, a new property is created.

```bash
const student = {
    name: "Jeken",
    age: 25
};

// update existing property
student.age = 26;

// add new property
student.grade = "A";
```

---

### Q5. What is JSON? Where is it used?

**Answer:**

JSON (JavaScript Object Notation) is a text-based data format used to store and exchange data.

It is commonly used:

- In APIs to send data between frontend and backend
- For server responses
- To store and transfer structured data over the internet

JSON looks similar to JavaScript objects but is always written as a string.
Example:
```bash
{
  "name": "Jeken",
  "age": 25,
  "isStudent": true
}
```

---

### Q6. Difference between JavaScript Object and JSON

**Answer:**

Object → usable directly in JavaScript

JSON → text format used for data transfer

---

### Q7. What do JSON.stringify() and JSON.parse() do?

**Answer:**

JSON.stringify() → Object → JSON string

JSON.parse() → JSON string → Object