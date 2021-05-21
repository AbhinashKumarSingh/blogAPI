const express=require("express");
const { createConnection } = require("mysql");
const router=express.Router();
var db=require('./db');
var data=require('./index');



router.get("/",(req,res)=>{
    return res.send({error:true,message:'hello'})
});

router.get("/blog",async(req,res)=>{
       const result= await data.getBlogData();
        return res.send({error:false,data: result,message: 'Complete data'});   
});

router.get("/comment",async(req,res)=>{
          const result1=await data.getCommentData();
          return res.send({error:false,data: result1,message: 'Complete data'});
});

router.get("/blog/id",async(req,res)=>{
    let id=req.body.id;
      const result=await data.getBlogDataById(id);
      return res.send({error:false,data: result,message: 'Complete data'});
});

router.get("/comments/id",async(req,res)=>{
    let id=req.body.id;
    //db1.query('SELECT comments.comments FROM blog,comments WHERE blog.id=comments.idblog',[id],(error,results,fields)=>{
          const result=await data.getCommentDataById(id);
          return res.send({error:false,data: result,message: 'Complete data'});
         
});

router.post("/addblog",async(req,res)=>{
    let blog=req.body.blog;
    const result=await data.addBlog(blog);
    return res.send({error:false,data: result,message: 'Complete data'});     
});

router.post("/addcomment",async(req,res)=>{
    let idblog=req.body.idblog;
    let comments=req.body.comments;
          const result=await data.addComment(idblog,comments);
          return res.send({error:false,data: result,message: 'Complete data'}); 
});

router.put("/updateblog",async(req,res)=>{
    let id=req.body.id;
 let blog=req.body.blog;
          const result=await data.updateBlog(blog,id);
          return res.send({error:false,data: result,message: 'Complete data'});    
});

router.delete("/deleteblog",async(req,res)=>{
    let id=req .body.id;
        if(!id){
            return res.status(400).send({error: true, message: "please provide id to delete"});
        }
          const result=await data.deleteBlog(id);
          return res.send({error:false,data: result,message: 'Complete data'});    
});

router.delete("/deletecomment",async(req,res)=>{
    let id=req .body.id;
        if(!id){
            return res.status(400).send({error: true, message: "please provide id to delete"});
        }
          const result=await data.deleteComment(id);
          return res.send({error:false,data: result,message: 'Complete data'});
         
});
module.exports=router;