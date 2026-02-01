// ADVANCED EXAM 3 – PRACTICAL TEST

// Q1: Use setTimeout to print numbers 1,2,3 with 1 second delay each
setTimeout(()=>console.log(1),1000);
setTimeout(()=>console.log(2),2000);
setTimeout(()=>console.log(3),3000);

// -----------------------------------------

// Q2: Convert this nested callback to a Promise
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}
fetchDataPromise().then(console.log);

// -----------------------------------------

// Q3: Write async/await function to fetch JSON from a URL
// Use try/catch for error handling
async function fetchJSON() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
}

// -----------------------------------------

// Q4: Create a function that returns a promise
// Resolves if number > 10, rejects if <= 10
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) resolve("Number is greater than 10");
        else reject("Number is 10 or less");
    });
}
checkNumber(15).then(console.log).catch(console.log);

// -----------------------------------------

// Q5: Demonstrate microtask vs macrotask
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Output: Start, End, Promise, Timeout

// -----------------------------------------

// Q6: Handle fetch errors with async/await
async function fetchWithError() {
    try {
        const res = await fetch("https://wrongurl.com");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}

// -----------------------------------------

// Q7: Explain closure with an async example
// Create a counter that increments every second using closure  
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
const c = counter();
setInterval(c, 1000);