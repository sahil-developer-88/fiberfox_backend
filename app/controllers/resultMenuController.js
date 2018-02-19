var resultMenuRepo=require('../repo/resultMenuRepo');
var baseController=require('./baseController');
var userSessionInfoRepo=require('../repo/userSessionInfoRepo');

var resultMenuCtrl={
//GET API
get:function(req , res){
  resultMenuRepo.get(res);
  
},

getBySubTopic:function(req , res){
  baseController.isAuthenticated(req,res,function(){ resultMenuRepo.getBySubTopic(req,res);});
},
getBySubTopicDetail:function(req , res){
  baseController.isAuthenticated(req,res,function(){ 
    resultMenuRepo.getBySubTopicDetail(req,res);
    userSessionInfoRepo.saveUserSession(req,'subtopicdetailid'); //handle user session here 1 param
  });
},

endSession:function(req , res){
  baseController.isAuthenticated(req,res,function(){ 
  userSessionInfoRepo.endUserSession(req,res);
                });
  },


find:function(req , res){
  resultMenuRepo.find(req,res);
},

//POST API
post:function(req , res){
  resultMenuRepo.post(req,res);
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

module.exports=resultMenuCtrl;
