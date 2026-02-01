# ADVANCED LEVEL – EXAM 6

## Topic: Patterns, Error Handling & Performance

## PART A – THEORY

### Q1. What are common JS design patterns?

**Answer:** 
1. Module Pattern – encapsulate code, expose API
2. Factory Pattern – create multiple similar objects
3. Singleton Pattern – single instance only
4. Observer Pattern – subscribe/notify model (events)

```bash
// Module pattern example
const Counter = (function(){
  let count = 0;
  return {
    increment: ()=>++count,
    get: ()=>count
  }
})();
```

---

### Q2. What is error handling in JS?

**Answer:** 
- Detect and manage errors so app doesn’t crash
- Use try...catch and finally

```bash
try {
  let data = JSON.parse("invalid json");
} catch(err) {
  console.error("Error:", err.message);
} finally {
  console.log("Execution complete");
}
```

---

### Q3. Difference between throw and console.error

**Answer:** 
| Feature         | throw                | console.error  |
| --------------- | -------------------- | -------------- |
| Stops execution | ✅                    | ❌              |
| Shows error     | ✅                    | ✅              |
| Use             | Handle program logic | Debugging only |

---

### Q4. What is debouncing vs throttling?

**Answer:** 
- Debounce: Wait for inactivity → used for search input
- Throttle: Run at intervals → used for scroll events

```bash
// Debounce
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fn.apply(this,args), delay);
  }
}
```

---

### Q5. How to optimize performance in JS?

**Answer:** 
- Minimize DOM manipulation
- Use event delegation
- Cache selectors and calculations
- Avoid memory leaks (remove unused listeners)
- Lazy load data/images

---

### Q6. Explain memory leaks and prevention

**Answer:** 
- Memory leak → unused variables or DOM references remain in memory
- Prevent by:
    - Removing event listeners
    - Nullifying references
    - Using closures carefully

---

### Q7. What is Promise.all & Promise.race

**Answer:** 
- `Promise.all([p1,p2])` → wait for all promises to resolve
- `Promise.race([p1,p2])` → wait for first promise to resolve

```bash
Promise.all([fetch1, fetch2]).then(console.log);
Promise.race([fetch1, fetch2]).then(console.log);
```