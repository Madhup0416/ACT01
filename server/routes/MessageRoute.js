/**
 * http://usejsdoc.org/
 */
var message = require('../../server/controllers/MessageController.js');

module.exports = function(app) {
//	app.get('/', index.display);

	console.log('Got inside Index Route');
	app.route('/partials/:partialPath').get(message.partialDisplay);
	app.route('*').get(message.newMessage);

//	app.get('*', message.newActDisplay);
	

};