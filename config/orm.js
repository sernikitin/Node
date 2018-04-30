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
    updateBurger: function () {
        var query = 'SELECT * FROM burgers_db'
        connection.query(query, function (err, result) {
            console.log(result)
        })
    }
}

module.exports = orm

