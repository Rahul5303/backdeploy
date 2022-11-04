const express=require("express");

// app.use=express();
require("dotenv").config();

const app=express();

const PORT= process.env.PORT || 8500;


app.get("/",(req,res)=>{
res.send("Home Web Page");
})

app.listen(PORT,()=>{
console.log(`Listening to ${PORT}`)
})