const express = require("express"); // Create an express application
const cors = require("cors");
require("./utils/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/users", require("./modules/users/index"));

module.exports = app;
