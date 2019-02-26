const mongoose = require("../db/connection");

module.exports = {
  Employee: mongoose.model("Employee", require("./employee")),
  Skill: mongoose.model("Skill", require("./skill"))
};
