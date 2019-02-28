const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/employee");
});

router.use("/employee", require("./employee"));
router.use("/skill", require("./skill"));

module.exports = router;
