var baseRepo=require('./baseRepo');

var articleRepo={

  get:function(res){
   var query = "select * from article";
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
 getBySubMenu:function(req,res){
  var subMenuId=req.params.SubMenuId;
   var query = "select * from article where SubMenuId="+subMenuId;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                      var apiUrl = req.protocol + '://' + req.get('host');
                                      var data=JSON.stringify(resp[0]);
                                      var replacement="<img src='"+apiUrl+'/images/';
                                      data=data.replace(new RegExp("<img src='/assets/images/", 'g'), replacement);
                                      data=data.replace(new RegExp('<img src="/assets/images/', 'g'), replacement);
                                      res.json(data);
                                   }
                                 });
 },
 post:function(req,res){
  var name=req.body.name;
  var subMenuId=req.body.subMenuId;
  var query = "INSERT INTO article(Name,subMenuId) values('"+name+"',"+subMenuId+")";
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
   var query = "select * from article where id="+id;
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

module.exports=articleRepo;