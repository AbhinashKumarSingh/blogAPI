const express=require("express");
const { createConnection } = require("mysql");
const router=express.Router();
var db=require('./db');
var db2=db.database();

 async function getBlogData(req,res){
    const   result=await db.db1('SELECT * FROM blog');
    return result;
};

  async function getCommentData(req,res){
          const result=await  db.db1('SELECT * FROM comments ');
           return result;
    };

    async  function getBlogDataById(id){
          const result=await db.db1('SELECT blog FROM blog WHERE id=?',[id]);
           return result;
    };

    async  function getCommentDataById(id){
           const result=await db.db1('SELECT comments FROM comments WHERE idblog=?',[id]);
           return result;
    };
    async  function addBlog(blog){
             const result=await db.db1('INSERT INTO blog(blog) value(?)',[blog]);
             return result;
    };
    async  function addComment(idblog,comments){
          const result=await db.db1('INSERT INTO comments(idblog,comments) value(?,?)',[idblog,comments]);
          return result;
     };
       async  function updateBlog(blog,id){
              const result=await db.db1('UPDATE  blog SET blog=? WHERE id=?',[blog,id]);
              return result;
     };
       async  function deleteBlog(id){
             const result=await db.db1('DELETE FROM blog WHERE id=?',[id]);
             return result;
    };

    async  function deleteComment(id){
       const result=await db.db1('DELETE FROM comments WHERE id=?',[id]);
       return result;
    };
       
       

module.exports={getBlogData
    ,getCommentData,
   getBlogDataById,
    getCommentDataById,
    addBlog,
    addComment,
    updateBlog,
    deleteBlog,
       deleteComment};