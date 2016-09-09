/**
 * http://usejsdoc.org/
 */

var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function () {
	var db = mongoose.connect(config.db);


// Register other models when schema are created	
	require('../server/models/UserModel');
	require('../server/models/PostModel');
	require('../server/models/MessageModel');
	
	return db;
};