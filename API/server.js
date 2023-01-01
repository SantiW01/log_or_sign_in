require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DataBase"));

app.use(express.json());
app.use(cors());

const postUser = require("./Routers/PostUsers");
app.use("/insert", postUser);

const getUsers = require("./Routers/GetUsers");
app.use("/get", getUsers);

const findUser = require("./Routers/GetUser");
app.use("/find", findUser);

const deleteUser = require("./Routers/DeleteUsers");
app.use("/delete", deleteUser);

app.listen(8080, () => {
  console.log("Server listening at 8080");
});
