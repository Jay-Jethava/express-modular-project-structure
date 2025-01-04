const express = require("express"); // Create an express application
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("./utils/db");

const app = express();

const limiter = rateLimit({
  max: 1000,
  windowMS: 1000 * 60,
  message: "Too many requests",
});

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(limiter);

app.use("/api/v1/users", require("./modules/users/index"));

// changes added from remote

module.exports = app;
