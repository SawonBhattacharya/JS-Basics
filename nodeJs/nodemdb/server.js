const express=require('express');
//import express
var mymod=require('./DB/mdbconnection.js');
const app=express();
//start express

app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));

port=process.env.port || 8080;
app.listen(port,()=>console.log("Running..."));