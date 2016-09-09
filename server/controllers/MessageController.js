/**
 * http://usejsdoc.org/
 */

//
var Message = require('mongoose').model('Message');
//app.get('/partials/:partialPath', index.partialDisplay);

//app.get('*', index.newActDisplay);


exports.partialDisplay = function (req, res) {
	console.log('Prior to Params');
	console.log(req.params.partialPath);
	res.render('partials/' + req.params.partialPath);	
};

exports.newMessage = function(req, res, next){
//	var mongoMessage = 'Temp Message';
	
//	res.render('index',{mongoMessage: 'Temp'});
	Message.findOne ({}, function (err, messageDoc) {
		if (err) {
			console.log('Could not use Find One');
			return next(err);
		} 
		if (!messageDoc) {
			console.log('No Message Found');
			res.send('No Message Exists');
		}
		console.log('Inside the model');
		console.log(messageDoc.message);
		res.render('index', {mongoMessage: messageDoc.message});
	});
};
