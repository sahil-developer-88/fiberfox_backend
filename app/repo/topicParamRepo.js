var baseRepo = require('./baseRepo');


var topicParamRepo = {

  get: function (res) {
    var query = 'select TopicParams.*,COUNT(options.TopicParamId) as OptionsCount from TopicParams \
               left join TopicParamOptions as options \
               on TopicParams.Id=options.TopicParamId where TopicParams.IsDeleted=0\
               group by TopicParams.Id,TopicParams.Name,TopicParams.IsActive,TopicParams.CreatedOn, \
               TopicParams.IsDeleted, TopicParams.OppositeRequiredParamId,TopicParams.SubTopicId, TopicParams.IsMultiSelect, TopicParams.MaxAllowedOptions';

    baseRepo.executeQuery(query, function (err, resp) {
      if (err) {
        console.log("Error while querying database 01:- " + err);
        //res.send(err);
      }
      else {
        res.json(JSON.stringify(resp[0]));
      }
    });
  },
  getBySubtopic: function (req, res) {
    var subTopicId = req.params.id;
    var query = 'select TopicParams.*,COUNT(options.TopicParamId) as OptionsCount from TopicParams \
               left join TopicParamOptions as options \
               on TopicParams.Id=options.TopicParamId \
               where TopicParams.IsDeleted=0 and TopicParams.subtopicId='+ subTopicId + '\
               group by TopicParams.Id,TopicParams.Name,TopicParams.IsActive,TopicParams.CreatedOn, \
               TopicParams.IsDeleted, TopicParams.OppositeRequiredParamId,TopicParams.SubTopicId, TopicParams.IsMultiSelect, TopicParams.MaxAllowedOptions';

    baseRepo.executeQuery(query, function (err, resp) {
      if (err) {
        console.log("Error while querying database 02:- " + err);
        //res.send(err);
      }
      else {
        res.json(JSON.stringify(resp[0]));
      }
    });
  },
  post: function (req, res) {
    var name = req.params.name;
    var subTopicId = req.params.subtopicId;
    var oppositeRequiredParamId = req.params.oppositeRequiredParamId;
    var query = "INSERT INTO TopicParams(Name,SubTopicId,oppositeRequiredParamId) values('" + name + "'," + subTopicId + "," + oppositeRequiredParamId + ")";
    baseRepo.executeQuery(query, function (err, resp) {
      if (err) {
        console.log("Error while querying database 03:- " + err);
        //res.send(err);
      }
      else {
        res.json({ message: 'Record created! ' });
        //res.json(JSON.stringify(resp));
      }
    });
  },
  find: function (req, res) {
    var id = req.params.id;
    var query = 'select TopicParams.*,COUNT(options.TopicParamId) as OptionsCount from TopicParams \
               left join TopicParamOptions as options \
               on TopicParams.Id=options.TopicParamId \
               where TopicParams.IsDeleted=0 and TopicParams.Id='+ subTopicId + '\
               group by TopicParams.Id,TopicParams.Name,TopicParams.IsActive,TopicParams.CreatedOn, \
               TopicParams.IsDeleted, TopicParams.OppositeRequiredParamId,TopicParams.SubTopicId, TopicParams.IsMultiSelect, TopicParams.MaxAllowedOptions';

    baseRepo.executeQuery(query, function (err, resp) {
      if (err) {
        console.log("Error while querying database 04:- " + err);
        //res.send(err);
      }
      else {
        res.json(JSON.stringify(resp[0][0]));
      }
    });
  },

};

module.exports = topicParamRepo;