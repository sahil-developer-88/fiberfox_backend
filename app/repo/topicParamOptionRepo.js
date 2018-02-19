var baseRepo=require('./baseRepo');

var topicParamOptionRepo={

  get:function(res){
   var query = "select * from TopicParamOptions where IsDeleted=0";
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database OP:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getByTopicParam:function(req,res){
  var topicParamId=req.params.topicParamId;
   var query = "select * from TopicParamOptions where IsDeleted=0 and TopicParamId="+topicParamId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 56:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getBySubTopic:function(req,res){
  var subTopicId=req.params.subTopicId;
   var query = "select TopicParamOptions.* from TopicParamOptions inner join TopicParams \
              on TopicParamOptions.TopicParamId=TopicParams.Id \
              where TopicParamOptions.IsDeleted=0 and TopicParams.SubTopicId="+subTopicId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 56:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.body.name;
  var subTopicId=req.body.subtopicId;
  var oppositeRequiredParamOptionId=req.body.oppositeRequiredParamOptionId;
  var query = "INSERT INTO TopicParamOptions(Name,SubTopicId,oppositeRequiredParamOptionId) values('"+name+"',"+subTopicId+","+oppositeRequiredParamOptionId+")";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 55:- " + err);
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
   var query = "select * from TopicParamOptions where IsDeleted=0 and id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database Go:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0][0]));
                                   }
                                 });
 },

};

module.exports=topicParamOptionRepo;