var mongoose = require("mongoose");

//Schema constructor
var Schema = mongoose.Schema;

//Creating a ItemSchema Object
var ItemSchema = new Schema({
  title: String,
  image: String,
  isDone: { type: Boolean, default: false },
  likes: [
    {
      type: Schema.Types.ObjectId,
        ref: 'users'
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

var Item = mongoose.model("Item", ItemSchema);

//Export the Item model
module.exports = Item;
