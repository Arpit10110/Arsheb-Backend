import express from "express";
const router= express.Router();
import {signup} from "../controller/Usercontroller.js"
//testing route
router.get("/",(req,res)=>{
    return(
        res.send(`Welcome to Arsheb backend running on ${process.env.PORT} :)`)
    )
})

// user routes
router.post("/signup",signup);


export default router;