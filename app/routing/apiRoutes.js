var path = require("path");
var friends = require("../data/friends");


function expressify(app) 
	{
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
  var newfriends = req.body;

  console.log(newfriend);

friends.push(newfriend);

  res.json(newfriend);
});

}

module.exports = expressify;