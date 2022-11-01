const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  workemail: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  companysize: {
    type: String,
    required: true,
  },
  jobtitle: {
    type: String,
    required: true,
  },
  training: {
    type: String,
    required: true,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
