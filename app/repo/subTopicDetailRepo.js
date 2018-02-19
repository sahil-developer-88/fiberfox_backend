var baseRepo=require('./baseRepo');

var subTopicDetailRepo={

  get:function(res){
   var query = "select * from SubTopicDetails";
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
 getBySubTopic:function(req,res){
  var subTopicId=req.params.subTopicId;
   var query = "select * from SubTopicDetails where subTopicId="+subTopicId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database me:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.params.name;
  var type=req.params.type;
  var isParamRequired=req.params.isParamRequired;
  var TopicDetailId=req.params.TopicDetailId;
  var query = "INSERT INTO SubTopicDetails(Name,Type,TopicDetailId,IsParamRequired) values('"+name+"','"+type+"',"+isParamRequired+","+TopicDetailId+")";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 11:- " + err);
       //res.send(err);
     }
     else {
       res.json({ message: 'Record created! ' });
                                    //res.json(JSON.stringify(resp));
                                  }
                                });
},
find:function(req,res){
  var id=req.params.SubTopicDetailId;
   var query = "select * from SubTopicDetails where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database N:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0][0]));
                                   }
                                 });
 },

};

module.exports=subTopicDetailRepo;