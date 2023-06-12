// variables and Data types

// variables are continer/block in memory which are used to store data

// three types of variables

// var => function scope

// let => block scope
// const => block scope but used to create constant variables 
// let and const were contribution of Es6 js

// data types
// Number => 1,1.2
// bigint => upto 40 digits 
// String => 'Aman' "Saini"
// boolean => true/ fasle
// undefined
// null
// symbol

// object => {name: "Aman" }
// array

// browser console

console.log("Hello Friends");// command to print anything on console

// Number Data type

let x = 12;
// block scope of let and const
// {

// let y = 12.5;
// const z = x + y;
// console.log(z, x);

// x= 10;
// console.log(x);
// }

let y = 12.5;
const z = x + y;
console.log(z, x);
console.log(y.toFixed());

x= 10;
console.log(x);

x = new Number("123"); //type casting
console.log(x);
// typeof()

console.log( typeof(x));


// String data type

let fname = "Aman"
let lname = 'Saini';
// template string
let temp = `
i 
am ${fname}

`;
console.log(temp);

let str = String(123);//type cast
let str2 =  new String("Jhon");

console.log(fname.toUpperCase() + " "+ lname );
// template 
console.log(`${fname.toUpperCase()} ${lname}`);

console.log(str2);
console.log( typeof(str2));

// boolean data type 
let boolVar = true;

console.log(boolVar);
console.log( typeof(boolVar));

// null and undefined


let q;
console.log(q);
x = null;

// array
let arr = [];// creating an array
// insert values inn array
arr[0] = "Aman";
arr[1] = "Divya";
arr[2] = "Dharam";
arr[3] = 12;
// insert value using push function
arr.push("jack");
console.log(arr);
// update in array 
arr[3] = "jim";
console.log(arr);
// delete in array
console.log(arr.pop());
console.log(arr);