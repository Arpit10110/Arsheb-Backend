import jwt from "jsonwebtoken"

export const sendcookie = (user,res,messgae)=>{
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    return (
        res.cookie("token",token,{
            httpOnly: false,
            maxAge: 30 * 24 * 60 * 60 * 1000
        }).json({
            success: true,
            messgae:messgae
        })
    )

}