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
        console.log("Connected to mySql Server")
        var sql = "Select name,id ,location from friends"
        connection.query(sql,function(err,result,fields){
            if(err)
            {
                throw err
            }
            else{
                //returns data in form of json object ,for nrml result clg(result)
                console.log(JSON.stringify(result));
                
            }
        })
    }
 })