# BEGINNER LEVEL – EXAM 2

## Topic: Control Flow & Logical Thinking

This exam tests whether you can think like a programmer, not just write syntax.

---

## Syllabus

This test covers:

1. if / else
2. else if
3. switch
4. for loop
5. while loop
6. Logical operators (&&, ||)
7. Problem-solving mindset

---

## Part A – Theory

### Q1. What is control flow in JavaScript?

**Answer:**
Control flow in JavaScript determines the order in which code executes, based on conditions and loops. For example, if-else decides which block of code runs, and loops repeat code until a condition is met.

---

### Q2. Difference between if-else and switch

**Answer:**  
if-else → for conditions that may be complex (ranges, multiple expressions)

switch → when checking one variable against multiple fixed values

---

### Q3. When should you use a for loop vs a while loop?

**Answer:**  
for → use when you know exact number of iterations

while → use when iterations depend on a condition that changes dynamically

---

### Q4. What are logical operators? Explain && and || with examples.

**Answer:**  
logical operators are operator like && → AND, || → OR.

Example for ( && → AND ) and ( || → OR ):

if (a > 5 && b < 10) {
    console.log("Both conditions true");
}
if (a > 5 || b < 5) {
    console.log("At least one condition true");
}

---

### Q5. What happens if no condition matches in if-else and switch?

**Answer:**  
if-else → nothing runs if no condition matches (unless you use else)

switch → runs default if provided, otherwise nothing happens

Programs do not crash automatically


