import { app } from "./app.js";
import {connectdb} from "./db/connectdb.js"
connectdb();
app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`);
})