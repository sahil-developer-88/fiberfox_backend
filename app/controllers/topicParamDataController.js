var topicParamDataRepo=require('../repo/topicParamDataRepo');
var baseController=require('./baseController');

var topicParamDataCtrl={
//GET API
get:function(req , res){
  topicParamDataRepo.get(res);
  
},
find:function(req , res){
  topicParamDataRepo.find(req,res);
},
getBySubtopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamDataRepo.getBySubtopic(req,res);});
},
//POST API
post:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamDataRepo.post(req,res);});
},

//PUT API
put:function(req , res){
        var id=req.params.id//will get id
      },       

// DELETE API
delete: function(req , res){
    var id=req.params.id//will get id
  }

};

module.exports=topicParamDataCtrl;
