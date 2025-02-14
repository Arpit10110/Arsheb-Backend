import mongoose from "mongoose";

const imageschema = new mongoose.Schema({
    imageurl:{
        type:"String"
    }
});


const Schema = new mongoose.Schema({
    producttitle:{
        type:"String",
        required: true
    },
    productprice:{
        type:"String",
        required: true
    },
    producttype:{
        type:"String",
        required: true
    },
    productdesc:{
        type:"String",
        required: true
    },
    productimage:{
        type:[imageschema],
        required: true
    },
})

export const ProductModel = mongoose.model("ProductModel",Schema);
