var subTopicDetailRepo=require('../repo/subTopicDetailRepo');
var baseController=require('./baseController');
var userSessionInfoRepo=require('../repo/userSessionInfoRepo');

var subTopicDetailCtrl={
//GET API
get:function(req , res){
  subTopicDetailRepo.get(res);
  
},
getBySubTopic:function(req , res){
    baseController.isAuthenticated(req,res,function(){ 
      subTopicDetailRepo.getBySubTopic(req,res);
      userSessionInfoRepo.saveUserSession(req,'subtopicid'); //handle user session here 1 param
    });
    
},
find:function(req , res){
  baseController.isAuthenticated(req,res,function(){ 
  subTopicDetailRepo.find(req,res);
  userSessionInfoRepo.saveUserSession(req,'subtopicdetailid'); //handle user session here 1 param
    });

},

//POST API
post:function(req , res){
  subTopicDetailRepo.post(req,res);
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

module.exports=subTopicDetailCtrl;
