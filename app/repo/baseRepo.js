var sql = require('mssql'); 
var sqlCon = sql.globalCon;
var conString=sql.conString;
var connection=sql.connection;
var baseRepo={
	executeQuery:function(query,callBack){
		// sql.connect(conString, function (err) {
		// 	if (err) {   
		// 		console.log("executeQuery Error while connecting database :- " + err);
  //                    //res.send(err);
  //                    return null;
  //                }
  //                else {
                         // create Request object
                         var request = new sql.Request(connection).query(query,callBack);
                         if(request)
                            request.multiple=true;
                 //     }
                 // });           
	}




// 	executeQuery1:function(query) {


// 		sqlCon.on('connect', function(err) {
// 			console.log('reached!');
// // If no error, then good to go...
// if (err) {
// 	console.log(err);
// } else {
// 	console.log('connected!');
// 	var request = new Request(query);
// 	var d=sqlCon.execSql(request);

// 	console.log(d);
// 	//return request;
// }
//     //executeStatement();
// });


// 		// sqlCon.connect().then(function(){
// 		// 	request = new sql.Request(sqlCon).query(query);
// 		// 	return request;
// 		// },
// 		// function(err){
// 		// 	console.log(['err',err]);
// 		// });
// 	}


}
module.exports=baseRepo;