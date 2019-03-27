var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
//app.use(express.static(process.cwd() + "/public"));

//app.use(bodyParser.urlencoded({extended: false }));

//Override with POST having ?_method=DELETE
//app.use(methodOverride("_method"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars to do its job
//var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes imported
var routes = require("./controllers/burgersController.js");

app.use(routes);
//app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
