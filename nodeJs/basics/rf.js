var fs=require('fs')

fs.readFile('./mymod.js','utf8',function(err,data){
    console.log(data)
}) 

fs.writeFile("file_written2.js",'console.log("welcome to file_written. Created by rf.js")',function(err){
    console.log("File is created. Check the directory")
})

fs.appendFile("file_written1.js",'console.log("welcome back to file_written. appended by rf.js")',function(err){
    console.log("data is appended. Check the directory")
})

fs.unlink("file_written.js",function(err){
    console.log(err.errno)
})