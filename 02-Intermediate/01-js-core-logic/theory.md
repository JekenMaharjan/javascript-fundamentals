# INTERMEDIATE LEVEL – EXAM 1

## Topic: Core JavaScript Logic & Functions

### Q1. What is the difference between `var`, `let`, and `const`? Explain with scope and hoisting.

**Answer:**
- `var` is function-scoped and can be redeclared. It is hoisted and initialized as `undefined`. Because of this, it can cause bugs and is not recommended.
- `let` is block-scoped. It is hoisted but not initialized. Its value can be changed but it cannot be redeclared in the same scope.
- `const` is also block-scoped. Its value cannot be reassigned once declared. It must be initialized at the time of declaration.

---

### Q2. What is a function expression? How is it different from a function declaration?

**Answer:**
A function expression is when a function is stored in a variable.
Example:

```bash
const add = function(a, b) {
  return a + b;
};
```

A function declaration is defined using the function keyword and is hoisted.
Example:

```bash
function add(a, b) {
  return (a + b);
}
```

Function declarations can be used before they are defined, but function expressions cannot.

---

### Q3. What is an arrow function? Mention one advantage and one limitation.

**Answer:**
An arrow function is a shorter syntax for writing functions using =>.
Example:

```bash
const greet = (name) => {
  return `Hello, ${name}`;
};
```

**Advantage**: Shorter and cleaner syntax.
**Limitation**: Arrow functions do not have their own this.

---

### Q4. What is the difference between primitive and non-primitive data types? Give examples.

**Answer:**
Primitive data types store a single value and are immutable.
Examples: number, string, boolean, null, undefined

Non-primitive data types store multiple values and are mutable.
Examples: object, array, function

---

### Q5. What is pass by value and pass by reference in JavaScript? Explain with a simple example.

**Answer:**
Pass by value means a copy of the value is passed. Changes do not affect the original value.
Example:

```bash
let a = 5;
function square(x) {
  x = x * x;
}
square(a);
// a is still 5
```

Pass by reference means the reference is passed.
Changes affect the original object.
Example:

```bash
let obj = { value: 5 };
function update(o) {
  o.value = 10;
}
update(obj);
// obj.value is now 10
```

---

### Q6. What does `return` do in a function? What happens if we don’t return anything?

**Answer:**
`return` sends a value back from the function and stops execution.
If a function does not return anything, it returns `undefined`.

---

### Q7. What is a callback function? Why are callbacks used?

**Answer:**
A callback function is a function passed as an argument to another function.
Callbacks are used to execute code after another function completes.

---

### Q8. Explain the concept of default parameters in functions.

**Answer:**
Default parameters provide default values if no argument is passed.
Example:

```bash
function greet(name = "User") {
  return `Hello, ${name}`;
}
```
