// INTERMEDIATE EXAM 2 – PRACTICAL TEST
// Do NOT use console.log unless asked

// Q1: Create an array of numbers
// Return a new array with each number doubled
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

// -----------------------------------------

// Q2: From an array of numbers,
// return only even numbers using filter
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// -----------------------------------------

// Q3: Calculate total sum of an array using reduce
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// -----------------------------------------

// Q4: Convert this array of objects into
// an array of names using map
const users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Shyam" },
    { id: 3, name: "Hari" }
];

function getUserNames(users) {
    return users.map(user => user.name);
}


// -----------------------------------------

// Q5: Create an object named book
// with title, author, and a method getDetails()
// that returns "Title by Author"
const book = {
    title: "Science",
    author: "Ram",
    getDetails() {
        return `${this.title} by ${this.author}`;
    }
};


// -----------------------------------------

// Q6: Use destructuring to extract title and author
// from the book object
function extractBookDetails(book) {
    const { title, author } = book;
    return { title, author };
}


// -----------------------------------------

// Q7: Make a shallow copy of an array
function copyArray(arr) {
    return [...arr];
}


// -----------------------------------------

// Q8: Fix the bug
// const student = {
//     name: "Jeken",
//     greet: () => {
//         return `Hello, my name is ${this.name}`;
//     }
// };

// Fix
const student = {
    name: "Jeken",
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};
