var dateFormat = require('dateformat');
var baseRepo=require('./baseRepo');

var userSessionInfoRepo={

	get:function(req,res){
    console.log(['decoded from repo',req.decoded]);
    var query = "select * from UserSessionInfo";
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
  saveUserSession:function(req,type){

var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
var userLogin=req.decoded;
var saveQuery = "";
var updateQuery = "";

var query = "select * from UserSessionInfo where UserId='"+userLogin.id+"' and Token='"+token+"' and UserSessionEndDate IS NULL";
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {

var isNew=false;
var userSession= JSON.stringify(resp[0][0]);
                                     if(userSession==null && userSession==undefined)//new record
isNew=true;
else
isNew=false;
switch(type.trim().toLowerCase())
{
  case 'subcategoryid':
  {
    ///:subcategoryId/:activityId
    var subcategoryId=req.params.subcategoryId;
    var activityId=req.params.activityId;
    saveQuery = "INSERT INTO UserSessionInfo(UserId,SubcategoryId,ActivityId,Token) values("+userLogin.id+","+subcategoryId+",'"+activityId+"','"+token+"')"; 
    updateQuery = "Update  UserSessionInfo set SubcategoryId="+subcategoryId+",ActivityId="+activityId+" where UserId="+userLogin.id+" and token='"+token+"'";
    
  }
  break;
  case 'topicid':
  {
    ///:subcategoryId/:activityId/:topicId
    var subcategoryId=req.params.subcategoryId;
    var activityId=req.params.activityId;
    var topicId=req.params.topicId;
    saveQuery = "INSERT INTO UserSessionInfo(UserId,SubcategoryId,ActivityId,topicId,Token) values("+userLogin.id+","+subcategoryId+",'"+activityId+"','"+token+"')"; 
    updateQuery = "Update  UserSessionInfo set SubcategoryId="+subcategoryId+",ActivityId="+activityId+",TopicId="+topicId+" where UserId="+userLogin.id+" and token='"+token+"'";
  }
  break;
  case 'subtopicid':
  {///:subTopicId
    var subTopicId=req.params.subTopicId;
    saveQuery = "INSERT INTO UserSessionInfo(UserId,subTopicId,Token) values("+userLogin.id+","+subTopicId+",'"+token+"')"; 
    updateQuery = "Update  UserSessionInfo set SubTopicId="+subTopicId+" where UserId="+userLogin.id+" and token='"+token+"'";
}
break;
case 'subtopicdetailid':
  {///:subTopicId
    var subTopicDetailId=req.params.SubTopicDetailId;
    saveQuery = "INSERT INTO UserSessionInfo(UserId,SubTopicDetailId,Token) values("+userLogin.id+","+subTopicDetailId+",'"+token+"')"; 
    updateQuery = "Update  UserSessionInfo set SubTopicDetailId="+subTopicDetailId+" where UserId="+userLogin.id+" and token='"+token+"'";
}
break;
default:
{

}
break;
}
updateQuery+=' and UserSessionEndDate IS NULL';
var query = isNew==true?saveQuery:updateQuery;
baseRepo.executeQuery(query,function (err, resp) {
  if (err) {
   console.log("Error while querying database UserSession:- " + err);
       //res.send(err);
     }
     else {
                                    //success
                                  }
                                });
}//else closed
});
},
endUserSession:function(req,res){

var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
var userLogin=req.decoded;
//https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
var nowDateString=dateFormat(new Date(), "mm/dd/yyyy h:MM:ss");

var dataSessionEndToken=token+'_'+nowDateString;
var paramDataQuery="UPDATE TopicParamsData SET Token='"+dataSessionEndToken+"' where token='"+token+"';";
var boundaryDataQuery="UPDATE BoundaryData SET Token='"+dataSessionEndToken+"' where token='"+token+"';";
var query = "Update  UserSessionInfo set UserSessionEndDate='"+nowDateString+"' where UserId="+userLogin.id+" and token='"+token+"'";
    
    query=paramDataQuery+boundaryDataQuery+query;
baseRepo.executeQuery(query,function (err, resp) {
  if (err) {
   console.log("Error while querying database :- " + err);
       //res.send(err);
     }
     else {
      res.json({ message: 'Session ended! ' });
                                    //success
                                  }
 
});
},
post:function(req,res){
  var name=req.body.name;
  var query = "INSERT INTO UserSessionInfo(Name) values('"+name+"')";
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
put:function(req,res){
  var name=req.body.name;
  var query = "INSERT INTO UserSessionInfo(Name) values('"+name+"')";
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
  var query = "select * from UserSessionInfo where id="+id;
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

module.exports=userSessionInfoRepo;