var baseRepo=require('./baseRepo');


var boundaryRepo={

  get:function(res){
var query='select boundary.*,COUNT(options.boundaryId) as OptionsCount from boundary \
               left join boundaryOptions as options \
               on boundary.Id=options.boundaryId \
               group by boundary.Id,boundary.Name,boundary.IsActive,boundary.CreatedOn, \
               boundary.IsDeleted,boundary.IsMultiSelect, boundary.MaxAllowedOptions,boundary.OppositeRequiredParamId,boundary.TopicParamId,boundary.SubTopicId';

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
  var subTopicId=req.params.id;
  var query= 'select boundary.*,COUNT(options.boundaryId) as OptionsCount from boundary \
               left join boundaryOptions as options \
               on boundary.Id=options.boundaryId \
               where boundary.SubTopicId='+subTopicId+'\
               group by boundary.Id,boundary.Name,boundary.IsActive,boundary.CreatedOn, \
               boundary.IsDeleted,boundary.IsMultiSelect, boundary.MaxAllowedOptions,boundary.OppositeRequiredParamId,boundary.TopicParamId,boundary.SubTopicId';
   
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
  var topicParamId=req.params.id;
  var query= 'select boundary.*,COUNT(options.boundaryId) as OptionsCount from boundary \
               left join boundaryOptions as options \
               on boundary.Id=options.boundaryId \
               where boundary.topicParamId='+topicParamId+'\
               group by boundary.Id,boundary.Name,boundary.IsActive,boundary.CreatedOn, \
               boundary.IsDeleted,boundary.IsMultiSelect, boundary.MaxAllowedOptions,boundary.OppositeRequiredParamId,boundary.TopicParamId,boundary.SubTopicId';
   
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
  var subTopicId=req.params.subtopicId;
  var oppositeRequiredParamId=req.params.oppositeRequiredParamId;
  var query = "INSERT INTO boundary(Name,SubTopicId,oppositeRequiredParamId) values('"+name+"',"+subTopicId+","+oppositeRequiredParamId+")";
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
   var query ='select boundary.*,COUNT(options.boundaryId) as OptionsCount from boundary \
               left join boundaryOptions as options \
               on boundary.Id=options.boundaryId \
               where boundary.Id='+id +'\
               group by boundary.Id,boundary.Name,boundary.IsActive,boundary.CreatedOn, \
               boundary.IsDeleted,boundary.IsMultiSelect,boundary.MaxAllowedOptions, boundary.OppositeRequiredParamId,boundary.TopicParamId,boundary.SubTopicId';

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

module.exports=boundaryRepo;