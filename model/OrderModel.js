import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    title: { type: String, required: true },
});

const Schema = new mongoose.Schema({
    userid: { type: String, required: true },
    address: { type: String, required: true },
    cart: { type: [cartItemSchema], required: true },
    totalprice: { type: String, required: true },
    shipping: { type: Number, required: true },
    total: { type: String, required: true },
    payment: { type: String, required: true },
    orderdate:{type:String, required: true}
})


export const OrderModel = mongoose.model("Order",Schema);