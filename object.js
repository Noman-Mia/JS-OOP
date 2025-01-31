//create object
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


//by creating instance of object
let man = new Object();
man.firstName = "NoMan";
man.lastName = "Khan";
man.age = 21;
man.getAge = () => {
    return `My age is ${man.age}`; 
};

console.log(man.getAge()); 
