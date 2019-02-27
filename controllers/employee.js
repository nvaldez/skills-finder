// const express = require("express");
// const router = require("../routes/index");
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
      github,
      department,
      location,
      specialty
      // skills
    } = req.body;
    Employee.create({
      name,
      title,
      email,
      phone,
      github,
      department,
      location,
      specialty
      // skills
    }).then(item => {
      res.redirect("/");
    });
  },

  show: (req, res) => {
    Employee.findOne({ _id: req.params.id }).then(employee => {
      res.render("employee/show", { employee });
    });
  },

  edit: (req, res) => {
    Employee.findOne({ _id: req.params.id }).then(employee => {
      const {
        name,
        title,
        email,
        phone,
        github,
        department,
        location,
        specialty
        // skills
      } = req.body;
      employee.save(err => {
        res.redirect(`/${employee._id}/edit`);
      });
    });
    res.render("employee/edit");
  },

  update: (req, res) => {
    res.send("update");
  },

  delete: (req, res) => {
    res.send("delete");
  }
};
