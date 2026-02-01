# ADVANCED LEVEL – EXAM 4

## Topic: ES6+, Classes & Inheritance

## PART A – THEORY

### Q1. What are classes in JavaScript?

**Answer:**  
- Classes are blueprints for objects.
- Introduced in ES6, syntactic sugar over constructor functions.

```bash
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
```

---

### Q2. Difference between class and constructor function

**Answer:**  
| Feature  | Constructor Function        | Class                            |
| -------- | --------------------------- | -------------------------------- |
| Syntax   | `function Person(){}`       | `class Person{}`                 |
| Hoisting | Hoisted                     | Not hoisted                      |
| Methods  | Added to prototype manually | Added inside class automatically |

---

### Q3. What is inheritance in JS?

**Answer:** 
- Allows one class to use properties and methods of another.
- Uses `extends` keyword.

```bash
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
  getPosition() {
    return this.position;
  }
}
```

---

### Q4. What are static methods?

**Answer:** 
- Methods attached to class, not instances
- Called directly on class

```bash
class MathUtil {
  static add(a,b){ return a+b; }
}
MathUtil.add(2,3); // 5
```

---

### Q5. ES6 modules (brief)

**Answer:** 
- export → share code from one file
- import → use code in another file

```bash
// math.js
export const add = (a,b) => a+b;

// main.js
import { add } from './math.js';
console.log(add(2,3));
```

---

### Q6. Template literals & default parameters

**Answer:** 
- Template literals: ${variable} inside backticks ``
- Default parameters: set default if argument missing

```bash
function greet(name="Guest") {
  return `Hello ${name}`;
}
```

---

### Q7. Destructuring & spread operator

**Answer:** 
- Destructuring → extract values from array/object
- Spread → expand array/object

```bash
const user = {id:1, name:"Ram"};
const {id, name} = user;

const arr1 = [1,2];
const arr2 = [...arr1,3,4]; // [1,2,3,4]
```

---

### Q8. Real-world patterns (brief)

**Answer:** 
- Module pattern: keep code private, expose API
- Factory pattern: create multiple objects
- Singleton pattern: single instance