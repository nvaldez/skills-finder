// const express = require("express");
// const router = require("../routes/index");

module.exports = {
  index: (req, res) => {
    res.render("employee/index");
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
