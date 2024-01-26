
const express=require("express");
//https://github.com/shubham333v/starter-express-api/blob/main/app.js
const app=express();
const path=require("path");


////////////////////////
var motParam={"tem":0,"cur":0,"vol":0,"spd":0};
////////////////////////
app.use(express.json());
app.use(express.static(__dirname+'/apps/Task/deepthought/'));
app.use(express.static(__dirname+'/apps/Task/deepthought_1/'));
app.use("/images",express.static(path.join(__dirname+"/apps/motmon/images")));
app.use(express.static(__dirname+"/apps/taksh/"));
////////////////////////
app.get("/",(rq,rs)=>{rs.send("Welcome"); });
app.get("/Front",(rq,rs)=>{rs.sendFile(__dirname+"/apps/Task/deepthought/index.html"); });
app.get("/country",(rq,rs)=>{rs.sendFile(__dirname+"/apps/Task/deepthought_1/index.html"); });
app.get("/motmon",(rq,rs)=>{rs.sendFile(__dirname+"/apps/motmon/index.html"); });
app.get("/motParam",(rq,rs)=>{rs.send(JSON.stringify(motParam)); });
app.get("/motmon/test",(rq,rs)=>{rs.sendFile(__dirname+"/apps/motmon/test.html"); });
app.get("/taksh",(rq,rs)=>{rs.sendFile(__dirname+"/apps/taksh/"); });

app.get("/api/task/deepthought",(rq,rs)=>{rs.sendFile(__dirname+"/json/deepthought/deepthought.json"); });
app.get("/js/tasks/deepthought/component.js",(rq,rs)=>{rs.sendFile(path.join(__dirname,"/apps/Task/deepthought/ind.js")); });
app.get("/js/tasks/deepthought_1/component.js",(rq,rs)=>{rs.sendFile(path.join(__dirname,"/apps/Task/deepthought_1/ind.js")); });



//////////////////////////
//////////////////////////
//////////////////////////
app.post("/motParam",(rq,rs)=>{var bd=rq.body;
if(bd.hasOwnProperty("tem"))motParam.tem=bd.tem;
if(bd.hasOwnProperty("cur"))motParam.cur=bd.cur;
if(bd.hasOwnProperty("vol"))motParam.vol=bd.vol;
if(bd.hasOwnProperty("spd"))motParam.spd=bd.spd;
rs.end(JSON.stringify(motParam)); });

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
