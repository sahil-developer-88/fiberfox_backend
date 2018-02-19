var topicParamOptionRepo=require('../repo/topicParamOptionRepo');
var baseController=require('./baseController');

var topicParamOptionCtrl={
//GET API
get:function(req , res){
  topicParamOptionRepo.get(res);
  
},
getByTopicParam:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamOptionRepo.getByTopicParam(req,res);});
  
},
getBySubTopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamOptionRepo.getBySubTopic(req,res);});
  
},
find:function(req , res){
  topicParamOptionRepo.find(req,res);
},

//POST API
post:function(req , res){
  topicParamOptionRepo.post(req,res);
                //executeQuery (res, query);
              },

//PUT API
put:function(req , res){
        var id=req.ParamOptions.id//will get id
      },       

// DELETE API
delete: function(req , res){
    var id=req.ParamOptions.id//will get id
  }

};

module.exports=topicParamOptionCtrl;
