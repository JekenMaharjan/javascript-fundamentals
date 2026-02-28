
// Level 4: Arrays & Loops


// -------------------------------
// Question 1: Arrays – Basics
// -------------------------------
// What will this print ?
let arr = [1, 2, 3, 4];
console.log(arr[2]);
console.log(arr.length);

// -------------------------------
// Answer:
// -------------------------------
// Output: 3 -> value of index 2 in "arr" array
// Output: 4 -> length of "arr" array

// =======================================================================

// -------------------------------
// Question 2: Array Methods
// -------------------------------
// Predict the output:
let fruits = ["apple", "banana"];
fruits.push("mango");
fruits.pop();
fruits.unshift("grapes");
console.log(fruits);

// -------------------------------
// Answer:
// -------------------------------
// push → adds at end
// pop → removes from end
// unshift → adds at beginning

// Output: ["grapes", "apple", "banana"]

// =======================================================================

// -------------------------------
// Question 3: Loops
// -------------------------------
// Write a loop that prints numbers 1 to 5 using:
// a) for loop
// b) while loop

// -------------------------------
// Answer:
// -------------------------------
// a)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// b)
let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}

// =======================================================================

// -------------------------------
// Question 4: Loop & Array
// -------------------------------
// What will this output ?
let nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
    nums[i] += 5;
}
console.log(nums);

// -------------------------------
// Answer:
// -------------------------------
// Output: [15, 25, 35]
