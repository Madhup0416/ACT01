/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	publisher: {
		type: String,
		trim: true,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	author: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	website: {
		type: String,
		get: function(url) {
			if(!url){
				return url;
			} else {
				if(url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
				}
			}
		}
	}
});

mongoose.model('Post', PostSchema);

/**
 * 
UserSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
	var splitName = fullName.split(' ');
	this.firstName = splitName[0] || '';
	this.lastName = splitName[1] || '';
});

UserSchema.statics.findOneByUsername = function (username, callback) {
	this.findOne(({ username: new RegExp(username, 'i') }, callback));
};

UserSchema.methods.authenticate = function (password) {
	return this.password === password;
};

UserSchema.pre('save', function(next){
	if (this.password.length > 6) {
		next();
	} else {
		next (new Error ('Error has occured'));
	}
});

UserSchema.post('save', function(next){
	if (this.isNew) {
		next();
	} else {
		console.log('User was updated');
	}
});


UserSchema.set('toJSON', {getters: true, virtuals: true});

 *
 */
