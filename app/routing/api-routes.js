// var friendsData
var tableData = require("../data/table-data.js");

// delete
var waitListData = require("../data/waitingList-data.js");

module.exports = function (app) {

	// change to friendsData
	app.get("/api/tables", function (req, res) {
		res.json(tableData);
	});

	// delete
	app.get("/api/waitlist", function (req, res) {
		res.json(waitListData);
	});

	app.post("/api/tables", function (req, res) {
		newFriend = {};
		newFriend.friendName = req.body.friendName


		if(tableData.length < 5) {
			tableData.push(req.body);
		} else {
			waitListData.push(req.body);
			res.json(false);
		}
	});

	// delete
	app.post("/api/clear", function() {
		tableData = [];
		waitListData = [];

		console.log(tableData);
		console.log(waitListData);

	})


	}
