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
    insertNewBurger: function () {
        var query = 'SELECT * FROM burgers_db'
        connection.query(query, function (err, result) {
            console.log(result)
        })
    },
    updateBurger: function () {
        var query = 'SELECT * FROM burgers_db'
        connection.query(query, function (err, result) {
            console.log(result)
        })
    }
}

module.exports = orm

