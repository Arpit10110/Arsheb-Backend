import mongoose from "mongoose";
export const connectdb = ()=>{
    mongoose.connect(process.env.MongoDB_Url,{dbName:"Arsheb"}).then(()=>{
        console.log("DB connected successfully");
    }).catch((e)=>{
        console.loge(e);
    })
}