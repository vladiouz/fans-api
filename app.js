require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const fanRoute = require("./routes/fans");

app.use("/fans", fanRoute);

app.get("/", (req, res) => {
  res.send("home");
});

//connect to database
const db_connection = process.env.DB_CONNECTION;
mongoose.connect(db_connection).then(console.log("connected"));

//listening port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
