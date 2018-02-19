var baseRepo=require('./baseRepo');

var resultSubMenuRepo={

  get:function(res){
   var query = "select * from resultSubMenu";
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
 getByMenu:function(req,res){
  var resultMenuId=req.params.ResultMenuId;
   var query = "select * from resultSubMenu where resultMenuId="+resultMenuId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 3:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.body.name;
  var categoryId=req.body.categoryId;
  var query = "INSERT INTO resultSubMenu(Name,categoryId) values('"+name+"',"+categoryId+")";
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
   var query = "select * from resultSubMenu where id="+id;
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

module.exports=resultSubMenuRepo;