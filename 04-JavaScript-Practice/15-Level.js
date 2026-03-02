
// Level 15: Tricky this

// -------------------------------
// Question 1: Nested Function
// -------------------------------
let user = {
    name: "Jeken",
    greet: function () {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};

user.greet();
// What will this print in browser(non - strict mode) ?
// Why ?
// How can you fix it ?

// -------------------------------
// Answer:
// -------------------------------
/*
undefined

Because:
- inner() is called as a normal function
- Not as user.inner()
- So this inside inner() defaults to window
- window.name is undefined

Note: this depends on how function is called, not where it is defined.

Fix:
1. Arrow function
    let user = {
        name: "Jeken",
        greet: function() {
            const inner = () => {
            console.log(this.name);
            };
            inner();
        }
    };
    Arrow function inherits this from outer greet.
    Output: Jeken

2. Store this
    let user = {
    name: "Jeken",
    greet: function() {
        let self = this;
        function inner() {
        console.log(self.name);
        }
        inner();
    }
    };
    This was common before ES6.
*/


