var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// import friends array
var friends = require('../data/friends.js');

//API Routes
// function to export data
module.exports = function (app) {
  // JSON file that displays all friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // take in JSON newFriend data
  app.post("/api/friends", function (req, res) {

    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };
    console.log("newFriend: " + "name: " + newFriend.name, "photo: " + newFriend.photo, "scores: " + newFriend.scores);

    // array to hold the personality assessment scores for newFriend
    var scoresArray = [];

    // for loop used to cycle though the newFriend's scores and place them in an array
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    newFriend.scores = scoresArray;

    // array to hold the personality assessment scores for friends already in db (to becompared against newFriend's scoreArray)
    var compareScoresArray = [];
    for (var i = 0; i < friends.length; i++) {

      // using for loop cyclw through all users in friends db. For each of the friends in db, compare thier personailty assessment scores against the newFriend's scores, then palce the add up the difference and place in "totalScoreDifference"
      var totalScoreDifference = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        totalScoreDifference += Math.abs(newFriend.scores[j] - friends[i].scores[j])
      }

      // Push the total difference in scores for each run through into the compareScoresArray
      compareScoresArray.push(totalScoreDifference);
    }

    // for each run through, if the current friend is more comaptible with the newFriend (a lower total difference in scores), this current friend becomes the bestMatch
    var bestMatchIndex = 0;
    for (var i = 1; i < compareScoresArray.length; i++) {
      if (compareScoresArray[i] <= compareScoresArray[bestMatchIndex]) {
        bestMatchIndex = i;
      }
    }
    var friendMatch = friends[bestMatchIndex];

    // response is the friend with the lowest total difference in scores
    res.json(friendMatch);

    // push newFriend to the database
    friends.push(newFriend);
  });
}