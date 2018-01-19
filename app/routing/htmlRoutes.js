var path = require("path");

function expressify(app) 
	{
		app.get("/", function(req, res) {
		  res.sendFile(path.join(__dirname, "/../public/home.html"));
		});

		app.get("/survey", function(req, res) {
		  res.sendFile(path.join(__dirname, "/../public/survey.html"));
		});

		app.get("/home", function(req, res) {
		  res.sendFile(path.join(__dirname, "/../public/home.html"));
		});
	}

	module.exports = expressify;