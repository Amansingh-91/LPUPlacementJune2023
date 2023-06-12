// objects
// ways of object creation 
const obj = {
    fname:"Aman",
    lName:"Saini",
    age:27,
    fullname: function () {
        return this.fname+" "+this.lName;
    }
};

console.log(obj.fullname());
const obj1 ={};
obj1.name = "Divya";
obj1.age =  26; 

const obj2 = new Object();

obj2.name = "Dharam";
obj2.age = 27;


// const person = {
//     name:"Aman",
//     age:27,
//     email:"aman@xyz.com",
//     mobile:"1234567890",
// }

function Person(name, age,email,mobile){
    this.name = name;
    this.age = age;
    this.email = email;
    this.mobile = mobile;
}
Person.prototype.lang = "Eng";

const p1 = new Person("Jack",27,"amanSaini@xyz.com","1234567890");
p1.address = "home";
console.log(p1);
const p2= new Person("Jim",27,"amanSaini@xyz.com","1234567890");
console.log(p2);
// person.prototype.lang = "english";
// console.log(person);
// es6
// class and object 
class Employee{
   
    constructor(name,age,email,mobile){
        this.name = name;
        this.age = age;
        this.email = email;
        this.mobile = mobile;
    }
    fullname = function  (params) {
        console.log("name is" ,this.name);
    }
    

}

const emp1 = new Employee("Aman",27,"amanSaini@xyz.com","1234567890");
const emp2 = new Employee("Dharam",26,"Dharam@xyz.com","1234098765");

console.log(emp1,emp2);

emp2.fullname();

// iterate over an object
// using for in loop

for (x in emp1){
    console.log(emp1[x]);
}

// JSON =>Js object Notation
const jsn = JSON.stringify(emp1);
console.log(jsn);
