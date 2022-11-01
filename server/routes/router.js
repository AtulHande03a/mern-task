const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

// router.get("/", (req, res) => {
//   console.log("connect");
// });

router.post("/register", async (req, res) => {
  const {
    firstname,
    lastname,
    workemail,
    phone,
    companyname,
    companysize,
    jobtitle,
    training,
  } = req.body;

  if (
    !firstname ||
    !lastname ||
    !workemail ||
    !phone ||
    !companyname ||
    !companysize ||
    !jobtitle ||
    !training
  ) {
    res.status(404).json("please add all the details");
  }

  try {
    const preuser = await users.findOne({ workemail: workemail });
    console.log(preuser);

    if (preuser) {
      res.status(404).json("user already present");
    } else {
      const addUser = new users({
        firstname,
        lastname,
        workemail,
        phone,
        companyname,
        companysize,
        jobtitle,
        training,
      });

      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//get user data

router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    console.log(userdata);
    res.status(201).json(userdata);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
