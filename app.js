
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

app.get("/atcop",(req,res)=>{res.sendFile(__dirname+"/apps/atcop/index.html"); });
app.get("/atcop/param",(req,res)=>{res.end(JSON.stringify(PARAMATCOP)); });
app.post("/atcop/param",(req,res)=>{let d=req.body;PARAMATCOP.angle=d.angle;PARAMATCOP.torque=d.torque;res.end(JSON.stringify(d)); });

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
