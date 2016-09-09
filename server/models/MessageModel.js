/**
 * http://usejsdoc.org/
 */


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MessageSchema = new Schema({
	message: {
		type: String
	}
});

mongoose.model('Message', MessageSchema);
