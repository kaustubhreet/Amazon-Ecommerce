import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";
import multer from 'multer';
import fs from 'fs';

dotenv.config();
//const connection_url = "mongodb+srv://kaustubh:kaustubh@cluster0.aooysbx.mongodb.net/foodstore?retryWrites=true&w=majority";
const DBconnection_URL= process.env.MONGO_COMPASS|| process.env.MONGO;

const connect=async()=>{
  try{
    await mongoose.connect(DBconnection_URL);
    console.log("connected to mongo");
    
  } catch (error) {
    throw error;
  }
}
/*mongoose.connect(,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
*/


const app=express();
app.use(express.json());
app.use(cors());
app.set("view engine","ejs");

const port =process.env.PORT || 5000;

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get('/api/config/paypal', (req,res)=>{
   res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

/*set storage
const upload =multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb)
    {
    cb(null,"uploads")
    },
    filename:function(req,file,cb){
      cb(null,file.fieldname+"-"+Date.now()+".jpg")
    }
  })
}).single("user_file");

app.post("/api/upload",upload,(req,res)=>{
  res.send("file uploaded")
  console.log(res)
})*/

mongoose.connection.on("disconnected",()=>{
  console.log("mongodb disconnected")
})

app.get('/',(req,res)=>res.status(200).send('this is our first home page of backened. '))


app.listen(5000,()=>{
    connect()
    console.log(`connected to backened ${port}`)
})
