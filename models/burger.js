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
	updateBurger: function () {
// 
	}
};

module.exports = burger