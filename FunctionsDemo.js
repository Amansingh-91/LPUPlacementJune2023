// Functions in js
// normal function without parameters
// function Greet() {
//     console.log("Hello friends");
// }
// // call function
// Greet();

// // functions with parameters

// // parameters => extra peice of info which we pass to the function

// GreetWithName("Aman");
// GreetWithName("Divya");
// GreetWithName();
// function GreetWithName(name="John"){// parameter with default value
//     console.log(`Hello ${name}, good evening`);
// }


// expressions as a function

const greet = function () {
    console.log("hello ,I am expression function");
}
greet();

// function hoisting

// Difference b/w var and let 
const diff = function () {
    let x =  12;
    
    if(x == 12){
        var y = 13;//variable hoisting 
        let z = 15;
    }
    console.log(x,y);
    // return type
    return x;
}
let temp = diff();
console.log(temp);

// arrow function

const Greet = ()=>{
    console.log("Hello friends");
}
Greet();

const GreetWithName = name=>{
    console.log(`I am ${name}, Good afternoon`);
}

GreetWithName("Aman");

// const sum = (x,y)=>{
//     console.log(`sum of x and y is ${x+y}`);
//     return x+y;
// }

const sum = (x,y)=>x+y;
console.log(sum(12,10));

// call by value and ref
let arr = ["Aman","Divya","Dharam","jack","July","Jim","Jhon"];
const passByValue = x =>{
    x= 20;
    console.log(x,"in function");
}

let x = 12;
passByValue(x);
console.log(x);
console.log(arr,"before");
const passByRef =arr=>{
    arr.push("Jolly");
    console.log(arr,"in");
}
passByRef(arr);
console.log(arr,"after");

// callBack functions
// functions passed as parameter
// makes function more dynamic
const callBack1 = (x,y)=>x+y;
const callBack2 = (x,y)=>x-y;
const callBack3 = (x,y)=>x*y;
const callBack4 = (x,y)=>y.toLowerCase().includes(x.toLowerCase());


const multipurpose = (x,y,callBack)=>callBack(x,y);

console.log(multipurpose("aman","Aman Saini",(x,y)=>{
    console.log(x,y);
}));