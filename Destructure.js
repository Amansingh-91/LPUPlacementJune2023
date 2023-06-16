// destructuring and spread operator
// spread operator
const arr = ["Aman","Rohan","Rahul"];
const arr2 = ["jack ","jhon","jimmy"]
const combinedArr = [];
for (let index = 0; index < arr.length; index++) {
    combinedArr.push(arr[index]);
    
}
for (let index = 0; index < arr2.length; index++) {
    combinedArr.push(arr2[index]);
    
}
console.log(combinedArr);

const comb = [...arr,...arr2];
console.log("spreaded array" ,comb);

// destructure
const destructure = (name,age,gender)=>{
    console.log(name,age,gender);
}

const obj = {
    
    age:27,
    gender:"M",
    name:"Aman",
    Dob:"09/11/1995",
}
// const n = obj.name;
// const a = obj.age;
const {name,age,gender} = obj;
destructure(name,age,gender);

const [a,b] = arr;
console.log(a,b);

