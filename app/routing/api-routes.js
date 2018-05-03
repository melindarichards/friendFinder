var friendData = require("../data/friend-data.js");

module.exports = function (app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function (req, res) {
		console.log(req.body);
		var newFriend = {};
		newFriend.friendName = req.body.friendName;
		newFriend.friendPhoto = req.body.friendPhoto;
		newFriend.friendScores = req.body.friendScores;

		var totalScores = [];

	// This outer for loop goes through each friend in my friendArray variable	
		for (let i = 0; i < friendArray.length; i++) {
			var friendForLoop = friendArray[i];

			var totalFriendScore = 0;

			// As the outer for loop goes through each individual friend in friendArray, this inner for loop goes through each number in the friendScores array
			for (let j = 0; j < friendForLoop.friendScores.length; j++) {
				var scoreForLoop = friendForLoop.friendScores[j];

		// This variable calculates the absolute value of the difference between each individual score when comparing the new friend's score on a given question against the score for that same question of the friends already in friendArray
		var absValue = Math.abs(newFriend.friendScores[j] - friendForLoop.friendScores[j]);

		// This adds the absolute value of each question to get a total score for each friend (in other words, it adds up the abs value between Sue's and Bob's answers for q1, q2, q3, etc., then does the same for Sue and John, Sue and Frank, etc.)
		totalFriendScore +=absValue;
		}

		// This pushes the final totalFriendScore (after adding in the abs values for each question) into the array of scores in the variable totalScores.
		totalScores.push(totalFriendScore);
	}

	// This is from stack overflow at https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array. It loops through each number in the array of the variable totalScores and selects the lowest.
    var min = totalScores[0];
    var minIndex = 0;

    for (var i = 1; i < totalScores.length; i++) {
        if (totalScores[i] < min) {
            minIndex = i;
            min = totalScores[i];
        }
    }
	});




// var closestMatch =


// res.json(closestMatch);




	// delete
	// app.post("/api/clear", function() {
	// 	friendData = [];

	// 	console.log(friendData);

	// })


	}
