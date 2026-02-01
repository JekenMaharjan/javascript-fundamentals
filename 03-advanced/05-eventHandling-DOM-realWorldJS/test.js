// ADVANCED EXAM 5 – PRACTICAL

// Q1: Select elements
const button = document.getElementById("myBtn");
const items = document.querySelectorAll(".item");

// -----------------------------------------

// Q2: Add click event listener
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// -----------------------------------------

// Q3: Modify DOM elements
const title = document.querySelector("h1");
title.textContent = "Hello World!";
title.style.color = "blue";

// -----------------------------------------

// Q4: Event delegation
const parent = document.getElementById("listParent");
parent.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "LI") {
        console.log("Clicked on list item:", e.target.textContent);
    }
});

// -----------------------------------------

// Q5: Create element dynamically
const newDiv = document.createElement("div");
newDiv.textContent = "I am new!";
document.body.appendChild(newDiv);

// -----------------------------------------

// Q6: Form validation example
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    if (name === "") alert("Name is required");
    else alert(`Hello, ${name}`);
});

// -----------------------------------------

// Q7: Fetch API to show data
async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        console.log(data.title);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}
fetchData();

// -----------------------------------------

// Q8: Real-world pattern: Tab navigation
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        contents[index].classList.add("active");
    });
});
