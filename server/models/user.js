const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//building the user schema...
const UserSchema = new Schema({
  uname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;