/**
 * http://usejsdoc.org/
 */

//var MessageController = './MessageController.js';
//var MessageModel = '../../models/MessageModel.js';
//var Message = require('mongoose').model('Message');
var User = require('mongoose').model('User');


exports.render = function (req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}
	
	req.session.lastVisit = new Date();
	
	res.render ('newPage', {
		title: 'Hello world'
	});
};

exports.display = function (req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}
	
	req.session.lastVisit = new Date();
	
	res.render ('index', {
		title: 'Home Page'
	});
	
};

exports.newActDisplay = function (req, res) {
	
	console.log('Got inside new Act Display');
	console.log(require('path').basename(__dirname));
//	var message;
//	res.render('index.pug', Message.findOne().exec(function(err, messageDoc) {
//		  res.mongoMessage = messageDoc.message;
//	}));
	
};

