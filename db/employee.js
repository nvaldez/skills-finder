const { Employee } = require("../models/index");

// Always start by deleting everything
Employee.remove({}).then(function() {
  // Then create "seed" items
  Employee.create({
    name: "Neftali",
    title: "Web Developer",
    contact: {
      email: "neftalivaldez1@gmail.com",
      phone: "123-456-7891",
      gitHub: "nvaldez"
    },
    department: "Engineer",
    location: "Washington, DC",
    specialty: "Back-End Developer",

    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skill"
      }
    ]
  });

  Employee.create({
    name: "Hammad",
    title: " Software Engineer",
    contact: {
      email: "hammad@gmail.com",
      phone: "123-456-7891",
      gitHub: "not sure"
    },
    department: "Engineer",
    location: "New York, NY",
    specialty: "Full Stack",

    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skill"
      }
    ]
  });
});
