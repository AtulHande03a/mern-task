const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
