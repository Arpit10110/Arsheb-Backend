import { ProductModel } from "../model/ProductModel.js"

export const jewellery = async(req,res)=>{
    try {

        const productdata = await ProductModel.find({producttype:"Jewellery"});

        return res.json({
            success:true,
            data:productdata
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message:error
        })
    }
}


export const mens = async(req,res)=>{
    try {

        const productdata = await ProductModel.find({producttype:"mens"});

        return res.json({
            success:true,
            data:productdata
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message:error
        })
    }
}


export const womens = async(req,res)=>{
    try {

        const productdata = await ProductModel.find({producttype:"womens"});

        return res.json({
            success:true,
            data:productdata
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message:error
        })
    }
}
export const bags = async(req,res)=>{
    try {

        const productdata = await ProductModel.find({producttype:"bags"});

        return res.json({
            success:true,
            data:productdata
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message:error
        })
    }
}

export const footwear = async(req,res)=>{
    try {

        const productdata = await ProductModel.find({producttype:"footwear"});

        return res.json({
            success:true,
            data:productdata
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message:error
        })
    }
}

export const hairacces = async(req,res)=>{
    try {

        const productdata = await ProductModel.find({producttype:"hairacc"});

        return res.json({
            success:true,
            data:productdata
        })
        
    } catch (error) {
        return res.json({
            success: false,
            message:error
        })
    }
}