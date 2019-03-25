const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load User model
const User = require("../../models/User");

//  GET api/user/test
//  Tests users route
//  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//  POST api/user/register
//  Registers user
//  Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

//  GET api/user/login
//  Login User / Returning JWT Token
//  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, image: user.image }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        ///errors.password = "Password incorrect";
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
});

//  GET api/user/current
//  Returns current user
//  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

//  PUT api/user/add
//  Adds to Users saved Bucket List Items
//  Private
router.get(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findByIdAndUpdate(
      req.user._id,
      {
        $push: {
          items: req.body.id
        }
      },
      { new: true }
    ).then(dbItems => {
      res.json(dbItems);
    });
  }
);

//  GET api/user/savedItems
//  Returns users saved Bucket List Items
//  Private
router.get(
  "/savedItems",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user._id).then(user => {
      const bucketItems = user.items;
      if (bucketItems.length === 0) {
        res.json({ bucketItems: [] });
      } else {
        res.json({
          id: req.user.id,
          name: req.user.name,
          items: req.user.items
        });
      }
    });
  }
);

//  DELETE api/user/removeItem/:id
//  Deletes users saved Bucket List Items
//  Private
router.delete(
  "/removeItem/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { items: parseInt(req.params.id) } },
      { safe: true, upsert: true }
    )
      .then(result => console.log("Result", result))
      .catch(err => console.log("ERROR", err));
    res.send("Delete route hit");
  }
);

router.get("/populatedUser", function(req, res) {
  console.log("populatedUser")
  User
  .find({email: req.user.email})
  .populate("items")
  .then(function(dbUser) {
    res.json(dbUser);
  });
});

module.exports = router;
