import { OrderModel } from "../model/OrderModel.js";

export const createorder = async (req, res) => {
    try {
        const { userid, cart, total, totalprice, shipping, address, payment } = req.body;
        const newOrder = new OrderModel({ userid, cart, total, totalprice, shipping, address, payment
        });
        await newOrder.save();
        res.json({ success: true, message: "Order created successfully", });
    } catch (error) {
        console.error("Error creating order:", error);
        res.json({ success: false, message: error });
    }
} 