// const express = require("express");
// const router = require("../routes/index");

module.exports = {
  index: (req, res) => {
    res.send("index");
  },

  new: (req, res) => {
    res.send("new");
  },

  create: (req, res) => {
    res.send("create");
  },

  show: (req, res) => {
    res.send("show");
  },

  edit: (req, res) => {
    res.send("edit");
  },

  update: (req, res) => {},

  delete: (req, res) => {}
};
