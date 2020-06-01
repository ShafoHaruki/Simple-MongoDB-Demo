const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const postsRoute = require("./routes/posts");
const cors = require("cors");

//middleware
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("We are on home!!!");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to DB!");
  }
);

//to start listening on the server
app.listen(3000);
