var baseRepo=require('./baseRepo');
var _=require("lodash");
var subCategoryRepo={

  get:function(res){
   var query = "select * from SubCategories where isdeleted=0";
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0]));
                                   }
                                 });
 },
 getByCategory:function(req,res){
  var categoryId=req.params.id;
   var query = "select * from SubCategories where isdeleted=0 and categoryId="+categoryId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                      // console.log(resp[0]);
                                      _.forEach(resp[0],(subCategoryValues,subCategoryIndex)=>{
                                        // to check sub category has further sub topics or not.
                                        
                                        var query_subTopics="select * from SubTopics where SubCategoryId="+subCategoryValues.Id+"";
                                        baseRepo.executeQuery(query_subTopics,function (subTopics_err, subTopics_resp) {
                                          if(err)
                                          {
                                            console.log("Error while querying database :- " + err);
                                            return;
                                          }
                                          
                                          if(subTopics_resp[0].length > 0)
                                          {
                                            // console.log('subcategory id'+subCategoryValues.Id);
                                            // console.log(subTopics_resp.length);
                                            // console.log(subTopics_resp);
                                            
                                            resp[0][subCategoryIndex].isValid=true;
                                          }
                                          else
                                          {
                                            resp[0][subCategoryIndex].isValid=false;
                                          }
                                          if(subCategoryIndex == resp[0].length-1)
                                          {
                                            // console.log(resp[0]);
                                            res.json(JSON.stringify(resp[0]));
                                          }
                                        });
                                        
                                        // console.log(subCategoryIndex);
                                      });
                                      // console.log(resp[0]);
                                      
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.body.name;
  var categoryId=req.body.categoryId;
  var query = "INSERT INTO SubCategories(Name,categoryId) values('"+name+"',"+categoryId+")";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
       //res.send(err);
     }
     else {
       res.json({ message: 'Record created! ' });
                                    //res.json(JSON.stringify(resp));
                                  }
                                });
},
find:function(req,res){
  var id=req.body.id;
   var query = "select * from SubCategories where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp));
                                   }
                                 });
 },

};

module.exports=subCategoryRepo;