var topicParamRepo=require('../repo/topicParamRepo');
var baseController=require('./baseController');

var topicParamCtrl={
//GET API
get:function(req , res){
  topicParamRepo.get(res);
  
},
getBySubtopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ topicParamRepo.getBySubtopic(req,res);});  
},
find:function(req , res){
  topicParamRepo.find(req,res);
},

//POST API
post:function(req , res){
  topicParamRepo.post(req,res);
                //executeQuery (res, query);
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

module.exports=topicParamCtrl;
