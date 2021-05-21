
# blogAPI

This is an API of a blog in which a blog can be created , update, read,and delete.
In this comment can be posted on a blog and we can see all comments of a blog.
1. npm install
2. nodemon start
3. create database name blogdatabase.
4. create table blog(id int NOT NULL AUTO_ICREMENT, blog varchar(255),PRIMARY KEY(id))
5. create table comments(id int NOT NULL AUTO_ICREMENT,idblog int NOT NULL ,comments varchar(255),PRIMARY KEY(id))
6.  (/blog)- is to get all blog data from the table blog.
7. (/blog/id)- is to get blog by a particular id.
8. (/addblog)- is to add a new blog in the table by entering a blog.
9. (/updateblog)- is to update a blog by entering its id and the updated blog.
10. (/deleteblog)- is to delete blog by entering id of the blog to delete.
11. (/comment)- is to get get all comments from the table comments.
12. (/comments/id)- is to get all comments of a blog by entering blog id.
13. (/addcomment)- is to add a comment on a blog.
14. (/deletecomment)- is to delete a comment by entering comment id.