import { UserModel } from "../model/UserModel.js"
import bcrypt from "bcrypt"
import { sendcookie } from "../utils/sendcookie.js";
import jwt from "jsonwebtoken"
export const signup= async(req,res)=>{
    try {
        const {Fname,Email,Phone,Password}= req.body;
        let user = await UserModel.findOne({email:Email});
        if(user){
            res.json({
                success: false,
                message: "user already exists"
            })
        }
        else{
            const haspassword = await bcrypt.hash(Password,10);
           user= await UserModel.create({
                name:Fname,
                email:Email,
                phone:Phone,
                password:haspassword
            })
            sendcookie(user,res,"user created successfully")
        }
    } catch (error) {
        return (
            res.json({
                success: false,
                message:error.message
            })
        )
        
    }
}

export const login = async(req,res)=>{
    try {
        const {Email,Password} = req.body;
        const user = await UserModel.findOne({email: Email});
        if(user == false){
            res.json({
                success: false,
                message:"User not found"
            })
        }else{
            const match = await bcrypt.compare(Password,user.password)
            if(match){
                sendcookie(user,res,`welcome back ${user.name}`)
            }
            else{
                res.json({
                    success: false,
                    message:"wrong password"
                });
            }
        }
    } catch (error) {
        res.json({
                success: false,
                errror:error
            })
    }
}



export const profile = async(req, res) => {
    try {
        const {token}= req.cookies;
        if(!token){
            return(
                res.json({
                    success: false,
                    message:"login please"
                })
            )
        }else{
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decoded.id)
            const userdata = await UserModel.findById(decoded.id)
            res.json({
                success: false,
                user:userdata
            })
        }
    } catch (error) {
        res.json({
            success: false,
            errror:error
        })
    }
}