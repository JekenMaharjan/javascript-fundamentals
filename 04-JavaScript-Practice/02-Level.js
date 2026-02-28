
// Level 2: Operators & Type Coercion


// -------------------------------
// Question 1:
// -------------------------------
// Predict the output:
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
console.log(false + "1");

// -------------------------------
// Answer:
// -------------------------------
// "52"     (string concatenation)
// 3        (JS converts string to number for subtraction)
// 2        (true becomes 1)
// "false1" (false becomes "false" in string concatenation)

// Tip: JS type coercion can be tricky — always remember + with string triggers concatenation, other arithmetic triggers number conversion.
