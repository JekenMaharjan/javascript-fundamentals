
// Level 14: call(), apply(), bind()

// These control this manually.

// -------------------------------
// Question 1: call()
// -------------------------------
function greet() {
    console.log(this.name);
}

let user1 = { name: "Jeken" };

greet.call(user1);
// What will this print ?
// What does .call() do?

// -------------------------------
// Answer:
// -------------------------------
/*
"Jeken"

.call() calls the function immediately and sets this to the provided object.
*/

// =======================================================================

// -------------------------------
// Question 2: bind()
// -------------------------------
let user2 = {
    name: "Jeken",
    greet: function () {
        console.log(this.name);
    }
};

let fn = user2.greet;
fn();
// What will this print ?
// Now fix it using bind().

// -------------------------------
// Answer:
// -------------------------------
/*
undefined

Because:
- fn() is called as a normal function
- this defaults to window
- window.name is empty or undefined

So, it prints undefined.

Fix using bind():
let fn = user2.greet.bind(user2);
fn();

So, now Output: Jeken

-> .call() → invokes immediately
-> .bind() → returns a new function with fixed this
*/
