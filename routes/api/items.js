const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Item model
const Item = require("../../models/Item");
const User = require("../../models/User");

// GET api/items/test
// Tests items route
// Public
router.get("/test", (req, res) => res.json({ msg: "Items Works" }));

// GET api/items/
// Retrieves all items
// Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
});

//  GET api/items/:id
//  Retrieves item by id
//  Public
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ noitemfound: "No item found with that ID" });
      }
    })
    .catch(err =>
      res.status(404).json({ noitemfound: "No item found with that ID" })
    );
});

// POST api/items
// @desc    Create post
// @access  Public
router.post("/:id", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    image: req.body.image
  });


  newItem.save().then(item => {

    console.log(`Created Item : ${item}`);

    User.findByIdAndUpdate(req.params.id, { $push: { items: item._id } }).then(res => {
      res.json(res);
    });
  }).then(function (Item) {
    res.json(Item);
  })
    .catch(function (err) {
      res.json(err);

    });
});

// POST api/items
// @desc Create post
// @access Public
router.put("/likes/:id",
  (req, res) => {
    Item.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          likes: req.body.id
        }
      },
      { new: true, upsert: true }
    ).then(dbItems => {
      res.json(dbItems);
    });
  });


// POST api/items
// @desc    Create post
// @access  Public
router.post("/:id", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    image: req.body.image
  });


  newItem.save().then(item => {

    console.log(`Created Item : ${item}`);

    User.findByIdAndUpdate(req.params.id, { $push: { items: item._id } }).then(res => {
      res.json(res);
    });
  }).then(function (Item) {
    res.json(Item);
  })
    .catch(function (err) {
      res.json(err);

    });
});

module.exports = router;