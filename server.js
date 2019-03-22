const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
//const logger = require("morgan");
//const router = express.Router();

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/bucketlistdb", { useNewUrlParser: true});



// Define API routes here

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + ))
})

app.get("/api/",function(req,res) {
  db.Item.findAll()
});

app.get("", function(req,res) {
  db.Item.findOne()
});

app.post("", function(req,res) {
  db
})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
