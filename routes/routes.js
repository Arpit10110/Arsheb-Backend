import express from "express";
const router= express.Router();
import {signup,login,profile} from "../controller/Usercontroller.js"
//testing route
router.get("/",(req,res)=>{
    return(
        res.send(`Welcome to Arsheb backend running on ${process.env.PORT} :)`)
    )
})

// user routes
router.post("/signup",signup);
router.post("/login",login);
router.get("/profile",profile);
// this demo 

export default router;