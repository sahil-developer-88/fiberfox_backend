var subTopicRepo=require('../repo/subTopicRepo');
var baseController=require('./baseController');
var userSessionInfoRepo=require('../repo/userSessionInfoRepo');

var subTopicCtrl={
//GET API
get:function(req , res){
  subTopicRepo.get(res);
  
},
getBySubcategoryActivity:function(req , res){
  baseController.isAuthenticated(req,res,function(){ 
    subTopicRepo.getBySubcategoryActivity(req,res);
    userSessionInfoRepo.saveUserSession(req,'subcategoryid'); //handle user session here 1 params coming here
  });
  
},
getBySubcategoryTopicActivity:function(req , res){ 
  baseController.isAuthenticated(req,res,function(){ 
    subTopicRepo.getBySubcategoryTopicActivity(req,res);
    userSessionInfoRepo.saveUserSession(req,'topicid'); //handle user session here 3 param
  });
},
find:function(req , res){
  subTopicRepo.find(req,res);
},

//POST API
post:function(req , res){
  subTopicRepo.post(req,res);
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

module.exports=subTopicCtrl;
