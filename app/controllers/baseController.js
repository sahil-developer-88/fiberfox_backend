var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config=require('../../config/settings');

var baseCtrl={
//GET API
isAuthenticated:function(req , res,next){
  // check header or url parameters or post parameters for token
  
  var token = req.body.token || req.query.token || req.headers['authorization'];// ||req.headers['x-access-token'];
  // decode token
  if (token) {

    // verifies secret and checks exp
    //jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      jwt.verify(token, config.secrets.superSecret, function(err, decoded) {      
      if (err) {
      	 res.status(401).json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;   
        //console.log(['decoded',req.decoded]);
        next();
      }
       });

  } else {

    // if there is no token
    // return an error
    return res.status(401).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
  
}
};

module.exports=baseCtrl;
