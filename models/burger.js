var orm = require('../config/orm.js')

var burger = {
	selectAll: function (table_output) {
		orm.selectAll('burgers_db', function (res) {
			table_output(res);
		});
	},
	insertNewBurger: function (userInput, insert_output) {
		orm.insertNewBurger(userInput,  function (res) {
			insert_output(res);
		});
	},
	updateBurger: function (objColVal, condition, table_output) {
		orm.updateBurger('burgers_db', objColVal, condition, function (res) {
			table_output(res);
		});
	}
};

module.exports = burger