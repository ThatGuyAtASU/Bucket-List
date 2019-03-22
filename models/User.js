var mongoose = require("mongoose");

//Schema constructor
var Schema = mongoose.Schema;

//Creating a UserSchema Object
var UserSchema = new Schema({
        name: {
            type: String,
            required: "Name is Required"
        },
        image: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        },
        email: {
            type: String,
            unique: true,
            required: "Email is required",
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
        },
        password: {
            type: String,
            trim: true,
            required: "Password is Required",
            validate: [
                function(input) {
                    return input.length >=6;
                },
                "Password should be longer."
            ]
        },
        // items is an array that stores ObjectIds
        // The ref property links these ObjectIds to the Item model
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: "Item"
            }
        ]
});

var User = mongoose.model("User", UserSchema);

//Export the User model
module.exports = User;


