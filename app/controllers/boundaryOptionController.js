var boundaryOptionRepo=require('../repo/boundaryOptionRepo');
var baseController=require('./baseController');

var boundaryOptionCtrl={
//GET API
get:function(req , res){
  boundaryOptionRepo.get(res);
  
},
getByBoundary:function(req , res){
  baseController.isAuthenticated(req,res,function(){ boundaryOptionRepo.getByBoundary(req,res);});
  
},
find:function(req , res){
  boundaryOptionRepo.find(req,res);
},

//POST API
post:function(req , res){
  boundaryOptionRepo.post(req,res);
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

module.exports=boundaryOptionCtrl;
