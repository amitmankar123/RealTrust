import "dotenv/config";
import express from "express";
import mongo_connect from "./utils/connectDB.js";
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: ['http://localhost:5173'], // Your frontend URL
  credentials: true
}));

import projectRoutes from "./routers/projectRoutes.js";
import clientRoutes from "./routers/clientRoutes.js";
import contactRoutes from "./routers/contactRoutes.js";
import newsletterRoutes from "./routers/newsletterRoutes.js";

app.use("/api/contacts", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);


mongo_connect()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("start listening ")
    })
})
