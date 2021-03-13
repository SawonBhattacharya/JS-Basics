const express=require('express');
//import express
const app=express();
//start express
//express has routing concept in built

data1={
    id:1,
    u_name:"Sawon"
}
data2={
    id:2,
    u_name:"Virat"
}
data=[data1,data2]

app.get('/',function(req,res){
    res.send("Hello world")
})//url, function to execute the task


//seperate function whenever client asks for a data

//app.get('/player',function(req,res){
  //  res.send("Play bold.")
//})
//respose on dynamic urls using query
app.get('/player',function(req,res){
    const id=req.query.id

    if(id==data[0].id){
        res.send("Hey "+data[0].u_name)
    }
    if(id==data[1].id){
        res.send("Hey "+data[1].u_name)
    }
    else{
        res.send("User doesn't exist!!!")
    }
})

//respose on dynamic urls using params


app.get('/player/:id',function(req,res){
    const id=req.params.id
    if(id==data[0].id){
        res.send("Hey "+data[0].u_name)
    }
    if(id==data[1].id){
        res.send("Hey "+data[1].u_name)
    }
    else{
        res.send("User doesn't exist!!!")
    }
})



app.listen(8080,function(req,res){
    console.log("Running...")
});
