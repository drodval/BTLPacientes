var mysql = require('mysql'); 

function REST_ROUTER(router,connection) {
    var self = this;

    self.handleRoutes(router,connection);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    
    router.get("/",function(req,res){
        console.log("REST.js -> router.get /" );
//       res.send("index");
    });
    router.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["usuarios"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    router.post()
}

module.exports = REST_ROUTER;