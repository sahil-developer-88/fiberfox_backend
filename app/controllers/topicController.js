var topicRepo=require('../repo/topicRepo');
var baseController=require('./baseController');

var topicCtrl={
//GET API
get:function(req , res){
	baseController.isAuthenticated(req,res,function(){ topicRepo.get(res);});
},
find:function(req , res){
  topicRepo.find(req,res);
},

//POST API
post:function(req , res){
  topicRepo.post(req,res);
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

module.exports=topicCtrl;
