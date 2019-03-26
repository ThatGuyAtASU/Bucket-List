const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("mongoose");

const user = require("./routes/api/user");
const items = require("./routes/api/items");

//Initialize App
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
=======
app.use(express.static("public"));
>>>>>>> c8b6694a68657ca9bf4ea70c4f860561ce180444

//Connect to MongoDB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bucketlistdb";

mongoose.connect(MONGODB_URI);

//Define API Routes
app.use("/api/user", user);
app.use("/api/items", items);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
