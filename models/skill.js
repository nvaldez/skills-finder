const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Skill = new Schema({
  name: Array,
  description: String
});
