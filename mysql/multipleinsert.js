var mysqldb = require('mysql')

 var connection = mysqldb.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'dbfromnode1'
 })

 connection.connect(function(err){
     if(err){
         throw err
     }
     else{
         console.log("Connected to mySql Server");
         var sql =
          "insert into friends (id ,name ,location) values ?"

          var records = [
              [4,'nitara','bombay'],
              [5,'innaya','jaipur'],
              [6,'akshita','pune']
          ]
         connection.query(sql,[records],function(err,suc){
             if(err){
                 throw err
             }
             else{
                 console.log("3 more row inserted")
                 
             }
         })
     }
     
 })