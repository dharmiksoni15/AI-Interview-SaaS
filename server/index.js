import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
dotenv.config();

const app=express();

app.get("/",(req,res)=>{
   return res.send("<h1>Server Started</h1>")
})

const PORT=process.env.PORT || 6000

app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`);
    connectDB();
})