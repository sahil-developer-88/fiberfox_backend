var sql = require("mssql");

const routes = require('express').Router();


// ROUTES FOR OUR API
// =============================================================================
//var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
routes.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



//all routes
var categoryController = require('../controllers/categoryController');
routes.route('/category').get(categoryController.get).post(categoryController.post);
routes.route('/category/:id').get(categoryController.find).put(categoryController.put).delete(categoryController.delete);


var subCategoryController = require('../controllers/subCategoryController');
routes.route('/subcategory').get(subCategoryController.get).post(subCategoryController.post);
routes.route('/subcategory/:id').get(subCategoryController.find).put(subCategoryController.put).delete(subCategoryController.delete);
routes.route('/subcategory/getByCategory/:id').get(subCategoryController.getByCategory);


var activityController = require('../controllers/activityController');
routes.route('/activity').get(activityController.get).post(activityController.post);
routes.route('/activity/:id').get(activityController.find).put(activityController.put).delete(activityController.delete);


var topicController = require('../controllers/topicController');
routes.route('/topic').get(topicController.get).post(topicController.post);
routes.route('/topic/:id').get(topicController.find).put(topicController.put).delete(topicController.delete);


var subTopicController = require('../controllers/subTopicController');
routes.route('/subTopic').get(subTopicController.get).post(subTopicController.post);
routes.route('/subTopic/:id').get(subTopicController.find).put(subTopicController.put).delete(subTopicController.delete);
routes.route('/subTopic/getBySubcategoryTopicActivity/:subcategoryId/:activityId/:topicId')
.get(subTopicController.getBySubcategoryTopicActivity);
routes.route('/subTopic/getBySubcategoryActivity/:subcategoryId/:activityId')
.get(subTopicController.getBySubcategoryActivity);

var subTopicDetailController = require('../controllers/subTopicDetailController');
routes.route('/subTopicDetail').get(subTopicDetailController.get).post(subTopicDetailController.post);
routes.route('/subTopicDetail/:SubTopicDetailId').get(subTopicDetailController.find).put(subTopicDetailController.put).delete(subTopicDetailController.delete);
routes.route('/subTopicDetail/getBySubTopic/:subTopicId').get(subTopicDetailController.getBySubTopic);


var topicParamController = require('../controllers/topicParamController');
routes.route('/topicParam').get(topicParamController.get).post(topicParamController.post);
routes.route('/topicParam/:id').get(topicParamController.find).put(topicParamController.put).delete(topicParamController.delete);
routes.route('/topicParam/getBySubtopic/:id').get(topicParamController.getBySubtopic);

var topicParamOptionController = require('../controllers/topicParamOptionController');
routes.route('/topicParamOption').get(topicParamOptionController.get).post(topicParamOptionController.post);
routes.route('/topicParamOption/:id').get(topicParamOptionController.find).put(topicParamOptionController.put).delete(topicParamOptionController.delete);
routes.route('/topicParamOption/getByTopicParam/:topicParamId').get(topicParamOptionController.getByTopicParam);
routes.route('/topicParamOption/getBySubTopic/:subTopicId').get(topicParamOptionController.getBySubTopic);

var topicParamOptionValueController = require('../controllers/topicParamOptionValueController');
routes.route('/topicParamOptionValue').get(topicParamOptionValueController.get).post(topicParamOptionValueController.post);
routes.route('/topicParamOptionValue/:id').get(topicParamOptionValueController.find).put(topicParamOptionValueController.put).delete(topicParamOptionValueController.delete);
routes.route('/topicParamOptionValue/getByTopicParam/:topicParamId').get(topicParamOptionValueController.getByTopicParam);
routes.route('/topicParamOptionValue/getBySubtopic/:subTopicId').get(topicParamOptionValueController.getBySubtopic);
routes.route('/topicParamOptionValue/getBySubMenu/:resultSubMenuId').get(topicParamOptionValueController.getBySubMenu);
routes.route('/topicParamOptionValue/getByMenu/:resultMenuId').get(topicParamOptionValueController.getByMenu);


var topicParamDataController = require('../controllers/topicParamDataController');
routes.route('/topicParamData').get(topicParamDataController.get).post(topicParamDataController.post);
routes.route('/topicParamData/:id').get(topicParamDataController.find).put(topicParamDataController.put).delete(topicParamDataController.delete);
routes.route('/topicParamData/getBySubtopic/:subTopicId').get(topicParamDataController.getBySubtopic);


