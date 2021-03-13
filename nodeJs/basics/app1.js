//create an object of http module & call createServer 
var http=require('http')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("welcome to nodeJS!!!")

    res.end()//end the response sequence
}).listen(8080)//mention the port number


//node js has two specialities : 
//Non Blocking I/O : multiple workers in a single thread. NonBLocking I/O concept comes from libuv library which is used by nodejs to handle multiple clients at a time.
//It is a library built in C. C uses kernal and there are multiple threads running behind the scene.
//Asynchronous : when ever a nodejs worker will fetch data from files/server or db callback function will execute and it will return data to client
//Nodejs is not used for CPU intensive work because it doesn't support multithreading
//It is mainly used for I/O intensive work

