const express = require("express");
const router = express.Router();
const { Employee, Skill } = require("../models/index");

router.get("/", function(req, res) {
  Skill.find({}).then(skills => {
    res.render("landing-page", { skills });
  });
});

router.use("/employee", require("./employee"));
router.use("/skill", require("./skill"));

module.exports = router;
