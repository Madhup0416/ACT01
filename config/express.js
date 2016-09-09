/**
 * http://usejsdoc.org/
 */


var config = require('./config'),
	stylus = require('stylus'),
	express = require('express'),
	morgan = require('morgan'),
	compress = require('compression'),
	bodyParser = require('body-parser'),
	expressSession = require('express-session'),
	methodOverride = require('method-override'),
	passport = require('passport');

module.exports = function() {
	var app = express();

	function compile(str, path) {
	  return stylus(str).set('filename', path);
	}

	app.use(stylus.middleware({
	    src: __dirname + '/public',
	    compile: compile
	  }
	));
	
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use('compress');
	}

	app.use(bodyParser.urlencoded({
		extended:true
	}));

	app.use(bodyParser.json());
	app.use(methodOverride('_method'));
	
	app.use(expressSession({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	}));

//	app.set('views', __dirname + '/server/views');
	app.set('views', './server/views');
	app.set('view engine', 'pug');

	app.use(passport.initialize());
	app.use(passport.session());
	
//	app.use(express.static(__dirname + '/public'));
	
	app.use(express.static('./public'));
	
	require('../server/routes/IndexRoute.js') (app);
	require('../server/routes/MessageRoute.js') (app);

	return app;
};
//  require('../server/routes/IndexRoute.js') (app);
//	require('../server/routes/UserRoute.js') (app);
//	require('../server/routes/PostRoute.js') (app);
//	require('../server/routes/ErrorRoute.js') (app);


	
// mongodb://username:password@hostname:port/database
	
//	var uri = 'mongodb://localhost/mean-book';
//	var db = require('mongoose').connect('uri');
	
