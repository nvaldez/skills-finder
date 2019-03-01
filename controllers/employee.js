const { Employee, Skill } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Employee.find({})
      .populate("skills")
      .exec((err, employees) => {
        if (err) console.log(err);

        // console.log(employees);

        res.render("employee", { employees });
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
      specialty,
      skill
    } = req.body;
    Employee.create({
      name,
      title,
      email,
      phone,
      contact,
      department,
      location,
      specialty,
      skill
    }).then(employee => {
      res.redirect("/employee");
    });
  },

  show: (req, res) => {
    Employee.findOne({ _id: req.params.id })
      .populate("skills")
      .exec((err, employee) => {
        if (err) console.log(err);
        res.render("employee/show", { employee });
      });
  },

  edit: (req, res) => {
    // res.send("working");
    Employee.findOne({ _id: req.params.id })
      .populate("skills")
      .exec((err, employee) => {
        if (err) console.log(err);
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

      employee.save(err => {
        if (err) return res.status(500).send(err);
        res.redirect("/employee");
      });
    });
  },

  delete: function(req, res) {
    Employee.findByIdAndRemove({ _id: req.params.id }).then(employee => {
      res.redirect("/employee");
    });
  },

  getEmployeeBySkill: (req, res) => {
    Employee.find({ skills: req.params.id })
      .populate("skills")
      .exec((err, employees) => {
        if (err) console.log(err);
        // console.log(employees);
        res.render("employee", { employees });
      });
  }
};
