// BASE SETUP
// =============================================================================

var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require("body-parser");
var sql = require("mssql");
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var app = express(); 
var config=require('./config/settings');
var conString=config.dbConfig;
//store the connection string   
sql.conString=conString;

var connection = new sql.Connection(sql.conString);
connection.connect();
sql.connection=connection;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

app.set('superSecret', config.secrets.superSecret); // secret variable

app.use(cookieParser());
//init session
app.use(session({
	key:'user_sid',
  secret: 'kqsdjfmlksdhfhzirzeoibrzecrbzuzefcuercazeafxzeokwdfzeijfxcerig',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: !true }
}));

//for images
app.use(express.static('assets'));

var port = process.env.PORT || 3000;        // set our port


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
var routes=require('./app/routes/router');
app.use('/api', routes);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
