//create object
//How to create object using object literal
let person = {
    firstName : "NoMan",
    lastName : "khan",
    age : 21,
    city : "RangPur",
    isBangladeshi : true,
    getName : (()=>{
        return `my first name is ${person.firstName}`
    })
}
console.log(person.getName);