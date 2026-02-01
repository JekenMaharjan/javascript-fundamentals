# BEGINNER LEVEL – EXAM 4

## Topic: Objects & JSON

## Syllabus

This test covers:

1. What objects are
2. Key–value pairs
3. Accessing object properties
4. Modifying object values
5. Object methods
6. What JSON is
7. Difference between Object and JSON
8. Converting Object ↔ JSON

---

## PART A – THEORY

### Q1. What is an object in JavaScript?

**Answer:**

An object in JavaScript is a collection of related data and functions stored as key–value pairs.

Objects are used to represent real-world entities inside code.

Example:

```bash
const student = {
    name: "Jeken",
    age: 25,
    isStudent: true
};
```

---

### Q2. What are key–value pairs?

**Answer:**

Key–value pairs are pairs where:

- Key is the property name
- Value is the data stored in that property

```bash
name: "Jeken"
age: 25
```

---

### Q3. How do you access object properties? (give examples)

**Answer:**

Object properties can be accessed using:

- Dot notation
- Bracket notation

Examples:

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

JavaScript Object:

- Used inside JavaScript code
- Can contain functions
- Not a string

JSON:

- Used for data transfer
- Cannot contain functions
- Always a string

---

### Q7. What do JSON.stringify() and JSON.parse() do?

**Answer:**

JSON.stringify() converts a JavaScript object into a JSON string

JSON.parse() converts a JSON string back into a JavaScript object

Example:

```bash
const jsonData = JSON.stringify(student);
const objectData = JSON.parse(jsonData);
```