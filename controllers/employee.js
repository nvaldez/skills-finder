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
    const {
      name,
      title,
      email,
      phone,
      contact,
      department,
      location,
      specialty
    } = req.body;
    Employee.create({
      name,
      title,
      email,
      phone,
      contact,
      department,
      location,
      specialty
    }).then(employee => {
      res.redirect("/employee");
    });
    // console.log(name);
    // console.log(title);
    // console.log(contact[email]);
    // console.log(contact[phone]);
    // console.log(contact[github]);
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
