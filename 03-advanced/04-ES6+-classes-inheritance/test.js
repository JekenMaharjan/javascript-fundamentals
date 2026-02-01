// ADVANCED EXAM 4 – PRACTICAL

// Q1: Create a class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
const p1 = new Person("Ram", 25);
console.log(p1.greet());

// -----------------------------------------

// Q2: Class inheritance
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
const e1 = new Employee("Shyam", 30, "Developer");
console.log(e1.greet()); // Hello, my name is Shyam
console.log(e1.getPosition()); // Developer

// -----------------------------------------

// Q3: Static method
class MathUtil {
    static add(a, b) { return a + b; }
}
console.log(MathUtil.add(5, 10)); // 15

// -----------------------------------------

// Q4: Default parameter & template literal
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(welcome()); // Welcome, Guest!

// -----------------------------------------

// Q5: Destructuring & spread
const user = { id: 1, name: "Hari" };
const { id, name } = user;
console.log(id, name);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1,2,3,4]

// -----------------------------------------

// Q6: Factory pattern
function createUser(name, age) {
    return { name, age, greet() { return `Hi ${this.name}`; } };
}
const u1 = createUser("Ram", 25);
console.log(u1.greet()); // Hi Ram

// -----------------------------------------

// Q7: Singleton pattern
const Singleton = (function () {
    let instance;
    function createInstance() {
        return { name: "OnlyOne" };
    }
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
