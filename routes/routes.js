import express from "express";
const router= express.Router();
import {signup,login,profile} from "../controller/Usercontroller.js"
import {addaddress,savedaddress} from "../controller/AddressController.js"
import {createorder,getorder} from "../controller/OrderController.js"
import {jewellery,mens,hairacces,bags,footwear,womens} from "../controller/product.js"
//testing route
router.get("/",(req,res)=>{
    return(
        res.send(`Welcome to Arsheb backend running on ${process.env.PORT} :)`)
    )
})

// user routes
router.post("/signup",signup);
router.post("/login",login);
router.post("/profile",profile);
// add new address
router.post("/savedaddress",savedaddress);
router.post("/addaddress",addaddress);
//order routes
router.post("/createorder",createorder);
router.post("/getorder",getorder);
//products routes
router.get("/product/jewellery",jewellery)
router.get("/product/mens",mens)
router.get("/product/womens",womens)
router.get("/product/hairacces",hairacces)
router.get("/product/footwear",footwear)
router.get("/product/bags",bags)


export default router;