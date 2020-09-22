const mongoose = require("mongoose");

const uiqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 7 },
  image: { type: String, required: true },
  places: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }],
});

userSchema.plugin(uiqueValidator);

module.exports = mongoose.model("User", userSchema);
