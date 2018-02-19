var baseRepo=require('./baseRepo');

var resultMenuRepo={

	get:function(res){
   var query = "select * from resultMenu";
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
  var SubTopicId=req.params.SubTopicId;
   var query = "select resultMenu.* from SubTopicResultMenu left join resultMenu \
                on resultMenu.Id=SubTopicResultMenu.ResultMenuId \
               where SubTopicResultMenu.SubTopicId="+SubTopicId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 2:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                      
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getBySubTopicDetail:function(req,res){
  var SubTopicId=req.params.SubTopicId;
  var SubTopicDetailId=req.params.SubTopicDetailId;
  var query = "select resultMenu.* from SubTopicResultMenu left join resultMenu \
                on resultMenu.Id=SubTopicResultMenu.ResultMenuId \
               where SubTopicResultMenu.SubTopicId="+SubTopicId+" and (SubTopicResultMenu.SubTopicDetailId="+SubTopicDetailId +" \
                OR SubTopicResultMenu.SubTopicDetailId IS NULL)";
                
   //var query = "select * from resultMenu where SubTopicId="+SubTopicId+" and SubTopicDetailId="+SubTopicDetailId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database 1:- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                      
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.body.name;
  var query = "INSERT INTO resultMenu(Name) values('"+name+"')";
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
   var query = "select * from resultMenu where id="+id;
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

module.exports=resultMenuRepo;