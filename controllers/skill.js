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
  },

  edit: (req, res) => {
    Skill.findOne({ _id: req.params.id }).then(skills => {
      res.render("skill/edit", { skills });
    });
  },

  update: (req, res) => {
    Skill.findOne({
      _id: req.params.id
    }).then(skills => {
      skills.name = req.body.name;
      skills.description = req.body.description;

      skills.save(err => {
        if (err) return res.status(500).send(err);
        res.redirect("/skill");
      });
    });
  },

  delete: (req, res) => {
    Skill.findByIdAndRemove({ _id: req.params.id }).then(skills => {
      res.redirect("/skill");
    });
  }
};
