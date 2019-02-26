# Project Plan

## Models

### Employee Model

For this model, user will be able to create, read, update, and delete. The only time a user will be deleted is when an employee is not longer working for the company.

```
User: Model
    Name: String
    Skills (Array ref Skill)

```

### Profile Model (Subdocument to User model)

For this model, user will be able to create, read, and update.

```
Profile: Model
        Contact: String
        Department: String
        Location: String
```

### Skill Model

For this model, user will be able to create, read, and update.

```
Skill: Model
Name: String
Description?? : String

```
