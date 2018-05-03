var orm = require('../config/orm.js')

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers_db', function (res) {
			cb(res);
		});
	},
	insertNewBurger: function (userInput, cb) {
		orm.insertNewBurger(userInput,  function (res) {
			cb(res);
		});
	},
	updateBurger: function(toDelete, cb) {
		orm.updateBurger(toDelete, function(res) {
		  cb(res);
		});
	  }
};

module.exports = burger