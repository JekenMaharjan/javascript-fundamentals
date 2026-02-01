// ADVANCED EXAM 6 – PRACTICAL

// Q1: Module Pattern
const Counter = (function () {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        get: () => count
    }
})();
console.log(Counter.increment()); // 1
console.log(Counter.get()); // 1

// -----------------------------------------

// Q2: Factory Pattern
function createUser(name, age) {
    return {
        name,
        age,
        greet() { return `Hi ${this.name}`; }
    }
}
const user1 = createUser("Ram", 25);
console.log(user1.greet()); // Hi Ram

// -----------------------------------------

// Q3: Singleton Pattern
const Singleton = (function () {
    let instance;
    function createInstance() { return { name: "OnlyOne" }; }
    return {
        getInstance: function () {
            if (!instance) instance = createInstance();
            return instance;
        }
    }
})();
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2); // true

// -----------------------------------------

// Q4: Error handling example
try {
    JSON.parse("invalid");
} catch (err) {
    console.error("Error:", err.message);
} finally {
    console.log("Execution done");
}

// -----------------------------------------

// Q5: Debounce example
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}
const inputHandler = debounce(() => console.log("Input processed"), 300);
document.getElementById("inputBox").addEventListener("input", inputHandler);

// -----------------------------------------

// Q6: Throttle example
function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            fn.apply(this, args);
            lastCall = now;
        }
    }
}
window.addEventListener("scroll", throttle(() => console.log("Scrolled"), 1000));

// -----------------------------------------

// Q7: Optimize DOM
const list = document.querySelectorAll("li");
const fragment = document.createDocumentFragment();
list.forEach(li => fragment.appendChild(li));
document.getElementById("ulParent").appendChild(fragment);

// -----------------------------------------

// Q8: Promise.all & Promise.race
const p1 = new Promise(res => setTimeout(() => res(1), 1000));
const p2 = new Promise(res => setTimeout(() => res(2), 2000));

Promise.all([p1, p2]).then(console.log); // [1,2]
Promise.race([p1, p2]).then(console.log); // 1
