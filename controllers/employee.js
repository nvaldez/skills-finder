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
    res.render("employee/index");
  },

  show: (req, res) => {
    res.render("employee/show");
  },

  edit: (req, res) => {
    res.render("employee/edit");
  },

  update: (req, res) => {
    res.send("update");
  },

  delete: (req, res) => {
    res.send("delete");
  }
};
