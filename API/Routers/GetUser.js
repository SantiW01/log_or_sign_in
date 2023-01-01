const express = require("express");
const UserModel = require("../Model/UserModel");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const users = await UserModel.findOne({
      email: request.body.user_email,
      password: request.body.user_password,
    });
  } catch {
    res.status(500).json({ message: "Email or password wrong. Try again" });
  } finally {
    res.status(201).json({ message: "Sign in" });
  }
});
module.exports = router;
