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

  update: function(req, res) {
    Employee.findOne({
      _id: req.params.id
    }).then(employee => {
      employee.name = req.body.name;
      employee.title = req.body.title;
      employee.contact.email = req.body.contact.email;
      employee.contact.phone = req.body.contact.phone;
      employee.contact.github = req.body.contact.github;
      employee.department = req.body.department;
      employee.location = req.body.location;
      employee.specialty = req.body.specialty;

      console.log(employee.contact.email);

      employee.save(err => {
        if (err) return res.status(500).send(err);
        res.redirect("/");
      });
    });
  },

  delete: function(req, res) {
    Employee.findByIdAndRemove({ _id: req.params.id }).then(employee => {
      res.redirect("/");
    });
  }
};
