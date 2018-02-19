var subCategoryRepo=require('../repo/subCategoryRepo');
var baseController=require('./baseController');

var subCategoryCtrl={
//GET API
get:function(req , res){
  subCategoryRepo.get(res);
  
},
getByCategory:function(req , res){
  baseController.isAuthenticated(req,res,function(){ subCategoryRepo.getByCategory(req,res);});
  
},
find:function(req , res){
  subCategoryRepo.find(req,res);
},

//POST API
post:function(req , res){
  subCategoryRepo.post(req,res);
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

module.exports=subCategoryCtrl;
