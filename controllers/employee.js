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
      res.render("employee/edit", { employee });
    });
  },

  update: (req, res) => {
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
    Employee.findOneAndUpdate({ _id: req.params.id }).then(employee => {
      employee.name = name;
      employee.title = title;
      employee.email = email;
      employee.phone = phone;
      employee.contact = contact;
      employee.department = department;
      employee.location = location;
      employee.specialty = specialty;

      employee.save(err => {
        res.send("update working");
        console.log(req.body);
      });
    });
  },

  delete: function(req, res) {
    Employee.findByIdAndRemove({ _id: req.params.id }).then(employee => {
      res.redirect("/");
    });
  }
};
