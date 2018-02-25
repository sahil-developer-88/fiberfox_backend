var mssql = require('mssql');
var Schema = mssql.schema;

categoryModel = new Schema({
	id: number,
	name: String,
	isActive: boolean,
	isDeleted: boolean,
	createdOn: Date
})

module.exports = categoryModel;