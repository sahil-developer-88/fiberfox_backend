var baseRepo=require('./baseRepo');

var topicRepo={

  get:function(res){
   var query = "select * from Topics";
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
  var name=req.params.name;
  var description=req.params.description;
  var subcategoryId=req.params.subcategoryId;
  var query = "INSERT INTO Topics(Name,Description,subcategoryId) values('"+name+"','"+description+"',"+subcategoryId+")";
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
  var id=req.params.id;
   var query = "select * from Topics where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0][0]));
                                   }
                                 });
 },

};

module.exports=topicRepo;