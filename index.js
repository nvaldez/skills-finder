const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;

const methodOverride = require("method-override");

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

// app.use(require("./routes/index.js"));

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(4000, () => {
  console.log("\napp listening on port 4000\n\n");
});
