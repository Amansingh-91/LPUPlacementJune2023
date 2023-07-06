const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Student = require("./Model/studentSchema");
const cors =  require("cors");
const jwt = require("jsonwebtoken");


const app = express();


mongoose.connect("mongodb://localhost:27017/LPU-placement");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// auth middleware
const checkAuth = async (req,res,next)=>{
    const {token} = req.body;
    if(!token){
        return res.status(401).send("Access denied");
    }
    try {
        const verified = jwt.verify(token,"i am beautiful being");
        console.log(verified);
        if(verified  && req.url===`/${verified.student_type}`){
            next();
        }
        else{
            return res.status(401).send("Access denied");
        }
    } catch (error) {
        
    }
    
}

app.post("/register",async (req,res)=>{
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt);
    console.log(hashedPass);


        

    try {
        const s = {...req.body,password:hashedPass};
        console.log(s);
        const newStudent = new Student(s);
        await newStudent.save();
        // create token
        const token = jwt.sign({id:newStudent._id,student_type:newStudent.student_type},"i am beautiful being",{
            expiresIn:"2h",
        });
        newStudent.token = token;
        await newStudent.save();
        console.log(newStudent);
        res.send({success:true,newStudent});
    } catch (error) {
        console.log(error);
        res.send({success:false});
    }
    res.end();
})

app.post("/login",async(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    const student = await Student.findOne({email});
    if(student){
        // console.log(student);
        if(await bcrypt.compare(password,student.password)){
            // console.log(student);
            // create token
        const token = jwt.sign({id:student._id,student_type:student.student_type},"i am beautiful being",{
            expiresIn:"2h",
        });
        student.token = token;
        await student.save();
            res.send({success:true,student});

        }
        else{
            console.log("password incorrect");
            res.status(400).send({success:false});
        }
    }
    else{
        res.send({success:false,message:"user doesn't exist. please register"});
    }
    
    
});

app.post("/senior",checkAuth,(req,res)=>{
    res.send("hii");
})
app.post("/fresher",checkAuth,(req,res)=>{
    res.send("hii");
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})