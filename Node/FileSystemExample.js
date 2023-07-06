// File System /fs

const fs = require("fs");

console.log(1);
fs.readFile("Demo.txt",{encoding:"utf8"},(err,data)=>{
    console.log(data);
    console.log(err);
    fs.writeFile("./DemoWrite.txt",data,()=>{
        console.log("success");
    });
});


console.log(2);

