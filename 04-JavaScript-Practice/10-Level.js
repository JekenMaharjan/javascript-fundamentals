
// Level 10: The 'this' Keyword

// -------------------------------
// Question 1: Global Context
// -------------------------------
// What will this print in a browser?
console.log(this);
//What does 'this' refer to in the global scope?

// -------------------------------
// Answer:
// -------------------------------
// It prints out:
// Window { ... }.

// 'this' in global scope = 'window' object (in browser).

// =======================================================================

// ------------------------------------
// Question 2: Inside Normal Function
// ------------------------------------
function show() {
    console.log(this);
}

show();
// What will this print in:
// 1. Non - strict mode ?
// 2. Strict mode ?

// -------------------------------
// Answer:
// -------------------------------
// 1. Window { ... }
// Because in non-strict mode, 'this' defaults to the global object.

// 2. undefined

// Non-strict → this = window
// Strict → this = undefined

// =======================================================================

// ---------------------------------
// Question 3: Inside Object Method
// ---------------------------------
let user = {
    name: "Jeken",
    greet: function () {
        console.log(this.name);
    }
};

user.greet();
// What will this output and why ?

// -------------------------------
// Answer:
// -------------------------------
// Output: "Jeken"
// Because when you call: user.greet();
// 'this' refers to the object before the dot.

// Note: 'this' is determined by how function is called, not where it is written.

// =======================================================================

// ------------------------------------------
// Question 4: Arrow Function Inside Object
// ------------------------------------------
let user1 = {
    name: "Jeken",
    greet: () => {
        console.log(this.name);
    }
};

user1.greet();
// What will this print in browser ?
// Why is it different from previous example ?

// -------------------------------
// Answer:
// -------------------------------
// Output: undefined

// Because arrow functions do NOT have their own this.
// They inherit 'this' from surrounding scope.
// Here, surrounding scope is global scope.
// Global 'this' = 'window'.
// 'window.name' usually = empty string or undefined.

// So it prints 'undefined'.

// Note: This is why arrow functions should NOT be used as object methods.
