
// Level 6: DOM Basics


// -------------------------------
// Question 1: DOM Selection
// -------------------------------
// If you have this HTML:
<div id="greeting">Hello</div>

// What will this JavaScript do?
document.getElementById("greeting").innerText = "Hi there!";

// -------------------------------
// Answer:
// -------------------------------
// The [document.getElementById("greeting").innerText = "Hi there!";] will immediately change the text from "Hello" to "Hi there!".


// =======================================================================

// -------------------------------
// Question 2: DOM & Event
// -------------------------------
// Predict the behavior:
<button id="btn">Click me</button>

document.getElementById("btn").addEventListener("click", function () {
    alert("Button clicked!");
});

// -------------------------------
// Answer:
// -------------------------------
// When you click on "Click me" button, then it shows alert "Button clicked!".

