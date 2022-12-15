require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DataBase"));

app.use(express.json());

const postSubscribers = require("./Routers/PostSubscribers");
app.use("/insert", postSubscribers);

const getSubscriber = require("./Routers/GetSubscribers");
app.use("/get", getSubscriber);

app.listen(8080, () => {
  console.log("Server listening at 8080");
});
