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
          "insert into friends (id ,name ,location) values (2,'anaya','bangalore')"
         connection.query(sql,function(err,suc){
             if(err){
                 throw err
             }
             else{
                 console.log("1 row inserted")
                 
             }
         })
     }
     
 })