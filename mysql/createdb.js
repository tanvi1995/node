var mysqldb = require('mysql')

 var connection = mysqldb.createConnection({
     host:'localhost',
     user:'root',
     password:''
 })

 connection.connect(function(err){
     if(err){
         throw err
     }
     else{
         console.log("Connected to mySql Server");
         console.log("Creating database.....");

         connection.query("create database dbfromnode1",
                function(err,suc){
                    if(err){
                        throw err
                    }else{
                        console.log("Database created");
                
                    }
                })
         
     }
     
 })