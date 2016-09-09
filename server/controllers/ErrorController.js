/**
 * http://usejsdoc.org/
 */

exports.handleError = function (err, res, next) {
	console.log('Came inside handle function');
	res.render('error/errorMsg', {
		title: 'Error Message',
		err: err
	});
	console.log(err);
};
