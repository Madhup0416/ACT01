/**
 * http://usejsdoc.org/
 */
exports.hospData = function(req, res, next){
	console.log('Inside hosp data');
	res.render('dataIndex');
	
};

exports.checkhospData = function(req, res, next){
	console.log('Inside check hosp data');
	res.render('partials/checkhosp');
	
};

exports.NGDisp = function(req, res, next){
	console.log('Prior to Params');
	console.log(req.params.partialPath);
	res.render('partials/' + req.params.partialPath);	
	
};
