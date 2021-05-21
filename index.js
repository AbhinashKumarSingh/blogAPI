const express=require("express");
const path=require("path");
const mysql=require("mysql");
const bodyparse =require("body-parser");
const cors=require("cors");
 const app=express();
const port= process.env.PORT|| 3006;

var db=require('./blog&Comment/db.js');
 //var db=requiredb');
  app.use(bodyparse.json());
app.use(cors());
app.use(bodyparse.urlencoded({
    extended:true
}));

 app.listen(port,()=>{
     console.log(`server is running ${port}`);
 });

 //app.get("/",(req,res)=>{
//res.send("hello world");
 //});

 app.use("/",require("./blog&Comment/blog.js"));