const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("mongodb").MongoClient;

const methodOverride = require("method-override");

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
