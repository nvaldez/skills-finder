const { Employee, Skill } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Employee.find({}).then(employees => {
      res.render("employee/index", { employees });
    });
  },

  new: (req, res) => {
    res.render("employee/new");
  },

  create: (req, res) => {
    console.log(req.body);
    res.redirect("/employee/new");
  },

  show: (req, res) => {
    Employee.findOne({ _id: req.params.id }).then(employee => {
      res.render("employee/show", { employee });
    });
  },

  edit: (req, res) => {
    // res.send("working");
    Employee.findOne({ _id: req.params.id }).then(employee => {
      res.render("employee/edit");
    });
  },

  update: (req, res) => {
    res.send("update");
  },

  delete: (req, res) => {
    res.send("delete");
  }
};
