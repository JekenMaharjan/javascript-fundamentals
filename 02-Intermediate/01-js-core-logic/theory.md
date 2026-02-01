# INTERMEDIATE LEVEL – EXAM 1

## Topic: Core JavaScript Logic & Functions

### Q1. What is the difference between `var`, `let`, and `const`? Explain with scope and hoisting.

**Answer:**
'var' : its value can be changed easily which is not secure for the projects (better not to use)
'let' : its value is changeable but quiet secure that var (useable)
'const' : its value is constant, doesnt change (mostly used)

---

### Q2. What is a function expression? How is it different from a function declaration?

**Answer:**
function expression is the expressions that is used in a function.
where as function declaration is the function that is declared at the beginning of the code.

---

### Q3. What is an arrow function? Mention one advantage and one limitation.

**Answer:**
arrow function is simply a function which uses arrow to declare function like:
const function = () => {
    // block of code
}

its advantage is that it can be export default easily from one folder to other
its limitation is that its quiet difficult to use that normal function.

---

### Q4. What is the difference between primitive and non-primitive data types? Give examples.

**Answer:**
Sorry, I'm unknown.

---

### Q5. What is pass by value and pass by reference in JavaScript? Explain with a simple example.

**Answer:**
pass by value means passing a value or argument in the function.
example:
square(a) {
    const b = (a^2);
    return b;
}
square(2);

// output: 2^2 = 4

pass by reference means passing the reference from one function to the other function.
example:
referencePass(square(a)) {
    square(a) + 1;
    return;
}
referencePass(2);

// output: (2^2)+1 = 5

---

### Q6. What does `return` do in a function? What happens if we don’t return anything?

**Answer:**
return returns the output and execution a block of code mostly used in the function.
it is okay to not use 'return' but if we dont use it then the function doesnt provide any outcome out of it after the execution of block of code..
instead of 'return' we can also use 'console.log()' for the output display.

---

### Q7. What is a callback function? Why are callbacks used?

**Answer:**
callback function is the method to call the function as much as you want after the declaration of function properly.
it is used so that the block of code is not required to be written every time to call it instead use callback function and if needed pass arguments and so on..

---

### Q8. Explain the concept of default parameters in functions.

**Answer:**
default parameters in functions are the parameters that are call by  default in the function declaration.
