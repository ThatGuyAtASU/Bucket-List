const mongoose = require("mongoose");

//Load User model
const Item = require("../models/Item");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bucketlistdb");

const itemsSeed = [
  {
    title: "Bungee Jumping",
    image:
      "https://images.thrillophilia.com/image/upload/s--xVW2MPNO--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/053/325/original/3.jpg.jpg?1453320254",
    isDone: false,
    likes: 0
  },
  {
    title: "Hot Air Balloon Ride",
    image:
      "https://www.ushotairballoon.com/wp-content/uploads/2018/05/chester-county-hot-air-balloon-ride.jpg",
    isDone: false,
    likes: 0
  },
  {
    title: "Attend Mardi Gras",
    image:
      "https://www.neworleansparadetickets.com/assets/no-mardi-gras-parade-tickets-9eba96d32abe611ceeaaf0e5dbf5639c.jpg",
    isDone: false,
    likes: 0
  }
];

Item.remove({})
  .then(() => Item.collection.insertMany(itemsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
