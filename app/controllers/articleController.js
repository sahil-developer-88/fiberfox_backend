var articleRepo=require('../repo/articleRepo');
var baseController=require('./baseController');

var articleCtrl={
//GET API
get:function(req , res){
  articleRepo.get(res);
  
},
getBySubMenu:function(req , res){
  baseController.isAuthenticated(req,res,function(){ articleRepo.getBySubMenu(req,res);});
  
},
find:function(req , res){
  articleRepo.find(req,res);
},
 
//POST API
post:function(req , res){
  articleRepo.post(req,res);
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

module.exports=articleCtrl;
