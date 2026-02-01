# ADVANCED LEVEL – EXAM 1

## Topic: Execution Context, Scope & Hoisting

## PART A – THEORY

### Q1. What is the JavaScript Execution Context? Explain: Global Execution Context, Function Execution Context.

**Answer:**
An **Execution Context (EC)** is an environment where JavaScript code is evaluated and executed.

There are two main types:

1. Global Execution Context (GEC)

- Default context created when JS starts running.
- Variables declared with var become global.
- The this keyword in global context refers to window (browser) or global (Node.js).

2. Function Execution Context (FEC)

- Created when a function is called.
- Has its own scope (variables, arguments).
- A function context is pushed to the call stack when invoked.

---

### Q2. What is the Call Stack? How does JavaScript use it?

**Answer:**
- The Call Stack is a LIFO (Last In First Out) structure that keeps track of execution contexts.
- When a function is called, its execution context is pushed onto the stack.
- When it finishes, it is popped off.
Example:

```bash
function a() { b(); console.log("A"); }
function b() { console.log("B"); }
a();
// Call stack execution:
// Push GEC -> Push a() -> Push b() -> Pop b() -> Pop a() -> Pop GEC
```

---

### Q3. Explain variable hoisting in JavaScript. How does hoisting differ for: var, let and const.

**Answer:**
**Hoisting** moves variable and function declarations to the top of their scope during compilation.

- **var**: Hoisted, initialized as `undefined`
- **let / const**: Hoisted, but in **Temporal Dead Zone (TDZ)** — cannot access before declaration
- **function declarations**: Hoisted with full body
Example:

```bash
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;

function greet() { console.log("Hello"); } // fully hoisted
greet(); // works
```

---

### Q4. What is scope in JavaScript? Explain: Global scope, Function scope and Block scope.

**Answer:**
**Scope** determines where variables are accessible.

1. **Global scope**: Accessible anywhere
2. **Function scope**: Variables declared inside a function are only accessible there
3. **Block scope**: Variables declared with `let` or `const` inside `{}` are only accessible within the block

---

### Q5. What is the Temporal Dead Zone (TDZ)?

**Answer:**
TDZ is the period between entering scope and the variable declaration (`let` or `const`)

Accessing variable in TDZ throws **ReferenceError**

```bash
console.log(a); // ReferenceError
let a = 10;
```

---

### Q6. Predict the output and explain:

```bash
console.log(a);
var a = 10;
```

**Answer:**
**Output**: undefined (var is hoisted)

---

### Q7. Predict the output and explain:

```bash
console.log(b);
let b = 20;
```

**Answer:**
**Output**: ReferenceError (TDZ)

---

### Q8. Predict the output and explain:

```bash
function test() {
  console.log(x);
  var x = 5;
}
test();
```

**Answer:**
**Output**: undefined (var is hoisted)

---

### Q9. Predict the output and explain:

```bash
function test() {
  console.log(y);
  let y = 5;
}
test();
```

**Answer:**
**Output**: ReferenceError (TDZ)