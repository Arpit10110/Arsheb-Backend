import { OrderModel } from "../model/OrderModel.js";
import { UserModel } from "../model/UserModel.js";

export const createorder = async (req, res) => {
    try {
        const { userid, cart, total, totalprice, shipping, address, payment,orderdate } = req.body;
        const user = await UserModel.findById(userid);
        console.log(user);
        const newOrder = new OrderModel({ user:{
            name: user.name,
            email:user.email,
            phone:user.phone
        }, cart, total, totalprice, shipping, address, payment,orderdate,status:"pending"
        });
        await newOrder.save();
        res.json({ success: true, message: "Order created successfully", });
    } catch (error) {
        console.error("Error creating order:", error);
        res.json({ success: false, message: error });
    }
} 


export const getorder = async(req,res)=>{
    try {
        const { userid} = req.body;

        const orderdata = await OrderModel.find({ userid: userid}); 
        return res.json({
            success: true,
            data:orderdata
        })
        
    } catch (error) {
        return res.json({
            success:false,
            error:error
        })
    }
}