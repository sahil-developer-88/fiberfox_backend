var activityRepo=require('../repo/activityRepo');
var baseController=require('./baseController');

var activityCtrl={
//GET API
get:function(req , res){
	baseController.isAuthenticated(req,res,function(){ activityRepo.get(res);});
  
},
find:function(req , res){
  activityRepo.find(req,res);
},

//POST API
post:function(req , res){
  activityRepo.post(req,res);
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

module.exports=activityCtrl;
