const { Skill } = require("../models/index");

Skill.find({}).then(skills => {
  //   console.log(skills);
  let employeeSkills = ["NodeJS", "JavaScript", "Express"];
  //   console.log(employeeSkills);

  //   console.log(skills.find(skill => skill.name === "JavaScript"));

  //   employeeSkills.map(skillName => {
  //     console.log(skillName);
  //   });

  employeeSkills = employeeSkills.map(skillName => {
    let match = skills.find(skill => skill.name === skillName);

    return match._id;
  });

  console.log(employeeSkills);
});
