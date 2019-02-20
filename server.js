const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Database
const db = require("./models");
// const Song = db.Song;
const User = db.User;

// Configures Body Parser to Receive Form-Data
app.use(bodyParser.urlencoded({ extended: true }));

// Serves static files from the Public Folder
app.use(express.static(__dirname + "/public"));

// ENDPOINTS HERE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/////////////
// API Routes
/////////////

////
// Songs
////

// Show all Songs
app.get("/api/songs", (req, res) => {
  db.Song.find({}, (err, songs) => {
    if (err) console.error("Error finding all songs");
    res.json(songs);
  });
});

app.get("/api/songs/:state", (req, res) => {
  db.Song.find({ state: req.params.state }, (err, songs) => {
    if (err) console.error("Error finding all songs");
    res.json(songs);
  });
});

//

////
// Users
////

// Show all Users
app.get("/api/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) console.error("Error finding all users");
    res.json(users);
  });
});

/// Set up server listening
app.listen(process.env.PORT || 3000, () => console.log(`Server is listening.`));
