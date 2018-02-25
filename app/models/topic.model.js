var mssql = require('mssql');
var Schema = mssql.schema;


topicModel = new Schema({
	id: number,
	name: String,
	description: String,
	subCategoryId: number,
	isActive: boolean,
	isDeleted: boolean,
	createdOn: Date
})

module.exports = topicModel;