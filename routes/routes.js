import express from "express";
const router= express.Router();

//testing route
router.get("/",(req,res)=>{
    return(
        res.send(`Welcome to Arsheb backend running on ${process.env.PORT} :)`)
    )
})



export default router;