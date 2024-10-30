import express from "express";
import {config} from "dotenv"
import cors from "cors"
import router from "./routes/routes.js"
 const app = express();
config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router)

export default app; 