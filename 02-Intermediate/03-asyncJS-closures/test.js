// INTERMEDIATE EXAM 3 – PRACTICAL TEST

// Q1: Callback Example
// Write a function that accepts a number and a callback
// The callback should return the square of the number

function processNumber(num, callback) {
    return callback(num);
}

// -----------------------------------------

// Q2: Promise Creation
// Create a Promise that resolves after 1 second
// with the message "Data loaded"

function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 1000);
    });
}

// -----------------------------------------

// Q3: Promise Consumption
// Use then() to get the resolved value from loadData()
loadData().then(result => result);

// -----------------------------------------

// Q4: Async/Await
// Rewrite Q3 using async/await
async function getData() {
    const result = await loadData();
    return result;
}

// -----------------------------------------

// Q5: Error Handling
// Modify loadData() so it sometimes rejects
// Handle the error properly
function loadData() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;

        setTimeout(() => {
            if (success) {
                resolve("Data loaded");
            } else {
                reject("Failed to load data");
            }
        }, 1000);
    });
}

async function fetchData() {
    try {
        const result = await loadData();
        return result;
    } catch (error) {
        return error;
    }
}

// -----------------------------------------

// Q6: Closure Example
// Write a function counter()
// It should return another function
// Each call should increase count by 1

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

// -----------------------------------------

// Q7: Fix the Bug (Closure Issue)
// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         // Should print 1, 2, 3
//         // Currently prints 4, 4, 4
//     }, 1000);
// }

// fix
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        // prints 1, 2, 3
    }, 1000);
}
