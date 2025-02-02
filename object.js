//1-- create object
//How to create object using object literal
// let person = {
//     firstName: "NoMan",
//     lastName: "Khan",
//     age: 21,
//     city: "RangPur",
//     isBangladeshi: true,
//     getName: function() {
//         return `My first name is ${this.firstName}`;
//     }
// };

// console.log(person.getName()); 


//2-- creating instance of object
// let man = new Object();
// man.firstName = "NoMan";
// man.lastName = "Khan";
// man.age = 21;
// man.getAge = () => {
//     return `My age is ${man.age}`; 
// };

// console.log(man.getAge()); 


//3-- create object constructor and In JavaScript, you can create an object constructor using a function or a class
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
    
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
// }

// const person1 = new Person("John", 25);
// person1.greet();

//4-- create class and update
class Person {
    name = "John Doe";  // Default property
    age = 30;           // Default property

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person();
person1.greet();  

// Updating properties 
person1.name = "Alice";
person1.age = 25;
person1.greet();  

