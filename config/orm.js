var connection = require('./connection.js')

var orm = {
    //select all
    selectAll: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
    //more stuf here 
    //insert new burger here
    insertNewBurger: function (userInput, cb) {
		var queryString =  'INSERT INTO burgers_db (burger_name) VALUES (?)'
		connection.query(queryString, userInput, function (err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    
    updateBurger: function (updateBurger, cb) {
		var queryString = 'UPDATE burgers_db SET devoured = 1 WHERE id = ?'
		connection.query(queryString, updateBurger, function (err, result) {
			if (err) throw err;
			cb(result);
		});
    }
}

module.exports = orm

