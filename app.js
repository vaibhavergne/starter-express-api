
const express_pack=require("express");
//https://github.com/shubham333v/starter-express-api/blob/main/app.js
const express=express_pack();
const path=require("path");




////////////////////////
var motParam={"tem":1,"cur":2,"vol":3,"spd":4};
////////////////////////
express.use(express_pack.static(__dirname+'/apps/Task/deepthought/'));
express.use(express_pack.static(__dirname+'/apps/Task/deepthought_1/'));
////////////////////////
express.get("/",(rq,rs)=>{rs.send("Welcome"); });
express.get("/Front",(rq,rs)=>{rs.sendFile(__dirname+"/apps/Task/deepthought/index.html"); });
express.get("/country",(rq,rs)=>{rs.sendFile(__dirname+"/apps/Task/deepthought_1/index.html"); });
express.get("/motmon",(rq,rs)=>{rs.sendFile(__dirname+"/apps/motmon/index.html"); });
express.get("/motParam",(rq,rs)=>{rs.send(JSON.stringify(motParam)); });
express.get("/motmon/test",(rq,rs)=>{rs.sendFile(__dirname+"/apps/motmon/test.html"); });

express.get("/api/task/deepthought",(rq,rs)=>{rs.sendFile(__dirname+"/json/deepthought/deepthought.json"); });
express.get("/js/tasks/deepthought/component.js",(rq,rs)=>{rs.sendFile(path.join(__dirname,"/apps/Task/deepthought/ind.js")); });
express.get("/js/tasks/deepthought_1/component.js",(rq,rs)=>{rs.sendFile(path.join(__dirname,"/apps/Task/deepthought_1/ind.js")); });



//////////////////////////
//////////////////////////
//////////////////////////
express.post("/motParam",(rq,rs)=>{const bd=rq.body;

                                   rs.end(bd); });

express.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
