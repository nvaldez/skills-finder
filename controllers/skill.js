const { Employee, Skill } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Skill.find({}).then(skills => {
      res.render("skill", { skills });
    });
  },

  new: (req, res) => {
    res.render("skill/new");
  },

  create: (req, res) => {
    const { name, description } = req.body;
    Skill.create({
      name,
      description
    }).then(skills => {
      res.redirect("skill");
    });
  },

  show: (req, res) => {
    Skill.findOne({ _id: req.params.id }).then(skills => {
      res.render("skill/show", { skills });
    });
  }

  //   edit: (req, res) => {
  //     // res.send("working");
  //     Employee.findOne({ _id: req.params.id }).then(employee => {
  //       res.render("employee/edit", { employee });
  //     });
  //   },

  //   update: function(req, res) {
  //     Employee.findOne({
  //       _id: req.params.id
  //     }).then(employee => {
  //       employee.name = req.body.name;
  //       employee.title = req.body.title;
  //       employee.contact.email = req.body.contact.email;
  //       employee.contact.phone = req.body.contact.phone;
  //       employee.contact.github = req.body.contact.github;
  //       employee.department = req.body.department;
  //       employee.location = req.body.location;
  //       employee.specialty = req.body.specialty;

  //       console.log(employee.contact.email);

  //       employee.save(err => {
  //         if (err) return res.status(500).send(err);
  //         res.redirect("/");
  //       });
  //     });
  //   },

  //   delete: function(req, res) {
  //     Employee.findByIdAndRemove({ _id: req.params.id }).then(employee => {
  //       res.redirect("/");
  //     });
  //   }
};
