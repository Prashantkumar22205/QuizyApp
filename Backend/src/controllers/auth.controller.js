const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

const registerController = async(req,res)=>{
    const {username,email,password} = req.body

    const isemail = await userModel.findOne({
        email:email
    })

    if(!email){
        return res.status(422).json({
            message:"Email is not found"
        })
    }

    const user = await userModel.create({
        username,email,password
    })

    const token = jwt.sign({userId:user._id},process.env.Secret_Key,{expiresIn:"3d"})
    res.cookie("token",token)

   res.status(200).json({
      message:"Registeration is compeleted"
   })

    
}

module.exports={registerController}