var boundaryController = require('../controllers/boundaryController');
routes.route('/boundary').get(boundaryController.get).post(boundaryController.post);
routes.route('/boundary/:id').get(boundaryController.find).put(boundaryController.put).delete(boundaryController.delete);
routes.route('/boundary/getByTopicParam/:id').get(boundaryController.getByTopicParam);
routes.route('/boundary/getBySubtopic/:id').get(boundaryController.getBySubtopic);

var boundaryOptionController = require('../controllers/boundaryOptionController');
routes.route('/boundaryOption').get(boundaryOptionController.get).post(boundaryOptionController.post);
routes.route('/boundaryOption/:id').get(boundaryOptionController.find).put(boundaryOptionController.put).delete(boundaryOptionController.delete);
routes.route('/boundaryOption/getByBoundary/:boundaryId').get(boundaryOptionController.getByBoundary);
//routes.route('/boundaryOption/getBySubTopic/:subTopicId').get(boundaryOptionController.getBySubTopic);

var boundaryOptionValueController = require('../controllers/boundaryOptionValueController');
routes.route('/boundaryOptionValue').get(boundaryOptionValueController.get).post(boundaryOptionValueController.post);
routes.route('/boundaryOptionValue/:id').get(boundaryOptionValueController.find).put(boundaryOptionValueController.put).delete(boundaryOptionValueController.delete);
routes.route('/boundaryOptionValue/getByTopicParam/:topicParamId').get(boundaryOptionValueController.getByTopicParam);
routes.route('/boundaryOptionValue/getBySubtopic/:subTopicId').get(boundaryOptionValueController.getBySubtopic);
routes.route('/boundaryOptionValue/getBySubMenu/:resultSubMenuId').get(boundaryOptionValueController.getBySubMenu);
routes.route('/boundaryOptionValue/getByMenu/:resultMenuId').get(boundaryOptionValueController.getByMenu);

var boundaryDataController = require('../controllers/boundaryDataController');
routes.route('/boundaryData').get(boundaryDataController.get).post(boundaryDataController.post);
routes.route('/boundaryData/:id').get(boundaryDataController.find).put(boundaryDataController.put).delete(boundaryDataController.delete);
routes.route('/boundaryData/getBySubtopic/:subTopicId').get(boundaryDataController.getBySubtopic);


var resultMenuController = require('../controllers/resultMenuController');
routes.route('/resultMenu').get(resultMenuController.get).post(resultMenuController.post);
routes.route('/resultMenu/:id').get(resultMenuController.find).put(resultMenuController.put).delete(resultMenuController.delete);
routes.route('/resultMenu/getBySubTopic/:SubTopicId').get(resultMenuController.getBySubTopic);
routes.route('/resultMenu/getBySubTopicDetail/:SubTopicId/:SubTopicDetailId').get(resultMenuController.getBySubTopicDetail);
routes.route('/resultMenu/endSession').post(resultMenuController.endSession);

var resultSubMenuController = require('../controllers/resultSubMenuController');
routes.route('/resultSubMenu').get(resultSubMenuController.get).post(resultSubMenuController.post);
routes.route('/resultSubMenu/:id').get(resultSubMenuController.find).put(resultSubMenuController.put).delete(resultSubMenuController.delete);
routes.route('/resultSubMenu/getByMenu/:ResultMenuId').get(resultSubMenuController.getByMenu);

var articleController = require('../controllers/articleController');
routes.route('/article').get(articleController.get).post(articleController.post);
routes.route('/article/:id').get(articleController.find).put(articleController.put).delete(articleController.delete);
routes.route('/article/getBySubMenu/:SubMenuId').get(articleController.getBySubMenu);



var userController = require('../controllers/userController');
routes.route('/user').get(userController.get).post(userController.post);
routes.route('/user/:id').get(userController.find).put(userController.put).delete(userController.delete);
routes.route('/user/login').post(userController.login);

// var userFeedbackController = require('../controllers/userFeedbackController');
// routes.route('/userFeedback').get(userFeedbackController.get).post(userFeedbackController.post).put(userFeedbackController.put);
// //routes.route('/userFeedback/:id').get(userFeedbackController.find).delete(userFeedbackController.delete);
// routes.route('/userFeedback/getCurrentSessionInfo').get(userFeedbackController.getCurrentSessionInfo);
// routes.route('/userFeedback/getByUserSession/:currentSessionId').get(userFeedbackController.getByUserSession);

// more routes for our API will happen here
//exports.router=routes;.
module.exports=routes;