/**
 * http://usejsdoc.org/
 */

/**
 * Create new controllers
 * Can group them according to the functionality
 * 
 */


module.exports = function(app) {
/**	
	
	var index = require('../../server/controllers/IndexController.js');
//	app.get('/', index.display);

	console.log('Got inside Index Route');
	app.get('/partials/:partialPath', index.partialDisplay);

	app.get('*', index.newActDisplay);
	
*/
};