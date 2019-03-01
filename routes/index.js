const express = require("express");
const router = express.Router();
const { Employee, Skill } = require("../models/index");
const authenticatedUser = require("../utils/authenticatedUser");

router.get("/", authenticatedUser, function(req, res) {
  Skill.find({}).then(skills => {
    res.render("landing-page", { skills, success: req.flash("success") });
  });
});

router.use(require("./user"));
router.use("/employee", authenticatedUser, require("./employee"));
router.use("/skill", authenticatedUser, require("./skill"));

module.exports = router;
