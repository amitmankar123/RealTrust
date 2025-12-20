import "dotenv/config"
import mongoose from "mongoose";

const URI = process.env.MONGO_URI;
 
const mongo_connect = async()=>{
    try{
       await mongoose.connect(URI);
        console.log("connection done");
    }catch(err){
        console.log("error in connection", err);
        process.exit(1);
    }
}

export default mongo_connect;