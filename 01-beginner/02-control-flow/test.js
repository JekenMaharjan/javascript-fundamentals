// PART B – PRACTICAL TEST

// Q6. Number Check

// Write a program that checks a number:
// if positive → print "Positive"
// if negative → print "Negative"
// else → print "Zero"
const a = 12;
const b = -10;
const c = 0;

if ( b > 0 ) {
    console.log("Positive");
} else if (b < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// -----------------------------------------

// Q7. Grade System

// Given marks (0–100):
// 90+ → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// below 60 → Fail
const mark = 55;

console.log("Mark should be between 0 to 100 (0-100):")
if ( mark >= 90 ) {
    console.log("A");
} else if (mark >= 80 ) {
    console.log("B");
} else if (mark >= 70) {
    console.log("C");
} else if (mark >= 60) {
    console.log("D");
} else {
    console.log("Fail");
}

// -----------------------------------------

// Q8. Day Finder (switch)

// Given a number (1–7)
// Print day name (Sunday–Saturday)
// If invalid → "Invalid day"
const day = 5;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// -----------------------------------------

// Q9. Loop Test (for)

// Print numbers from 1 to 10 using for loop
for( i = 1 ; i <= 10 ; i++ ) {
    console.log(i);
}

// -----------------------------------------

// Q10. Even Numbers (while)

// Print even numbers between 1 and 20 using while loop
num = 1;
{
    if ((num%2) == 0) {
        console.log(num);
    }
    num++;
}while( num <= 20 );

// -----------------------------------------

// Q11. Login Check (Logical Operators)

// Given:
// username = "admin"
// password = "12345"
const userName = "admin";
const passWord = "12345";

// If both correct → "Login successful"
// else → "Invalid credentials"
const enterUserName = "admin"
const enterPassWord = "admin@123"

if (userName == enterUserName && passWord == enterPassWord) {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}
