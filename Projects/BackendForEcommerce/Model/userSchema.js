const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
    state:String,
    city:String
})
const userSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:2
    },
    age:{
        type:Number,
        min:1,
        max:100,
    },
    createdAt:{
        type:Date,
        immutable:true,
        default: ()=> Date.now()
    },
    updatedAt:{
        type:Date,
        default: ()=> Date.now()
    },
    bestfriend: {
        type:mongoose.SchemaTypes.ObjectId,
        ref:'users',
    },
    hobbies: [String],
    address: {
        type:addressSchema,
    }
});
userSchema.pre("save",function(next){
    this.updatedAt = Date.now();
    // console.log("pre");
    next();
})

const User = mongoose.model('users',userSchema);

module.exports = User;