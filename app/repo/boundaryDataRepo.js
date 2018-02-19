var baseRepo=require('./baseRepo');
var dateFormat = require('dateformat');

var boundaryDataRepo={

  get:function(res){
    var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
   var query = "select * from boundaryData";
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
  //var query = "select * from boundaryData where subTopicId="+subTopicId+" and token='"+token+"' order by id desc";

var query="SELECT boundaryData.* \
FROM boundaryData boundaryData   \
INNER JOIN   \
  (SELECT b.BoundaryOptionId,  \
    Max(id) as id  \
  FROM boundaryData b   \
  where b.subTopicId="+subTopicId+" and b.token='"+token+"'    \
  GROUP BY b.BoundaryOptionId  \
) AS b  \
  ON boundaryData.BoundaryOptionId= b.BoundaryOptionId  \
  AND boundaryData.Id = b.id  \
  order by  boundaryData.Id desc;"
  
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
  var boundaryId=req.body.BoundaryId;
  var boundaryOptionId=req.body.BoundaryOptionId;
  var subTopicId=req.body.SubTopicId;
  var userId=req.decoded?req.decoded.id:undefined;
  var value=req.body.Value;
  var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
  
  var nowDateString=dateFormat(new Date(), "mm/dd/yyyy h:MM:ss");
  var dataSessionEndToken=token+'_'+nowDateString;
  
  //dont uncomment otherwise it will end current as well
  //var boundaryEndDataQuery="UPDATE BoundaryData SET Token='"+dataSessionEndToken+"' where token='"+token+"';";
  
  var query = "INSERT INTO BoundaryData(boundaryId,boundaryOptionId,subTopicId,Value,token)values("+boundaryId+","+boundaryOptionId+","+subTopicId+",'"+value+"','"+token+"')";
  if(userId)
     query = "INSERT INTO BoundaryData(boundaryId,boundaryOptionId,subTopicId,userId,Value,token)values("+boundaryId+","+boundaryOptionId+","+subTopicId+","+userId+",'"+value+"','"+token+"')";

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
   var query = "select * from boundaryData where id="+id;
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

module.exports=boundaryDataRepo;