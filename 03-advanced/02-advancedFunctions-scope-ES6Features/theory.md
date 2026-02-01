# ADVANCED LEVEL – EXAM 2

## Topic: Advanced Functions, Scope & ES6 Features

## PART A – THEORY

### Q1. What is an IIFE (Immediately Invoked Function Expression)? Explain with a code example and why it is used.

**Answer:**
An IIFE is a function that runs immediately after it’s defined.
It is used to create a private scope so variables don’t pollute global scope.

```bash
(function() {
    console.log("Hello Advanced JS");
})();
```

---

### Q2. What is the difference between function declaration and function expression?

**Answer:**
| Feature  | Function Declaration                        | Function Expression                         |
| -------- | ------------------------------------------- | ------------------------------------------- |
| Hoisting | Fully hoisted (can call before declaration) | Not hoisted (cannot call before definition) |
| Syntax   | `function greet(){}`                        | `const greet = function(){}`                |
| Usage    | Normal functions                            | Can be anonymous, assigned to variables     |

---

### Q3. Explain `var`, `let`, and `const` in terms of **scope** and **hoisting**. Give examples.

**Answer:**
- `var` → function scoped, hoisted with `undefined`
- `let` → block scoped, hoisted in TDZ
- `const` → block scoped, hoisted in TDZ, must be initialized

```bash
var a = 1;
let b = 2;
const c = 3;
```

---

### Q4. What is the difference between shallow copy and deep copy? Give examples.

**Answer:**
**Shallow copy**: Copies only top-level values, nested objects still reference original
**Deep copy**: Copies everything recursively

```bash
// shallow copy
const arr1 = [1,2,3];
const arr2 = [...arr1];

// deep copy
const obj1 = { a:1, b:{ c:2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));
```

---

### Q5. What are ES6 modules? How do you export and import?

**Answer:**
Modules allow splitting code into multiple files.

- **export**: exposes variables/functions
- **import**: brings them into another file

```bash
// math.js
export function add(a,b){ return a+b; }

// main.js
import { add } from './math.js';
console.log(add(2,3)); // 5
```

---

### Q6. Explain the concept of prototypes in JavaScript. Why are they important?

**Answer:**
- Every function has a prototype object
- Methods added to prototype are shared by all instances
- Saves memory and allows inheritance

```bash
function Person(name){ this.name = name; }
Person.prototype.greet = function(){ console.log(`Hello ${this.name}`); }
const p1 = new Person("Ram");
p1.greet(); // Hello Ram
```

---

### Q7. What are Rest and Spread operators? Give examples.

**Answer:**
- **Rest** (...args) → collects multiple arguments into an array
- **Spread** (...arr) → expands an array or object

```bash
// Rest
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
sum(1,2,3); // 6

// Spread
const arr1 = [1,2], arr2 = [3,4];
const merged = [...arr1,...arr2]; // [1,2,3,4]
```

---

### Q8. Explain destructuring assignment for arrays and objects with examples.

**Answer:**
- Extract values from arrays or objects

```bash
// Array
const numbers = [10,20,30];
const [a,b,c] = numbers;

// Object
const user = { id:1, name:"Ram" };
const { id, name } = user;
```

---

### Q9. What are arrow functions? How do they handle `this` differently than regular functions?

**Answer:**
- Arrow functions do not have their own `this`
- `this` is inherited from parent scope

```bash
const obj = {
    name: "Ram",
    greet: function(){
        const arrow = () => console.log(this.name);
        arrow();
    }
};
obj.greet(); // Ram
```
