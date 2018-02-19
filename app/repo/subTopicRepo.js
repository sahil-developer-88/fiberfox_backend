var baseRepo=require('./baseRepo');

var subTopicRepo={

  get:function(res){
   var query = "select * from SubTopics";
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
 getBySubcategoryActivity:function(req,res){
  var activityId=req.params.activityId;
  var subcategoryId=req.params.subcategoryId;
   var query = "select * from SubTopics where isdeleted=0 and subcategoryId="+subcategoryId+" and activityId="+activityId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database mN:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getBySubcategoryTopicActivity:function(req,res){
  var topicId=req.params.topicId;
  var activityId=req.params.activityId;
  var subcategoryId=req.params.subcategoryId;
   var query = "select * from SubTopics where isdeleted=0 and subcategoryId="+subcategoryId+" and activityId="+activityId+" and topicId="+topicId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 21:- " + err);
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
  var topicId=req.params.topicId;
  var query = "INSERT INTO SubTopics(Name,Type,TopicId,IsParamRequired) values('"+name+"','"+type+"',"+isParamRequired+","+topicId+")";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 22:- " + err);
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
   var query = "select * from SubTopics where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database NN:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0][0]));
                                   }
                                 });
 },

};

module.exports=subTopicRepo;