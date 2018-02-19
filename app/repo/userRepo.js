var baseRepo=require('./baseRepo');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config=require('../../config/settings');

var userRepo={

  get:function(res){
   var query = "select * from UserRegistrations";
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
 login:function(req,res){
  var email=req.body.Email;
  var password=req.body.Password;
  return this.authenticate(req,res,email,password);
},
 authenticate:function(req,res,email,password){
  var query = "SELECT * from UserRegistrations  WHERE Email='"+email+"' and password='"+password+"'";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
       //res.send(err);
     }
     else if(resp[0] && resp[0][0]){ //credentials matched
      var user=resp[0][0];
         // if user is found and password is right
        // create a token with only our given payload
    // we don't want to pass in the entire user since that has the password
    const payload = {
      id: user.Id,
      userName: user.UserName,
      email:user.Email 
    };
    var expiresIn =60*60*24;
        //var token = jwt.sign(payload, app.get('superSecret'), {
          var token = jwt.sign(payload, config.secrets.superSecret, {
           expiresIn : expiresIn
        });

          // return the information including token as JSON
          user.access_token=token;
          delete user.Password;//remove password
          user.IsAuthenticated=true;
          user.expires=expiresIn;
        res.json(JSON.stringify(user));

      //sess = req.session;
      //req.session.UserId=sess.UserId=resp[0][0].Id;
      //resp[0][0].Password=''; 
      //console.log(sess.UserId);
       //res.json(JSON.stringify(resp[0][0]));
                                    //res.json(JSON.stringify(resp));
    }
    else
    {
     res.status(500).json({ message: 'Authentication failed! ' }); 
    }
                                });
},
 post:function(req,res){
  var email=req.body.Email;
  var userName=req.body.UserName;
  var password=req.body.Password;
  var industryField=req.body.IndustryField;
  var activityField=req.body.ActivityField;
  var experienceLevel=req.body.ExperienceLevel;
  var specifyActivityField=req.body.SpecifyActivityField;
var _self=this;
var query = "select * from UserRegistrations where email='"+email+"' or userName='"+userName+"'";
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     var userData= JSON.stringify(resp[0][0]);
                                     if(userData==null && userData==undefined)//new record
   {

   query = "INSERT INTO UserRegistrations(Email,UserName,Password,IndustryField,ActivityField,ExperienceLevel,\
              SpecifyActivityField)  values('"+email+"','"+userName+"','"+password+"','"+industryField+"','"+activityField+"'\
                ,'"+experienceLevel+"','"+specifyActivityField+"')";
  baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
       //res.send(err);
     }
     else {
    return  _self.authenticate(req,res,email,password);
       //res.json({ message: 'Record created! ' });
                                    //res.json(JSON.stringify(resp));
                                  }
                                });
}
else
{
   res.status(500).json({ message: 'User already exists! ' });
}
}
});
},
find:function(req,res){
  var id=req.body.id;
   var query = "select * from UserRegistrations where id="+id;
   baseRepo.executeQuery(query,function (err, resp) {
    if (err) {
     console.log("Error while querying database :- " + err);
                                      //res.send(err);
                                    }
                                    else {
                                     res.json(JSON.stringify(resp[0][0]));
                                   }
                                 });
 }

};

module.exports=userRepo;