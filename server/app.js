const express = require("express");
const app = express();

require("dotenv").config();
const mongoose = require("mongoose");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

const port = 8000;
require("./db/connect");

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use(router);

app.listen(port, () => {
  console.log(`server running on localhost: ${port}`);
});
