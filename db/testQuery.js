const { Employee } = require("../models/index");

// this is a great mongoose query for Employee index
Employee.find({})
  .populate("skills")
  .exec((err, employees) => {
    if (err) console.log(err);

    // console.log(employees);

    res.render("emolyee/index", { employees });
  });
