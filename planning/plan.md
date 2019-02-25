# Project Plan

## Models

### User Model

```
User: Model
    Name: String
    Employeed: true or false
    Skills (Array ref Skill)

```

### Profile Model (Subdocument to User model)

```
Profile: Model
        Contact: String
        Department: String
        Location: String
```

### Skill Model

```
Skill: Model
Title: String
Description?? : String

```
