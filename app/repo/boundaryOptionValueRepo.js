var baseRepo=require('./baseRepo');

var boundaryOptionValueRepo={

  get:function(res){
   var query = "select * from BoundaryOptionValues";
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
 getByTopicParam:function(req,res){
  var topicParamId=req.params.topicParamId;
   var query = "select * from BoundaryOptionValues where TopicParamId="+topicParamId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 145:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getBySubtopic:function(req,res){
  var subTopicId=req.params.subTopicId;
   //var query = "select BoundaryOptionValues.*,TopicParamsData.*  from BoundaryOptionValues \
   var query = "select BoundaryOptionValues.*  from BoundaryOptionValues \
inner join BoundaryData on BoundaryData.BoundaryOptionId=BoundaryOptionValues.BoundaryOptionId \
   where BoundaryData.SubTopicId="+subTopicId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 146:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getBySubMenu:function(req,res){
  var resultSubMenuId=req.params.resultSubMenuId;
   var query = "select * from BoundaryOptionValues where resultSubMenuId="+resultSubMenuId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 47:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getByMenu:function(req,res){
  var resultMenuId=req.params.resultMenuId;
   var query = "select * from BoundaryOptionValues where resultMenuId="+resultMenuId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 47:- " + err);
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
  var oppositeRequiredParamOptionValueId=req.body.oppositeRequiredParamOptionValueId;
  var query = "INSERT INTO BoundaryOptionValues(Name,SubTopicId,oppositeRequiredParamOptionValueId) values('"+name+"',"+subTopicId+","+oppositeRequiredParamOptionValueId+")";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 48:- " + err);
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
   var query = "select * from BoundaryOptionValues where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database Val:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp));
                                   }
                                 });
 },

};

module.exports=boundaryOptionValueRepo;