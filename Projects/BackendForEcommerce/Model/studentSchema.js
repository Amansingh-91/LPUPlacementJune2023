const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String
    },
    password:{
        type:String,
        minlength:6,
        
    },
    token:{
        type:String,
    },
    student_type:{
        type: String,
        enum : ["fresher","senior"],
        default:"senior",
        required:true,
    }
});

const Student = mongoose.model('student',studentSchema);

module.exports = Student;