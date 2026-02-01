# ADVANCED LEVEL – EXAM 5

## Topic: Event Handling, DOM Manipulation & Real-World JS

## PART A – THEORY

### Q1. What is the DOM?

**Answer:**  
- DOM = Document Object Model
- Represents HTML as objects and nodes in JavaScript.
- Allows JS to read and modify page content.

---

### Q2. How do you select elements in DOM?

**Answer:**  
- `document.getElementById("id")` → single element by ID
- `document.querySelector(".class")` → first element matching selector
- `document.querySelectorAll("tag")` → all elements as NodeList

```bash
const btn = document.getElementById("myBtn");
```

---

### Q3. How to add event listeners?

**Answer:**  
- Use addEventListener(event, callback)
- Example: click, mouseover, keypress

```bash
btn.addEventListener("click", ()=>console.log("Button clicked"));
```

---

### Q4. Difference between inline, traditional, and modern events

**Answer:** 
| Type        | Example                      | Notes                                |
| ----------- | ---------------------------- | ------------------------------------ |
| Inline      | `<button onclick="func()">`  | Not recommended                      |
| Traditional | `element.onclick = func;`    | Only one handler                     |
| Modern      | `element.addEventListener()` | Multiple handlers allowed, preferred |

---

### Q5. What is event bubbling and capturing?

**Answer:** 
- Bubbling: event moves from child → parent
- Capturing: event moves from parent → child
- Default: bubbling

```bash
divChild.addEventListener("click", func, false); // bubbling
divParent.addEventListener("click", func, true); // capturing
```

---

### Q6. How to modify DOM elements?

**Answer:** 
- Change content: `element.textContent = "New text"`
- Change HTML: `element.innerHTML = "<p>Hello</p>"`
- Change style: `element.style.color = "red"`

---

### Q7. What are real-world JS applications in frontend?

**Answer:** 
- Form validation, dynamic content updates, sliders, modals
- Fetching API data, single-page apps (React, Vue, etc.)
- Interactive UI: tabs, accordions, dropdowns

---

### Q8. How to handle events efficiently?

**Answer:** 
- Event delegation: attach listener to parent, catch events from children
- Reduces memory usage and supports dynamic elements

```bash
document.getElementById("parent").addEventListener("click", (e)=>{
  if(e.target && e.target.className=="childBtn"){
    console.log("Child button clicked");
  }
});
```


