import express from "express";
import {config} from "dotenv"
import router from "./routes/routes.js"
config();
export const app = express();
app.use(router)
