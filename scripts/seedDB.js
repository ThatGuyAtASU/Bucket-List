const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bucketlistdb");

const itemsSeed = [
  {
    title: "Bungee Jumping",
    image: "https://via.placeholder.com/150",
    isDone: false,
    likes: 0
  },
  {
    title: "Hot Air Balloon Ride",
    image: "https://via.placeholder.com/150",
    isDone: false,
    likes: 0
  },
  {
    title: "Attend Mardi Gras",
    image: "https://via.placeholder.com/150",
    isDone: false,
    likes: 0
  }
];

db.Item.remove({})
  .then(() => db.Item.collection.insertMany(itemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });