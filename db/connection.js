const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/skillFinder");
mongoose.Promise = Promise;

module.exports = mongoose;
