import express from "express";
const router= express.Router();
import {signup,login,profile} from "../controller/Usercontroller.js"
import {addaddress,savedaddress} from "../controller/AddressController.js"
import {createorder} from "../controller/OrderController.js"
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
// add new address
router.post("/savedaddress",savedaddress);
router.post("/addaddress",addaddress);
//order routes
router.post("/createorder",createorder);


export default router;