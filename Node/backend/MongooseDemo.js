const express = require("express");
const mongoose = require("mongoose");
const User = require("./Model/userSchema");
// env Variables
const PORT = 3000;
const dbUrl = "mongodb://localhost:27017/LPU-placement";

// creating app 
const app = express();

mongoose.connect(dbUrl);
const getUsers = async(constraints = {})=>{
    const users = await User.find(constraints);
    console.log(users);

}

// getUsers({username:"rahul"});

const insertUser = async(newUser)=>{
    // const user = new User(newUser);
    // await user.save();
    const user =await User.create(newUser);
    console.log(user);
}

// try {
//     insertUser({
//         name:"rahul",
//         age:"14",
//         bestfriend:"64a4fee4cfb1d0439f093a34",
//         hobbies:["reading"],
//         address: {
//             state:"rajasthan",
//             city:"jaipur",
//         }
//     });
// } catch (error) {
//     console.log(error._message);
// }


const updateUser = async (constraints = {})=>{
    const user = await User.findOne(constraints);
    user.name = "rohit";
    user.save();
    console.log(user);
}

// updateUser({name:"rohit",hobbies:["reading"]});
// listening to port 
app.listen(PORT,()=>{
    console.log(`listening on port:${PORT}`);
})