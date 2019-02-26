const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee = new Schema({
  name: String,
  skill: {
    type: Schema.Types.ObjectId,
    ref: "Skill"
  },

  profile: [Profile]
});

const Profile = new Schema({
  contact: String,
  department: String,
  location: String
});

module.exports = Employee;
