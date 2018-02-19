var resultSubMenuRepo=require('../repo/resultSubMenuRepo');
var baseController=require('./baseController');

var resultSubMenuCtrl={
//GET API
get:function(req , res){
  resultSubMenuRepo.get(res);
  
},
getByMenu:function(req , res){
  baseController.isAuthenticated(req,res,function(){ resultSubMenuRepo.getByMenu(req,res);});
},
find:function(req , res){
  resultSubMenuRepo.find(req,res);
},

//POST API
post:function(req , res){
  resultSubMenuRepo.post(req,res);
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

module.exports=resultSubMenuCtrl;
