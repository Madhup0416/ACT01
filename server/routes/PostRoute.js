/**
 * http://usejsdoc.org/
 */

var posts = require('../../server/controllers/PostController');

module.exports = function (app) {
	app.route('/posts')
		.post(posts.create)
		.get(posts.list);
	
	app.route('/posts/:postId')
		.get(posts.read)
		.put(posts.update)
		.delete(posts.delete);
	
	app.param('userId', posts.postByID);
};