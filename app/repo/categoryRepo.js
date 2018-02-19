var baseRepo=require('./baseRepo');

var categoryRepo={

	get:function(req,res){
    //console.log(['decoded from repo',req.decoded]);
   var query = "select * from Categories where isdeleted=0";
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.body.name;
  var query = "INSERT INTO Categories(Name) values('"+name+"')";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
	     //res.send(err);
     }
     else {
       res.json({ message: 'Record created! ' });
                                  	//res.json(JSON.stringify(resp));
                                  }
                                });
},
find:function(req,res){
  var id=req.body.id;
   var query = "select * from Categories where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp));
                                   }
                                 });
 },

};

module.exports=categoryRepo;