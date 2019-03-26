const express = require("express");
const router = express.Router();

//Load Item model
const Item = require("../../models/Item");

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
router.post("/", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    image: req.body.image,
    user: req.user.id
  });

  newItem.save().then(item => res.json(item));
});

