const express = require("express");
const UserModel = require("../Model/UserModel");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
