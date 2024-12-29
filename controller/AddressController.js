import { UserModel } from "../model/UserModel.js"

export const savedaddress = async(req,res)=>{
    try {
        const {userid} = await req.body;
        const user = await UserModel.findById(userid);
        return  res.json({
            success: true,
            useraddress: user.address
        })
    } catch (error) {
        return  res.json({
            success: false,
            message:error
        })
    }
}
export const addaddress = async(req,res)=>{
    try {
        const {userid,address} = await req.body;
        const user = await UserModel.findById(userid);
        await user.address.push({
            value:address
        });
        await user.save();
        return  res.json({
            success: true,
            message:"Addresses added successfully"
        })
    } catch (error) {
        return  res.json({
            success: false,
            message:error
        })
    }
}