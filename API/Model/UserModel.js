const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = mongoose.Schema({
  user_name: {
    type: String,
    required: true,
    unique: true
  },
  user_email: {
    type: String,
    required: true,
    unique: true
  },
  user_password: {
    type: String,
    required: true,
  },
});

userModel.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.user_password, salt);
    this.user_password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("user", userModel);
