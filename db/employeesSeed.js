const { Employee, Skill } = require("../models/index");

// Always start by deleting everything
Employee.remove({}).then(function() {
  // 1. get all of the Skills from the database (already seeded by `db/skillsSeed`)
  Skill.find({}).then(skills => {
    let employeeSkills = ["HTML", "CSS", ""];
    employeeSkills = employeeSkills.map(skillName => {
      let match = skills.find(skill => skill.name === skillName);
      return match._id;
    });

    // let employeeSkills2 = ["NodeJS", "JavaScript", "React"];
    // employeeSkills2 = employeeSkills2.map(skillName2 => {
    //   let match = skills2.find(skill => skill.name === skillName2);
    //   return match._id;
    // });

    Employee.create({
      name: "Neftali",
      title: "Web Developer",
      contact: {
        email: "neftalivaldez1@gmail.com",
        phone: "123-456-7891",
        github: "nvaldez"
      },
      department: "Engineer",
      location: "Washington, DC",
      specialty: "Back-End Developer",
      // 2. for each Employee, map the skills to have the Object ID and not the String name
      // skills: ["NodeJs", "JavaScript"]
      skills: employeeSkills
    });

    // Employee.create({
    //   name: "Hammad",
    //   title: " Software Engineer",
    //   contact: {
    //     email: "hammad@gmail.com",
    //     phone: "123-456-7891",
    //     gitHub: "not sure"
    //   },
    //   department: "Engineer",
    //   location: "New York, NY",
    //   specialty: "Full Stack",

    //   skills: employeeSkills2
    // });
  });
  // 3. in each Employee query, use the Mongoose#populate method to get the Skill data from the Object Id references
});
