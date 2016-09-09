/**
 * http://usejsdoc.org/
 */

var users = require('../../server/controllers/UserController');

module.exports = function (app) {
	app.route('/users').post(users.createNew);
	app.route('/users').get(users.listNew);
	
	app.route('/createUser').get(users.sendCreate);
	app.route('/userIndex').get(users.userIndex);
	
/**	
	app.get('/users/:userId', users.userByID, function (req, res, next) {
		console.log('Prior to rendering');
		res.render('/users/profile', {title: 'User Profile', user: req.user});
	});
	
	app.route('/users/:userId').get(users.readNew);
	app.route('/users/:userId').put(users.updateNew);
	app.route('/users/:userId').delete(users.delete);
*/	

	app.route('/users/:userId')
			.get(users.readNew)
//			.post(users.updateNew)
			.put(users.updateNew)
			.delete(users.delete);
	
	
	app.param('userId', users.userByID);
//	console.log('User ID is ' + JSON.stringify(userId));
};