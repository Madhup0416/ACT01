/**
 * http://usejsdoc.org/
 */
var govData = require('../../server/controllers/GovDataController.js');

module.exports = function(app) {
//	app.get('/', index.display);

	console.log('Got Gov Data Route');
	app.route('/partials/:partialPath').get(govData.NGDisp);
	
	app.route('/checkhosp').get(govData.checkhospData);
	app.route('/').get(govData.hospData);

//	app.get('*', message.newActDisplay);
	

};