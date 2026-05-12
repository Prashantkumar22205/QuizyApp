const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"uername is required"],
        unique:[true,"username should be unique"]
    },
    email:{
            type:String,
            required:[true,"email is required"],
            unique:[true,"email should be unique"]
    },
    password:{
         type:String,
         required:[true,"password is required"],
         unique:[true,"password should be unique"]
    },
    role:{
        type:String,
        enum:['student','Teacher'],
        default:'user'
    }
})

const userModel = mongoose.model("user",userSchema);

module.exports=userModel
