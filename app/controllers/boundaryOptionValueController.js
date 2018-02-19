var boundaryOptionValueRepo=require('../repo/boundaryOptionValueRepo');
var baseController=require('./baseController');

var boundaryOptionValueCtrl={
//GET API
get:function(req , res){
  boundaryOptionValueRepo.get(res);
  
},
getByTopicParam:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryOptionValueRepo.getByTopicParam(req,res);});
},
getBySubtopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryOptionValueRepo.getBySubtopic(req,res);});
},
getBySubMenu:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryOptionValueRepo.getBySubMenu(req,res);});
},
getByMenu:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryOptionValueRepo.getByMenu(req,res);});
},
find:function(req , res){
  boundaryOptionValueRepo.find(req,res);
},

//POST API
post:function(req , res){
  boundaryOptionValueRepo.post(req,res);
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

module.exports=boundaryOptionValueCtrl;
