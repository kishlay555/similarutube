// second aaproach
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB();






















/*
first approach
import mongoose from 'mongoose';
import express from 'express';
import { DB_Name } from './constants';

const app = express();


(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("Error", (error) => {
            console.log("error", error);
            throw error;
            
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })

    }catch(error){
        console.error("error:", error);
        throw error
    }
})()
*/    