const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Skill = new Schema({
  name: String,
  description: String
});

module.exports = Skill;
