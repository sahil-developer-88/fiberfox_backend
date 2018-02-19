var topicParamOptionValueRepo=require('../repo/topicParamOptionValueRepo');
var baseController=require('./baseController');

var topicParamOptionValueCtrl={
//GET API
get:function(req , res){
  topicParamOptionValueRepo.get(res);
  
},
getByTopicParam:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamOptionValueRepo.getByTopicParam(req,res);});
},
getBySubtopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamOptionValueRepo.getBySubtopic(req,res);});
},
getBySubMenu:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamOptionValueRepo.getBySubMenu(req,res);});
},
getByMenu:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamOptionValueRepo.getByMenu(req,res);});
},
find:function(req , res){
  topicParamOptionValueRepo.find(req,res);
},

//POST API
post:function(req , res){
  topicParamOptionValueRepo.post(req,res);
                //executeQuery (res, query);
              },

//PUT API
put:function(req , res){
        var id=req.ParamOptionValues.id//will get id
      },       

// DELETE API
delete: function(req , res){
    var id=req.ParamOptionValues.id//will get id
  }

};

module.exports=topicParamOptionValueCtrl;
