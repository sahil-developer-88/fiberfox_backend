var baseRepo=require('./baseRepo');
var dateFormat = require('dateformat');

var topicParamDataRepo={

  get:function(res){
    var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
   var query = "select * from TopicParamsData where IsDeleted=0 and token='"+token+"'";
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
 getBySubtopic:function(req,res){
  var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
  var subTopicId=req.params.subTopicId;
   //var query = "select * from TopicParamsData where subTopicId="+subTopicId+" and token='"+token+"' order by id desc";
   var query="SELECT TopicParamsData.* \
FROM TopicParamsData TopicParamsData   \
INNER JOIN   \
  (SELECT b.TopicParamOptionId,  \
    Max(id) as id  \
  FROM TopicParamsData b   \
  where b.IsDeleted=0 and b.subTopicId="+subTopicId+" and b.token='"+token+"'    \
  GROUP BY b.TopicParamOptionId  \
) AS b  \
  ON TopicParamsData.TopicParamOptionId= b.TopicParamOptionId  \
  AND TopicParamsData.Id = b.id  \
  order by  TopicParamsData.Id desc;"
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 66:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 
 post:function(req,res){

  var topicParamId=req.body.TopicParamId;
  var topicParamOptionId=req.body.TopicParamOptionId;
  var priority=req.body.Priority;
  var userId=req.decoded?req.decoded.id:undefined;
  var subTopicId=req.body.SubTopicId;
  var value=req.body.Value;
  var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];

  var nowDateString=dateFormat(new Date(), "mm/dd/yyyy h:MM:ss");
  var dataSessionEndToken=token+'_'+nowDateString;
  
  //dont uncomment otherwise it will end current as well
  //var paramEndDataQuery="UPDATE TopicParamsData SET Token='"+dataSessionEndToken+"' where token='"+token+"';";
  
  var query = "INSERT INTO TopicParamsData(TopicParamId,TopicParamOptionId,Priority,SubTopicId,Value,token) values("+topicParamId+","+topicParamOptionId+",'"+priority+"','"+subTopicId+"','"+value+"','"+token+"')";
  if(userId)
  query = "INSERT INTO TopicParamsData(TopicParamId,TopicParamOptionId,Priority,SubTopicId,Value,UserId,token) values("+topicParamId+","+topicParamOptionId+",'"+priority+"','"+subTopicId+"','"+value+"',"+userId+",'"+token+"')";  

  //query=paramEndDataQuery+query;
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database g:- " + err);
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
   var query = "select * from TopicParamsData where IsDeleted=0 and id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database NNNNN:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0][0]));
                                   }
        });
 },

};

module.exports=topicParamDataRepo;