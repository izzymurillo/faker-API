// import { faker } from '@faker-js/faker';
// ^^^^  ES6 MODULE SYNTAX
// WE HAVE TO CHANGE IT TO COMMON JS
// SERVER = OLD = PRE ES6 = "COMMON JS"

const express = require("express");
const app = express();

const { User } = require("./models/user.model");
const { Company } = require("./models/company.model");

app.get("/api/users/new", (req, res) => {
  const newUser = new User();
  // ^^^ make an instance of User
  res.status(201).json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = new Company();
    // ^^^ make an instance of Company
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  res.json({ user: new User(), company: new Company() });
  // sent back an object with 2 keys ^^^
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
