var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3115;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



// Starts the server to begin listening
// =============================================================
app.listen( process.env.PORT|| PORT, function() {
  console.log("App listening on PORT " + PORT);
});
