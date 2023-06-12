let arr = ["Aman","Divya","Dharam","jack","July","Jim","Jhon"];
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// 
const printAllNames = (name,index)=>{
    console.log(index,name);
}

arr.forEach(printAllNames);


// printAllNames();

const username= arr.map(name=>name+"123@xyz");
console.log(username);

const namesWithJ = arr.filter(name=>name.toLowerCase().startsWith("j"));
console.log(namesWithJ);

