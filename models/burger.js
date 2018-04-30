var orm = require('../config/orm.js')

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers_db', function (res) {
			cb(res);
		});
	},
	insertNewBurger: function (col, val, cb) {
		orm.insertNewBurger('burgers_db', col, val, function (res) {
			cb(res);
		});
	},
	updateBurger: function (objColVal, condition, cb) {
		orm.updateBurger('burgers_db', objColVal, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger