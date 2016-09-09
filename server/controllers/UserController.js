/**
 * http://usejsdoc.org/
 */

var User = require('mongoose').model('User');
var ErrorHandler = require('./ErrorController');

exports.create = function(req, res, next) {
	var user = new User(req.body);
	console.log(JSON.stringify(user));

	user.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
			console.log('User was saved');
		}
	});
};

exports.createNewOne = function(req, res, next) {
	var user = new User(req.body);
	console.log(JSON.stringify(user));

	user.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
			console.log('User was saved');
		}
	});
};


exports.createNew = function(req, res, next) {
	var user = new User(req.body);
	var _this = this;
	console.log(JSON.stringify(user));

	user.save(function(err, handle) {
		if (err) {
			console.log('came for handle');
			ErrorHandler.handleError(err, res, next);
		} else {
//			res.json(user);
//			_this.listNew(req, res, next);
			User.find({}, function(err, users) {
				if (err) {
					ErrorHandler.handleError(err, res, next);
				} else {
					//res.render()
					res.render('users/userList', {
						title: 'User List',
						users: users
					});
				}
			});
			console.log('User was saved');
		}
	});
};

exports.list = function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.listNew = function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			ErrorHandler.handleError(err, res, next);
		} else {
			//res.render()
			res.render('users/userList', {
				title: 'User List',
				users: users
			});
		}
	});
};

exports.listPage = function(req, res, next) {
	User.find({}, {skip: 10, limit: 10}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.listPageNew = function(req, res, next) {
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

exports.read = function (req, res) {
	console.log('Inside Read OLD');
	res.json(req.user);
};

exports.readNew = function (req, res, user) {
	console.log('Inside Read New');
	res.render('users/userProfile', {
		title: 'User Profile',
		user: req.user
	});
};

exports.sendCreate = function (req, res) {
	console.log('Inside Send Create');
	res.render('users/createUser', {
		title: 'Create User Profile'
//		user: req.user
	});
};

exports.userIndex = function (req, res) {
	console.log('Inside User Index');
	res.render('./userIndex', {
		title: 'User Index'
//		user: req.user
	});
};


exports.userByID = function (req, res, next, id) {
	console.log('The id is ' + id);
	console.log('Retrieving id from request ' + req.params.UserName);
	var possibleId;
/**
	if (id.match(/^[0-9a-fA-F]{24}$/)) {
		console.log('ID matches the string');
		possibleId = id;
	} else {
		possibleId = id + '';
		console.log('Get New User ID');
	}
*/
	User.findOne ({
//		username: id
//		_id: req.params.userId
		_id: id
	}, function (err, user) {
		if (err) {
			console.log('Could not use Find One');
			return next(err);
		} 
		if (!user) {
			console.log('No User Found');
			res.send('No User Exists');
		}
		console.log('successfully searched the user '+user.fullName);
		req.user = user;
		console.log('Req User Full Name ' + req.user.id);
		next();
	});
};

exports.update = function (req, res, next) {
	console.log('Req User ID ' + req.user.id);
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

exports.updateNew = function (req, res, next) {
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
		if (err) {
			return next(err);
		} else {
			console.log('Req User ID ' + req.user.id);
			res.json(user);
		}
	});
};

exports.updateNewDB = function (req, res, next, id) {
	console.log('Req User ID ' + req.user.id);
	User.findOneAndUpdate({_id: id}, req.body, function(err, user) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

exports.delete = function (req, res, next) {
	req.user.remove(function (err) {
		if(err) {
			return next(err);
		} else {
			res.json(req.user);
		}
	});
};