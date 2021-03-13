const mongoose=require('mongoose');

const URI="mongodb+srv://Sawon:Sawrion@633@node-conn.snu2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectMongoDb= async ()=>{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true});
    console.log("MongoDB Atlas connected!!!");
};
module.exports=connectMongoDb;
//npm install -g nodemon --save-dev (global package hence -g)