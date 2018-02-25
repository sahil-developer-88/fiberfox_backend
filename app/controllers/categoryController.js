var categoryRepo=require('../repo/categoryRepo');
var baseController=require('./baseController');

var categoryCtrl={
//GET API
get:function(req , res){
  
var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//console.log(['category page test port',fullUrl]);
// var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
//   if (token) {
//  baseController.isAuthenticated(req,res,function(){ categoryRepo.get(req,res);});
// }
// else
//  {categoryRepo.get(req,res);}
  
  baseController.isAuthenticated(req,res,function(){ categoryRepo.get(req,res);});
},
find:function(req , res){
  categoryRepo.find(req,res);
},

//POST API
post:function(req , res){
  categoryRepo.post(req,res);
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

module.exports=categoryCtrl;
