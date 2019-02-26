const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/skill");
mongoose.Promise = Promise;

module.exports = mongoose;
