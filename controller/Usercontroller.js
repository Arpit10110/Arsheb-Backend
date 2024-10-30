import { UserModel } from "../model/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendcookie } from "../utils/sendcookie.js";
export const signup= async(req,res)=>{
    try {
        const {Fname,Email,Phone,Password,address}= req.body;
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
                address:address,
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