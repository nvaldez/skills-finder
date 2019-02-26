const { Skill } = require("../models/index");

// Always start by deleting everything
Skill.remove({}).then(function() {
  // Then create "seed" items
  Skill.create({
    name: "HTML",
    description:
      "Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web"
  });

  Skill.create({
    name: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
  });

  Skill.create({
    name: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
  });

  Skill.create({
    name: "NodeJS",
    description:
      "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser."
  });

  Skill.create({
    name: "Express",
    description:
      "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
  });

  Skill.create({
    name: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
  });

  Skill.create({
    name: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License. "
  });
});
