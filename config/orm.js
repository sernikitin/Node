var connection = require('./connection.js')

var orm = {
    //select all
    selectAll: function (tableInput, table_output) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			table_output(result);
		});
	},
    //more stuf here 
    //insert new burger here
    insertNewBurger: function (userInput, insert_output) {
		var queryString =  'INSERT INTO burgers_db (burger_name) VALUES (?)'
		connection.query(queryString, userInput, function (err, result) {
			if (err) throw err;
			insert_output(result);
		});
    },
    
    updateBurger: function (userInput, insert_output) {
		var queryString = 'UPDATE burgers_db SET devoured = ? WHERE id = ?'
		connection.query(queryString, userInput, function (err, result) {
			if (err) throw err;
			insert_output(result);
		});
    }
}

module.exports = orm

