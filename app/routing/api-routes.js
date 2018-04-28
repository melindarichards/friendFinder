var friendData = require("../data/friend-data.js");

module.exports = function (app) {

	app.get("/api/tables", function (req, res) {
		res.json(friendData);
	});

	app.post("/api/tables", function (req, res) {
		newFriend = {};
		newFriend.friendName = req.body.friendName


		if(friendData.length < 5) {
			friendData.push(req.body);
		} 
	});

	// delete
	// app.post("/api/clear", function() {
	// 	friendData = [];

	// 	console.log(friendData);

	// })


	}
