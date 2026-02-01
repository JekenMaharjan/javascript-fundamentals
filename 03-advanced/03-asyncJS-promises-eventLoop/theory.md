# ADVANCED LEVEL – EXAM 3

## Topic: Asynchronous JavaScript, Promises & Event Loop

## PART A – THEORY

### Q1. What is asynchronous JavaScript? Why do we need it?

**Answer:**  
- Asynchronous JS allows code to run **without blocking the main thread**.  
- Useful when performing tasks like **API calls, timers, file reading**.  
- Example: setTimeout, fetch, event listeners.

---

### Q2. What is the Event Loop in JavaScript?

**Answer:**  
- JS is **single-threaded**.  
- Event loop allows asynchronous callbacks to run after the main execution completes.  
- Mechanism: **Call Stack → Web APIs → Callback Queue → Call Stack**  

```bash
console.log("Start");
setTimeout(()=>console.log("Timer"), 0);
console.log("End");
// Output: Start, End, Timer
```

---

### Q3. What are callbacks? How do they work?

**Answer:**
- A callback is a function passed as an argument to another function.
- It is called after some operation is completed.

```bash
function greet(name, callback){
    console.log(`Hello ${name}`);
    callback();
}
greet("Ram", () => console.log("Callback executed"));
```

---

### Q4. What is "callback hell"? How can it be avoided?

**Answer:**
- Nested callbacks inside callbacks → difficult to read & maintain.
- Avoid using: Promises, async/await, modular functions.

---

### Q5. What are Promises?

**Answer:**
- Promise = an object representing future value of async operation
- States: pending → fulfilled / rejected

```bash
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Done"), 1000);
});
p.then(result=>console.log(result));
```

---

### Q6. What is `async`/`await`? How does it simplify async code?

**Answer:**
- `async` makes a function return a promise
- `await` pauses execution until promise is resolved
- Makes async code look synchronous

```bash
async function fetchData(){
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
}
```

---

### Q7. Difference between microtasks and macrotasks

**Answer:**
- Microtasks: Promises, process.nextTick
- Macrotasks: setTimeout, setInterval, I/O, UI events
- Microtasks run before macrotasks in the event loop.

```bash
console.log("Start");

setTimeout(()=>console.log("Timeout"), 0);
Promise.resolve().then(()=>console.log("Promise"));

console.log("End");

// Output: Start, End, Promise, Timeout
```

---

### Q8. Explain fetch API & handling errors

**Answer:**
- `fetch` performs HTTP requests → returns a promise
- Errors handled with `.catch`() or try/catch with async/await

```bash
fetch("https://api.example.com")
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.error(err));
```

---

### Q9. Closure example (async)

**Answer:**
- Function remembers its variables even after execution

```bash
function counter(){
  let count=0;
  return function(){ count++; console.log(count); }
}
const c = counter();
setInterval(c,1000); // prints 1,2,3...
```