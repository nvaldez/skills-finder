# Project Plan

## Models

### Employee Model

For this model, user will be able to create, read, update, and delete. The only time a user will be deleted is when an employee is not longer working for the company.

```
name: String,
  title: String,
  contact: {
    email: String,
    phone: String,
    github: String
  },
  department: String,
  location: String,
  specialty: String,

  skills: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill"
    }
  ]

```

### Skill Model

For this model, user will be able to create, read, update, and delete.

```
name: String,
description: String

```
