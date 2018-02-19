var userRepo=require('../repo/userRepo');
var baseController=require('./baseController');

var userCtrl={
//GET API
get:function(req , res){
  userRepo.get(res);
  
},
login:function(req , res){
  userRepo.login(req,res);
                //executeQuery (res, query);
},
find:function(req , res){
  userRepo.find(req,res);
},

//POST API
post:function(req , res){
  userRepo.post(req,res);
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

module.exports=userCtrl;
