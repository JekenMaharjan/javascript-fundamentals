// PART B – PRACTICAL TEST

// Q8. Create an Object

// Create an object named student with:
// name, age, isStudent
// Print the object
const student = {
    name : "Jeken",
    age  : 25,
    isStudent : True
}
console.log(student);

// -----------------------------------------

// Q9. Access Properties

// Print student name and age using dot notation
// Print student isStudent using bracket notation
console.log(student.name);
console.log(student.age);
console.log(student[isStudent]);

// -----------------------------------------

// Q10. Update Object

// Update age
// Add new property: grade
// Print updated object
student.age = 15;
student = {
    grade : 10
}

console.log(student);

// -----------------------------------------

// Q11. Object Method

// Add a method to student object that prints:
// "Hello, my name is <name>"
function studentHello(student) {
    console.log("Hello, my name is " + student.name);
}

// -----------------------------------------

// Q12. Object to JSON

// Convert student object to JSON
// Print the JSON string
const JSONdata = student.json
console.log(JSONdata);

// -----------------------------------------

// Q13. JSON to Object

// Convert the JSON string back to JavaScript object
// Print the object
const backObject = stringify.JSONdata;
console.log(backObject);