const express = require("express");
const app = express.Router();

var bucketlist = [
    {
        routeName: "bucketlist",
        name: "Take a hot air balloon ride",
    }
];

var recentitems = [{
    routeName: 'recentitems',
    name: "user searches",

}];

var useritems = [{
    routeName: 'useritems',
    name: "recent user items",
}];


app.get("/api/bucketlist", function (req, res) {
    return res.json(bucketlist);
});

app.get("/api/recentitems", function (req, res) {
    return res.json(recentitems);
});

app.get("/api/useritems", function (req, res) {
    return res.json(useritems);
});
// Displays a single character, or returns false
app.get("/api/items/:category", function (req, res) {
    var chosen = req.params.items;

    console.log(chosen);

    for (var i = 0; i < items.length; i++) {
        if (chosen === items[i].routeName) {
            return res.json(items[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/bucketlist", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newList = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newList.routeName = newList.name.replace(/\s+/g, "").toLowerCase();

    console.log(newList);

    characters.push(newList);

    res.json(newList);
});
app.post("/api/postitem", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newItem = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newItem.routeName = newItem.name.replace(/\s+/g, "").toLowerCase();

    console.log(newItem);

    characters.push(newItem);

    res.json(newItem);
});
app.post("/api/createuser", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newUser = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();

    console.log(newUser);

    characters.push(newUser);

    res.json(newUser);
});

module.exports = app;
