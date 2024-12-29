import express from "express";
import {config} from "dotenv"
import cors from "cors"
import router from "./routes/routes.js"
import cookieParser from "cookie-parser";
const app = express();
config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(router)

export default app; 