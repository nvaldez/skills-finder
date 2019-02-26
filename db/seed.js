const { Employee } = require("../models/index");

// Always start by deleting everything
Employee.remove({}).then(function() {
  // Then create "seed" items
  Employee.create({
    name: "Neftali",
    skill: {
      type: Schema.Types.ObjectId,
      ref: "Skill"
    }
  });
});
