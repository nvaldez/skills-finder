const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Employee = new Schema({
  name: String,
  title: String,
  contact: {
    email: String,
    phone: String,
    github: String
  },
  department: String,
  location: String,
  specialty: String,

  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill"
    }
  ]
});

module.exports = Employee;
