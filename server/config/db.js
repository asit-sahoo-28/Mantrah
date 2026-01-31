import mongoose from "mongoose";

export const connectDB=async()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"ERP-Syatem"
    }).then(()=>{
        console.log("Connect to database")
    }).catch(err=>{
        console.log("Database cpnnection failed",err)
    })
}