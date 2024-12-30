import { UserModel } from "../model/UserModel.js"
import bcrypt from "bcrypt"
import { sendcookie } from "../utils/sendcookie.js";
import jwt from "jsonwebtoken"
export const signup= async(req,res)=>{
    try {
        const {Fname,Email,Phone,Password}= req.body;
        let user = await UserModel.findOne({email:Email});
        if(user){
            return(
                res.json({
                    success: false,
                    message: "user already exists"
                })
            )
        }
        else{
            const haspassword = await bcrypt.hash(Password,10);
             user= await UserModel.create({
                name:Fname,
                email:Email,
                phone:Phone,
                password:haspassword
            })
            return(
                res.json({
                    success: true,
                    message: "User Created successfully"
                })
            )
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
                return(
                    res.json({
                        success: false,
                        message:"wrong password"
                    })
                )
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
        
        const {userid} = req.body;

        const userdata =  await UserModel.findById(userid);
      
         return   res.json({
                success: true,
                user:userdata
            })
    } catch (error) {
        res.json({
            success: false,
            errror:error
        })
    }
}