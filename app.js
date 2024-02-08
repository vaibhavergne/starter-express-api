
const express=require("express");
//https://github.com/shubham333v/starter-express-api/blob/main/app.js
const app=express();
const path=require("path");


////////////////////////
var motParam={"tem":0,"cur":0,"vol":0,"spd":0};
var PARAMATCOP={"angle":0,"torque":0 };
////////////////////////
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });
//app.use(express.static(__dirname+'/apps/Task/deepthought/'));
//app.use(express.static(__dirname+'/apps/Task/deepthought_1/'));
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

app.get("/atcop",(req,res)=>{res.sendFile(__dirname+"/apps/atcop/index.html"); });
app.get("/atcop/param",(req,res)=>{res.end(JSON.stringify(PARAMATCOP)); });
app.post("/atcop/param",(req,res)=>{let d=req.body;PARAMATCOP.angle=d.angle;PARAMATCOP.torque=d.torque;res.end(JSON.stringify(d)); });

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
