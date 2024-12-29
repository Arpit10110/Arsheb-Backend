import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    value:{
        type: 'string',
    }
})


const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:[AddressSchema]
    }
})


export const UserModel = mongoose.model("User",Schema);