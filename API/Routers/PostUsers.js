const express = require("express");
const UserModel = require("../Model/UserModel");
const validator = require("validator");
const router = express.Router();
router.post("/", async function (req, res) {
  const user = new UserModel({
    user_name: req.body.user_name,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ massage: err.massage });
  }
});

module.exports = router;
