var httpVariable = require('http')
//creating own server to run the page in local at any host eg 8888 ->nodemon firsterver.js execute file in node js
var myServer = httpVariable.createServer(doIt).listen(8888)

function doIt(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("hello from node server !!! hiiii node")
    res.end()
}

