var boundaryDataRepo=require('../repo/boundaryDataRepo');
var baseController=require('./baseController');

var boundaryDataCtrl={
//GET API
get:function(req , res){
  boundaryDataRepo.get(res);
  
},
getBySubtopic:function(req , res){

  //boundaryDataRepo.getBySubtopic(req,res);
  baseController.isAuthenticated(req,res,function(){ boundaryDataRepo.getBySubtopic(req,res);});
},
find:function(req , res){
  boundaryDataRepo.find(req,res);
},

//POST API
post:function(req , res){
	var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
  if (token) {
  baseController.isAuthenticated(req,res,function(){ boundaryDataRepo.post(req,res);});
}
else
  {boundaryDataRepo.post(req,res);}
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

module.exports=boundaryDataCtrl;
