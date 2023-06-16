// error handeling

// reference error
// console.log(nam);

// syntax error


// console.log(12.toUpperCase());

// type Error 

// console.log(null.f());

// Try Ctach To work With the Errors

try{
    // console.log(nam);
    // sensitive file
    throw("I am new Error")
}
catch(err){
    console.log(err);
}finally{
    console.log("in finally");
}

console.log("hii");


const amount  = 5000;
const withdraw = 10000;
if(amount >= withdraw){
    console.log("please take your money and card");
    console.log("new balance=", amount - withdraw );
}else{
    throw("insufficient balance");
}