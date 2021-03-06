/**
 * http://usejsdoc.org/
 */

var Post = require('mongoose').model('Post');


exports.create = function(req, res, next) {
	var post = new Post(req.body);
	post.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(post);
		}
	});
};

exports.list = function(req, res, next) {
	Post.find({}, function(err, posts) {
		if (err) {
			return next(err);
		} else {
			res.json(posts);
		}
	});
};


exports.read = function (req, res) {
	res.json(req.post);
};


exports.postByID = function (req, res, next, id) {
	Post.findOne({
		_id: id
	}, function (err, post) {
		if (err) {
			return next(err);
		} else {
			req.post = post;
			next();
		}
	});
};

exports.update = function (req, res, next) {
	Post.findByIdAndUpdate(req.post.id, req.body, function(err, post) {
		if (err) {
			return next(err);
		} else {
			res.json(post);
		}
	});
};

exports.delete = function (req, res, next) {
	req.post.remove(function (err) {
		if(err) {
			return next(err);
		} else {
			res.json(req.post);
		}
	});
};

/**
 * 
exports.listPage = function(req, res, next) {
	User.find({}, {skip: 10, limit: 10}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.listProperties = function(req, res, next) {
	User.find({}, 'username email', function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.listPagination = function(req, res, next) {
	User.find({}, 'username email', {
				skip:10, 
				limit:10 }, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};


 * 
 */
