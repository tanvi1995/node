var http = require('http')
var file = require('fs')

var server = http.createServer(function(re,rs){
    rs.writeHead(200,{'Content-Type':'text/html'})
    rs.write("Working with fs module")

    file.readFile('hello.txt',function(err,data){
        if(err){
            throw err
        }

        rs.write("<br></br>")
        rs.write(data)
        file.writeFile('hello2.txt',data,function(err){
            console.log(err);
            
        })
        rs.end()
    })
     
}).listen(8888)