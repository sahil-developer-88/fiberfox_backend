var boundaryRepo=require('../repo/boundaryRepo');
var baseController=require('./baseController');

var boundaryCtrl={
//GET API
get:function(req , res){
  boundaryRepo.get(res);
  
},
getBySubtopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryRepo.getBySubtopic(req,res);});
},
getByTopicParam:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryRepo.getByTopicParam(req,res);});
},
find:function(req , res){
  boundaryRepo.find(req,res);
},

//POST API
post:function(req , res){
  boundaryRepo.post(req,res);
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

module.exports=boundaryCtrl;
