

// Operators in Javascript

// Airthematic 
// precidence
// ** > ++,-- > *,/,% > +,-

// ** => exponential  eg 2**3 => 8 
// ++ => increment
// -- => decrement 
// * => multiplication
// / => Divide
// % => modulus 
// + => addition
// - => Substraction


// relational 

// > => greater than
// < => less then
// >= => greater than equal too
// <= => less than equal too
// == => loose equality
// === => strict equality
// != => loose not equal
// !== => strict not equal

// Loose comparision
let x = "12";//String type
let y = 12;// number type

console.log(x == y);

// Strict comparision
console.log(x === y);

// assignment 

// = => assign right side value to left side variable. eg. x = 12
// += =>  
// -=
// /=
// *=



// Logical 
// precedence
// && > ||
// &&  => compulsion
// ||  => option

// conditional Statements
// if, else if,and else  statement => works on conditions
// switch case => works on expression(mathematics)

let age = 9;
let ticket = "yes";

if(ticket === "yes" || age < 6 && age >0){
    console.log("you are allowed to watch");
}
else{
    console.log("but ticket first");
}


// 
let hot = "yes";

let cold = "yes";

let sunny = "no";

if(hot == "yes"){
    console.log("do not go out today. its too hot");
}

else if(cold == "yes"){
    console.log(" wear a coat before going out");

}

else if (sunny == "yes"){
    console.log("wear cap before you leave");
}
else{
    console.log("don't go out today");
}

// switch (10 + 12) {
//     case 22:
        
//         break;

//     default:
//         break;
// }

// loops in Js

// for loop
// for (let i =0; i < 5 ;i++) {
//     console.log(i);
// }

// while loop
// while (condition) {
    
// }

// do while loop
// do {
    
// } while (condition);

// Jump statement
// Break 
// continue


